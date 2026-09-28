import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res: response });
  const { data: { session } } = await supabase.auth.getSession();
  const path = request.nextUrl.pathname;
  const protectedPath = path.startsWith('/dashboard') || path.startsWith('/onboarding');
  const authPath = path === '/login' || path === '/signup';
  if (protectedPath && !session) return NextResponse.redirect(new URL('/login', request.url));
  if (authPath && session) return NextResponse.redirect(new URL('/dashboard', request.url));
  return response;
}

export const config = { matcher: ['/dashboard/:path*', '/onboarding/:path*', '/login', '/signup'] };
