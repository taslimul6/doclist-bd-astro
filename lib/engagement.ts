import {getEnv} from './runtime';
import records from '../data/doctors.json';
import {getEngagementDb} from './engagement-db';

const doctorIds = new Set(records.map(d => d.id));

type Action = 'love' | 'impression';

type RedisReply<T = unknown> = { result?: T; error?: string };

type Counts = {
  loves: number;
  impressions: number;
  loved: boolean;
};

export type Statement = {
  bind(...args: unknown[]): Statement;
  first<T>(): Promise<T | null>;
  run(): Promise<unknown>;
};

export type EngagementDb = {
  prepare(sql: string): Statement;
  batch(statements: Statement[]): Promise<unknown>;
};

function redisCredentials() {
  const url = (
    getEnv('UPSTASH_REDIS_REST_URL') ||
    getEnv('KV_REST_API_URL') ||
    ''
  ).replace(/\/+$/, '');
  const token =
    getEnv('UPSTASH_REDIS_REST_TOKEN') ||
    getEnv('KV_REST_API_TOKEN') ||
    '';

  return url && token ? { url, token } : null;
}

async function redisCommand<T>(credentials: { url: string; token: string }, command: Array<string | number>) {
  const response = await fetch(credentials.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    cache: 'no-store',
  });

  const payload = (await response.json()) as RedisReply<T>;
  if (!response.ok || payload.error) {
    throw new Error(payload.error || `Redis request failed (${response.status})`);
  }
  return payload.result as T;
}

async function redisPipeline<T extends unknown[]>(
  credentials: { url: string; token: string },
  commands: Array<Array<string | number>>,
) {
  const response = await fetch(`${credentials.url}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
    cache: 'no-store',
  });

  const payload = (await response.json()) as Array<RedisReply> | RedisReply;
  if (!response.ok || !Array.isArray(payload)) {
    throw new Error(!Array.isArray(payload) && payload.error ? payload.error : `Redis pipeline failed (${response.status})`);
  }

  const results = payload.map(item => {
    if (item.error) throw new Error(item.error);
    return item.result;
  });
  return results as T;
}

function redisKeys(id: string) {
  return {
    loves: `doclist:doctor:${id}:lovers`,
    impressions: `doclist:doctor:${id}:impressions`,
  };
}

async function readRedisCounts(
  credentials: { url: string; token: string },
  id: string,
  visitor: string,
): Promise<Counts> {
  const keys = redisKeys(id);
  const [loves, impressionsRaw, loved] = await redisPipeline<[number, string | number | null, number]>(credentials, [
    ['SCARD', keys.loves],
    ['GET', keys.impressions],
    ['SISMEMBER', keys.loves, visitor],
  ]);

  return {
    loves: Number(loves || 0),
    impressions: Number(impressionsRaw || 0),
    loved: Number(loved || 0) === 1,
  };
}

async function engagementRedis(
  credentials: { url: string; token: string },
  id: string,
  visitor: string,
  action?: Action,
  event?: string,
) {
  const keys = redisKeys(id);

  if (action === 'love') {
    // SADD is atomic and returns 1 only the first time this visitor loves the doctor.
    await redisCommand<number>(credentials, ['SADD', keys.loves, visitor]);
  }

  if (action === 'impression' && event) {
    // Each client-generated event can increment the view count once. The event key expires
    // after two days so Redis does not accumulate dedupe keys forever.
    const eventKey = `doclist:doctor:${id}:impression-event:${event}`;
    const inserted = await redisCommand<string | null>(credentials, ['SET', eventKey, '1', 'NX', 'EX', 172800]);
    if (inserted === 'OK') {
      await redisCommand<number>(credentials, ['INCR', keys.impressions]);
    }
  }

  return readRedisCounts(credentials, id, visitor);
}

async function engagementSqlite(id: string, visitor: string, action?: Action, event?: string) {
  const db = await getEngagementDb();

  if (action === 'love') {
    await db
      .prepare('INSERT OR IGNORE INTO doctor_loves (doctor_id, visitor_id) VALUES (?, ?)')
      .bind(id, visitor)
      .run();
  }

  if (action === 'impression' && event) {
    await db.batch([
      db.prepare('INSERT OR IGNORE INTO doctor_metrics (doctor_id, impressions) VALUES (?, 0)').bind(id),
      db.prepare('INSERT OR IGNORE INTO doctor_impressions (doctor_id, event_id) VALUES (?, ?)').bind(id, event),
      db.prepare('UPDATE doctor_metrics SET impressions=impressions+1 WHERE doctor_id=? AND changes()=1').bind(id),
    ]);
  }

  const row = await db
    .prepare(
      'SELECT (SELECT COUNT(*) FROM doctor_loves WHERE doctor_id=?) AS loves, COALESCE((SELECT impressions FROM doctor_metrics WHERE doctor_id=?),0) AS impressions, EXISTS(SELECT 1 FROM doctor_loves WHERE doctor_id=? AND visitor_id=?) AS loved',
    )
    .bind(id, id, id, visitor)
    .first<{ loves: number; impressions: number; loved: number }>();

  return {
    loves: Number(row?.loves || 0),
    impressions: Number(row?.impressions || 0),
    loved: Boolean(row?.loved),
  };
}

export async function engagement(
  id: string,
  visitor: string,
  action?: Action,
  event?: string,
): Promise<Counts> {
  if (!doctorIds.has(id)) throw new Error('UNKNOWN_DOCTOR');

  const redis = redisCredentials();
  if (redis) return engagementRedis(redis, id, visitor, action, event);

  // Vercel Functions cannot use a local SQLite file as durable storage.
  // Fail clearly so the API returns 503 until Redis is connected instead of silently
  // pretending counts are persistent.
  if (getEnv('VERCEL')) {
    throw new Error('ENGAGEMENT_STORE_NOT_CONFIGURED');
  }

  // Local development can continue to use SQLite without any external service.
  return engagementSqlite(id, visitor, action, event);
}
