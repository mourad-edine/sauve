"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaTools,
  FaRulerCombined,
  FaUsers,
  FaShippingFast,
  FaMagic,
  FaAward,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

export default function ServicesHero() {
  const [photoCouverture, setPhotoCouverture] = useState("https://www.pngarts.com/files/3/Men-Suit-PNG-Transparent-Image.png");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotoCouverture = async () => {
      try {
        const response = await fetch('https://admin.confection-vonjy.mg/api/getCouverture/service');
        const data = await response.json();
        
        if (data.photos_couverture) {
          setPhotoCouverture(`https://admin.confection-vonjy.mg/couverture/${data.photos_couverture}`);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de la photo de couverture:", error);
        // Garder l'image par défaut en cas d'erreur
        setPhotoCouverture("https://www.pngarts.com/files/3/Men-Suit-PNG-Transparent-Image.png");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotoCouverture();
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20">
      
      {/* --- VOS ÉLÉMENTS DÉCORATIFS (Gardés à l'identique) --- */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: "60px 60px" }}></div>
      </div>

      {/* Contenu Principal */}
      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLONNE GAUCHE : TEXTES */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Badge */}
            <div className="relative mb-6 inline-block">
              <div className="absolute -inset-4 bg-teal-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-3">
                <FaStar className="animate-pulse" />
                <span>Expertise & Excellence</span>
              </div>
            </div>

            {/* Titre */}
            <h1 className="text-center lg:text-left mb-8">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-tighter text-white/90">
                NOS
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider mt-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-teal-500">
                Services
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-md md:text-xl text-center lg:text-left text-blue-100 font-light leading-relaxed max-w-xl mb-10">
              Des solutions <span className="font-bold text-teal-300">sur mesure</span> alliant 
              <span className="font-bold text-teal-300"> savoir-faire artisanal</span> et 
              <span className="font-bold text-teal-300"> technologies innovantes</span>.
            </p>

            {/* Séparateur */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal-500"></div>
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-ping"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-teal-500"></div>
            </div>
          </div>

          {/* COLONNE DROITE : LA PHOTO DE COUVERTURE */}
          <div className="relative flex justify-center items-center">
            {/* Halo lumineux derrière l'image */}
            <div className="absolute w-[80%] h-[80%] bg-teal-500/20 blur-[120px] rounded-full"></div>
            
            {isLoading ? (
              <div className="relative z-10 w-full max-w-[500px] h-[400px] bg-blue-800/50 rounded-2xl animate-pulse flex items-center justify-center">
                <div className="text-teal-500 text-lg">Chargement de l'image...</div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[500px] h-auto"
              >
                <Image
                  src={photoCouverture}
                  alt="Services Illustration"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] animate-float-slow rounded-2xl"
                  sizes="(max-width: 768px) 400px, 500px"
                  priority
                />
              </motion.div>
            )}

            {/* Badge flottant sur l'image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-10 right-6 bg-gradient-to-r from-teal-600 to-blue-700 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg z-20"
            >
              <FaAward />
              <span>100% Personnalisé</span>
            </motion.div>
          </div>
        </div>

        {/* --- GRILLE DE SERVICES (Re-centrée) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-sm p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2"
            >
               <div className={`text-3xl mb-4 ${service.color}`}>{service.icon}</div>
               <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
               <p className="text-blue-100/70 text-xs leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Styles d'animation personnalisés */}
      <style jsx>{`
        .animate-float-slow {
          animation: float-custom 6s ease-in-out infinite;
        }
        @keyframes float-custom {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  );
}

// Données des services
const services = [
  {
    icon: <FaTools className="text-teal-400" />,
    title: "Conception Sur Mesure",
    description:
      "Création de vêtements et équipements personnalisés selon vos besoins spécifiques",
    color: "text-teal-400",
    features: [
      "Design personnalisé",
      "Prise de mesures précises",
      "Choix des matériaux",
      "Prototypes avant production",
    ],
  },
  {
    icon: <FaRulerCombined className="text-blue-400" />,
    title: "Confection d'Uniformes",
    description:
      "Fabrication d'uniformes professionnels pour entreprises et institutions",
    color: "text-blue-400",
    features: [
      "Uniformes d'entreprise",
      "Tenues médicales",
      "Vêtements de sécurité",
      "Broderie personnalisée",
    ],
  },
  {
    icon: <FaUsers className="text-amber-400" />,
    title: "Équipements de Groupe",
    description:
      "Solutions complètes pour les camps, équipes et groupes organisés",
    color: "text-amber-400",
    features: [
      "Tenues de camp complètes",
      "Équipements collectifs",
      "Logos personnalisés",
      "Livraison groupée",
    ],
  },
  {
    icon: <FaShippingFast className="text-cyan-400" />,
    title: "Service Après-Vente",
    description:
      "Support continu et services d'entretien pour garantir la longévité",
    color: "text-cyan-400",
    features: [
      "Réparations et ajustements",
      "Entretien professionnel",
      "Pièces de rechange",
      "Conseils d'utilisation",
    ],
  },
];