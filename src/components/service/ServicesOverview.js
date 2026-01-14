<<<<<<< HEAD
"use client";
import {
  FaShirt,
  FaUserTie,
  FaUser,
  FaRulerVertical,
  FaComments,
  FaTruck,
  FaMagic,
  FaArrowRight,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ServicesOverview() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: <FaUserTie className="w-6 h-6" />,
      title: "Pour les Entreprises",
      description:
        "Uniformes professionnels, tenues de travail, vêtements personnalisés pour renforcer l'image de votre marque.",
      items: [
        "Création d'identité vestimentaire",
        "Logos brodés ou imprimés",
        "Grosses et petites quantités",
      ],
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "E",
    },
    {
      icon: <FaRulerVertical className="w-6 h-6" />,
      title: "Sur Mesure",
      description:
        "Prise de mesures précises pour un ajustement parfait, quel que soit votre morphologie.",
      items: [
        "Prise de mesures en atelier ou sur site",
        "Ajustements personnalisés",
        "Toile d'essai pour validation",
      ],
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "M",
    },
    {
      icon: <FaShirt className="w-6 h-6" />,
      title: "Pour les Particuliers",
      description:
        "Création de vêtements uniques qui expriment votre personnalité et s'adaptent à votre style de vie.",
      items: [
        "Vêtements de cérémonie",
        "Tenues professionnelles élégantes",
        "Créations uniques selon vos souhaits",
      ],
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "P",
    },
  ];

  const processSteps = [
    { text: "Consultation gratuite", icon: <FaComments className="w-5 h-5" /> },
    { text: "Prise de mesures", icon: <FaRulerVertical className="w-5 h-5" /> },
    { text: "Livraison incluse", icon: <FaTruck className="w-5 h-5" /> },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs légers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Formes décoratives subtiles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-gray-100 opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full border border-gray-100 opacity-50"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-4 uppercase">
              Nos secteurs 
              <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
                d'activité
              </span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            
          </div>
        </motion.div>

        {/* Grille des services */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Carte principale */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300 h-full">
                  {/* Avatar avec effet de profondeur */}
                  <div className="relative mb-6">
                    <div className="relative w-20 h-20 mx-auto">
                      {/* Cercle de fond animé */}
                      <motion.div
                        animate={
                          hoveredService === index
                            ? { rotate: 360 }
                            : { rotate: 0 }
                        }
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border border-dashed opacity-50"
                        style={{ borderColor: service.color }}
                      />

                      {/* Avatar principal */}
                      <div
                        className="absolute inset-2 rounded-full flex items-center justify-center text-white text-2xl font-light"
                        style={{ backgroundColor: service.color }}
                      >
                        <div className="absolute     w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                          <div style={{ color: service.color }}>
                            {service.icon}
                          </div>
                        </div>
                      </div>

                      {/* Badge d'icône */}
                      {/* <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        <div style={{ color: service.color }}>
                          {service.icon}
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <div className="text-gray-500 mb-4">
                      <FaArrowRight className="w-4 h-4 mx-auto transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Items sous forme de tags minimalistes */}
                  <div className="mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-200 bg-gray-50"
                          style={{
                            borderColor:
                              hoveredService === index
                                ? service.accent
                                : "#E5E7EB",
                            backgroundColor:
                              hoveredService === index
                                ? `${service.color}10`
                                : "#F9FAFB",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Indicateur de survol */}
                  <div className="pt-6 border-t border-gray-100 flex justify-center">
                    <div
                      className="inline-flex items-center text-sm font-medium cursor-pointer group/link"
                      style={{ color: service.color }}
                    >
                      Découvrir ce service
                      <FaArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Indicateur de survol subtil */}
                {hoveredService === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -inset-1 rounded-lg border-2 pointer-events-none"
                    style={{ borderColor: service.color }}
                  />
                )}
              </motion.div>
            ))}
=======
// components/ServicesOverview.js - Version identique, mais responsive à 1024px (lg)
import {
  FaBuilding,
  FaUser,
  FaRulerCombined,
  FaClipboardCheck,
} from "react-icons/fa6";

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-2xl font-bold text-blue-900 mb-4 uppercase">
            Nos Services de Confection
          </h1>
          {/* <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            De la conception à la livraison, nous accompagnons entreprises et
            particuliers dans la création de vêtements sur mesure qui allient
            qualité, confort et élégance.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {[
            {
              icon: <FaBuilding />,
              title: "Pour les Entreprises",
              description: "Uniformes professionnels, tenues de travail, vêtements personnalisés pour renforcer l'image de votre marque.",
              items: ["Création d'identité vestimentaire", "Logos brodés ou imprimés", "Grosses et petites quantités"],
              color: "blue"
            },
            {
              icon: <FaRulerCombined />,
              title: "Sur Mesure",
              description: "Prise de mesures précises pour un ajustement parfait, quel que soit votre morphologie.",
              items: ["Prise de mesures en atelier ou sur site", "Ajustements personnalisés", "Toile d'essai pour validation"],
              color: "blue"
            },
            {
              icon: <FaUser />,
              title: "Pour les Particuliers",
              description: "Création de vêtements uniques qui expriment votre personnalité et s'adaptent à votre style de vie.",
              items: ["Vêtements de cérémonie", "Tenues professionnelles élégantes", "Créations uniques selon vos souhaits"],
              color: "blue"
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-6 lg:p-7 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200"
            >
              <div className="flex items-start mb-6">
                <div className={`p-3 rounded-lg bg-${service.color}-50 group-hover:bg-${service.color}-100 transition-colors duration-300`}>
                  <div className={`text-2xl lg:text-3xl text-${service.color}-600`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl lg:text-xl font-bold text-blue-900 ml-4 pt-1 uppercase">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3`}></div>
                    </div>
                    <span className="text-gray-700 text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className={`text-${service.color}-600 font-medium text-sm lg:text-base inline-flex items-center`}>
                  En savoir plus
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl p-6 lg:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10">
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
                Un processus complet de A à Z
              </h2>
              <p className="text-base lg:text-xl mb-6 lg:mb-8 opacity-90 leading-relaxed">
                De la première consultation à la livraison finale, nous gérons
                chaque étape avec précision et professionnalisme.
              </p>

              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4">
                <div className="flex items-center">
                  <FaClipboardCheck className="text-yellow-300 mr-3 text-lg" />
                  <span className="text-base lg:text-lg">
                    Consultation gratuite
                  </span>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="text-yellow-300 mr-3 text-lg" />
                  <span className="text-base lg:text-lg">Prise de mesures</span>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="text-yellow-300 mr-3 text-lg" />
                  <span className="text-base lg:text-lg">
                    Livraison incluse
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white/20 p-6 lg:p-8 rounded-xl backdrop-blur-sm text-center max-w-xs mx-auto lg:mx-0">
                <div className="text-3xl lg:text-5xl font-bold mb-2">
                  15+
                </div>
                <div className="text-lg lg:text-xl">années d'expérience</div>
              </div>
            </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
