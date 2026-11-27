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

# Doclist Bd — Static Astro Doctor Directory

Bilingual (Bengali/English) Bangladesh doctor directory, built as a **fully static Astro 7 site** and served as plain static assets on Cloudflare (no Worker, so free-plan request/CPU limits do not apply). Interactive widgets (save, share, theme/language switch, search filters, My Doc) are React islands.

## Start

Requires Node.js 22.23+.

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # -> dist/ (about 9-13 minutes)
npm test
```

## Deploy

`.github/workflows/deploy.yml` builds and runs `wrangler deploy` on every push to `main` and daily at 00:00 Asia/Dhaka (that rebuild is what releases the day's scheduled pages). Add repository secrets `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit) and `CLOUDFLARE_ACCOUNT_ID`. Disconnect the Cloudflare Git integration so the site is not built twice.
