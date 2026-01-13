'use client';
import Link from 'next/link';
import { FaHandshake, FaLightbulb, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutCTA() {
  const ctaOptions = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Échangeons sur votre projet",
      description: "Partagez vos idées avec nos experts et obtenez des conseils personnalisés",
      buttonText: "Nous contacter",
      link: "/contact",
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "EP"
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: "Visitez notre atelier",
      description: "Rencontrez notre équipe et découvrez notre savoir-faire en direct",
      buttonText: "Prendre rendez-vous",
      link: "/contact",
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "VA",
      type: "button"
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Devenez partenaire",
      description: "Projet d'entreprise ? Discutons d'un partenariat durable",
      buttonText: "Demander un devis",
      link: "/contact",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "DP"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-8 md:p-12"
        >
          {/* En-tête */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-blue-300"></div>
                <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">Prochaines étapes</span>
                <div className="w-8 h-px bg-blue-300"></div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Prêt à écrire la suite <span className="font-semibold">avec nous ?</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Après avoir découvert qui nous sommes, laissez-nous découvrir votre projet. 
              Ensemble, créons quelque chose d'exceptionnel.
            </p>
          </div>

          {/* Grille des options CTA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 h-full">
                  {/* En-tête avec avatar */}
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto">
                      {/* Cercle de fond animé */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed opacity-30"
                        style={{ borderColor: option.color }}
                      />
                      
                      {/* Cercle principal */}
                      <div 
                        className="absolute inset-2 rounded-full flex items-center justify-center text-white text-lg font-medium"
                        style={{ backgroundColor: option.color }}
                      >
                        {option.initials}
                      </div>
                      
                      {/* Badge d'icône */}
                      <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        <div style={{ color: option.color }}>
                          {option.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-3">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  {/* Bouton */}
                  <div className="pt-4 border-t border-gray-100">
                    {option.type === "button" ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 w-full justify-center py-3 px-4 rounded-lg font-medium transition-colors duration-300 group/btn"
                        style={{ 
                          backgroundColor: `${option.color}10`,
                          color: option.color 
                        }}
                      >
                        {option.buttonText}
                        <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    ) : (
                      <Link href={option.link}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 w-full justify-center py-3 px-4 rounded-lg font-medium transition-colors duration-300 group/btn"
                          style={{ 
                            backgroundColor: `${option.color}10`,
                            color: option.color 
                          }}
                        >
                          {option.buttonText}
                          <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message complémentaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-200 text-center"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-gray-300"></div>
                <span className="text-sm font-medium text-gray-500">Questions</span>
                <div className="w-4 h-px bg-gray-300"></div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vous avez des questions sur notre entreprise ou nos services ? 
              N'hésitez pas à nous contacter pour plus d'informations.
            </p>
            
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300 group"
              >
                <span>Contactez-nous directement</span>
                <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}