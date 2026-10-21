# Deploy DocList BD on Cloudflare Pages

This package runs Astro on **Cloudflare Pages**, including Pages Functions. All existing public route patterns, bilingual content, filters, pagination, SEO decisions, scheduled releases, sitemaps and local portraits are retained. It does not require Next.js or Vercel.

## Recommended: Git integration

1. Extract this ZIP and put its contents at your repository root. Replace the previous Next.js project files with this package; do not place it inside the old `app` directory.
2. In Cloudflare → Workers & Pages → Create application → Pages, connect your Git repository.
3. Set these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | The directory containing this `package.json` |
| Node version | `22` (set `NODE_VERSION=22` if needed) |
| Compatibility flag | `nodejs_compat` (also included in `wrangler.jsonc`) |

4. Set the counter storage secrets below in both Production and Preview as needed.
5. Deploy. Add your existing `doclist-bd.com` domain through Pages → Custom domains. Your existing saved lists and visitor cookies remain available when you keep the same domain and HTTPS.

This is a server-rendered Astro application. Use Git integration or Wrangler deployment; uploading the source ZIP through a static drag-and-drop uploader does not install dependencies or deploy the server functions.

## Keep existing love/view totals

Copy the **same values used by your current production site** into the Pages project's runtime secrets:

```text
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

The existing aliases `KV_REST_API_URL` and `KV_REST_API_TOKEN` also work. Existing Redis key names, doctor IDs, visitor cookie and event deduplication are preserved. No database credentials are included in this ZIP. Do not create a new Redis database if you want to keep the existing totals.

Without Redis credentials or an initialized D1 binding, the counts API returns an explicit 503 instead of showing fabricated persistent counts. The remaining directory, filters, saved doctors, calls and sharing still operate.

## Optional: Cloudflare D1 storage

Redis takes priority when configured. D1 is available as an alternative persistent backend; switching from Redis to a new D1 database does not automatically copy existing Redis totals.

```bash
npx wrangler d1 create doclist-engagement
```

Add the actual returned database ID to `wrangler.jsonc`:

```json
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "doclist-engagement",
    "database_id": "PASTE_THE_DATABASE_ID_RETURNED_BY_CLOUDFLARE"
  }
]
```

Initialize the schema:

```bash
npx wrangler d1 execute doclist-engagement --remote --file=migrations/0001_engagement.sql
```

For a local D1 test use `--local` instead of `--remote`. Ensure the Production/Preview binding is named exactly `DB` and redeploy after changing bindings. The SQL schema is compatible with the original local SQLite counters.

## Local preview

```bash
npm ci
npm run typecheck
npm test
npm run build
npm run preview
```

Preview runs Cloudflare's local runtime on port 4321. For Redis locally, copy `.dev.vars.example` to `.dev.vars` and fill in your existing credentials. Keep this file private. `npm run dev` runs Astro's development server.

## Deploy from your computer

```bash
npm ci
npm run build
npx wrangler login
npx wrangler pages project create doclist-bd
npm run deploy
```

Skip project creation when it already exists. If your Pages project uses another name, update `name` in `wrangler.jsonc`. Configure runtime secrets/bindings on that project before checking counters.

## Preserved settings

- Google Analytics: `G-SJSQXS7FJ9` on Bengali and English pages.
- Bengali routes remain unprefixed; English remains under `/en`. Legacy `/bn` redirects retain the query string.
- `/my-doc` and `/en/my-doc` keep the same storage key and per-entry 365-day expiry.
- The existing `data/release-schedule.json`, indexing policies and exact 1,000 URLs in `/sitemaps/100.xml` are unchanged.
- The default site/canonical origin remains `https://doclist-bd.com`. If changing domains, set `NEXT_PUBLIC_SITE_URL` for the build and runtime and rebuild.
- Leave `DOCLIST_RELEASE_START` unset to retain the supplied schedule. Set it only if intentionally changing that schedule.
- The optional Astro sessions system is unused; this directory's saved list uses browser localStorage, not a session KV binding.

## Version compatibility

Astro `5.18.2` and `@astrojs/cloudflare` `12.6.13` are pinned for Cloudflare **Pages** compatibility. The newer Cloudflare adapter generation targets Workers rather than Pages. Do not upgrade these major versions without also reviewing the hosting target. Wrangler and all dependencies are recorded in `package-lock.json`.

Official references:

- https://v5.docs.astro.build/en/guides/deploy/cloudflare/
- https://docs.astro.build/en/guides/integrations-guide/cloudflare/#removed-cloudflare-pages-support
- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- https://developers.cloudflare.com/pages/functions/bindings/
