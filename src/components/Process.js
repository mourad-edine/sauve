'use client';
import { FaSearch, FaRuler, FaCut, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Process() {
  const steps = [
    {
      icon: <FaSearch className="w-5 h-5" />,
      title: "Consultation",
      description: "Échange sur vos besoins, choix des modèles et des tissus adaptés à vos exigences.",
      // duration: "1-2 jours"
    },
    {
      icon: <FaRuler className="w-5 h-5" />,
      title: "Prise de mesures",
      description: "Prise de mesures précises, soit en atelier soit directement chez vous ou dans votre entreprise.",
      // duration: "1 journée"
    },
    {
      icon: <FaCut className="w-5 h-5" />,
      title: "Confection",
      description: "Fabrication artisanale dans notre atelier avec un suivi rigoureux de la qualité.",
      // duration: "2-3 semaines"
    },
    {
      icon: <FaCheckCircle className="w-5 h-5" />,
      title: "Livraison & ajustements",
      description: "Livraison et essayage final avec ajustements si nécessaire pour une satisfaction totale.",
      // duration: "1-2 jours"
    },
    // Doublons pour le défilement infini
    { icon: <FaSearch className="w-5 h-5" />, title: "Consultation", description: "Échange sur vos besoins...", duration: "1-2 jours" },
    { icon: <FaRuler className="w-5 h-5" />, title: "Prise de mesures", description: "Prise de mesures...", duration: "1 journée" },
    { icon: <FaCut className="w-5 h-5" />, title: "Confection", description: "Fabrication artisanale...", duration: "2-3 semaines" },
    { icon: <FaCheckCircle className="w-5 h-5" />, title: "Livraison & ajustements", description: "Livraison...", duration: "1-2 jours" }
  ];

  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête avec Image qui interagit avec le titre */}
        <div className="relative flex flex-col items-center mb-12 md:mb-16">
          
          {/* Image PNG qui pointe directement le titre - Position proche */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 lg:right-10 xl:right-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.img 
                src="https://png.pngtree.com/png-vector/20231001/ourmid/pngtree-civil-engineer-reviewing-blueprint-company-handsome-png-image_10133006.png"
                alt="Indicateur de processus"
                className="w-36 h-auto object-contain pointer-events-none lg:w-44"
                // Animation subtile qui attire l'attention vers le titre
                animate={{ 
                  x: [0, -15, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
              />
              
              {/* Ligne pointillée qui relie l'image au titre */}
              
            </motion.div>
          </div>

          {/* Bloc Texte avec espace pour l'image */}
          <div className="text-center z-20 relative">
            
            
            {/* Titre qui réagit au survol de l'image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-4 uppercase">
                4 étapes pour
                <span className="block text-base md:text-lg lg:text-xl text-yellow-600 font-normal mt-2">
                  l'excellence
                </span>
              </h2>
            </motion.div>
            
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </div>

        {/* Desktop: Banderole horizontale */}
        <div className="hidden lg:block relative overflow-hidden pt-6">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {steps.map((step, index) => (
              <div
                key={`desktop-${index}`}
                className="flex-shrink-0 w-80 bg-white border border-gray-200 p-8 hover:border-blue-300 transition-all duration-300 h-[240px] flex flex-col "
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                    <div className="text-blue-400 text-xl">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-blue-700 uppercase">
                      Étape {index % 4 + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                  {step.description}
                </p>

                
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile & Tablet: Grille statique */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.slice(0, 4).map((step, index) => (
              <div
                key={`mobile-${index}`}
                className="bg-white border border-gray-200 p-5 h-[200px] flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-lg">
                    <div className="text-blue-400 text-sm">
                      {step.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-blue-700">
                    Étape {index + 1}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-blue-900 mb-2">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-xs leading-relaxed flex-1 mb-3">
                  {step.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-100 rounded-full"></div>
                    <span>{step.duration}</span>
                  </div>
                  <span className="text-xs font-medium text-blue-700">
                    {index + 1}/4
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateur */}
        

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-blue-900 text-white font-medium  hover:bg-blue-800 transition-colors duration-300"
          >
            Démarrer mon projet
          </Link>
        </div>
      </div>
    </section>
  );
}