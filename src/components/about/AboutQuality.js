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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Notre Engagement Qualité
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La qualité n'est pas un objectif, c'est notre standard quotidien. 
            Découvrez comment nous garantissons l'excellence de chaque création.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Standards qualité */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-8">Nos Standards d'Excellence</h3>
            <div className="space-y-6">
              {qualityStandards.map((standard, index) => (
                <div key={index} className="flex items-start bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-700 mr-4">
                    {standard.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">{standard.title}</h4>
                    <p className="text-gray-700">{standard.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Process qualité */}
            <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <FaAward className="text-yellow-300 mr-3" />
                Processus Qualité Certifié
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">ISO 9001</div>
                  <div className="text-blue-200 text-sm">Certifié depuis 2018</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">0.2%</div>
                  <div className="text-blue-200 text-sm">Taux de retour produit</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Témoignages qualité */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-8">La Qualité en Pratique</h3>
            
            <div className="mb-8">
              <div className="bg-gradient-to-r from-yellow-50 to-white p-8 rounded-2xl border border-yellow-200">
                <h4 className="text-xl font-bold text-blue-900 mb-6">Durabilité Testée & Approuvée</h4>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-700 mb-2">50+</div>
                    <div className="text-gray-700 text-sm">Lavages tests</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-700 mb-2">1000h</div>
                    <div className="text-gray-700 text-sm">Tests d'usure</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-700 mb-2">30+</div>
                    <div className="text-gray-700 text-sm">Tissus testés/an</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-blue-900 mb-6">Retours d'Expérience</h4>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h5 className="font-bold text-blue-900">{testimonial.name}</h5>
                        <div className="flex text-yellow-500">
                          {"★".repeat(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              <span className="font-bold">ConfectionPro</span> - où l'excellence devient une habitude
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}