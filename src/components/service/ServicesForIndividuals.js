// components/ServicesForIndividuals.js
import { FaHeart, FaRing, FaBriefcase, FaTshirt, FaFemale, FaMale } from "react-icons/fa";

export default function ServicesForIndividuals() {
  const individualServices = [
    {
      icon: <FaRing className="text-3xl" />,
      title: "Tenues de cérémonie",
      description: "Robes de mariée, costumes sur mesure, tenues de soirée élégantes",
      features: ["Essayages multiples", "Tissus luxueux", "Broderies personnalisées"]
    },
    {
      icon: <FaBriefcase className="text-3xl" />,
      title: "Vêtements professionnels",
      description: "Costumes sur mesure, tailleurs, chemises pour une élégance au travail",
      features: ["Coupe parfaite", "Tissus professionnels", "Finitions impeccables"]
    },
    {
      icon: <FaTshirt className="text-3xl" />,
      title: "Vêtements du quotidien",
      description: "Créations uniques pour votre garde-robe personnelle",
      features: ["Style personnalisé", "Confort optimal", "Durabilité garantie"]
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Créations spéciales",
      description: "Vêtements pour occasions spéciales ou besoins particuliers",
      features: ["Design sur mesure", "Adaptation morphologique", "Consultation styliste"]
    }
  ];

  const benefits = [
    {
      icon: <FaFemale className="text-2xl" />,
      title: "Pour elle",
      items: ["Robes sur mesure", "Tailleurs élégants", "Manteaux", "Jupes et pantalons"]
    },
    {
      icon: <FaMale className="text-2xl" />,
      title: "Pour lui",
      items: ["Costumes sur mesure", "Chemises personnalisées", "Vestes", "Pantalons ajustés"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Services pour les Particuliers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exprimez votre style unique avec des vêtements créés spécialement pour vous, selon vos mesures et vos préférences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {individualServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <div className="text-yellow-500 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold">{benefit.title}</h4>
                </div>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center uppercase">
            Le processus pour particuliers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-blue-700">1</span>
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Consultation</h4>
              <p className="text-gray-600 text-sm">Échange sur vos besoins et inspirations</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-blue-700">2</span>
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Choix & Mesures</h4>
              <p className="text-gray-600 text-sm">Sélection des tissus et prise de mesures précises</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-blue-700">3</span>
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Confection</h4>
              <p className="text-gray-600 text-sm">Fabrication artisanale avec suivis réguliers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-blue-700">4</span>
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Essayage final</h4>
              <p className="text-gray-600 text-sm">Ajustements finaux pour une perfection absolue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}