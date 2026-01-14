'use client'
import { 
  FaThermometerHalf, 
  FaLeaf, 
  FaFire, 
  FaTint,
  FaStar,
  FaExchangeAlt,
  FaArrowRight
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function FabricSelection() {
  const fabricTypes = [
    {
      name: "Coton",
      description: "Confortable, respirant et facile d'entretien",
      uses: ["Chemises", "Polos", "Blouses", "Robes"],
      icon: <FaLeaf className="w-6 h-6" />,
      color: "#3B82F6",
      accent: "#93C5FD"
    },
    {
      name: "Laine",
      description: "Chaude, élégante et naturelle",
      uses: ["Costumes", "Manteaux", "Pulls", "Jupes"],
      icon: <FaThermometerHalf className="w-6 h-6" />,
      color: "#10B981",
      accent: "#6EE7B7"
    },
    {
      name: "Lin",
      description: "Léger, absorbant et idéal pour l'été",
      uses: ["Chemises d'été", "Robes", "Pantalons", "Vestes"],
      icon: <FaTint className="w-6 h-6" />,
      color: "#8B5CF6",
      accent: "#C4B5FD"
    },
    {
      name: "Polyester technique",
      description: "Résistant, infroissable et performant",
      uses: ["Vêtements de travail", "Tenues sport", "Uniforme", "Vêtements techniques"],
      icon: <FaFire className="w-6 h-6" />,
      color: "#F59E0B",
      accent: "#FCD34D"
    },
    {
      name: "Soie",
      description: "Luxueux, léger et brillant",
      uses: ["Chemisiers", "Cravates", "Accessoires", "Tenues de soirée"],
      icon: <FaStar className="w-6 h-6" />,
      color: "#EC4899",
      accent: "#F9A8D4"
    },
    {
      name: "Mélanges",
      description: "Alliage des meilleures propriétés",
      uses: ["Costumes", "Pantalons", "Vestes", "Tenues professionnelles"],
      icon: <FaExchangeAlt className="w-6 h-6" />,
      color: "#14B8A6",
      accent: "#5EEAD4"
    }
  ];

  const fabricProperties = [
    {
      icon: <FaThermometerHalf className="w-6 h-6" />,
      title: "Régulation thermique",
      description: "Tissus adaptés à chaque saison et environnement",
      color: "#3B82F6"
    },
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Éco-responsables",
      description: "Gamme de tissus durables et certifiés",
      color: "#10B981"
    },
    {
      icon: <FaFire className="w-6 h-6" />,
      title: "Résistance",
      description: "Tissus techniques pour usages intensifs",
      color: "#F59E0B"
    },
    {
      icon: <FaTint className="w-6 h-6" />,
      title: "Entretien facile",
      description: "Choix selon vos contraintes d'entretien",
      color: "#8B5CF6"
    }
  ];

  const sampleFabric = {
    title: "Échantillons disponibles",
    description: "Demandez notre nuancier pour voir et toucher nos tissus",
    action: "Demander des échantillons"
  };

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs légers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Formes décoratives textiles */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-gray-100 opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border border-gray-100 opacity-30"></div>

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
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Nos Tissus</span>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            La matière <span className="font-semibold">première</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Choisissez parmi notre vaste gamme de tissus de qualité, adaptés à chaque usage et préférence.
          </p>
        </motion.div>

        {/* Grille des types de tissus */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricTypes.map((fabric, index) => (
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
                  <div className="flex items-center mb-6">
                    <div 
                      className="p-4 rounded-xl mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ 
                        backgroundColor: `${fabric.color}10`,
                        border: `1px solid ${fabric.accent}30`
                      }}
                    >
                      <div style={{ color: fabric.color }}>
                        {fabric.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">
                      {fabric.name}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {fabric.description}
                  </p>
                  
                  {/* Utilisations sous forme de tags */}
                  <div className="mb-8">
                    <div className="text-sm font-medium text-gray-700 mb-3">
                      Idéal pour :
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {fabric.uses.map((use, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full border transition-colors duration-300"
                          style={{
                            backgroundColor: `${fabric.color}10`,
                            borderColor: `${fabric.color}30`,
                            color: fabric.color
                          }}
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Indicateur d'action */}
                  <div className="pt-6 border-t border-gray-100">
                    <div 
                      className="inline-flex items-center text-sm font-medium cursor-pointer group/link"
                      style={{ color: fabric.color }}
                    >
                      Voir les échantillons
                      <FaArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section des propriétés */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-gray-300"></div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Propriétés</span>
                <div className="w-6 h-px bg-gray-300"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Qualités <span className="font-medium">essentielles</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricProperties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group/property"
              >
                <div 
                  className="h-full rounded-xl p-6 border transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: `${property.color}05`,
                    borderColor: `${property.color}20`
                  }}
                >
                  {/* Icône */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover/property:scale-110"
                    style={{ 
                      backgroundColor: `${property.color}15`,
                      border: `1px solid ${property.color}30`
                    }}
                  >
                    <div style={{ color: property.color }}>
                      {property.icon}
                    </div>
                  </div>

                  {/* Contenu */}
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    {property.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {property.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
      </div>
    </section>
  );
}