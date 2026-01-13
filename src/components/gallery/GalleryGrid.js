// components/gallery/GalleryGridClean.js
'use client';

import { useState } from 'react';
import { FiZoomIn } from 'react-icons/fi';   // ← plus léger que FaSearchPlus

export default function GalleryGrid({ images, onImageClick }) {
  const [hoveredId, setHoveredId] = useState(null);

  if (!images?.length) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-lg font-medium">Aucune image disponible</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-6 lg:gap-8">
      {images.map((image, index) => {
        const isHovered = hoveredId === image.id;

        return (
          <div
            key={image.id}
            className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300"
            onMouseEnter={() => setHoveredId(image.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => onImageClick(index)}
          >
            {/* Image wrapper avec ratio fixe */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
              <img
                src={image.imageUrl}
                alt={image.title || 'Photo'}
                className={`
                  w-full h-full object-cover transition-transform duration-700 ease-out
                  ${isHovered ? 'scale-108' : 'scale-100'}
                `}
                loading="lazy"
              />

              {/* Overlay subtil + zoom icon */}
              <div
                className={`
                  absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400
                  flex items-center justify-center
                `}
              >
                <div
                  className={`
                    p-4 rounded-full bg-white/90 backdrop-blur-sm text-gray-800
                    transition-all duration-300
                    ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                  `}
                >
                  <FiZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Légende minimaliste */}
            <div className="p-4 pt-5 space-y-1.5">
              <h3 className="font-medium text-gray-900 text-base leading-tight line-clamp-2">
                {image.title || 'Sans titre'}
              </h3>

              {image.description && (
                <p className="text-sm text-gray-600 line-clamp-2 min-h-[3rem]">
                  {image.description}
                </p>
              )}

              {/* Ligne très discrète d’infos complémentaires */}
              <div className="pt-3 text-xs text-gray-500 flex items-center justify-between">
                <span>Réf. {image.id.toString().padStart(3, '0')}</span>
                {image.category && (
                  <span className="text-gray-600 font-light">
                    {image.category}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}