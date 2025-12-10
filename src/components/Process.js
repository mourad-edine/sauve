// components/Process.js - Version identique, mais responsive à 1024px (lg)
import { FaSearch, FaRuler, FaCut, FaCheckCircle } from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Consultation",
      description: "Échange sur vos besoins, choix des modèles et des tissus adaptés à vos exigences.",
      duration: "1-2 jours"
    },
    {
      icon: <FaRuler />,
      title: "Prise de mesures",
      description: "Prise de mesures précises, soit en atelier soit directement chez vous ou dans votre entreprise.",
      duration: "1 journée"
    },
    {
      icon: <FaCut />,
      title: "Confection",
      description: "Fabrication artisanale dans notre atelier avec un suivi rigoureux de la qualité.",
      duration: "2-3 semaines"
    },
    {
      icon: <FaCheckCircle />,
      title: "Livraison & ajustements",
      description: "Livraison et essayage final avec ajustements si nécessaire pour une satisfaction totale.",
      duration: "1-2 jours"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-900 mb-4 uppercase">
            Notre Processus
            <span className="block text-lg lg:text-xl text-yellow-600 font-normal mt-2">
              4 étapes pour l'excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Un parcours structuré pour garantir qualité, précision et satisfaction à chaque étape.
          </p>
        </div>
        
        {/* Timeline - Version verticale sur mobile/tablette, horizontale sur desktop */}
        <div className="relative">
          {/* Ligne horizontale sur ≥1024px */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
          {/* Ligne verticale sur <1024px */}
          <div className="lg:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecteur mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 h-8 w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>
                  )}
                  
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Contenu */}
                    <div className="bg-white p-5 lg:p-6 rounded-xl shadow-lg border border-blue-100 w-full">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          Étape {index + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-xl lg:text-xl font-bold text-blue-900 mb-3 uppercase">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm lg:text-base mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="text-xs text-gray-500 font-medium">
                          {step.duration}
                        </div>
                        <div className="text-xs text-blue-600 font-medium">
                          {index === steps.length - 1 ? 'Final' : 'Suivant'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Appel à l'action */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-lg lg:text-xl text-gray-600 mb-6">
            Chaque projet commence par une consultation gratuite
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            <span>Commencer maintenant</span>
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}