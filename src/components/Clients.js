"use client";
import {
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaIndustry,
  FaHotel,
  FaUserMd,
  FaShieldAlt,
  FaUtensils,
  FaPlane,
  FaShoppingBag,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export default function Clients() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const [hoveredSector, setHoveredSector] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Directrice, Hôtel Le Majestique",
      text: "Les uniformes pour notre personnel ont considérablement amélioré notre image professionnelle. Qualité exceptionnelle et service impeccable.",
      initials: "MD",
      rating: 5,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
    },
    {
      name: "Thomas Leroy",
      company: "Gérant, Café Central",
      text: "Nous commandons régulièrement des tabliers et t-shirts personnalisés. Toujours parfaitement réalisés et livrés dans les délais.",
      initials: "TL",
      rating: 5,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
    },
    {
      name: "Sophie Martin",
      company: "Responsable RH, Clinique Saint-Louis",
      text: "Excellente collaboration pour nos blouses médicales. Matériaux de qualité et ajustements parfaits pour tout le personnel.",
      initials: "SM",
      rating: 5,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
    },
    {
      name: "Pierre Bernard",
      company: "Directeur, Sécurité Pro",
      text: "Les tenues de sécurité sont robustes et confortables. Notre équipe est très satisfaite de la qualité et de la durabilité.",
      initials: "PB",
      rating: 5,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
    },
  ];

  const sectors = [
    {
      name: "Hôtellerie & Restauration",
      icon: <FaHotel className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
      initials: "HR",
    },
    {
      name: "Médical & Paramédical",
      icon: <FaUserMd className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
      initials: "MP",
    },
    {
      name: "Sécurité & Services",
      icon: <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
      initials: "SS",
    },
    {
      name: "Commerce & Retail",
      icon: <FaShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
      initials: "CR",
    },
    {
      name: "Transport & Logistique",
      icon: <FaPlane className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
      initials: "TL",
    },
    {
      name: "Industrie & Production",
      icon: <FaIndustry className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
      initials: "IP",
    },
    {
      name: "Éducation & Formation",
      icon: <FaUtensils className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
      initials: "EF",
    },
    {
      name: "Services Publics",
      icon: <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "#1e40af", // Bleu uniforme
      accent: "#1e40af",
      initials: "SP",
    },
  ];

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, nextTestimonial]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* En-tête réduite */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block mb-3">
            <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">
              Nos références
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
            Clients & Secteurs
          </h2>
          <div className="w-12 h-px bg-gray-300 mx-auto"></div>
        </div>

        {/* Grille compacte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Colonne gauche - Témoignages */}
          <div className="flex flex-col h-full">
            {/* Titre section */}
            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                  témoignages
                </span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
            </div>

            {/* Conteneur carrousel compact */}
            <div className="relative flex-1 min-h-[240px]">
              {/* Flèches plus petites */}
              <button
                onClick={() => {
                  prevTestimonial();
                  setAutoPlay(false);
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                           p-2 bg-white border border-gray-200 
                           shadow-sm hover:shadow hover:bg-gray-50
                           transition-all duration-200 text-gray-600 hover:text-gray-900"
                aria-label="Témoignage précédent"
              >
                <FaChevronLeft className="w-3 h-3" />
              </button>

              <button
                onClick={() => {
                  nextTestimonial();
                  setAutoPlay(false);
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                           p-2 bg-white border border-gray-200 
                           shadow-sm hover:shadow hover:bg-gray-50
                           transition-all duration-200 text-gray-600 hover:text-gray-900"
                aria-label="Témoignage suivant"
              >
                <FaChevronRight className="w-3 h-3" />
              </button>

              {/* Slide animée - sans border radius */}
              <div className="h-full px-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: isMobile ? 20 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isMobile ? -20 : -30 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gray-200 overflow-hidden h-full flex flex-col"
                    onMouseEnter={() => setHoveredTestimonial(activeTestimonial)}
                    onMouseLeave={() => setHoveredTestimonial(null)}
                  >
                    <div className="p-4 md:p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        {/* Avatar et note */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="relative">
                            <div className="relative w-12 h-12">
                              {/* Avatar simple */}
                              <div
                                className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium"
                                style={{ backgroundColor: "#1e40af" }}
                              >
                                {currentTestimonial.initials}
                              </div>
                            </div>
                          </div>

                          {/* Étoiles plus petites */}
                          <div className="flex gap-0.5">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                              <FaStar
                                key={i}
                                className="w-3 h-3 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                        </div>

                        {/* Citation réduite */}
                        <div className="mb-4 flex-1">
                          <FaQuoteLeft className="text-gray-300 text-base mb-2" />
                          <p className="text-gray-600 text-sm leading-relaxed">
                            "{currentTestimonial.text}"
                          </p>
                        </div>
                      </div>

                      {/* Auteur */}
                      <div className="pt-3 border-t border-gray-100 mt-auto">
                        <h4 className="font-medium text-gray-900 text-sm mb-0.5">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {currentTestimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Colonne droite - Secteurs d'activité */}
          <div className="flex flex-col h-full">
            {/* Titre section */}
            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                  Secteurs d'activité
                </span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
            </div>

            {/* Grille des secteurs - plus compacte */}
            <div className="bg-white border border-gray-200 p-4 flex-1 min-h-[240px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="relative"
                    onMouseEnter={() => setHoveredSector(index)}
                    onMouseLeave={() => setHoveredSector(null)}
                  >
                    <div className="flex items-center p-2 border border-gray-200 hover:border-gray-300 transition-colors duration-200 bg-white">
                      {/* Icône */}
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-50">
                        <div style={{ color: "#1e40af" }}>
                          {sector.icon}
                        </div>
                      </div>

                      {/* Nom du secteur */}
                      <span className="ml-3 text-xs text-gray-700 flex-1 truncate">
                        {sector.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA réduite */}
        <div className="text-center border-t border-gray-200 pt-6 md:pt-8">
          <p className="text-sm text-gray-600 mb-4">
            Confiez-nous vos besoins en uniformes professionnels
          </p>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors">
            <span>Discuter de votre projet</span>
            <FaArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}