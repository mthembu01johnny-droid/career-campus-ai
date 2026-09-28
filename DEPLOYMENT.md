# Production setup

1. Copy `.env.example` to `.env.local` and add Supabase values.
2. Apply `supabase/migrations/202609280001_initial.sql` in the Supabase SQL editor (or run it with the Supabase CLI).
3. In Supabase Authentication URL Configuration, add `http://localhost:3000/auth/callback` and your Vercel callback URL.
4. Run `npm install`, `npm run type-check`, `npm test`, and `npm run build`.
5. Import the repository into Vercel and configure the same environment variables for Preview and Production.

Never expose `SUPABASE_SERVICE_ROLE_KEY` to client-side code or commit `.env.local`.
