// components/ServicesOverview.js
"use client";
import {
  FaShirt,
  FaUserTie,
  FaUser,
  FaRulerVertical,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export default function ServicesOverview() {
  const [activeService, setActiveService] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
      color: "#1E40AF",
      image: "https://fortdress-group.com/media/41/75/3d/1691575851/5b28bbcfe73aa889f0d5eb34dad6ed9b88fea3e4.png"
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
      color: "#1E40AF",
      image: "https://www.modyf.be/media/mf_webp/png/media/stmedia/modyf/eshop/products/std.lang.all/resolutions/normal/png-546x410px/56931644.webp"
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
      color: "#1E40AF",
      image: "https://png.pngtree.com/png-vector/20240724/ourmid/pngtree-person-in-yellow-hazmat-suit-with-respirator-png-image_13212504.png"
    },
  ];

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

        {/* Version mobile/tablette - Carrousel SANS images */}
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

          {/* Conteneur carrousel mobile SANS images */}
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

            {/* Slide mobile animée SANS images */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: isMobile ? 40 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -40 : -60 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col items-center">
                    {/* Avatar mobile - Style ancien */}
                    <div className="relative mb-6">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full border border-dashed opacity-50"
                          style={{ borderColor: '#1E40AF' }}
                        />
                        
                        <div
                          className="absolute inset-2 rounded-full flex items-center justify-center text-white text-2xl font-light"
                          style={{ backgroundColor: '#1E40AF' }}
                        >
                          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                            <div style={{ color: '#1E40AF' }}>
                              {currentService.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

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

        {/* Version desktop - TOUTES les cartes AVEC images PNG qui dépassent */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Carte desktop AVEC image PNG qui peut déborder */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-visible shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 h-full">
                {/* Conteneur pour l'image PNG qui peut déborder */}
                <div className="relative h-48 overflow-visible">
                  {/* Fond bleu derrière l'image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
                  
                  {/* Image PNG - centrée et peut déborder */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full h-56 flex items-start justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                      style={{ 
                        maxWidth: '120%', // Permet à l'image d'être plus large que le conteneur
                        maxHeight: '110%' // Laisse déborder verticalement si nécessaire
                      }}
                    />
                  </div>
                  
                  {/* Icône dans un badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center shadow-lg">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay transparent pour éviter que le texte chevauche l'image */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
                </div>

                {/* Contenu sous l'image */}
                <div className="p-6 mt-4"> {/* Ajout de marge en haut */}
                  <h3 className="text-xl font-medium text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  
                  <div className="text-gray-500 mb-4">
                    <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
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
                          className="text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 group-hover:border-blue-300 group-hover:bg-blue-50/50 transition-colors duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Indicateur de survol */}
                  <div className="pt-6 border-t border-gray-100 flex justify-center">
                    <div
                      className="inline-flex items-center text-sm font-medium cursor-pointer group/link transition-colors duration-300"
                      style={{ color: '#1E40AF' }}
                    >
                      Découvrir ce service
                      <FaArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicateur */}
        <div className="text-center mt-8 md:mt-12">
          <div className="inline-flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600">
              Nos principaux secteurs d'activité
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}