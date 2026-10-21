# National dataset integration

Run `npm run data:import` from the project root. The default source is `data/import-source/final`; an alternate extracted `final` directory can be passed with `python3 scripts/import-national.py /absolute/path/to/final`. No network, history files, or enrichment batch concatenation is used. Commit the resulting JSON files and mapping together. Import writes source JSON only, never engagement storage. Keep a backup before importing a different dataset.

## Field adapter

| Incoming field | Application field | Rule |
|---|---|---|
| doctor_id + chamber_id | import-mapping.json | Incoming pair maps explicitly to application doctor/chamber/facility identifiers |
| doctor_name | Doctor.name | Original display spelling; comparison uses Unicode word normalization |
| doctor_id | Doctor.id | Existing IDs retained; collisions without matching evidence receive deterministic doc_import IDs |
| chamber_id | Chamber.id | Retained, scoped to profile; specialty rows never create doctors |
| clinic, clinic_type | Hospital.name/type; Chamber.name | Names preserved; different districts or addresses get distinct facility nodes |
| clinic_address | Chamber.address | Fill empty values, log conflicts; hospital retains all observed addresses |
| appointment_phone | Chamber.phone | Original display retained, digits/country prefix normalized for comparison |
| visiting_schedule | Chamber.schedule | Only source-listed content, empty string if unavailable |
| visit_fee_bdt | Chamber.fee | Source value as string or null |
| qualifications | Doctor.qualifications | Fill missing only; preserve Course/Final Part/Thesis/PGT text |
| designation, institute | Doctor.designation/institute | Fill missing only |
| bmdc_reg_no | Doctor.registration | Source-listed evidence; no verified flag inferred |
| experience_years | Chamber.provenance | Retained as a source claim; no new aggregate experience inferred |
| specialty | Doctor.rawSpecialties | Preserve complete source text |
| specialty_category | Chamber.specialtySlugs, relationships | Existing alias vocabulary plus explicit national aliases; fragments and non-specialty training/location labels excluded |
| division, district | Location + Chamber.locations | Parent-linked geography; membership derived from chambers |
| source_url, last_checked, quality fields | Chamber.provenance/sources/sourceObservedAt, Doctor.sources/flags | Preserve full incoming observation, not credential verification |
| last_checked | Doctor.lastChecked | Latest source-observation date, never a publication date |
| incoming portrait/source-image URLs | Chamber.provenance | No download or reuse permission assumed; existing local portrait manifest and fallback preserved |

Strings unavailable in the original schema remain empty strings; fees, images, experience and gender retain nullable semantics. Additional source fields remain in each chamber's provenance. Qualification conflicts are retained in the conflict log rather than overwriting display text.

## Identity and compatibility

Exact existing chamber ID + normalized name + facility + district supports a match. Otherwise matching requires the same normalized display name and either a source-listed BMDC match, or matching facility/district plus phone or full address. Name alone and approximate incoming ID alone are insufficient. No transliteration or fuzzy branch merging is attempted. Ambiguous matches produce separate deterministic profiles and review notes. Multiple chambers combine only where this evidence establishes a match. Unmatched incoming profiles may therefore remain separate even if they ultimately describe one person.

All existing doctor IDs, chamber IDs, public slugs, hospital/specialty/location routes, image files, engagement API keys, bookmark storage conventions and deployment/environment files remain. New slug collisions use stable suffixes. Redis/SQLite storage and counters are not rewritten. No live Redis database was supplied; persistence is tested with isolated SQLite and unchanged Redis key logic.

## Reports

- `data/reports/first-import.json`: initial before/after and record actions. Updated records include added records whose initially empty fields were populated; matchedRecords counts source rows, including repeated source pairs.
- `data/reports/import-report.json`: latest run; a repeat has zero additions and field updates.
- `data/reports/import-review.json`: persistent identity/facility review cases, including archive identity reports.
- `data/reports/import-conflicts.json`: kept and incoming values, with source pair reference.
- `data/import-mapping.json`: stable incoming-pair to application mapping; do not delete on reruns.
- `data/reports/geography-counts.json`: profile and chamber totals by district/division. Profiles with multiple locations count in each relevant location; sums need not equal national unique-profile totals.
- `data/import-source/`: current consolidated master/index, district/division partitions, source reports and archive documentation. Only consolidated master/index drive membership; partitions and national reports provide cross-checks.

## Quality limits

Profile counts are not independently verified unique people. The archive contains 3,947 rows but 3,943 distinct doctor/chamber pairs: four repeated pairs collapse without losing their observations. Additional source rows share approximate doctor IDs across uncertain identities; conservative splitting gives 3,643 profiles rather than the archive's 3,497 approximate names. Exact per-chamber specialty associations are deduplicated and vague/training categories excluded, yielding 5,903 associations. Existing partial fields and source conflicts are deliberately retained for review. Mixed or untranslated specialty/facility text falls back to its original spelling in Bangla mode; district labels are translated. No live credentials, appointments or portrait rights were independently verified.

## Validation

`npm run test:import` checks byte-identical repeat imports, all baseline IDs/slugs, geography partition totals and orphan references. `npm test` checks directory membership, all district filters, search/pagination, theme/language behavior and engagement UI. `npm run typecheck`, `npm run test:seo`, `npm run test:dates`, `npm run test:images`, `npm run build`, `npm run test:http`, and `npm run test:engagement` provide type, policy, portrait, production rendering and isolated persistent-counter checks. The existing project has no lint command/configuration; no new lint tool is imposed. Use Node 22.x as declared by the project for deployment. No publish or deploy is performed.
