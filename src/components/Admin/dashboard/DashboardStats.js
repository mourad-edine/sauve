// components/admin/DashboardStats.js
import { FaUsers, FaAddressBook, FaImages, FaDollarSign } from 'react-icons/fa';

export default function DashboardStats() {
  const stats = [
    {
      title: 'Visiteurs',
      value: '2,543',
      change: '+12%',
      icon: <FaUsers className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Projets réalisés',
      value: '156',
      change: '+8%',
      icon: <FaAddressBook className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      title: 'Réalisations',
      value: '42',
      change: '+3',
      icon: <FaImages className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      title: 'Chiffre d\'affaires',
      value: '€45,230',
      change: '+18%',
      icon: <FaDollarSign className="w-6 h-6" />,
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
              <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} ce mois
              </p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <div className="text-white">{stat.icon}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}