"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCamera, FiAward, FiStar, FiHeart } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import photohero from './../../../public/images/pngegg.png';
export default function PortfolioHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-12">
      
      {/* Pattern de fond (inchangé) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLONNE GAUCHE : LE PNG ANIMÉ */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            {/* Halo lumineux derrière l'image */}
            <div className="absolute w-[80%] h-[80%] bg-yellow-500/10 blur-[100px] rounded-full"></div>
            
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[300px]"
            >
              <img
                src="https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/normal/png-231x315px/644031511.png" // REMPLACEZ PAR VOTRE PNG
                alt="Nos Réalisations"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-float-slow"
              />
              
              {/* Petit badge flottant sur l'image */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-blue-900/80 backdrop-blur-md border border-yellow-500/30 p-4 rounded-2xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <FiAward className="text-yellow-400 text-xl" />
                  <span className="text-white text-xs font-bold uppercase tracking-tighter">Fait Main</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* COLONNE DROITE : TEXTE & CTA */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            
            {/* Badge principal */}
            <div className="inline-block relative mb-8">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-3">
                <FiCamera className="animate-spin-slow" />
                <span>Portfolio Vonjy</span>
                <HiOutlineSparkles className="animate-pulse" />
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="relative mb-8">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-tighter text-white/90">
                NOS
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                Réalisations
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-md md:text-xl text-blue-100 font-light leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">
              Découvrez notre expertise à travers ces projets concrets. Chaque création raconte une histoire d'
              <span className="font-bold text-yellow-300"> attention aux détails</span> et de 
              <span className="font-bold text-yellow-300"> savoir-faire artisanal</span>.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#gallery"
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950 font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <FiStar /> Voir la galerie
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border-2 border-yellow-500/50 text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-3"
              >
                <FiHeart /> Sur mesure
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Particules scintillantes (inchangé) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-[2px] h-[2px] bg-yellow-200/40 rounded-full animate-twinkle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}></div>
        ))}
      </div>

      <style jsx>{`
        .animate-float-slow { animation: float-custom 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 15s linear infinite; }
        @keyframes float-custom { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-25px); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }
        .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}