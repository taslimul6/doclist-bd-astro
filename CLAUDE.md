# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Doclist Bd: a bilingual (Bengali/English) Bangladesh doctor directory, a **fully static Astro 7 site** (React islands for interactivity) served as plain static assets on Cloudflare (no Worker script). Node >= 22.23 (`.nvmrc`). Many `*.md` files in the root (IMPORT_MAPPING, PUBLICATION_SCHEDULE, SEO_REPORT, …) are older reports from the Next.js/SSR eras — data/SEO/publication rules still apply, but framework and hosting details in them (Next, Vercel, Worker, engagement counters) are outdated.

## Commands

```bash
npm ci
npm run dev                    # astro dev, http://localhost:4321 (builds pages on demand)
npm run check                  # astro check (typecheck)
npm run build                  # astro build + scripts/postbuild.mjs -> dist/ (~9-13 min, 10-15k files)
npm test                       # node test scripts: directory, preferences, interactions, publication
npm run test:search            # after a build: in-browser filterRows == server searchDoctors
npm run deploy                 # build + wrangler deploy (static assets only)
```

- No linter or test framework: each test is a standalone script. The `*.py` HTTP scripts still spawn `next start` and need adapting (`astro preview`) before use.
- Data import: `npm run data:import` (see IMPORT_MAPPING.md). `npm run schedule:refresh` regenerates the release queue.

## Architecture

**Static output.** `astro.config.mjs` is `output: 'static'`. Every page is generated at build time from `data/*.json` (loaded in `lib/directory.ts`; the data never reaches the browser except through `/search/index.json`). Hosting limits that shape the design: Cloudflare free plan = 20,000 files per deployment, so `postbuild.mjs` fails the build above that.

**Routing.** One catch-all route, `src/pages/[...path].astro`, whose `getStaticPaths` is `allRoutes()` in `lib/routes.ts`; it dispatches on `kind` to `src/views/*.astro` (Home, Listing, Specialties, Locations, Hospitals, Doctor, Hospital, Essential, MyDoc). Bengali is at the root, English under `/en` — but English is built **only** for the main pages (`isEnglishBase`: home, specialties, locations, hospitals, doctors list, my-doc, essential pages). `ReleaseLink.astro` rewrites other `/en/...` links to the Bengali page and `_redirects` sends deep `/en/doctor|hospital|specialty/*` to Bengali. Listing pagination is `/path/page/N` (old `?page=N` URLs are redirected client-side in `Layout.astro`). Page contexts: `lib/page-contexts.ts`; roster search for each static page: `lib/listing.ts`.

**Publication scheduling at build time.** `allRoutes()` includes only pages where `isPublished()` is true (`lib/publication.ts`, `data/release-schedule.json`, `DOCLIST_RELEASE_START`); unreleased pages simply don't exist (plain 404). A scheduled GitHub Action (`.github/workflows/deploy.yml`, 18:00 UTC = 00:00 Asia/Dhaka, plus every push) rebuilds and deploys, which is what releases each day's pages. Doctor profiles, `data/live-geography-pages.json` and `data/indexed-coverage.json` paths are always live. Anything linking to pages must go through `ReleaseLink.astro` / `isPublished*` / `doctorsFromIds`.

**Indexability** is separate (`lib/indexability.ts`, `lib/index-rollout.ts`); `lib/seo.ts` `metadata()` builds `PageMeta` rendered by `src/layouts/Layout.astro`. Sitemaps (`sitemap.xml.ts`, `sitemaps/[file].ts`, `robots.txt.ts`) are static endpoints. `public/_headers` sets `X-Robots-Tag: noindex` on `/en`; `src/pages/redirects.txt.ts` becomes `dist/_redirects` (merged duplicate doctors, slug aliases, `/bn` → root).

**Search/filters run in the browser.** `src/pages/search/index.json.ts` emits `/search/index.json` (compact doctor rows + specialties/locations/hospitals). `src/components/DoctorSearch.tsx` (island on every listing) shows the static list until a filter is used or the URL has `?q=`/`?specialty=`/…, then loads the index and filters (`filterRows`, kept in parity with `searchDoctors` by `scripts/test-search.mjs`). No love/view counters (removed with the Worker).

**Islands** (`src/components/*.tsx`): SaveDoctor, ShareDoctor, Preferences, GeographyFields, DoctorSearch, MyDoctors. My Doc is localStorage bookmarks (`lib/saved-doctors.ts`); `/my-doc` is noindex and looks saved ids up in `/search/index.json` (merged duplicates via the row's `al` ids).

**Featured doctors.** `data/featured-doctors.json` entries are merged into the directory at load (`lib/directory.ts`), so importer re-runs keep them; `featured` pins first in rosters, `verified`/`banner` render on the profile.
