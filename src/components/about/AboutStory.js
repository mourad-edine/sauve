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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
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
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Point sur la timeline */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-blue-600 mb-4 md:mb-0">
                  <div className={`${item.color} p-3 rounded-full`}>
                    {item.icon}
                  </div>
                </div>
                
                {/* Contenu */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} px-4 md:px-0`}>
                  <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-700 text-white px-4 py-1 rounded-lg font-bold mr-4">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Notre mission aujourd'hui */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Notre Mission<br />
                <span className="text-yellow-300">Aujourd'hui</span>
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Continuer à innover tout en préservant les techniques artisanales qui font notre réputation. 
                Créer des vêtements qui allient esthétique, confort et durabilité, 
                en étant à l'écoute de chaque client, qu'il soit particulier ou professionnel.
              </p>
              <div className="flex items-center">
                <div className="bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded-lg mr-4">
                  Vision 2025
                </div>
                <span>Devenir la référence européenne de la confection sur mesure éco-responsable</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg">Tissus référencés</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-lg">Artisans experts</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="text-4xl font-bold mb-2">40+</div>
                <div className="text-lg">Secteurs d'activité</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Fabriqué en Madagascar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}