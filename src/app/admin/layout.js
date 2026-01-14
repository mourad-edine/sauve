// app/admin/layout.js
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AdminSidebar from '@/components/Admin/sidebar/AdminSidebar';
import AdminHeader from '@/components/Admin/header/AdminHeader';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le sidebar sur mobile quand on change de page
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Vérifier si on est sur la page de login
  const isLoginPage = pathname === '/admin/Login';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoginPage && (
        <>
          {/* Sidebar pour mobile */}
          <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}>
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-75"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <AdminSidebar onClose={() => setSidebarOpen(false)} />
            </div>
          </div>

          {/* Sidebar pour desktop */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
            <AdminSidebar />
          </div>
        </>
      )}

      {/* Contenu principal */}
      <div className={!isLoginPage ? 'lg:pl-64' : ''}>
        {!isLoginPage && <AdminHeader onMenuClick={() => setSidebarOpen(true)} />}
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
