create extension if not exists pgcrypto;

create table if not exists public.students (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text not null,
  major text,
  interests text[] not null default '{}',
  career_goals text,
  onboarding_complete boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.student_progress (
  id uuid primary key default gen_random_uuid(), student_id uuid not null references public.students(id) on delete cascade,
  milestone text not null, status text not null default 'planned' check (status in ('planned','in_progress','completed')),
  due_date date, notes text, created_at timestamptz not null default now()
);
create table if not exists public.career_recommendations (
  id uuid primary key default gen_random_uuid(), student_id uuid not null references public.students(id) on delete cascade,
  role_name text not null, fit_score numeric(4,3) not null default 0 check (fit_score between 0 and 1), reason text,
  created_at timestamptz not null default now()
);

alter table public.students enable row level security;
alter table public.student_progress enable row level security;
alter table public.career_recommendations enable row level security;
drop policy if exists "students own profile" on public.students;
create policy "students own profile" on public.students for all using (auth.uid() = id) with check (auth.uid() = id);
drop policy if exists "students own progress" on public.student_progress;
create policy "students own progress" on public.student_progress for all using (auth.uid() = student_id) with check (auth.uid() = student_id);
drop policy if exists "students own recommendations" on public.career_recommendations;
create policy "students own recommendations" on public.career_recommendations for select using (auth.uid() = student_id);
create index if not exists student_progress_student_id_idx on public.student_progress(student_id);
create index if not exists career_recommendations_student_id_idx on public.career_recommendations(student_id);
