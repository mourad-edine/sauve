"use client";
import React from "react";
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
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800">
      {/* Pattern de fond élégant */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Éléments flottants décoratifs */}
      <div className="absolute top-1/4 left-10 animate-float-slow">
        <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
          <FaTools className="text-teal-400/50 text-lg" />
        </div>
      </div>
      <div className="absolute top-1/3 right-20 animate-float-medium">
        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
          <FaRulerCombined className="text-white/50 text-sm" />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float-fast">
        <div className="w-6 h-6 rounded-full bg-emerald-400/30 flex items-center justify-center">
          <FaUsers className="text-emerald-300/50 text-xs" />
        </div>
      </div>
      <div className="absolute top-1/2 right-1/3 animate-float-slow">
        <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
          <FaShippingFast className="text-amber-400/50 text-xl" />
        </div>
      </div>

      {/* Lignes d'énergie */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* En-tête avec badge */}
          <div className="flex flex-col items-center mb-8 md:mb-12 pt-8">
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-teal-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-3">
                <FaStar className="animate-pulse" />
                <span>Expertise & Excellence</span>
                <FaAward className="animate-spin-slow" />
              </div>
            </div>
          </div>

          {/* Titre principal */}
          <div className="relative mb-10">
            <div className="absolute -inset-3 bg-gradient-to-r from-teal-500/20 via-transparent to-emerald-500/20 blur-3xl rounded-full"></div>
            <h1 className="relative text-center">
              <span className="block text-2xl md:text-5xl lg:text-6xl font-light uppercase tracking-tighter text-white/90">
                NOS
              </span>
              <span className="block text-2xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mt-2 md:mt-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-500">
                  Services
                </span>
              </span>
            </h1>
          </div>

          {/* Sous-titre avec icônes */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-12 md:mb-16">
            <div className="hidden md:block">
              <FaMagic className="text-teal-400 text-3xl animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl lg:text-2xl text-center text-emerald-100 font-light leading-relaxed max-w-4xl">
              Des solutions{" "}
              <span className="font-bold text-teal-300">sur mesure</span>{" "}
              alliant
              <span className="font-bold text-teal-300">
                {" "}
                savoir-faire artisanal
              </span>{" "}
              et
              <span className="font-bold text-teal-300">
                {" "}
                technologies innovantes
              </span>
            </p>
            <div className="hidden md:block">
              <FaAward className="text-teal-400 text-3xl animate-pulse" />
            </div>
          </div>

          {/* Séparateur artistique */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-teal-500"></div>
            <div className="relative">
              <div className="w-4 h-4 bg-teal-500 rounded-full animate-ping absolute inset-0"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full relative flex items-center justify-center">
                <FaCheckCircle className="text-white text-xs" />
              </div>
            </div>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-teal-500"></div>
          </div>

          {/* Grille de services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Effet de fond au hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icône */}
                <div className="relative mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-teal-400/30 to-emerald-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center text-2xl ${service.color}`}
                  >
                    <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                    {service.icon}
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-white mb-3 relative">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-emerald-100/80 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Points forts */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-emerald-200/90"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          
        </div>
      </div>

      {/* Effet de particules */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-teal-300 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          ></div>
        ))}
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(180deg);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 7s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
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
    icon: <FaRulerCombined className="text-emerald-400" />,
    title: "Confection d'Uniformes",
    description:
      "Fabrication d'uniformes professionnels pour entreprises et institutions",
    color: "text-emerald-400",
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
