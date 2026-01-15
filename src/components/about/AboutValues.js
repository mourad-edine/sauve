'use client';
import { FaFlag, FaSearch, FaShieldAlt, FaLightbulb, FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export default function AboutValues() {
  const [activeCard, setActiveCard] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // 0 = forward, 1 = backward

  const commitments = [
    {
      title: "Fabriqué en Madagascar",
      description: "100% de nos créations sont confectionnées dans notre atelier Toamasinaien",
      icon: <FaFlag />,
      color: "#1E40AF",
      accent: "#60A5FA",
      shape: "hexagon",
      bgPattern: "diagonal-stripes"
    },
    {
      title: "Transparence Totale",
      description: "Devis détaillé, suivi de production, traçabilité complète des tissus",
      icon: <FaSearch />,
      color: "#374151",
      accent: "#9CA3AF",
      shape: "circle",
      bgPattern: "grid"
    },
    {
      title: "Durabilité Garantie",
      description: "Garantie 2 ans sur toutes nos créations et service de retouches inclus",
      icon: <FaShieldAlt />,
      color: "#047857",
      accent: "#10B981",
      shape: "square",
      bgPattern: "dots"
    },
    {
      title: "Innovation Continue",
      description: "Veille constante sur les nouvelles techniques et matériaux innovants",
      icon: <FaLightbulb />,
      color: "#B45309",
      accent: "#F59E0B",
      shape: "triangle",
      bgPattern: "waves"
    }
  ];

  const nextCard = useCallback(() => {
    setDirection(0);
    setActiveCard((prev) => (prev === commitments.length - 1 ? 0 : prev + 1));
  }, [commitments.length]);

  const prevCard = useCallback(() => {
    setDirection(1);
    setActiveCard((prev) => (prev === 0 ? commitments.length - 1 : prev - 1));
  }, [commitments.length]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextCard, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, nextCard]);

  const currentCommitment = commitments[activeCard];

  // Fonction pour obtenir la forme SVG
  const getShapeSVG = (shape, color) => {
    const svgProps = { className: "w-full h-full", fill: "none", viewBox: "0 0 100 100" };
    
    switch(shape) {
      case 'hexagon':
        return (
          <svg {...svgProps}>
            <polygon 
              points="50,5 95,25 95,75 50,95 5,75 5,25" 
              stroke={color} 
              strokeWidth="3"
              fill={`${color}10`}
            />
          </svg>
        );
      case 'triangle':
        return (
          <svg {...svgProps}>
            <polygon 
              points="50,10 90,90 10,90" 
              stroke={color} 
              strokeWidth="3"
              fill={`${color}10`}
            />
          </svg>
        );
      case 'square':
        return (
          <svg {...svgProps}>
            <rect 
              x="10" y="10" 
              width="80" height="80" 
              stroke={color} 
              strokeWidth="3"
              fill={`${color}10`}
            />
          </svg>
        );
      default: // circle
        return (
          <svg {...svgProps}>
            <circle 
              cx="50" cy="50" 
              r="40" 
              stroke={color} 
              strokeWidth="3"
              fill={`${color}10`}
            />
          </svg>
        );
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Arrière-plan géométrique */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="mb-8 sm:mb-12">
            {/* Indicateur décoratif */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
              <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-widest">
                Nos Valeurs
              </span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
              L'excellence <span className="font-semibold">artisanale</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
              Des principes qui guident chaque fil et chaque couture
            </p>
          </div>
        </motion.div>

        {/* Carrousel des valeurs - Version originale */}
        <div className="mb-20 sm:mb-28">
          {/* Contrôles */}
          <div className="flex justify-center items-center gap-6 mb-10">
            <button
              onClick={() => {
                prevCard();
                setIsPlaying(false);
              }}
              className="p-3 sm:p-4 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-110"
              aria-label="Valeur précédente"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
            
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Valeur {activeCard + 1}</div>
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full border-2 cursor-pointer"
                  style={{ 
                    backgroundColor: isPlaying ? currentCommitment.color : 'transparent',
                    borderColor: currentCommitment.color
                  }}
                  onClick={() => setIsPlaying(!isPlaying)}
                />
                <div className="flex gap-1">
                  {commitments.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeCard ? 'w-6' : ''
                      }`}
                      style={{
                        backgroundColor: idx === activeCard ? currentCommitment.color : '#E5E7EB'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <button
              onClick={() => {
                nextCard();
                setIsPlaying(false);
              }}
              className="p-3 sm:p-4 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-110"
              aria-label="Valeur suivante"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
          </div>

          {/* Carte principale animée */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeCard}
                custom={direction}
                initial={{ opacity: 0, x: direction === 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 0 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Carte avec forme géométrique */}
                <div className="relative w-full h-full">
                  {/* Forme géométrique de fond */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-10">
                      {getShapeSVG(currentCommitment.shape, currentCommitment.color)}
                    </div>
                  </div>

                  {/* Contenu central */}
                  <div className="relative h-full flex flex-col items-center justify-center px-4">
                    {/* Icône dans un badge original */}
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="relative mb-10 sm:mb-12"
                    >
                      {/* Badge géométrique */}
                      <div className="relative">
                        {/* Effet d'ombre portée */}
                        <div 
                          className="absolute -inset-4 rounded-full blur-xl opacity-30"
                          style={{ backgroundColor: currentCommitment.color }}
                        />
                        
                        {/* Badge principal */}
                        <div 
                          className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white shadow-2xl"
                          style={{ backgroundColor: currentCommitment.color }}
                        >
                          <div className="text-2xl sm:text-3xl md:text-4xl">
                            {currentCommitment.icon}
                          </div>
                        </div>
                        
                        {/* Points décoratifs */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 shadow-md flex items-center justify-center">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: currentCommitment.accent }}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Contenu textuel */}
                    <div className="text-center max-w-xl mx-auto">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-4 sm:mb-6"
                      >
                        {currentCommitment.title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 sm:mb-12"
                      >
                        {currentCommitment.description}
                      </motion.p>
                      
                      {/* Indicateur de valeur */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 mx-auto max-w-xs"
                        style={{ backgroundColor: currentCommitment.accent }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Miniatures des valeurs */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-10">
            {commitments.map((commitment, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeCard ? 0 : 1);
                  setActiveCard(index);
                  setIsPlaying(false);
                }}
                className="group relative"
                aria-label={`Voir la valeur: ${commitment.title}`}
              >
                {/* Miniature */}
                <div className="relative">
                  {/* Cercle de base */}
                  <div 
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeCard === index 
                        ? 'scale-110 shadow-lg' 
                        : 'scale-100 shadow-sm group-hover:scale-105'
                    }`}
                    style={{
                      backgroundColor: activeCard === index ? commitment.color : 'white',
                      border: `2px solid ${activeCard === index ? commitment.accent : '#E5E7EB'}`
                    }}
                  >
                    <div 
                      className={`transition-colors duration-300 ${
                        activeCard === index ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {commitment.icon}
                    </div>
                  </div>
                  
                  {/* Indicateur actif */}
                  {activeCard === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                      style={{ backgroundColor: commitment.color }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Section qualité - Design asymétrique */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Fond décoratif */}
          
        </motion.div>
      </div>
    </section>
  );
}