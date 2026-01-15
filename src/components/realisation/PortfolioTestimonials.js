// components/PortfolioTestimonials.js
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function PortfolioTestimonials() {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Directrice d'Hôtel",
      company: "Hôtel Le Majestique",
      content: "Les uniformes créés par Confection Vonjy ont complètement transformé l'image de notre établissement. La qualité des tissus et la précision des finitions sont exceptionnelles.",
      rating: 5,
      project: "Uniformes Hôtel de Luxe"
    },
    {
      name: "Thomas Leroy",
      role: "Directeur Général",
      company: "Clinique Saint-Louis",
      content: "Nous avions des besoins très spécifiques pour nos tenues médicales. L'équipe a parfaitement compris nos contraintes et a livré un travail au-delà de nos attentes.",
      rating: 5,
      project: "Tenues médicales personnalisées"
    },
    {
      name: "Marie & Thomas",
      role: "Mariés",
      company: "",
      content: "Ma robe de mariée était le rêve de ma vie. Les couturières ont été à l'écoute de toutes mes idées et le résultat était encore plus beau que ce que j'imaginais.",
      rating: 5,
      project: "Robe de mariée sur mesure"
    },
    {
      name: "Alexandre Dubois",
      role: "Cadre dirigeant",
      company: "Finance Group",
      content: "Mon costume sur mesure est parfaitement ajusté et d'une élégance remarquable. Je reçois des compliments à chaque réunion importante.",
      rating: 5,
      project: "Costume 3 pièces sur mesure"
    }
  ];

  const caseStudies = [
    {
      title: "Transformation de l'image d'une chaîne hôtelière",
      challenge: "Uniformiser la tenue du personnel sur 5 établissements avec des contraintes différentes",
      solution: "Création d'une collection modulaire adaptable à chaque métier",
      result: "+30% de satisfaction client, réduction des coûts d'entretien"
    },
    {
      title: "Tenues techniques pour industrie alimentaire",
      challenge: "Confort, résistance et conformité aux normes d'hygiène strictes",
      solution: "Développement de tissus techniques avec traitement antibactérien",
      result: "Réduction de 40% du renouvellement des tenues"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 sm:w-12 h-px bg-blue-300"></div>
              <span className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wider">Témoignages</span>
              <div className="w-8 sm:w-12 h-px bg-blue-300"></div>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Ce que disent <span className="font-semibold">nos clients</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            La satisfaction de nos clients est notre meilleure récompense. Découvrez leurs retours d'expérience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Témoignages */}
          <div>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2">
                Témoignages clients
              </h3>
              <p className="text-sm sm:text-base text-gray-500">
                Retours authentiques de nos partenaires et clients
              </p>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start mb-4 sm:mb-5">
                    <FaQuoteLeft className="text-blue-400 text-lg sm:text-xl flex-shrink-0 mr-3 mt-1" />
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base mr-3 sm:mr-4 flex-shrink-0">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {testimonial.role}
                          {testimonial.company && ` • ${testimonial.company}`}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <div className="text-xs sm:text-sm text-gray-500">
                      <span className="font-medium text-gray-700">Projet :</span>{' '}
                      <span className="text-blue-600 font-medium">{testimonial.project}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Études de cas */}
          <div>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2">
                Études de cas
              </h3>
              <p className="text-sm sm:text-base text-gray-500">
                Solutions concrètes pour des défis spécifiques
              </p>
            </div>
            
            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
              {caseStudies.map((study, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-blue-800 to-blue-700 text-white p-6 sm:p-8 rounded-xl shadow-lg"
                >
                  <h4 className="text-lg sm:text-xl font-medium mb-5 sm:mb-6">
                    {study.title}
                  </h4>
                  
                  <div className="space-y-5 sm:space-y-6">
                    <div>
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full mr-3"></div>
                        <h5 className="font-medium text-sm sm:text-base">Défi</h5>
                      </div>
                      <p className="text-blue-100 text-sm sm:text-base pl-5 sm:pl-6">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full mr-3"></div>
                        <h5 className="font-medium text-sm sm:text-base">Solution</h5>
                      </div>
                      <p className="text-blue-100 text-sm sm:text-base pl-5 sm:pl-6">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-3"></div>
                        <h5 className="font-medium text-sm sm:text-base">Résultat</h5>
                      </div>
                      <p className="text-blue-100 text-sm sm:text-base pl-5 sm:pl-6">
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Processus de collaboration */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 rounded-xl border border-blue-100">
              <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-5">
                Notre processus de collaboration
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                    01
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Briefing initial
                  </div>
                  <div className="text-xs text-gray-600">
                    Compréhension des besoins
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                    02
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Prototypes & ajustements
                  </div>
                  <div className="text-xs text-gray-600">
                    Validation et perfectionnement
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                    03
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Production & livraison
                  </div>
                  <div className="text-xs text-gray-600">
                    Réalisation et suivi
                  </div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-5 text-center">
                <p className="text-xs sm:text-sm text-gray-500">
                  Un accompagnement sur mesure à chaque étape de votre projet
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Vous souhaitez devenir notre prochain témoignage ?
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base">
            Commencer votre projet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}