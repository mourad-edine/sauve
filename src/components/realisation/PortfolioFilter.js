// components/PortfolioFilter.js
'use client';

import { useState } from 'react';
import { FaFilter } from "react-icons/fa";

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState('tous');

  const filters = [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'entreprise', label: 'Entreprises' },
    { id: 'particulier', label: 'Particuliers' },
    { id: 'uniforme', label: 'Uniformes' },
    { id: 'ceremonie', label: 'Cérémonies' },
    { id: 'surmesure', label: 'Sur mesure' },
    { id: 'personnalisation', label: 'Personnalisation' }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-900 mb-2 uppercase">Notre Portfolio</h2>
            <p className="text-gray-600">Explorez nos réalisations par catégorie</p>
          </div>
          
          <div className="flex items-center bg-blue-50 px-4 py-3 rounded-lg">
            <FaFilter className="text-blue-700 mr-3" />
            <span className="text-blue-900 font-medium">Filtrer par :</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            {activeFilter === 'tous' 
              ? 'Affichage de tous nos projets' 
              : `Filtre actif : ${filters.find(f => f.id === activeFilter)?.label}`}
          </p>
        </div>
      </div>
    </section>
  );
}