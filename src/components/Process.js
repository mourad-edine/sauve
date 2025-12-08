// components/Process.js
import { FaSearch, FaRuler, FaCut, FaCheckCircle } from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: "Consultation",
      description: "Échange sur vos besoins, choix des modèles et des tissus adaptés à vos exigences."
    },
    {
      icon: <FaRuler className="text-3xl" />,
      title: "Prise de mesures",
      description: "Prise de mesures précises, soit en atelier soit directement chez vous ou dans votre entreprise."
    },
    {
      icon: <FaCut className="text-3xl" />,
      title: "Confection",
      description: "Fabrication artisanale dans notre atelier avec un suivi rigoureux de la qualité."
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Livraison & ajustements",
      description: "Livraison et essayage final avec ajustements si nécessaire pour une satisfaction totale."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Notre Processus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus en 4 étapes pour garantir votre satisfaction totale
          </p>
        </div>
        
        <div className="relative">
          {/* Ligne de connexion pour les écrans moyens et grands */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-300 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center text-blue-700 shadow-lg border-4 border-white mb-6">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-blue-900 font-bold text-lg mb-2">Étape {index + 1}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}