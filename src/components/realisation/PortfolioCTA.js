// components/PortfolioCTA.js
import Link from 'next/link';
import { FaRulerCombined, FaCalendarAlt, FaLightbulb } from "react-icons/fa";

export default function PortfolioCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 uppercase">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque projet commence par une conversation. Partagez vos idées avec nous et 
            découvrez comment nous pouvons les transformer en réalité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-blue-700 mb-6">
              <FaRulerCombined className="text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Consultation gratuite</h3>
            <p className="text-gray-600 mb-6">
              Rencontrez nos experts pour discuter de votre projet et obtenir des conseils personnalisés.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-50 text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              Prendre rendez-vous
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-blue-500 mb-6">
              <FaLightbulb className="text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Devis personnalisé</h3>
            <p className="text-gray-600 mb-6">
              Recevez un devis détaillé adapté à vos besoins spécifiques et à votre budget.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-yellow-50 text-yellow-700 font-bold py-3 px-6 rounded-lg hover:bg-yellow-100 transition duration-300"
            >
              Demander un devis
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-blue-600 mb-6">
              <FaCalendarAlt className="text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Visite d'atelier</h3>
            <p className="text-gray-600 mb-6">
              Venez découvrir notre savoir-faire en direct et choisir vos tissus en atelier.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-green-50 text-green-700 font-bold py-3 px-6 rounded-lg hover:bg-green-100 transition duration-300"
            >
              Visiter l'atelier
            </Link>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 md:p-12 rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Inspirez-vous de nos réalisations pour votre projet
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Chaque création est unique, tout comme votre projet. Contactez-nous pour 
            transformer vos idées en vêtements d'exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
            >
              Commencer mon projet
            </Link>
            <Link 
              href="tel:+33123456789" 
              className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
            >
              Appeler un expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}