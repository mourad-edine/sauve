'use client';

import { 
  FaShirt, FaUsers, FaRulerCombined, FaTruck, FaMedal, FaHeadset, 
  FaArrowRight, FaChevronLeft, FaChevronRight 
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from 'next/image';
import image1 from './../../public/images/zrt.jpg';

export default function Services() {
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
      icon: <FaShirt className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Vêtements d'entreprise",
      description: "Uniformes professionnels, polos personnalisés, vestes de travail sur mesure pour votre équipe.",
      features: ["Uniformisation d'équipe", "Personnalisation logo", "Grosses quantités", "Suivi de production"],
      color: "#3B82F6",
      accent: "#93C5FD",
      image: "/images/entreprise-uniforme.jpg"
    },
    {
      icon: <FaUsers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Tenues pour particuliers",
      description: "Création de vêtements sur mesure selon vos goûts et mesures pour une élégance unique.",
      features: ["Créations uniques", "Ajustement parfait", "Choix des tissus", "Style personnel"],
      color: "#10B981",
      accent: "#6EE7B7",
      image: "/images/particulier-sur-mesure.jpg"
    },
    {
      icon: <FaRulerCombined className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Sur mesure",
      description: "Prise de mesures précises et ajustements parfaits pour un confort et une coupe optimale.",
      features: ["Prise de mesures", "Toile d'essai", "Ajustements fins", "Validation client"],
      color: "#8B5CF6",
      accent: "#C4B5FD",
      image: "/images/prise-mesures.jpg"
    },
    {
      icon: <FaTruck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Livraison nationale",
      description: "Livraison rapide et sécurisée partout en Madagascar, avec suivi de commande en temps réel.",
      features: ["Suivi en temps réel", "Emballage sécurisé", "Livraison express", "Délais garantis"],
      color: "#F59E0B",
      accent: "#FCD34D",
      image: "/images/livraison.jpg"
    },
    {
      icon: <FaMedal className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Qualité premium",
      description: "Tissus de haute qualité, finitions impeccables et durabilité garantie.",
      features: ["Tissus premium", "Finitions expertes", "Contrôle qualité", "Garantie satisfaction"],
      color: "#EC4899",
      accent: "#F9A8D4",
      image: "/images/qualite-tissu.jpg"
    },
    {
      icon: <FaHeadset className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Conseil personnalisé",
      description: "Notre équipe vous accompagne dans le choix des modèles, tissus et personnalisations.",
      features: ["Consultation gratuite", "Conseils experts", "Accompagnement", "Solutions adaptées"],
      color: "#14B8A6",
      accent: "#5EEAD4",
      image: image1
    }
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

  return (
    <section className="relative sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gray-300"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Nos Services</span>
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gray-300"></div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 px-4">
            Excellence en <span className="font-semibold">confection</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Découvrez notre expertise complète en confection de vêtements sur mesure, alliant tradition artisanale et innovation.
          </p>
        </div>

        {/* Carrousel principal */}
        <div className="">
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
              {activeService + 1} <span className="text-gray-400">/</span> {services.length}
            </div>
          </div>

          {/* Onglets (navigation services) */}
          <div className="flex flex-nowrap overflow-x-auto pb-3 mb-8 sm:mb-10 gap-2 px-2 scrollbar-hide">
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
                  borderColor: activeService === index ? service.accent : 'transparent',
                  backgroundColor: activeService === index ? `${service.color}08` : 'transparent'
                }}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                    activeService === index ? 'text-white' : 'text-gray-400'
                  }`}
                  style={{
                    backgroundColor: activeService === index ? service.color : '#F3F4F6',
                    color: activeService === index ? 'white' : service.color
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

          {/* Conteneur du slide */}
          <div className="relative">
            {/* Flèche Précédent - Visible sur tous les écrans */}
            <button
              onClick={() => {
                prevService();
                setAutoPlay(false);
              }}
              className="absolute left-2 sm:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-20
                         p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                         shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                         transition-all duration-300 text-gray-700 hover:text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              aria-label="Service précédent"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Flèche Suivant */}
            <button
              onClick={() => {
                nextService();
                setAutoPlay(false);
              }}
              className="absolute right-2 sm:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-20
                         p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                         shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                         transition-all duration-300 text-gray-700 hover:text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              aria-label="Service suivant"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Slide animée */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: isMobile ? 40 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -40 : -60 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Texte */}
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col">
                    <div className="flex items-start sm:items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0"
                        style={{ backgroundColor: services[activeService].color }}
                      >
                        {services[activeService].icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-1">
                          {services[activeService].title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm">Service complet • Disponible partout</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10">
                      {services[activeService].description}
                    </p>

                    <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                      {services[activeService].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <div
                            className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: services[activeService].color }}
                          />
                          <span className="text-gray-800 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-medium text-white transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
                      style={{ backgroundColor: services[activeService].color }}
                    >
                      <span>En savoir plus</span>
                      <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>

                  {/* Image / Illustration - Masquée sur mobile pour plus de lisibilité */}
                  <div className="hidden lg:block relative min-h-[400px] xl:min-h-[480px] overflow-hidden bg-gray-50">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{ backgroundColor: services[activeService].color }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative w-56 h-56 xl:w-64 xl:h-64">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-4 border-dashed rounded-full opacity-30"
                          style={{ borderColor: services[activeService].color }}
                        />
                        <div className="absolute inset-6 rounded-xl xl:rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                          <div
                            className="w-full h-full flex items-center justify-center text-5xl xl:text-6xl font-light text-white"
                            style={{ backgroundColor: services[activeService].color }}
                          >
                            {activeService + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Points de navigation en bas */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveService(index);
                  setAutoPlay(false);
                }}
                className={`rounded-full transition-all duration-400 focus:outline-none ${
                  activeService === index 
                    ? 'w-8 sm:w-10 h-2 sm:h-3' 
                    : 'w-2 sm:w-3 h-2 sm:h-3'
                }`}
                style={{
                  backgroundColor: activeService === index ? service.color : '#D1D5DB'
                }}
                aria-label={`Aller au service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}