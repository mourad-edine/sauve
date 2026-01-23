// components/CTA.js
'use client';
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA({ 
  subtitle = "Accompagnement Expert",
  title = "Prêt à transformer l'image de votre entreprise ?",
  primaryButton = { text: "Demander un devis", onClick: () => {} },
  secondaryButton = { text: "Voir nos réalisations", onClick: () => {} }
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white border-t border-b border-gray-200"
    >
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Texte */}
          <div className="text-center md:text-left">
            <div className="mb-1">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-medium text-gray-900">
              {title}
            </h3>
          </div>
          
          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={primaryButton.onClick}
              className="inline-flex items-center justify-center gap-1 bg-blue-700 text-white font-medium py-2 px-4 hover:bg-blue-800 transition-colors text-xs"
            >
              <span>{primaryButton.text}</span>
              <FaArrowRight className="w-2.5 h-2.5" />
            </button>
            
            <button
              onClick={secondaryButton.onClick}
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-2 px-4 hover:bg-gray-50 transition-colors text-xs"
            >
              <span>{secondaryButton.text}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}