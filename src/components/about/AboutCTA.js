'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { FaLightbulb, FaCalendarAlt, FaHandshake, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutCTA() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Échangeons sur votre projet",
      description: "Partagez vos idées avec nos experts et obtenez des conseils personnalisés pour vos uniformes professionnels.",
      buttonText: "Nous contacter",
      link: "/contact",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: "Visitez notre atelier",
      description: "Rencontrez notre équipe et découvrez notre savoir-faire artisanal directement sur place.",
      buttonText: "Prendre rendez-vous",
      link: "/contact",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Devenez partenaire",
      description: "Collaborez avec nous pour des projets durables et sur-mesure. Discutons de vos besoins.",
      buttonText: "Nous contacter",
      link: "/contact",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  const current = slides[activeSlide];
  const primaryColor = '#1e40af'; // bleu foncé uniforme

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            Prochaines étapes
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-light text-gray-900">
            Prêt à avancer ensemble ?
          </h2>
          <div className="w-16 h-px bg-blue-700 mx-auto mt-5"></div>
        </div>

        {/* Contenu principal */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 min-h-[380px] flex flex-col lg:flex-row"
            >
              {/* Image – cachée en mobile */}
              {current.image && (
                <div className="hidden lg:block lg:w-1/2 relative bg-gray-50">
                  <motion.img
                    src={current.image}
                    alt={current.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute inset-0 w-full h-full object-contain p-10"
                  />
                </div>
              )}

              {/* Texte – pleine largeur en mobile */}
              <div className={`w-full ${current.image ? 'lg:w-1/2' : ''} p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left`}>
                <div className="w-14 h-14 bg-blue-800 flex items-center justify-center text-white mb-8">
                  {current.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-5">
                  {current.title}
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                  {current.description}
                </p>

                <Link href={current.link}>
                  <motion.span
                    whileHover={{ x: 6 }}
                    className="inline-flex items-center gap-3 text-blue-800 font-medium text-lg hover:text-blue-900 transition-colors"
                  >
                    {current.buttonText}
                    <FaArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation – centrée et discrète */}
          {/* <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="p-3 text-gray-500 hover:text-blue-800 transition-colors"
              aria-label="Slide précédent"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-3 h-3 transition-all ${
                    i === activeSlide ? 'bg-blue-800 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller au slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 text-gray-500 hover:text-blue-800 transition-colors"
              aria-label="Slide suivant"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}