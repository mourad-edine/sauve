// components/gallery/GalleryFilters.js
'use client';

import { FaFilter, FaTags } from 'react-icons/fa';

export default function GalleryFilters({ selectedCategory, setSelectedCategory, categories = [] }) {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="uppercase font-bold text-blue-900 flex items-center gap-2">
            <FaFilter className="text-blue-600" />
            Filtrez par camp
          </h4>
          <p className="text-gray-600 mt-1">
            Sélectionnez un camp pour afficher ses photos
          </p>
        </div>
        
        <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-lg">
          <FaTags className="inline mr-2" />
          {categories.find(cat => cat.id === selectedCategory)?.count || 0} images disponibles
        </div>
      </div>

      {/* Boutons de filtre */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 md:px-5 md:py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
            }`}
          >
            <span className="font-medium">{category.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              selectedCategory === category.id
                ? 'bg-white/20'
                : 'bg-gray-200'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}