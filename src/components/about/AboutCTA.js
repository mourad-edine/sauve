'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHandshake, FaLightbulb, FaCalendarAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutCTA() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const ctaOptions = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Échangeons sur votre projet",
      description: "Partagez vos idées avec nos experts et obtenez des conseils personnalisés pour vos uniformes professionnels.",
      buttonText: "Nous contacter",
      link: "/contact",
      color: "#1E40AF",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: "Visitez notre atelier",
      description: "Rencontrez notre équipe de tailleurs et découvrez notre savoir-faire artisanal en direct dans nos locaux.",
      buttonText: "Prendre rendez-vous",
      link: "/contact",
      color: "#B45309",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png" 
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Devenez partenaire",
      description: "Rencontrez notre équipe de tailleurs et découvrez notre savoir-faire artisanal en direct dans nos locaux.",
     buttonText: "Prendre rendez-vous",
      link: "/contact",
      color: "#B45309",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png" 
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
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  const currentOption = ctaOptions[activeSlide];

  return (
    <section className="relative py-12 md:py-24 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Prochaines étapes</span>
          <h2 className="text-2xl md:text-4xl font-light text-blue-900 mt-2 uppercase">
            Prêt à écrire la suite <span className="font-bold text-yellow-600">avec nous ?</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Navigation Desktop */}
          

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gray-50 border border-gray-100 shadow-sm overflow-visible min-h-[450px] flex items-center"
            >
              <div className="flex flex-col lg:flex-row w-full items-stretch">
                
                {/* ZONE IMAGE : Corrigée pour forcer l'affichage */}
                <div className="hidden lg:block lg:w-1/2 relative min-h-[450px]">
                  {currentOption.image && (
                    <>
                      <div 
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 blur-[100px] rounded-full opacity-20 z-10"
                        style={{ backgroundColor: currentOption.color }}
                      />
                      <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="absolute bottom-0 left-0 right-0 h-[130%] z-20"
                      >
                        <img
                          src={currentOption.image}
                          alt=""
                          className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                        />
                      </motion.div>
                    </>
                  )}
                </div>

                {/* ZONE TEXTE */}
                <div className={`w-full p-8 md:p-16 lg:p-20 flex flex-col justify-center ${currentOption.image ? 'lg:w-1/2 text-center lg:text-left items-center lg:items-start' : 'w-full text-center items-center'}`}>
                  
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg mb-8"
                    style={{ backgroundColor: currentOption.color }}
                  >
                    {currentOption.icon}
                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold text-blue-950 mb-6 leading-tight">
                    {currentOption.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
                    {currentOption.description}
                  </p>

                  <Link href={currentOption.link}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-bold text-white shadow-xl cursor-pointer transition-transform"
                      style={{ backgroundColor: currentOption.color }}
                    >
                      <span>{currentOption.buttonText}</span>
                      <FaArrowRight />
                    </motion.div>
                  </Link>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Mobile */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            <button onClick={prevSlide} className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-900 border border-gray-100">
              <FaChevronLeft />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-900 border border-gray-100">
              <FaChevronRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}