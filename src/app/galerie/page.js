"use client";

import { useState, useEffect, useRef } from "react"; // Ajouter useRef
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import { FaArrowRight } from "react-icons/fa";

const API_URL = "https://admin.confection-vonjy.mg/api/photos_camps";
const STORAGE_URL = "https://admin.confection-vonjy.mg/photo_camps/";

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState("tous");
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Référence pour le conteneur à scroller
  const contentRef = useRef(null);

  const imagesPerPage = 12;

  // Fonction pour scroller en haut
  const scrollToTop = () => {
    if (contentRef.current) {
      // Scroller le conteneur parent au début
      contentRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Ou pour scroller la fenêtre
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Scroller en haut quand la page change
  useEffect(() => {
    if (currentPage > 1) {
      scrollToTop();
    }
  }, [currentPage]);

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
        description: (index + 1).toString(),
      }));

      setImages(formattedImages);
      setFilteredImages(formattedImages);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching images:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filtrer les images par catégorie
  useEffect(() => {
    if (selectedCategory === "tous") {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(
        (img) => img.category === selectedCategory
      );
      setFilteredImages(filtered);
    }
    setCurrentPage(1); // Réinitialiser à la première page quand on change de filtre
    setSelectedImage(null); // Réinitialiser la sélection du lightbox
  }, [selectedCategory, images]);

  // Calculer les images à afficher pour la page actuelle
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  // Créer les catégories dynamiquement
  const categories = [
    { id: "tous", name: "Toutes les photos", count: images.length },
  ];

  // Ajouter les autres catégories basées sur les gallerie_id uniques
  const uniqueCategories = [...new Set(images.map((img) => img.category))];
  uniqueCategories.forEach((catId) => {
    const count = images.filter((img) => img.category === catId).length;
    if (count > 0 && catId !== "tous") {
      categories.push({
        id: catId,
        name: `collections`,
        count: count,
      });
    }
  });

  // Ouvrir le lightbox
  const openLightbox = (imageIndex) => {
    const clickedImage = currentImages[imageIndex];
    
    if (!clickedImage) return;
    
    const filteredIndex = filteredImages.findIndex(img => img.id === clickedImage.id);
    
    if (filteredIndex !== -1) {
      setSelectedImage(filteredIndex);
      setIsLightboxOpen(true);
    }
  };

  // Navigation du lightbox dans filteredImages
  const goToPrevious = () => {
    setSelectedImage((prev) => {
      if (prev === null || prev === undefined) return 0;
      return prev > 0 ? prev - 1 : filteredImages.length - 1;
    });
  };

  const goToNext = () => {
    setSelectedImage((prev) => {
      if (prev === null || prev === undefined) return 0;
      return prev < filteredImages.length - 1 ? prev + 1 : 0;
    });
  };

  // Gérer le changement de page avec scroll en haut
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Gérer la navigation précédente/suivante avec scroll en haut
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Fermer le lightbox avec Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
      if (e.key === "ArrowLeft" && isLightboxOpen) {
        goToPrevious();
      }
      if (e.key === "ArrowRight" && isLightboxOpen) {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  // Gérer la fermeture du lightbox si filteredImages change
  useEffect(() => {
    if (isLightboxOpen && filteredImages.length > 0) {
      if (selectedImage >= filteredImages.length) {
        setIsLightboxOpen(false);
        setSelectedImage(null);
      }
    }
  }, [filteredImages, isLightboxOpen, selectedImage]);

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

      {/* Contenu principal avec ref */}
      <div ref={contentRef} className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Filtres */}
        <GalleryFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Grille d'images */}
        <GalleryGrid images={currentImages} onImageClick={openLightbox} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                &larr; Précédent
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 &&
                    pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
                        currentPage === pageNumber
                          ? "bg-blue-600 text-white font-bold"
                          : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
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
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                Suivant &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Info pagination */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Page {currentPage} sur {totalPages} • {filteredImages.length} images
          total
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage !== null && selectedImage < filteredImages.length && (
        <GalleryLightbox
          images={filteredImages}
          currentIndex={selectedImage}
          onClose={() => {
            setIsLightboxOpen(false);
            setSelectedImage(null);
          }}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}

      {/* CTA Section */}
      <div className="bg-white border-t border-gray-200 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="mb-10">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-8 bg-gray-300"></div>
              <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                Prêt à démarrer ?
              </span>
              <div className="h-px w-8 bg-gray-300"></div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-5">
            Un projet en tête ?
          </h2>

          <p className="text-md md:text-md text-gray-600 max-w-xl mx-auto leading-relaxed mb-10">
            Discutons ensemble de votre projet.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-blue-800 text-white font-medium px-8 py-4 hover:bg-blue-900 transition-colors duration-300"
            >
              <span>Échanger sur mon projet</span>
              <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}