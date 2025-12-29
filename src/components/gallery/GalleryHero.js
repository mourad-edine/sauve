import React from 'react';
import { FaCameraRetro, FaRibbon, FaAward, FaMagic } from 'react-icons/fa';

export default function GalleryHero() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      
      {/* Pattern de fond élégant */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Éléments flottants décoratifs */}
      <div className="absolute top-1/4 left-10 animate-float-slow">
        <div className="w-8 h-8 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
      </div>
      <div className="absolute top-1/3 right-16 animate-float-medium">
        <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-fast">
        <div className="w-4 h-4 rounded-full bg-yellow-400/30"></div>
      </div>

      {/* Lignes d'énergie */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* En-tête avec badge */}
          <div className="flex flex-col items-center mb-8 md:mb-12 pt-8">
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaCameraRetro className="animate-spin-slow" />
                <span>Galerie d'Excellence</span>
                <FaAward />
              </div>
            </div>
          </div>

          {/* Titre principal avec effet de superposition */}
          <div className="relative mb-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/30 via-transparent to-yellow-500/30 blur-2xl rounded-full"></div>
            <h1 className="relative text-center">
              <span className="block text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-tighter text-white/90">
                CRÉATIONS
              </span>
              <span className="block text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider mt-2 md:mt-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                  Vonjy
                </span>
                <span className="text-white ml-2 md:ml-4">Collection</span>
              </span>
            </h1>
          </div>

          {/* Sous-titre avec icônes */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 md:mb-14">
            <div className="hidden md:block">
              <FaMagic className="text-yellow-400 text-2xl animate-pulse" />
            </div>
            <p className="text-xl md:text-xl lg:text-xl text-center text-blue-100 font-light leading-relaxed max-w-3xl">
              Où l'<span className="font-bold text-yellow-300">artisanat traditionnel</span> rencontre 
              l'<span className="font-bold text-yellow-300">innovation moderne</span> pour créer des pièces uniques
            </p>
            <div className="hidden md:block">
              <FaAward className="text-yellow-400 text-2xl animate-pulse" />
            </div>
          </div>

          {/* Séparateur artistique */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <div className="relative">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-ping absolute inset-0"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full relative"></div>
            </div>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>

          {/* Description */}
          

          {/* Navigation indicatrice */}
         

        </div>
      </div>

      {/* Effet de particules */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}