// components/ContactMap.js
import { HiArrowRight } from "react-icons/hi";
export default function ContactMap() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 uppercase">Notre Atelier</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Situé au cœur de Toamasina, notre atelier vous accueille pour discuter de vos projets 
            et découvrir nos créations.
          </p>
        </div>
        
        <div className="bg-white shadow-lg overflow-hidden border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Carte Google Maps intégrée */}
            <div className="lg:col-span-2">
  {/* Carte intégrée */}
  <div className="h-96 lg:h-full min-h-96  overflow-hidden shadow-2xl mb-6">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16391.053853621157!2d49.395787285277805!3d-18.133233285862456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f501095e9b6ce3%3A0x2ad581de2d0d3a17!2sMelissa%20Express!5e1!3m2!1sfr!2smg!4v1765186937092!5m2!1sfr!2smg"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full"
      title="Localisation Melissa Express"
    ></iframe>
  </div>

  {/* Bouton en dessous */}
  {/* <div className="text-center">
    <a
      href="https://www.google.com/maps/place/Melissa+Express/@-18.1332333,49.3957873,17z"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-2 rounded-xl transition shadow-lg"
    >
       <HiArrowRight className="text-2xl" />
    </a>
  </div> */}
</div>
            
            {/* Informations d'accès */}
            <div className="p-8 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
              <h3 className="text-2xl font-bold mb-6">Accès & Transports</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="mr-2"></span> Métro
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Ligne 4 - Station "Couture"</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span>Ligne 7 - Station "Textile"</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="mr-2"></span> Bus
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                      <span>Lignes 42, 67, 74 - Arrêt "La Couture"</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="mr-2"></span> Stationnement
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <span>Parking "Les Tissus" (100m)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <span>Stationnement rue payant</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-blue-700">
                  <h4 className="font-bold text-lg mb-3">Accès PMR</h4>
                  <p className="text-blue-200">
                    Notre atelier est entièrement accessible aux personnes à mobilité réduite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}