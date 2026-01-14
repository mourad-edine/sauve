<<<<<<< HEAD
"use client";

import React from 'react';
import Link from 'next/link';
import { FiCamera, FiAward, FiStar, FiHeart } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      
      {/* Pattern de fond élégant */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Éléments flottants décoratifs */}
      <div className="absolute top-1/4 left-10 animate-float-slow">
        <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
      </div>
      <div className="absolute top-1/3 right-16 animate-float-medium">
        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float-fast">
        <div className="w-6 h-6 rounded-full bg-yellow-400/30"></div>
      </div>
      <div className="absolute bottom-1/5 right-1/3 animate-float-slow">
        <div className="w-5 h-5 rounded-full bg-yellow-600/20"></div>
      </div>

      {/* Lignes d'énergie */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="container relative z-20 mx-auto py-3 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge principal */}
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-3">
                <FiCamera className="animate-spin-slow" />
                <span>Portfolio Vonjy</span>
                <HiOutlineSparkles className="animate-pulse" />
              </div>
            </div>
          </div>

          {/* Titre principal */}
          <div className="relative mb-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/30 via-transparent to-yellow-500/30 blur-2xl rounded-full"></div>
            <h1 className="relative">
              <span className="block text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-tighter text-white/90">
                NOS
              </span>
              <span className="block text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider mt-2 md:mt-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                  Réalisations
                </span>
              </span>
            </h1>
          </div>

          {/* Sous-titre */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
            <HiOutlineSparkles className="hidden md:block text-yellow-400 text-3xl animate-pulse" />
            <p className="text-xl md:text-xl lg:text-xl text-blue-100 font-light leading-relaxed max-w-4xl">
              Découvrez notre expertise à travers ces projets concrets. Chaque création raconte une histoire d'<span className="font-bold text-yellow-300">attention aux détails</span> et de <span className="font-bold text-yellow-300">savoir-faire artisanal</span>.
            </p>
            <FiAward className="hidden md:block text-yellow-400 text-3xl animate-pulse" />
          </div>

          {/* Séparateur artistique */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <div className="relative">
              <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping absolute inset-0"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full relative"></div>
            </div>
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="#gallery"
              className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-blue-900 font-bold py-4 px-10 rounded-full text-lg md:text-xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              <FiStar className="group-hover:animate-spin-slow" />
              Voir nos réalisations
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-yellow-500/70 hover:border-yellow-400 text-white hover:text-yellow-300 font-bold py-4 px-10 rounded-full text-lg md:text-xl uppercase tracking-wider transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center gap-3"
            >
              <FiHeart />
               Projet sur mesure
            </Link>
          </div>
        </div>
      </div>

      {/* Particules scintillantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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

      {/* Styles d'animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 7s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
      `}</style>
=======
// components/PortfolioHero.js
import Link from 'next/link';

export default function PortfolioHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-40 md:pb-56">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 md:mb-8 uppercase leading-tight">
          Nos Réalisations
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 md:mb-10 opacity-90 px-4 leading-relaxed">
          Découvrez notre expertise à travers ces projets concrets. 
          Chaque création raconte une histoire d'attention aux détails et de savoir-faire artisanal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
          <Link 
            href="#gallery"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition duration-300 transform hover:scale-105"
          >
            Voir nos réalisations
          </Link>
          <Link 
            href="/contact"
            className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition duration-300 transform hover:scale-105"
          >
            Votre projet sur mesure
          </Link>
        </div>
      </div>
      
      {/* Forme décorative avec hauteur contrôlée */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,144C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    </section>
  );
}