'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { FaHandshake, FaLightbulb, FaCalendarAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutCTA() {
  const [activeSlide, setActiveSlide] = useState(0);
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

  const ctaOptions = [
    {
      icon: <FaLightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Échangeons sur votre projet",
      description: "Partagez vos idées avec nos experts et obtenez des conseils personnalisés",
      buttonText: "Nous contacter",
      link: "/contact",
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "EP"
    },
    {
      icon: <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Visitez notre atelier",
      description: "Rencontrez notre équipe et découvrez notre savoir-faire en direct",
      buttonText: "Prendre rendez-vous",
      link: "/contact",
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "VA",
      type: "button"
    },
    {
      icon: <FaHandshake className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Devenez partenaire",
      description: "Projet d'entreprise ? Discutons d'un partenariat durable",
      buttonText: "Demander un devis",
      link: "/contact",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "DP"
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === ctaOptions.length - 1 ? 0 : prev + 1));
  }, [ctaOptions.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? ctaOptions.length - 1 : prev - 1));
  }, [ctaOptions.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  const currentOption = ctaOptions[activeSlide];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-6 sm:p-8 md:p-10 lg:p-12"
        >
          {/* En-tête */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-6 sm:w-8 h-px bg-blue-300"></div>
                <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">Prochaines étapes</span>
                <div className="w-6 sm:w-8 h-px bg-blue-300"></div>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-4">
              Prêt à écrire la suite <span className="font-semibold">avec nous ?</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
              Après avoir découvert qui nous sommes, laissez-nous découvrir votre projet. 
              Ensemble, créons quelque chose d'exceptionnel.
            </p>
          </div>

          {/* Carrousel principal */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            {/* Contrôles supérieurs */}
            <div className="flex justify-between items-center mb-6 sm:mb-8 px-2">
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded-lg hover:bg-gray-50"
              >
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${autoPlay ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span className="font-medium">{autoPlay ? 'Auto' : 'Pause'}</span>
              </button>

              <div className="text-xs sm:text-sm text-gray-500 font-medium px-3 py-1 bg-gray-50 rounded-lg">
                {activeSlide + 1} <span className="text-gray-400">/</span> {ctaOptions.length}
              </div>
            </div>

            {/* Onglets de navigation */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-3 px-2 scrollbar-hide">
              {ctaOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSlide(index);
                    setAutoPlay(false);
                  }}
                  className={`px-4 py-2.5 rounded-lg border transition-all duration-300 flex items-center gap-2 sm:gap-3 flex-shrink-0 whitespace-nowrap ${
                    activeSlide === index
                      ? 'border-gray-300 bg-white shadow-sm'
                      : 'border-transparent hover:border-gray-200 hover:bg-gray-50'
                  }`}
                  style={{
                    borderColor: activeSlide === index ? option.accent : 'transparent',
                    backgroundColor: activeSlide === index ? `${option.color}08` : 'transparent'
                  }}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                      activeSlide === index ? 'text-white' : 'text-gray-400'
                    }`}
                    style={{
                      backgroundColor: activeSlide === index ? option.color : '#F3F4F6',
                      color: activeSlide === index ? 'white' : option.color
                    }}
                  >
                    {option.icon}
                  </div>
                  <span className={`font-medium text-sm ${activeSlide === index ? 'text-gray-900' : 'text-gray-600'}`}>
                    {option.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Conteneur du slide */}
            <div className="relative">
              {/* Flèche Précédent */}
              <button
                onClick={() => {
                  prevSlide();
                  setAutoPlay(false);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                aria-label="Slide précédent"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Flèche Suivant */}
              <button
                onClick={() => {
                  nextSlide();
                  setAutoPlay(false);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                aria-label="Slide suivant"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Slide animée */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: isMobile ? 40 : 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isMobile ? -40 : -60 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col items-center">
                      {/* En-tête avec avatar */}
                      <div className="relative mb-6 sm:mb-8">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto">
                          {/* Cercle de fond animé */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed opacity-30"
                            style={{ borderColor: currentOption.color }}
                          />
                          
                          {/* Cercle principal */}
                          <div 
                            className="absolute inset-1.5 sm:inset-2 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-medium"
                            style={{ backgroundColor: currentOption.color }}
                          >
                            {currentOption.initials}
                          </div>
                          
                          {/* Badge d'icône */}
                          <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                            <div style={{ color: currentOption.color }}>
                              {currentOption.icon}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="text-center mb-6 sm:mb-8 max-w-xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-3 sm:mb-4">
                          {currentOption.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {currentOption.description}
                        </p>
                      </div>

                      {/* Bouton */}
                      <div className="w-full max-w-xs sm:max-w-sm">
                        {currentOption.type === "button" ? (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 w-full justify-center py-3 px-4 rounded-lg font-medium transition-colors duration-300 group/btn"
                            style={{ 
                              backgroundColor: `${currentOption.color}10`,
                              color: currentOption.color 
                            }}
                          >
                            {currentOption.buttonText}
                            <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </motion.button>
                        ) : (
                          <Link href={currentOption.link} className="block">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center gap-2 w-full justify-center py-3 px-4 rounded-lg font-medium transition-colors duration-300 group/btn cursor-pointer"
                              style={{ 
                                backgroundColor: `${currentOption.color}10`,
                                color: currentOption.color 
                              }}
                            >
                              {currentOption.buttonText}
                              <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </motion.div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Points de navigation */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {ctaOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSlide(index);
                    setAutoPlay(false);
                  }}
                  className={`rounded-full transition-all duration-400 focus:outline-none ${
                    activeSlide === index 
                      ? 'w-8 sm:w-10 h-2 sm:h-3' 
                      : 'w-2 sm:w-3 h-2 sm:h-3'
                  }`}
                  style={{
                    backgroundColor: activeSlide === index ? option.color : '#D1D5DB'
                  }}
                  aria-label={`Aller à l'option ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Message complémentaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-6 sm:pt-8 border-t border-gray-200 text-center"
          >
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-px bg-gray-300"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-500">Questions</span>
                <div className="w-4 h-px bg-gray-300"></div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Vous avez des questions sur notre entreprise ou nos services ? 
              N'hésitez pas à nous contacter pour plus d'informations.
            </p>
            
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300 group text-sm sm:text-base"
              >
                <span>Contactez-nous directement</span>
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}