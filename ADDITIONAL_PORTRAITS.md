# Additional portrait search — 17 October 2026

42 additional source-matched real portraits were downloaded and integrated. Existing 1,596 portraits and all doctor records/IDs/slugs are preserved. The application now has 1,638 local portraits; 2,005 profiles retain initials fallback.

This pass examined 53 selected public roster pages plus selected profile searches. 50 downloaded candidates were visually reviewed; 8 generic/stock or uncertain portraits were removed. Alternate-source matches require exact names with district/qualification evidence, or an official hospital roster matching the existing hospital and specialty. Ambiguous records remain in a review queue. Bangla/English variants were not automatically identified as the same doctor. The search was not an exhaustive individual search of every remaining name.

Image provenance and matching context remain in data/doctor-images.json and data/reports/portrait-candidates-2026-10-17.json. New references have sourceScope=portrait-only and do not replace clinical information or imply independent credential verification. Source availability does not establish reuse rights. Several source sites returned 403/406; no access controls were bypassed.

All photos are actual local files in public/assets/doctors. The existing directory, My Doc, scheduling and sitemap behavior remain available. See data/reports/portrait-expansion-summary.json for counts, additional-rejected-portraits.json for rejected images, and portrait-identity-review-queue.json for unresolved matches.

Validation passed: all local images decoded and hashes/provenance checked; original doctor data and existing portraits preserved; TypeScript and production build passed; all 42 new images served intact over HTTP; My Doc API and representative doctor profiles use the new local images. No deployment performed.
