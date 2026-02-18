'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLightbulb, FaCalendarAlt, FaHandshake, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutCTA() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [ctaImages, setCtaImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Récupération des images CTA depuis l'API
  useEffect(() => {
    const fetchCtaImages = async () => {
      try {
        const response = await fetch('https://admin.confection-vonjy.mg/api/cta_accueil');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          // Transformer les données de l'API en URLs complètes
          const images = data.map(photo => 
            `https://admin.confection-vonjy.mg/photo_camps/${photo.photos}`
          );
          setCtaImages(images);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des images CTA:", error);
        // En cas d'erreur, utiliser les images par défaut
        setCtaImages([
          "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png",
          "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png",
          "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCtaImages();
  }, []);

  const slides = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Échangeons sur votre projet",
      description: "Partagez vos idées avec nos experts et obtenez des conseils personnalisés pour vos uniformes professionnels.",
      buttonText: "Nous contacter",
      link: "/contact",
      color: '#1e40af'
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: "Visitez notre atelier",
      description: "Rencontrez notre équipe et découvrez notre savoir-faire artisanal directement sur place.",
      buttonText: "Prendre rendez-vous",
      link: "/contact",
      color: '#1e40af'
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Devenez partenaire",
      description: "Collaborez avec nous pour des projets durables et sur-mesure. Discutons de vos besoins.",
      buttonText: "Nous contacter",
      link: "/contact",
      color: '#1e40af'
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
  const currentImage = ctaImages[activeSlide] || slides[activeSlide]?.image;
  const primaryColor = '#1e40af';

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
          {/* Boutons de navigation */}
         

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
              {!isLoading && ctaImages.length > 0 && currentImage && (
                <div className="hidden lg:block lg:w-1/2 relative bg-gray-50 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center p-10"
                  >
                    <Image
                      src={currentImage}
                      alt={current.title}
                      width={500}
                      height={400}
                      className="w-full h-full object-contain max-w-[400px] max-h-[300px]"
                      sizes="(max-width: 1024px) 400px, 500px"
                      priority={activeSlide === 0}
                    />
                  </motion.div>
                </div>
              )}

              {/* Texte – pleine largeur en mobile */}
              <div className={`w-full ${!isLoading && ctaImages.length > 0 ? 'lg:w-1/2' : ''} p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left`}>
                {isLoading ? (
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mb-6"></div>
                    <p className="text-gray-500 text-sm">Chargement...</p>
                  </div>
                ) : (
                  <>
                    <div 
                      className="w-14 h-14 flex items-center justify-center text-white mb-8"
                      style={{ backgroundColor: current.color }}
                    >
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
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Points indicateurs */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSlide(index);
                  setAutoPlay(false);
                }}
                className={`transition-all duration-300 ${
                  activeSlide === index 
                    ? 'w-8 h-1.5 bg-blue-800' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}