// components/Hero.js - Version avec logo en premier sur mobile
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-12 md:pt-20 pb-32 md:pb-56">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Logo en premier sur mobile */}
        <div className="flex justify-center mb-6 md:hidden">
          <div className="relative w-48 h-48">
            <Image
              src="/images/logo.png"
              alt="Logo 
Confection Vonjy"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 lg:pr-12 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight uppercase">
              Confection de vêtements sur mesure pour{" "}
              <span className="text-yellow-300 block md:inline">
                entreprises & particuliers
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed">
              Création de vêtements professionnels et personnalisés qui renforcent
              l'image de votre entreprise et répondent à vos besoins
              vestimentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-5 md:py-3 md:px-6 rounded-lg text-base md:text-lg transition duration-300 text-center transform hover:scale-105"
              >
                Demander un devis
              </Link>
              <Link
                href="/service"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-5 md:py-3 md:px-6 rounded-lg text-base md:text-lg transition duration-300 text-center transform hover:scale-105"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
          
          {/* Logo/image - caché sur mobile, visible sur desktop */}
          <div className="hidden md:flex md:w-1/2 justify-center">
            <div className="relative w-full max-w-lg h-80 lg:h-96 xl:h-[28rem] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                <div className="text-center p-6 lg:p-8">
                  <div className="mb-6 lg:mb-8 flex justify-center">
                    <div className="relative w-56 h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                      <Image
                        src="/images/logo.png"
                        alt="Logo 
Confection Vonjy"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 text-white">
                    Vêtements sur mesure
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90">
                    Qualité exceptionnelle, prix compétitifs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forme décorative */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-56">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}