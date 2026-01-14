// app/admin/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
// import DashboardStats from '@/components/Admin/dashboard/DashboardStats';

import RecentActivity from '@/components/Admin/dashboard/RecentActivity';
import QuickActions from '@/components/Admin/dashboard/QuickActions';

export default function AdminDashboard() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       router.push('/admin/login');
//     }
//   }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement du tableau de bord...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600 mt-2">Bienvenue dans l'administration de votre site</p>
      </div>

      {/* Statistiques */}
      {/* <DashboardStats /> */}

      {/* Grille principale */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activité récente */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        {/* Actions rapides */}
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}