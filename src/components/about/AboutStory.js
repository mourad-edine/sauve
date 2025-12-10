// components/AboutStory.js
import { FaHistory, FaRocket, FaAward, FaHandsHelping } from "react-icons/fa";

export default function AboutStory() {
  const timeline = [
    {
      year: "2009",
      title: "Les débuts",
      description: "Création de l'atelier avec une simple machine à coudre et une grande passion pour la couture.",
      icon: <FaHistory className="text-2xl" />,
      color: "bg-blue-100 text-blue-700"
    },
    {
      year: "2012",
      title: "Premiers contrats entreprises",
      description: "Première commande importante pour un restaurant Toamasinaien. Début de notre spécialisation professionnelle.",
      icon: <FaHandsHelping className="text-2xl" />,
      color: "bg-green-100 text-green-700"
    },
    {
      year: "2015",
      title: "Expansion de l'atelier",
      description: "Déménagement vers un atelier plus grand et recrutement de nos premiers artisans qualifiés.",
      icon: <FaRocket className="text-2xl" />,
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      year: "2019",
      title: "Reconnaissance professionnelle",
      description: "Obtention du label Entreprise du Patrimoine Vivant et première récompense nationale.",
      icon: <FaAward className="text-2xl" />,
      color: "bg-purple-100 text-purple-700"
    },
    {
      year: "2023",
      title: "Innovation & Excellence",
      description: "Lancement de notre gamme de tissus éco-responsables et développement de la personnalisation numérique.",
      icon: "🚀",
      color: "bg-red-100 text-red-700"
    }
  ];

  return (
    <section id="story" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Notre Parcours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De petits débuts à une référence dans la confection sur mesure, 
            découvrez l'histoire de notre engagement pour l'excellence.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
  {/* Ligne centrale */}
  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700"></div>
  
  <div className="space-y-12">
    {timeline.map((item, index) => (
      <div 
        key={index} 
        className={`flex flex-col lg:flex-row items-center ${
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}
      >
        {/* Point sur la timeline */}
        <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-blue-600 mb-4 lg:mb-0">
          <div className={`${item.color} p-3 rounded-full`}>
            {item.icon}
          </div>
        </div>
        
        {/* Contenu */}
        <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} px-4 lg:px-0`}>
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 text-white px-4 py-1 rounded-lg font-bold mr-4">
                {item.year}
              </div>
              <h3 className="text-xl font-bold text-blue-900 uppercase">{item.title}</h3>
            </div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        
       {/* Notre mission aujourd'hui */}
<div className="mt-16 md:mt-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-6 md:p-10 shadow-2xl">
  <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
    {/* Partie gauche - Mission */}
    <div className="w-full xl:w-1/2">
      <div className="mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-3">
          Notre Mission
        </h3>
        <h4 className="text-xl md:text-2xl xl:text-3xl text-yellow-300 font-bold mb-4">
          Aujourd'hui
        </h4>
        <p className="text-base md:text-lg opacity-90 mb-6 leading-relaxed">
          Continuer à innover tout en préservant les techniques artisanales qui font notre réputation. 
          Créer des vêtements qui allient esthétique, confort et durabilité, 
          en étant à l'écoute de chaque client, qu'il soit particulier ou professionnel.
        </p>
      </div>
      
      {/* Badge Vision */}
      <div className="bg-white/10 p-4 md:p-5 rounded-xl backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded-lg text-center w-full sm:w-auto">
            Vision 2025
          </div>
          <div className="text-sm md:text-base">
            Devenir la référence européenne de la confection sur mesure éco-responsable
          </div>
        </div>
      </div>
    </div>
    
    {/* Partie droite - Statistiques */}
    <div className="w-full xl:w-1/2">
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {[
          { value: "500+", label: "Tissus référencés" },
          { value: "12", label: "Artisans experts" },
          { value: "40+", label: "Secteurs d'activité" },
          { value: "100%", label: "Fabriqué à Madagascar" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="bg-white/10 p-4 md:p-5 rounded-xl backdrop-blur-sm text-center hover:bg-white/15 transition-colors duration-300"
          >
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
              {stat.value}
            </div>
            <div className="text-sm md:text-base lg:text-lg">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}