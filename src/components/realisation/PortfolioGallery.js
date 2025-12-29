// components/PortfolioGallery.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from 'next/link';

export default function PortfolioGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null); // index dans le tableau projects

  const projects = [
    {
      id: 1,
      title: "Uniformes Hôtel de Luxe",
      reference: "REF-001",
      description: "Collection complète d'uniformes pour un hôtel 5 étoiles à Toamasina. Design élégant et fonctionnel adapté au personnel de réception, restauration et housekeeping.",
      imageUrl: "https://placehold.co/600x400", // À remplacer par tes vraies images
      alt: "Uniformes hôtel de luxe",
    },
    {
      id: 2,
      title: "Robe de mariée sur mesure",
      reference: "REF-002",
      description: "Robe de mariée en soie naturelle avec broderies main personnalisées. Coupe sirène, traîne détachable et détails en dentelle de Calais.",
      imageUrl: "https://placehold.co/600x400",
      alt: "Robe de mariée sur mesure",
    },
    {
      id: 3,
      title: "Tenues médicales personnalisées",
      reference: "REF-003",
      description: "Blouses et tenues professionnelles pour une clinique privée. Tissus anti-taches, coupes modernes et broderie du logo de la clinique.",
      imageUrl: "https://placehold.co/600x400",
      alt: "Tenues médicales",
    },
    {
      id: 4,
      title: "Costume 3 pièces sur mesure",
      reference: "REF-004",
      description: "Costume d'affaires en laine italienne premium. Coupe slim, doublure personnalisée et finitions main pour un ajustement parfait.",
      imageUrl: "https://placehold.co/600x400",
      alt: "Costume sur mesure",
    },
    // Ajoute d'autres projets ici...
  ];

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

  return (
    <>
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Titre optionnel */}
          <div className="text-center mb-12 md:mb-16">
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-4 uppercase">
    Notre Portfolio
    <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
      Nos réalisations
    </span>
  </h2>
  <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
  <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
    Explorez nos projets les plus marquants et notre expertise en action.
  </p>
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                onClick={() => openModal(index)}
              >
                {/* Image placeholder ou réelle */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-indigo-200">
                  <Image
                    src={project.imageUrl}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaExpand className="text-white text-3xl" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-blue-900 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {project.reference}
                    </span>
                    <span className="text-xs text-gray-500">Cliquez pour agrandir</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href='/galerie' className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Voir plus de réalisations
            </Link>
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
            className="relative max-w-5xl w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant dedans
          >
            {/* Bouton fermer */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10 bg-black/50 p-3 rounded-full"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Navigation précédente */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-10 bg-black/50 p-4 rounded-full"
            >
              <FaChevronLeft className="text-3xl" />
            </button>

            {/* Navigation suivante */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-10 bg-black/50 p-4 rounded-full"
            >
              <FaChevronRight className="text-3xl" />
            </button>

            {/* Contenu principal */}
            <div className="flex flex-col lg:flex-row h-full gap-8">
              {/* Image grande */}
              <div className="flex-1 relative min-h-96 lg:min-h-full">
                <Image
                  src={currentProject.imageUrl}
                  alt={currentProject.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Infos texte (à droite sur grand écran) */}
              <div className="lg:w-96 text-white flex flex-col justify-center px-6 lg:px-0">
                <span className="text-sm font-bold bg-blue-600 inline-block px-4 py-2 rounded-full mb-4">
                  {currentProject.reference}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {currentProject.title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed opacity-90">
                  {currentProject.description}
                </p>

                {/* Indicateur de progression */}
                <div className="mt-12 text-center text-sm opacity-70">
                  {selectedIndex + 1} / {projects.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}