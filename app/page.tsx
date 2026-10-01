'use client';

const leftStats = [
  { value: '250K+', label: 'Students' },
  { value: '500+', label: 'Partner companies' },
  { value: '95%', label: 'Career success rate' },
  { value: '20K+', label: 'Opportunities' },
];

const leftFeatureCards = [
  { title: 'AI Career Copilot', icon: '✦', accent: 'from-violet-500 to-indigo-500' },
  { title: 'CV Analysis', icon: '📄', accent: 'from-cyan-500 to-sky-500' },
  { title: 'Interview Simulator', icon: '🗣️', accent: 'from-pink-500 to-violet-500' },
  { title: 'Skills Gap Analyzer', icon: '📊', accent: 'from-emerald-500 to-teal-500' },
  { title: 'Opportunity Hub', icon: '💼', accent: 'from-orange-500 to-amber-500' },
  { title: 'Career Assessments', icon: '🎯', accent: 'from-fuchsia-500 to-violet-500' },
];

const rightTools = [
  { label: 'Take a Free Career Assessment', description: 'Discover your strengths and best-fit career paths.', icon: '📊', accent: 'from-sky-500/25 to-violet-500/25' },
  { label: 'Optimize Your CV', description: 'Get ATS score and personalized feedback.', icon: '📝', accent: 'from-cyan-500/25 to-blue-500/25' },
  { label: 'Practice Interviews', description: 'Build confidence with AI.', icon: '🎙️', accent: 'from-violet-500/25 to-pink-500/25' },
];

const rightMiniCards = [
  { name: 'Future Leader', value: '82%', accent: 'from-cyan-300 to-violet-400' },
  { name: 'Skills To Learn', value: 'AI', accent: 'from-pink-500 to-violet-500' },
];

const pricingPlans = [
  {
    name: 'Free',
    price: 'R0',
    description: 'Get started',
    tag: '',
    features: ['Career assessment', 'Basic dashboard', 'Limited CV analysis'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'R99',
    description: 'Per month',
    tag: 'Most Popular',
    features: ['Unlimited CV analysis', 'AI interview coaching', 'Career roadmaps', 'Premium opportunities'],
    cta: 'Start Pro Plan',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For universities & organizations',
    tag: '',
    features: ['Multi-user access', 'Dedicated support', 'Advanced analytics', 'Custom onboarding'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A112B] px-4 py-8 text-white">
      <div className="mx-auto flex max-w-[1240px] items-stretch justify-center gap-8">
        <section className="relative h-[880px] w-[420px] overflow-hidden rounded-[36px] border border-white/10 bg-[#030b1f] shadow-[0_40px_80px_rgba(19,15,67,0.9)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(118,81,255,0.32),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(44,180,255,0.18),_transparent_30%),linear-gradient(180deg,#020b1f_0%,#09163f_100%)]" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0b1737] to-transparent" />
          <div className="relative z-10 flex h-full flex-col p-5">
            <div className="mb-5 flex items-center justify-between px-1 pt-2 text-[11px] text-white/90">
              <span>9:41</span>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              </div>
            </div>

            <header className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-purple-600 text-lg font-black text-white">C</div>
                <div>
                  <div className="text-xl font-black leading-none">CareerPilot AI</div>
                  <div className="text-[10px] text-slate-300">Your Future. Smarter.</div>
                </div>
              </div>
              <button className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-white/80">
                Get Started
              </button>
            </header>

            <div className="mb-5 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100">
              <span className="mr-2 text-lg">⚡</span>
              #1 AI Career Platform in Africa
            </div>

            <div className="space-y-4">
              <h1 className="max-w-[280px] text-[38px] font-black leading-[0.95] tracking-[-0.06em] text-white">
                Your Next Opportunity Starts Here.
              </h1>
              <p className="max-w-[300px] text-[15px] leading-6 text-slate-300">
                AI-powered career guidance, CV optimization, interview preparation, jobs, internships, scholarships and more — all in one platform.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-base font-bold text-white shadow-[0_10px_25px_rgba(139,92,246,0.45)]">
                Get Started Free
              </button>
              <button className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-base font-semibold text-white/90">
                ▶ Watch Video
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {leftStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center">
                  <div className="text-[26px] font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-[11px] text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-4 text-[13px] font-medium text-slate-200">Trusted by leading organisations</div>
              <div className="grid grid-cols-3 gap-3 text-center text-[11px] text-slate-300">
                <div className="rounded-lg bg-white/5 px-2 py-2 text-white/80">Standard Bank</div>
                <div className="rounded-lg bg-white/5 px-2 py-2 text-white/80">PwC</div>
                <div className="rounded-lg bg-white/5 px-2 py-2 text-white/80">AWS</div>
                <div className="rounded-lg bg-white/5 px-2 py-2 text-white/80">CAPITEC</div>
                <div className="rounded-lg bg-white/5 px-2 py-2 text-white/80">Google</div>
                <div className="rounded-lg bg-white/5 px-2 py-2 text-white/80">MTN</div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-[22px] font-black leading-tight text-white">Discover Your Potential</h2>
              <p className="mt-2 max-w-[300px] text-[15px] text-slate-300">
                Powerful AI tools to help you plan, prepare and achieve your dream career.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {leftFeatureCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-sm`}>{card.icon}</div>
                  <div className="text-[11px] font-semibold leading-tight text-white/90">{card.title}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-5 text-center text-[12px] text-slate-300">Scroll to explore</div>
          </div>
        </section>

        <section className="relative h-[880px] w-[420px] overflow-hidden rounded-[36px] border border-white/10 bg-[#030b1f] shadow-[0_40px_80px_rgba(19,15,67,0.9)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.2),_transparent_35%),linear-gradient(180deg,#020b1f_0%,#07163d_100%)]" />
          <div className="relative z-10 flex h-full flex-col p-5">
            <div className="mb-4 flex items-center justify-between px-1 pt-2 text-[11px] text-white/90">
              <span>9:41</span>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              </div>
            </div>

            <div className="mb-5 space-y-3">
              <h2 className="text-[28px] font-black leading-[1.05] tracking-[-0.05em] text-white">
                Build a Brighter Future with AI
              </h2>
              <p className="max-w-[325px] text-[15px] leading-6 text-slate-300">
                Get the tools, insights and opportunities you need to succeed in today’s job market.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {rightTools.map((tool) => (
                <div key={tool.label} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${tool.accent} p-3`}>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg">{tool.icon}</div>
                  <div className="text-[13px] font-bold leading-tight text-white">{tool.label.split(' ').slice(0, 2).join(' ')}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 text-sm font-bold text-white">C</span>
                  <div>
                    <div className="text-[12px] font-bold text-white">CareerPilot AI</div>
                    <div className="text-[10px] text-slate-300">Good morning,</div>
                  </div>
                </div>
                <button className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-200">View</button>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#0f1e38] to-[#111827] p-3">
                <div className="mb-2 text-[12px] font-medium text-white/80">Future Leader</div>
                <div className="mb-4 text-[42px] font-black leading-none text-white">82%</div>
                <div className="flex items-end justify-between gap-2">
                  <div className="h-14 w-6 rounded-t-md bg-gradient-to-t from-cyan-400 to-violet-500" />
                  <div className="h-10 w-6 rounded-t-md bg-gradient-to-t from-violet-400 to-indigo-500" />
                  <div className="h-16 w-6 rounded-t-md bg-gradient-to-t from-cyan-300 to-blue-500" />
                  <div className="h-20 w-6 rounded-t-md bg-gradient-to-t from-violet-500 to-fuchsia-500" />
                  <div className="h-12 w-6 rounded-t-md bg-gradient-to-t from-cyan-400 to-violet-500" />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-[22px] font-black leading-tight text-white">Real People. Real Progress.</h3>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-pink-500 text-lg font-black text-white">T</div>
                <div>
                  <div className="font-semibold text-white">Tebo M.</div>
                  <div className="text-[11px] text-slate-300">Computer Science Student</div>
                </div>
              </div>
              <p className="mt-3 text-[13px] leading-6 text-slate-200">
                “CareerPilot AI helped me land my dream internship. The CV feedback and interview practice gave me the confidence I needed.”
              </p>
              <div className="mt-2 text-sm text-yellow-400">★★★★★</div>
            </div>

            <div className="mt-6">
              <h3 className="text-[22px] font-black leading-tight text-white">Simple, Transparent Pricing</h3>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <button className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-[11px] font-medium text-slate-200">Monthly</button>
              <button className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-[11px] font-medium text-slate-200">Yearly</button>
              <button className="rounded-xl border border-cyan-400/50 bg-cyan-500/10 px-2 py-2 text-[11px] font-medium text-cyan-100">Save 20%</button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {pricingPlans.map((plan) => (
                <div key={plan.name} className={`rounded-2xl border p-2 ${plan.highlight ? 'border-cyan-400/50 bg-cyan-500/10' : 'border-white/10 bg-white/5'}`}>
                  {plan.tag ? <div className="mb-2 rounded-full bg-violet-500/20 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-violet-100">{plan.tag}</div> : null}
                  <div className="text-[12px] font-semibold text-white">{plan.name}</div>
                  <div className="mt-2 text-[23px] font-black leading-none text-white">{plan.price}</div>
                  <div className="mt-1 text-[10px] text-slate-300">{plan.description}</div>
                  <ul className="mt-3 space-y-1 text-[9px] leading-4 text-slate-200">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <button className={`mt-3 w-full rounded-xl px-2 py-2 text-[10px] font-bold ${plan.highlight ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white' : 'bg-white/8 text-white'}`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1430] p-4 text-center">
              <div className="text-[12px] text-slate-300">Ready to take the next step?</div>
              <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-sm font-bold text-white">
                Get Started Free
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
