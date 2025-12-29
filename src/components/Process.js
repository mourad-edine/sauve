// components/Process.js - Version timeline avec cartes de même hauteur
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* En-tête - Style original */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Notre Processus
            <span className="block text-lg md:text-xl text-yellow-600 font-normal mt-2">
              4 étapes pour l'excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Un parcours structuré pour garantir qualité, précision et satisfaction à chaque étape.
          </p>
        </div>
        
        {/* Timeline - Version verticale sur mobile, horizontale sur desktop */}
        <div className="relative">
          {/* Ligne verticale pour mobile, horizontale pour desktop */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecteur mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute top-full left-1/2 h-8 w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>
                  )}
                  
                  {/* Conteneur avec hauteur égale */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left h-full">
                    
                    {/* Carte avec hauteur égale */}
                    <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-blue-100 w-full h-full flex flex-col">
                      {/* En-tête avec badge */}
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          Étape {index + 1}
                        </span>
                      </div>
                      
                      {/* Titre - Hauteur fixe */}
                      <h3 className="text-xl md:text-xl font-bold text-blue-900 mb-3 uppercase min-h-[3rem]">
                        {step.title}
                      </h3>
                      
                      {/* Icône au-dessus de la description */}
                      <div className="mb-3 text-blue-600 text-2xl">
                        {step.icon}
                      </div>
                      
                      {/* Description - Remplit l'espace disponible */}
                      <div className="flex-1 mb-4">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Footer - Toujours en bas */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
  <div className="text-xs text-gray-500 font-medium flex items-center gap-1">
    {/* Horloge */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M12 7v5l3 2" strokeWidth="2" strokeLinecap="round" />
    </svg>

    {step.duration}
  </div>

  <div className="text-xs text-blue-600 font-medium flex items-center gap-1">
    {index === steps.length - 1 ? (
      <>
        {/* Check */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.29 7.71l-1.41-1.41z" />
        </svg>
        Final
      </>
    ) : (
      <>
        {/* Play */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        Suivant
      </>
    )}
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
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-6">
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