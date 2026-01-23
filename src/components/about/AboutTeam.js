'use client';
import { FaInstagram, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutTeam() {
  const [hoveredMember, setHoveredMember] = useState(null);
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
      color: "#1E40AF", // Bleu foncé uniforme
      accent: "#3B82F6", // Bleu clair uniforme
      social: {
        instagram: "#",
        linkedin: "#",
        email: "marie@confection-pro.fr",
      },
      photo: "https://images.unsplash.com/photo-1494790108755-2616b786d4d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Thomas Dubois",
      role: "Directeur Technique",
      description: "Expert en coupe et confection depuis 20 ans, Thomas garantit la perfection technique de chaque pièce.",
      expertise: ["Coupe", "Confection", "Contrôle qualité"],
      initials: "TD",
      color: "#1E40AF",
      accent: "#3B82F6",
      social: { linkedin: "#", email: "thomas@confection-pro.fr" },
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sophie Martin",
      role: "Responsable Commerciale",
      description: "Sophie accompagne les entreprises dans la définition de leur identité vestimentaire.",
      expertise: ["Conseil", "Développement", "Suivi projets"],
      initials: "SM",
      color: "#1E40AF",
      accent: "#3B82F6",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "sophie@confection-pro.fr",
      },
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Jean Petit",
      role: "Maître Tailleur",
      description: "Artisan d'exception, Jean maîtrise les techniques ancestrales de la couture sur mesure.",
      expertise: ["Tailleur", "Retouches", "Formation"],
      initials: "JP",
      color: "#1E40AF",
      accent: "#3B82F6",
      social: { email: "jean@confection-pro.fr" },
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 h-px bg-blue-200"></div>
                <span className="text-xs font-medium text-blue-600 uppercase">Notre Équipe</span>
                <div className="w-6 h-px bg-blue-200"></div>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-light text-blue-900 mb-3 uppercase">
              Des experts unis par
              <span className="block text-base sm:text-lg text-blue-600 font-normal mt-1">
                la passion du métier
              </span>
            </h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto mb-4"></div>
           
          </div>
        </motion.div>

        {/* Grille des membres d'équipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-64 sm:h-72 perspective-1000"
              onMouseEnter={() => !isMobile && setHoveredMember(index)}
              onMouseLeave={() => !isMobile && setHoveredMember(null)}
              onClick={() => isMobile && setHoveredMember(hoveredMember === index ? null : index)}
            >
              {/* Carte qui tourne */}
              <motion.div
                className="relative w-full h-full preserve-3d transition-all duration-100"
                animate={{
                  rotateY: hoveredMember === index ? 180 : 0,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Face avant - Carte compacte */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100  border border-blue-200 backface-hidden overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-4 sm:p-5 h-full flex flex-col items-center justify-center text-center">
                    {/* Avatar/Photo avant */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4">
                      <div className="absolute inset-0 rounded-full border-2 border-white shadow-sm overflow-hidden bg-blue-100">
                        <div 
                          className="w-full h-full flex items-center justify-center text-white text-xl font-medium bg-blue-900"
                        >
                          {member.initials}
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                        <FaHeart className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-medium text-blue-900 mb-1">
                      {member.name}
                    </h3>
                    <div className="text-xs sm:text-sm text-blue-600 mb-3">
                      {member.role}
                    </div>
                    
                    {/* Badges d'expertise */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                      {member.expertise.slice(0, 2).map((exp, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/80 text-blue-700 border border-blue-200"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                    
                    {/* Indicateur survol */}
                    <div className="text-xs text-blue-500 mt-2 flex items-center gap-1">
                      <span>Survolez pour + d'infos</span>
                      {!isMobile && <span className="text-xs">→</span>}
                    </div>
                  </div>
                </div>

                {/* Face arrière - Informations détaillées */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900  border border-blue-500 backface-hidden overflow-hidden shadow-lg"
                  style={{ 
                    transform: 'rotateY(180deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="p-4 sm:p-5 h-full flex flex-col">
                    {/* Photo arrière */}
                    <div className="relative w-full h-24 mb-4 rounded-lg overflow-hidden bg-blue-500">
                      <div className="absolute inset-0 bg-blue-800/20"></div>
                      {/* Vous pouvez décommenter cette ligne pour utiliser une vraie photo */}
                      {/* <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      /> */}
                      <div className="w-full h-full flex items-center justify-center text-white text-4xl font-light">
                        {member.initials}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-sm text-blue-100 mb-3">
                      {member.role}
                    </div>
                    
                    <p className="text-xs sm:text-sm text-blue-100/90 mb-4 flex-grow">
                      {member.description}
                    </p>
                    
                    {/* Toutes les expertises */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {member.expertise.map((exp, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full bg-blue-500/30 text-white border border-blue-400/50"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Social links */}
                    <div className="flex justify-center space-x-4 pt-3 border-t border-blue-500/30">
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          className="text-blue-200 hover:text-white transition-colors duration-300"
                        >
                          <FaInstagram className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-blue-200 hover:text-white transition-colors duration-300"
                        >
                          <FaLinkedin className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-blue-200 hover:text-white transition-colors duration-300"
                      >
                        <FaEnvelope className="w-4 h-4" />
                      </a>
                    </div>
                    
                    {/* Indicateur retour */}
                    <div className="text-xs text-blue-200/70 text-center mt-3">
                      {isMobile ? 'Touchez pour revenir' : 'Survolez pour revenir'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Indication pour mobile */}
      
      </div>
    </section>
  );
}