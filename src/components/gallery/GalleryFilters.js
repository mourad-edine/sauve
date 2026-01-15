'use client';

import { FaFilter } from 'react-icons/fa';

export default function GalleryFilters({ selectedCategory, setSelectedCategory, categories = [] }) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2.5">
          <FaFilter className="text-blue-600" />
          Camps disponibles
        </h4>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {categories.find(c => c.id === selectedCategory)?.count || 'Toutes'} photos
        </span>
      </div>

      <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`
              flex-shrink-0 px-5 py-3 md:px-6 md:py-4 text-sm md:text-base font-medium transition-colors relative
              ${selectedCategory === category.id
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
          >
            {category.name}
            <span className="ml-2 text-xs text-gray-500">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}