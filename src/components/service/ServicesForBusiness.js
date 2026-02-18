"use client";
import {
  FaHotel,
  FaUserMd,
  FaShoppingBag,
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaUserTie,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaShieldHalved, FaPlane } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import CTA from "./CTA";
import Link from "next/link";

export default function ServicesForBusiness() {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [apiImages, setApiImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Base URL pour les images
  const IMAGE_BASE_URL = "https://admin.confection-vonjy.mg/photo_camps/";

  // Récupérer les images depuis l'API entreprise
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://admin.confection-vonjy.mg/api/photo_entreprise');
        const data = await response.json();
        
        if (data && Array.isArray(data)) {
          // Filtrer uniquement les images de type "entreprise"
          const entrepriseImages = data
            .filter(item => item.type_photos === "entreprise")
            .map(item => ({
              id: item.id,
              url: `${IMAGE_BASE_URL}${item.photos}`,
              filename: item.photos,
              type: item.photos.split('.').pop().toLowerCase(),
              createdAt: item.created_at,
              index: item.id // Utiliser l'ID comme index
            }));
          
          console.log("Images chargées:", entrepriseImages);
          setApiImages(entrepriseImages);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des images:", error);
        setApiImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const businessServices = [
    {
      icon: <FaHotel />,
      title: "Hôtellerie & Restauration",
      items: [
        "Uniforme de réception",
        "Tenue de serveur/serveuse",
        "Chefs de cuisine",
        "Vestes de barman",
      ],
      color: "#1E40AF", // Bleu plus foncé
      accent: "#60A5FA", // Bleu plus clair
      initials: "HR",
      overlayColor: "rgba(30, 58, 138, 0.9)",
    },
    {
      icon: <FaUserMd />,
      title: "Médical & Paramédical",
      items: [
        "Blouses médicales",
        "Tenues de chirurgie",
        "Vêtements de laboratoire",
        "Uniforme infirmier",
      ],
      color: "#1E40AF", // Vert foncé (teal)
      accent: "#2DD4BF", // Vert clair (teal)
      initials: "MP",
      overlayColor: "rgba(6, 78, 59, 0.9)",
    },
    {
      icon: <FaShieldHalved />,
      title: "Sécurité & Services",
      items: [
        "Agents de sécurité",
        "Conciergerie",
        "Vêtements maintenance",
        "Tenues de chauffeur",
      ],
      color: "#1E40AF", // Violet foncé
      accent: "#A78BFA", // Violet clair
      initials: "SS",
      overlayColor: "rgba(76, 29, 149, 0.9)",
    },
    {
      icon: <FaShoppingBag />,
      title: "Commerce & Retail",
      items: [
        "Tenues de vendeurs",
        "Uniforme de caissier",
        "Vestes managériales",
        "Polo personnalisé",
      ],
      color: "#1E40AF", // Orange foncé
      accent: "#FDBA74", // Orange clair
      initials: "CR",
      overlayColor: "rgba(124, 45, 18, 0.9)",
    },
    {
      icon: <FaGraduationCap />,
      title: "Éducation & Formation",
      items: [
        "Blouses d'étudiants",
        "Tenues formateurs",
        "Vêtements techniques",
        "Uniforme scolaire",
      ],
      color: "#1E40AF", // Vert émeraude foncé
      accent: "#34D399", // Vert émeraude clair
      initials: "EF",
      overlayColor: "rgba(6, 78, 59, 0.9)",
    },
    {
      icon: <FaPlane />,
      title: "Transport & Logistique",
      items: [
        "Uniforme d'équipage",
        "Tenues pilote/hôtesse",
        "Personnel au sol",
        "Tenues logistique",
      ],
      color: "#1E40AF", // Bleu ciel foncé
      accent: "#38BDF8", // Bleu ciel clair
      initials: "TL",
      overlayColor: "rgba(12, 74, 110, 0.9)",
    },
  ];

  // Fonction pour obtenir une image depuis l'API pour un service spécifique
  const getServiceImage = (serviceIndex) => {
    if (apiImages.length === 0 || loading) {
      // Images de secours avec des thèmes correspondants
      const fallbackImages = [
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Hôtellerie
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Médical
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Sécurité
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Commerce
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Éducation
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Transport
      ];
      return fallbackImages[serviceIndex] || fallbackImages[0];
    }
    
    // Si nous avons plus d'images que de services, utiliser l'image correspondante
    if (serviceIndex < apiImages.length) {
      return apiImages[serviceIndex].url;
    }
    
    // Sinon, utiliser la première image disponible
    return apiImages[0].url;
  };

  const advantages = [
    {
      icon: <FaChartLine className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Image professionnelle",
      description:
        "Renforcez votre image de marque avec des tenues harmonisées et de qualité",
      detailed:
        "Nos uniformes professionnels sont conçus pour refléter l'identité de votre entreprise et créer une impression positive auprès de vos clients.",
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "IP",
    },
    {
      icon: <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Cohésion d'équipe",
      description:
        "Favorisez l'appartenance à l'entreprise et l'esprit d'équipe",
      detailed:
        "Les uniformes créent un sentiment d'unité et renforcent l'identité collective de vos équipes, améliorant la collaboration.",
      color: "#3B82F6",
      accent: "#6EE7B7",
      initials: "CE",
    },
    {
      icon: <FaUserTie className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Confort professionnel",
      description:
        "Vêtements adaptés aux contraintes spécifiques de chaque métier",
      detailed:
        "Nous utilisons des tissus techniques qui offrent confort, respirabilité et durabilité, adaptés aux exigences de chaque poste.",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "CP",
    },
  ];

  const nextAdvantage = useCallback(() => {
    setActiveAdvantage((prev) =>
      prev === advantages.length - 1 ? 0 : prev + 1
    );
  }, [advantages.length]);

  const prevAdvantage = useCallback(() => {
    setActiveAdvantage((prev) =>
      prev === 0 ? advantages.length - 1 : prev - 1
    );
  }, [advantages.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextAdvantage, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, nextAdvantage]);

  const currentAdvantage = advantages[activeAdvantage];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background avec photo d'ingénieur subtile */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-transparent to-white/80" />
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10"></div>

      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Entreprises
                </span>
                <div className="w-6 sm:w-8 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-4 uppercase">
              Solutions professionnelles
              <span className="block text-base sm:text-lg md:text-xl text-yellow-600 font-normal mt-2">
                sur mesure
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6"></div>
          </div>
        </motion.div>

        {/* Indicateur de chargement */}
        {loading && (
          <div className="flex justify-center items-center mb-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="text-gray-600 text-sm">Chargement des images...</p>
            </div>
          </div>
        )}

        {/* Grille des services avec images de l'API */}
        <motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {businessServices.map((service, index) => {
              const serviceImage = getServiceImage(index);
              
              return (
                <motion.div
                  key={index}
                  className="relative h-[400px] overflow-hidden group shadow-md"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Image de l'API en fond */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                      {/* Image structurée */}
                      <div className="relative w-full h-full">
                        <img
                          src={serviceImage}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
                          onError={(e) => {
                            e.target.onerror = null;
                            // Utiliser un dégradé de couleur en cas d'erreur
                            e.target.style.display = 'none';
                          }}
                          loading="lazy"
                        />
                        {/* Overlay coloré */}
                        <div 
                          className="bg-blue-400 absolute inset-0 transition-all duration-700 group-hover:opacity-90"
                          style={{ 
                            opacity: 0.9
                          }}
                        />
                        
                        {/* Effet d'éclairage */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* PNG flottant (image de l'API ou placeholder) */}
                  <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 
                    opacity-70 group-hover:opacity-90 transition-all duration-500 
                    group-hover:scale-110 z-0">
                    <div className="relative w-full h-full">
                      <img
                        src={serviceImage}
                        alt={service.title}
                        className="w-full h-full object-contain filter drop-shadow-2xl"
                        onError={(e) => {
                          e.target.onerror = null;
                          // Remplacer par une icône si l'image échoue
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center">
                              <div class="text-4xl text-white opacity-50">${service.initials}</div>
                            </div>
                          `;
                        }}
                        loading="lazy"
                      />
                      {/* Effet de brillance sur l'image PNG */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="relative h-full p-8 flex flex-col z-10">
                    {/* Icône avec fond contrasté */}
                    <div 
                      className="w-14 h-14 rounded-2xl backdrop-blur-md flex items-center justify-center text-white text-2xl mb-6 shadow-lg border border-white/20"
                      style={{ backgroundColor: service.color + 'CC' }} // Ajouter transparence
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-xl uppercase font-bold text-white mb-4 drop-shadow-lg">
                      {service.title}
                    </h3>

                    <ul className="space-y-3 flex-1">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-white/90 text-sm group/item"
                        >
                          <div className="flex-shrink-0">
                            <div 
                              className="w-2 h-2 rounded-full transition-all duration-300 group-hover/item:scale-150"
                              style={{ backgroundColor: service.accent }}
                            />
                          </div>
                          <span className="group-hover/item:text-white transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact"
                      className="mt-6 flex items-center gap-2 text-white font-semibold group/btn hover:text-yellow-300 transition-colors duration-300"
                      style={{ color: service.accent }}
                    >
                      En savoir plus
                      <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Effet de bordure au survol */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-all duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Indicateur du nombre d'images chargées */}
        {apiImages.length > 0 && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
             
            </div>
          </div>
        )}

        {/* Section des avantages en carrousel */}

        {/* Section CTA */}
        <CTA />
      </div>
    </section>
  );
}