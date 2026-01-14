// app/layout.js
<<<<<<< HEAD
import { Inter } from 'next/font/google';
=======
'use client';

import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

<<<<<<< HEAD
export const metadata = {
  title: 'Confection Pro - Vêtements sur mesure pour entreprises et particuliers',
  description: 'Société de confection de vêtements sur mesure pour entreprises et particuliers. Uniformes professionnels, vêtements personnalisés, qualité premium.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
=======
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
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
      </body>
    </html>
  );
}