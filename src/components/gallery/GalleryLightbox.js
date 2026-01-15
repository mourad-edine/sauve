// components/gallery/GalleryLightbox.js
'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaDownload, 
  FaExternalLinkAlt,
  FaTag,
  FaExpand,
  FaCompress
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
  const [isMobile, setIsMobile] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setIsZoomed(!isZoomed);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevious, onNext, isZoomed]);

  // Empêcher le scroll du body quand le lightbox est ouvert
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Gestion du touch pour mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      onNext();
    }
    if (isRightSwipe) {
      onPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

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
        className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 text-white hover:text-yellow-400 transition-colors p-2"
        aria-label="Fermer"
      >
        <FaTimes className="text-2xl sm:text-3xl" />
      </button>

      {/* Bouton info (mobile seulement) */}
      {isMobile && (
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="absolute top-3 left-3 z-10 text-white hover:text-yellow-400 transition-colors p-2 bg-black/50 rounded-lg"
          aria-label="Afficher les informations"
        >
          <FaTag className="text-xl" />
        </button>
      )}

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-yellow-400 transition-colors p-3 sm:p-4 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50"
            aria-label="Photo précédente"
          >
            <FaChevronLeft className="text-2xl sm:text-3xl lg:text-4xl" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-yellow-400 transition-colors p-3 sm:p-4 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50"
            aria-label="Photo suivante"
          >
            <FaChevronRight className="text-2xl sm:text-3xl lg:text-4xl" />
          </button>
        </>
      )}

      {/* Bouton zoom */}
      <button
        onClick={() => setIsZoomed(!isZoomed)}
        className="absolute top-14 sm:top-4 left-1/2 transform -translate-x-1/2 z-10 text-white hover:text-yellow-400 transition-colors p-2 sm:p-3 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-black/50 hidden sm:flex items-center gap-2"
        aria-label={isZoomed ? "Réduire" : "Agrandir"}
      >
        {isZoomed ? <FaCompress /> : <FaExpand />}
        <span className="text-xs sm:text-sm">{isZoomed ? 'Réduire' : 'Agrandir'}</span>
      </button>

      {/* Contenu principal - Disposition différente mobile vs desktop */}
      <div className={`w-full h-full mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 ${showInfo ? 'pt-20' : 'pt-16'}`}>
        {/* Image principale */}
        <div 
          className={`flex-1 flex items-center justify-center h-full ${showInfo ? 'max-h-[40vh]' : 'max-h-[70vh]'} sm:max-h-[70vh] w-full`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full h-full">
            <img
              src={currentImage.imageUrl}
              alt={currentImage.title}
              className={`w-full h-full object-contain transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => {
                if (isMobile) {
                  if (!showInfo) setIsZoomed(!isZoomed);
                } else {
                  setIsZoomed(!isZoomed);
                }
              }}
              loading="eager"
            />
          </div>
        </div>

        {/* Informations - Version desktop */}
        {!isMobile && (
          <div className="w-full md:w-80 lg:w-96 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-white">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 line-clamp-2">
                {currentImage.title}
              </h2>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FaTag className="text-yellow-400 text-sm sm:text-base" />
                <span className="bg-yellow-400/20 text-yellow-300 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                  Camp {currentImage.categoryId || 'N/A'}
                </span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                {currentImage.description || `Photo #${currentImage.id}`}
              </p>
            </div>

            {/* Métadonnées */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Référence:</span>
                <span className="font-mono">#{currentImage.id.toString().padStart(3, '0')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Position:</span>
                <span>{currentImageIndex + 1} / {images.length}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleDownload}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
              >
                <FaDownload className="text-sm sm:text-base" />
                Télécharger
              </button>
              <button
                onClick={() => window.open(currentImage.imageUrl, '_blank')}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
              >
                <FaExternalLinkAlt className="text-sm sm:text-base" />
                Ouvrir dans un nouvel onglet
              </button>
            </div>

            {/* Miniatures */}
            {images.length > 1 && (
              <div className="mt-6 sm:mt-8">
                <h3 className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Galerie</h3>
                <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-yellow-400 scale-105'
                          : 'border-transparent hover:border-white/50'
                      }`}
                      aria-label={`Voir la photo ${index + 1}`}
                    >
                      <img
                        src={image.imageUrl}
                        alt={`Miniature ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Informations - Version mobile (drawer) */}
        {isMobile && showInfo && (
          <div className="w-full bg-black/90 backdrop-blur-sm rounded-t-2xl p-4 text-white animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{currentImage.title}</h2>
              <button
                onClick={() => setShowInfo(false)}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Masquer les informations"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <FaTag className="text-yellow-400" />
                <span className="bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full text-xs">
                  Camp {currentImage.categoryId || 'N/A'}
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                {currentImage.description || `Photo #${currentImage.id}`}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <span className="text-xs text-gray-400">Référence:</span>
                <div className="text-sm font-mono">#{currentImage.id.toString().padStart(3, '0')}</div>
              </div>
              <div>
                <span className="text-xs text-gray-400">Position:</span>
                <div className="text-sm">{currentImageIndex + 1} / {images.length}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-1 text-xs"
              >
                <FaDownload className="text-xs" />
                Télécharger
              </button>
              <button
                onClick={() => window.open(currentImage.imageUrl, '_blank')}
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg flex items-center justify-center gap-1 text-xs"
              >
                <FaExternalLinkAlt className="text-xs" />
                Ouvrir
              </button>
            </div>

            {/* Miniatures mobile */}
            {images.length > 1 && (
              <div className="mt-4">
                <h3 className="text-xs text-gray-400 mb-2">Galerie</h3>
                <div className="flex gap-1.5 overflow-x-auto pb-1">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-10 h-10 rounded overflow-hidden border-2 ${
                        currentImageIndex === index
                          ? 'border-yellow-400'
                          : 'border-transparent'
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
        )}
      </div>

      {/* Indicateur de position (mobile seulement si info cachée) */}
      {isMobile && !showInfo && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white/80 text-xs bg-black/50 px-3 py-1 rounded-full">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}

      {/* Indicateur de position (desktop) */}
      {!isMobile && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-1 rounded-full">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}

      {/* Indicateur de swipe pour mobile */}
      {isMobile && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/50 text-xs">
          Swipez pour naviguer
        </div>
      )}
    </div>
  );
}