<<<<<<< HEAD
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight, FaArrowRight, FaTag, FaCalendarAlt, FaMapMarkerAlt, FaShoppingCart, FaHeart, FaShare } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const API_URL = "https://admin.camp-toamasina.mg/api/photos_camps";
const STORAGE_URL = "https://admin.camp-toamasina.mg/photo_camps/";

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
=======
// components/PortfolioGallery.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaExpand, FaUsers, FaUser, FaBuilding, FaCalendarAlt, FaRulerCombined } from "react-icons/fa";

export default function PortfolioGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Uniformes Hôtel de Luxe",
      category: "entreprise",
      subcategory: "uniforme",
      description: "Collection complète d'uniformes pour un hôtel 5 étoiles à Toamasina",
      client: "Hôtel Le Majestique",
      date: "2023",
      items: ["Vestes de réception", "Tenues de conciergerie", "Uniforme de service", "Blouses de ménage"],
      imageColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      icon: <FaBuilding className="text-2xl" />,
      stats: { quantity: 120, duration: "8 semaines" }
    },
    {
      id: 2,
      title: "Robe de mariée sur mesure",
      category: "particulier",
      subcategory: "ceremonie",
      description: "Robe de mariée en soie naturelle avec broderies personnalisées",
      client: "Marie & Thomas",
      date: "2024",
      items: ["Soie naturelle", "Broderies main", "Volants en dentelle", "Traîne ajustable"],
      imageColor: "bg-gradient-to-br from-pink-400 to-purple-600",
      icon: <FaUser className="text-2xl" />,
      stats: { fittings: 5, duration: "6 semaines" }
    },
    {
      id: 3,
      title: "Tenues médicales personnalisées",
      category: "entreprise",
      subcategory: "uniforme",
      description: "Blouses et tenues pour une clinique privée",
      client: "Clinique Saint-Louis",
      date: "2023",
      items: ["Blouses médicales", "Tenues de chirurgie", "Vestes de consultation", "Pulls personnalisés"],
      imageColor: "bg-gradient-to-br from-green-500 to-teal-600",
      icon: <FaUsers className="text-2xl" />,
      stats: { quantity: 85, duration: "6 semaines" }
    },
    {
      id: 4,
      title: "Costume 3 pièces sur mesure",
      category: "particulier",
      subcategory: "surmesure",
      description: "Costume d'affaires sur mesure en laine premium",
      client: "M. Dubois",
      date: "2024",
      items: ["Veste ajustée", "Pantalon droit", "Gilet coordonné", "Chemise sur mesure"],
      imageColor: "bg-gradient-to-br from-gray-700 to-gray-900",
      icon: <FaUser className="text-2xl" />,
      stats: { fittings: 3, duration: "4 semaines" }
    },
    {
      id: 5,
      title: "Polos d'entreprise brodés",
      category: "entreprise",
      subcategory: "personnalisation",
      description: "Polos techniques avec logo brodé pour une équipe commerciale",
      client: "Tech Solutions SARL",
      date: "2023",
      items: ["Polos techniques", "Logo brodé", "Nom personnalisé", "Couleurs société"],
      imageColor: "bg-gradient-to-br from-red-500 to-orange-600",
      icon: <FaBuilding className="text-2xl" />,
      stats: { quantity: 50, duration: "3 semaines" }
    },
    {
      id: 6,
      title: "Tenue de soirée élégante",
      category: "particulier",
      subcategory: "ceremonie",
      description: "Robe du soir pour gala de charité",
      client: "Mme Lambert",
      date: "2024",
      items: ["Soie satinée", "Découpes dos", "Finition perles", "Ourlet spécial"],
      imageColor: "bg-gradient-to-br from-purple-500 to-indigo-700",
      icon: <FaUser className="text-2xl" />,
      stats: { fittings: 4, duration: "5 semaines" }
    },
    {
      id: 7,
      title: "Uniforme restauration rapide",
      category: "entreprise",
      subcategory: "uniforme",
      description: "Tenues techniques pour chaîne de restauration",
      client: "Burg'Express",
      date: "2023",
      items: ["T-shirts techniques", "Tabliers résistants", "Chaussures de sécurité", "Casquettes personnalisées"],
      imageColor: "bg-gradient-to-br from-yellow-500 to-red-600",
      icon: <FaBuilding className="text-2xl" />,
      stats: { quantity: 200, duration: "10 semaines" }
    },
    {
      id: 8,
      title: "Tailleur d'affaires sur mesure",
      category: "particulier",
      subcategory: "surmesure",
      description: "Tailleur professionnel pour cadre dirigeante",
      client: "Mme Chevalier",
      date: "2024",
      items: ["Veste structurée", "Jupe crayon", "Chemisier soie", "Finitions sur mesure"],
      imageColor: "bg-gradient-to-br from-teal-500 to-blue-600",
      icon: <FaUser className="text-2xl" />,
      stats: { fittings: 4, duration: "5 semaines" }
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
<<<<<<< HEAD
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
=======
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className={`${project.imageColor} h-48 relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition duration-300"
                  >
                    <FaExpand className="text-white text-lg" />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                      {project.category === 'entreprise' ? 'Entreprise' : 'Particulier'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-900">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-gray-700 mb-2">
                      <FaUsers className="text-blue-600 mr-2" />
                      <span className="text-sm font-medium">{project.client}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.items.slice(0, 2).map((item, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                      {project.items.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{project.items.length - 2} autres
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <FaRulerCombined className="mr-2" />
                        <span>{project.stats.duration}</span>
                      </div>
                      {project.stats.quantity && (
                        <div className="flex items-center">
                          <FaUsers className="mr-2" />
                          <span>{project.stats.quantity} pièces</span>
                        </div>
                      )}
                      {project.stats.fittings && (
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          <span>{project.stats.fittings} essayages</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => openModal(project)}
                    className="mt-6 w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-3 rounded-lg transition duration-300"
                  >
                    Voir les détails
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Ceci est une sélection de nos réalisations. Chaque projet est unique et adapté aux besoins spécifiques du client.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Charger plus de projets
            </button>
          </div>
        </div>
      </section>

      {/* Modal pour afficher les détails d'un projet */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`${selectedProject.imageColor} h-64 relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-5xl mb-4">{selectedProject.icon}</div>
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                  <p className="text-lg opacity-90 mt-2">{selectedProject.client}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition duration-300"
              >
                <span className="text-white text-xl">×</span>
              </button>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">À propos du projet</h3>
                  <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">Détails de la réalisation</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-3">Notre approche</h4>
                    <p className="text-gray-700">
                      Ce projet a été réalisé avec une attention particulière aux détails et en étroite collaboration avec le client. 
                      Plusieurs essayages ont permis d'ajuster parfaitement chaque pièce aux spécifications exactes.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-4">Informations projet</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Client</div>
                        <div className="font-medium text-gray-800">{selectedProject.client}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Catégorie</div>
                        <div className="font-medium text-gray-800">
                          {selectedProject.category === 'entreprise' ? 'Entreprise' : 'Particulier'} • {selectedProject.subcategory}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Année de réalisation</div>
                        <div className="font-medium text-gray-800">{selectedProject.date}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Durée du projet</div>
                        <div className="font-medium text-gray-800">{selectedProject.stats.duration}</div>
                      </div>
                      
                      {selectedProject.stats.quantity && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Quantité</div>
                          <div className="font-medium text-gray-800">{selectedProject.stats.quantity} pièces</div>
                        </div>
                      )}
                      
                      {selectedProject.stats.fittings && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Nombre d'essayages</div>
                          <div className="font-medium text-gray-800">{selectedProject.stats.fittings} sessions</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-blue-200">
                      <h5 className="font-bold text-blue-900 mb-3">Satisfaction client</h5>
                      <div className="flex items-center text-yellow-500 mb-2">
                        {"★".repeat(5)}
                      </div>
                      <p className="text-sm text-gray-600">
                        "Un travail exceptionnel avec une attention remarquable aux détails."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
             <div className="mt-8 pt-8 border-t border-gray-200">
  <div className="flex flex-col sm:flex-row justify-between gap-3">
    <button
      onClick={closeModal}
      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300 order-2 sm:order-1"
    >
      Fermer
    </button>
    <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition duration-300 order-1 sm:order-2">
      Demander un projet similaire
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      )}
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    </>
  );
}