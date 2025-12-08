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
    </section>
  );
}