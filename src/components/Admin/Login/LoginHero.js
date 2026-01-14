// components/LoginHero.js
import { FaShieldAlt, FaUserCheck, FaRocket, FaHeadset } from "react-icons/fa";

export default function LoginHero() {
  const features = [
    {
      icon: <FaUserCheck className="text-3xl" />,
      title: "Accès personnel",
      description: "Votre espace client dédié"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Sécurité maximale",
      description: "Données protégées et chiffrées"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Suivi en temps réel",
      description: "Suivez vos commandes 24/7"
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "Support prioritaire",
      description: "Assistance dédiée"
    }
  ];

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bienvenue dans<br />
            <span className="text-yellow-300">votre espace client</span>
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Gérez vos projets, suivez vos commandes et accédez à des fonctionnalités exclusives.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Statistiques */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Notre communauté</h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-blue-200">Clients actifs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-blue-200">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>

        {/* Témoignage */}
        <div className="mt-12 text-center">
          <div className="inline-block max-w-lg">
            <p className="text-xl text-white italic mb-6">
              "Grâce à l'espace client, je peux suivre l'avancement de mes uniformes en temps réel. 
              Un vrai gain de temps et de tranquillité d'esprit."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-blue-900 mr-4">
                DL
              </div>
              <div className="text-left">
                <div className="font-bold text-white">David Lambert</div>
                <div className="text-blue-200">Directeur, Hôtel Royal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}