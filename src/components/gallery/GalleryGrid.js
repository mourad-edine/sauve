// components/gallery/GalleryGrid.js
'use client';

import Image from 'next/image';
import { FaSearchPlus, FaTag } from 'react-icons/fa';

export default function GalleryGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {images.map((image, index) => (
        <div 
          key={image.id} 
          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
        >
          {/* Conteneur image */}
          <div 
            className="relative h-64 md:h-72 cursor-pointer"
            onClick={() => onImageClick(index)}
          >
            {/* Image placeholder - remplacez par vos vraies images */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-blue-700 text-5xl mb-3 opacity-30">👔</div>
                <p className="text-blue-900 font-semibold text-sm">
                  {image.title}
                </p>
                <p className="text-blue-700 text-xs mt-1">
                  (Image {image.id})
                </p>
              </div>
            </div>
            
            {/* Overlay au survol */}
            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <FaSearchPlus className="text-3xl mx-auto mb-3" />
                <span className="font-medium">Voir en grand</span>
              </div>
            </div>
            
            {/* Badge catégorie */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              <div className="flex items-center gap-1">
                <FaTag className="text-blue-600 text-xs" />
                <span className="text-blue-700 font-medium text-xs uppercase">
                  {image.category}
                </span>
              </div>
            </div>
          </div>
          
          {/* Description sous l'image */}
          <div className="p-4">
            <h3 className="font-bold text-blue-900 mb-1 text-lg">
              {image.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {image.description}
            </p>
            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500">
                Réf. #{image.id.toString().padStart(3, '0')}
              </span>
              <button 
                onClick={() => onImageClick(index)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
              >
                <FaSearchPlus /> Agrandir
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}