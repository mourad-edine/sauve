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
      icon: <FaShirt className="w-5 h-5" />,
      title: "Vêtements d'entreprise",
      description: "Uniformes professionnels, polos personnalisés, vestes de travail sur mesure pour votre équipe.",
      features: ["Uniformisation d'équipe", "Personnalisation logo", "Grosses quantités", "Suivi de production"],
      color: "#1e40af",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      title: "Tenues pour particuliers",
      description: "Création de vêtements sur mesure selon vos goûts et mesures pour une élégance unique.",
      features: ["Créations uniques", "Ajustement parfait", "Choix des tissus", "Style personnel"],
      color: "#1e40af",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
    },
    {
      icon: <FaRulerCombined className="w-5 h-5" />,
      title: "Sur mesure",
      description: "Prise de mesures précises et ajustements parfaits pour un confort et une coupe optimale.",
      features: ["Prise de mesures", "Toile d'essai", "Ajustements fins", "Validation client"],
      color: "#1e40af",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
    },
    {
      icon: <FaTruck className="w-5 h-5" />,
      title: "Livraison nationale",
      description: "Livraison rapide et sécurisée partout en Madagascar, avec suivi de commande en temps réel.",
      features: ["Suivi en temps réel", "Emballage sécurisé", "Livraison express", "Délais garantis"],
      color: "#1e40af",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
    },
    {
      icon: <FaMedal className="w-5 h-5" />,
      title: "Qualité premium",
      description: "Tissus de haute qualité, finitions impeccables et durabilité garantie.",
      features: ["Tissus premium", "Finitions expertes", "Contrôle qualité", "Garantie satisfaction"],
      color: "#1e40af",
      image: "https://png.pngtree.com/png-vector/20250209/ourmid/pngtree-a-engineer-men-wearing-construction-helmet-png-image_15431222.png"
    },
    {
      icon: <FaHeadset className="w-5 h-5" />,
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
    <section className="relative py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête réduite */}
        <div className="text-center mb-8">
          <div className="inline-block mb-3">
            <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">
              Nos Services
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
            Excellence en Confection
          </h2>
          <div className="w-12 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Boutons de navigation plus petits */}
          <button 
            onClick={() => { prevService(); setAutoPlay(false); }} 
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white border border-gray-200 shadow-sm"
          >
            <FaChevronLeft className="text-gray-600 w-3 h-3" />
          </button>
          <button 
            onClick={() => { nextService(); setAutoPlay(false); }} 
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white border border-gray-200 shadow-sm"
          >
            <FaChevronRight className="text-gray-600 w-3 h-3" />
          </button>

          {/* Slide Principal - sans border radius */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* PARTIE GAUCHE */}
                <div className="p-4 md:p-6 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: services[activeService].color }}
                    >
                      {services[activeService].icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-1">
                        {services[activeService].title}
                      </h3>
                      <p className="text-gray-500 text-xs">Service complet • Disponible partout</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {services[activeService].description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 flex-shrink-0"
                          style={{ backgroundColor: services[activeService].color }}
                        />
                        <span className="text-gray-800 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 font-medium text-white hover:bg-blue-800 transition-colors text-sm"
                    style={{ backgroundColor: services[activeService].color }}
                  >
                    <span>En savoir plus</span>
                    <FaArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* PARTIE DROITE - Image réduite */}
                <div className="hidden lg:block relative min-h-[280px] bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-[250px] max-h-[250px] flex items-center justify-center">
                      {/* Image simple */}
                      <motion.img
                        key={services[activeService].image}
                        src={services[activeService].image}
                        alt={services[activeService].title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Points de navigation réduits */}
        <div className="flex justify-center gap-1.5 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveService(index);
                setAutoPlay(false);
              }}
              className={`transition-all duration-200 ${
                activeService === index 
                  ? 'w-6 h-1.5 bg-blue-700' 
                  : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au service ${index + 1}`}
            />
          ))}
        </div>

        {/* Section CTA réduite */}
        <div className="text-center mt-8 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600 mb-3">
            Besoin d'un devis personnalisé ?
          </p>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors">
            <span>Demander un devis</span>
            <FaArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}