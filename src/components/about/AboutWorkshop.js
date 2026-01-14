// components/AboutWorkshop.js
import {
  FaTools,
  FaUsers,
  FaFlag,
  FaLeaf,
  FaCrown,
  FaAward,
  FaShippingFast,
} from "react-icons/fa";

export default function AboutWorkshop() {
  const workshopFeatures = [
    {
      icon: <FaTools className="text-2xl" />,
      title: "Équipement de pointe",
      description:
        "Machines industrielles et outils spécialisés pour chaque technique",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Espaces dédiés",
      description:
        "Zone design, atelier de coupe, salle de couture et espace essayage",
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      title: "Gestion responsable",
      description:
        "Recyclage des chutes, énergie verte, produits d'entretien écologiques",
    },
    {
      icon: <FaShippingFast className="text-2xl" />,
      title: "Logistique optimisée",
      description: "Process de livraison efficace avec suivi en temps réel",
    },
  ];

  const processes = [
    {
      step: "1",
      title: "Consultation & Design",
      description: "Étude de vos besoins et création des patrons numériques",
    },
    {
      step: "2",
      title: "Coupe & Préparation",
      description: "Découpe précise des tissus selon les patrons validés",
    },
    {
      step: "3",
      title: "Confection",
      description: "Assemblage et couture par nos artisans spécialisés",
    },
    {
      step: "4",
      title: "Finitions & Contrôle",
      description: "Dernières retouches et contrôle qualité rigoureux",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
<<<<<<< HEAD
     
=======
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Notre Atelier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un espace moderne où tradition artisanale et innovation
            technologique se rencontrent pour créer l'exception.
          </p>
        </div>

       <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 md:mb-16">
  {/* Colonne gauche */}
  <div className="w-full lg:w-1/2">
    {/* Description de l'atelier */}
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100 mb-6 md:mb-8">
      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6">
        Un Environnement Inspirant
      </h3>
      <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
        Situé au cœur de Toamasina, notre atelier de 400m² a été
        spécialement conçu pour optimiser chaque étape de la confection.
        La lumière naturelle, l'organisation ergonomique et l'ambiance
        collaborative créent les conditions idéales pour un travail
        d'exception.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {workshopFeatures.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="text-blue-700 mr-3 md:mr-4 mt-1 flex-shrink-0">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-bold text-blue-900 mb-1 text-sm md:text-base">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-xs md:text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Visite virtuelle */}
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 md:p-8 rounded-2xl">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Visitez Notre Atelier
      </h3>
      <p className="opacity-90 mb-4 md:mb-6 text-sm md:text-base">
        Sur rendez-vous, venez découvrir nos processus, rencontrer notre
        équipe et choisir vos tissus dans notre showroom.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 md:py-3 md:px-8 rounded-lg transition duration-300 w-full sm:w-auto text-sm md:text-base">
        Prendre rendez-vous
      </button>
    </div>
  </div>

  {/* Colonne droite - Processus de production */}
  <div className="w-full lg:w-1/2">
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100">
      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 md:mb-8">
        Notre Processus de Production
      </h3>

      <div className="space-y-6 md:space-y-8">
        {processes.map((process, index) => (
          <div key={index} className="flex flex-col sm:flex-row">
            <div className="flex-shrink-0 mb-3 sm:mb-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl sm:mr-4 md:mr-6">
                {process.step}
              </div>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
                {process.title}
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                {process.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Chiffres clés (optionnel) */}
      {/* <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
        <h4 className="text-lg font-bold text-blue-900 mb-4 md:mb-6">
          Notre Production en Chiffres
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-3">
            <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1 md:mb-2">
              15-20
            </div>
            <div className="text-gray-700 text-sm">Projets simultanés</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1 md:mb-2">
              48h
            </div>
            <div className="text-gray-700 text-sm">Délai moyen d'étude</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1 md:mb-2">
              100%
            </div>
            <div className="text-gray-700 text-sm">Traçabilité</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1 md:mb-2">
              0 défaut
            </div>
            <div className="text-gray-700 text-sm">Tolérance qualité</div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>

        {/* <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            Certifications & Labels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "Entreprise du Patrimoine Vivant",
                year: "2021",
                icon: <FaCrown className="text-4xl text-yellow-500" />,
              },
              {
                label: "Origine Madagascar Garantie",
                year: "2023",
                icon: <FaFlag className="text-4xl text-blue-600" />,
              },
              {
                label: "RSE Niveau Or",
                year: "2022",
                icon: <FaLeaf className="text-4xl text-green-600" />,
              },
              {
                label: "Artisanat d'Excellence",
                year: "2020",
                icon: <FaAward className="text-4xl text-purple-600" />,
              },
            ].map((certification, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <div className="mb-4">{certification.icon}</div>
                <div className="font-bold text-blue-900 mb-2">
                  {certification.label}
                </div>
                <div className="text-sm text-gray-600">
                  Obtenu en {certification.year}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    </section>
  );
}
