'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '@/lib/supabase/auth';

const stats = [
  { number: '50K+', label: 'Students guided' },
  { number: '2.8K', label: 'Career paths' },
  { number: '96%', label: 'Placement rate' },
];

const features = [
  {
    icon: '🎯',
    title: 'AI-Powered Guidance',
    description: 'Get personalized career recommendations based on your skills, interests, and academic background.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description: 'Track milestones, skill development, and career readiness with interactive dashboards.',
  },
  {
    icon: '🤝',
    title: 'Mentor Connections',
    description: 'Connect with industry professionals and experienced mentors in your field of interest.',
  },
  {
    icon: '💼',
    title: 'Opportunity Access',
    description: 'Discover internships, scholarships, and job opportunities tailored to your profile.',
  },
  {
    icon: '📈',
    title: 'Skill Building',
    description: 'Access curated learning paths and resources to develop in-demand technical and soft skills.',
  },
  {
    icon: '🌐',
    title: 'Campus Network',
    description: 'Join a vibrant community of ambitious students and industry leaders.',
  },
];

const testimonials = [
  { name: 'Sarah Chen', role: 'CS Student', text: 'Career Campus AI helped me discover product management. The roadmap was incredibly actionable.' },
  { name: 'Marcus Johnson', role: 'Economics Major', text: 'Within 6 months, I landed an internship at a top tech company using the guidance.' },
  { name: 'Priya Patel', role: 'Engineering Student', text: 'The mentor matching was spot-on. My mentor helped me navigate both technical and career growth.' },
];

export default function HomePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-black text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm text-white">C</span>
            <span className="hidden sm:inline">Career Campus AI</span>
          </Link>
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Link href="/dashboard" className="hidden rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 sm:block">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  Sign in
                </Link>
                <Link href="/signup" className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand-600"></span>
            <span className="text-sm font-semibold text-brand-700">The future of student career guidance</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
            Your clearer path to a better future
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            AI-powered career guidance designed for ambitious students. Get personalized recommendations, connect with mentors, and take control of your career journey.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href={user ? '/dashboard' : '/signup'} className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">
              {user ? 'Go to Dashboard' : 'Start Free'}
            </Link>
            <Link href="#features" className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              Learn more
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-4 text-center shadow-soft">
              <p className="text-2xl font-black text-slate-900">{stat.number}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">Why students choose us</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Everything you need to succeed</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-white p-8 shadow-soft hover:shadow-lg transition">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">Social proof</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Trusted by students worldwide</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl bg-white p-8 shadow-soft">
                <p className="text-slate-600">&ldquo
                <p className="mt-4 font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-center text-white sm:p-12">
          <h2 className="text-3xl font-black sm:text-4xl">Ready to start your journey?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">Join thousands of students who are building clearer paths to their futures.</p>
          <Link href={user ? '/dashboard' : '/signup'} className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-brand-600 hover:bg-slate-100">
            {user ? 'Open Dashboard' : 'Get Started Free'}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-4">
            <div>
              <p className="font-black text-slate-900">Career Campus AI</p>
              <p className="mt-2 text-sm text-slate-600">AI-powered career guidance for ambitious students.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Product</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-slate-900">Features</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Pricing</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Security</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Company</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-slate-900">About</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Blog</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Legal</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-slate-900">Privacy</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Terms</Link></li>
                <li><Link href="#" className="hover:text-slate-900">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            <p>&copy; 2026 Career Campus AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
