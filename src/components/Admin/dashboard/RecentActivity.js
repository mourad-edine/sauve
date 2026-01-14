// components/admin/RecentActivity.js
import { FaEdit, FaPlus, FaTrash, FaCheckCircle } from 'react-icons/fa';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'edit',
      title: 'Page Services mise à jour',
      description: 'Modification des tarifs des uniformes',
      time: 'Il y a 2 heures',
      icon: <FaEdit className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      type: 'add',
      title: 'Nouvelle réalisation ajoutée',
      description: 'Robe de mariée sur mesure',
      time: 'Il y a 4 heures',
      icon: <FaPlus className="w-4 h-4" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      type: 'delete',
      title: 'Témoignage supprimé',
      description: 'Témoignage non conforme',
      time: 'Il y a 1 jour',
      icon: <FaTrash className="w-4 h-4" />,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 4,
      type: 'approve',
      title: 'Devis approuvé',
      description: 'Client: Hôtel Royal',
      time: 'Il y a 2 jours',
      icon: <FaCheckCircle className="w-4 h-4" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 5,
      type: 'edit',
      title: 'Contenu À Propos modifié',
      description: 'Ajout des nouvelles certifications',
      time: 'Il y a 3 jours',
      icon: <FaEdit className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Activité récente</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="px-6 py-4 hover:bg-gray-50 transition duration-150">
            <div className="flex items-start">
              <div className={`${activity.color} p-2 rounded-lg mr-4`}>
                {activity.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Voir toute l'activité →
        </button>
      </div>
    </div>
  );
}