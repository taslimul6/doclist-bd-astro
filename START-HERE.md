# DocList BD — Fixed prebuilt Cloudflare package

এই package-এ production build ইতিমধ্যে আছে। `npm run build` এখন সব prebuilt file যাচাই করে সফলভাবে শেষ হয়। Source compile করতে হয় না। Website-এর design, pages, data বা features পরিবর্তন করা হয়নি।

## তোমার দেখানো বর্তমান dashboard: Workers project

তোমার URL-এ `/workers/services/view/doclist-bd-astro/` আছে। এটি Workers project। এই ZIP-এর root সেই project-এর জন্য configured:

| Setting | Value |
| --- | --- |
| Root directory | `/` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

GitHub repository-তে এই ZIP-এর **ভেতরের সব file/folder** আপলোড করো। ZIP file-টি একা repository-তে রাখবে না। `package.json`, `wrangler.jsonc` ও `dist` repository root-এ থাকতে হবে। তারপর Retry build করো।

`main` entry point, static asset binding এবং `nodejs_compat` configuration এই package-এ দেওয়া আছে। Server code static assets হিসেবে প্রকাশ করা থেকে `.assetsignore` রক্ষা করে।

## Cloudflare Pages-এ deploy করতে চাইলে

Windows-এ extract করে **`DEPLOY-PAGES-WINDOWS.cmd`** চালাও। Browser-এ Cloudflare login করার পর Pages deployment হবে। প্রয়োজন হলে `doclist-bd-astro` নামে নতুন Pages project তৈরি করতে বলবে।

Terminal দিয়ে:

```bash
npx --yes wrangler@4.75.0 login
npm run build
npm run deploy:pages
```

এই command `pages` folder-এর Pages-specific config দিয়ে সম্পূর্ণ `dist` deploy করে। আলাদা Pages project-এর নাম ব্যবহার করলে `pages/wrangler.jsonc` এবং `package.json`-এর `deploy:pages` command-এ project name বদলাবে।

Pages Git integration ব্যবহার করলে:

| Setting | Value |
| --- | --- |
| Project type | Pages |
| Root directory | `pages` |
| Build command | `npm run build` |
| Build output directory | `../dist` |

Workers এবং Pages-এর config আলাদা রাখা হয়েছে। তোমার বর্তমান Workers project-এর settings বদলানোর প্রয়োজন নেই; Pages-এ যেতে হলে উপরের Pages deployment পদ্ধতি ব্যবহার করো।

## Love/view count

আগের production-এর একই secrets target project-এ যোগ করো:

```text
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

Existing `KV_REST_API_URL` / `KV_REST_API_TOKEN` aliases also work. Without Redis secrets or an initialized D1 `DB` binding, counters report storage unavailable. Saved doctors remain in browser storage for 365 days and do not need Redis. Existing Redis keys, doctor IDs and visitor cookie are unchanged. A new D1 database does not automatically import existing Redis totals.

## Preserved build

- All Bengali/English directory routes and original publication schedule.
- All 1,638 local portraits, CSS and JavaScript.
- Filters, pagination, saved doctors, calls, sharing, FAQ and metadata.
- Original sitemap behavior, including the exact 1,000 URLs in `100.xml`.
- Google Analytics `G-SJSQXS7FJ9`.
- Canonical domain remains `https://doclist-bd.com`.

Keep the editable source ZIP for future code changes. This ZIP contains prebuilt output and deployment configuration. No Cloudflare account credentials are included, and no public deployment was performed while preparing it.
