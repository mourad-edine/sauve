"use client";
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
  FaChevronRight,
} from "react-icons/fa";
import { FaShieldHalved, FaPlane } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import CTA from "./CTA";

// Import des images (ajustez les chemins selon votre structure)
const serviceImages = {
  hotel: "/images/services/hotel.jpg",
  medical: "/images/services/medical.jpg",
  security: "/images/services/security.jpg",
  retail: "/images/services/retail.jpg",
  education: "/images/services/education.jpg",
  transport: "/images/services/transport.jpg",
  engineer: "/images/services/engineer.jpg",
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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

 const businessServices = [
    {
      icon: <FaHotel />,
      title: "Hôtellerie & Restauration",
      items: ["Uniforme de réception", "Tenue de serveur/serveuse", "Chefs de cuisine", "Vestes de barman"],
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "HR",
      png: "https://themerchlist.com/wp-content/uploads/2023/02/1.0-Main-Custom-Printed-Housekeeping-Uniform-Merchlist-Add-Your-Design-or-Logo-to-Custom-Uniform.png", // Ajout du PNG
      overlayColor: "rgba(30, 58, 138, 0.9)"
    },
    {
      icon: <FaUserMd />,
      title: "Médical & Paramédical",
      items: ["Blouses médicales", "Tenues de chirurgie", "Vêtements de laboratoire", "Uniforme infirmier"],
      color: "#3B82F6",
      accent: "#6EE7B7",
      initials: "MP",
      png: "https://static.label-blouse.net/39596-medium_default/tunique-de-travail-medical-manches-longues-col-turquoise.jpg",
      overlayColor: "rgba(6, 78, 59, 0.9)"
    },
    {
      icon: <FaShieldHalved />,
      title: "Sécurité & Services",
      items: ["Agents de sécurité", "Conciergerie", "Vêtements maintenance", "Tenues de chauffeur"],
      color: "#3B82F6",
      accent: "#6EE7B7",
      initials: "MP",
      png: "https://urgencesmods.fr/wp-content/uploads/2020/08/sc-1.png",
      overlayColor: "rgba(6, 78, 59, 0.9)"
    },
    {
      icon: <FaShoppingBag />,
      title: "Commerce & Retail",
      items: ["Tenues de vendeurs", "Uniforme de caissier", "Vestes managériales", "Polo personnalisé"],
      color: "#3B82F6",
      accent: "#6EE7B7",
      initials: "MP",
      png: "https://www.label-blouse.net/modules/colorizeproplus/compositions/6c9c545830c297c7d06d9f405e17e770.png",
      overlayColor: "rgba(6, 78, 59, 0.9)"
    },
    {
      icon: <FaGraduationCap />,
      title: "Éducation & Formation",
      items: ["Blouses d'étudiants", "Tenues formateurs", "Vêtements techniques", "Uniforme scolaire"],
      color: "#3B82F6",
      accent: "#6EE7B7",
      initials: "MP",
      png: "https://static.vecteezy.com/system/resources/thumbnails/054/017/970/small/light-blue-school-uniform-dress-with-short-sleeves-and-tie-free-png.png",
      overlayColor: "rgba(6, 78, 59, 0.9)"
    },
    {
      icon: <FaPlane />,
      title: "Transport & Logistique",
      items: ["Uniforme d'équipage", "Tenues pilote/hôtesse", "Personnel au sol", "Tenues logistique"],
     color: "#3B82F6",
      accent: "#6EE7B7",
      initials: "MP",
      png: "https://fipcenter.com/guide/wp-content/uploads/2021/02/tenue-de-travail.png",
      overlayColor: "rgba(6, 78, 59, 0.9)"
    }
    // ... Appliquer png: servicePngs.nom pour les autres
  ];


  const advantages = [
    {
      icon: <FaChartLine className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Image professionnelle",
      description:
        "Renforcez votre image de marque avec des tenues harmonisées et de qualité",
      detailed:
        "Nos uniformes professionnels sont conçus pour refléter l'identité de votre entreprise et créer une impression positive auprès de vos clients.",
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "IP",
    },
    {
      icon: <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Cohésion d'équipe",
      description:
        "Favorisez l'appartenance à l'entreprise et l'esprit d'équipe",
      detailed:
        "Les uniformes créent un sentiment d'unité et renforcent l'identité collective de vos équipes, améliorant la collaboration.",
      color: "#3B82F6",
      accent: "#6EE7B7",
      initials: "CE",
    },
    {
      icon: <FaUserTie className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Confort professionnel",
      description:
        "Vêtements adaptés aux contraintes spécifiques de chaque métier",
      detailed:
        "Nous utilisons des tissus techniques qui offrent confort, respirabilité et durabilité, adaptés aux exigences de chaque poste.",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "CP",
    },
  ];

  const nextAdvantage = useCallback(() => {
    setActiveAdvantage((prev) =>
      prev === advantages.length - 1 ? 0 : prev + 1
    );
  }, [advantages.length]);

  const prevAdvantage = useCallback(() => {
    setActiveAdvantage((prev) =>
      prev === 0 ? advantages.length - 1 : prev - 1
    );
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
            filter: "grayscale(100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-transparent to-white/80" />
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10"></div>

      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Entreprises
                </span>
                <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-4 uppercase">
              Solutions professionnelles
              <span className="block text-base sm:text-lg md:text-xl text-yellow-600 font-normal mt-2">
                sur mesure
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6"></div>
          </div>
        </motion.div>

        {/* Grille des services */}
        
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {businessServices.map((service, index) => (
            <motion.div
              key={index}
              className="relative h-[400px]  overflow-hidden group shadow-xl"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Fond Coloré */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundColor: service.color }}
              />

              {/* PNG flottant en arrière-plan de la carte */}
              <div className="absolute right-[-10px] bottom-[-10px] w-52 h-52 
     opacity-90 transition-transform duration-500 
     group-hover:scale-120">
  {service.png && (
    <img
      src={service.png}
      alt={service.title}
      className="w-full h-full object-contain"
    />
  )}
</div>

              {/* Contenu de la carte */}
              <div className="relative h-full p-8 flex flex-col z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl uppercase font-bold text-white mb-4">{service.title}</h3>
                
                <ul className="space-y-3 flex-1">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 flex items-center gap-2 text-white font-semibold group/btn">
                  En savoir plus 
                  <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section des avantages en carrousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Avantages Clés
                </span>
                <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-4 uppercase">
              Pourquoi
              <span className="block text-base sm:text-lg md:text-xl text-yellow-600 font-normal mt-2">
                nous choisir ?
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6"></div>
          </div>

          {/* Carrousel des avantages */}
          <div className="relative">
            {/* Contrôles supérieurs */}

            {/* Onglets de navigation */}

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
                      <div
                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
                        style={{
                          backgroundColor: `${currentAdvantage.color}10`,
                          color: currentAdvantage.color,
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
                        ? "w-8 sm:w-10 h-2 sm:h-3"
                        : "w-2 sm:w-3 h-2 sm:h-3"
                    }`}
                    style={{
                      backgroundColor:
                        activeAdvantage === index ? advantage.color : "#D1D5DB",
                    }}
                    aria-label={`Aller à l'avantage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section CTA */}
        <CTA />
      </div>
    </section>
  );
}
