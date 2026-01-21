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
      color: "#1E40AF",
      action: "Explorer nos projets",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
    },
    {
      icon: <FaRulerCombined className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "Consultation",
      description: "Rencontrez nos experts pour discuter de votre projet",
      color: "#1E40AF",
      action: "Prendre rendez-vous",
      image: "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png"
    },
    {
      icon: <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "Réalisation",
      description: "Transformons vos idées en réalité dans notre atelier",
      color: "#1E40AF",
      action: "Visiter l'atelier"
      // Pas d'image pour cette carte
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 h-px bg-blue-300"></div>
                <span className="text-sm font-medium text-blue-600 uppercase">
                  Prochaines Étapes
                </span>
                <div className="w-6 h-px bg-blue-300"></div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-4 uppercase">
              Prêt à concrétiser
              <span className="block text-base md:text-lg lg:text-xl text-yellow-600 font-normal mt-2">
                votre projet ?
              </span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          </div>
        </div>

        {/* Processus interactif */}
        <div className="max-w-6xl mx-auto">
          {/* Barre de progression */}
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
            <div className="relative flex justify-between px-4 sm:px-0">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="relative group"
                >
                  {/* Point d'étape */}
                  <div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep >= index ? 'scale-110 shadow-lg' : 'scale-100 shadow-sm'
                    }`}
                    style={{ 
                      backgroundColor: activeStep >= index ? step.color : '#F3F4F6',
                      border: `2px solid ${activeStep >= index ? '#60A5FA' : '#E5E7EB'}`
                    }}
                  >
                    <div className={`transition-colors duration-300 ${activeStep >= index ? 'text-white' : 'text-gray-400'}`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Titre de l'étape */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3">
                    <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${activeStep === index ? 'text-blue-900' : 'text-gray-500'}`}>
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
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className={`grid ${steps[activeStep].image ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
              {/* Photo à gauche (si disponible) */}
              {steps[activeStep].image && (
                <div className="hidden lg:block relative min-h-[300px] bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-full h-full max-w-md mx-auto">
                      {/* Conteneur d'image */}
                      <div className="absolute inset-0 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                        <motion.img
                          key={steps[activeStep].image}
                          src={steps[activeStep].image}
                          alt={steps[activeStep].title}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Décoration circulaire */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-6 border-4 border-dashed rounded-full opacity-20"
                        style={{ borderColor: steps[activeStep].color }}
                      />
                      
                      {/* Numéro de l'étape */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {activeStep + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Contenu à droite (ou centré si pas d'image) */}
              <div className={`p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col ${!steps[activeStep].image ? 'text-center items-center' : ''}`}>
                {/* Icône et titre */}
                <div className={`flex ${!steps[activeStep].image ? 'flex-col items-center' : 'items-center'} gap-4 mb-6`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-900 flex items-center justify-center rounded-xl text-white shadow-md">
                    {steps[activeStep].icon}
                  </div>
                  <div className={`${!steps[activeStep].image ? 'text-center' : ''}`}>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-900 mb-2">
                      {steps[activeStep].title}
                    </h3>
                    <span className="text-xs font-medium text-blue-700 uppercase">
                      Étape {activeStep + 1}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 flex-1">
                  {steps[activeStep].description}
                </p>

                {/* Bouton */}
                <div className={`${!steps[activeStep].image ? 'text-center' : ''}`}>
                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-300 cursor-pointer"
                    >
                      <span>{steps[activeStep].action}</span>
                      <FaArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Indicateur */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="inline-flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">
                Suivez les étapes vers votre projet
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}