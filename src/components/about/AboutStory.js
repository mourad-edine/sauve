<<<<<<< HEAD
"use client";

import {
  FaCalendar,
  FaUsers,
  FaBuilding,
  FaAward,
  FaLeaf,
} from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function AboutStory() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const milestones = [
    {
      year: "2009",
      title: "Fondation",
      description:
        "Lancement de notre aventure entrepreneuriale avec une vision claire",
      icon: FaCalendar,
      color: "#3B82F6",
      accent: "#93C5FD",
    },
    {
      year: "2012",
      title: "Premiers succès",
      description: "Validation de notre modèle et croissance rapide",
      icon: FaUsers,
      color: "#10B981",
      accent: "#6EE7B7",
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Développement international et nouvelles équipes",
      icon: FaBuilding,
      color: "#8B5CF6",
      accent: "#C4B5FD",
    },
    {
      year: "2019",
      title: "Reconnaissance",
      description: "Prix d'excellence et certifications internationales",
      icon: FaAward,
      color: "#F59E0B",
      accent: "#FCD34D",
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Lancement de solutions durables et technologiques",
      icon: FaLeaf,
      color: "#14B8A6",
      accent: "#5EEAD4",
    },
  ];

  // Animation de l'année courante
  const activeYear = activeIndex !== null ? milestones[activeIndex].year : null;

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Fond minimaliste */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <div className="text-center mb-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 uppercase">
              Notre histoire
              <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
                {/* 4 étapes pour l'excellence */}
              </span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Un parcours marqué par des moments décisifs et des réalisations
              significatives
            </p>
          </div>
        </div>

        {/* Timeline Desktop - Style minimaliste */}
        <div className="hidden lg:block relative">
          {/* Ligne de temps verticale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2"></div>

          {/* Conteneur pour les éléments */}
          <div className="relative">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex items-center justify-between mb-32 last:mb-0 ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Côté gauche */}
                  <div
                    className={`w-5/12 ${
                      isEven ? "text-right pr-12" : "text-left pl-12"
                    }`}
                  >
                    <motion.div
                      animate={isActive ? { x: isEven ? -10 : 10 } : { x: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className={`inline-block ${
                          isEven ? "mr-auto" : "ml-auto"
                        }`}
                      >
                        <span className="text-6xl font-light text-gray-900 mb-2 block leading-none">
                          {milestone.year}
                        </span>
                        <h3 className="text-2xl font-medium text-gray-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Point central avec icône */}
                  <div className="relative flex-shrink-0 w-16 h-16">
                    {/* Cercle extérieur animé */}
                    <motion.div
                      animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                      transition={{ type: "spring" }}
                      className="absolute inset-0 rounded-full border-2 border-gray-300"
                      style={{
                        borderColor: isActive ? milestone.color : "#D1D5DB",
                      }}
                    />

                    {/* Cercle intérieur */}
                    <div className="absolute inset-0 m-3 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <Icon
                        className="w-6 h-6 transition-colors duration-300"
                        style={{
                          color: isActive ? milestone.color : "#6B7280",
                        }}
                      />
                    </div>

                    {/* Connecteur vers la ligne */}
                    <div
                      className={`absolute top-1/2 w-8 h-px ${
                        isEven ? "right-full" : "left-full"
                      } bg-gradient-to-r ${
                        isEven
                          ? "from-gray-300 to-transparent"
                          : "from-transparent to-gray-300"
                      }`}
                    ></div>
                  </div>

                  {/* Côté droit */}
                  <div className="w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Version Mobile - Style vertical */}
        <div className="lg:hidden">
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-300 to-transparent"></div>

            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-16 last:mb-0"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Point de timeline */}
                  <div className="absolute -left-12 flex items-center justify-center">
                    <motion.div
                      animate={isActive ? { scale: 1.3 } : { scale: 1 }}
                      className="relative w-6 h-6 rounded-full bg-white border-2"
                      style={{ borderColor: milestone.color }}
                    >
                      <div className="absolute inset-0 m-1 rounded-full bg-white flex items-center justify-center">
                        <Icon
                          className="w-3 h-3"
                          style={{ color: milestone.color }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Contenu */}
                  <motion.div
                    animate={isActive ? { x: 10 } : { x: 0 }}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-3xl font-light text-gray-900 block mb-1">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-medium text-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${milestone.accent}20` }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: milestone.color }}
                        />
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Indicateur de progression */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">
                          Étape {index + 1} / {milestones.length}
                        </span>
                        <div className="flex items-center gap-2">
                          {milestones.map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                i <= index ? "bg-gray-900" : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Année active en surbrillance */}
        {activeYear && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full shadow-lg">
              {activeYear}
            </div>
          </motion.div>
        )}

        {/* Navigation par années */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-3">
            {milestones.map((milestone, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById(`milestone-${index}`);
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  setActiveIndex(index);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? "text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                style={{
                  backgroundColor:
                    activeIndex === index ? milestone.color : "transparent",
                  border: `1px solid ${
                    activeIndex === index ? milestone.color : "#E5E7EB"
                  }`,
                }}
              >
                {milestone.year}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
=======
// components/AboutStory.js
import { FaHistory, FaRocket, FaAward, FaHandsHelping } from "react-icons/fa";

export default function AboutStory() {
  const timeline = [
    {
      year: "2009",
      title: "Les débuts",
      description: "Création de l'atelier avec une simple machine à coudre et une grande passion pour la couture.",
      icon: <FaHistory className="text-2xl" />,
      color: "bg-blue-100 text-blue-700"
    },
    {
      year: "2012",
      title: "Premiers contrats entreprises",
      description: "Première commande importante pour un restaurant Toamasinaien. Début de notre spécialisation professionnelle.",
      icon: <FaHandsHelping className="text-2xl" />,
      color: "bg-green-100 text-green-700"
    },
    {
      year: "2015",
      title: "Expansion de l'atelier",
      description: "Déménagement vers un atelier plus grand et recrutement de nos premiers artisans qualifiés.",
      icon: <FaRocket className="text-2xl" />,
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      year: "2019",
      title: "Reconnaissance professionnelle",
      description: "Obtention du label Entreprise du Patrimoine Vivant et première récompense nationale.",
      icon: <FaAward className="text-2xl" />,
      color: "bg-purple-100 text-purple-700"
    },
    {
      year: "2023",
      title: "Innovation & Excellence",
      description: "Lancement de notre gamme de tissus éco-responsables et développement de la personnalisation numérique.",
      icon: "🚀",
      color: "bg-red-100 text-red-700"
    }
  ];

  return (
    <section id="story" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Notre Parcours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De petits débuts à une référence dans la confection sur mesure, 
            découvrez l'histoire de notre engagement pour l'excellence.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
  {/* Ligne centrale */}
  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700"></div>
  
  <div className="space-y-12">
    {timeline.map((item, index) => (
      <div 
        key={index} 
        className={`flex flex-col lg:flex-row items-center ${
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}
      >
        {/* Point sur la timeline */}
        <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-blue-600 mb-4 lg:mb-0">
          <div className={`${item.color} p-3 rounded-full`}>
            {item.icon}
          </div>
        </div>
        
        {/* Contenu */}
        <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} px-4 lg:px-0`}>
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 text-white px-4 py-1 rounded-lg font-bold mr-4">
                {item.year}
              </div>
              <h3 className="text-xl font-bold text-blue-900 uppercase">{item.title}</h3>
            </div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        
       {/* Notre mission aujourd'hui */}
<div className="mt-16 md:mt-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-6 md:p-10 shadow-2xl">
  <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
    {/* Partie gauche - Mission */}
    <div className="w-full xl:w-1/2">
      <div className="mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-3">
          Notre Mission
        </h3>
        <h4 className="text-xl md:text-2xl xl:text-3xl text-yellow-300 font-bold mb-4">
          Aujourd'hui
        </h4>
        <p className="text-base md:text-lg opacity-90 mb-6 leading-relaxed">
          Continuer à innover tout en préservant les techniques artisanales qui font notre réputation. 
          Créer des vêtements qui allient esthétique, confort et durabilité, 
          en étant à l'écoute de chaque client, qu'il soit particulier ou professionnel.
        </p>
      </div>
      
      {/* Badge Vision */}
      <div className="bg-white/10 p-4 md:p-5 rounded-xl backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded-lg text-center w-full sm:w-auto">
            Vision 2025
          </div>
          <div className="text-sm md:text-base">
            Devenir la référence européenne de la confection sur mesure éco-responsable
          </div>
        </div>
      </div>
    </div>
    
    {/* Partie droite - Statistiques */}
    <div className="w-full xl:w-1/2">
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {[
          { value: "500+", label: "Tissus référencés" },
          { value: "12", label: "Artisans experts" },
          { value: "40+", label: "Secteurs d'activité" },
          { value: "100%", label: "Fabriqué à Madagascar" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="bg-white/10 p-4 md:p-5 rounded-xl backdrop-blur-sm text-center hover:bg-white/15 transition-colors duration-300"
          >
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
              {stat.value}
            </div>
            <div className="text-sm md:text-base lg:text-lg">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
