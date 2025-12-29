// components/AboutCTA.js
import Link from 'next/link';
import { FaHandshake, FaLightbulb, FaCalendarAlt } from "react-icons/fa";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-2xl font-bold mb-6 uppercase">
            Prêt à Écrire la Suite avec Nous ?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Après avoir découvert qui nous sommes, laissez-nous découvrir votre projet. 
            Ensemble, créons quelque chose d'exceptionnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
            <div className="text-yellow-300 mb-6">
              <FaLightbulb className="text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-4">Échangeons sur votre projet</h3>
            <p className="opacity-90 mb-6">
              Partagez vos idées avec nos experts et obtenez des conseils personnalisés
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Nous contacter
            </Link>
          </div>
          
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
            <div className="text-yellow-300 mb-6">
              <FaCalendarAlt className="text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-4">Visitez notre atelier</h3>
            <p className="opacity-90 mb-6">
              Rencontrez notre équipe et découvrez notre savoir-faire en direct
            </p>
            <button className="bg-white/20 hover:bg-white/30 border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Prendre rendez-vous
            </button>
          </div>
          
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
            <div className="text-yellow-300 mb-6">
              <FaHandshake className="text-4xl mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-4">Devenez partenaire</h3>
            <p className="opacity-90 mb-6">
              Projet d'entreprise ? Discutons d'un partenariat durable
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="opacity-90">
            Vous avez des questions sur notre entreprise ou nos services ?<br />
            <Link href="/contact" className="text-yellow-300 hover:text-yellow-400 font-bold underline">
              Contactez-nous directement
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}