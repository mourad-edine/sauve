// components/CTA.js
'use client';
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA({ 
  subtitle = "Accompagnement Expert",
  title = "Prêt à transformer l'image de votre entreprise ?",
  description = "Notre équipe d'experts vous accompagne dans la création d'une identité vestimentaire qui reflète vos valeurs et optimise le confort de vos équipes.",
  primaryButton = { text: "Demander un devis", onClick: () => {} },
  secondaryButton = { text: "Voir nos réalisations", onClick: () => {} },
  footerText = "Réponse sous 24h • Étude gratuite • Solutions sur mesure",
  image = "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
        {/* Background avec photo d'ingénieur */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
        </div>
        
        <div className="relative p-6 sm:p-8 md:p-12 text-center">
          <div className="inline-block mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-px bg-blue-300"></div>
              <span className="text-xs sm:text-sm font-medium text-blue-200 uppercase">
                {subtitle}
              </span>
              <div className="w-6 sm:w-8 h-px bg-blue-300"></div>
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-4 sm:mb-6 px-4">
            {title}
          </h3>
          
          <p className="text-blue-100 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-4">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={primaryButton.onClick}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-blue-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300 group text-sm sm:text-base"
            >
              <span>{primaryButton.text}</span>
              <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={secondaryButton.onClick}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 border border-white text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-white/10 transition-all duration-300 group text-sm sm:text-base"
            >
              <span>{secondaryButton.text}</span>
            </motion.button>
          </div>
          
          <p className="text-blue-200/70 text-xs sm:text-sm mt-6 sm:mt-8">
            {footerText}
          </p>
        </div>
      </div>
    </motion.div>
  );
}