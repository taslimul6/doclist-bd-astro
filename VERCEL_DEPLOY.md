# Vercel deployment settings

This ZIP is intentionally packaged with `package.json` at the ZIP/repository root.

Use these Vercel settings:

- Framework Preset: Next.js
- Root Directory: `./` (repository root)
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: leave empty/default (do not set `out`, `dist`, or a custom folder)
- Node.js: 22.x
- Production branch: the branch containing these files

Expected public URL behavior:

- `/` -> Bangla homepage
- `/doctors`, `/specialties`, `/hospitals`, `/locations`, etc. -> Bangla pages (internally rewritten to `/bn/...`, URL stays clean)
- `/en` -> English homepage
- `/en/doctors`, `/en/specialties`, etc. -> English pages
- Legacy `/bn` -> redirects to `/`
- Legacy `/bn/...` -> redirects to the clean Bangla URL

If `doclist-bd.com` still returns a platform 404 after a successful deployment, open Vercel > Project > Settings > Domains and make sure both `doclist-bd.com` and `www.doclist-bd.com` are assigned to this project, then promote the latest Ready deployment to Production. A domain/project alias problem cannot be fixed by application code.
