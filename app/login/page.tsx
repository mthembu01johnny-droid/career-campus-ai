'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">C</div>
          <h1 className="text-3xl font-black text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to continue your career plan</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white"
              placeholder="you@example.com"
            />
          </div>

          <button type="submit" className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">
            Continue with email
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-slate-400">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs uppercase tracking-[0.2em]">or</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          New here?{' '}
          <Link href="/onboarding" className="font-semibold text-brand-700">
            Create account
          </Link>
        </p>
      </div>
    </main>
  );
}
