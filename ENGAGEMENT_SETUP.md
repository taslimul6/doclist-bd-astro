# Love + View Counter Setup on Vercel

The doctor love/view controls need persistent storage. Vercel Functions do not provide a durable writable filesystem, so the app uses Upstash Redis in production and SQLite only during local development.

## Vercel setup

1. Open your Vercel project.
2. Go to **Storage / Marketplace** and add **Upstash Redis**.
3. Connect the Redis database to this project.
4. Confirm that Vercel added either:
   - `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`, or
   - `KV_REST_API_URL` and `KV_REST_API_TOKEN`.
5. Redeploy the project after the variables are added.

No schema migration or `db:init` command is required for Redis.

## What is stored

- Love count: one love per `doclist-visitor` browser cookie per doctor.
- View count: increments when a doctor card/profile remains visible for about one second.
- Impression event IDs are deduplicated and expire after 48 hours.

## Local development

Without Redis environment variables, local development automatically uses:

`data/runtime/engagement.sqlite`

The database folder and tables are created automatically on the first request.
