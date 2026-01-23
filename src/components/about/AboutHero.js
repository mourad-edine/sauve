"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiAward, FiHeart, FiStar, FiTarget } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20">
      
      {/* Pattern de fond (inchangé) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLONNE GAUCHE : TEXTE & STATS */}
          <div className="text-center lg:text-left">
            {/* Badge principal */}
            <div className="inline-block relative mb-6">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-3">
                <FiHeart className="animate-spin-slow" />
                <span>À Propos de Vonjy</span>
                <HiOutlineSparkles className="animate-pulse" />
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="relative mb-6">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-tighter text-white/90">
                NOTRE HISTOIRE
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                Notre Passion
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">
              Depuis plus de <span className="font-bold text-yellow-300">15 ans</span>, nous transformons des idées en vêtements d'exception avec passion et expertise.
            </p>

            {/* Grille de statistiques intégrée */}
            <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-center lg:text-left">
                <div className="text-2xl font-black text-yellow-400">15+</div>
                <div className="text-xs text-blue-200 uppercase tracking-tighter">Expérience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-center lg:text-left">
                <div className="text-2xl font-black text-yellow-400">850+</div>
                <div className="text-xs text-blue-200 uppercase tracking-tighter">Projets</div>
              </div>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="#story" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <FiHeart /> Notre histoire
              </Link>
              <Link href="/contact" className="w-full sm:w-auto border border-white/30 hover:border-yellow-500 text-white py-4 px-8 rounded-full text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                <HiOutlineSparkles /> Équipe
              </Link>
            </div>
          </div>

          {/* COLONNE DROITE : LE PNG ANIMÉ */}
          <div className="relative flex justify-center items-center h-full">
            {/* Halo lumineux */}
            <div className="absolute w-[80%] h-[80%] bg-yellow-500/10 blur-[120px] rounded-full"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/047/249/331/small/sweater-shirt-hoodie-isolated-png.png" // REMPLACEZ PAR VOTRE PNG
                alt="Vonjy Atelier"
                className="w-full max-w-[500px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-float-slow"
              />
              
              {/* Badge flottant "Expertise" */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl hidden md:block"
              >
                <FiTarget className="text-yellow-400 text-3xl mb-2" />
                <p className="text-white font-bold text-xs uppercase tracking-widest">Qualité<br/>Premium</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Particules (inchangé) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-[2px] h-[2px] bg-white/30 rounded-full animate-twinkle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}></div>
        ))}
      </div>

      <style jsx>{`
        .animate-float-slow { animation: float-custom 8s ease-in-out infinite; }
        @keyframes float-custom { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(3deg); } }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }
      `}</style>
    </section>
  );
}