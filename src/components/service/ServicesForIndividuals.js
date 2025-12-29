
'use client';
import { FaHeart, FaRing, FaBriefcase, FaTshirt, FaFemale, FaMale, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesForIndividuals() {
  const individualServices = [
    {
      icon: <FaRing className="w-6 h-6" />,
      title: "Tenues de cérémonie",
      description: "Robes de mariée, costumes sur mesure, tenues de soirée élégantes",
      features: ["Essayages multiples", "Tissus luxueux", "Broderies personnalisées"],
      color: "#EC4899",
      accent: "#F9A8D4"
    },
    {
      icon: <FaBriefcase className="w-6 h-6" />,
      title: "Vêtements professionnels",
      description: "Costumes sur mesure, tailleurs, chemises pour une élégance au travail",
      features: ["Coupe parfaite", "Tissus professionnels", "Finitions impeccables"],
      color: "#3B82F6",
      accent: "#93C5FD"
    },
    {
      icon: <FaTshirt className="w-6 h-6" />,
      title: "Vêtements du quotidien",
      description: "Créations uniques pour votre garde-robe personnelle",
      features: ["Style personnalisé", "Confort optimal", "Durabilité garantie"],
      color: "#10B981",
      accent: "#6EE7B7"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Créations spéciales",
      description: "Vêtements pour occasions spéciales ou besoins particuliers",
      features: ["Design sur mesure", "Adaptation morphologique", "Consultation styliste"],
      color: "#8B5CF6",
      accent: "#C4B5FD"
    }
  ];

  const benefits = [
    {
      icon: <FaFemale className="w-6 h-6" />,
      title: "Pour elle",
      items: ["Robes sur mesure", "Tailleurs élégants", "Manteaux", "Jupes et pantalons"],
      color: "#EC4899"
    },
    {
      icon: <FaMale className="w-6 h-6" />,
      title: "Pour lui",
      items: ["Costumes sur mesure", "Chemises personnalisées", "Vestes", "Pantalons ajustés"],
      color: "#3B82F6"
    }
  ];

  const processSteps = [
    { number: "1", title: "Consultation", description: "Échange sur vos besoins et inspirations" },
    { number: "2", title: "Choix & Mesures", description: "Sélection des tissus et prise de mesures précises" },
    { number: "3", title: "Confection", description: "Fabrication artisanale avec suivis réguliers" },
    { number: "4", title: "Essayage final", description: "Ajustements finaux pour une perfection absolue" }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs légers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Formes décoratives subtiles */}
      <div className="absolute top-1/4 right-12 w-24 h-24 rounded-full border border-pink-100 opacity-50"></div>
      <div className="absolute bottom-1/4 left-12 w-32 h-32 rounded-full border border-blue-100 opacity-50"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gray-300"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Particuliers</span>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            L'élégance <span className="font-semibold">sur mesure</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Exprimez votre style unique avec des vêtements créés spécialement pour vous, selon vos mesures et vos préférences.
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {individualServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                  {/* En-tête avec icône */}
                  <div className="flex items-start mb-6">
                    <div 
                      className="p-4 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ 
                        backgroundColor: `${service.color}10`,
                        border: `1px solid ${service.accent}30`
                      }}
                    >
                      <div style={{ color: service.color }}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 ml-4 pt-2">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Liste des caractéristiques */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-2">
                          <div 
                            className="w-1.5 h-1.5 rounded-full mr-4"
                            style={{ backgroundColor: service.color }}
                          ></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Lien d'action */}
                  <div className="pt-6 border-t border-gray-100">
                    <div 
                      className="inline-flex items-center text-sm font-medium cursor-pointer group/link"
                      style={{ color: service.color }}
                    >
                      Explorer ce service
                      <FaArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Pour Elle / Pour Lui */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="h-full rounded-xl p-8 border transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: `${benefit.color}05`,
                    borderColor: `${benefit.color}20`
                  }}
                >
                  {/* En-tête */}
                  <div className="flex items-center mb-8">
                    <div 
                      className="p-4 rounded-xl mr-4 transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${benefit.color}15`,
                        border: `1px solid ${benefit.color}30`
                      }}
                    >
                      <div style={{ color: benefit.color }}>
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  {/* Liste des items */}
                  <ul className="space-y-4">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div 
                          className="w-2 h-2 rounded-full mr-4"
                          style={{ backgroundColor: benefit.color }}
                        ></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Indicateur visuel */}
                  <div className="mt-8 pt-6 border-t border-gray-200/50">
                    <div className="text-sm text-gray-600">
                      Adapté à chaque morphologie
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section du processus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-gray-300"></div>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Notre Processus</span>
                  <div className="w-6 h-px bg-gray-300"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Un parcours <span className="font-medium">personnalisé</span>
              </h3>
            </div>

            {/* Étapes du processus */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group/step"
                >
                  <div className="relative">
                    {/* Cercle numéroté */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center group-hover/step:border-blue-500 transition-colors duration-300">
                        <span className="text-lg font-medium text-gray-700 group-hover/step:text-blue-600 transition-colors">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="bg-white rounded-lg border border-gray-200 pt-12 pb-6 px-6 text-center hover:border-gray-300 transition-all duration-300">
                      <h4 className="text-lg font-medium text-gray-900 mb-3">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                      
                      {/* Connecteur (sauf pour la dernière étape) */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 w-8 h-px bg-gray-200"></div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA final */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-6">
                Prêt à créer votre tenue sur mesure ?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Prendre rendez-vous
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}