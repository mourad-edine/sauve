"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { FaAward, FaScissors } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 py-12">
      
      {/* Pattern de fond (inchangé) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLONNE GAUCHE : TEXTE & ACTIONS */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            
            {/* Badge principal */}
            <div className="inline-block relative mb-8">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-3">
                <FaAward className="animate-spin-slow" />
                <span>Confection Vonjy</span>
                <FaAward />
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="relative mb-8">
              <span className="block text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-tighter text-white/90">
                CONFECTION
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                  Vonjy
                </span>
                <span className="text-white ml-3 md:ml-5 whitespace-nowrap">Sur Mesure</span>
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-2xl mb-12 mx-auto lg:mx-0">
              Vêtements professionnels et personnalisés pour <span className="font-bold text-yellow-300">entreprises</span> et <span className="font-bold text-yellow-300">particuliers</span>.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-blue-950 font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest transition-all duration-300 transform hover:scale-105 shadow-[0_10px_40px_rgba(234,179,8,0.3)] flex items-center justify-center gap-3"
              >
                <FaScissors /> Demander un devis
              </Link>
              <Link
                href="/service"
                className="w-full sm:w-auto bg-white/5 border-2 border-yellow-500/50 hover:border-yellow-400 text-white py-4 px-10 rounded-full text-sm uppercase tracking-widest transition-all backdrop-blur-sm flex items-center justify-center gap-3"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>

          {/* COLONNE DROITE : LE LOGO MIS EN AVANT */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 mb-10 lg:mb-0">
            {/* Effet de lumière radial derrière le logo */}
            <div className="absolute w-[120%] h-[120%] bg-yellow-500/10 blur-[120px] rounded-full animate-pulse"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[400px] md:max-w-[500px]"
            >
              <Image
                src="/images/logo.png"
                alt="Logo Confection Vonjy"
                width={600}
                height={600}
                className="object-contain drop-shadow-[0_0_50px_rgba(234,179,8,0.4)] animate-float-logo"
                priority
              />
              
              {/* Cercle décoratif tournant autour du logo */}
              <div className="absolute inset-0 border-2 border-dashed border-yellow-500/20 rounded-full animate-spin-very-slow hidden md:block"></div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Particules et Décorations (inchangées) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="absolute w-[2px] h-[2px] bg-white/40 rounded-full animate-twinkle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}></div>
        ))}
      </div>

      <style jsx>{`
        .animate-float-logo { animation: float-logo 8s ease-in-out infinite; }
        .animate-spin-very-slow { animation: spin 40s linear infinite; }
        .animate-spin-slow { animation: spin 15s linear infinite; }
        @keyframes float-logo { 
          0%, 100% { transform: translateY(0px) scale(1); } 
          50% { transform: translateY(-20px) scale(1.02); } 
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }
      `}</style>
    </section>
  );
}