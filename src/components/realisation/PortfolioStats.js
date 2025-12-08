// components/PortfolioStats.js
import { FaCheckCircle, FaUsers, FaCalendarAlt, FaStar, FaAward } from "react-icons/fa";

export default function PortfolioStats() {
  const stats = [
    {
      icon: <FaCheckCircle className="text-3xl" />,
      value: "850+",
      label: "Projets réalisés",
      description: "Depuis notre création"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      value: "120+",
      label: "Entreprises clientes",
      description: "Tous secteurs confondus"
    },
    {
      icon: <FaCalendarAlt className="text-3xl" />,
      value: "15 ans",
      label: "D'expérience",
      description: "Dans la confection sur mesure"
    },
    {
      icon: <FaStar className="text-3xl" />,
      value: "98%",
      label: "Clients satisfaits",
      description: "Taux de satisfaction"
    }
  ];

  const awards = [
    { year: "2023", title: "Meilleur Artisan Couturier", organization: "Fédération Française de la Couture" },
    { year: "2022", title: "Prix d'Excellence", organization: "Chambre de Métiers de Toamasina" },
    { year: "2021", title: "Label Entreprise du Patrimoine Vivant", organization: "Ministère de l'Économie" },
    { year: "2020", title: "Médaille d'Or", organization: "Concours International de la Couture" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Impact en Chiffres</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Des années d'expertise et des centaines de projets réussis témoignent de notre engagement envers l'excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-yellow-300 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-medium mb-2">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaAward className="text-yellow-300 mr-3" />
                Récompenses & Reconnaissances
              </h3>
              <p className="opacity-90 mb-6">
                Notre engagement pour l'excellence et la qualité a été reconnu à plusieurs reprises par des institutions professionnelles.
              </p>
              <div className="flex items-center">
                <div className="bg-yellow-300 text-blue-900 font-bold px-4 py-2 rounded-lg mr-4">
                  4.9/5
                </div>
                <div>
                  <div className="flex text-yellow-300">
                    {"★".repeat(5)}
                  </div>
                  <div className="text-sm opacity-80">Note moyenne clients</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center bg-white/5 p-4 rounded-xl">
                    <div className="bg-yellow-300 text-blue-900 font-bold px-3 py-1 rounded mr-4">
                      {award.year}
                    </div>
                    <div>
                      <div className="font-medium">{award.title}</div>
                      <div className="text-sm opacity-80">{award.organization}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}