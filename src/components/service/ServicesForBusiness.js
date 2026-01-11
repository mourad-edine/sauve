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

// Import des images (ajustez les chemins selon votre structure)
const serviceImages = {
  hotel: "/images/services/hotel.jpg",
  medical: "/images/services/medical.jpg",
  security: "/images/services/security.jpg",
  retail: "/images/services/retail.jpg",
  education: "/images/services/education.jpg",
  transport: "/images/services/transport.jpg",
  engineer: "/images/services/engineer.jpg" // Photo d'ingénieur
};

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
      initials: "HR",
      image: serviceImages.hotel,
      overlayColor: "rgba(59, 130, 246, 0.85)"
    },
    {
      icon: <FaUserMd className="w-6 h-6" />,
      title: "Médical & Paramédical",
      items: ["Blouses médicales", "Tenues de chirurgie", "Vêtements de laboratoire", "Uniforme infirmier"],
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "MP",
      image: serviceImages.medical,
      overlayColor: "rgba(16, 185, 129, 0.85)"
    },
    {
      icon: <FaShieldHalved className="w-6 h-6" />,
      title: "Sécurité & Services",
      items: ["Tenues d'agents de sécurité", "Uniforme de conciergerie", "Vêtements de maintenance", "Tenues de chauffeur"],
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "SS",
      image: serviceImages.security,
      overlayColor: "rgba(139, 92, 246, 0.85)"
    },
    {
      icon: <FaShoppingBag className="w-6 h-6" />,
      title: "Commerce & Retail",
      items: ["Tenues de vendeurs", "Uniforme de caissier", "Vestes managériales", "Polo personnalisé"],
      color: "#F59E0B",
      accent: "#FCD34D",
      initials: "CR",
      image: serviceImages.retail,
      overlayColor: "rgba(245, 158, 11, 0.85)"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Éducation & Formation",
      items: ["Blouses d'étudiants", "Tenues de formateurs", "Vêtements techniques", "Uniforme scolaire/professionnel"],
      color: "#EC4899",
      accent: "#F9A8D4",
      initials: "EF",
      image: serviceImages.education,
      overlayColor: "rgba(236, 72, 153, 0.85)"
    },
    {
      icon: <FaPlane className="w-6 h-6" />,
      title: "Transport & Logistique",
      items: ["Uniforme d'équipage", "Tenues de pilote/hôtesse", "Vêtements de personnel au sol", "Tenues de logistique"],
      color: "#14B8A6",
      accent: "#5EEAD4",
      initials: "TL",
      image: serviceImages.transport,
      overlayColor: "rgba(20, 184, 166, 0.85)"
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
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background avec photo d'ingénieur subtile */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${serviceImages.engineer})`,
            filter: 'grayscale(100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-transparent to-white/80" />
      </div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10"></div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 uppercase">
              Entreprises
              <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
                Solutions professionnelles sur mesure
              </span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Des vêtements professionnels qui renforcent votre image de marque et améliorent le confort de vos équipes
            </p>
          </div>
        </motion.div>

        {/* Grille des services */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {/* Carte avec photo en fond */}
                <div className="relative h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image de fond */}
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    {/* Overlay coloré */}
                    <div 
                      className="absolute inset-0 transition-all duration-500 group-hover:opacity-90"
                      style={{ backgroundColor: service.overlayColor }}
                    />
                    {/* Gradient supplémentaire */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Contenu */}
                  <div className="relative h-full flex flex-col p-6 min-h-[400px]">
                    {/* En-tête avec icône */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        {/* Cercle de fond animé */}
                        <motion.div
                          animate={hoveredService === index ? { rotate: 360 } : { rotate: 0 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-2 rounded-full border border-dashed opacity-50"
                          style={{ borderColor: service.color }}
                        />
                        
                        {/* Icône principale */}
                        <div className="relative">
                          <div 
                            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
                            style={{ backgroundColor: service.color }}
                          >
                            {service.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Badge initiales */}
                      <span 
                        className="text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm"
                        style={{ backgroundColor: service.color }}
                      >
                        {service.initials}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>

                    {/* Items */}
                    <div className="flex-1 mb-6">
                      <div className="space-y-2">
                        {service.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-white/90"
                          >
                            <div 
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: service.accent }}
                            />
                            <span className="text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bouton d'action */}
                    <div className="pt-4 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/80">
                          {service.items.length} services disponibles
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-white font-medium cursor-pointer group/action"
                        >
                          <span>Explorer</span>
                          <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/action:translate-x-1" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Effet de survol */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section des avantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          {/* Background pour la section avantages */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-emerald-50/30 rounded-3xl -m-8" />
          
          <div className="text-center mb-12 relative">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
                <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">
                  Avantages Clés
                </span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir ?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les bénéfices concrets de notre expertise en uniformes professionnels
            </p>
          </div>

          {/* Grille des avantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
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
                {/* Carte avantage avec effet de profondeur */}
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                  {/* Effet de fond */}
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: advantage.color }}
                  />
                  
                  {/* Avatar */}
                  <div className="relative mb-8">
                    <motion.div
                      animate={hoveredAdvantage === index ? { scale: 1.1 } : { scale: 1 }}
                      className="relative w-20 h-20 mx-auto"
                    >
                      {/* Cercle de fond */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ backgroundColor: advantage.color }}
                      />
                      
                      {/* Icône */}
                      <div 
                        className="absolute inset-4 rounded-full flex items-center justify-center text-white shadow-lg"
                        style={{ backgroundColor: advantage.color }}
                      >
                        {advantage.icon}
                      </div>
                      
                      {/* Effet d'ondulation */}
                      <motion.div
                        animate={hoveredAdvantage === index ? 
                          { scale: 1.5, opacity: 0 } : 
                          { scale: 1, opacity: 0 }
                        }
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: advantage.color }}
                      />
                    </motion.div>
                  </div>

                  {/* Contenu */}
                  <div className="text-center relative">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {advantage.description}
                    </p>
                    
                    {/* Indicateur */}
                    <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gray-100">
                      <div 
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: advantage.color }}
                      />
                      <span className="text-gray-700">Valeur ajoutée</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background avec photo d'ingénieur */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${serviceImages.engineer})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-emerald-900/90" />
            </div>
            
            <div className="relative p-12 text-center">
              <div className="inline-block mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-blue-300"></div>
                  <span className="text-sm font-medium text-blue-200 uppercase tracking-widest">
                    Accompagnement Expert
                  </span>
                  <div className="w-8 h-px bg-blue-300"></div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">
                Prêt à transformer l'image de votre entreprise ?
              </h3>
              
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Notre équipe d'experts vous accompagne dans la création d'une identité vestimentaire 
                qui reflète vos valeurs et optimise le confort de vos équipes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-900 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <span>Demander un devis personnalisé</span>
                  <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <span>Voir nos réalisations</span>
                </motion.button>
              </div>
              
              <p className="text-blue-200/70 text-sm mt-8">
                Réponse sous 24h • Étude gratuite • Solutions sur mesure
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}