'use client';
import { FaInstagram, FaLinkedin, FaEnvelope, FaHeart, FaRulerCombined, FaUsers, FaAward, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export default function AboutTeam() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeMember, setActiveMember] = useState(0);
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

  const teamMembers = [
    {
      name: "Marie Laurent",
      role: "Fondatrice & Directrice Artistique",
      description: "Diplômée des Métiers d'Art, Marie supervise chaque création avec son œil expert et sa passion pour les détails.",
      expertise: ["Design", "Patronnage", "Relations clients"],
      initials: "ML",
      color: "#3B82F6",
      accent: "#93C5FD",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "marie@confection-pro.fr",
      },
    },
    {
      name: "Thomas Dubois",
      role: "Directeur Technique",
      description: "Expert en coupe et confection depuis 20 ans, Thomas garantit la perfection technique de chaque pièce.",
      expertise: ["Coupe", "Confection", "Contrôle qualité"],
      initials: "TD",
      color: "#10B981",
      accent: "#6EE7B7",
      social: { linkedin: "#", email: "thomas@confection-pro.fr" },
    },
    {
      name: "Sophie Martin",
      role: "Responsable Commerciale",
      description: "Sophie accompagne les entreprises dans la définition de leur identité vestimentaire.",
      expertise: ["Conseil", "Développement", "Suivi projets"],
      initials: "SM",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "sophie@confection-pro.fr",
      },
    },
    {
      name: "Jean Petit",
      role: "Maître Tailleur",
      description: "Artisan d'exception, Jean maîtrise les techniques ancestrales de la couture sur mesure.",
      expertise: ["Tailleur", "Retouches", "Formation"],
      initials: "JP",
      color: "#F59E0B",
      accent: "#FCD34D",
      social: { email: "jean@confection-pro.fr" },
    },
  ];

  const artisans = [
    { name: "Isabelle", role: "Couturière spécialisée", experience: "8 ans" },
    { name: "Marc", role: "Brodeur expert", experience: "12 ans" },
    { name: "Chloé", role: "Styliste-modéliste", experience: "6 ans" },
    { name: "Pierre", role: "Spécialiste finitions", experience: "10 ans" },
    { name: "Élodie", role: "Responsable logistique", experience: "5 ans" },
    { name: "Antoine", role: "Technicien textile", experience: "7 ans" },
  ];

  const nextMember = useCallback(() => {
    setActiveMember((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  }, [teamMembers.length]);

  const prevMember = useCallback(() => {
    setActiveMember((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  }, [teamMembers.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextMember, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, nextMember]);

  const currentMember = teamMembers[activeMember];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 uppercase">
              L'Équipe
              <span className="block text-base sm:text-lg md:text-xl text-yellow-600 font-normal mt-2">
                {/* 4 étapes pour l'excellence */}
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Une équipe d'experts unis par la passion du métier et l'exigence du détail
            </p>
          </div>
        </motion.div>

        {/* Équipe dirigeante */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          {/* Contrôles carrousel - Visible sur mobile/tablette */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 md:hidden px-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded-lg hover:bg-gray-50"
              >
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${autoPlay ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span className="font-medium">{autoPlay ? 'Auto' : 'Pause'}</span>
              </button>
              
              <div className="text-xs sm:text-sm text-gray-500 font-medium px-3 py-1 bg-gray-50 rounded-lg">
                {activeMember + 1} <span className="text-gray-400">/</span> {teamMembers.length}
              </div>
            </div>
          </div>

          {/* Version mobile/tablette - Carrousel */}
          <div className="md:hidden">
            {/* Onglets de navigation mobile */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-6 overflow-x-auto pb-3 px-2 scrollbar-hide">
              {teamMembers.map((member, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveMember(index);
                    setAutoPlay(false);
                  }}
                  className={`px-4 py-2.5 rounded-lg border transition-all duration-300 flex items-center gap-2 sm:gap-3 flex-shrink-0 whitespace-nowrap ${
                    activeMember === index
                      ? 'border-gray-300 bg-white shadow-sm'
                      : 'border-transparent hover:border-gray-200 hover:bg-gray-50'
                  }`}
                  style={{
                    borderColor: activeMember === index ? member.accent : 'transparent',
                    backgroundColor: activeMember === index ? `${member.color}08` : 'transparent'
                  }}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0 ${
                      activeMember === index ? 'scale-110' : 'scale-100'
                    }`}
                    style={{
                      backgroundColor: activeMember === index ? member.color : '#F3F4F6',
                      color: activeMember === index ? 'white' : member.color
                    }}
                  >
                    {member.initials}
                  </div>
                  <span className={`font-medium text-sm ${activeMember === index ? 'text-gray-900' : 'text-gray-600'}`}>
                    {member.name.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Conteneur carrousel mobile */}
            <div className="relative">
              {/* Flèches mobiles */}
              <button
                onClick={() => {
                  prevMember();
                  setAutoPlay(false);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900"
                aria-label="Membre précédent"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => {
                  nextMember();
                  setAutoPlay(false);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                           p-3 sm:p-4 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 
                           shadow-lg hover:bg-white hover:shadow-xl hover:scale-110
                           transition-all duration-300 text-gray-700 hover:text-gray-900"
                aria-label="Membre suivant"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Slide mobile animée */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember}
                  initial={{ opacity: 0, x: isMobile ? 40 : 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isMobile ? -40 : -60 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
                  onMouseEnter={() => setHoveredMember(activeMember)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col items-center">
                      {/* Avatar mobile */}
                      <div className="relative mb-6">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                          <motion.div
                            animate={hoveredMember === activeMember ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed opacity-50"
                            style={{ borderColor: currentMember.color }}
                          />
                          
                          <div 
                            className="absolute inset-2 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-medium"
                            style={{ backgroundColor: currentMember.color }}
                          >
                            {currentMember.initials}
                          </div>
                          
                          {/* Badge d'expertise */}
                          <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                            <FaHeart className="w-3 h-3" style={{ color: currentMember.color }} />
                          </div>
                        </div>
                      </div>

                      {/* Contenu mobile */}
                      <div className="text-center mb-6">
                        <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                          {currentMember.name}
                        </h3>
                        <div className="text-sm text-gray-500 mb-4">
                          {currentMember.role}
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                          {currentMember.description}
                        </p>
                      </div>

                      {/* Expertises mobiles */}
                      <div className="mb-6 w-full">
                        <div className="flex flex-wrap justify-center gap-2">
                          {currentMember.expertise.map((exp, idx) => (
                            <span
                              key={idx}
                              className="text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-200 bg-gray-50"
                              style={{
                                borderColor: currentMember.accent,
                                backgroundColor: `${currentMember.color}10`
                              }}
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social links mobiles */}
                      <div className="flex justify-center space-x-4 pt-6 border-t border-gray-100 w-full">
                        {currentMember.social.instagram && (
                          <a
                            href={currentMember.social.instagram}
                            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                          >
                            <FaInstagram className="w-5 h-5" />
                          </a>
                        )}
                        {currentMember.social.linkedin && (
                          <a
                            href={currentMember.social.linkedin}
                            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </a>
                        )}
                        <a
                          href={`mailto:${currentMember.social.email}`}
                          className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                        >
                          <FaEnvelope className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Points de navigation mobile */}
              <div className="flex justify-center gap-2 sm:gap-3 mt-6">
                {teamMembers.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveMember(index);
                      setAutoPlay(false);
                    }}
                    className={`rounded-full transition-all duration-400 ${
                      activeMember === index 
                        ? 'w-8 sm:w-10 h-2 sm:h-3' 
                        : 'w-2 sm:w-3 h-2 sm:h-3'
                    }`}
                    style={{
                      backgroundColor: activeMember === index ? member.color : '#D1D5DB'
                    }}
                    aria-label={`Aller à ${member.name}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Version desktop - STYLE ORIGINAL (non carrousel) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Carte principale - STYLE ORIGINAL */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300 h-full">
                  {/* Avatar avec effet de profondeur */}
                  <div className="relative mb-6">
                    <div className="relative w-20 h-20 mx-auto">
                      {/* Cercle de fond animé */}
                      <motion.div
                        animate={hoveredMember === index ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed opacity-50"
                        style={{ borderColor: member.color }}
                      />
                      
                      {/* Avatar principal */}
                      <div 
                        className="absolute inset-2 rounded-full flex items-center justify-center text-white text-2xl font-light"
                        style={{ backgroundColor: member.color }}
                      >
                        {member.initials}
                      </div>
                      
                      {/* Badge d'expertise */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        <FaHeart className="w-3 h-3" style={{ color: member.color }} />
                      </div>
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {member.description}
                    </p>
                  </div>

                  {/* Expertises sous forme de tags minimalistes */}
                  <div className="mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 group-hover:border-accent group-hover:bg-accent/5 transition-colors duration-300"
                          style={{
                            '--accent': member.accent,
                            '--color': member.color,
                          }}
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social links minimalistes */}
                  <div className="flex justify-center space-x-4 pt-6 border-t border-gray-100">
                    {member.social.instagram && (
                      <motion.a
                        whileHover={{ y: -2 }}
                        href={member.social.instagram}
                        className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a
                        whileHover={{ y: -2 }}
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Indicateur de survol subtil */}
                {hoveredMember === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -inset-1 rounded-lg border-2 pointer-events-none"
                    style={{ borderColor: member.color }}
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