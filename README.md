# Career Campus AI - AI-Powered Career Guidance Platform

An innovative platform connecting ambitious students with personalized career guidance, mentorship, and opportunities.

## Features

✨ **Core Features**
- 🤖 AI-powered career recommendations based on student profiles
- 👤 Comprehensive student profiles with skills and interests tracking
- 📊 Interactive dashboard with career fit scores and milestones
- 🎯 Personalized learning pathways and goal tracking
- 🤝 Mentor connection matching system
- 💼 Job and internship opportunity discovery
- 🏢 Recruiter and company partnership platform
- 🛡️ Secure authentication with Supabase
- 📱 Mobile-responsive design
- ⚡ Production-ready infrastructure

## Tech Stack

**Frontend**
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- SWR (data fetching)

**Backend**
- Next.js API routes
- Supabase (PostgreSQL + Auth)
- Row-level security policies
- Real-time subscriptions ready

**DevOps & Deployment**
- Vercel (primary)
- Docker support
- GitHub Actions ready
- Environment-based configuration

## Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm
- Supabase account (free at supabase.com)
- Git

### Local Development Setup

**1. Clone and install**
```bash
git clone https://github.com/mthembu01johnny-droid/career-campus-ai.git
cd career-campus-ai
npm install
```

**2. Create Supabase project**
- Go to [supabase.com](https://supabase.com) → New Project
- Copy Project URL and anon key from Settings > API

**3. Configure environment**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**4. Set up database**
- In Supabase SQL Editor → New Query
- Paste `supabase/migrations/202609280001_initial.sql`
- Click "Run"

**5. Configure auth redirect**
- Supabase → Authentication > URL Configuration
- Add Redirect URL: `http://localhost:3000/auth/callback`
- Set Site URL: `http://localhost:3000`

**6. Start development server**
```bash
npm run dev
```

Open http://localhost:3000

## Project Structure

```
career-campus-ai/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── login/                   # Auth flows
│   ├── signup/
│   ├── onboarding/              # Student onboarding
│   ├── profile/                 # Profile editing
│   ├── dashboard/               # Student dashboard
│   ├── recruiter/               # Company onboarding
│   ├── admin/                   # Admin dashboard
│   ├── auth/callback/           # OAuth callback
│   ├── api/                     # API routes (future)
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   └── auth/                    # Auth components
│       ├── SignInForm.tsx
│       ├── SignUpForm.tsx
│       └── SignOutButton.tsx
├── lib/
│   ├── supabase/
│   │   ├── auth.ts              # Auth functions
│   │   ├── database.ts          # DB functions
│   │   └── client.ts            # Client helper
│   └── recommendation-engine.ts # Career recommendations
├── supabase/
│   └── migrations/              # Database migrations
├── __tests__/                   # Test files
├── .env.example                 # Env template
├── middleware.ts                # Auth middleware
├── vercel.json                  # Vercel config
├── tailwind.config.ts           # Tailwind config
└── README.md
```

## Key Pages

| Page | Path | Purpose |
|------|------|----------|
| Landing | `/` | Public landing page |
| Sign Up | `/signup` | Create account |
| Sign In | `/login` | Login to account |
| Onboarding | `/onboarding` | Complete student profile |
| Dashboard | `/dashboard` | View recommendations & progress |
| Profile | `/profile` | Edit student profile |
| Recruiter | `/recruiter/onboarding` | Company registration |
| Admin | `/admin` | Admin statistics |

## Authentication Flow

1. User signs up with email/password
2. Supabase creates auth session
3. User redirected to `/onboarding` to complete profile
4. Profile data stored in PostgreSQL
5. Career recommendations generated
6. User views dashboard with personalized insights

## Database Schema

**students**
- id (UUID, PK)
- email (text, unique)
- full_name (text)
- major (text)
- interests (text[])
- career_goals (text)
- onboarding_complete (boolean)
- created_at, updated_at (timestamps)

**student_progress**
- id (UUID, PK)
- student_id (UUID, FK)
- milestone (text)
- status (enum)
- due_date (date)
- notes (text)
- created_at (timestamp)

**career_recommendations**
- id (UUID, PK)
- student_id (UUID, FK)
- role_name (text)
- fit_score (numeric)
- reason (text)
- created_at (timestamp)

## Career Recommendation Algorithm

The recommendation engine:
1. Extracts skills from student's major, interests, and goals
2. Matches against a database of career roles
3. Calculates fit scores based on:
   - Skill alignment (70%)
   - Interest alignment (30%)
4. Returns top 5 matching careers

Extendable for:
- Machine learning models
- External job board APIs
- Labor market data integration

## Available Scripts

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # TypeScript checking
npm test                 # Run tests
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Add environment variables from `.env.example`
4. Deploy
5. Update Supabase auth redirect URL to your Vercel domain

### Docker

```bash
docker build -t career-campus-ai .
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=<url> \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=<key> \
  career-campus-ai
```

## Security

- ✅ Row-level security (RLS) on all tables
- ✅ JWT-based authentication
- ✅ CORS configured
- ✅ Environment variables protected
- ✅ Middleware guards protected routes
- ✅ No sensitive data in cookies

## Testing

```bash
npm test                 # Run all tests
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report
```

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## Roadmap

- [ ] Real-time mentor matching
- [ ] AI-powered interview prep
- [ ] Internship marketplace integration
- [ ] Skill verification badges
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Community features
- [ ] Video mentorship

## Support

- 📖 [Next.js Docs](https://nextjs.org/docs)
- 📚 [Supabase Docs](https://supabase.com/docs)
- 🎨 [Tailwind Docs](https://tailwindcss.com/docs)
- 💬 Open an issue on GitHub

## License

MIT License - see LICENSE file for details

## Authors

- **mthembu01johnny-droid** - Initial development

---

**Built with ❤️ for ambitious students**
