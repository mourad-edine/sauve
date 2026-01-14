<<<<<<< HEAD
"use client";

import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaAward } from 'react-icons/fa6';

export default function ContactHero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-950 via-cyan-900 to-cyan-800">
      
      {/* Pattern de fond élégant */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Éléments flottants décoratifs */}
      <div className="absolute top-1/4 left-8 animate-float-slow">
        <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
      </div>
      <div className="absolute top-1/3 right-12 animate-float-medium">
        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-fast">
        <div className="w-8 h-8 rounded-full bg-yellow-400/30"></div>
      </div>
      <div className="absolute bottom-1/5 right-1/4 animate-float-slow">
        <div className="w-6 h-6 rounded-full bg-yellow-600/20"></div>
      </div>

      {/* Lignes d'énergie */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="container relative p-5 z-20 mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge principal */}
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-3">
                <FaEnvelope className="animate-spin-slow" />
                <span>Contactez Vonjy</span>
                <FaAward />
              </div>
            </div>
          </div>

          {/* Titre principal */}
          <div className="relative mb-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/30 via-transparent to-yellow-500/30 blur-2xl rounded-full"></div>
            <h1 className="relative">
              <span className="block text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-tighter text-white/90">
                CONTACTEZ
              </span>
              <span className="block text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider mt-2 md:mt-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                  Nous
                </span>
                <span className="text-white ml-3 md:ml-5">Aujourd'hui</span>
              </span>
            </h1>
          </div>

          {/* Sous-titre */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
            <FaEnvelope className="hidden md:block text-yellow-400 text-3xl animate-pulse" />
            <p className="text-xl md:text-xl lg:text-xl text-blue-100 font-light leading-relaxed max-w-4xl">
              Discutez de votre projet avec nos experts et obtenez un <span className="font-bold text-yellow-300">devis personnalisé gratuit</span>.  
              Notre équipe est à votre écoute pour transformer vos idées en réalité vestimentaire.
            </p>
            <FaAward className="hidden md:block text-yellow-400 text-3xl animate-pulse" />
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
              href="#form"
              className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-blue-900 font-bold py-4 px-10 rounded-full text-lg md:text-xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              <FaEnvelope className="group-hover:animate-spin-slow" />
              Demander un devis
            </Link>
            <Link
              href="tel:+33123456789"
              className="bg-transparent border-2 border-yellow-500/70 hover:border-yellow-400 text-white hover:text-yellow-300 font-bold py-4 px-10 rounded-full text-lg md:text-xl uppercase tracking-wider transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center gap-3"
            >
              <FaAward className="animate-pulse" />
              Appeler maintenant
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
// components/ContactHero.js
"use client"; // Ajout de cette directive

import Link from 'next/link';

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-24">
      {/* Effet de vague simplifié sans styled-jsx */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white 
                      [clip-path:polygon(0_70%,100%_0,100%_100%,0%_100%)] 
                      md:[clip-path:polygon(0_50%,100%_0,100%_100%,0%_100%)]">
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Contactez-nous
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 opacity-90">
          Discutez de votre projet avec nos experts et obtenez un devis personnalisé gratuit.
          Notre équipe est à votre écoute pour concrétiser vos idées vestimentaires.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <Link 
            href="#form"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Demander un devis
          </Link>
          <Link 
            href="tel:+33123456789"
            className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition duration-300 transform hover:scale-105"
          >
            Appeler maintenant
          </Link>
        </div>
      </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    </section>
  );
}