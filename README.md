# Career Campus AI

AI-powered career guidance and campus recruitment platform for students, mentors, and institutions.

## Features

- Supabase authentication
- PostgreSQL schema for student profiles and career recommendations
- Landing page and responsive marketing experience
- Student onboarding workflow
- Personalized dashboard view
- App Router architecture with Next.js
- Jest + Testing Library setup
- Deployment guidance for Vercel + Supabase

## Project structure

- `app/` - App Router pages and API routes
- `components/` - Shared UI components
- `lib/supabase/` - Supabase client helpers
- `database/schema.sql` - PostgreSQL schema
- `scripts/migrate.js` - Migration helper
- `__tests__/` - Test coverage

## Prerequisites

- Node.js 18+
- npm or pnpm
- A Supabase project
- Optional: Vercel account for deployment

## Environment setup

1. Copy `.env.example` to `.env.local`
2. Add your Supabase project values:

```bash
cp .env.example .env.local
```

Then update the values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Database setup

Apply the SQL in `database/schema.sql` in your Supabase SQL editor.

```bash
npm run db:migrate
```

## Testing

```bash
npm test
```

## Deployment

### Option 1: Vercel + Supabase

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Add the same environment variables from `.env.local`.
4. Deploy the app.
5. Add your Supabase redirect URL, such as:
   - `https://your-app.vercel.app/auth/callback`
   - `http://localhost:3000/auth/callback`

### Option 2: Self-hosted Node environment

```bash
npm run build
npm run start
```

## Notes

This project is intentionally structured for easy extension into a production student career platform with additional mentor modules, AI recommendation APIs, and campus placement features.
