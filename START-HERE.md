# DocList BD — Prebuilt Cloudflare Pages deployment

এই ZIP ইতিমধ্যে production build করা। **আবার `npm install` বা `npm run build` করতে হবে না।**

`dist/` contains the compiled Astro server, browser JavaScript/CSS, routing configuration and all 1,638 local doctor portraits. Existing Bengali/English pages, SEO rules, sitemap, filters, saved doctors and Google tag are retained.

## Windows: সহজ পদ্ধতি

1. ZIP extract করো। Node.js 22 ইনস্টল থাকতে হবে।
2. Extract করা folder-এর `DEPLOY-WINDOWS.cmd` চালাও।
3. Browser খুললে তোমার Cloudflare account-এ login/authorize করো।
4. `doclist-bd` Pages project থাকলে সেখানে deploy হবে। নতুন project তৈরি করার প্রশ্ন এলে Pages project তৈরি করো। Production branch `main` রাখো।

If your existing **Pages** project has another name, change `doclist-bd` in `wrangler.jsonc`, `package.json` and `DEPLOY-WINDOWS.cmd` to that project name before running the script.

## Terminal দিয়ে deploy

ZIP extract করা folder-এ terminal খুলে চালাও:

```bash
npx --yes wrangler@4.75.0 login
npx --yes wrangler@4.75.0 pages deploy dist --project-name doclist-bd --branch main
```

অথবা login করার পর `npm run deploy` চালাও। Source build করার প্রয়োজন নেই। Wrangler downloads its deployment tool on the first run, so internet access is required.

Use **Cloudflare Pages** with this package. Keep `dist/_worker.js/`, `dist/_routes.json` and `wrangler.jsonc` intact. All directory pages are rendered by the compiled server; an `index.html` file is not required.

## গুরুত্বপূর্ণ: ছবি ও server code একসঙ্গে deploy করো

Use the Wrangler command above. Cloudflare dashboard drag-and-drop has a 1,000-file upload limit, while this package contains more than 1,000 local assets. Uploading only some files would leave doctor portraits missing. Wrangler deploys the complete folder and compiled multi-module server together.

Do not upload this ZIP as a Worker script, and do not select individual files from `dist`.

## Love/view count আগের মতো রাখতে

Cloudflare Pages project-এর Settings → Variables and Secrets-এ আগের production-এর **একই values** যোগ করো:

```text
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

`KV_REST_API_URL` / `KV_REST_API_TOKEN` aliases are also supported. Existing Redis keys, doctor IDs and visitor cookie names are unchanged. No private credentials are included in this ZIP.

After changing secrets, redeploy using the same command. Without Redis credentials or an initialized D1 binding, the counter API reports storage unavailable. Saved doctors do not need Redis: they remain in the browser for 365 days.

If using Cloudflare D1 instead of Redis, configure binding `DB` in `wrangler.jsonc` and initialize it with the included `0001_engagement.sql`. A new D1 database does not automatically import your old Redis totals.

## Preview without deployment

```bash
npx --yes wrangler@4.75.0 pages dev dist --port 4321
```

Then open `http://localhost:4321`. Deployment scripts require Cloudflare login; they do not contain your login credentials.

## After deployment

- Open the generated `*.pages.dev` URL and check Bengali/English pages.
- Add your existing `doclist-bd.com` custom domain through Pages → Custom domains.
- Google Analytics remains `G-SJSQXS7FJ9`; canonical URLs remain `https://doclist-bd.com`.
- Keeping the same HTTPS custom domain preserves access to existing browser saved lists and visitor cookies.
- The original publication schedule and SEO indexing decisions remain unchanged.

This archive contains deployable build output, not the editable source project. Keep the previous source ZIP for future edits and rebuilds. No public deployment was performed when preparing this ZIP.

Reference: https://developers.cloudflare.com/pages/get-started/direct-upload/
