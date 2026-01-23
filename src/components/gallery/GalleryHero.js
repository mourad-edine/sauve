"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaCameraRetro, FaRibbon, FaAward, FaMagic } from 'react-icons/fa';

export default function GalleryHero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16">
      
      {/* Pattern de fond (inchangé) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLONNE GAUCHE : LE PNG DE LA COLLECTION */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            {/* Rayonnement lumineux derrière la pièce de collection */}
            <div className="absolute w-[100%] h-[100%] bg-yellow-500/10 blur-[120px] rounded-full"></div>
            
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[500px]"
            >
              <img
                src="https://www.modyf.be/media/mf_webp/png/media/stmedia/modyf/eshop/products/std.lang.all/resolutions/normal/png-546x410px/56931644.webp" // REMPLACEZ PAR VOTRE PNG (ex: un vêtement phare sur mannequin ou cintre)
                alt="Collection Vonjy"
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] animate-float-slow"
              />
              
              {/* Badge "Édition Limitée" ou "Nouveauté" flottant */}
              <div className="absolute top-10 -left-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 font-black py-2 px-4 rounded-lg transform -rotate-12 shadow-xl text-xs uppercase tracking-widest">
                Exclusif
              </div>
            </motion.div>
          </div>

          {/* COLONNE DROITE : TITRES ET DESCRIPTION */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-block relative mb-6">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaCameraRetro className="animate-spin-slow" />
                <span>Galerie d'Excellence</span>
                <FaAward />
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="relative mb-8">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-tighter text-white/90">
                CRÉATIONS
              </span>
             
            </h1>

            {/* Sous-titre */}
            <div className="flex flex-col lg:flex-row items-center gap-4 mb-10">
               <FaMagic className="hidden lg:block text-yellow-400 text-3xl animate-pulse shrink-0" />
               <p className="text-xl text-blue-100 font-light leading-relaxed max-w-xl">
                 Où l'<span className="font-bold text-yellow-300">artisanat traditionnel</span> rencontre l'innovation pour créer des pièces uniques.
               </p>
            </div>

            {/* Séparateur artistique (aligné à gauche sur desktop) */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-500"></div>
              <div className="relative">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-ping absolute inset-0"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full relative"></div>
              </div>
              <div className="h-px w-20 bg-yellow-500/30"></div>
            </div>

            {/* Scroll Indicator pour la galerie */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-yellow-500/50 text-xs uppercase tracking-[0.3em] font-bold"
            >
              Scrollez pour découvrir ↓
            </motion.div>
          </div>

        </div>
      </div>

      {/* Styles d'animation (Gardés et optimisés) */}
      <style jsx>{`
        .animate-float-slow { animation: float-custom 7s ease-in-out infinite; }
        @keyframes float-custom { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(2deg); } }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.8; } }
      `}</style>
    </div>
  );
}