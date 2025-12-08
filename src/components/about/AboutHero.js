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
    </section>
  );
}