'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight, FaArrowRight, FaTag, FaCalendarAlt, FaMapMarkerAlt, FaShoppingCart, FaHeart, FaShare } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const API_URL = "http://localhost/confectionvonjy/public/api/photos_camps";
const STORAGE_URL = "http://localhost/confectionvonjy/public/photo_camps/";

export default function PortfolioGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);

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
      
      // Prendre seulement les 8 premières photos pour avoir 2 pages
      const photos = data.slice(0, 8);
      
      // Transformer les données de l'API en projets
      const formattedProjects = photos.map((item, index) => {
        const getCategory = (id) => {
          const categories = [
            'Uniformes Professionnels',
            'Tenues de Camp',
            'Équipements Techniques',
            'Vêtements d\'Équipe'
          ];
          return categories[id % categories.length] || 'Camp Professionnel';
        };

        const getTitle = (id) => {
          const titles = [
            'Uniforme Élite Pro',
            'Tenue Camping Expert',
            'Veste Technique Outdoor',
            'Polo d\'Équipe Premium'
          ];
          return titles[id % titles.length];
        };

        const getPrice = () => {
          const prices = ['49 900', '34 500', '42 800', '27 900'];
          return prices[index % prices.length];
        };

        const getDescription = () => {
          const descriptions = [
            'Matériau technique haute performance, respirant et durable. Parfait pour les activités intensives.',
            'Confort optimal avec tissu stretch et ventilation intégrée. Idéal pour les conditions extérieures.',
            'Protection contre les éléments avec maintien thermique. Design ergonomique pour une mobilité totale.',
            'Style professionnel avec finitions premium. Personnalisation logo et couleurs disponibles.'
          ];
          return descriptions[index % descriptions.length];
        };

        return {
          id: item.id,
          title: getTitle(item.gallerie_id),
          subtitle: `Camp ${item.gallerie_id}`,
          reference: `REF-${item.gallerie_id}-${String(index + 1).padStart(2, '0')}`,
          description: getDescription(),
          fullDescription: `Ce produit fait partie de notre collection haut de gamme spécialement conçue pour les conditions de camp professionnelles. Fabriqué avec des matériaux techniques de première qualité, il offre une durabilité exceptionnelle, un confort optimal et une protection adaptée aux environnements exigeants.`,
          imageUrl: `${STORAGE_URL}${item.photos}`,
          alt: `Photo du produit ${item.gallerie_id}`,
          category: getCategory(item.gallerie_id),
          campId: item.gallerie_id,
          price: getPrice(),
          oldPrice: ['62 900', '45 500', '53 800', '38 900'][index % 4],
          discount: ['-21%', '-24%', '-20%', '-28%'][index % 4],
          features: ['Matériau technique', 'Respirant', 'Durable', 'Personnalisable'],
          year: '2023',
          location: 'Disponible',
          color: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'][index % 4],
          accent: ['#93C5FD', '#6EE7B7', '#C4B5FD', '#FCD34D'][index % 4],
          inStock: index % 3 !== 0 // Simule des produits en stock
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

  const nextPage = () => {
    setCurrentPage((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const currentProject = selectedIndex !== null ? projects[selectedIndex] : null;

  // Images par défaut
  const defaultProjects = [
    {
      id: 1,
      title: "Uniforme Élite Pro",
      subtitle: "Camp 10",
      reference: "REF-10-01",
      description: "Matériau technique haute performance, respirant et durable. Parfait pour les activités intensives.",
      fullDescription: "Ce produit fait partie de notre collection haut de gamme spécialement conçue pour les conditions de camp professionnelles.",
      imageUrl: "https://placehold.co/600x800/1e40af/ffffff?text=Produit+CAMP+10",
      alt: "Uniforme professionnel",
      category: "Uniformes de Camp",
      campId: 10,
      price: '49 900',
      oldPrice: '62 900',
      discount: '-21%',
      features: ['Matériau technique', 'Respirant', 'Durable', 'Personnalisable'],
      year: '2023',
      location: 'Disponible',
      color: '#3B82F6',
      accent: '#93C5FD',
      inStock: true
    },
    // ... autres produits par défaut
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  // Diviser les projets en pages de 4
  const pages = [];
  for (let i = 0; i < displayProjects.length; i += 4) {
    pages.push(displayProjects.slice(i, i + 4));
  }

  const currentProjects = pages[currentPage] || [];

  if (loading) {
    return (
      <section id="gallery" className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gray-300"></div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Chargement</span>
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>
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
      <section id="gallery" className="relative py-20 md:py-32 bg-white overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gray-300"></div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Notre Collection</span>
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Produits <span className="font-semibold">phares</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Découvrez notre sélection d'articles premium, conçus pour l'excellence et la performance en milieu professionnel.
            </p>
            {error && (
              <p className="text-sm text-red-500 mt-2">
                Données en cache - {error}
              </p>
            )}
          </motion.div>

          {/* Container des produits */}
          <div className="relative mb-16">
            {/* Navigation */}
            {pages.length > 1 && (
              <>
                <button
                  onClick={prevPage}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-300 hidden lg:flex"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextPage}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-300 hidden lg:flex"
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Grille des produits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                  onMouseEnter={() => setHoveredProject(index + currentPage * 4)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Carte produit */}
                  <div className="relative h-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Badge promo */}
                    {project.discount && (
                      <div className="absolute top-3 left-3 z-10">
                        <span 
                          className="text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-lg"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.discount}
                        </span>
                      </div>
                    )}

                    {/* État de stock */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        project.inStock 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}>
                        {project.inStock ? 'En stock' : 'Sur commande'}
                      </span>
                    </div>

                    {/* Image principale - Mise en valeur */}
                    <div 
                      className="relative h-64 md:h-72 bg-gray-50 overflow-hidden cursor-pointer"
                      onClick={() => openModal(index + currentPage * 4)}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.alt}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        priority={index < 2}
                      />
                      
                      {/* Overlay d'actions */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                          <button 
                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors duration-300 shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Action favoris
                            }}
                          >
                            <FaHeart className="w-4 h-4" />
                          </button>
                          <button 
                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors duration-300 shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Action partage
                            }}
                          >
                            <FaShare className="w-4 h-4" />
                          </button>
                          <button 
                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:text-green-600 transition-colors duration-300 shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Action zoom
                              openModal(index + currentPage * 4);
                            }}
                          >
                            <FaExpand className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-5">
                      {/* Catégorie */}
                      <div className="mb-3">
                        <span 
                          className="text-xs font-medium px-3 py-1 rounded-full inline-block"
                          style={{ 
                            backgroundColor: `${project.color}10`,
                            color: project.color
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Titre et sous-titre */}
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500">{project.subtitle}</p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 rounded border"
                            style={{ 
                              borderColor: `${project.color}30`,
                              color: project.color
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Prix et actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-gray-900">
                              {project.price} MGA
                            </span>
                            {project.oldPrice && (
                              <span className="text-sm text-gray-400 line-through">
                                {project.oldPrice} MGA
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Réf: {project.reference}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openModal(index + currentPage * 4)}
                            className="text-sm font-medium flex items-center gap-2 group/btn"
                            style={{ color: project.color }}
                          >
                            <span>Détails</span>
                            <FaArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>

                      {/* Bouton panier */}
                      <button 
                        className={`w-full mt-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                          hoveredProject === index + currentPage * 4
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-2'
                        }`}
                        style={{ 
                          backgroundColor: project.color,
                          color: 'white'
                        }}
                      >
                        <FaShoppingCart className="w-4 h-4" />
                        <span>Ajouter au devis</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Indicateurs de page */}
            {pages.length > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevPage}
                  className="lg:hidden w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-300"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>
                
                <div className="flex gap-2">
                  {pages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      className={`w-8 h-2 rounded-full transition-all duration-300 ${
                        idx === currentPage ? 'w-12' : ''
                      }`}
                      style={{
                        backgroundColor: idx === currentPage ? '#3B82F6' : '#E5E7EB'
                      }}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextPage}
                  className="lg:hidden w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-300"
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-8 md:p-12">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-blue-300"></div>
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">Catalogue Complet</span>
                  <div className="w-6 h-px bg-blue-300"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Besoin de plus de <span className="font-medium">choix</span> ?
              </h3>
              
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Explorez notre catalogue complet avec des centaines de modèles, tissus et personnalisations disponibles. 
                Chaque produit peut être adapté à vos besoins spécifiques.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href='/galerie'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
                  >
                    <span>Voir tout le catalogue</span>
                    <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>
                
                <Link href='/contact'>
                  <button className="inline-flex items-center gap-3 border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    Demander un catalogue
                  </button>
                </Link>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">50+</div>
                    <div className="text-sm text-gray-500">Modèles</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">30+</div>
                    <div className="text-sm text-gray-500">Tissus</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">100%</div>
                    <div className="text-sm text-gray-500">Personnalisable</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">15j</div>
                    <div className="text-sm text-gray-500">Délai moyen</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de visualisation produit */}
      <AnimatePresence>
        {selectedIndex !== null && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden bg-white rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation */}
              <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {displayProjects.length > 1 && (
                    <>
                      <button
                        onClick={goToPrevious}
                        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-300"
                      >
                        <FaChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-sm text-gray-600 px-2">
                        {selectedIndex + 1}/{displayProjects.length}
                      </span>
                      <button
                        onClick={goToNext}
                        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-300"
                      >
                        <FaChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-300"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              {/* Contenu modal */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image produit - Grande taille */}
                <div className="lg:w-1/2 p-8 flex items-center justify-center bg-gray-50">
                  <div className="relative w-full h-96 lg:h-[500px]">
                    <Image
                      src={currentProject.imageUrl}
                      alt={currentProject.alt}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Détails produit */}
                <div className="lg:w-1/2 p-6 md:p-8 overflow-y-auto">
                  <div className="space-y-6">
                    {/* En-tête */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {currentProject.discount && (
                          <span 
                            className="text-sm font-bold px-3 py-1.5 rounded-full text-white"
                            style={{ 
                              backgroundColor: currentProject.color
                            }}
                          >
                            {currentProject.discount}
                          </span>
                        )}
                        <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
                          {currentProject.category}
                        </span>
                        <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${
                          currentProject.inStock 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {currentProject.inStock ? '✓ En stock' : '⚠ Sur commande'}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                        {currentProject.title}
                      </h3>
                      <p className="text-gray-500 mb-4">{currentProject.subtitle}</p>
                      
                      <div className="text-sm text-gray-500">
                        Référence: <span className="font-medium">{currentProject.reference}</span>
                      </div>
                    </div>

                    {/* Prix */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-gray-900">
                          {currentProject.price} MGA
                        </span>
                        {currentProject.oldPrice && (
                          <>
                            <span className="text-lg text-gray-400 line-through">
                              {currentProject.oldPrice} MGA
                            </span>
                            <span className="text-sm font-medium text-green-600">
                              Économisez {currentProject.discount}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Description détaillée */}
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Description</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {currentProject.fullDescription}
                      </p>
                    </div>

                    {/* Caractéristiques */}
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Caractéristiques</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {currentProject.features.map((feature, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: currentProject.color }}
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          className="flex-1 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-3 transition-colors duration-300"
                          style={{ 
                            backgroundColor: currentProject.color,
                            color: 'white'
                          }}
                        >
                          <FaShoppingCart className="w-5 h-5" />
                          <span>Ajouter au devis</span>
                        </button>
                        
                        <button className="py-3 px-6 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-3">
                          <FaHeart className="w-5 h-5" />
                          <span>Favoris</span>
                        </button>
                      </div>
                      
                      <div className="text-center mt-4">
                        <Link href="/contact">
                          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">
                            Besoin d'une personnalisation ? Contactez-nous
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}