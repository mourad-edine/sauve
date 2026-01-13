'use client';

import { useState, useEffect } from 'react';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryLightbox from '@/components/gallery/GalleryLightbox';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryFilters from '@/components/gallery/GalleryFilters';

const API_URL = "https://admin.camp-toamasina.mg/api/photos_camps";
const STORAGE_URL = "https://admin.camp-toamasina.mg/photo_camps/";

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const imagesPerPage = 12;

  // Récupérer les images depuis l'API
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Transformer les données de l'API
      const formattedImages = data.map((item, index) => ({
        id: item.id,
        imageUrl: `${STORAGE_URL}${item.photos}`,
        category: item.gallerie_id.toString(),
        categoryId: item.gallerie_id,
        title: `Photo #${item.id}`,
        description: (index + 1).toString()
      }));
      
      setImages(formattedImages);
      setFilteredImages(formattedImages);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching images:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filtrer les images par catégorie
  useEffect(() => {
    if (selectedCategory === 'tous') {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(
        img => img.category === selectedCategory
      );
      setFilteredImages(filtered);
    }
    setCurrentPage(1); // Réinitialiser à la première page quand on change de filtre
  }, [selectedCategory, images]);

  // Calculer les images à afficher pour la page actuelle
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  // Créer les catégories dynamiquement
  const categories = [
    { id: 'tous', name: 'Toutes les photos', count: images.length }
  ];

  // Ajouter les autres catégories basées sur les gallerie_id uniques
  const uniqueCategories = [...new Set(images.map(img => img.category))];
  uniqueCategories.forEach(catId => {
    const count = images.filter(img => img.category === catId).length;
    if (count > 0 && catId !== 'tous') {
      categories.push({
        id: catId,
        name: `Camp ${catId}`,
        count: count
      });
    }
  });

  // Ouvrir le lightbox
  const openLightbox = (imageIndex) => {
    const clickedImage = filteredImages[imageIndex];
    const globalIndex = images.findIndex(img => img.id === clickedImage?.id);
    setSelectedImage(globalIndex);
    setIsLightboxOpen(true);
  };

  // Navigation du lightbox
  const goToPrevious = () => {
    setSelectedImage(prev => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : images.length - 1;
    });
  };

  const goToNext = () => {
    setSelectedImage(prev => {
      if (prev === null) return null;
      return prev < images.length - 1 ? prev + 1 : 0;
    });
  };

  // Fermer le lightbox avec Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
      if (e.key === 'ArrowLeft' && isLightboxOpen) {
        goToPrevious();
      }
      if (e.key === 'ArrowRight' && isLightboxOpen) {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des photos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Erreur: {error}</p>
          <button 
            onClick={fetchImages}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* En-tête de la page */}
      <GalleryHero />
      
      {/* Contenu principal */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Filtres */}
        <GalleryFilters 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Statistiques */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Affichage de <span className="font-bold text-blue-700">{currentImages.length}</span> sur{' '}
            <span className="font-bold text-blue-700">{filteredImages.length}</span> images
            {selectedCategory !== 'tous' && (
              <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Camp : {selectedCategory}
              </span>
            )}
          </p>
        </div>

        {/* Grille d'images */}
        <GalleryGrid 
          images={currentImages}
          onImageClick={openLightbox}
        />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                &larr; Précédent
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Afficher un nombre limité de pages
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
                        currentPage === pageNumber
                          ? 'bg-blue-600 text-white font-bold'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return (
                    <span key={pageNumber} className="text-gray-400">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                Suivant &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Info pagination */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Page {currentPage} sur {totalPages} • {filteredImages.length} images total
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage !== null && (
        <GalleryLightbox
          images={images}
          currentIndex={selectedImage}
          onClose={() => setIsLightboxOpen(false)}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
            Nos créateurs peuvent réaliser vos idées en vêtements sur mesure.
            Contactez-nous pour discuter de votre projet.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Discuter de mon projet
          </a>
        </div>
      </div>
    </div>
  );
}