// components/gallery/GalleryGridClean.js
'use client';

import { useState } from 'react';
import { FiZoomIn, FiFolder } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function GalleryGrid({ images, onImageClick }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [touchDevice, setTouchDevice] = useState(false);

  // Détection des appareils tactiles
  useState(() => {
    setTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  });

  if (!images?.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20 px-4"
      >
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiFolder className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Galerie vide
          </h3>
          <p className="text-gray-500">
            Aucune photo disponible pour le moment
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {images.map((image, index) => {
        const isHovered = hoveredId === image.id;

        return (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-white border border-gray-200 flex flex-col h-full group"
            onMouseEnter={() => !touchDevice && setHoveredId(image.id)}
            onMouseLeave={() => !touchDevice && setHoveredId(null)}
            onTouchStart={() => touchDevice && setHoveredId(image.id)}
            onTouchEnd={() => touchDevice && setTimeout(() => setHoveredId(null), 150)}
          >
            {/* Conteneur image */}
            <div 
              className="relative aspect-[4/3] bg-gray-50 cursor-pointer overflow-hidden"
              onClick={() => onImageClick(index)}
            >
              {/* Image */}
              <motion.img
                src={image.imageUrl}
                alt={image.title || 'Photo de la galerie'}
                className="object-contain p-3 w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay avec effet de zoom */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white/90 p-3 rounded-full">
                  <FiZoomIn className="text-gray-700 text-xl" />
                </div>
              </div>
            </div>

            {/* Contenu textuel */}
            <div className="p-5 flex flex-col flex-grow">
              {/* Catégorie */}
              {image.category && (
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {image.category}
                </div>
              )}

              {/* Titre */}
            
              {/* Référence */}
              <div className="text-xs text-gray-500 mb-4">
                Réf. {image.reference || `REF-${image.id.toString().padStart(3, '0')}`}
              </div>

              {/* Date */}
              {image.date && (
                <div className="text-xs text-gray-500 mb-4">
                  {image.date}
                </div>
              )}

              {/* Bouton d'action */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <button
                  onClick={() => onImageClick(index)}
                  className="text-sm text-blue-700 hover:text-blue-900 font-medium inline-flex items-center gap-1.5 group/btn"
                >
                  Voir la photo
                  <svg 
                    className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}