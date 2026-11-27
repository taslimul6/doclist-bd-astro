# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Doclist Bd: a bilingual (Bengali/English) Bangladesh doctor directory on Astro 7 (SSR) + React islands, deployed to Cloudflare Workers (`wrangler.jsonc`). Node >= 22.23 (`.nvmrc`). Many `*.md` files in the root (IMPORT_MAPPING, PUBLICATION_SCHEDULE, ENGAGEMENT_SETUP, SEO_REPORT, …) are older reports/runbooks written during the Next.js era — the data/SEO/publication rules still apply, but framework and hosting details in them (Next, Vercel, Upstash-only) are outdated.

## Commands

```bash
npm ci
npm run dev                    # astro dev, http://localhost:4321
npm run check                  # astro check (typecheck)
npm run build                  # astro build -> dist/server (worker) + dist/client (assets)
npm test                       # node test scripts: directory, preferences, interactions, publication
npm run deploy                 # build + wrangler deploy
npm run db:migrate             # apply migrations/ to the remote D1 (db:migrate:local for local)
```

- No linter or test framework: each test is a standalone script (`node scripts/test-seo.mjs`, `test:dates`, …). The `*.py` HTTP scripts (`smoke-test.py`, `test-engagement-http.py`, …) still spawn `next start` and need adapting to a running Astro server before use.
- `astro dev` needs the workerd runtime; if it crashes on your machine, verify with a temporary `@astrojs/node` build instead.
- Data import: `npm run data:import` (see IMPORT_MAPPING.md). `npm run schedule:refresh` regenerates the release queue.

## Architecture

**Data is static JSON** (`data/*.json`, produced by the Python importer) loaded at module scope in `lib/directory.ts` (all lookup/query helpers). It is bundled into the worker (~2.2 MB gzipped). Server-side only; never import it in an island. Portraits: `data/doctor-images.json` → `public/assets/doctors`. IDs/slugs/chamber IDs are stable public contracts.

**Routing / i18n.** Pages live under `src/pages/[lang]/…` (`bn` | `en`). `src/middleware.ts` rewrites unprefixed Bengali paths (`/doctors/…`) to `/bn/…`, 301s `/bn/…` to the unprefixed path, and 404s unknown `[lang]` values (`getLocale()` returns null → `Astro.rewrite('/404')`). Use `localizedPath()`/`pick()` from `lib/i18n.ts`. Page contexts for listing pages are in `lib/page-contexts.ts`; `lib/listing.ts` runs the search (invalid page → 404).

**Publication scheduling.** `src/middleware.ts` returns 404 + `Retry-After` for unreleased pages (`lib/publication.ts`, `data/release-schedule.json`, `DOCLIST_RELEASE_START`). Doctor profiles, `data/live-geography-pages.json` and `data/indexed-coverage.json` paths are always live. Anything that links to pages must go through `ReleaseLink.astro` / `isPublished*` / `doctorsFromIds`. Never compute release state at module load.

**Indexability** is separate (`lib/indexability.ts`, `lib/index-rollout.ts`); `lib/seo.ts` `metadata()` builds the head data (`PageMeta`) that `src/layouts/Layout.astro` renders. Sitemaps: `src/pages/sitemap.xml.ts`, `sitemaps/[file].ts` (`100.xml` = fixed coverage set).

**Engagement (love/views).** `src/pages/api/doctors/[id]/engagement.ts` → `lib/engagement.ts`: Upstash Redis when `UPSTASH_REDIS_REST_*` is set, otherwise the Cloudflare D1 binding `DB` (`lib/engagement-db.ts`, schema in `migrations/`). Love is deduped by the `doclist-visitor` cookie. The middleware maps engagement API paths to the doctor page for publication checks.

**Islands** (`src/components/*.tsx`, hydrated with `client:*` from `.astro` files): SaveDoctor, DoctorEngagement, Preferences, GeographyFields, MyDoctors. Everything else is `.astro`. Saved doctors are localStorage bookmarks (`lib/saved-doctors.ts`, 365 days); `/my-doc` is noindex.
