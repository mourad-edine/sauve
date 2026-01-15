// components/gallery/GalleryGridClean.js
'use client';

import { useState } from 'react';
import { FiZoomIn, FiFolder, FiCalendar } from 'react-icons/fi';
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

  // Fonction pour obtenir une couleur basée sur l'ID
  const getColorFromId = (id) => {
    const colors = [
      { bg: '#3B82F6', text: '#1D4ED8' }, // Blue
      { bg: '#10B981', text: '#047857' }, // Emerald
      { bg: '#8B5CF6', text: '#7C3AED' }, // Violet
      { bg: '#F59E0B', text: '#D97706' }, // Amber
      { bg: '#EC4899', text: '#DB2777' }, // Pink
      { bg: '#14B8A6', text: '#0D9488' }, // Teal
    ];
    return colors[id % colors.length];
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
      {images.map((image, index) => {
        const isHovered = hoveredId === image.id;
        const color = getColorFromId(image.id);

        return (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative"
            onMouseEnter={() => !touchDevice && setHoveredId(image.id)}
            onMouseLeave={() => !touchDevice && setHoveredId(null)}
            onTouchStart={() => touchDevice && setHoveredId(image.id)}
            onTouchEnd={() => touchDevice && setTimeout(() => setHoveredId(null), 150)}
          >
            {/* Carte principale */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
              {/* Conteneur image avec badge */}
              <div 
                className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer"
                onClick={() => onImageClick(index)}
              >
                {/* Badge catégorie */}
                {image.category && (
                  <div className="absolute top-3 left-3 z-10">
                    <span 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white shadow-sm backdrop-blur-sm"
                      style={{ backgroundColor: `${color.bg}CC` }}
                    >
                      <FiCalendar className="w-3 h-3" />
                      {image.category}
                    </span>
                  </div>
                )}

                {/* Badge position (sur mobile) */}
                <div className="absolute top-3 right-3 z-10 sm:hidden">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-black/70 text-white backdrop-blur-sm">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Image */}
                <motion.img
                  src={image.imageUrl}
                  alt={image.title || 'Photo de la galerie'}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  loading="lazy"
                />

                {/* Overlay avec effet gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bouton zoom */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isHovered || touchDevice ? 1 : 0,
                    scale: isHovered || touchDevice ? 1 : 0.9 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className="p-3 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/20"
                    style={{ color: color.text }}
                  >
                    <FiZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </motion.div>

                {/* Indicateur de survol */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: color.bg }}
                />
              </div>

              {/* Contenu textuel */}
              <div className="p-4 sm:p-5">
                {/* Titre avec ligne de séparation */}
                <div className="mb-3 pb-3 border-b border-gray-100">
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base leading-tight line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {image.title || 'Sans titre'}
                  </h3>
                </div>

                {/* Métadonnées */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    {/* Référence */}
                    <div className="flex items-center gap-1.5">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: color.bg }}
                      />
                      <span className="text-xs font-mono text-gray-500">
                        REF-{image.id.toString().padStart(3, '0')}
                      </span>
                    </div>

                    {/* Date ou info supplémentaire */}
                    {image.date && (
                      <span className="text-xs text-gray-400 hidden sm:inline">
                        •
                      </span>
                    )}
                  </div>

                  {/* Indicateur statique pour desktop */}
                  <div className="hidden sm:block">
                    <span className="text-xs text-gray-400">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>

              {/* État actif (touch) */}
              {touchDevice && isHovered && (
                <motion.div
                  className="absolute inset-0 border-2 rounded-lg pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ borderColor: `${color.bg}40` }}
                />
              )}
            </div>

            {/* Effet de lueur au survol (desktop seulement) */}
            {!touchDevice && (
              <motion.div
                className="absolute -inset-0.5 rounded-lg blur-sm opacity-0 group-hover:opacity-70 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.7 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ backgroundColor: color.bg }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}