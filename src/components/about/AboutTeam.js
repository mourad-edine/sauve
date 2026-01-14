<<<<<<< HEAD
'use client';
import { FaInstagram, FaLinkedin, FaEnvelope, FaHeart, FaRulerCombined, FaUsers, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutTeam() {
  const [hoveredMember, setHoveredMember] = useState(null);

=======
// components/AboutTeam.js
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutTeam() {
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
  const teamMembers = [
    {
      name: "Marie Laurent",
      role: "Fondatrice & Directrice Artistique",
      description: "Diplômée des Métiers d'Art, Marie supervise chaque création avec son œil expert et sa passion pour les détails.",
      expertise: ["Design", "Patronnage", "Relations clients"],
<<<<<<< HEAD
      initials: "ML",
      color: "#3B82F6",
      accent: "#93C5FD",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "marie@confection-pro.fr",
      },
=======
      image: "ML",
      color: "bg-blue-600",
      social: { instagram: "#", linkedin: "#", email: "marie@confection-pro.fr" }
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    },
    {
      name: "Thomas Dubois",
      role: "Directeur Technique",
      description: "Expert en coupe et confection depuis 20 ans, Thomas garantit la perfection technique de chaque pièce.",
      expertise: ["Coupe", "Confection", "Contrôle qualité"],
<<<<<<< HEAD
      initials: "TD",
      color: "#10B981",
      accent: "#6EE7B7",
      social: { linkedin: "#", email: "thomas@confection-pro.fr" },
=======
      image: "TD",
      color: "bg-green-600",
      social: { linkedin: "#", email: "thomas@confection-pro.fr" }
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    },
    {
      name: "Sophie Martin",
      role: "Responsable Commerciale",
      description: "Sophie accompagne les entreprises dans la définition de leur identité vestimentaire.",
      expertise: ["Conseil", "Développement", "Suivi projets"],
<<<<<<< HEAD
      initials: "SM",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "sophie@confection-pro.fr",
      },
=======
      image: "SM",
      color: "bg-purple-600",
      social: { instagram: "#", linkedin: "#", email: "sophie@confection-pro.fr" }
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    },
    {
      name: "Jean Petit",
      role: "Maître Tailleur",
      description: "Artisan d'exception, Jean maîtrise les techniques ancestrales de la couture sur mesure.",
      expertise: ["Tailleur", "Retouches", "Formation"],
<<<<<<< HEAD
      initials: "JP",
      color: "#F59E0B",
      accent: "#FCD34D",
      social: { email: "jean@confection-pro.fr" },
    },
=======
      image: "JP",
      color: "bg-red-600",
      social: { email: "jean@confection-pro.fr" }
    }
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
  ];

  const artisans = [
    { name: "Isabelle", role: "Couturière spécialisée", experience: "8 ans" },
    { name: "Marc", role: "Brodeur expert", experience: "12 ans" },
    { name: "Chloé", role: "Styliste-modéliste", experience: "6 ans" },
    { name: "Pierre", role: "Spécialiste finitions", experience: "10 ans" },
    { name: "Élodie", role: "Responsable logistique", experience: "5 ans" },
<<<<<<< HEAD
    { name: "Antoine", role: "Technicien textile", experience: "7 ans" },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Points de repère */}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          



          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 uppercase">
              L'Équipe
              <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
                {/* 4 étapes pour l'excellence */}
              </span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                         Une équipe d'experts unis par la passion du métier et l'exigence du détail

            </p>
          </div>
        </motion.div>

        {/* Équipe dirigeante - Grille moderne */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                {/* Carte principale */}
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
                          className="text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-200 bg-gray-50"
                          style={{
                            borderColor: hoveredMember === index ? member.accent : '#E5E7EB',
                            backgroundColor: hoveredMember === index ? `${member.color}10` : '#F9FAFB'
                          }}
                        >
=======
    { name: "Antoine", role: "Technicien textile", experience: "7 ans" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Notre Équipe d'Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des passionnés réunis par l'amour du beau tissu et du travail bien fait. 
            Chaque membre apporte son expertise unique à votre projet.
          </p>
        </div>
        
        {/* Équipe dirigeante */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center uppercase">Direction & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className={`${member.color} h-48 flex items-center justify-center`}>
                  <div className="text-white text-4xl font-bold">{member.image}</div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h4>
                  <div className="text-blue-700 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">Expertises :</div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
<<<<<<< HEAD

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

        {/* Section artisanale minimaliste */}
        

        {/* Citation élégante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="max-w-2xl mx-auto">
            {/* Décorations */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>

            {/* Citation */}
            <div className="bg-gray-50/50 rounded-lg p-8 border border-gray-200">
              <div className="text-center">
                <FaAward className="w-8 h-8 text-gray-300 mx-auto mb-6" />
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  "Le vêtement sur mesure n'est pas un luxe, c'est le droit de chacun
                  à porter ce qui lui ressemble vraiment."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-20 h-px bg-gray-300"></div>
                  <div>
                    <div className="font-medium text-gray-900">Marie Laurent</div>
                    <div className="text-sm text-gray-500">Fondatrice</div>
                  </div>
                  <div className="w-20 h-px bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats minimalistes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Années d'expertise" },
              { value: "2000+", label: "Pièces créées" },
              { value: "100%", label: "Sur mesure" },
              { value: "∞", label: "Passion" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
=======
                  
                  <div className="flex space-x-4">
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-gray-400 hover:text-pink-600 transition duration-300">
                        <FaInstagram className="text-xl" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-700 transition duration-300">
                        <FaLinkedin className="text-xl" />
                      </a>
                    )}
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-700 transition duration-300">
                      <FaEnvelope className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Équipe artisanale */}
      <div>
  <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-6 md:p-8 shadow-lg">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
      {/* Section gauche - Texte */}
      <div className="w-full lg:w-1/2">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
          Le Savoir-Faire Collectif
        </h4>
        <p className="text-base md:text-lg opacity-90 mb-6 leading-relaxed">
          Nos artisans partagent une même exigence pour la qualité et le détail. 
          Chacun est spécialisé dans une étape précise de la confection, 
          garantissant un résultat parfait à chaque projet.
        </p>
        
        {/* Statistique */}
        <div className="bg-white/10 p-4 md:p-5 rounded-xl backdrop-blur-sm">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">65 ans</div>
            <div className="text-base md:text-lg">Cumul d'expérience artisanale</div>
          </div>
        </div>
      </div>
      
      {/* Section droite - Artisans */}
      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {artisans.map((artisan, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-4 md:p-5 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
            >
              <div className="font-bold text-base md:text-lg mb-1">
                {artisan.name}
              </div>
              <div className="text-sm opacity-90 mb-2 md:mb-3">
                {artisan.role}
              </div>
              <div className="text-xs bg-white/20 px-2 py-1 rounded-full inline-block">
                {artisan.experience} d'expérience
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
        
        {/* Citation */}
        <div className="mt-12 text-center">
          <div className="inline-block max-w-2xl">
            <div className="text-6xl text-blue-200 mb-4">"</div>
            <p className="text-2xl text-gray-700 italic mb-6">
              Le vêtement sur mesure n'est pas un luxe, c'est le droit de chacun 
              à porter ce qui lui ressemble vraiment.
            </p>
            <div className="text-blue-900 font-bold">Marie Laurent, Fondatrice</div>
          </div>
        </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
      </div>
    </section>
  );
}