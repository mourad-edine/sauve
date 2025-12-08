// components/Services.js - Version épurée
import { FaShirt, FaUsers, FaRulerCombined, FaTruck, FaMedal, FaHeadset } from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      icon: <FaShirt />,
      title: "Vêtements d'entreprise",
      description: "Uniformes professionnels, polos personnalisés, vestes de travail sur mesure pour votre équipe."
    },
    {
      icon: <FaUsers />,
      title: "Tenues pour particuliers",
      description: "Création de vêtements sur mesure selon vos goûts et mesures pour une élégance unique."
    },
    {
      icon: <FaRulerCombined />,
      title: "Sur mesure",
      description: "Prise de mesures précises et ajustements parfaits pour un confort et une coupe optimale."
    },
    {
      icon: <FaTruck />,
      title: "Livraison nationale",
      description: "Livraison rapide et sécurisée partout en Madagascar, avec suivi de commande en temps réel."
    },
    {
      icon: <FaMedal />,
      title: "Qualité premium",
      description: "Tissus de haute qualité, finitions impeccables et durabilité garantie."
    },
    {
      icon: <FaHeadset />,
      title: "Conseil personnalisé",
      description: "Notre équipe vous accompagne dans le choix des modèles, tissus et personnalisations."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 uppercase">
            Nos Services
            <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
              Excellence en confection sur mesure
            </span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Découvrez notre expertise complète en confection de vêtements sur mesure, 
            alliant tradition artisanale et innovation.
          </p>
        </div>
        
        {/* Grille de services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative bg-white p-6 md:p-7 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Indicateur visuel */}
              <div className="absolute top-0 left-6 transform -translate-y-1/2">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {index + 1}
                </div>
              </div>
              
              <div className="pt-4">
                {/* Icône */}
                <div className="mb-5">
                  <div className="text-blue-700 text-3xl md:text-4xl">
                    {service.icon}
                  </div>
                </div>
                
                {/* Titre */}
                <h3 className="text-xl md:text-xl font-bold text-blue-900 mb-3 uppercase">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                  {service.description}
                </p>
                
                {/* Séparateur */}
                <div className="w-12 h-0.5 bg-blue-200 mb-4 group-hover:bg-blue-400 transition-colors duration-300"></div>
                
                {/* Info complémentaire */}
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Service complet</span> • 
                  <span className="ml-2">Disponible partout</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section statistiques */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base text-blue-200">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base text-blue-200">Années d'expérience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base text-blue-200">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24h</div>
              <div className="text-sm md:text-base text-blue-200">Réponse moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}