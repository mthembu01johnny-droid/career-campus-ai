import Link from 'next/link';

const stats = [
  { label: 'Student pathways', value: '24k+' },
  { label: 'Campus matches', value: '92%' },
  { label: 'Career mentors', value: '1.4k' },
];

const features = [
  {
    title: 'AI-guided advising',
    text: 'Personalized career pathway recommendations based on academic interests, strengths, and goals.',
  },
  {
    title: 'Skills tracking',
    text: 'Create milestones, learning goals, and tracked activities that help students stay engaged.',
  },
  {
    title: 'Career readiness',
    text: 'Connect with career events, job opportunities, and role-fit insights tailored to the student journey.',
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="mx-auto max-w-7xl px-6 pb-4 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-5 py-3 shadow-soft backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">C</div>
            <div>
              <p className="text-lg font-bold text-slate-900">Career Campus AI</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features">Features</a>
            <a href="#outcomes">Outcomes</a>
            <a href="#students">Students</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
              Login
            </Link>
            <Link href="/onboarding" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700">
              Get started
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-16">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
            Student success starts here
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            Build brighter futures with AI-powered career guidance.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Career Campus AI helps students explore opportunities, access personalized support, and turn academic goals into actionable career plans.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/onboarding" className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700">
              Start onboarding
            </Link>
            <Link href="/dashboard" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
              View dashboard
            </Link>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-2xl font-black text-slate-900">{item.value}</div>
                <div className="mt-1 text-xs text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card rounded-3xl p-6">
          <div className="rounded-3xl bg-slate-900 p-6 text-white">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-brand-500/20 px-2 py-1 text-xs font-medium text-brand-100">AI advising</span>
              <span className="text-xs text-slate-300">Updated today</span>
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Career fit</p>
                <p className="mt-2 text-2xl font-bold">96% match</p>
                <p className="mt-1 text-sm text-slate-300">Data science + product strategy</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-800 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Roadmap</p>
                  <p className="mt-2 font-semibold">12-week plan</p>
                </div>
                <div className="rounded-2xl bg-slate-800 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Mentor</p>
                  <p className="mt-2 font-semibold">3 sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Why students choose us</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">A guided path from interest to impact.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card rounded-3xl p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-xl text-brand-700">✦</div>
              <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="outcomes" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="card rounded-3xl bg-slate-950 p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Student outcomes</p>
              <h3 className="mt-3 text-3xl font-black">Designed to help students discover their next move.</h3>
            </div>
            <div className="space-y-5 text-slate-300">
              <p>• Personalized advice based on interests, performance, and ambitions.</p>
              <p>• Clear next steps for internships, applications, and learning goals.</p>
              <p>• Real-time visibility into progress and readiness across the student lifecycle.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
