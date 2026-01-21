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
      icon: <FaShirt className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Vêtements d'entreprise",
      description: "Uniformes professionnels, polos personnalisés, vestes de travail sur mesure pour votre équipe.",
      features: ["Uniformisation d'équipe", "Personnalisation logo", "Grosses quantités", "Suivi de production"],
      color: "#1E40AF",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
    },
    {
      icon: <FaUsers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Tenues pour particuliers",
      description: "Création de vêtements sur mesure selon vos goûts et mesures pour une élégance unique.",
      features: ["Créations uniques", "Ajustement parfait", "Choix des tissus", "Style personnel"],
      color: "#1E40AF",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
    },
    {
      icon: <FaRulerCombined className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Sur mesure",
      description: "Prise de mesures précises et ajustements parfaits pour un confort et une coupe optimale.",
      features: ["Prise de mesures", "Toile d'essai", "Ajustements fins", "Validation client"],
      color: "#1E40AF",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
    },
    {
      icon: <FaTruck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Livraison nationale",
      description: "Livraison rapide et sécurisée partout en Madagascar, avec suivi de commande en temps réel.",
      features: ["Suivi en temps réel", "Emballage sécurisé", "Livraison express", "Délais garantis"],
      color: "#1E40AF",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
    },
    {
      icon: <FaMedal className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Qualité premium",
      description: "Tissus de haute qualité, finitions impeccables et durabilité garantie.",
      features: ["Tissus premium", "Finitions expertes", "Contrôle qualité", "Garantie satisfaction"],
      color: "#1E40AF",
      image: "https://png.pngtree.com/png-vector/20250209/ourmid/pngtree-a-engineer-men-wearing-construction-helmet-png-image_15431222.png"
    },
    {
      icon: <FaHeadset className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Conseil personnalisé",
      description: "Notre équipe vous accompagne dans le choix des modèles, tissus et personnalisations.",
      features: ["Consultation gratuite", "Conseils experts", "Accompagnement", "Solutions adaptées"],
      color: "#1E40AF",
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
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête dans l'ancien style */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 h-px bg-gray-300"></div>
                <span className="text-sm font-medium text-gray-500 uppercase">
                  Nos Services
                </span>
                <div className="w-6 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-4 uppercase">
              Excellence en
              <span className="block text-base md:text-lg lg:text-xl text-yellow-600 font-normal mt-2">
                confection
              </span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          </div>
        </div>

        <div className="relative group">
          {/* Boutons de navigation */}
          <button 
            onClick={() => { prevService(); setAutoPlay(false); }} 
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-white border border-gray-200 shadow-lg rounded-full hover:scale-110 transition-transform"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button 
            onClick={() => { nextService(); setAutoPlay(false); }} 
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-white border border-gray-200 shadow-lg rounded-full hover:scale-110 transition-transform"
          >
            <FaChevronRight className="text-gray-600" />
          </button>

          {/* Slide Principal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* PARTIE GAUCHE - Ancien style */}
                <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col">
                  {/* Icône et titre dans l'ancien style */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-900 flex items-center justify-center rounded-xl text-white shadow-md"
                    >
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
                        {services[activeService].title}
                      </h3>
                      <span className="text-xs font-medium text-blue-700 uppercase">
                        Service {activeService + 1}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 flex-1">
                    {services[activeService].description}
                  </p>

                  {/* Features en grille */}
                  <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span className="text-gray-800 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bouton dans l'ancien style */}
                  <button
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-300"
                  >
                    <span>En savoir plus</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* PARTIE DROITE - Image avec animations */}
                <div className="hidden lg:block relative min-h-[400px] xl:min-h-[480px] overflow-hidden bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    {/* Conteneur fixe pour l'image */}
                    <div className="relative w-full h-full max-w-[400px] max-h-[400px] flex items-center justify-center">
                      
                      {/* Cercle décoratif en arrière-plan */}
                      <motion.div
                        key={`circle-${activeService}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.1 }}
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: services[activeService].color }}
                      />

                      {/* Transition de l'image PNG */}
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={services[activeService].image}
                          src={services[activeService].image}
                          alt={services[activeService].title}
                          initial={{ opacity: 0, x: 50, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -50, scale: 0.9 }}
                          transition={{ 
                            duration: 0.5, 
                            ease: [0.23, 1, 0.32, 1]
                          }}
                          className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.3 } 
                          }}
                        />
                      </AnimatePresence>

                      {/* Lignes décoratives */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-20px] border-2 border-dashed rounded-full opacity-20"
                        style={{ borderColor: services[activeService].color }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Points de navigation - Ancien style */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveService(index);
                setAutoPlay(false);
              }}
              className={`rounded-full transition-all duration-300 ${
                activeService === index 
                  ? 'w-8 sm:w-10 h-2 sm:h-3 bg-blue-900' 
                  : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au service ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play toggle - Ancien style */}
        
      </div>
    </section>
  );
}