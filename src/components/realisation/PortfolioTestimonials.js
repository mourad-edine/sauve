// components/PortfolioTestimonials.js
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function PortfolioTestimonials() {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Directrice d'Hôtel",
      company: "Hôtel Le Majestique",
      content: "Les uniformes créés par ConfectionPro ont complètement transformé l'image de notre établissement. La qualité des tissus et la précision des finitions sont exceptionnelles.",
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre meilleure récompense. Découvrez leurs retours d'expérience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Témoignages */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-8">Témoignages clients</h3>
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                  <FaQuoteLeft className="text-blue-300 text-2xl mb-4" />
                  <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                        <p className="text-gray-600">
                          {testimonial.role}
                          {testimonial.company && ` • ${testimonial.company}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex text-yellow-500">
                      {"★".repeat(testimonial.rating)}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Projet : <span className="font-medium text-blue-700">{testimonial.project}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Études de cas */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-8">Études de cas</h3>
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold mb-6">{study.title}</h4>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                      <h5 className="font-bold">Défi</h5>
                    </div>
                    <p className="text-blue-200 pl-6">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                      <h5 className="font-bold">Solution</h5>
                    </div>
                    <p className="text-blue-200 pl-6">{study.solution}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      <h5 className="font-bold">Résultat</h5>
                    </div>
                    <p className="text-blue-200 pl-6">{study.result}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Processus de collaboration</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-700 mb-1">1</div>
                  <div className="text-sm text-gray-700">Briefing initial</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-700 mb-1">2</div>
                  <div className="text-sm text-gray-700">Prototypes & ajustements</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-700 mb-1">3</div>
                  <div className="text-sm text-gray-700">Production & livraison</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}