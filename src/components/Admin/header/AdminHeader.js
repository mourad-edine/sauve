// components/AdminHeader.js
'use client';

import { FaBell, FaEnvelope, FaSearch, FaBars } from 'react-icons/fa';

export default function AdminHeader({ onMenuClick }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
        {/* Bouton menu mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
        >
          <FaBars className="w-6 h-6" />
        </button>

        {/* Barre de recherche */}
        <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Rechercher..."
            />
          </div>
        </div>

        {/* Notifications et actions */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
            <FaBell className="w-5 h-5" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
          </button>
          
          <button className="relative p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
            <FaEnvelope className="w-5 h-5" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-blue-400"></span>
          </button>

          {/* Avatar utilisateur */}
          <div className="relative">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200">
              <span className="text-blue-700 font-bold text-sm">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}