// components/AboutTeam.js
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Marie Laurent",
      role: "Fondatrice & Directrice Artistique",
      description: "Diplômée des Métiers d'Art, Marie supervise chaque création avec son œil expert et sa passion pour les détails.",
      expertise: ["Design", "Patronnage", "Relations clients"],
      image: "ML",
      color: "bg-blue-600",
      social: { instagram: "#", linkedin: "#", email: "marie@confection-pro.fr" }
    },
    {
      name: "Thomas Dubois",
      role: "Directeur Technique",
      description: "Expert en coupe et confection depuis 20 ans, Thomas garantit la perfection technique de chaque pièce.",
      expertise: ["Coupe", "Confection", "Contrôle qualité"],
      image: "TD",
      color: "bg-green-600",
      social: { linkedin: "#", email: "thomas@confection-pro.fr" }
    },
    {
      name: "Sophie Martin",
      role: "Responsable Commerciale",
      description: "Sophie accompagne les entreprises dans la définition de leur identité vestimentaire.",
      expertise: ["Conseil", "Développement", "Suivi projets"],
      image: "SM",
      color: "bg-purple-600",
      social: { instagram: "#", linkedin: "#", email: "sophie@confection-pro.fr" }
    },
    {
      name: "Jean Petit",
      role: "Maître Tailleur",
      description: "Artisan d'exception, Jean maîtrise les techniques ancestrales de la couture sur mesure.",
      expertise: ["Tailleur", "Retouches", "Formation"],
      image: "JP",
      color: "bg-red-600",
      social: { email: "jean@confection-pro.fr" }
    }
  ];

  const artisans = [
    { name: "Isabelle", role: "Couturière spécialisée", experience: "8 ans" },
    { name: "Marc", role: "Brodeur expert", experience: "12 ans" },
    { name: "Chloé", role: "Styliste-modéliste", experience: "6 ans" },
    { name: "Pierre", role: "Spécialiste finitions", experience: "10 ans" },
    { name: "Élodie", role: "Responsable logistique", experience: "5 ans" },
    { name: "Antoine", role: "Technicien textile", experience: "7 ans" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Notre Équipe d'Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des passionnés réunis par l'amour du beau tissu et du travail bien fait. 
            Chaque membre apporte son expertise unique à votre projet.
          </p>
        </div>
        
        {/* Équipe dirigeante */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">Direction & Expertise</h3>
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
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
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
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">Notre Atelier Artisanal</h3>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-6">Le Savoir-Faire Collectif</h4>
                <p className="text-lg opacity-90 mb-6">
                  Nos artisans partagent une même exigence pour la qualité et le détail. 
                  Chacun est spécialisé dans une étape précise de la confection, 
                  garantissant un résultat parfait à chaque projet.
                </p>
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">65 ans</div>
                    <div className="text-lg">Cumul d'expérience artisanale</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {artisans.map((artisan, index) => (
                    <div key={index} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <div className="font-bold text-lg mb-1">{artisan.name}</div>
                      <div className="text-sm opacity-90 mb-2">{artisan.role}</div>
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
      </div>
    </section>
  );
}