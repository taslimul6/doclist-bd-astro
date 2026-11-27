import type {EngagementDb} from './engagement';

const schema=[
  'CREATE TABLE IF NOT EXISTS doctor_loves (doctor_id TEXT NOT NULL, visitor_id TEXT NOT NULL, PRIMARY KEY (doctor_id, visitor_id))',
  'CREATE TABLE IF NOT EXISTS doctor_metrics (doctor_id TEXT PRIMARY KEY NOT NULL, impressions INTEGER NOT NULL DEFAULT 0)',
  'CREATE TABLE IF NOT EXISTS doctor_impressions (doctor_id TEXT NOT NULL, event_id TEXT NOT NULL, PRIMARY KEY (doctor_id, event_id))',
];
let ready:Promise<unknown>|undefined;

/**
 * Cloudflare D1 binding `DB` (wrangler.jsonc). Its prepare/bind/first/run/batch surface is what
 * `EngagementDb` describes. Tables are created on first use (same schema as migrations/0001_engagement.sql).
 */
export async function getEngagementDb(): Promise<EngagementDb> {
  // Imported lazily so Node-based test scripts can load lib/ without the Workers runtime.
  const {env} = await import('cloudflare:workers') as {env: {DB?: unknown}};
  if (!env.DB) throw new Error('ENGAGEMENT_STORE_NOT_CONFIGURED');
  const db = env.DB as unknown as EngagementDb;
  ready ??= db.batch(schema.map(sql => db.prepare(sql))).catch(e => { ready = undefined; throw e; });
  await ready;
  return db;
}
