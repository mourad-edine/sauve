// components/Footer.js
import Link from 'next/link';
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn
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

  return (
    <footer className="bg-blue-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Colonne 1 – Marque */}
          <div className="space-y-5">
            <Link href="/" className="group inline-block">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Confection<span className="text-blue-600 group-hover:text-blue-700 transition-colors">Vonjy</span>
              </h2>
              <div className="h-1 w-16 bg-blue-500 rounded-full mt-2 group-hover:w-24 transition-all duration-400" />
            </Link>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
              L'excellence du textile à Toamasina – Uniformes et créations sur mesure depuis 15 ans.
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-2.5 bg-white rounded-full border border-blue-100 text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href}
                    className="text-slate-600 hover:text-blue-700 transition-colors flex items-center group text-[15px]"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 text-blue-600">
                      <FaArrowRight className="text-xs mr-1.5" />
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 mb-5">
              Nos expertises
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-3 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact – Carte bleue claire */}
          <div className="bg-blue-100/60 rounded-2xl p-6 sm:p-7 border border-blue-200 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-5">
              Contactez-nous
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-600 flex-shrink-0" />
                <span>Toamasina, Madagascar</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600 flex-shrink-0" />
                <a href="tel:+261349219223" className="hover:text-blue-800 transition-colors font-medium">
                  034 92 192 23
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 flex-shrink-0" />
                <a href="mailto:reflet@confection-vonjy.fr" className="hover:text-blue-800 transition-colors">
                  reflet@confection-vonjy.fr
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2 border-t border-blue-200/50">
                <FaClock className="text-blue-600 flex-shrink-0" />
                <span className="text-xs uppercase font-medium opacity-90">Lun–Ven : 8h30–17h30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-8 border-t border-blue-100 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {currentYear} Confection Vonjy – Artisanat de précision à Madagascar</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-blue-700 transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-blue-700 transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}