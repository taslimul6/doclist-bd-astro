# Publication and district access

All 3,643 doctor profiles and all 64 district / 8 division landing pages are immediately accessible in both languages. The search and filters include all doctor profiles. Previously indexed coverage pages and original baseline URLs also remain live.

Only the remaining 5,288 new specialty / hospital / specialty-location listing pages are scheduled. Starting 2026-10-18 at 00:00 Asia/Dhaka, 30 base pages (60 language URLs) become available per day. The last batch of 8 base pages is on 2027-04-12. Set DOCLIST_RELEASE_START=YYYY-MM-DD to change the starting day before deployment. No daily rebuild is needed.

Run npm run schedule:refresh to refresh the queue. Existing order is retained; doctor profiles, district/division pages, indexed allowlist and baseline pages are excluded. The explicit geography allowlist is data/live-geography-pages.json.

Live does not imply indexable: existing completeness and indexing rules remain active. The /sitemap.xml index includes regular 1,000-URL shards plus /sitemaps/100.xml (exactly the supplied 1,000 coverage URLs). My Doc is noindex and excluded from sitemaps.
