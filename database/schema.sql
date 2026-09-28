-- Enable extensions
create extension if not exists pgcrypto;

-- Core student profile
create table if not exists public.students (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null unique,
  major text,
  interests text[] default '{}',
  career_goals text,
  onboarding_complete boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Academic and progress tracking
create table if not exists public.student_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  milestone text not null,
  status text not null default 'planned',
  due_date date,
  notes text,
  created_at timestamptz not null default now()
);

-- Career recommendations and talent matching
create table if not exists public.career_recommendations (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  role_name text not null,
  fit_score numeric(4,2) not null default 0,
  reason text,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.students enable row level security;
alter table public.student_progress enable row level security;
alter table public.career_recommendations enable row level security;

-- Student can access own record
create policy "Students can view own profile"
  on public.students
  for select
  using (auth.uid() = id);

create policy "Students can update own profile"
  on public.students
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Students can insert own profile"
  on public.students
  for insert
  with check (auth.uid() = id);

create policy "Students can view own progress"
  on public.student_progress
  for select
  using (exists (
    select 1 from public.students s where s.id = student_id and s.id = auth.uid()
  ));

create policy "Students can manage own progress"
  on public.student_progress
  for all
  using (exists (
    select 1 from public.students s where s.id = student_id and s.id = auth.uid()
  ))
  with check (exists (
    select 1 from public.students s where s.id = student_id and s.id = auth.uid()
  ));

create policy "Students can view own recommendations"
  on public.career_recommendations
  for select
  using (exists (
    select 1 from public.students s where s.id = student_id and s.id = auth.uid()
  ));

-- Indexes
create index if not exists idx_students_email on public.students(email);
create index if not exists idx_progress_student_id on public.student_progress(student_id);
create index if not exists idx_recommendations_student_id on public.career_recommendations(student_id);
