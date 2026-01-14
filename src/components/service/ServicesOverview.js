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
          </div>
        </div>
      </div>
    </section>
  );
}
