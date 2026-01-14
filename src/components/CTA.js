<<<<<<< HEAD
'use client';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CTA() {
  const contactInfo = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Téléphone",
      content: "034 92 192 23",
      color: "#3B82F6",
      accent: "#93C5FD",
      link: "tel:+261349219223",
      initials: "T"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      content: "reflet@confection-vonjy.fr",
      color: "#10B981",
      accent: "#6EE7B7",
      link: "mailto:reflet@confection-vonjy.fr",
      initials: "E"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Atelier",
      content: "123 Rue de la Couture",
      subtitle: "75000 Toamasina, Madagascar",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      link: "https://maps.google.com/?q=123+Rue+de+la+Couture+75000+Toamasina",
      initials: "A"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-blue-300"></div>
                <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">Prêt à commencer ?</span>
                <div className="w-8 h-px bg-blue-300"></div>
              </div>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Prêt à <span className="font-semibold">habiller votre équipe</span>
            </h3>
            
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
              Notre équipe d'experts vous accompagne à chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne gauche - Informations de contact */}
            <div>
              <div className="mb-8">
                <h4 className="text-xl font-medium text-gray-900 mb-6">
                  Nos <span className="font-semibold">coordonnées</span>
                </h4>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-4 rounded-lg border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-white group"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="relative w-14 h-14">
                        {/* Cercle de fond */}
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: `${contact.color}10` }}
                        />
                        
                        {/* Cercle principal */}
                        <div 
                          className="absolute inset-2 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: contact.color }}
                        >
                          {contact.initials}
                        </div>
                        
                        {/* Badge d'icône */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                          <div style={{ color: contact.color }}>
                            {contact.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <h5 className="font-medium text-gray-900 mb-1">
                        {contact.title}
                      </h5>
                      <p className="text-lg font-medium" style={{ color: contact.color }}>
                        {contact.content}
                      </p>
                      {contact.subtitle && (
                        <p className="text-sm text-gray-500 mt-1">
                          {contact.subtitle}
                        </p>
                      )}
                    </div>
                    
                    <FaArrowRight className="text-gray-400 group-hover:text-gray-600 ml-2 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Colonne droite - CTA */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="mb-6">
                  <div className="inline-block p-3 rounded-lg bg-gray-50 border border-gray-200 mb-4">
                    <FaArrowRight className="w-6 h-6 text-gray-900" />
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    Demandez votre devis gratuit
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Réponse sous 24h ouvrées. Pas d'engagement, juste des conseils d'experts.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-medium py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 group w-full justify-center"
                >
                  <span>Demander un devis gratuit</span>
                  <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <p className="text-sm text-gray-500 mt-4">
                  Consultation gratuite et sans engagement
                </p>
              </div>
            </div>
          </div>
        </motion.div>
=======
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
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
      </div>
    </section>
  );
}