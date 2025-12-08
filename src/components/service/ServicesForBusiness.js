// components/ServicesForBusiness.js
import { 
  FaHotel, 
  FaUtensils, 
  FaUserMd, 
  FaCar, 
  FaGraduationCap, 
  FaShoppingBag,
  FaChartLine,
  FaUsers,
  FaUserTie
} from "react-icons/fa";
import { FaShieldHalved, FaPlane } from "react-icons/fa6";

export default function ServicesForBusiness() {
  const businessServices = [
    {
      icon: <FaHotel className="text-3xl" />,
      title: "Hôtellerie & Restauration",
      items: ["Uniforme de réception", "Tenue de serveur/serveuse", "Chefs de cuisine", "Vestes de barman"]
    },
    {
      icon: <FaUserMd className="text-3xl" />,
      title: "Médical & Paramédical",
      items: ["Blouses médicales", "Tenues de chirurgie", "Vêtements de laboratoire", "Uniforme infirmier"]
    },
    {
      icon: <FaShieldHalved className="text-3xl" />,
      title: "Sécurité & Services",
      items: ["Tenues d'agents de sécurité", "Uniforme de conciergerie", "Vêtements de maintenance", "Tenues de chauffeur"]
    },
    {
      icon: <FaShoppingBag className="text-3xl" />,
      title: "Commerce & Retail",
      items: ["Tenues de vendeurs", "Uniforme de caissier", "Vestes managériales", "Polo personnalisé"]
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Éducation & Formation",
      items: ["Blouses d'étudiants", "Tenues de formateurs", "Vêtements techniques", "Uniforme scolaire/professionnel"]
    },
    {
      icon: <FaPlane className="text-3xl" />,
      title: "Transport & Logistique",
      items: ["Uniforme d'équipage", "Tenues de pilote/hôtesse", "Vêtements de personnel au sol", "Tenues de logistique"]
    }
  ];

  const advantages = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Image professionnelle",
      description: "Renforcez votre image de marque avec des tenues harmonisées et de qualité"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Cohésion d'équipe",
      description: "Favorisez l'appartenance à l'entreprise et l'esprit d'équipe"
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Confort professionnel",
      description: "Vêtements adaptés aux contraintes spécifiques de chaque métier"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Services pour les Entreprises
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous créons des vêtements professionnels qui renforcent votre image de marque et améliorent l'expérience de vos équipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businessServices.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <div className="text-blue-700 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 uppercase">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Avantages pour votre entreprise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-700">
                    {advantage.icon}
                  </div>
                </div>
                <h4 className="font-bold text-blue-900 mb-2 uppercase">{advantage.title}</h4>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}