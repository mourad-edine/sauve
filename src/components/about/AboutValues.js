'use client';
import { FaFlag, FaSearch, FaShieldAlt, FaLightbulb, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutValues() {
  const commitments = [
    {
      title: "Fabriqué en Madagascar",
      description: "100% de nos créations sont confectionnées dans notre atelier Toamasinaien",
      icon: <FaFlag className="w-6 h-6" />,
      color: "#1E40AF",
      accent: "#60A5FA"
    },
    {
      title: "Transparence",
      description: "Devis détaillé, suivi de production, traçabilité des tissus",
      icon: <FaSearch className="w-6 h-6" />,
      color: "#374151",
      accent: "#9CA3AF"
    },
    {
      title: "Durabilité",
      description: "Garantie 2 ans sur toutes nos créations et service de retouches",
      icon: <FaShieldAlt className="w-6 h-6" />,
      color: "#047857",
      accent: "#10B981"
    },
    {
      title: "Innovation",
      description: "Veille constante sur les nouvelles techniques et matériaux",
      icon: <FaLightbulb className="w-6 h-6" />,
      color: "#B45309",
      accent: "#F59E0B"
    }
  ];

  const qualityCharter = [
    {
      title: "Sélection rigoureuse des tissus",
      description: "Testés pour leur résistance, leur confort et leur durabilité"
    },
    {
      title: "Contrôles qualité multiples",
      description: "À chaque étape de la confection, du patron à la finition"
    },
    {
      title: "Essayages systématiques",
      description: "Pour un ajustement parfait et une satisfaction garantie"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs géométriques */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Points de repère */}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 uppercase">
              Notre approche
              <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
                {/* 4 étapes pour l'excellence */}
              </span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Des principes qui guident chaque étape de notre travail

            </p>
          </div>
          
        </motion.div>

        {/* Engagements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Carte avec effet de profondeur */}
                  <div 
                    className="rounded-lg p-8 border transition-all duration-300 group-hover:shadow-lg h-full"
                    style={{
                      backgroundColor: `${commitment.color}05`,
                      borderColor: `${commitment.color}20`
                    }}
                  >
                    {/* Icône centrée */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${commitment.color}15`,
                        border: `1px solid ${commitment.color}30`
                      }}
                    >
                      <div style={{ color: commitment.color }}>
                        {commitment.icon}
                      </div>
                    </div>

                    {/* Contenu */}
                    <h4 className="text-lg font-medium text-gray-900 mb-3 text-center">
                      {commitment.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {commitment.description}
                    </p>

                    {/* Indicateur de survol */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Charte qualité minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-8 md:p-12">
            {/* En-tête de section */}
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-gray-300"></div>
                  <span className="text-sm font-medium text-gray-500">Charte Qualité</span>
                  <div className="w-6 h-px bg-gray-300"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Notre <span className="font-medium">exigence</span> qualité
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Liste des points qualité */}
              <div className="space-y-8">
                {qualityCharter.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    {/* Marqueur */}
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center mr-4 mt-1">
                      <FaCheck className="w-3 h-3 text-gray-600" />
                    </div>
                    
                    {/* Contenu */}
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stat de satisfaction */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Cercle de fond */}
                  <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
                  
                  {/* Cercle de progression */}
                  <motion.div
                    initial={{ strokeDasharray: "0 1000" }}
                    whileInView={{ strokeDasharray: "314 1000" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute inset-4"
                  >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeDasharray="314"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </motion.div>
                  
                  {/* Texte central */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      className="text-2xl font-light text-gray-900 mb-2"
                    >
                      98%
                    </motion.div>
                    <div className="text-sm text-gray-500 text-center">
                      satisfaction
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="text-sm text-gray-600">
                    Basé sur nos retours clients des 12 derniers mois
                  </div>
                </div>
              </div>
            </div>

            {/* Ligne de séparation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <span>Certifié Atelier d'Art de Madagascar</span>
                  <span>•</span>
                  <span>Membre de la Fédération des Métiers d'Art</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}