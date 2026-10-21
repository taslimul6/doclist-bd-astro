# DocList BD — Cloudflare deployment fix

Production build is included. Read START-HERE.md.

Current Workers dashboard: root `/`, build `npm run build`, deploy `npx wrangler deploy`.

For Cloudflare Pages run `DEPLOY-PAGES-WINDOWS.cmd` or `npm run deploy:pages`. Pages has its own configuration in `pages/`.

Do not upload only the ZIP file into GitHub. Extract it and upload its complete contents, including `dist`, at the repository root.
