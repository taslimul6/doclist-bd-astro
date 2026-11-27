import type {EngagementDb} from './engagement';

/**
 * Cloudflare D1 binding `DB` (wrangler.jsonc). Its prepare/bind/first/run/batch surface is what
 * `EngagementDb` describes. `local` wrangler/astro dev emulates D1 on disk automatically.
 * Schema: migrations/0001_engagement.sql (npm run db:migrate / db:migrate:local).
 */
export async function getEngagementDb(): Promise<EngagementDb> {
  // Imported lazily so Node-based test scripts can load lib/ without the Workers runtime.
  const {env} = await import('cloudflare:workers') as {env: {DB?: unknown}};
  if (!env.DB) throw new Error('ENGAGEMENT_STORE_NOT_CONFIGURED');
  return env.DB as unknown as EngagementDb;
}
