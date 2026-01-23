'use client';
import { FaFlag, FaSearch, FaShieldAlt, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function AboutValues() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const commitments = [
    {
      title: "Fabriqué à Madagascar",
      description: "100% de nos créations sont confectionnées dans notre atelier Toamasinaien",
      icon: <FaFlag className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      title: "Transparence Totale",
      description: "Devis détaillé, suivi de production, traçabilité complète des tissus",
      icon: <FaSearch className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      title: "Durabilité Garantie",
      description: "Garantie 2 ans sur toutes nos créations et service de retouches inclus",
      icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      title: "Innovation Continue",
      description: "Veille constante sur les nouvelles techniques et matériaux innovants",
      icon: <FaLightbulb className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    // Doublons pour l'effet infini (desktop seulement)
    {
      title: "Fabriqué à Madagascar",
      description: "100% de nos créations sont confectionnées dans notre atelier Toamasinaien",
      icon: <FaFlag className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      title: "Transparence Totale",
      description: "Devis détaillé, suivi de production, traçabilité complète des tissus",
      icon: <FaSearch className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      title: "Durabilité Garantie",
      description: "Garantie 2 ans sur toutes nos créations et service de retouches inclus",
      icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      title: "Innovation Continue",
      description: "Veille constante sur les nouvelles techniques et matériaux innovants",
      icon: <FaLightbulb className="w-6 h-6 sm:w-7 sm:h-7" />,
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête - Responsive */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-6 sm:mb-10 lg:mb-16">
            <div className="inline-block mb-3 sm:mb-4 lg:mb-6">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-4 sm:w-6 lg:w-8 h-px bg-gray-300"></div>
                <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-500 uppercase">
                  Nos Valeurs
                </span>
                <div className="w-4 sm:w-6 lg:w-8 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-3 sm:mb-4 uppercase">
              L'excellence
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl text-yellow-600 font-normal mt-1 sm:mt-2">
                artisanale
              </span>
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-500 mx-auto mb-3 sm:mb-4 lg:mb-6"></div>
          </div>
        </div>

        {/* Desktop: Banderole qui défile */}
        <div className="hidden lg:block relative overflow-hidden py-4 lg:py-8">
          {/* Gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-white via-white to-transparent z-10"></div>

          {/* Banderole qui défile */}
          <motion.div
            ref={containerRef}
            className="flex gap-4 lg:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear"
              }
            }}
          >
            {commitments.map((commitment, index) => (
              <div
                key={`desktop-${index}`}
                className="flex-shrink-0 w-72 lg:w-80 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-4 lg:p-6 h-[240px] lg:h-[260px] flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-900 flex items-center justify-center">
                    <div className="text-white text-lg lg:text-xl">
                      {commitment.icon}
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-blue-100">
                    {String(index % 4 + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-base lg:text-lg font-semibold text-blue-900 mb-2 lg:mb-3 leading-tight lg:leading-snug">
                    {commitment.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                    {commitment.description}
                  </p>
                </div>

                {/* Séparateur */}
                <div className="h-px bg-gray-200 mt-4 lg:mt-6"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tablet: Grille 2 colonnes */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {commitments.slice(0, 4).map((commitment, index) => (
              <div
                key={`tablet-${index}`}
                className="bg-white border border-gray-200 shadow-sm p-4 sm:p-5 h-[220px] sm:h-[240px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-900 flex items-center justify-center">
                    <div className="text-white text-base sm:text-lg">
                      {commitment.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-100">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-2 leading-tight">
                    {commitment.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1">
                    {commitment.description}
                  </p>
                </div>

                <div className="h-px bg-gray-200 mt-3 sm:mt-4"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical stacking */}
        <div className="sm:hidden">
          <div className="space-y-4">
            {commitments.slice(0, 4).map((commitment, index) => (
              <div
                key={`mobile-${index}`}
                className="bg-white border border-gray-200 shadow-sm p-4 h-[200px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-blue-900 flex items-center justify-center">
                    <div className="text-white text-sm">
                      {commitment.icon}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-blue-100">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold text-blue-900 mb-2 leading-tight">
                    {commitment.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs leading-relaxed flex-1">
                    {commitment.description}
                  </p>
                </div>

                <div className="h-px bg-gray-200 mt-3"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateur responsive */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          
        </div>
      </div>
    </section>
  );
}