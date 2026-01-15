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
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Grille Principale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          
          {/* Colonne 1 - Marque & Pitch */}
          <div className="flex flex-col space-y-5">
            <Link href="/" className="group inline-block">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Confection<span className="text-blue-600 group-hover:text-blue-500 transition-colors">Vonjy</span>
              </h2>
              <div className="h-1 w-12 bg-blue-600 rounded-full mt-1 group-hover:w-24 transition-all duration-300"></div>
            </Link>
            
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              L'excellence du textile à Toamasina. Nous transformons vos idées en uniformes et créations de haute qualité depuis 15 ans.
            </p>

            {/* Réseaux Sociaux (Ajoutés pour le style) */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white rounded-full border border-gray-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:shadow-sm transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 - Navigation Rapide */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-blue-600">
                      <FaArrowRight className="text-[10px] mr-2" />
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Nos Expertises */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">
              Nos Expertises
            </h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center text-slate-600 text-sm group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 group-hover:scale-150 group-hover:bg-blue-600 transition-all"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 - Contact Info */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-blue-100 lg:-mt-4">
            <h3 className="text-lg font-bold mb-4">Parlons projet !</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-blue-200" />
                <span className="opacity-90">Toamasina, Madagascar</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="flex-shrink-0 text-blue-200" />
                <a href="tel:+261349219223" className="font-semibold hover:underline">
                  034 92 192 23
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0 text-blue-200" />
                <a href="mailto:reflet@confection-vonjy.fr" className="truncate hover:underline">
                  reflet@confection-vonjy.fr
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2 border-t border-white/20">
                <FaClock className="flex-shrink-0 text-blue-200" />
                <span className="text-xs opacity-80 uppercase font-medium">Lun-Ven: 8h30-17h30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-sm font-medium">
                © {currentYear} Confection Vonjy
              </p>
              <p className="text-slate-400 text-[11px] uppercase tracking-widest mt-1">
                Artisanat de précision • Madagascar
              </p>
            </div>
            
            <div className="flex gap-8 text-xs font-semibold text-slate-400 uppercase tracking-tighter">
              <Link href="/mentions-legales" className="hover:text-blue-600 transition-colors">
                Mentions
              </Link>
              <Link href="/confidentialite" className="hover:text-blue-600 transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}