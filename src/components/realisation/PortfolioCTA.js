'use client';
import Link from 'next/link';
import { FaRulerCombined, FaCalendarAlt, FaLightbulb, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioCTA() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FaLightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "Inspiration",
      description: "Partagez vos idées et laissez-vous inspirer par nos réalisations",
      color: "#3B82F6",
      accent: "#93C5FD",
      action: "Explorer nos projets"
    },
    {
      icon: <FaRulerCombined className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "Consultation",
      description: "Rencontrez nos experts pour discuter de votre projet",
      color: "#10B981",
      accent: "#6EE7B7",
      action: "Prendre rendez-vous"
    },
    {
      icon: <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "Réalisation",
      description: "Transformons vos idées en réalité dans notre atelier",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      action: "Visiter l'atelier"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section avec design diagonal */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-12 sm:mb-16 md:mb-20">
          {/* Fond en dégradé diagonal */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          
          {/* Motif décoratif */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full -translate-y-16 sm:-translate-y-24 lg:-translate-y-32 translate-x-16 sm:translate-x-24 lg:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-tr from-green-100/30 to-transparent rounded-full translate-y-16 sm:translate-y-24 lg:translate-y-32 -translate-x-16 sm:-translate-x-24 lg:-translate-x-32"></div>
          
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <div className="inline-block mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 sm:w-6 md:w-8 h-px bg-blue-300"></div>
                  <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">Prochaines Étapes</span>
                  <div className="w-4 sm:w-6 md:w-8 h-px bg-blue-300"></div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 px-4">
                Prêt à concrétiser <span className="font-semibold">votre projet</span> ?
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
                Chaque projet commence par une conversation. Partagez vos idées avec nous et 
                découvrez comment nous pouvons les transformer en réalité.
              </p>
            </motion.div>

            {/* Processus interactif */}
            <div className="max-w-4xl mx-auto">
              {/* Barre de progression */}
              <div className="relative mb-8 sm:mb-10 md:mb-12">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                <div className="relative flex justify-between px-2 sm:px-0">
                  {steps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className="relative group"
                    >
                      {/* Point d'étape */}
                      <div 
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeStep >= index ? 'scale-110' : 'scale-100'
                        }`}
                        style={{ 
                          backgroundColor: activeStep >= index ? step.color : '#F3F4F6',
                          border: `2px solid ${activeStep >= index ? step.accent : '#E5E7EB'}`
                        }}
                      >
                        <div className={`transition-colors duration-300 ${
                          activeStep >= index ? 'text-white' : 'text-gray-400'
                        }`}>
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Ligne de connexion */}
                      {index < steps.length - 1 && (
                        <div className="absolute top-1/2 left-full w-4 sm:w-6 md:w-8 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                      )}
                      
                      {/* Titre de l'étape */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 sm:mt-3 md:mt-4">
                        <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${
                          activeStep === index ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contenu de l'étape active */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-5 sm:p-6 md:p-8 lg:p-12 shadow-sm sm:shadow-md md:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 md:gap-10">
                  {/* Visuel */}
                  <div className="lg:w-1/3 w-full">
                    <div 
                      className="w-full aspect-square rounded-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: `${steps[activeStep].color}10`,
                        border: `2px solid ${steps[activeStep].accent}30`
                      }}
                    >
                      <div className="text-4xl sm:text-5xl md:text-6xl opacity-10" style={{ color: steps[activeStep].color }}>
                        {activeStep + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="lg:w-2/3 w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3 sm:mb-4">
                      {steps[activeStep].title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                      {steps[activeStep].description}
                    </p>
                    
                    {/* Actions */}
                    <div className="space-y-3 sm:space-y-4">
                      <Link href="/contact">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-300 group/btn text-sm sm:text-base"
                          style={{ 
                            backgroundColor: steps[activeStep].color,
                            color: 'white'
                          }}
                        >
                          <span>{steps[activeStep].action}</span>
                          <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </Link>
                      
                      
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
            {/* Effets visuels */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full translate-y-12 sm:translate-y-16 -translate-x-12 sm:-translate-x-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 px-4">
                Inspirez-vous de nos réalisations pour <span className="font-medium">votre projet</span>
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Chaque création est unique, tout comme votre projet. Contactez-nous pour 
                transformer vos idées en vêtements d'exception.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 sm:gap-3 bg-white text-gray-900 font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 group text-sm sm:text-base"
                  >
                    <span>Commander un devis gratuit</span>
                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
                
                <Link href="tel:+261349219223">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 sm:gap-3 bg-transparent border border-white text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-white/10 transition-colors duration-300 group text-sm sm:text-base"
                  >
                    <span>Appeler un expert</span>
                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
              </div>
              
              <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">
                Réponse garantie sous 24h ouvrées • Consultation gratuite
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}