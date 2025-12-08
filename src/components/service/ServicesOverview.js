// components/ServicesOverview.js
import {
  FaBuilding,
  FaUser,
  FaRulerCombined,
  FaClipboardCheck,
} from "react-icons/fa6";

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
  <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-blue-900 mb-4 uppercase">
    Nos Services de Confection
  </h1>
  {/* <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
    De la conception à la livraison, nous accompagnons entreprises et
    particuliers dans la création de vêtements sur mesure qui allient
    qualité, confort et élégance.
  </p> */}
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
  {/* Carte avec design moderne */}
  {[
    {
      icon: <FaBuilding />,
      title: "Pour les Entreprises",
      description: "Uniformes professionnels, tenues de travail, vêtements personnalisés pour renforcer l'image de votre marque.",
      items: ["Création d'identité vestimentaire", "Logos brodés ou imprimés", "Grosses et petites quantités"],
      color: "blue"
    },
    {
      icon: <FaRulerCombined />,
      title: "Sur Mesure",
      description: "Prise de mesures précises pour un ajustement parfait, quel que soit votre morphologie.",
      items: ["Prise de mesures en atelier ou sur site", "Ajustements personnalisés", "Toile d'essai pour validation"],
      color: "blue"
    },
    {
      icon: <FaUser />,
      title: "Pour les Particuliers",
      description: "Création de vêtements uniques qui expriment votre personnalité et s'adaptent à votre style de vie.",
      items: ["Vêtements de cérémonie", "Tenues professionnelles élégantes", "Créations uniques selon vos souhaits"],
      color: "blue"
    }
  ].map((service, index) => (
    <div 
      key={index}
      className="group bg-white p-6 md:p-7 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200"
    >
      {/* En-tête avec icône */}
      <div className="flex items-start mb-6">
        <div className={`p-3 rounded-lg bg-${service.color}-50 group-hover:bg-${service.color}-100 transition-colors duration-300`}>
          <div className={`text-2xl md:text-3xl text-${service.color}-600`}>
            {service.icon}
          </div>
        </div>
        <h3 className="text-xl md:text-xl font-bold text-blue-900 ml-4 pt-1 uppercase">
          {service.title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
        {service.description}
      </p>
      
      {/* Liste à puces */}
      <ul className="space-y-3">
        {service.items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <div className="flex-shrink-0 mt-1.5">
              <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3`}></div>
            </div>
            <span className="text-gray-700 text-sm md:text-base">{item}</span>
          </li>
        ))}
      </ul>
      
      {/* Bouton invisible pour l'interaction */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <span className={`text-${service.color}-600 font-medium text-sm md:text-base inline-flex items-center`}>
          En savoir plus
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  ))}
</div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10">
            {/* Contenu principal */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Un processus complet de A à Z
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed">
                De la première consultation à la livraison finale, nous gérons
                chaque étape avec précision et professionnalisme.
              </p>

              {/* Éléments en colonne sur mobile, en grille sur desktop */}
              <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                <div className="flex items-center">
                  <FaClipboardCheck className="text-yellow-300 mr-3 text-lg" />
                  <span className="text-base md:text-lg">
                    Consultation gratuite
                  </span>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="text-yellow-300 mr-3 text-lg" />
                  <span className="text-base md:text-lg">Prise de mesures</span>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="text-yellow-300 mr-3 text-lg" />
                  <span className="text-base md:text-lg">
                    Livraison incluse
                  </span>
                </div>
              </div>
            </div>

            {/* Statistique */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white/20 p-6 md:p-8 rounded-xl backdrop-blur-sm text-center max-w-xs mx-auto lg:mx-0">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  15+
                </div>
                <div className="text-lg md:text-xl">années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
