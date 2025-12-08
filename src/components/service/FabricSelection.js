import { 
  FaThermometerHalf, 
  FaLeaf, 
  FaFire, 
  FaTint,
  FaTree,
  FaShieldAlt,
  FaStar,
  FaExchangeAlt
} from "react-icons/fa";

export default function FabricSelection() {
  const fabricTypes = [
    {
      name: "Coton",
      description: "Confortable, respirant et facile d'entretien",
      uses: ["Chemises", "Polos", "Blouses", "Robes"],
      icon: <FaLeaf className="text-green-600" />
    },
    {
      name: "Laine",
      description: "Chaude, élégante et naturelle",
      uses: ["Costumes", "Manteaux", "Pulls", "Jupes"],
      icon: <FaThermometerHalf className="text-orange-600" />
    },
    {
      name: "Lin",
      description: "Léger, absorbant et idéal pour l'été",
      uses: ["Chemises d'été", "Robes", "Pantalons", "Vestes"],
      icon: <FaTint className="text-blue-500" />
    },
    {
      name: "Polyester technique",
      description: "Résistant, infroissable et performant",
      uses: ["Vêtements de travail", "Tenues sport", "Uniforme", "Vêtements techniques"],
      icon: <FaFire className="text-red-600" />
    },
    {
      name: "Soie",
      description: "Luxueux, léger et brillant",
      uses: ["Chemisiers", "Cravates", "Accessoires", "Tenues de soirée"],
      icon: <FaStar className="text-yellow-500" />
    },
    {
      name: "Mélanges",
      description: "Alliage des meilleures propriétés",
      uses: ["Costumes", "Pantalons", "Vestes", "Tenues professionnelles"],
      icon: <FaExchangeAlt className="text-purple-600" />
    }
  ];
  const fabricProperties = [
    {
      icon: <FaThermometerHalf className="text-2xl" />,
      title: "Régulation thermique",
      description: "Tissus adaptés à chaque saison et environnement"
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      title: "Éco-responsables",
      description: "Gamme de tissus durables et certifiés"
    },
    {
      icon: <FaFire className="text-2xl" />,
      title: "Résistance",
      description: "Tissus techniques pour usages intensifs"
    },
    {
      icon: <FaTint className="text-2xl" />,
      title: "Entretien facile",
      description: "Choix selon vos contraintes d'entretien"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Sélection de Tissus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez parmi notre vaste gamme de tissus de qualité, adaptés à chaque usage et préférence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fabricTypes.map((fabric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{fabric.icon}</div>
                <h3 className="text-xl font-bold text-blue-900">{fabric.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{fabric.description}</p>
              <div className="mb-4">
                <h4 className="font-bold text-blue-800 mb-2">Idéal pour :</h4>
                <div className="flex flex-wrap gap-2">
                  {fabric.uses.map((use, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            Propriétés des tissus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricProperties.map((property, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl">
                <div className="text-yellow-300 mb-4">
                  {property.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{property.title}</h4>
                <p className="text-blue-200 text-sm">{property.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Échantillons de tissus
              </h3>
              <p className="text-gray-600 mb-6">
                Nous mettons à votre disposition des échantillons de tissus pour vous aider à faire le bon choix. 
                Contactez-nous pour recevoir notre gamme d'échantillons ou pour prendre rendez-vous en atelier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Demander des échantillons
                </button>
                <button className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition duration-300">
                  Voir le catalogue complet
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-lg">Tissus disponibles</div>
                  <div className="text-blue-200 text-sm mt-2">
                    Couleurs et textures variées
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}