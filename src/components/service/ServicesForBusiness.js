'use client';
import { 
  FaHotel, 
  FaUserMd, 
  FaShoppingBag,
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaUserTie,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { FaShieldHalved, FaPlane } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

// Import des images (ajustez les chemins selon votre structure)
const serviceImages = {
  hotel: "/images/services/hotel.jpg",
  medical: "/images/services/medical.jpg",
  security: "/images/services/security.jpg",
  retail: "/images/services/retail.jpg",
  education: "/images/services/education.jpg",
  transport: "/images/services/transport.jpg",
  engineer: "/images/services/engineer.jpg"
};

export default function ServicesForBusiness() {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const businessServices = [
    {
      icon: <FaHotel className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Hôtellerie & Restauration",
      items: ["Uniforme de réception", "Tenue de serveur/serveuse", "Chefs de cuisine", "Vestes de barman"],
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "HR",
      image: serviceImages.hotel,
      overlayColor: "rgba(59, 130, 246, 0.85)"
    },
    {
      icon: <FaUserMd className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Médical & Paramédical",
      items: ["Blouses médicales", "Tenues de chirurgie", "Vêtements de laboratoire", "Uniforme infirmier"],
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "MP",
      image: serviceImages.medical,
      overlayColor: "rgba(16, 185, 129, 0.85)"
    },
    {
      icon: <FaShieldHalved className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Sécurité & Services",
      items: ["Tenues d'agents de sécurité", "Uniforme de conciergerie", "Vêtements de maintenance", "Tenues de chauffeur"],
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "SS",
      image: serviceImages.security,
      overlayColor: "rgba(139, 92, 246, 0.85)"
    },
    {
      icon: <FaShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Commerce & Retail",
      items: ["Tenues de vendeurs", "Uniforme de caissier", "Vestes managériales", "Polo personnalisé"],
      color: "#F59E0B",
      accent: "#FCD34D",
      initials: "CR",
      image: serviceImages.retail,
      overlayColor: "rgba(245, 158, 11, 0.85)"
    },
    {
      icon: <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Éducation & Formation",
      items: ["Blouses d'étudiants", "Tenues de formateurs", "Vêtements techniques", "Uniforme scolaire/professionnel"],
      color: "#EC4899",
      accent: "#F9A8D4",
      initials: "EF",
      image: serviceImages.education,
      overlayColor: "rgba(236, 72, 153, 0.85)"
    },
    {
      icon: <FaPlane className="w-5 h-5 sm:w-6 sm:h-6" />,
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
      icon: <FaChartLine className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Image professionnelle",
      description: "Renforcez votre image de marque avec des tenues harmonisées et de qualité",
      detailed: "Nos uniformes professionnels sont conçus pour refléter l'identité de votre entreprise et créer une impression positive auprès de vos clients.",
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "IP"
    },
    {
      icon: <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Cohésion d'équipe",
      description: "Favorisez l'appartenance à l'entreprise et l'esprit d'équipe",
      detailed: "Les uniformes créent un sentiment d'unité et renforcent l'identité collective de vos équipes, améliorant la collaboration.",
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "CE"
    },
    {
      icon: <FaUserTie className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Confort professionnel",
      description: "Vêtements adaptés aux contraintes spécifiques de chaque métier",
      detailed: "Nous utilisons des tissus techniques qui offrent confort, respirabilité et durabilité, adaptés aux exigences de chaque poste.",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "CP"
    }
  ];

  const nextAdvantage = useCallback(() => {
    setActiveAdvantage((prev) => (prev === advantages.length - 1 ? 0 : prev + 1));
  }, [advantages.length]);

  const prevAdvantage = useCallback(() => {
    setActiveAdvantage((prev) => (prev === 0 ? advantages.length - 1 : prev - 1));
  }, [advantages.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextAdvantage, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, nextAdvantage]);

  const currentAdvantage = advantages[activeAdvantage];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-6 sm:w-8 h-px bg-blue-400"></div>
                <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">Entreprises</span>
                <div className="w-6 sm:w-8 h-px bg-blue-400"></div>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 px-4">
              Solutions professionnelles <span className="font-semibold">sur mesure</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
              Des vêtements professionnels qui renforcent votre image de marque et améliorent le confort de vos équipes
            </p>
          </div>
        </motion.div>

        {/* Grille des services */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {businessServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Carte avec photo en fond */}
                <div className="relative h-full rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 min-h-[300px] sm:min-h-[350px]">
                  {/* Image de fond */}
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    {/* Overlay coloré */}
                    <div 
                      className="absolute inset-0 transition-all duration-300 group-hover:opacity-90"
                      style={{ backgroundColor: service.overlayColor }}
                    />
                    {/* Gradient supplémentaire */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>

                  {/* Contenu */}
                  <div className="relative h-full flex flex-col p-4 sm:p-6">
                    {/* En-tête avec icône */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="relative">
                        <div 
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-md"
                          style={{ backgroundColor: service.color }}
                        >
                          {service.icon}
                        </div>
                      </div>
                      
                      {/* Badge initiales */}
                      <span 
                        className="text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full text-white shadow-sm"
                        style={{ backgroundColor: service.color }}
                      >
                        {service.initials}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {service.title}
                    </h3>

                    {/* Items */}
                    <div className="flex-1 mb-4 sm:mb-6">
                      <div className="space-y-1.5 sm:space-y-2">
                        {service.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 sm:gap-3 text-white/90"
                          >
                            <div 
                              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: service.accent }}
                            />
                            <span className="text-xs sm:text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bouton d'action */}
                    <div className="pt-3 sm:pt-4 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-white/80">
                          {service.items.length} services
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-1 sm:gap-2 text-white font-medium text-sm sm:text-base cursor-pointer group/action"
                        >
                          <span>Détails</span>
                          <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/action:translate-x-1" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section des avantages en carrousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
                <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">
                  Avantages Clés
                </span>
                <div className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-4 sm:mb-6 px-4">
              Pourquoi <span className="font-semibold">nous choisir</span> ?
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base px-4">
              Découvrez les bénéfices concrets de notre expertise en uniformes professionnels
            </p>
          </div>

          {/* Carrousel des avantages */}
          <div className="relative">
            {/* Contrôles supérieurs */}
            <div className="flex justify-between items-center mb-6 sm:mb-8 px-2">
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded-lg hover:bg-gray-50"
              >
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${autoPlay ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span className="font-medium hidden sm:inline">{autoPlay ? 'Auto' : 'Pause'}</span>
              </button>

              <div className="text-xs sm:text-sm text-gray-500 font-medium px-3 py-1 bg-gray-50 rounded-lg">
                {activeAdvantage + 1} <span className="text-gray-400">/</span> {advantages.length}
              </div>
            </div>

            {/* Onglets de navigation */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-3 px-2 scrollbar-hide">
              {advantages.map((advantage, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveAdvantage(index);
                    setAutoPlay(false);
                  }}
                  className={`px-4 py-2.5 rounded-lg border transition-all duration-300 flex items-center gap-2 sm:gap-3 flex-shrink-0 whitespace-nowrap ${
                    activeAdvantage === index
                      ? 'border-gray-300 bg-white shadow-sm'
                      : 'border-transparent hover:border-gray-200 hover:bg-gray-50'
                  }`}
                  style={{
                    borderColor: activeAdvantage === index ? advantage.accent : 'transparent',
                    backgroundColor: activeAdvantage === index ? `${advantage.color}08` : 'transparent'
                  }}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                      activeAdvantage === index ? 'text-white' : 'text-gray-400'
                    }`}
                    style={{
                      backgroundColor: activeAdvantage === index ? advantage.color : '#F3F4F6',
                      color: activeAdvantage === index ? 'white' : advantage.color
                    }}
                  >
                    {advantage.icon}
                  </div>
                  <span className={`font-medium text-sm ${activeAdvantage === index ? 'text-gray-900' : 'text-gray-600'}`}>
                    {advantage.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Conteneur du slide */}
            <div className="relative">
              {/* Flèche Précédent */}
              <button
                onClick={() => {
                  prevAdvantage();
                  setAutoPlay(false);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                aria-label="Avantage précédent"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Flèche Suivant */}
              <button
                onClick={() => {
                  nextAdvantage();
                  setAutoPlay(false);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                aria-label="Avantage suivant"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Slide animée */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAdvantage}
                  initial={{ opacity: 0, x: isMobile ? 40 : 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isMobile ? -40 : -60 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col items-center">
                      {/* Avatar */}
                      <div className="relative mb-6 sm:mb-8">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                          {/* Cercle de fond */}
                          <div 
                            className="absolute inset-0 rounded-full opacity-20"
                            style={{ backgroundColor: currentAdvantage.color }}
                          />
                          
                          {/* Icône */}
                          <div 
                            className="absolute inset-3 sm:inset-4 rounded-full flex items-center justify-center text-white shadow-lg"
                            style={{ backgroundColor: currentAdvantage.color }}
                          >
                            {currentAdvantage.icon}
                          </div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="text-center mb-6 sm:mb-8 max-w-xl mx-auto">
                        <h4 className="text-xl sm:text-2xl font-medium text-gray-900 mb-3 sm:mb-4">
                          {currentAdvantage.title}
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                          {currentAdvantage.description}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                          {currentAdvantage.detailed}
                        </p>
                      </div>

                      {/* Indicateur */}
                      <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
                        style={{ 
                          backgroundColor: `${currentAdvantage.color}10`,
                          color: currentAdvantage.color 
                        }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: currentAdvantage.color }}
                        />
                        <span>Valeur ajoutée</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Points de navigation */}
              <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                {advantages.map((advantage, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveAdvantage(index);
                      setAutoPlay(false);
                    }}
                    className={`rounded-full transition-all duration-400 focus:outline-none ${
                      activeAdvantage === index 
                        ? 'w-8 sm:w-10 h-2 sm:h-3' 
                        : 'w-2 sm:w-3 h-2 sm:h-3'
                    }`}
                    style={{
                      backgroundColor: activeAdvantage === index ? advantage.color : '#D1D5DB'
                    }}
                    aria-label={`Aller à l'avantage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
            {/* Background avec photo d'ingénieur */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${serviceImages.engineer})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-emerald-900/90" />
            </div>
            
            <div className="relative p-6 sm:p-8 md:p-12 text-center">
              <div className="inline-block mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <div className="w-4 sm:w-6 h-px bg-blue-300"></div>
                  <span className="text-xs sm:text-sm font-medium text-blue-200 uppercase tracking-wider">
                    Accompagnement Expert
                  </span>
                  <div className="w-4 sm:w-6 h-px bg-blue-300"></div>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-4 sm:mb-6 px-4">
                Prêt à transformer l'image de votre entreprise ?
              </h3>
              
              <p className="text-blue-100 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-4">
                Notre équipe d'experts vous accompagne dans la création d'une identité vestimentaire 
                qui reflète vos valeurs et optimise le confort de vos équipes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-blue-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors duration-300 group text-sm sm:text-base"
                >
                  <span>Demander un devis</span>
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 border border-white text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group text-sm sm:text-base"
                >
                  <span>Voir nos réalisations</span>
                </motion.button>
              </div>
              
              <p className="text-blue-200/70 text-xs sm:text-sm mt-6 sm:mt-8">
                Réponse sous 24h • Étude gratuite • Solutions sur mesure
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}