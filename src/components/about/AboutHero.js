<<<<<<< HEAD
"use client";

import React from 'react';
import Link from 'next/link';
import { FiClock, FiUsers, FiAward, FiHeart, FiStar, FiTarget } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950 via-violet-900 to-violet-800">
      
      {/* Pattern de fond élégant */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Éléments flottants décoratifs */}
      <div className="absolute top-1/5 left-8 animate-float-slow">
        <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
      </div>
      <div className="absolute top-1/3 right-16 animate-float-medium">
        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float-fast">
        <div className="w-8 h-8 rounded-full bg-yellow-400/30"></div>
      </div>
      <div className="absolute bottom-1/5 right-1/3 animate-float-slow">
        <div className="w-6 h-6 rounded-full bg-yellow-600/20"></div>
      </div>

      {/* Lignes d'énergie */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="container relative p-8 z-20 mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Badge principal */}
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-3">
                <FiHeart className="animate-spin-slow" />
                <span>À Propos de Vonjy</span>
                <HiOutlineSparkles className="animate-pulse" />
              </div>
            </div>
          </div>

          {/* Titre principal */}
          <div className="relative mb-10 text-center">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/30 via-transparent to-yellow-500/30 blur-2xl rounded-full"></div>
            <h1 className="relative">
              <span className="block text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-tighter text-white/90">
                NOTRE HISTOIRE
              </span>
              <span className="block text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider mt-2 md:mt-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                  Notre Passion
                </span>
              </span>
            </h1>
          </div>

          {/* Sous-titre */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
            <HiOutlineSparkles className="hidden md:block text-yellow-400 text-3xl animate-pulse" />
            <p className="text-xl md:text-xl lg:text-xl text-center text-blue-100 font-light leading-relaxed max-w-4xl">
              Depuis plus de <span className="font-bold text-yellow-300">15 ans</span>, nous transformons des idées en vêtements d'exception avec passion, expertise et un engagement total envers la satisfaction client.
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

          {/* Grille de statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <FiClock className="text-yellow-400 text-4xl md:text-5xl mx-auto mb-4 animate-pulse" />
              <div className="text-3xl md:text-5xl font-black text-white">15+</div>
              <div className="text-lg md:text-xl text-blue-100 mt-2">Années d'expérience</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <FiTarget className="text-yellow-400 text-4xl md:text-5xl mx-auto mb-4 animate-pulse" />
              <div className="text-3xl md:text-5xl font-black text-white">850+</div>
              <div className="text-lg md:text-xl text-blue-100 mt-2">Projets réalisés</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <FiStar className="text-yellow-400 text-4xl md:text-5xl mx-auto mb-4 animate-pulse" />
              <div className="text-3xl md:text-5xl font-black text-white">98%</div>
              <div className="text-lg md:text-xl text-blue-100 mt-2">Clients satisfaits</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <FiUsers className="text-yellow-400 text-4xl md:text-5xl mx-auto mb-4 animate-pulse" />
              <div className="text-3xl md:text-5xl font-black text-white">120+</div>
              <div className="text-lg md:text-xl text-blue-100 mt-2">Entreprises clientes</div>
            </div>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="#story"
              className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-blue-900 font-bold py-4 px-10 rounded-full text-lg md:text-xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              <FiHeart className="group-hover:animate-spin-slow" />
             notre histoire
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-yellow-500/70 hover:border-yellow-400 text-white hover:text-yellow-300 font-bold py-4 px-10 rounded-full text-lg md:text-xl uppercase tracking-wider transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center gap-3"
            >
              <HiOutlineSparkles />
              Contacter l'équipe
            </Link>
          </div>
        </div>
      </div>

      {/* Particules scintillantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
// components/AboutHero.js
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-32 md:pb-48">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:pr-8 xl:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
              Notre Histoire,<br />
              <span className="text-yellow-300">Notre Passion</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8 lg:mb-10 leading-relaxed">
              Depuis plus de 15 ans, nous transformons des idées en vêtements d'exception. 
              Notre mission : redéfinir l'excellence dans la confection sur mesure pour 
              entreprises et particuliers.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
              <Link 
                href="#story"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition duration-300 transform hover:scale-105 text-center"
              >
                Découvrir notre histoire
              </Link>
              <Link 
                href="/contact"
                className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition duration-300 transform hover:scale-105 text-center"
              >
                Rencontrer notre équipe
              </Link>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">15+</div>
                  <div className="text-base md:text-lg lg:text-xl">Années d'expérience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">850+</div>
                  <div className="text-base md:text-lg lg:text-xl">Projets réalisés</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">98%</div>
                  <div className="text-base md:text-lg lg:text-xl">Clients satisfaits</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">120+</div>
                  <div className="text-base md:text-lg lg:text-xl">Entreprises clientes</div>
                </div>
              </div>
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-blue-700 text-center">
                <p className="text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed">
                  <span className="text-yellow-300 font-bold">Expertise</span> et <span className="text-yellow-300 font-bold">Passion</span><br />
                  au service de votre image
                </p>
              </div>
            </div>
            
            {/* Éléments décoratifs - réduits pour ne pas gêner */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-yellow-400 rounded-full opacity-10 lg:opacity-20"></div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-blue-400 rounded-full opacity-10 lg:opacity-20"></div>
          </div>
        </div>
      </div>
      
      {/* Forme décorative - hauteur réduite pour ne pas cacher le contenu */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,218.7C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    </section>
  );
}