<<<<<<< HEAD
'use client';
import { FaQuoteLeft, FaStar, FaCheckCircle, FaIndustry, FaHotel, FaUserMd, FaShieldAlt, FaUtensils, FaPlane, FaShoppingBag, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Clients() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const [hoveredSector, setHoveredSector] = useState(null);

=======
// components/Clients.js
import { FaQuoteLeft, FaStar, FaCheckCircle, FaIndustry, FaHotel, FaUserMd, FaShieldAlt, FaUtensils, FaPlane, FaShoppingBag } from "react-icons/fa";

export default function Clients() {
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Directrice, Hôtel Le Majestique",
      text: "Les uniformes pour notre personnel ont considérablement amélioré notre image professionnelle. Qualité exceptionnelle et service impeccable.",
<<<<<<< HEAD
      initials: "MD",
      rating: 5,
      color: "#3B82F6",
      accent: "#93C5FD"
=======
      image: "MD",
      rating: 5
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    },
    {
      name: "Thomas Leroy",
      company: "Gérant, Café Central",
      text: "Nous commandons régulièrement des tabliers et t-shirts personnalisés. Toujours parfaitement réalisés et livrés dans les délais.",
<<<<<<< HEAD
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
=======
      image: "TL",
      rating: 5
    },
    {
      name: "Sophie Martin",
      company: "Particulier",
      text: "J'ai fait confectionner une robe sur mesure pour mon mariage. Le résultat était exactement ce que j'imaginais, même mieux !",
      image: "SM",
      rating: 5
    }
  ];

  const sectors = [
    { name: "Hôtellerie & Restauration", icon: <FaHotel />, color: "blue" },
    { name: "Médical & Paramédical", icon: <FaUserMd />, color: "green" },
    { name: "Sécurité & Services", icon: <FaShieldAlt />, color: "orange" },
    { name: "Commerce & Retail", icon: <FaShoppingBag />, color: "purple" },
    { name: "Transport & Logistique", icon: <FaPlane />, color: "indigo" },
    { name: "Industrie & Production", icon: <FaIndustry />, color: "red" },
    { name: "Éducation & Formation", icon: <FaUtensils />, color: "yellow" },
    { name: "Services Publics", icon: <FaCheckCircle />, color: "teal" }
  ];

  const stats = [
    { value: "500+", label: "Clients satisfaits" },
    { value: "15+", label: "Années d'expérience" },
    { value: "40+", label: "Secteurs d'activité" },
    { value: "98%", label: "Taux de satisfaction" }
  ];

  return (
    <section className="py-16 md:py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* En-tête amélioré */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 md:mb-6">
            NOTRE RÉFÉRENCE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 md:mb-6 leading-tight uppercase">
            Ils nous font <span className="text-yellow-600">confiance</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Rejoignez les centaines d'entreprises et de particuliers qui nous font confiance 
            depuis plus de 15 ans pour leur confection sur mesure.
          </p>
        </div>
        
      
        
        {/* Contenu principal */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Colonne gauche - Témoignages */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 flex items-center">
                <FaQuoteLeft className="text-blue-500 mr-3" />
                Témoignages clients
              </h3>
            </div>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="group bg-white p-6 md:p-7 shadow-lg border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  {/* Évaluation par étoiles */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm md:text-base" />
                    ))}
                  </div>
                  
                  {/* Citation */}
                  <div className="relative mb-6">
                    <FaQuoteLeft className="absolute -top-3 -left-2 text-blue-200 text-3xl opacity-50" />
                    <p className="text-gray-700 italic pl-6 text-sm md:text-base leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  {/* Auteur */}
                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 text-base md:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base">
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
<<<<<<< HEAD

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
=======
                </div>
              ))}
            </div>
          </div>
          
          {/* Colonne droite - Secteurs d'activité */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 flex items-center">
                <FaIndustry className="text-blue-500 mr-3" />
                Secteurs d'activité
              </h3>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 md:p-8 rounded-2xl shadow-xl mb-8">
              <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
                Notre expertise s'étend à de nombreux secteurs professionnels nécessitant 
                des vêtements sur mesure de qualité.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sectors.map((sector, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors duration-300"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3`}>
                      <div className="text-white text-lg">
                        {sector.icon}
                      </div>
                    </div>
                    <span className="text-sm md:text-base font-medium">
                      {sector.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Bannière de confiance */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold mb-1">15+</div>
                    <div className="text-blue-200 text-sm md:text-base">années d'expertise</div>
                  </div>
                  <div className="text-center">
                    <FaCheckCircle className="text-yellow-400 text-2xl md:text-3xl mb-2 mx-auto" />
                    <div className="text-sm md:text-base text-blue-200">Garantie satisfaction</div>
                  </div>
                  <a 
                    href="/contact" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-5 py-2.5 rounded-lg transition duration-300 text-sm md:text-base transform hover:scale-105"
                  >
                    Rejoindre nos clients
                  </a>
                </div>
              </div>
            </div>
            
            {/* Logos de clients (optionnel) */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-6 text-center uppercase">
                Parmi nos clients
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Hôtel Majestique", "Clinique Santé+", "Café Central", 
                  "Securitas Pro", "Boutique Élégance", "Air Madagascar"
                ].map((client, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border border-gray-200"
                  >
                    <div className="font-medium text-blue-900 text-sm">
                      {client}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
      </div>
    </section>
  );
}