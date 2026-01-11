// components/gallery/GalleryLightbox.js
'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaDownload, 
  FaExternalLinkAlt,
  FaTag
} from 'react-icons/fa';

export default function GalleryLightbox({ 
  images = [], 
  currentIndex = 0, 
  onClose, 
  onPrevious, 
  onNext 
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  // Mettre à jour l'index quand il change depuis l'extérieur
  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  // Empêcher le scroll du body quand le lightbox est ouvert
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const currentImage = images[currentImageIndex];

  if (!currentImage) {
    return null;
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(currentImage.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `photo-${currentImage.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-yellow-400 transition-colors"
      >
        <FaTimes className="text-3xl" />
      </button>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-yellow-400 transition-colors"
          >
            <FaChevronLeft className="text-4xl" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-yellow-400 transition-colors"
          >
            <FaChevronRight className="text-4xl" />
          </button>
        </>
      )}

      {/* Contenu principal */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image principale */}
        <div className="flex-1 flex items-center justify-center h-full max-h-[70vh]">
          <div className="relative w-full h-full">
            <img
              src={currentImage.imageUrl}
              alt={currentImage.title}
              className={`w-full h-full object-contain transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>
        </div>

        {/* Informations */}
        <div className="w-full md:w-80 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{currentImage.title}</h2>
            <div className="flex items-center gap-2 mb-4">
              <FaTag className="text-yellow-400" />
              <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                Camp {currentImage.categoryId}
              </span>
            </div>
            <p className="text-gray-300">
              Photo #{currentImage.description}
            </p>
          </div>

          {/* Métadonnées */}
          <div className="space-y-3 mb-8">
            <div className="flex justify-between">
              <span className="text-gray-400">Référence:</span>
              <span className="font-mono">#{currentImage.id.toString().padStart(3, '0')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Position:</span>
              <span>{currentImageIndex + 1} / {images.length}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <FaDownload />
              Télécharger
            </button>
            <button
              onClick={() => window.open(currentImage.imageUrl, '_blank')}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <FaExternalLinkAlt />
              Ouvrir dans un nouvel onglet
            </button>
          </div>

          {/* Miniatures */}
          {images.length > 1 && (
            <div className="mt-8">
              <h3 className="text-sm text-gray-400 mb-3">Galerie</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-yellow-400 scale-105'
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    <img
                      src={image.imageUrl}
                      alt={`Miniature ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Indicateur de position */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
        {currentImageIndex + 1} / {images.length}
      </div>
    </div>
  );
}