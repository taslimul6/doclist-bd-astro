globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as database, g as getEnv } from '../../../../chunks/runtime_BF6Ue2r1.mjs';
import { r as records } from '../../../../chunks/doctors_CnVzOYiI.mjs';
export { renderers } from '../../../../renderers.mjs';

async function getEngagementDb() {
  const db = database();
  if (!db) throw new Error("ENGAGEMENT_STORE_NOT_CONFIGURED");
  return db;
}

const doctorIds = new Set(records.map((d) => d.id));
function redisCredentials() {
  const url = (getEnv("UPSTASH_REDIS_REST_URL") || getEnv("KV_REST_API_URL") || "").replace(/\/+$/, "");
  const token = getEnv("UPSTASH_REDIS_REST_TOKEN") || getEnv("KV_REST_API_TOKEN") || "";
  return url && token ? { url, token } : null;
}
async function redisCommand(credentials, command) {
  const response = await fetch(credentials.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command),
    cache: "no-store"
  });
  const payload = await response.json();
  if (!response.ok || payload.error) {
    throw new Error(payload.error || `Redis request failed (${response.status})`);
  }
  return payload.result;
}
async function redisPipeline(credentials, commands) {
  const response = await fetch(`${credentials.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(commands),
    cache: "no-store"
  });
  const payload = await response.json();
  if (!response.ok || !Array.isArray(payload)) {
    throw new Error(!Array.isArray(payload) && payload.error ? payload.error : `Redis pipeline failed (${response.status})`);
  }
  const results = payload.map((item) => {
    if (item.error) throw new Error(item.error);
    return item.result;
  });
  return results;
}
function redisKeys(id) {
  return {
    loves: `doclist:doctor:${id}:lovers`,
    impressions: `doclist:doctor:${id}:impressions`
  };
}
async function readRedisCounts(credentials, id, visitor) {
  const keys = redisKeys(id);
  const [loves, impressionsRaw, loved] = await redisPipeline(credentials, [
    ["SCARD", keys.loves],
    ["GET", keys.impressions],
    ["SISMEMBER", keys.loves, visitor]
  ]);
  return {
    loves: Number(loves || 0),
    impressions: Number(impressionsRaw || 0),
    loved: Number(loved || 0) === 1
  };
}
async function engagementRedis(credentials, id, visitor, action, event) {
  const keys = redisKeys(id);
  if (action === "love") {
    await redisCommand(credentials, ["SADD", keys.loves, visitor]);
  }
  if (action === "impression" && event) {
    const eventKey = `doclist:doctor:${id}:impression-event:${event}`;
    const inserted = await redisCommand(credentials, ["SET", eventKey, "1", "NX", "EX", 172800]);
    if (inserted === "OK") {
      await redisCommand(credentials, ["INCR", keys.impressions]);
    }
  }
  return readRedisCounts(credentials, id, visitor);
}
async function engagementSqlite(id, visitor, action, event) {
  const db = await getEngagementDb();
  if (action === "love") {
    await db.prepare("INSERT OR IGNORE INTO doctor_loves (doctor_id, visitor_id) VALUES (?, ?)").bind(id, visitor).run();
  }
  if (action === "impression" && event) {
    await db.batch([
      db.prepare("INSERT OR IGNORE INTO doctor_metrics (doctor_id, impressions) VALUES (?, 0)").bind(id),
      db.prepare("INSERT OR IGNORE INTO doctor_impressions (doctor_id, event_id) VALUES (?, ?)").bind(id, event),
      db.prepare("UPDATE doctor_metrics SET impressions=impressions+1 WHERE doctor_id=? AND changes()=1").bind(id)
    ]);
  }
  const row = await db.prepare(
    "SELECT (SELECT COUNT(*) FROM doctor_loves WHERE doctor_id=?) AS loves, COALESCE((SELECT impressions FROM doctor_metrics WHERE doctor_id=?),0) AS impressions, EXISTS(SELECT 1 FROM doctor_loves WHERE doctor_id=? AND visitor_id=?) AS loved"
  ).bind(id, id, id, visitor).first();
  return {
    loves: Number(row?.loves || 0),
    impressions: Number(row?.impressions || 0),
    loved: Boolean(row?.loved)
  };
}
async function engagement(id, visitor, action, event) {
  if (!doctorIds.has(id)) throw new Error("UNKNOWN_DOCTOR");
  const redis = redisCredentials();
  if (redis) return engagementRedis(redis, id, visitor, action, event);
  if (getEnv("VERCEL")) {
    throw new Error("ENGAGEMENT_STORE_NOT_CONFIGURED");
  }
  return engagementSqlite(id, visitor, action, event);
}

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
async function handle(request, params, write) {
  const headers = new Headers({ "Cache-Control": "private, no-store", "Vary": "Cookie" });
  const existing = request.headers.get("cookie")?.split(";").map((s) => s.trim()).find((s) => s.startsWith("doclist-visitor="))?.slice("doclist-visitor=".length);
  const visitor = existing && uuid.test(existing) ? existing : crypto.randomUUID();
  if (visitor !== existing) headers.append("Set-Cookie", `doclist-visitor=${visitor}; Path=/; Max-Age=31536000; HttpOnly; SameSite=Lax${new URL(request.url).protocol === "https:" ? "; Secure" : ""}`);
  try {
    let action, event;
    if (write) {
      const origin = request.headers.get("origin");
      if (origin && origin !== new URL(request.url).origin) return Response.json({ error: "Invalid origin" }, { status: 403, headers });
      if (Number(request.headers.get("content-length")) > 1024) return Response.json({ error: "Invalid request" }, { status: 413, headers });
      let body;
      try {
        body = await request.json();
      } catch {
        return Response.json({ error: "Invalid request" }, { status: 400, headers });
      }
      if (!body || !["love", "impression"].includes(String(body.action)) || body.action === "impression" && (typeof body.event !== "string" || !uuid.test(body.event))) return Response.json({ error: "Invalid request" }, { status: 400, headers });
      action = body.action;
      event = body.event;
    }
    return Response.json(await engagement((await params).id, visitor, action, event), { headers });
  } catch (error) {
    if (error instanceof Error && error.message === "UNKNOWN_DOCTOR") return Response.json({ error: "Doctor not found" }, { status: 404, headers });
    console.error("Doctor engagement unavailable", error);
    return Response.json({ error: error instanceof Error && error.message === "ENGAGEMENT_STORE_NOT_CONFIGURED" ? "Engagement storage is not configured" : "Counts are temporarily unavailable" }, { status: 503, headers });
  }
}
const GET = ({ request, params }) => handle(request, Promise.resolve({ id: params.id || "" }), false);
const POST = ({ request, params }) => handle(request, Promise.resolve({ id: params.id || "" }), true);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
