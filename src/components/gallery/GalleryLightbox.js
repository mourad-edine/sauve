// components/gallery/GalleryLightbox.js
'use client';

import { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaDownload, FaShare } from 'react-icons/fa';

export default function GalleryLightbox({ images, currentIndex, onClose, onPrevious, onNext }) {
  const currentImage = images[currentIndex];

  // Empêcher le scroll du body quand le lightbox est ouvert
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm">
      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-2xl md:text-3xl z-50 p-3 hover:bg-white/10 rounded-full transition"
        aria-label="Fermer"
      >
        <FaTimes />
      </button>

      {/* Navigation */}
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl md:text-3xl z-50 p-3 hover:bg-white/10 rounded-full transition"
        aria-label="Image précédente"
      >
        <FaChevronLeft />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl md:text-3xl z-50 p-3 hover:bg-white/10 rounded-full transition"
        aria-label="Image suivante"
      >
        <FaChevronRight />
      </button>

      {/* Contenu du lightbox */}
      <div className="flex flex-col h-full">
        {/* Image principale */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[70vh]">
            {/* Placeholder d'image */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/30 border-2 border-white/20 rounded-xl overflow-hidden">
              <div className="aspect-video flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-white text-8xl mb-6">👔</div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {currentImage.title}
                  </h2>
                  <p className="text-blue-200 text-lg">
                    Image {currentImage.id} • Catégorie : {currentImage.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informations et miniatures */}
        <div className="bg-gray-900/80 border-t border-white/10 p-4 md:p-6">
          <div className="container mx-auto">
            {/* Description */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentImage.title}
              </h3>
              <p className="text-blue-200 max-w-2xl mx-auto">
                {currentImage.description}
              </p>
            </div>

            {/* Miniatures */}
            <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => {
                    const newIndex = images.findIndex(img => img.id === image.id);
                    if (newIndex !== -1) {
                      // La navigation se fera via le parent
                      // On va simplement mettre à jour l'index
                    }
                  }}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition ${
                    index === currentIndex
                      ? 'border-yellow-500 ring-2 ring-yellow-500/30'
                      : 'border-transparent hover:border-white/50'
                  }`}
                >
                  <div className={`w-full h-full flex items-center justify-center ${
                    index === currentIndex ? 'bg-blue-800' : 'bg-blue-900/50'
                  }`}>
                    <div className="text-white text-lg">
                      {image.id}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Contrôles */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
              <div className="text-white/70 text-sm">
                Image {currentIndex + 1} sur {images.length}
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition">
                  <FaDownload /> Télécharger
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition">
                  <FaShare /> Partager
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs clavier */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm hidden md:block">
        Utilisez les flèches ← → pour naviguer • Échap pour fermer
      </div>

      {/* Styles pour cacher la scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}