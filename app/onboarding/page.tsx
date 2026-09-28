'use client';

import { useState } from 'react';

export default function OnboardingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    major: '',
    interests: '',
    goals: '',
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Onboarding submitted', form);
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Student onboarding</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Tell us about your goals</h1>
      </div>

      <form onSubmit={handleSubmit} className="card rounded-3xl p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
            <input value={form.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input value={form.email} onChange={(e) => handleChange('email', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="jane@campus.edu" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Current major</label>
            <input value={form.major} onChange={(e) => handleChange('major', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Computer Science" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Career interests</label>
            <input value={form.interests} onChange={(e) => handleChange('interests', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="AI, product, startup" />
          </div>
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">Career goals</label>
          <textarea value={form.goals} onChange={(e) => handleChange('goals', e.target.value)} rows={5} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="I want to build a sustainable career in data and digital products..." />
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
          <button type="button" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700">Save draft</button>
          <button type="submit" className="rounded-2xl bg-brand-600 px-5 py-3 font-semibold text-white transition hover:bg-brand-700">Complete onboarding</button>
        </div>
      </form>
    </main>
  );
}
