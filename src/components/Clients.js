'use client';
import { FaQuoteLeft, FaStar, FaCheckCircle, FaIndustry, FaHotel, FaUserMd, FaShieldAlt, FaUtensils, FaPlane, FaShoppingBag, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Clients() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const [hoveredSector, setHoveredSector] = useState(null);

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
  
  ];

  const sectors = [
    { name: "Hôtellerie & Restauration", icon: <FaHotel className="w-5 h-5" />, color: "#3B82F6", accent: "#93C5FD", initials: "HR" },
    { name: "Médical & Paramédical", icon: <FaUserMd className="w-5 h-5" />, color: "#10B981", accent: "#6EE7B7", initials: "MP" },
    { name: "Sécurité & Services", icon: <FaShieldAlt className="w-5 h-5" />, color: "#F59E0B", accent: "#FCD34D", initials: "SS" },
    { name: "Commerce & Retail", icon: <FaShoppingBag className="w-5 h-5" />, color: "#8B5CF6", accent: "#C4B5FD", initials: "CR" },
    { name: "Transport & Logistique", icon: <FaPlane className="w-5 h-5" />, color: "#14B8A6", accent: "#5EEAD4", initials: "TL" },
    { name: "Industrie & Production", icon: <FaIndustry className="w-5 h-5" />, color: "#EC4899", accent: "#F9A8D4", initials: "IP" },
    { name: "Éducation & Formation", icon: <FaUtensils className="w-5 h-5" />, color: "#A855F7", accent: "#C084FC", initials: "EF" },
    { name: "Services Publics", icon: <FaCheckCircle className="w-5 h-5" />, color: "#6366F1", accent: "#818CF8", initials: "SP" }
  ];

  const stats = [
    { value: "500+", label: "Clients satisfaits", color: "#3B82F6" },
    { value: "15+", label: "Années d'expérience", color: "#10B981" },
    { value: "40+", label: "Secteurs d'activité", color: "#8B5CF6" },
    { value: "98%", label: "Taux de satisfaction", color: "#F59E0B" }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gray-300"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Ils nous font confiance</span>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Notre <span className="font-semibold">référence client</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Rejoignez les centaines d'entreprises et de particuliers qui nous font confiance 
            depuis plus de 15 ans pour leur confection sur mesure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Colonne gauche - Témoignages */}
          <div>
            <div className="mb-12">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-blue-300"></div>
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">Témoignages</span>
                  <div className="w-6 h-px bg-blue-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Ce que disent <span className="font-medium">nos clients</span>
              </h3>
            </div>
            
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredTestimonial(index)}
                  onMouseLeave={() => setHoveredTestimonial(null)}
                >
                  <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                    {/* Avatar et note */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="relative w-16 h-16">
                          {/* Cercle de fond animé */}
                          <motion.div
                            animate={hoveredTestimonial === index ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed opacity-50"
                            style={{ borderColor: testimonial.color }}
                          />
                          
                          {/* Avatar principal */}
                          <div 
                            className="absolute inset-2 rounded-full flex items-center justify-center text-white text-xl font-medium"
                            style={{ backgroundColor: testimonial.color }}
                          >
                            {testimonial.initials}
                          </div>
                        </div>
                      </div>
                      
                      {/* Étoiles */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Citation */}
                    <div className="mb-6">
                      <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
                      <p className="text-gray-600 text-sm leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Auteur */}
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Indicateur de survol subtil */}
                  {hoveredTestimonial === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -inset-1 rounded-lg border pointer-events-none"
                      style={{ borderColor: testimonial.color }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Colonne droite - Secteurs d'activité */}
          <div>
            <div className="mb-12">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-blue-300"></div>
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">Secteurs d'activité</span>
                  <div className="w-6 h-px bg-blue-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Notre expertise <span className="font-medium">sectorielle</span>
              </h3>
            </div>

            {/* Carte des secteurs */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 mb-8">
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
                    <div className="flex items-center p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-all duration-300 bg-white">
                      <div className="relative flex-shrink-0">
                        <div className="relative w-10 h-10">
                          <div 
                            className="absolute inset-1 rounded-full flex items-center justify-center text-white text-sm font-medium"
                            style={{ backgroundColor: sector.color }}
                          >
                            {sector.initials}
                          </div>
                          
                          {/* Badge d'icône */}
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                            <div style={{ color: sector.color }}>
                              {sector.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <span className="ml-3 text-sm font-medium text-gray-700 flex-1">
                        {sector.name}
                      </span>
                    </div>

                    {/* Indicateur de survol subtil */}
                    {hoveredSector === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -inset-1 rounded-lg border pointer-events-none"
                        style={{ borderColor: sector.color }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Notre expertise s'étend à de nombreux secteurs professionnels nécessitant 
                des vêtements sur mesure de qualité.
              </p>
            </div>

            {/* Statistiques */}
           
          </div>
        </div>
      </div>
    </section>
  );
}