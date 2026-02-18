'use client';
import { FaInstagram, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutTeam() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Récupération des membres de l'équipe depuis l'API
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://admin.confection-vonjy.mg/api/teams');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          // Transformer les données de l'API pour correspondre au format attendu
          const members = data.map((member, index) => ({
            id: member.id,
            name: member.nom,
            role: member.poste || "Membre d'équipe",
            description: member.description || "Expert en confection sur mesure",
            expertise: getExpertiseFromRole(member.poste),
            initials: getInitials(member.nom),
            color: "#1E40AF",
            accent: "#3B82F6",
            social: {
              email: member.email || "contact@confectionvonjy.com",
              linkedin: "#",
              instagram: "#"
            },
            entreprise: member.entreprise
          }));
          setTeamMembers(members);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des membres de l'équipe:", error);
        // En cas d'erreur, utiliser les données par défaut
        setTeamMembers(getDefaultTeamMembers());
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Fonction pour obtenir les initiales
  const getInitials = (name) => {
    if (!name) return "??";
    const parts = name.split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Fonction pour générer l'expertise basée sur le poste
  const getExpertiseFromRole = (role) => {
    if (!role) return ["Confection", "Sur mesure", "Expertise"];
    
    const roleLower = role.toLowerCase();
    if (roleLower.includes('sécurité')) return ["Sécurité", "Protection", "Formation"];
    if (roleLower.includes('agent')) return ["Conseil", "Expertise", "Support"];
    if (roleLower.includes('manager') || roleLower.includes('directeur')) return ["Management", "Coordination", "Stratégie"];
    
    return ["Confection", "Sur mesure", "Expertise"];
  };

  // Données par défaut si l'API échoue
  const getDefaultTeamMembers = () => [
    {
      id: 1,
      name: "Marie Laurent",
      role: "Fondatrice & Directrice Artistique",
      description: "Diplômée des Métiers d'Art, Marie supervise chaque création avec son œil expert et sa passion pour les détails.",
      expertise: ["Design", "Patronnage", "Relations clients"],
      initials: "ML",
      color: "#1E40AF",
      accent: "#3B82F6",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "marie@confection-pro.fr",
      }
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Directeur Technique",
      description: "Expert en coupe et confection depuis 20 ans, Thomas garantit la perfection technique de chaque pièce.",
      expertise: ["Coupe", "Confection", "Contrôle qualité"],
      initials: "TD",
      color: "#1E40AF",
      accent: "#3B82F6",
      social: { linkedin: "#", email: "thomas@confection-pro.fr" }
    },
    {
      id: 3,
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
      }
    },
    {
      id: 4,
      name: "Jean Petit",
      role: "Maître Tailleur",
      description: "Artisan d'exception, Jean maîtrise les techniques ancestrales de la couture sur mesure.",
      expertise: ["Tailleur", "Retouches", "Formation"],
      initials: "JP",
      color: "#1E40AF",
      accent: "#3B82F6",
      social: { email: "jean@confection-pro.fr" }
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="equipe" className="relative py-12 sm:py-16 bg-white overflow-hidden">
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
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="relative h-64 sm:h-72 bg-gray-100 animate-pulse rounded-lg border border-gray-200">
                <div className="p-4 sm:p-5 h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-300 mb-4"></div>
                  <div className="h-4 w-24 bg-gray-300 mb-2 rounded"></div>
                  <div className="h-3 w-32 bg-gray-300 mb-3 rounded"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : teamMembers.length === 0 ? (
          <div className="text-center py-12">
            <FaHeart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-sm">L'équipe sera bientôt complète !</p>
            <p className="text-gray-400 text-xs mt-2">Nous recrutons actuellement de nouveaux talents</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id || index}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 backface-hidden overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
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
                        {member.expertise.length > 2 && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-white/80 text-blue-700 border border-blue-200">
                            +{member.expertise.length - 2}
                          </span>
                        )}
                      </div>
                      
                      {/* Indicateur survol */}
                      <div className="text-xs text-blue-500 mt-2 flex items-center gap-1">
                        <span>{isMobile ? "Touchez" : "Survolez"} pour + d'infos</span>
                        {!isMobile && <span className="text-xs">→</span>}
                      </div>
                    </div>
                  </div>

                  {/* Face arrière - Informations détaillées */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 border border-blue-500 backface-hidden overflow-hidden shadow-lg"
                    style={{ 
                      transform: 'rotateY(180deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="p-4 sm:p-5 h-full flex flex-col">
                      {/* Initiales en grand */}
                      
                      
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {member.name}
                      </h3>
                      <div className="text-sm text-blue-100 mb-3">
                        {member.role}
                      </div>
                      
                      <p className="text-xs sm:text-sm text-blue-100/90 mb-4 flex-grow">
                        {member.description}
                      </p>
                      
                      {/* Entreprise si disponible */}
                      {member.entreprise && (
                        <div className="mb-3">
                         
                        </div>
                      )}
                      
                      {/* Toutes les expertises */}
                      
                      
                      
                      {/* Indicateur retour */}
                      
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Indication pour mobile */}
        {!isLoading && teamMembers.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-xs text-gray-500">
              {isMobile ? 'Touchez les cartes pour découvrir les détails' : 'Survolez les cartes pour découvrir les détails'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}