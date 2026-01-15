'use client';
import { 
  FaQuoteLeft, FaStar, FaCheckCircle, FaIndustry, FaHotel, 
  FaUserMd, FaShieldAlt, FaUtensils, FaPlane, FaShoppingBag, 
  FaArrowRight, FaChevronLeft, FaChevronRight 
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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Directrice, Hôtel Le Majestique",
      text: "Les uniformes pour notre personnel ont considérablement amélioré notre image professionnelle. Qualité exceptionnelle et service impeccable.",
      initials: "MD",
      rating: 5,
      color: "#3B82F6",
      accent: "#93C5FD"
    },
    {
      name: "Thomas Leroy",
      company: "Gérant, Café Central",
      text: "Nous commandons régulièrement des tabliers et t-shirts personnalisés. Toujours parfaitement réalisés et livrés dans les délais.",
      initials: "TL",
      rating: 5,
      color: "#10B981",
      accent: "#6EE7B7"
    },
    {
      name: "Sophie Martin",
      company: "Responsable RH, Clinique Saint-Louis",
      text: "Excellente collaboration pour nos blouses médicales. Matériaux de qualité et ajustements parfaits pour tout le personnel.",
      initials: "SM",
      rating: 5,
      color: "#8B5CF6",
      accent: "#C4B5FD"
    },
    {
      name: "Pierre Bernard",
      company: "Directeur, Sécurité Pro",
      text: "Les tenues de sécurité sont robustes et confortables. Notre équipe est très satisfaite de la qualité et de la durabilité.",
      initials: "PB",
      rating: 5,
      color: "#F59E0B",
      accent: "#FCD34D"
    }
  ];

  const sectors = [
    { name: "Hôtellerie & Restauration", icon: <FaHotel className="w-4 h-4 sm:w-5 sm:h-5" />, color: "#3B82F6", accent: "#93C5FD", initials: "HR" },
    { name: "Médical & Paramédical", icon: <FaUserMd className="w-4 h-4 sm:w-5 sm:h-5" />, color: "#10B981", accent: "#6EE7B7", initials: "MP" },
    { name: "Sécurité & Services", icon: <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5" />, color: "#F59E0B", accent: "#FCD34D", initials: "SS" },
    { name: "Commerce & Retail", icon: <FaShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />, color: "#8B5CF6", accent: "#C4B5FD", initials: "CR" },
    { name: "Transport & Logistique", icon: <FaPlane className="w-4 h-4 sm:w-5 sm:h-5" />, color: "#14B8A6", accent: "#5EEAD4", initials: "TL" },
    { name: "Industrie & Production", icon: <FaIndustry className="w-4 h-4 sm:w-5 sm:h-5" />, color: "#EC4899", accent: "#F9A8D4", initials: "IP" },
    { name: "Éducation & Formation", icon: <FaUtensils className="w-4 h-4 sm:w-5 sm:h-5" />, color: "#A855F7", accent: "#C084FC", initials: "EF" },
    { name: "Services Publics", icon: <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />, color: "#6366F1", accent: "#818CF8", initials: "SP" }
  ];

  const stats = [
    { value: "500+", label: "Clients satisfaits", color: "#3B82F6" },
    { value: "15+", label: "Années d'expérience", color: "#10B981" },
    { value: "40+", label: "Secteurs d'activité", color: "#8B5CF6" },
    { value: "98%", label: "Taux de satisfaction", color: "#F59E0B" }
  ];

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, nextTestimonial]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Ils nous font confiance</span>
              <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-4">
            Notre <span className="font-semibold">référence client</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Rejoignez les centaines d'entreprises qui nous font confiance pour leur confection sur mesure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {/* Colonne gauche - Carrousel de témoignages */}
          <div>
            <div className="mb-8 sm:mb-10">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 sm:w-6 h-px bg-blue-300"></div>
                  <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">Témoignages</span>
                  <div className="w-4 sm:w-6 h-px bg-blue-300"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAutoPlay(!autoPlay)}
                    className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full ${autoPlay ? 'bg-green-500' : 'bg-gray-400'}`} />
                    <span className="font-medium hidden sm:inline">{autoPlay ? 'Auto' : 'Pause'}</span>
                  </button>
                  
                  <div className="text-xs sm:text-sm text-gray-500 font-medium px-2 py-1 bg-gray-50 rounded-lg">
                    {activeTestimonial + 1}/{testimonials.length}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conteneur carrousel */}
            <div className="relative">
              {/* Flèche Précédent */}
              <button
                onClick={() => {
                  prevTestimonial();
                  setAutoPlay(false);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                aria-label="Témoignage précédent"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Flèche Suivant */}
              <button
                onClick={() => {
                  nextTestimonial();
                  setAutoPlay(false);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                aria-label="Témoignage suivant"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Slide animée */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: isMobile ? 40 : 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isMobile ? -40 : -60 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                  onMouseEnter={() => setHoveredTestimonial(activeTestimonial)}
                  onMouseLeave={() => setHoveredTestimonial(null)}
                >
                  <div className="p-6 sm:p-8">
                    <div className="relative">
                      {/* Avatar et note */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="relative">
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                            {/* Cercle de fond animé */}
                            <motion.div
                              animate={hoveredTestimonial === activeTestimonial ? { rotate: 360 } : { rotate: 0 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 rounded-full border border-dashed opacity-50"
                              style={{ borderColor: currentTestimonial.color }}
                            />
                            
                            {/* Avatar principal */}
                            <div 
                              className="absolute inset-1.5 sm:inset-2 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-medium"
                              style={{ backgroundColor: currentTestimonial.color }}
                            >
                              {currentTestimonial.initials}
                            </div>
                          </div>
                        </div>
                        
                        {/* Étoiles */}
                        <div className="flex gap-0.5 sm:gap-1">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Citation */}
                      <div className="mb-6">
                        <FaQuoteLeft className="text-gray-300 text-lg sm:text-xl mb-3" />
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                          "{currentTestimonial.text}"
                        </p>
                      </div>

                      {/* Auteur */}
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {currentTestimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Points de navigation */}
              <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTestimonial(index);
                      setAutoPlay(false);
                    }}
                    className={`rounded-full transition-all duration-400 focus:outline-none ${
                      activeTestimonial === index 
                        ? 'w-8 sm:w-10 h-2 sm:h-3' 
                        : 'w-2 sm:w-3 h-2 sm:h-3'
                    }`}
                    style={{
                      backgroundColor: activeTestimonial === index ? testimonial.color : '#D1D5DB'
                    }}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite - Secteurs d'activité */}
          <div>
            <div className="mb-8 sm:mb-10">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 sm:w-6 h-px bg-blue-300"></div>
                  <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">Secteurs d'activité</span>
                  <div className="w-4 sm:w-6 h-px bg-blue-300"></div>
                </div>
              </div>
             
            </div>

            {/* Carte des secteurs */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 sm:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="relative group"
                    onMouseEnter={() => setHoveredSector(index)}
                    onMouseLeave={() => setHoveredSector(null)}
                  >
                    <div className="flex items-center p-3 sm:p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-all duration-300 bg-white">
                      <div className="relative flex-shrink-0">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                          <div 
                            className="absolute inset-0.5 sm:inset-1 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium"
                            style={{ backgroundColor: sector.color }}
                          >
                            {sector.initials}
                          </div>
                          
                          {/* Badge d'icône */}
                          <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                            <div style={{ color: sector.color }}>
                              {sector.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <span className="ml-3 text-xs sm:text-sm font-medium text-gray-700 flex-1">
                        {sector.name}
                      </span>
                    </div>

                    {/* Indicateur de survol subtil */}
                    {hoveredSector === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -inset-0.5 rounded-lg border pointer-events-none"
                        style={{ borderColor: sector.color }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}