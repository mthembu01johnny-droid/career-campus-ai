'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/supabase/auth';

export default function SignUpForm() {
  const router = useRouter();
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(''); const [message, setMessage] = useState(''); const [loading, setLoading] = useState(false);
  async function submit(event: React.FormEvent) {
    event.preventDefault(); setError(''); setMessage('');
    if (password !== confirm) { setError('Passwords do not match'); return; }
    setLoading(true); const result = await signUp(email, password);
    if (result.error) setError(result.error.message);
    else if (result.data.session) router.replace('/onboarding');
    else setMessage('Check your email to confirm your account, then sign in.');
    setLoading(false);
  }
  return <form onSubmit={submit} className="space-y-4">
    {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {message && <p role="status" className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">{message}</p>}
    <input aria-label="Email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" />
    <input aria-label="Password" required minLength={6} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" />
    <input aria-label="Confirm password" required minLength={6} type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Confirm password" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" />
    <button disabled={loading} className="w-full rounded-xl bg-brand-600 px-4 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50">{loading ? 'Creating account…' : 'Create account'}</button>
  </form>;
}
