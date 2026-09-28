import Link from 'next/link';
import SignUpForm from '@/components/auth/SignUpForm';

export default function SignupPage() {
  return <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10"><section className="w-full max-w-md rounded-3xl bg-white p-6 shadow-soft sm:p-8"><Link href="/" className="text-sm font-semibold text-brand-700">← Career Campus AI</Link><h1 className="mt-8 text-3xl font-black text-slate-900">Create your account</h1><p className="mt-2 mb-8 text-slate-600">Start building a clearer path to your next opportunity.</p><SignUpForm /><p className="mt-6 text-center text-sm text-slate-600">Already registered? <Link href="/login" className="font-semibold text-brand-700">Sign in</Link></p></section></main>;
}
