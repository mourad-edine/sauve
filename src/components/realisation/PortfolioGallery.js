'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes, FaArrowRight } from "react-icons/fa";

const API_URL = "https://admin.confection-vonjy.mg/api/photos_camps";
const STORAGE_URL = "https://admin.confection-vonjy.mg/photo_camps/";

const primary = '#1e40af';     // bleu foncé principal
const primaryDark = '#1e3a8a';
const textDark = '#111827';
const textMuted = '#4b5563';
const borderLight = '#d1d5db';

export default function PortfolioGallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const formatted = data.slice(0, 8).map((item, idx) => ({
        id: item.id,
        title: `Camp ${item.gallerie_id}`,
        reference: `CAMP-${item.gallerie_id}-${String(item.id).padStart(3, '0')}`,
        description: 'Photo du camp de formation',
        fullDescription: 'Documentation photographique de nos camps de formation professionnelle à Toamasina.',
        imageUrl: `${STORAGE_URL}${item.photos}`,
        alt: `Photo du camp ${item.gallerie_id}`,
        category: 'Camp de Formation',
        campId: item.gallerie_id,
        year: '2024',
        location: 'Toamasina, Madagascar'
      }));

      setProjects(formatted);
    } catch (err) {
      setError(err.message);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToPrev = () => {
    setSelectedIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Pagination : 4 par page
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin h-10 w-10 border-4 border-blue-700 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de la galerie...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-red-600">Erreur lors du chargement</p>
          <p className="text-sm text-gray-500 mt-2">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-10xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              Nos réalisations
            </span>
            {/* <h2 className="mt-3 text-2xl md:text-3xl font-light text-gray-900">
              Moments forts des camps
            </h2> */}
            <div className="w-16 h-px bg-blue-700 mx-auto mt-5"></div>
          </div>

          {/* Grille */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {currentProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border border-gray-200 flex flex-col"
              >
                <div
                  className="relative aspect-[4/3] bg-gray-50 cursor-pointer overflow-hidden"
                  onClick={() => openModal(currentPage * itemsPerPage + idx)}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.alt}
                    fill
                    className="object-contain p-3 transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <FaExpand className="text-white text-2xl" />
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Camp {project.campId}
                  </div>
                 
                  <div className="text-xs text-gray-500 mb-4">
                    Réf. {project.reference}
                  </div>

                  <div className="mt-auto">
                    <button
                      onClick={() => openModal(currentPage * itemsPerPage + idx)}
                      className="text-sm text-blue-700 hover:text-blue-900 font-medium inline-flex items-center gap-1.5"
                    >
                      Voir la photo
                      <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination simple */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <button
                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="p-2 text-gray-500 hover:text-gray-900 disabled:opacity-40"
              >
                <FaChevronLeft />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-8 h-8 flex items-center justify-center text-sm font-medium ${
                      i === currentPage
                        ? 'text-white bg-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                className="p-2 text-gray-500 hover:text-gray-900 disabled:opacity-40"
              >
                <FaChevronRight />
              </button>
            </div>
          )}

          {/* Call to action final */}
          <div className="mt-20 text-center">
            <div className="border border-gray-200 p-8 md:p-10 max-w-3xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/galerie"
                  className="bg-blue-700 text-white px-7 py-3 font-medium hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
                >
                  Voir toute la galerie
                  <FaArrowRight className="text-sm" />
                </Link>

                <Link
                  href="/contact"
                  className="border border-gray-300 px-7 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
  {selectedIndex !== null && projects[selectedIndex] && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col lg:flex-row"
        onClick={e => e.stopPropagation()}
      >
        {/* Partie image */}
        <div className="lg:w-3/5 bg-gray-50 relative min-h-[40vh] lg:min-h-auto">
          <Image
            src={projects[selectedIndex].imageUrl}
            alt={projects[selectedIndex].alt}
            fill
            className="object-contain p-6 lg:p-10"
            priority
          />
        </div>

        {/* Partie infos – version très épurée */}
        <div className="lg:w-2/5 p-6 md:p-8 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Camp {projects[selectedIndex].campId}
              </div>
              
              <div className="text-sm text-gray-500 mt-1">
                Réf. {projects[selectedIndex].reference}
              </div>
            </div>

            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-900 text-xl"
              aria-label="Fermer"
            >
              <FaTimes />
            </button>
          </div>

          {/* Liste des infos disponibles – sans description longue */}
          <div className="space-y-5 text-gray-700">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                Informations
              </h4>
              <ul className="space-y-2.5 text-base">
                <li>
                  <span className="text-gray-500">Année :</span>{' '}
                  {projects[selectedIndex].year}
                </li>
                <li>
                  <span className="text-gray-500">Lieu :</span>{' '}
                  {projects[selectedIndex].location}
                </li>
                <li>
                  <span className="text-gray-500">Type :</span>{' '}
                  {projects[selectedIndex].category}
                </li>
              </ul>
            </div>
          </div>

          {/* CTA final */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link
              href="/contact"
              className="text-blue-700 hover:text-blue-900 font-medium inline-flex items-center gap-2 text-base"
            >
              Poser une question sur ce camp
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>

        {/* Navigation entre photos (si plusieurs) */}
        {projects.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/50 px-6 py-2.5 text-white text-sm rounded-full">
            <button 
              onClick={goToPrev}
              className="hover:text-blue-300 transition-colors"
              aria-label="Photo précédente"
            >
              <FaChevronLeft />
            </button>
            
            <span>
              {selectedIndex + 1} / {projects.length}
            </span>
            
            <button 
              onClick={goToNext}
              className="hover:text-blue-300 transition-colors"
              aria-label="Photo suivante"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}