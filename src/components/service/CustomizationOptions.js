// components/CustomizationOptions.js
import { FaVectorSquare, FaTags, FaPalette } from "react-icons/fa6";

export default function CustomizationOptions() {
  const customizations = [
    {
      icon: <FaVectorSquare className="text-3xl" />,
      title: "Broderie",
      description: "Broderie de haute précision pour logos, noms ou motifs",
      options: ["Fil polyester", "Fil métallique", "3D puff", "Broderie sequin"]
    },
    {
      icon: <FaVectorSquare className="text-3xl" />,
      title: "Impression",
      description: "Impression numérique ou sérigraphie de qualité professionnelle",
      options: ["DTG (Direct to Garment)", "Sérigraphie", "Sublimation", "Flex & Flock"]
    },
    {
      icon: <FaTags className="text-3xl" />,
      title: "Étiquettes",
      description: "Étiquettes personnalisées pour une finition professionnelle",
      options: ["Étiquette tissée", "Étiquette imprimée", "Étiquette cuir", "Étiquette de taille"]
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Couleurs & Finitions",
      description: "Choix parmi une large gamme de couleurs et finitions",
      options: ["Couleurs Pantone", "Finitions spéciales", "Effets texture", "Traitements techniques"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Options de Personnalisation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Donnez vie à votre identité visuelle avec nos multiples options de personnalisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {customizations.map((custom, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-blue-700 mb-4">
                {custom.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{custom.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{custom.description}</p>
              <ul className="space-y-2">
                {custom.options.map((option, idx) => (
                  <li key={idx} className="text-gray-700 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Conseil en personnalisation
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe vous guide dans le choix des meilleures options de personnalisation selon vos besoins, 
                votre budget et les contraintes techniques de vos vêtements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-blue-700 font-bold text-lg mb-1">Échantillons gratuits</div>
                  <div className="text-gray-600 text-sm">Sur demande pour vos tests</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-blue-700 font-bold text-lg mb-1">Guide des finitions</div>
                  <div className="text-gray-600 text-sm">Documentation complète fournie</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-blue-900 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-lg">Options disponibles</div>
                <div className="text-blue-200 text-sm mt-2">
                  Pour une personnalisation unique
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}