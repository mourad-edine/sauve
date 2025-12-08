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
    </section>
  );
}