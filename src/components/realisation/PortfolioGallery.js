// components/PortfolioGallery.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight, FaTag } from "react-icons/fa";
import Link from 'next/link';

const API_URL = "http://localhost/confectionvonjy/public/api/photos_camps";
const STORAGE_URL = "http://localhost/confectionvonjy/public/photo_camps/";

export default function PortfolioGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Prendre seulement les 4 premières photos
      const firstFourPhotos = data.slice(0, 4);
      
      // Transformer les données de l'API en projets
      const formattedProjects = firstFourPhotos.map((item, index) => {
        // Catégories basées sur gallerie_id
        const getCategory = (id) => {
          const categories = [
            'Uniformes Professionnels',
            'Tenues de Camp',
            'Équipements de Camping',
            'Vêtements d\'Équipe',
            'Équipements de Groupe',
            'Matériel Collectif'
          ];
          return categories[id % categories.length] || 'Camp Professionnel';
        };

        const getDescription = (id, index) => {
          const descriptions = [
            'Vêtements spécialement conçus pour les activités de camp avec des matériaux résistants et confortables.',
            'Tenues adaptées aux conditions extérieures avec une excellente respirabilité et durabilité.',
            'Équipements de qualité professionnelle pour des performances optimales en milieu naturel.',
            'Design fonctionnel et ergonomique pour le confort lors des activités de groupe prolongées.',
            'Matériaux techniques offrant protection contre les éléments tout en garantissant la mobilité.',
            'Conception soignée avec attention aux détails pour répondre aux besoins spécifiques du camp.'
          ];
          return descriptions[index % descriptions.length];
        };

        return {
          id: item.id,
          title: `Camp ${item.gallerie_id} - Collection ${index + 1}`,
          reference: `CAMP-${item.gallerie_id}-${String(item.id).padStart(3, '0')}`,
          description: getDescription(item.gallerie_id, index),
          imageUrl: `${STORAGE_URL}${item.photos}`,
          alt: `Photo du camp ${item.gallerie_id}`,
          category: getCategory(item.gallerie_id),
          campId: item.gallerie_id,
          date: new Date(item.created_at).toLocaleDateString('fr-FR')
        };
      });
      
      setProjects(formattedProjects);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching projects:', err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = selectedIndex !== null ? projects[selectedIndex] : null;

  // Images par défaut si l'API échoue
  const defaultProjects = [
    {
      id: 1,
      title: "Camp 10 - Collection Professionnelle",
      reference: "CAMP-10-001",
      description: "Vêtements spécialement conçus pour les activités de camp avec des matériaux résistants et confortables.",
      imageUrl: "https://placehold.co/600x400/1e40af/ffffff?text=Camp+10",
      alt: "Camp professionnel",
      category: "Uniformes de Camp",
      campId: 10
    },
    // ... autres projets par défaut
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  if (loading) {
    return (
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Notre Portfolio</h2>
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="gallery" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Titre et description */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 uppercase">
              Galerie des Camps
              <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
                Nos dernières réalisations
              </span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Découvrez une sélection de nos photos de camp les plus récentes. 
              Chaque projet représente notre engagement pour la qualité et l'expertise.
            </p>
            {error && (
              <p className="text-sm text-red-500 mt-2">
                Données en cache - {error}
              </p>
            )}
          </div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {displayProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                onClick={() => openModal(index)}
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 2}
                  />
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <FaExpand className="text-white text-3xl mb-2" />
                      <span className="text-white font-medium">Voir les détails</span>
                    </div>
                  </div>
                  {/* Badge catégorie */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <FaTag className="text-xs" /> {project.category}
                    </span>
                  </div>
                </div>

                {/* Contenu texte */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-blue-900 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 min-h-[40px]">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {project.reference}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="hidden md:inline">Camp</span> {project.campId}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton Voir plus */}
          <div className="text-center mt-12 md:mt-16">
            <Link 
              href='/galerie'
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Explorer toute la galerie
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <p className="text-gray-500 text-sm mt-3">
              {projects.length} photos disponibles dans notre collection complète
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && currentProject && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10 bg-black/50 p-3 rounded-full hover:bg-black/70"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Navigation */}
            {displayProjects.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-10 bg-black/50 p-4 rounded-full hover:bg-black/70"
                >
                  <FaChevronLeft className="text-3xl" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-10 bg-black/50 p-4 rounded-full hover:bg-black/70"
                >
                  <FaChevronRight className="text-3xl" />
                </button>
              </>
            )}

            {/* Contenu principal */}
            <div className="flex flex-col lg:flex-row h-full gap-6 md:gap-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6">
              {/* Image grande */}
              <div className="flex-1 relative min-h-64 md:min-h-96 lg:min-h-full rounded-xl overflow-hidden">
                <Image
                  src={currentProject.imageUrl}
                  alt={currentProject.alt}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>

              {/* Infos texte */}
              <div className="lg:w-96 text-white flex flex-col justify-center p-4 md:p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-bold bg-blue-600 inline-block px-4 py-2 rounded-full">
                    {currentProject.reference}
                  </span>
                  <span className="text-sm font-bold bg-yellow-600/80 inline-block px-4 py-2 rounded-full">
                    {currentProject.category}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {currentProject.title}
                </h2>
                
                <div className="space-y-4 mb-6">
                  <p className="text-base md:text-lg leading-relaxed opacity-90">
                    {currentProject.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Camp ID</p>
                      <p className="font-semibold">{currentProject.campId}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Date d'ajout</p>
                      <p className="font-semibold">{currentProject.date || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                {/* Indicateur de progression */}
                {displayProjects.length > 1 && (
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="text-center text-sm opacity-70">
                      {selectedIndex + 1} / {displayProjects.length}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}