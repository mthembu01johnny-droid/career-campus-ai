'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/supabase/auth';
import { getStudentProfile, upsertStudentProfile } from '@/lib/supabase/database';
import SignOutButton from '@/components/auth/SignOutButton';

export default function ProfilePage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [form, setForm] = useState({ full_name: '', email: '', major: '', interests: '', career_goals: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();
      if (!user) { router.replace('/login'); return; }
      setUserId(user.id);
      const { data } = await getStudentProfile(user.id);
      if (data) setForm({ full_name: data.full_name || '', email: data.email || '', major: data.major || '', interests: (data.interests || []).join(', '), career_goals: data.career_goals || '' });
      setLoading(false);
    })();
  }, [router]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);
    const { error: saveError } = await upsertStudentProfile(userId, { ...form, email: form.email, interests: form.interests.split(',').map((i) => i.trim()) });
    if (saveError) setError(saveError.message);
    else { setSuccess('Profile updated successfully!'); setTimeout(() => setSuccess(''), 3000); }
    setSaving(false);
  }

  if (loading) return <main className="min-h-screen bg-slate-50 p-6"><div className="animate-pulse text-center">Loading profile...</div></main>;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-black text-slate-900">Edit Profile</h1>
          <SignOutButton />
        </div>

        <form onSubmit={submit} className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
          {error && <p role="alert" className="mb-5 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          {success && <p role="status" className="mb-5 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">{success}</p>}
          
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Full name
              <input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-500" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Email
              <input disabled value={form.email} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 font-normal text-slate-500" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Major or field of study
              <input required value={form.major} onChange={(e) => setForm({ ...form, major: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-500" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Career interests (comma-separated)
              <input value={form.interests} onChange={(e) => setForm({ ...form, interests: e.target.value })} placeholder="Design, AI, Product" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-500" />
            </label>
          </div>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Career goals
            <textarea rows={5} required value={form.career_goals} onChange={(e) => setForm({ ...form, career_goals: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-500" />
          </label>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button type="button" onClick={() => router.back()} className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              Cancel
            </button>
            <button disabled={saving} className="rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50">
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
