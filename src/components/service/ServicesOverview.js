// components/ServicesOverview.js
import { FaBuilding, FaUser, FaRulerCombined, FaClipboardCheck } from "react-icons/fa6";

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Nos Services de Confection
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            De la conception à la livraison, nous accompagnons entreprises et particuliers dans la création de vêtements sur mesure qui allient qualité, confort et élégance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <div className="text-blue-700 mb-4">
              <FaBuilding className="text-5xl" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Pour les Entreprises</h3>
            <p className="text-gray-600 mb-6">
              Uniformes professionnels, tenues de travail, vêtements personnalisés pour renforcer l'image de votre marque.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Création d'identité vestimentaire</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Logos brodés ou imprimés</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Grosses et petites quantités</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <div className="text-yellow-500 mb-4">
              <FaRulerCombined className="text-5xl" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Sur Mesure</h3>
            <p className="text-gray-600 mb-6">
              Prise de mesures précises pour un ajustement parfait, quel que soit votre morphologie.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span>Prise de mesures en atelier ou sur site</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span>Ajustements personnalisés</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span>Toile d'essai pour validation</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <div className="text-green-600 mb-4">
              <FaUser className="text-5xl" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Pour les Particuliers</h3>
            <p className="text-gray-600 mb-6">
              Création de vêtements uniques qui expriment votre personnalité et s'adaptent à votre style de vie.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Vêtements de cérémonie</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Tenues professionnelles élégantes</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Créations uniques selon vos souhaits</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-6">Un processus complet de A à Z</h2>
              <p className="text-lg mb-6 opacity-90">
                De la première consultation à la livraison finale, nous gérons chaque étape avec précision et professionnalisme.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <FaClipboardCheck className="text-yellow-300 mr-3" />
                  <span>Consultation gratuite</span>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="text-yellow-300 mr-3" />
                  <span>Prise de mesures</span>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="text-yellow-300 mr-3" />
                  <span>Livraison incluse</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="inline-block bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-lg">années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}