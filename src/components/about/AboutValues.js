// components/AboutValues.js
import { FaHandsHelping, FaLeaf, FaRulerCombined, FaMedal, FaUsers, FaHeart , FaFlag, FaSearch, FaShieldAlt, FaLightbulb } from "react-icons/fa";

export default function AboutValues() {
  const values = [
    {
      icon: <FaRulerCombined className="text-3xl" />,
      title: "Exigence du détail",
      description: "Chaque point, chaque couture, chaque finition est réalisée avec une précision extrême.",
      color: "bg-gray-200  text-blue-700"
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Écoute & Conseil",
      description: "Nous prenons le temps de comprendre vos besoins pour vous proposer la meilleure solution.",
      color: "bg-gray-200  text-blue-700"
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Responsabilité",
      description: "Choix de tissus durables et pratiques respectueuses de l'environnement.",
      color: "bg-gray-200  text-blue-700"
    },
    {
      icon: <FaMedal className="text-3xl" />,
      title: "Excellence",
      description: "Nous ne livrons que des créations dont nous sommes parfaitement fiers.",
      color: "bg-gray-200  text-blue-700"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Collaboration",
      description: "Votre projet devient notre projet. Nous travaillons ensemble à sa réussite.",
      color: "bg-gray-200 text-blue-700"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Passion",
      description: "L'amour du beau tissu et du travail bien fait guide chacune de nos actions.",
      color: "bg-gray-200 text-blue-700"
    }
  ];

  const commitments = [
    {
  title: "Fabriqué en Madagascar",
  description: "100% de nos créations sont confectionnées dans notre atelier Toamasinaien",
  icon: <FaFlag className="text-3xl text-blue-600" />
},
{
  title: "Transparence",
  description: "Devis détaillé, suivi de production, traçabilité des tissus",
  icon: <FaSearch className="text-3xl text-gray-700" />
},
{
  title: "Durabilité",
  description: "Garantie 2 ans sur toutes nos créations et service de retouches",
  icon: <FaShieldAlt className="text-3xl text-green-600" />
},
{
  title: "Innovation",
  description: "Veille constante sur les nouvelles techniques et matériaux",
  icon: <FaLightbulb className="text-3xl text-yellow-600" />
}
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Nos Valeurs & Engagements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus que des mots, des principes qui guident chaque décision et chaque réalisation.
          </p>
        </div>
        
        {/* Valeurs fondamentales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200">
              <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
        
        {/* Engagements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center uppercase" >Nos Engagements Concrets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">{commitment.icon}</div>
                <h4 className="text-lg font-bold mb-3">{commitment.title}</h4>
                <p className="text-blue-200 text-sm">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Charte qualité */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-200">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Notre Charte Qualité</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-4">
                    <span className="font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Sélection rigoureuse des tissus</h4>
                    <p className="text-gray-600 text-sm">Testés pour leur résistance, leur confort et leur durabilité</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-4">
                    <span className="font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Contrôles qualité multiples</h4>
                    <p className="text-gray-600 text-sm">À chaque étape de la confection, du patron à la finition</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-4">
                    <span className="font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Essayages systématiques</h4>
                    <p className="text-gray-600 text-sm">Pour un ajustement parfait et une satisfaction garantie</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-blue-900 text-white p-8 rounded-xl text-center">
                <div className="text-5xl font-bold mb-4">98%</div>
                <div className="text-lg font-bold mb-2">Taux de satisfaction</div>
                <div className="text-blue-200">
                  Basé sur nos retours clients des 12 derniers mois
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}