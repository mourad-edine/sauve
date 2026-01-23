// components/Footer.js
import Link from 'next/link';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaArrowRight 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Accueil", href: "/" },
    { label: "Nos services", href: "/services" },
    { label: "Réalisations", href: "/portfolio" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    "Vêtements d'entreprise",
    "Uniformes professionnels",
    "Créations sur mesure",
    "Retouches & ajustements",
    "Broderie personnalisée"
  ];

  const contactItems = [
    { icon: FaMapMarkerAlt, text: "Toamasina, Madagascar" },
    { icon: FaPhoneAlt, text: "034 92 192 23", href: "tel:+261349219223" },
    { icon: FaEnvelope, text: "reflet@confection-vonjy.fr", href: "mailto:reflet@confection-vonjy.fr" },
    { icon: FaClock, text: "Lun–Ven : 8h30–17h30" },
  ];

  const primary = '#1e40af'; // bleu foncé pour les icônes

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Colonne 1 – Marque */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h3 className="text-lg uppercase font-semibold text-gray-900 tracking-tight">
                Confection<span className="text-blue-800">Vonjy</span>
              </h3>
              <div className="h-px w-12 bg-blue-800 mt-2" />
            </Link>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Spécialiste des uniformes et vêtements professionnels sur mesure à Toamasina depuis 15 ans.
            </p>

            <div className="flex gap-5">
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 – Navigation */}
          <div>
            <h3 className="text-sm uppercase font-medium text-gray-800 mb-5 tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2 group"
                  >
                    <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 – Expertises */}
          <div>
            <h3 className="text-sm uppercase font-medium text-gray-800 mb-5 tracking-wider">
              Nos expertises
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-800 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 – Contact (icônes en bleu sans fond) */}
          <div>
            <h3 className="text-sm uppercase font-medium text-gray-800 mb-5 tracking-wider">
              Contactez-nous
            </h3>
            
            <ul className="space-y-4 text-sm text-gray-700">
              {contactItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <item.icon 
                    className="w-5 h-5 text-blue-800 shrink-0" 
                  />
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="hover:text-blue-800 transition-colors font-medium"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© {currentYear} Confection Vonjy – Tous droits réservés</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-blue-800 transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-blue-800 transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}