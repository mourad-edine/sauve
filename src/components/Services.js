// components/Services.js
import { FaShirt, FaUsers, FaRulerCombined, FaTruck, FaMedal, FaHeadset } from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      icon: <FaShirt className="text-4xl" />,
      title: "Vêtements d'entreprise",
      description: "Uniformes professionnels, polos personnalisés, vestes de travail sur mesure pour votre équipe."
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Tenues pour particuliers",
      description: "Création de vêtements sur mesure selon vos goûts et mesures pour une élégance unique."
    },
    {
      icon: <FaRulerCombined className="text-4xl" />,
      title: "Sur mesure",
      description: "Prise de mesures précises et ajustements parfaits pour un confort et une coupe optimale."
    },
    {
      icon: <FaTruck className="text-4xl" />,
      title: "Livraison nationale",
      description: "Livraison rapide et sécurisée partout en Madagascar, avec suivi de commande en temps réel."
    },
    {
      icon: <FaMedal className="text-4xl" />,
      title: "Qualité premium",
      description: "Tissus de haute qualité, finitions impeccables et durabilité garantie."
    },
    {
      icon: <FaHeadset className="text-4xl" />,
      title: "Conseil personnalisé",
      description: "Notre équipe vous accompagne dans le choix des modèles, tissus et personnalisations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous offrons une gamme complète de services de confection pour répondre à tous vos besoins vestimentaires
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100"
            >
              <div className="text-blue-700 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}