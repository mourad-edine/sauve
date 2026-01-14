// components/AdminSidebar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaChartBar, 
  FaServicestack, 
  FaImages, 
  FaUsers, 
  FaFileAlt, 
  FaCog, 
  FaSignOutAlt,
  FaTimes,
  FaTachometerAlt
} from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminSidebar({ onClose }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const menuItems = [
    {
      title: 'Tableau de bord',
      href: '/admin',
      icon: <FaTachometerAlt className="w-5 h-5" />,
      exact: true
    },
    {
      title: 'Statistiques',
      href: '/admin/stats',
      icon: <FaChartBar className="w-5 h-5" />,
      badge: '3'
    },
    {
      title: 'Services',
      href: '/admin/services',
      icon: <FaServicestack className="w-5 h-5" />
    },
    {
      title: 'Réalisations',
      href: '/admin/portfolio',
      icon: <FaImages className="w-5 h-5" />
    },
    {
      title: 'Clients',
      href: '/admin/clients',
      icon: <FaUsers className="w-5 h-5" />,
      badge: '12'
    },
    {
      title: 'Pages',
      href: '/admin/pages',
      icon: <FaFileAlt className="w-5 h-5" />
    },
    {
      title: 'Paramètres',
      href: '/admin/settings',
      icon: <FaCog className="w-5 h-5" />
    }
  ];

  const isActive = (href, exact = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo et fermeture mobile */}
      <div className="flex items-center justify-between h-16 flex-shrink-0 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex items-center">
          <div className="bg-white p-2 rounded-lg">
            <FaServicestack className="text-xl text-blue-700" />
          </div>
          <div className="ml-3">
            <h2 className="text-lg font-bold text-white">Confection<span className="text-yellow-300">Pro</span></h2>
            <p className="text-xs text-blue-200">Admin Panel</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:text-gray-300"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Informations utilisateur */}
      <div className="px-4 py-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 font-bold">{user?.avatar || 'A'}</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{user?.name || 'Administrateur'}</p>
            <p className="text-xs text-gray-500">{user?.email || 'admin@confectionpro.com'}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const active = isActive(item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                active
                  ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <div className={`mr-3 ${active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {item.icon}
              </div>
              <span className="flex-1">{item.title}</span>
              {item.badge && (
                <span className={`ml-3 inline-block py-0.5 px-2 text-xs rounded-full ${
                  active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bouton de déconnexion */}
      <div className="flex-shrink-0 border-t border-gray-200 p-4">
        <button
          onClick={logout}
          className="group flex items-center w-full px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200"
        >
          <FaSignOutAlt className="mr-3 text-gray-400 group-hover:text-red-600 w-5 h-5" />
          Déconnexion
        </button>
      </div>
    </div>
  );
}