// components/AboutQuality.js
import { FaStar, FaCheckCircle, FaShieldAlt, FaRecycle, FaHandshake, FaAward } from "react-icons/fa";

export default function AboutQuality() {
  const qualityStandards = [
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: "Contrôle 7 points",
      description: "7 étapes de contrôle qualité pour chaque pièce confectionnée"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Garantie 2 ans",
      description: "Garantie constructeur sur tous nos vêtements contre les défauts de fabrication"
    },
    {
      icon: <FaRecycle className="text-2xl" />,
      title: "Service après-vente",
      description: "Retouches et ajustements gratuits pendant 6 mois après l'achat"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Satisfaction garantie",
      description: "Nous réparons, remplaçons ou remboursons si vous n'êtes pas satisfait"
    }
  ];

  const testimonials = [
    {
      name: "Restaurant Le Gourmet",
      feedback: "Nos uniformes tiennent parfaitement après 2 ans d'utilisation intensive",
      rating: 5
    },
    {
      name: "Hôtel Palace",
      feedback: "La qualité des finitions dépasse nos attentes. Très professionnel.",
      rating: 5
    },
    {
      name: "Clinique Privée",
      feedback: "Tenues lavées quotidiennement, aucune décoloration après 18 mois",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
<<<<<<< HEAD
      
=======
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Notre Engagement Qualité
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La qualité n'est pas un objectif, c'est notre standard quotidien. 
            Découvrez comment nous garantissons l'excellence de chaque création.
          </p>
        </div>

        
        {/* Engagement final */}
        <div className="text-center">
          <div className="inline-block max-w-2xl">
            <div className="text-blue-700 mb-6">
              <FaStar className="text-5xl mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Notre Promesse
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Chaque vêtement que nous créons porte notre signature d'excellence. 
              Nous nous engageons à vous offrir non seulement un produit, 
              mais une expérience et une qualité qui durent dans le temps.
            </p>
            <div className="bg-blue-100 text-blue-800 px-6 py-4 rounded-xl inline-block">
              <span className="font-bold">
Confection Vonjy</span> - où l'excellence devient une habitude
            </div>
          </div>
        </div>
      </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    </section>
  );
}