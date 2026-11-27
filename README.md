## Latest final update

- আমার ডাক্তার / Saved Docs navbar with Save Doc / Remove on cards and profiles; local bookmarks expire 365 days after each save.
- All doctor profiles, 64 district pages, and 8 division pages are live immediately. Remaining new listings follow the daily 30-page schedule.
- Dark-theme SEO statistics use readable text and background colors.
- Additional source-matched local portraits are in public/assets/doctors, with provenance in data/doctor-images.json and results in data/image-collection-report.json.
- Previous slugs, stable IDs, engagement configuration, and the special 100.xml sitemap remain available.

See FINAL_UPDATE_REPORT.md, MY_DOC.md and PUBLICATION_SCHEDULE.md for current behavior and validation.

# Daily publication enabled

See [PUBLICATION_SCHEDULE.md](PUBLICATION_SCHEDULE.md). Old routes remain live; new routes release 30 main pages per day, both languages together. Default first batch: 18 October 2026 at midnight Bangladesh time. Deploy the updated project to activate this schedule.

# National integration update

Read [IMPORT_MAPPING.md](IMPORT_MAPPING.md) for the reusable importer, field adapter, identity policy, validation and reports. Current data is already integrated. Run `npm ci` and `npm run dev` to start locally.

# Doclist Bd — Astro Doctor Directory

Bilingual (Bengali/English) Bangladesh doctor directory on **Astro 7** (server output) deployed to **Cloudflare Workers** with static assets. Interactive widgets (save, love/views, theme/language switch, geography selects, My Doc) are React islands; everything else is `.astro`.

## Start

Requires Node.js 22.23+.

```bash
npm ci
npm run dev            # http://localhost:4321
npm run build          # -> dist/ (dist/server worker + dist/client assets)
npm test               # node test scripts
npm run check          # astro check (types)
```

## Deploy (Cloudflare)

```bash
npx wrangler d1 create doclist-engagement      # once; paste database_id into wrangler.jsonc
npm run db:migrate                             # creates the engagement tables (migrations/)
npm run deploy                                 # astro build && wrangler deploy
```

Configuration lives in `wrangler.jsonc` (`PUBLIC_SITE_URL`, optional `DOCLIST_RELEASE_START`, D1 binding `DB`). Optionally set `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN` as secrets to use Redis for engagement counters instead of D1.

