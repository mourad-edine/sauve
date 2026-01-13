'use client';
import Link from 'next/link';
import { FaRulerCombined, FaCalendarAlt, FaLightbulb, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioCTA() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Inspiration",
      description: "Partagez vos idées et laissez-vous inspirer par nos réalisations",
      color: "#3B82F6",
      accent: "#93C5FD",
      action: "Explorer nos projets"
    },
    {
      icon: <FaRulerCombined className="w-8 h-8" />,
      title: "Consultation",
      description: "Rencontrez nos experts pour discuter de votre projet",
      color: "#10B981",
      accent: "#6EE7B7",
      action: "Prendre rendez-vous"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Réalisation",
      description: "Transformons vos idées en réalité dans notre atelier",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      action: "Visiter l'atelier"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section avec design diagonal */}
        <div className="relative overflow-hidden rounded-2xl mb-24">
          {/* Fond en dégradé diagonal */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          
          {/* Motif décoratif */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-100/30 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-blue-300"></div>
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">Prochaines Étapes</span>
                  <div className="w-8 h-px bg-blue-300"></div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Prêt à concrétiser <span className="font-semibold">votre projet</span> ?
              </h2>
              
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Chaque projet commence par une conversation. Partagez vos idées avec nous et 
                découvrez comment nous pouvons les transformer en réalité.
              </p>
            </motion.div>

            {/* Processus interactif */}
            <div className="max-w-4xl mx-auto">
              {/* Barre de progression */}
              <div className="relative mb-12">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                <div className="relative flex justify-between">
                  {steps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className="relative group"
                    >
                      {/* Point d'étape */}
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
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
                        <div className="absolute top-1/2 left-full w-8 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                      )}
                      
                      {/* Titre de l'étape */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4">
                        <span className={`text-sm font-medium whitespace-nowrap ${
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
                className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Visuel */}
                  <div className="md:w-1/3">
                    <div 
                      className="w-full aspect-square rounded-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: `${steps[activeStep].color}10`,
                        border: `2px solid ${steps[activeStep].accent}30`
                      }}
                    >
                      <div className="text-6xl opacity-10" style={{ color: steps[activeStep].color }}>
                        {activeStep + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">
                      {steps[activeStep].title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {steps[activeStep].description}
                    </p>
                    
                    {/* Actions */}
                    <div className="space-y-4">
                      <Link href="/contact">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-colors duration-300 group/btn"
                          style={{ 
                            backgroundColor: steps[activeStep].color,
                            color: 'white'
                          }}
                        >
                          <span>{steps[activeStep].action}</span>
                          <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </Link>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span>Disponible maintenant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span>Sans engagement</span>
                        </div>
                      </div>
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
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-12 relative overflow-hidden">
            {/* Effets visuels */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-light mb-6">
                Inspirez-vous de nos réalisations pour <span className="font-medium">votre projet</span>
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Chaque création est unique, tout comme votre projet. Contactez-nous pour 
                transformer vos idées en vêtements d'exception.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-gray-900 font-medium py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
                  >
                    <span>Commander un devis gratuit</span>
                    <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
                
                <Link href="tel:+261349219223">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white font-medium py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <span>Appeler un expert</span>
                    <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
              </div>
              
              <p className="text-gray-400 text-sm mt-6">
                Réponse garantie sous 24h ouvrées • Consultation gratuite
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}