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

  const services = [
    {
      icon: <FaShirt className="w-8 h-8" />,
      title: "Vêtements d'entreprise",
      description: "Uniformes professionnels, polos personnalisés, vestes de travail sur mesure pour votre équipe. Nous créons des tenues qui renforcent l'identité de votre marque et améliorent la cohésion d'équipe.",
      features: ["Uniformisation d'équipe", "Personnalisation logo", "Grosses quantités", "Suivi de production"],
      color: "#3B82F6",
      accent: "#93C5FD",
      image: "/images/entreprise-uniforme.jpg"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Tenues pour particuliers",
      description: "Création de vêtements sur mesure selon vos goûts et mesures pour une élégance unique. Chaque pièce est conçue pour s'adapter parfaitement à votre morphologie et votre style personnel.",
      features: ["Créations uniques", "Ajustement parfait", "Choix des tissus", "Style personnel"],
      color: "#10B981",
      accent: "#6EE7B7",
      image: "/images/particulier-sur-mesure.jpg"
    },
    {
      icon: <FaRulerCombined className="w-8 h-8" />,
      title: "Sur mesure",
      description: "Prise de mesures précises et ajustements parfaits pour un confort et une coupe optimale. Notre approche artisanale garantit une finition impeccable pour chaque création.",
      features: ["Prise de mesures", "Toile d'essai", "Ajustements fins", "Validation client"],
      color: "#8B5CF6",
      accent: "#C4B5FD",
      image: "/images/prise-mesures.jpg"
    },
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: "Livraison nationale",
      description: "Livraison rapide et sécurisée partout en Madagascar, avec suivi de commande en temps réel. Nous garantissons la protection de vos créations durant le transport.",
      features: ["Suivi en temps réel", "Emballage sécurisé", "Livraison express", "Délais garantis"],
      color: "#F59E0B",
      accent: "#FCD34D",
      image: "/images/livraison.jpg"
    },
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: "Qualité premium",
      description: "Tissus de haute qualité, finitions impeccables et durabilité garantie. Nous sélectionnons rigoureusement nos matériaux pour offrir une excellence durable.",
      features: ["Tissus premium", "Finitions expertes", "Contrôle qualité", "Garantie satisfaction"],
      color: "#EC4899",
      accent: "#F9A8D4",
      image: "/images/qualite-tissu.jpg"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Conseil personnalisé",
      description: "Notre équipe vous accompagne dans le choix des modèles, tissus et personnalisations. De la conception à la réalisation, nous sommes à vos côtés.",
      features: ["Consultation gratuite", "Conseils experts", "Accompagnement", "Solutions adaptées"],
      color: "#14B8A6",
      accent: "#5EEAD4",
      image: "/images/conseil-client.jpg"
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
    const interval = setInterval(nextService, 2000);
    return () => clearInterval(interval);
  }, [autoPlay, nextService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevService();
        setAutoPlay(false);
      } else if (e.key === 'ArrowRight') {
        nextService();
        setAutoPlay(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextService, prevService]);

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gray-300"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Nos Services</span>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Excellence en <span className="font-semibold">confection sur mesure</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Découvrez notre expertise complète en confection de vêtements sur mesure, alliant tradition artisanale et innovation.
          </p>
        </div>

        {/* Carrousel principal */}
        <div className="mb-24 relative">
          {/* Contrôles supérieurs légers */}
          <div className="flex justify-between items-center mb-8 px-2">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div className={`w-3 h-3 rounded-full ${autoPlay ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="font-medium">{autoPlay ? 'Auto' : 'Pause'}</span>
            </button>

            <div className="text-sm text-gray-500 font-medium">
              {activeService + 1} <span className="text-gray-400">/</span> {services.length}
            </div>
          </div>

          {/* Onglets (navigation services) */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveService(index);
                  setAutoPlay(false);
                }}
                className={`px-5 py-2.5 rounded-lg border transition-all duration-300 flex items-center gap-3 flex-shrink-0 ${
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
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
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

          {/* Conteneur du slide + flèches latérales */}
          <div className="relative">
            {/* Flèche Précédent */}
            <button
              onClick={() => {
                prevService();
                setAutoPlay(false);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-4 z-20
                         p-4 lg:p-5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                         shadow-xl hover:bg-white hover:shadow-2xl hover:scale-110
                         transition-all duration-300 text-gray-700 hover:text-gray-900"
              aria-label="Service précédent"
            >
              <FaChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>

            {/* Flèche Suivant */}
            <button
              onClick={() => {
                nextService();
                setAutoPlay(false);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-4 z-20
                         p-4 lg:p-5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                         shadow-xl hover:bg-white hover:shadow-2xl hover:scale-110
                         transition-all duration-300 text-gray-700 hover:text-gray-900"
              aria-label="Service suivant"
            >
              <FaChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>

            {/* Slide animée */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Texte */}
                  <div className="p-8 lg:p-12 xl:p-16 flex flex-col">
                    <div className="flex items-center gap-5 mb-8">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-md"
                        style={{ backgroundColor: services[activeService].color }}
                      >
                        {services[activeService].icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-medium text-gray-900 mb-1">
                          {services[activeService].title}
                        </h3>
                        <p className="text-gray-500 text-sm">Service complet • Disponible partout</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                      {services[activeService].description}
                    </p>

                    <div className="space-y-4 mb-10">
                      {services[activeService].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: services[activeService].color }}
                          />
                          <span className="text-gray-800">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white transition-all hover:scale-[1.02] active:scale-95"
                      style={{ backgroundColor: services[activeService].color }}
                    >
                      En savoir plus
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Image / Illustration */}
                  <div className="relative min-h-[420px] lg:min-h-[540px] overflow-hidden bg-gray-50">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{ backgroundColor: services[activeService].color }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
                      <div className="relative w-64 h-64">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-4 border-dashed rounded-full opacity-30"
                          style={{ borderColor: services[activeService].color }}
                        />
                        <div className="absolute inset-8 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                          <div
                            className="w-full h-full flex items-center justify-center text-6xl font-light text-white"
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
          <div className="flex justify-center gap-3 mt-10">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveService(index);
                  setAutoPlay(false);
                }}
                className={`rounded-full transition-all duration-400 ${
                  activeService === index ? 'w-10 h-3' : 'w-3 h-3'
                }`}
                style={{
                  backgroundColor: activeService === index ? service.color : '#D1D5DB'
                }}
              />
            ))}
          </div>
        </div>

        {/* Tu peux garder ou supprimer la section stats selon tes besoins */}
      </div>
    </section>
  );
}