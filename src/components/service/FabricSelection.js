<<<<<<< HEAD
'use client'
=======
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
import { 
  FaThermometerHalf, 
  FaLeaf, 
  FaFire, 
  FaTint,
<<<<<<< HEAD
  FaStar,
  FaExchangeAlt,
  FaArrowRight
} from "react-icons/fa";
import { motion } from "framer-motion";
=======
  FaTree,
  FaShieldAlt,
  FaStar,
  FaExchangeAlt
} from "react-icons/fa";
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299

export default function FabricSelection() {
  const fabricTypes = [
    {
      name: "Coton",
      description: "Confortable, respirant et facile d'entretien",
      uses: ["Chemises", "Polos", "Blouses", "Robes"],
<<<<<<< HEAD
      icon: <FaLeaf className="w-6 h-6" />,
      color: "#3B82F6",
      accent: "#93C5FD"
=======
      icon: <FaLeaf className="text-blue-500" />
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    },
    {
      name: "Laine",
      description: "Chaude, élégante et naturelle",
      uses: ["Costumes", "Manteaux", "Pulls", "Jupes"],
<<<<<<< HEAD
      icon: <FaThermometerHalf className="w-6 h-6" />,
      color: "#10B981",
      accent: "#6EE7B7"
=======
      icon: <FaThermometerHalf className="text-blue-500" />
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    },
    {
      name: "Lin",
      description: "Léger, absorbant et idéal pour l'été",
      uses: ["Chemises d'été", "Robes", "Pantalons", "Vestes"],
<<<<<<< HEAD
      icon: <FaTint className="w-6 h-6" />,
      color: "#8B5CF6",
      accent: "#C4B5FD"
=======
      icon: <FaTint className="text-blue-500" />
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    },
    {
      name: "Polyester technique",
      description: "Résistant, infroissable et performant",
      uses: ["Vêtements de travail", "Tenues sport", "Uniforme", "Vêtements techniques"],
<<<<<<< HEAD
      icon: <FaFire className="w-6 h-6" />,
      color: "#F59E0B",
      accent: "#FCD34D"
=======
      icon: <FaFire className="text-blue-500" />
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    },
    {
      name: "Soie",
      description: "Luxueux, léger et brillant",
      uses: ["Chemisiers", "Cravates", "Accessoires", "Tenues de soirée"],
<<<<<<< HEAD
      icon: <FaStar className="w-6 h-6" />,
      color: "#EC4899",
      accent: "#F9A8D4"
=======
      icon: <FaStar className="text-blue-500" />
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    },
    {
      name: "Mélanges",
      description: "Alliage des meilleures propriétés",
      uses: ["Costumes", "Pantalons", "Vestes", "Tenues professionnelles"],
<<<<<<< HEAD
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
=======
      icon: <FaExchangeAlt className="text-blue-500" />
    }
  ];
  const fabricProperties = [
    {
      icon: <FaThermometerHalf className="text-2xl" />,
      title: "Régulation thermique",
      description: "Tissus adaptés à chaque saison et environnement"
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      title: "Éco-responsables",
      description: "Gamme de tissus durables et certifiés"
    },
    {
      icon: <FaFire className="text-2xl" />,
      title: "Résistance",
      description: "Tissus techniques pour usages intensifs"
    },
    {
      icon: <FaTint className="text-2xl" />,
      title: "Entretien facile",
      description: "Choix selon vos contraintes d'entretien"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Sélection de Tissus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez parmi notre vaste gamme de tissus de qualité, adaptés à chaque usage et préférence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fabricTypes.map((fabric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{fabric.icon}</div>
                <h3 className="text-xl font-bold text-blue-900">{fabric.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{fabric.description}</p>
              <div className="mb-4">
                <h4 className="font-bold text-blue-800 mb-2">Idéal pour :</h4>
                <div className="flex flex-wrap gap-2">
                  {fabric.uses.map((use, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            Propriétés des tissus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricProperties.map((property, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl">
                <div className="text-yellow-300 mb-4">
                  {property.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{property.title}</h4>
                <p className="text-blue-200 text-sm">{property.description}</p>
              </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
            ))}
          </div>
        </div>

<<<<<<< HEAD
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

      
=======
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Échantillons de tissus
              </h3>
              <p className="text-gray-600 mb-6">
                Nous mettons à votre disposition des échantillons de tissus pour vous aider à faire le bon choix. 
                Contactez-nous pour recevoir notre gamme d'échantillons ou pour prendre rendez-vous en atelier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Demander des échantillons
                </button>
                <button className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition duration-300">
                  Voir le catalogue complet
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-lg">Tissus disponibles</div>
                  <div className="text-blue-200 text-sm mt-2">
                    Couleurs et textures variées
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
      </div>
    </section>
  );
}