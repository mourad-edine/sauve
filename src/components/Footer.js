// components/Footer.js
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <FaLinkedin className="text-2xl text-blue-900" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Confection<span className="text-yellow-400">Pro</span></h2>
                <p className="text-sm text-blue-200">Vêtements sur mesure</p>
              </div>
            </Link>
            <p className="text-blue-200 mb-6">
              Spécialistes de la confection de vêtements sur mesure pour entreprises et particuliers depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition duration-300">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition duration-300">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos services</h3>
            <ul className="space-y-3">
              <li className="text-blue-200">Vêtements d'entreprise</li>
              <li className="text-blue-200">Uniformes professionnels</li>
              <li className="text-blue-200">Vêtements sur mesure</li>
              <li className="text-blue-200">Personnalisation</li>
              <li className="text-blue-200">Retouches et ajustements</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-3 text-blue-200">
              <li>123 Rue de la Couture</li>
              <li>75000 Toamasina</li>
              <li>034 92 192 23</li>
              <li>contact@confection-pro.fr</li>
              <li>Lun-Ven: 9h-18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
          <p>&copy; {currentYear} 
Reflet HQD. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}