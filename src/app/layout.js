// app/layout.js
'use client';

import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <html lang="fr">
      <body className={inter.className}>
        {!isAdminRoute && <Header />}
        <main className="min-h-screen">
          {children}
        </main>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}