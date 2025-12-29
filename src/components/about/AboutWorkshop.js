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
     
    </section>
  );
}
