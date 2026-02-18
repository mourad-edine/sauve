// components/ServicesOverview.js
"use client";
import {
  FaShirt,
  FaUserTie,
  FaUser,
  FaRulerVertical,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaImage
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function ServicesOverview() {
  const [activeService, setActiveService] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [apiImages, setApiImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Base URL pour les images
  const IMAGE_BASE_URL = "https://admin.confection-vonjy.mg/photo_camps/";

  // Récupérer les images depuis l'API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://admin.confection-vonjy.mg/api/photo_overview');
        const data = await response.json();
        
        if (data && Array.isArray(data)) {
          // Filtrer uniquement les images de type "overview"
          const overviewImages = data
            .filter(item => item.type_photos === "overview")
            .map(item => ({
              id: item.id,
              url: `${IMAGE_BASE_URL}${item.photos}`,
              filename: item.photos,
              type: item.photos.split('.').pop().toLowerCase(), // Récupérer l'extension
              createdAt: item.created_at
            }));
          
          setApiImages(overviewImages);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des images:", error);
        setApiImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: <FaUserTie className="w-6 h-6" />,
      title: "Pour les Entreprises",
      description: "Uniformes professionnels, tenues de travail, vêtements personnalisés pour renforcer l'image de votre marque.",
      items: [
        "Création d'identité vestimentaire",
        "Logos brodés ou imprimés",
        "Grosses et petites quantités",
      ],
      color: "#1E40AF"
    },
    {
      icon: <FaRulerVertical className="w-6 h-6" />,
      title: "Sur Mesure",
      description: "Prise de mesures précises pour un ajustement parfait, quel que soit votre morphologie.",
      items: [
        "Prise de mesures en atelier ou sur site",
        "Ajustements personnalisés",
        "Toile d'essai pour validation",
      ],
      color: "#1E40AF"
    },
    {
      icon: <FaShirt className="w-6 h-6" />,
      title: "Pour les Particuliers",
      description: "Création de vêtements uniques qui expriment votre personnalité et s'adaptent à votre style de vie.",
      items: [
        "Vêtements de cérémonie",
        "Tenues professionnelles élégantes",
        "Créations uniques selon vos souhaits",
      ],
      color: "#1E40AF"
    },
  ];

  // Fonction pour obtenir une image depuis l'API pour un service spécifique
  const getServiceImage = (serviceIndex) => {
    if (apiImages.length === 0 || loading) {
      // Retourner une image par défaut ou placeholder si aucune image disponible
      return "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
    }
    
    // Si nous avons plus d'images que de services, utiliser l'image correspondante
    if (serviceIndex < apiImages.length) {
      return apiImages[serviceIndex].url;
    }
    
    // Sinon, utiliser la première image disponible
    return apiImages[0].url;
  };

  const nextService = useCallback(() => {
    setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  }, [services.length]);

  const prevService = useCallback(() => {
    setActiveService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  }, [services.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextService, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, nextService]);

  const currentService = services[activeService];
  const currentImage = getServiceImage(activeService);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête - Style original */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Nos secteurs d'activité
                </span>
                <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-4 uppercase">
              Expertise en
              <span className="block text-base sm:text-lg md:text-xl text-yellow-600 font-normal mt-2">
                confection
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6"></div>
          </div>
        </motion.div>

        {/* Version mobile/tablette - Carrousel */}
        <div className="md:hidden mb-16 sm:mb-20 md:mb-24">
          {/* Contrôles carrousel */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 px-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded-lg hover:bg-gray-50"
              >
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${autoPlay ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span className="font-medium">{autoPlay ? 'Auto' : 'Pause'}</span>
              </button>
              
              <div className="text-xs sm:text-sm text-gray-500 font-medium px-3 py-1 bg-gray-50 rounded-lg">
                {activeService + 1} <span className="text-gray-400">/</span> {services.length}
              </div>
            </div>
          </div>

          {/* Onglets de navigation mobile */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-6 overflow-x-auto pb-3 px-2 scrollbar-hide">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveService(index);
                  setAutoPlay(false);
                }}
                className={`px-4 py-2.5 rounded-lg border transition-all duration-300 flex items-center gap-2 sm:gap-3 flex-shrink-0 whitespace-nowrap ${
                  activeService === index
                    ? 'border-gray-300 bg-white shadow-sm'
                    : 'border-transparent hover:border-gray-200 hover:bg-gray-50'
                }`}
                style={{
                  borderColor: activeService === index ? '#60A5FA' : 'transparent',
                  backgroundColor: activeService === index ? '#1E40AF08' : 'transparent'
                }}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                    activeService === index ? 'text-white' : 'text-gray-400'
                  }`}
                  style={{
                    backgroundColor: activeService === index ? '#1E40AF' : '#F3F4F6',
                    color: activeService === index ? 'white' : '#1E40AF'
                  }}
                >
                  {service.icon}
                </div>
                <span className={`font-medium text-sm ${activeService === index ? 'text-gray-900' : 'text-gray-600'}`}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Conteneur carrousel mobile AVEC images */}
          <div className="relative">
            {/* Flèches mobiles */}
            <button
              onClick={() => {
                prevService();
                setAutoPlay(false);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900"
              aria-label="Service précédent"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() => {
                nextService();
                setAutoPlay(false);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900"
              aria-label="Service suivant"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Slide mobile animée */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: isMobile ? 40 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -40 : -60 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                {/* Image mobile avec conteneur structuré */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                  {loading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Conteneur pour recadrage et structure */}
                        <div className="relative w-full h-full max-w-xs mx-auto">
                          <img
                            src={currentImage}
                            alt={currentService.title}
                            className="w-full h-full object-contain drop-shadow-lg"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                            }}
                            loading="lazy"
                          />
                          {/* Overlay pour améliorer la lisibilité */}
                          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Icône dans un badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center shadow-lg">
                      <div className="text-white">
                        {currentService.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col items-center">
                    {/* Contenu mobile */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                        {currentService.title}
                      </h3>
                      <div className="text-gray-500 mb-4">
                        <FaArrowRight className="w-4 h-4 mx-auto" />
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        {currentService.description}
                      </p>
                    </div>

                    {/* Items mobiles */}
                    <div className="mb-6 w-full">
                      <div className="flex flex-wrap justify-center gap-2">
                        {currentService.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-200 bg-gray-50"
                            style={{
                              borderColor: '#60A5FA',
                              backgroundColor: '#1E40AF10'
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action mobile */}
                    <div className="pt-4 border-t border-gray-100 w-full text-center">
                      <div
                        className="inline-flex items-center text-sm font-medium cursor-pointer"
                        style={{ color: '#1E40AF' }}
                      >
                        Découvrir ce service
                        <FaArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Points de navigation mobile */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveService(index);
                    setAutoPlay(false);
                  }}
                  className={`rounded-full transition-all duration-400 ${
                    activeService === index 
                      ? 'w-8 sm:w-10 h-2 sm:h-3' 
                      : 'w-2 sm:w-3 h-2 sm:h-3'
                  }`}
                  style={{
                    backgroundColor: activeService === index ? '#1E40AF' : '#D1D5DB'
                  }}
                  aria-label={`Aller au service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Version desktop - TOUTES les cartes AVEC images de l'API */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceImage = getServiceImage(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Carte desktop AVEC image structurée */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 h-full flex flex-col">
                  {/* Conteneur d'image avec structure fixe */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-b from-blue-50 to-white flex-shrink-0">
                    {loading && index === 0 ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      <>
                        {/* Image avec conteneur de recadrage */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="relative w-full h-full">
                            {/* Conteneur structurant pour toutes les tailles d'images */}
                            <div className="relative w-full h-full flex items-center justify-center">
                              <div className="relative max-w-full max-h-full">
                                <img
                                  src={serviceImage}
                                  alt={service.title}
                                  className="max-w-full max-h-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                                  }}
                                  loading="lazy"
                                />
                                {/* Overlay pour uniformiser l'apparence */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Icône dans un badge */}
                        <div className="absolute top-6 left-6 z-20">
                          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <div className="text-white text-lg">
                              {service.icon}
                            </div>
                          </div>
                        </div>
                        
                        {/* Indicateur de chargement pour les autres images */}
                        {loading && index > 0 && (
                          <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                          </div>
                        )}
                      </>
                    )}
                    
                    {/* Gradient overlay en bas */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                  </div>

                  {/* Contenu sous l'image */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-medium text-blue-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <div className="text-gray-500 mb-4">
                        <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Items */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {service.items.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-xs text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 group-hover:border-blue-300 group-hover:bg-blue-50/50 transition-colors duration-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Indicateur de survol */}
                    <div className="pt-6 border-t border-gray-100 mt-auto">
                      <div
                        className="inline-flex items-center text-sm font-medium cursor-pointer group/link transition-all duration-300 hover:gap-3"
                        style={{ color: '#1E40AF' }}
                      >
                        <Link href="/contact">Découvrir ce service</Link>
                        <FaArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicateur */}
        
      </div>
    </section>
  );
}