"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaAward, FaPhoneVolume } from 'react-icons/fa6';

export default function ContactHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-950 via-cyan-900 to-cyan-800 py-16">
      
      {/* Pattern de fond (inchangé) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLONNE GAUCHE : LE PNG (Support/Contact) */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            {/* Halo lumineux cyan/jaune */}
            <div className="absolute w-[90%] h-[90%] bg-cyan-400/10 blur-[100px] rounded-full"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full max-w-[480px]"
            >
              <img
                src="https://fipcenter.com/guide/wp-content/uploads/2021/02/tenue-de-travail.png" // REMPLACEZ PAR VOTRE PNG (ex: un téléphone stylisé, ou un portrait d'accueil)
                alt="Contactez-nous"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-slow"
              />
              
              {/* Badge "Réponse Rapide" */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Équipe en ligne</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLONNE DROITE : TEXTE & CTA */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            
            {/* Badge principal */}
            <div className="inline-block relative mb-8">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-3">
                <FaEnvelope className="animate-bounce" />
                <span>Contactez Vonjy</span>
                <FaAward />
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="relative mb-8">
              <span className="block text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-tighter text-white/90">
                CONTACTEZ
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                Nous Aujourd'hui
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-cyan-50 font-light leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">
              Discutez de votre projet avec nos experts et obtenez un 
              <span className="font-bold text-yellow-300"> devis personnalisé gratuit</span>. Votre vision mérite une confection d'exception.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#form"
                className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(234,179,8,0.2)] flex items-center justify-center gap-3"
              >
                <FaEnvelope /> Écrire un message
              </Link>
              <Link
                href="tel:+33123456789"
                className="w-full sm:w-auto border-2 border-white/30 hover:border-yellow-500 text-white py-4 px-10 rounded-full text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3"
              >
                <FaPhoneVolume className="text-yellow-400" /> Appeler
              </Link>
            </div>
            
            {/* Séparateur artistique (aligné à gauche) */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-12 opacity-50">
              <div className="h-px w-12 bg-yellow-500"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="h-px w-24 bg-gradient-to-r from-yellow-500 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Particules scintillantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-[2px] h-[2px] bg-white/40 rounded-full animate-twinkle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}></div>
        ))}
      </div>

      <style jsx>{`
        .animate-float-slow { animation: float-custom 6s ease-in-out infinite; }
        @keyframes float-custom { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
      `}</style>
    </section>
  );
}