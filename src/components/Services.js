'use client';

import { 
  FaShirt, FaUsers, FaRulerCombined, FaTruck, FaMedal, FaHeadset, 
  FaArrowRight, FaChevronLeft, FaChevronRight 
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

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
      icon: <FaShirt className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Vêtements d'entreprise",
      description: "Uniformes professionnels, polos personnalisés, vestes de travail sur mesure pour votre équipe.",
      features: ["Uniformisation d'équipe", "Personnalisation logo", "Grosses quantités", "Suivi de production"],
      color: "#1e40af",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
    },
    {
      icon: <FaUsers className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Tenues pour particuliers",
      description: "Création de vêtements sur mesure selon vos goûts et mesures pour une élégance unique.",
      features: ["Créations uniques", "Ajustement parfait", "Choix des tissus", "Style personnel"],
      color: "#1e40af",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
    },
    {
      icon: <FaRulerCombined className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Sur mesure",
      description: "Prise de mesures précises et ajustements parfaits pour un confort et une coupe optimale.",
      features: ["Prise de mesures", "Toile d'essai", "Ajustements fins", "Validation client"],
      color: "#1e40af",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
    },
    {
      icon: <FaTruck className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Livraison nationale",
      description: "Livraison rapide et sécurisée partout à Madagascar, avec suivi de commande en temps réel.",
      features: ["Suivi en temps réel", "Emballage sécurisé", "Livraison express", "Délais garantis"],
      color: "#1e40af",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
    },
    {
      icon: <FaMedal className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Qualité premium",
      description: "Tissus de haute qualité, finitions impeccables et durabilité garantie.",
      features: ["Tissus premium", "Finitions expertes", "Contrôle qualité", "Garantie satisfaction"],
      color: "#1e40af",
      image: "https://png.pngtree.com/png-vector/20250209/ourmid/pngtree-a-engineer-men-wearing-construction-helmet-png-image_15431222.png"
    },
    {
      icon: <FaHeadset className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Conseil personnalisé",
      description: "Notre équipe vous accompagne dans le choix des modèles, tissus et personnalisations.",
      features: ["Consultation gratuite", "Conseils experts", "Accompagnement", "Solutions adaptées"],
      color: "#1e40af",
      image: "https://png.pngtree.com/png-vector/20250209/ourmid/pngtree-a-engineer-men-wearing-construction-helmet-png-image_15431222.png"
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
    <section className="relative py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête équilibrée */}
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <span className="text-xs md:text-sm font-medium tracking-wider text-gray-500 uppercase">
              Nos Services
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
            Excellence en Confection
          </h2>
          <div className="w-14 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Boutons de navigation */}
          <button 
            onClick={() => { prevService(); setAutoPlay(false); }} 
            className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <FaChevronLeft className="text-gray-600 w-3 h-3 md:w-4 md:h-4" />
          </button>
          <button 
            onClick={() => { nextService(); setAutoPlay(false); }} 
            className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <FaChevronRight className="text-gray-600 w-3 h-3 md:w-4 md:h-4" />
          </button>

          {/* Slide Principal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* PARTIE GAUCHE */}
                <div className="p-5 md:p-7 lg:p-8 flex flex-col">
                  <div className="flex items-start gap-4 mb-5 md:mb-6">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: services[activeService].color }}
                    >
                      {services[activeService].icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 mb-1">
                        {services[activeService].title}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm">Service complet • Disponible partout</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                    {services[activeService].description}
                  </p>

                  <div className="space-y-2.5 md:space-y-3 mb-6 md:mb-7">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div
                          className="w-1.5 h-1.5 md:w-2 md:h-2 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: services[activeService].color }}
                        />
                        <span className="text-gray-800 text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 font-medium text-white hover:bg-blue-800 transition-colors text-sm md:text-base"
                    style={{ backgroundColor: services[activeService].color }}
                  >
                    <span>En savoir plus</span>
                    <FaArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  </button>
                </div>

                {/* PARTIE DROITE - Image avec animations réduites */}
                <div className="hidden lg:block relative min-h-[320px] md:min-h-[380px] bg-gradient-to-br from-blue-50/40 to-gray-100/40 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                    {/* Conteneur pour les images */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      
                      {/* Cercle décoratif en arrière-plan */}
                      <motion.div
                        key={`circle-${activeService}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full"
                        style={{ backgroundColor: services[activeService].color }}
                      />

                      {/* Deuxième cercle animé */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.05, 0.08, 0.05]
                        }}
                        transition={{ 
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full"
                        style={{ backgroundColor: services[activeService].color }}
                      />

                      {/* Lignes décoratives rotatives */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] border-2 border-dashed rounded-full opacity-15"
                        style={{ borderColor: services[activeService].color }}
                      />

                      {/* Image SVG */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={services[activeService].image}
                          initial={{ opacity: 0, x: 40, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -40, scale: 0.95 }}
                          transition={{ 
                            duration: 0.4, 
                            ease: "easeOut"
                          }}
                          className="relative z-20 w-full max-w-[280px] md:max-w-[330px] h-auto flex items-center justify-center"
                        >
                          <img
                            src={services[activeService].image}
                            alt={services[activeService].title}
                            className="w-full h-auto object-contain max-h-[250px] md:max-h-[300px]"
                            style={{ 
                              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))'
                            }}
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Effet de lumière subtil */}
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-gradient-to-r from-transparent via-blue-100/15 to-transparent rounded-full blur-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Points de navigation */}
        <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveService(index);
                setAutoPlay(false);
              }}
              className={`transition-all duration-250 ${
                activeService === index 
                  ? 'w-6 h-1.5 md:w-7 md:h-2 bg-blue-700' 
                  : 'w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 hover:bg-gray-400'
              } rounded-full`}
              aria-label={`Aller au service ${index + 1}`}
            />
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-8 md:mt-10 border-t border-gray-200 pt-6 md:pt-8">
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            Besoin d'un devis personnalisé ?
          </p>
          <button 
            className="inline-flex items-center gap-2.5 text-sm md:text-base font-medium text-blue-700 hover:text-blue-900 transition-colors"
          >
            <span>Demander un devis</span>
            <FaArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 transition-transform hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}