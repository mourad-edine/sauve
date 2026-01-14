<<<<<<< HEAD
'use client';
import { FaSearch, FaRuler, FaCut, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "Consultation",
      description: "Échange sur vos besoins, choix des modèles et des tissus adaptés à vos exigences.",
      duration: "1-2 jours",
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "C"
    },
    {
      icon: <FaRuler className="w-6 h-6" />,
      title: "Prise de mesures",
      description: "Prise de mesures précises, soit en atelier soit directement chez vous ou dans votre entreprise.",
      duration: "1 journée",
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "PM"
    },
    {
      icon: <FaCut className="w-6 h-6" />,
      title: "Confection",
      description: "Fabrication artisanale dans notre atelier avec un suivi rigoureux de la qualité.",
      duration: "2-3 semaines",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "CF"
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "Livraison & ajustements",
      description: "Livraison et essayage final avec ajustements si nécessaire pour une satisfaction totale.",
      duration: "1-2 jours",
      color: "#F59E0B",
      accent: "#FCD34D",
      initials: "LA"
=======
// components/Process.js - Version identique, mais responsive à 1024px (lg)
import { FaSearch, FaRuler, FaCut, FaCheckCircle } from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Consultation",
      description: "Échange sur vos besoins, choix des modèles et des tissus adaptés à vos exigences.",
      duration: "1-2 jours"
    },
    {
      icon: <FaRuler />,
      title: "Prise de mesures",
      description: "Prise de mesures précises, soit en atelier soit directement chez vous ou dans votre entreprise.",
      duration: "1 journée"
    },
    {
      icon: <FaCut />,
      title: "Confection",
      description: "Fabrication artisanale dans notre atelier avec un suivi rigoureux de la qualité.",
      duration: "2-3 semaines"
    },
    {
      icon: <FaCheckCircle />,
      title: "Livraison & ajustements",
      description: "Livraison et essayage final avec ajustements si nécessaire pour une satisfaction totale.",
      duration: "1-2 jours"
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    }
  ];

  return (
<<<<<<< HEAD
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
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Notre Processus</span>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            4 étapes pour <span className="font-semibold">l'excellence</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Un parcours structuré pour garantir qualité, précision et satisfaction à chaque étape.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-24">
          {/* Ligne de connexion horizontale (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
          
          {/* Ligne de connexion verticale (mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>
          
          {/* Grille des étapes */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Connecteur mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-full left-1/2 h-8 w-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>
                )}

                {/* Connecteur desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2 z-0"></div>
                )}

                {/* Carte d'étape */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group h-full">
                  {/* Badge d'étape */}
                  <div className="mb-4 flex justify-between items-center">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: `${step.color}10`,
                        color: step.color 
                      }}
                    >
                      Étape {index + 1}
                    </span>
                    <div className="flex items-center gap-1">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: step.color }}
                      ></div>
                      <div 
                        className="w-2 h-2 rounded-full opacity-60"
                        style={{ backgroundColor: step.color }}
                      ></div>
                      <div 
                        className="w-2 h-2 rounded-full opacity-30"
                        style={{ backgroundColor: step.color }}
                      ></div>
                    </div>
                  </div>

                  {/* Icone */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${step.color}10`,
                      border: `1px solid ${step.accent}30`
                    }}
                  >
                    <div style={{ color: step.color }}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Pied de carte */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    {/* Durée */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg 
                        className="w-4 h-4 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="1.5" 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <span>{step.duration}</span>
                    </div>

                    {/* Indicateur d'étape */}
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span style={{ color: step.color }}>
                        {index === steps.length - 1 ? "Final" : "Continuer"}
                      </span>
                      {index < steps.length - 1 && (
                        <FaArrowRight className="w-3 h-3" style={{ color: step.color }} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Indicateur de survol subtil */}
                {hoveredStep === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -inset-1 rounded-lg border pointer-events-none"
                    style={{ borderColor: step.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-8 md:p-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-blue-300"></div>
                <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">Prêt à commencer</span>
                <div className="w-6 h-px bg-blue-300"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Chaque projet commence par <span className="font-medium">une consultation gratuite</span>
            </h3>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Notre équipe d'experts vous accompagne dès la première étape pour comprendre 
              vos besoins et vous proposer la meilleure solution.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
            >
              <span>Commencer maintenant</span>
              <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
=======
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-900 mb-4 uppercase">
            Notre Processus
            <span className="block text-lg lg:text-xl text-yellow-600 font-normal mt-2">
              4 étapes pour l'excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Un parcours structuré pour garantir qualité, précision et satisfaction à chaque étape.
          </p>
        </div>
        
        {/* Timeline - Version verticale sur mobile/tablette, horizontale sur desktop */}
        <div className="relative">
          {/* Ligne horizontale sur ≥1024px */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
          {/* Ligne verticale sur <1024px */}
          <div className="lg:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecteur mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 h-8 w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>
                  )}
                  
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Contenu */}
                    <div className="bg-white p-5 lg:p-6 rounded-xl shadow-lg border border-blue-100 w-full">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          Étape {index + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-xl lg:text-xl font-bold text-blue-900 mb-3 uppercase">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm lg:text-base mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="text-xs text-gray-500 font-medium">
                          {step.duration}
                        </div>
                        <div className="text-xs text-blue-600 font-medium">
                          {index === steps.length - 1 ? 'Final' : 'Suivant'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Appel à l'action */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-lg lg:text-xl text-gray-600 mb-6">
            Chaque projet commence par une consultation gratuite
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            <span>Commencer maintenant</span>
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
      </div>
    </section>
  );
}