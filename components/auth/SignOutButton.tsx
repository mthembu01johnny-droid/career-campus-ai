'use client';

import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/supabase/auth';

export default function SignOutButton() {
  const router = useRouter();
  return <button onClick={async () => { await signOut(); router.replace('/'); router.refresh(); }} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Sign out</button>;
}
