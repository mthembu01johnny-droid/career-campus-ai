import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const createSupabaseAuthClient = () => createClientComponentClient();

export async function signUp(email: string, password: string) {
  const supabase = createSupabaseAuthClient();
  return supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
  });
}

export async function signIn(email: string, password: string) {
  return createSupabaseAuthClient().auth.signInWithPassword({ email, password });
}

export async function signOut() {
  return createSupabaseAuthClient().auth.signOut();
}

export async function getCurrentUser() {
  const { data } = await createSupabaseAuthClient().auth.getUser();
  return data.user;
}
