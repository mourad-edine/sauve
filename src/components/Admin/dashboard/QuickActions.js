// components/admin/QuickActions.js
import Link from 'next/link';
import { FaPlus, FaEdit, FaCog, FaFileExport, FaChartLine } from 'react-icons/fa';

export default function QuickActions() {
  const actions = [
    {
      title: 'Nouveau projet',
      description: 'Ajouter une réalisation',
      icon: <FaPlus className="w-5 h-5" />,
      href: '/admin/portfolio/new',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Modifier services',
      description: 'Mettre à jour les offres',
      icon: <FaEdit className="w-5 h-5" />,
      href: '/admin/services/edit',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Gérer le contenu',
      description: 'Éditer les pages',
      icon: <FaCog className="w-5 h-5" />,
      href: '/admin/pages',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Exporter données',
      description: 'Télécharger les statistiques',
      icon: <FaFileExport className="w-5 h-5" />,
      href: '/admin/export',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Actions rapides</h2>
      </div>
      <div className="p-6 space-y-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition duration-150 group"
          >
            <div className={`${action.color} p-2 rounded-lg mr-4`}>
              {action.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                {action.title}
              </h3>
              <p className="text-xs text-gray-500">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">Performance SEO</p>
            <p className="text-xs text-gray-500">Score: 92/100</p>
          </div>
          <FaChartLine className="w-5 h-5 text-green-500" />
        </div>
      </div>
    </div>
  );
}