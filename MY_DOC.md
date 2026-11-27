# Saved Docs / আমার ডাক্তার

Use /my-doc (Bangla) or /en/my-doc (English). The desktop and mobile navbar show Saved Docs in English and আমার ডাক্তার in Bangla; published doctor cards and doctor profiles include Save Doc / Remove controls.

Each stable doctor ID is stored with an expiry of 365 days after saving, under localStorage key doclist-saved-doctors-v1. Unsaving removes the ID. Reloading and same-origin tabs retain and synchronize the list. Expired entries are ignored and cleaned on My Doc visits. Clearing browser storage, private browsing cleanup, changing domain, or switching device will not retain the list. No account or backend bookmark database is used.

My Doc fetches current available doctor details through /api/my-doc with private/no-store responses. Storage failures show a user-visible message. Love/view persistence uses its existing separate configuration and IDs.

The personal page is noindex and absent from sitemaps. Dark-mode SEO statistics use the theme card, text, highlight, and border variables.
