// components/Clients.js
import { FaQuoteLeft } from "react-icons/fa";

export default function Clients() {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Directrice, Hôtel Le Majestique",
      text: "Les uniformes pour notre personnel ont considérablement amélioré notre image professionnelle. Qualité exceptionnelle et service impeccable.",
      image: "MD"
    },
    {
      name: "Thomas Leroy",
      company: "Gérant, Café Central",
      text: "Nous commandons régulièrement des tabliers et t-shirts personnalisés. Toujours parfaitement réalisés et livrés dans les délais.",
      image: "TL"
    },
    {
      name: "Sophie Martin",
      company: "Particulier",
      text: "J'ai fait confectionner une robe sur mesure pour mon mariage. Le résultat était exactement ce que j'imaginais, même mieux !",
      image: "SM"
    }
  ];

  const clients = [
    "Restaurant Gastronomique", "Clinique Médicale", "Société de Sécurité", 
    "Hôtel 4 étoiles", "Salon de Coiffure", "Auto-école", 
    "Compagnie Aérienne", "Magasin de Luxe"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Ils nous font confiance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des centaines d'entreprises et de particuliers satisfaits depuis plus de 15 ans
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Témoignages */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center lg:text-left">Témoignages</h3>
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                  <FaQuoteLeft className="text-blue-300 text-2xl mb-4" />
                  <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Clients */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center lg:text-left">Secteurs d'activité</h3>
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-xl shadow-lg">
              <p className="text-xl mb-8">
                Nous confectionnons des vêtements pour de nombreux secteurs d'activité :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clients.map((client, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-lg">{client}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-4 bg-blue-800/50 rounded-lg">
                <p className="text-center">
                  <span className="text-3xl font-bold">15+</span> années d'expérience<br/>
                  <span className="text-lg">dans la confection sur mesure</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}