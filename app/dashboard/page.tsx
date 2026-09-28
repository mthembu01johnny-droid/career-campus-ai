const goals = [
  { label: 'Career fit score', value: '94%' },
  { label: 'Skill milestones', value: '8/10' },
  { label: 'Mentor check-ins', value: '3' },
];

const activities = [
  { title: 'Resume polishing', status: 'Due in 3 days', accent: 'bg-brand-50 text-brand-700' },
  { title: 'AI portfolio review', status: 'Scheduled', accent: 'bg-emerald-50 text-emerald-700' },
  { title: 'Networking workshop', status: 'Register now', accent: 'bg-amber-50 text-amber-700' },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Student dashboard</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Welcome back, Jane.</h1>
        </div>
        <button className="rounded-full bg-slate-900 px-5 py-3 font-semibold text-white">Book mentor call</button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {goals.map((goal) => (
          <div key={goal.label} className="card rounded-3xl p-6">
            <p className="text-sm text-slate-500">{goal.label}</p>
            <p className="mt-3 text-3xl font-black text-slate-900">{goal.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="card rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Recommended next steps</h2>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">AI plan</span>
          </div>
          <div className="mt-6 space-y-4">
            {activities.map((activity) => (
              <div key={activity.title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{activity.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{activity.status}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${activity.accent}`}>{activity.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-slate-900">Career snapshot</h2>
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm text-slate-500">Top role fit</p>
              <p className="text-xl font-bold text-slate-900">Product Analyst</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Preferred industry</p>
              <p className="text-xl font-bold text-slate-900">Technology & health</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Recommended skills</p>
              <ul className="mt-2 space-y-2 text-slate-700">
                <li>• SQL and data storytelling</li>
                <li>• Product strategy</li>
                <li>• Stakeholder communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
