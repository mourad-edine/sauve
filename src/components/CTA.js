// components/CTA.js
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase">Prêt à habiller votre équipe ?</h3>
          
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-10 lg:mb-0 lg:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-800 p-3 rounded-full mr-4">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Téléphone</h4>
                  <p className="text-blue-200">034 92 192 23</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-800 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-blue-200">contact@confection-pro.fr</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-800 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Atelier</h4>
                  <p className="text-blue-200">123 Rue de la Couture, 75000 Toamasina</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-right">
            <Link 
              href="/contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-lg text-xl transition duration-300 shadow-lg"
            >
              Demander un devis gratuit
            </Link>
            <p className="mt-4 text-blue-200">
              Réponse sous 24h ouvrées
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}