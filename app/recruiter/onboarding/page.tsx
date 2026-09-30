'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RecruiterOnboardingPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    company_name: '',
    email: '',
    industry: '',
    size: '',
    hiring_roles: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError('');
    setLoading(true);
    // TODO: Implement company registration API
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => router.push('/'), 3000);
    }, 1000);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm font-semibold text-brand-700">← Back</Link>
        <h1 className="mt-6 text-3xl font-black text-slate-900">Partner with Career Campus AI</h1>
        <p className="mt-2 text-slate-600">Connect with top talent and build your employer brand.</p>

        {success && (
          <div className="mt-6 rounded-2xl bg-emerald-50 p-6 text-emerald-700">
            <p className="font-semibold">Thank you for your interest!</p>
            <p className="mt-2 text-sm">We&apos;ll review your application and be in touch within 24 hours.</p>
          </div>
        )}

        {!success && (
          <form onSubmit={submit} className="mt-8 rounded-3xl bg-white p-6 shadow-soft sm:p-8">
            {error && <p className="mb-5 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Company name
                <input required value={form.company_name} onChange={(e) => setForm({ ...form, company_name: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Email
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Industry
                <input required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Company size
                <select required value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500">
                  <option value="">Select size</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-1000</option>
                  <option>1000+</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold text-slate-700">
              Hiring roles (comma-separated)
              <input required value={form.hiring_roles} onChange={(e) => setForm({ ...form, hiring_roles: e.target.value })} placeholder="Software Engineer, Product Manager, Designer" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" />
            </label>

            <label className="mt-5 block text-sm font-semibold text-slate-700">
              Message
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your company and why you want to partner with us." className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" />
            </label>

            <button disabled={loading} className="mt-8 w-full rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50">
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
