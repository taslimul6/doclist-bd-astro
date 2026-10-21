# Previously indexed coverage exceptions

The supplied Search Console Table.csv contains 1,000 distinct URLs representing 807 base pages. All exist in the directory. These base pages and both language variants bypass release scheduling and the completeness noindex policy, and use self-canonical metadata. Existing /bn redirects remain unchanged.

/sitemaps/100.xml contains exactly the 1,000 original URLs, including /bn aliases; /sitemap.xml includes this special sitemap. Regular shards retain their 1,000-URL limit and may overlap the special sitemap. Query filters retain existing indexing rules. Other scheduled pages keep their original release slots (protected pages do not get replaced with extra releases).

Source allowlist: data/indexed-coverage.json. No live deployment performed.

Validation: TypeScript check, production build, test-indexed-coverage.mjs, publication tests passed. Production HTTP test confirmed exact sitemap membership, index discovery and 8 representative bilingual pages returning index metadata without noindex.

Latest release: all doctor profiles and all district/division landing pages are live. Remaining scheduled listing slots are compacted to 30 per day; see PUBLICATION_SCHEDULE.md for the current dates.
