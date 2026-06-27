# Supabase — Database Setup

## Quick fix (2 minutes)

1. Open [Supabase SQL Editor](https://supabase.com/dashboard/project/zbzdtycyzzrjhldcmbql/sql/new)
2. Copy all of [`schema.sql`](./schema.sql)
3. Click **Run**
4. Restart app: `npm run dev`
5. Test the subscribe form again

## Verify table exists

Supabase Dashboard → **Table Editor** → you should see `subscribers` with columns:
`id`, `name`, `email`, `is_active`, `created_at`

## Optional: service role key (recommended)

Supabase → **Settings** → **API** → copy `service_role` key

Add to `.env.local`:
```
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

Restart `npm run dev`

## Optional: automatic setup via CLI

```bash
# Add database password to .env.local:
# DATABASE_URL=postgresql://postgres.zbzdtycyzzrjhldcmbql:[PASSWORD]@aws-0-eu-west-2.pooler.supabase.com:6543/postgres

npm run db:setup
```

Get `DATABASE_URL` from Supabase → Settings → Database → Connection string (URI).
