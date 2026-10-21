# DocList BD conversion validation

Source: final `DocList-BD-FINAL-v2-GA.zip`, including the `G-SJSQXS7FJ9` Google tag. Target: Astro 5.18.2 with the Cloudflare Pages-compatible 12.6.13 adapter.

## Preserved

- 12,605 directory base paths, with Bengali and English variants (25,210 directory URLs).
- Saved doctors and four essential pages in both languages, bringing route/metadata checks to 25,220.
- All 3,643 doctor IDs, slugs and profiles; all district/division/hospital/specialty combinations.
- All original data, public assets and stylesheet bytes: 1,810 files verified by SHA-256.
- All 1,638 local portraits; initials and image-error fallback.
- Existing saved-list storage key, save/remove behavior and 365-day per-entry expiry.
- Header/footer, light/dark themes, mobile menu, language switching with filters, dependent division/district controls, sorting, keyword search, pagination, calls, sources, FAQ, sharing and love/view counters.
- Original indexing decisions, canonical relationships, scheduled publication rules, sitemap sharding and exact 1,000 URLs in `sitemaps/100.xml`.
- Google Analytics Measurement ID `G-SJSQXS7FJ9`.

## Framework changes

Astro owns HTTP routing, the HTML document and metadata, middleware and API endpoints. Original page/component markup is rendered on the server with React. Interactive controls hydrate as small independent React roots, without sending the medical dataset to the browser.

An additional `styles/astro-islands.css` compatibility rule preserves the original geography-field spacing across hydration wrappers. Original stylesheets themselves are unchanged.

`data/search-index.json` is a generated, private build artifact. Every one of its 3,643 strings was compared with the original Next.js search index and matched exactly. Building this index before deployment reduced the local directory-module import measurement from approximately 1,902 ms to 218 ms. These are local measurements, not production latency guarantees. Build regenerates this file after data changes.

The existing Redis counters retain their keys and cookie identity. Cloudflare D1 replaces the Node-only local-file SQLite option. Existing production totals remain in the existing Redis database; deployment requires its existing runtime secrets. D1 is an optional alternative, not an automatic Redis-data migration.

## Checks completed

| Check | Result |
| --- | --- |
| TypeScript | Passed |
| Astro production build | Passed |
| Bilingual route resolution and metadata | 25,220 checked |
| Original data/assets/styles hashes | 1,810 unchanged |
| Full original search-index comparison | All 3,643 strings identical |
| Original Next.js vs Cloudflare-runtime HTTP responses | 322 compared |
| Content, metadata, links, structured data, image paths | Identical on all 270 successful sampled pages |
| Future-release responses in the sample | Same 52 scheduled 404 responses as original; these pages remain in the source and release schedule |
| Sitemap XML comparison | All 9 current shards/index targets identical, including 100.xml |
| Local portraits served by Cloudflare preview | All 1,638 byte-identical |
| Saved-doctor API | All 3,643 profiles matched the original response |
| Redirects and invalid pagination/route handling | Passed |
| D1 love/impression API and duplicate-event protection | Passed in Cloudflare local runtime |
| Browser controls and saved-list reload/remove/expiry | Passed |
| Joypurhat / Narayanganj filters | 44 / 67 profiles, matching original data |
| Google tag | One loader and one config initialization in the browser |
| Desktop/mobile geometry and theme-color comparison | Passed at 1440px and 390px in light and dark mode |
| Browser runtime errors | None recorded |

Machine-readable results are in `validation-unit.json`, `validation-http.json` and `validation-browser.json`. The original Next.js framework files are retained under `nextjs-reference` for review; Astro does not compile or serve them.

The delivery is source code ready to build/deploy using the included guide. No public deployment or remote counter-data mutation was performed during the conversion.
