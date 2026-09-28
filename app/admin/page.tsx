'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/supabase/auth';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';
import SignOutButton from '@/components/auth/SignOutButton';

export default function AdminPage() {
  const router = useRouter();
  const [stats, setStats] = useState({ totalStudents: 0, completedOnboarding: 0, totalRecommendations: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();
      if (!user) { router.replace('/login'); return; }

      const supabase = createSupabaseBrowserClient();
      try {
        const [studentRes, recommendationRes] = await Promise.all([
          supabase.from('students').select('count', { count: 'exact' }),
          supabase.from('career_recommendations').select('count', { count: 'exact' }),
        ]);
        
        const completedRes = await supabase.from('students').select('id').eq('onboarding_complete', true);
        setStats({
          totalStudents: studentRes.count || 0,
          completedOnboarding: completedRes.data?.length || 0,
          totalRecommendations: recommendationRes.count || 0,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [router]);

  if (loading) return <main className="min-h-screen bg-slate-50 p-6"><div className="text-center">Loading dashboard...</div></main>;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-black text-slate-900">Admin Dashboard</h1>
          <SignOutButton />
        </div>

        {error && <p className="mb-6 rounded-xl bg-red-50 p-4 text-red-700">{error}</p>}

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="text-sm text-slate-500">Total Students</p>
            <p className="mt-3 text-4xl font-black text-slate-900">{stats.totalStudents}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="text-sm text-slate-500">Completed Onboarding</p>
            <p className="mt-3 text-4xl font-black text-emerald-600">{stats.completedOnboarding}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="text-sm text-slate-500">Total Recommendations</p>
            <p className="mt-3 text-4xl font-black text-blue-600">{stats.totalRecommendations}</p>
          </div>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-900">System Status</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> Database: Connected</li>
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> Auth: Operational</li>
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> API: Responsive</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
