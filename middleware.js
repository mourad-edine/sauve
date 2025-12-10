// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Récupérer les tokens
  const adminToken = request.cookies.get('adminToken')?.value;
  const userToken = request.cookies.get('userToken')?.value;
  
  const { pathname } = request.nextUrl;

  // Routes publiques (accessibles sans connexion)
  const publicPaths = [
    '/',
    '/login',
    '/services',
    '/portfolio',
    '/about',
    '/contact'
  ];

  // Routes admin protégées
  const adminPaths = ['/admin'];
  const isAdminPath = adminPaths.some(path => 
    pathname.startsWith('/admin') && 
    !pathname.startsWith('/admin/login')
  );

  // Routes utilisateur protégées
  const userPaths = ['/dashboard', '/profile', '/orders'];
  const isUserPath = userPaths.some(path => 
    pathname.startsWith(path)
  );

  // Vérification des routes admin
  if (isAdminPath && !adminToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Si déjà sur login admin et token présent, rediriger vers dashboard admin
  if (pathname === '/admin/login' && adminToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Vérification des routes utilisateur
  if (isUserPath && !userToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si déjà sur login utilisateur et token présent, rediriger vers dashboard
  if ((pathname === '/login' || pathname === '/register') && userToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};