// components/AboutQuality.js
import { FaStar, FaCheckCircle, FaShieldAlt, FaRecycle, FaHandshake, FaAward } from "react-icons/fa";

export default function AboutQuality() {
  const qualityStandards = [
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: "Contrôle 7 points",
      description: "7 étapes de contrôle qualité pour chaque pièce confectionnée"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Garantie 2 ans",
      description: "Garantie constructeur sur tous nos vêtements contre les défauts de fabrication"
    },
    {
      icon: <FaRecycle className="text-2xl" />,
      title: "Service après-vente",
      description: "Retouches et ajustements gratuits pendant 6 mois après l'achat"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Satisfaction garantie",
      description: "Nous réparons, remplaçons ou remboursons si vous n'êtes pas satisfait"
    }
  ];

  const testimonials = [
    {
      name: "Restaurant Le Gourmet",
      feedback: "Nos uniformes tiennent parfaitement après 2 ans d'utilisation intensive",
      rating: 5
    },
    {
      name: "Hôtel Palace",
      feedback: "La qualité des finitions dépasse nos attentes. Très professionnel.",
      rating: 5
    },
    {
      name: "Clinique Privée",
      feedback: "Tenues lavées quotidiennement, aucune décoloration après 18 mois",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      
    </section>
  );
}