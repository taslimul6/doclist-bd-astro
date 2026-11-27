# Publication update

New routes are now scheduled for daily release. See PUBLICATION_SCHEDULE.md and data/reports/publication-summary.json. Earlier counts below describe the full eventual dataset, not how many pages are currently public. The project has not been deployed.

# DocList BD national integration

The existing application now reads the merged national dataset through its established data layer. Design, language routing, theme, navigation, existing public slugs and engagement identifiers are retained. No deployment was performed.

| Metric | Before | Final |
|---|---:|---:|
| Doctor profiles | 2,044 | 3,643 |
| Doctor/chamber associations | 2,343 | 3,943 |
| Chamber/specialty associations | — | 5,903 |
| Districts | 8 | 64 |
| Divisions | 8 | 8 |

Incoming: 3,947 master rows, 6,294 specialty rows. Added: 1,599 profiles and 1,600 chambers. Matched: 2,348 source rows. Updated/populated: 3,947 source-row operations (includes additions). Skipped master rows: zero. Four repeated source pairs collapse to one association each. Specialty fragments, vague labels, training/location categories and duplicates do not become extra doctor profiles. Counts describe application profiles, not verified unique people.

The repeat import creates zero profiles/chambers and leaves the data files byte-identical. All existing 2,044 doctor IDs/slugs and chamber references, hospital/specialty/location slugs and deployment/engagement settings were checked. Memberships agree exactly with merged chambers; all district/division input partitions agree with the incoming master; no relationship orphans were found.

Validation passed: TypeScript, production build, directory/search/pagination and every district filter, bilingual/theme/engagement UI tests, source image integrity, SEO policy audit, 54 SEO HTTP requests, 36 additional national rendering requests, missing-field pages, and isolated persistent engagement tests including restart. The supplied project has no lint configuration. Validation used Node 24.19.0; the existing Node 22.x deployment setting remains. Production Redis credentials/data were not accessed.

201 identity/facility/archive review cases and 102 conflicting values remain for editorial review. Existing display values win conflicts, and incoming observations remain in provenance. Some people may retain separate profiles pending stronger identity evidence; cross-language names are not automatically merged. Existing images remain; missing portraits use initials. Source dates are observations, not credential verification. Some source specialty/facility labels remain in their original language as a readable fallback.

The established sitemap quality policy remains: 6,804 bilingual URLs included, 18,406 excluded. See SEO_REPORT.md and data/seo-audit.json. Reusable import and field mapping: IMPORT_MAPPING.md and scripts/import-national.py. First-import, repeat-import, geography, review, conflict and validation reports are in data/reports/.
