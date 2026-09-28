import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export type StudentProfile = {
  id: string;
  email: string;
  full_name: string;
  major: string | null;
  interests: string[];
  career_goals: string | null;
  onboarding_complete: boolean;
};

export const supabaseBrowser = () => createClientComponentClient();

export async function upsertStudentProfile(userId: string, profile: Omit<StudentProfile, 'id' | 'onboarding_complete'>) {
  return supabaseBrowser().from('students').upsert({
    id: userId,
    ...profile,
    interests: profile.interests.filter(Boolean),
    onboarding_complete: true,
    updated_at: new Date().toISOString(),
  }).select().single();
}

export async function getStudentProfile(userId: string) {
  return supabaseBrowser().from('students').select('*').eq('id', userId).maybeSingle();
}

export async function getDashboardData(userId: string) {
  const supabase = supabaseBrowser();
  const [profile, recommendations, progress] = await Promise.all([
    supabase.from('students').select('*').eq('id', userId).maybeSingle(),
    supabase.from('career_recommendations').select('*').eq('student_id', userId).order('fit_score', { ascending: false }),
    supabase.from('student_progress').select('*').eq('student_id', userId).order('due_date', { ascending: true }),
  ]);
  return { profile, recommendations, progress };
}
