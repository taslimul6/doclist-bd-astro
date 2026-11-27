# DocList BD — 64-district enrichment

Updated: 2026-10-16

Current master: 3,947 doctor/chamber records, 3,497 approximate name-based doctor IDs, 6,294 specialty listing rows. New records in this batch: 1,240; existing records matched: 0. All 64 districts and 8 divisions contain data, with at least 12 approximate doctor IDs per district. Counts are not independently verified unique people.

## Files to use
- final/bangladesh_doctors_master.json
- final/doctor_specialty_chamber_index.json
- final/districts/<division>/<district>.json (64 files)
- final/divisions/<division>.json (8 files)
- final/reports/district_report_64.json
- final/enrichment/national_enrichment_report.json (current before/after report)
- final/enrichment/national_2026-10-16_new_records.json (new batch only)

Existing core field names, original doctor/chamber IDs, folder paths and JSON container shapes are retained. Optional provenance/quality fields are additive. Original records were retained; source conflicts are logged rather than blindly overwritten.

## Quality and scope
This is partial source-backed research coverage, not all doctors in Bangladesh and not independent credential verification. Dates record source observation, not phone verification. Confirm chamber, schedule and credentials directly. Fees, missing fields and portraits were not invented. In-progress qualifications retain source qualifiers. Name spelling, Bangla/English variants and facility aliases may leave duplicate identities; BMDC disambiguation is still needed. Unvisited source candidates and source conflicts are included for follow-up.

Historical batches remain under history/. Non-standard NaN/Infinity tokens in 14 historical JSON files were normalized to null so every JSON file parses strictly. Older batch reports describe their own batch, not the latest national total. Use summary.json or national_enrichment_report.json for current totals.
