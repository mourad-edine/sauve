// data/galleryData.js
export const galleryImages = [
  {
    id: 1,
    src: "/images/galerie/uniformes-entreprise-1.jpg",
    alt: "Uniformes d'entreprise sur mesure",
    title: "Uniformes professionnels",
    category: "entreprise",
    description: "Collection complète d'uniformes pour entreprises"
  },
  {
    id: 2,
    src: "/images/galerie/chemises-sur-mesure-1.jpg",
    alt: "Chemises sur mesure pour homme",
    title: "Chemises personnalisées",
    category: "particulier",
    description: "Chemises ajustées avec détails sur mesure"
  },
  {
    id: 3,
    src: "/images/galerie/vetements-medical-1.jpg",
    alt: "Vêtements médicaux personnalisés",
    title: "Tenues médicales",
    category: "medical",
    description: "Blouses et tuniques pour professionnels de santé"
  },
  {
    id: 4,
    src: "/images/galerie/robes-soiree-1.jpg",
    alt: "Robe de soirée sur mesure",
    title: "Robes de soirée",
    category: "particulier",
    description: "Robe élégante pour occasion spéciale"
  },
  {
    id: 5,
    src: "/images/galerie/uniformes-restaurant-1.jpg",
    alt: "Uniformes de restaurant",
    title: "Tenues restauration",
    category: "hotellerie",
    description: "Tabliers et uniformes pour personnel de restaurant"
  },
  {
    id: 6,
    src: "/images/galerie/costumes-affaires-1.jpg",
    alt: "Costumes d'affaires sur mesure",
    title: "Costumes professionnels",
    category: "entreprise",
    description: "Costumes ajustés pour le monde des affaires"
  },
  {
    id: 7,
    src: "/images/galerie/uniformes-securite-1.jpg",
    alt: "Uniformes de sécurité",
    title: "Tenues de sécurité",
    category: "securite",
    description: "Vêtements techniques pour agents de sécurité"
  },
  {
    id: 8,
    src: "/images/galerie/vestes-travail-1.jpg",
    alt: "Vestes de travail personnalisées",
    title: "Vestes professionnelles",
    category: "entreprise",
    description: "Vestes avec logo d'entreprise brodé"
  },
  {
    id: 9,
    src: "/images/galerie/tailleurs-femmes-1.jpg",
    alt: "Tailleurs pour femmes",
    title: "Tailleurs sur mesure",
    category: "particulier",
    description: "Ensembles tailleur ajustés"
  },
  {
    id: 10,
    src: "/images/galerie/uniformes-hotel-1.jpg",
    alt: "Uniformes d'hôtel",
    title: "Tenues hôtellerie",
    category: "hotellerie",
    description: "Uniforme complet pour personnel d'hôtel"
  },

  {
    id: 11,
    src: "/images/galerie/chemises-sur-mesure-1.jpg",
    alt: "Chemises sur mesure pour homme",
    title: "Chemises personnalisées",
    category: "particulier",
    description: "Chemises ajustées avec détails sur mesure"
  },
  {
    id: 12,
    src: "/images/galerie/vetements-medical-1.jpg",
    alt: "Vêtements médicaux personnalisés",
    title: "Tenues médicales",
    category: "medical",
    description: "Blouses et tuniques pour professionnels de santé"
  },
  {
    id: 13,
    src: "/images/galerie/robes-soiree-1.jpg",
    alt: "Robe de soirée sur mesure",
    title: "Robes de soirée",
    category: "particulier",
    description: "Robe élégante pour occasion spéciale"
  },
  {
    id: 14,
    src: "/images/galerie/uniformes-restaurant-1.jpg",
    alt: "Uniformes de restaurant",
    title: "Tenues restauration",
    category: "hotellerie",
    description: "Tabliers et uniformes pour personnel de restaurant"
  },
  {
    id: 15,
    src: "/images/galerie/costumes-affaires-1.jpg",
    alt: "Costumes d'affaires sur mesure",
    title: "Costumes professionnels",
    category: "entreprise",
    description: "Costumes ajustés pour le monde des affaires"
  },
  {
    id: 16,
    src: "/images/galerie/uniformes-securite-1.jpg",
    alt: "Uniformes de sécurité",
    title: "Tenues de sécurité",
    category: "securite",
    description: "Vêtements techniques pour agents de sécurité"
  },
  {
    id: 17,
    src: "/images/galerie/vestes-travail-1.jpg",
    alt: "Vestes de travail personnalisées",
    title: "Vestes professionnelles",
    category: "entreprise",
    description: "Vestes avec logo d'entreprise brodé"
  },
  {
    id: 18,
    src: "/images/galerie/tailleurs-femmes-1.jpg",
    alt: "Tailleurs pour femmes",
    title: "Tailleurs sur mesure",
    category: "particulier",
    description: "Ensembles tailleur ajustés"
  },
  {
    id: 19,
    src: "/images/galerie/uniformes-hotel-1.jpg",
    alt: "Uniformes d'hôtel",
    title: "Tenues hôtellerie",
    category: "hotellerie",
    description: "Uniforme complet pour personnel d'hôtel"
  },
  // Ajoutez plus d'images ici...
];

export const categories = [
  { id: 'tous', name: 'Toutes les catégories', count: galleryImages.length },
  { id: 'entreprise', name: 'Entreprises', count: galleryImages.filter(img => img.category === 'entreprise').length },
  { id: 'particulier', name: 'Particuliers', count: galleryImages.filter(img => img.category === 'particulier').length },
  { id: 'medical', name: 'Médical', count: galleryImages.filter(img => img.category === 'medical').length },
  { id: 'hotellerie', name: 'Hôtellerie', count: galleryImages.filter(img => img.category === 'hotellerie').length },
  { id: 'securite', name: 'Sécurité', count: galleryImages.filter(img => img.category === 'securite').length },
];