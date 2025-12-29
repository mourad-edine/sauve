'use client';
import { 
  FaHotel, 
  FaUserMd, 
  FaShoppingBag,
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaUserTie
} from "react-icons/fa";
import { FaShieldHalved, FaPlane, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ServicesForBusiness() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredAdvantage, setHoveredAdvantage] = useState(null);

  const businessServices = [
    {
      icon: <FaHotel className="w-6 h-6" />,
      title: "Hôtellerie & Restauration",
      items: ["Uniforme de réception", "Tenue de serveur/serveuse", "Chefs de cuisine", "Vestes de barman"],
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "HR"
    },
    {
      icon: <FaUserMd className="w-6 h-6" />,
      title: "Médical & Paramédical",
      items: ["Blouses médicales", "Tenues de chirurgie", "Vêtements de laboratoire", "Uniforme infirmier"],
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "MP"
    },
    {
      icon: <FaShieldHalved className="w-6 h-6" />,
      title: "Sécurité & Services",
      items: ["Tenues d'agents de sécurité", "Uniforme de conciergerie", "Vêtements de maintenance", "Tenues de chauffeur"],
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "SS"
    },
    {
      icon: <FaShoppingBag className="w-6 h-6" />,
      title: "Commerce & Retail",
      items: ["Tenues de vendeurs", "Uniforme de caissier", "Vestes managériales", "Polo personnalisé"],
      color: "#F59E0B",
      accent: "#FCD34D",
      initials: "CR"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Éducation & Formation",
      items: ["Blouses d'étudiants", "Tenues de formateurs", "Vêtements techniques", "Uniforme scolaire/professionnel"],
      color: "#EC4899",
      accent: "#F9A8D4",
      initials: "EF"
    },
    {
      icon: <FaPlane className="w-6 h-6" />,
      title: "Transport & Logistique",
      items: ["Uniforme d'équipage", "Tenues de pilote/hôtesse", "Vêtements de personnel au sol", "Tenues de logistique"],
      color: "#14B8A6",
      accent: "#5EEAD4",
      initials: "TL"
    }
  ];

  const advantages = [
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Image professionnelle",
      description: "Renforcez votre image de marque avec des tenues harmonisées et de qualité",
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "IP"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Cohésion d'équipe",
      description: "Favorisez l'appartenance à l'entreprise et l'esprit d'équipe",
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "CE"
    },
    {
      icon: <FaUserTie className="w-6 h-6" />,
      title: "Confort professionnel",
      description: "Vêtements adaptés aux contraintes spécifiques de chaque métier",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "CP"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 uppercase">
Entreprises              <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
                {/* 4 étapes pour l'excellence */}
              </span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Des vêtements professionnels qui renforcent votre image de marque
            </p>
          </div>
        </motion.div>

        {/* Grille des services */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
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
                        animate={hoveredService === index ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed opacity-50"
                        style={{ borderColor: service.color }}
                      />
                      
                      {/* Avatar principal */}
                      <div 
                        className="absolute inset-2 rounded-full flex items-center justify-center text-white text-2xl font-light"
                        style={{ backgroundColor: service.color }}
                      >
                        <div className="absolute  w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
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
                  </div>

                  {/* Items sous forme de tags minimalistes */}
                  <div className="mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-200 bg-gray-50"
                          style={{
                            borderColor: hoveredService === index ? service.accent : '#E5E7EB',
                            backgroundColor: hoveredService === index ? `${service.color}10` : '#F9FAFB'
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
                      Explorer ce secteur
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

        {/* Section des avantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gray-300"></div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Avantages Clés</span>
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Pourquoi choisir <span className="font-medium">nos services</span>
            </h3>
          </div>

          {/* Grille des avantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredAdvantage(index)}
                onMouseLeave={() => setHoveredAdvantage(null)}
              >
                {/* Carte avantage */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300 h-full">
                  {/* Avatar avec effet de profondeur */}
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto">
                      {/* Cercle de fond animé */}
                      <motion.div
                        animate={hoveredAdvantage === index ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed opacity-50"
                        style={{ borderColor: advantage.color }}
                      />
                      
                      {/* Avatar principal */}
                      <div 
                        className="absolute inset-1.5 rounded-full flex items-center justify-center text-white text-xl font-light"
                        style={{ backgroundColor: advantage.color }}
                      >
                        <div className="absolute w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        <div style={{ color: advantage.color }}>
                          {advantage.icon}
                        </div>
                      </div>
                      </div>
                      
                      {/* Badge d'icône */}
                      {/* <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        <div style={{ color: advantage.color }}>
                          {advantage.icon}
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Indicateur de valeur */}
                  <div className="pt-6 border-t border-gray-100 flex justify-center">
                    <div className="text-xs text-gray-500 font-medium">
                      Valeur ajoutée
                    </div>
                  </div>
                </div>

                {/* Indicateur de survol subtil */}
                {hoveredAdvantage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -inset-1 rounded-lg border-2 pointer-events-none"
                    style={{ borderColor: advantage.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-blue-300"></div>
                <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">Accompagnement</span>
                <div className="w-6 h-px bg-blue-300"></div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous accompagnons chaque entreprise dans la définition de son identité vestimentaire professionnelle.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
            >
              Demander un devis personnalisé
              <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}