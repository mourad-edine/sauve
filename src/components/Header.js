'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const pathname = usePathname();

  // Gestion du scroll pour l'effet de réduction
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Services', path: '/service' },
    { name: 'Réalisations', path: '/process' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-500 ${
      isScrolled ? 'shadow-lg border-b border-gray-200 py-2' : 'shadow-sm border-b border-gray-100 py-4'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo avec animation */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="relative w-12 h-12 lg:w-14 lg:h-14">
                {/* Cercle de fond animé */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed opacity-30 border-gray-300"
                />
                
                {/* Logo principal */}
                <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                  <Image 
                    src="/images/logo.png" 
                    alt="Logo Confection Vonjy"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Badge d'icône */}
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <div className="text-gray-600 text-xs font-medium">CV</div>
                </div>
              </div>
            </motion.div>
            
            <div>
              <h1 className="text-lg lg:text-xl font-light text-gray-900 leading-tight">
                Confection<span className="font-semibold"> Vonjy</span>
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Excellence en confection sur mesure
              </p>
            </div>
          </Link>

          {/* Navigation Desktop avec indicateur animé */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative px-2">
                <Link
                  href={link.path}
                  className={`
                    relative px-4 py-3 text-sm font-medium transition-all duration-300
                    ${isActive(link.path) 
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                  
                  {/* Indicateur de page active */}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gray-900 rounded-full"
                    />
                  )}
                </Link>
                
                {/* Indicateur de survol animé */}
                {hoveredLink === index && !isActive(link.path) && (
                  <motion.div
                    layoutId="hoverIndicator"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-gray-300 rounded-full"
                  />
                )}
              </div>
            ))}
            
            {/* Bouton CTA avec effet */}
            <div className="relative ml-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-900 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  <span>Devis gratuit</span>
                  <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
                
                {/* Effet de bordure animée */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-gray-900 opacity-0 group-hover:opacity-30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Link>
            </div>

            {/* Contact rapide */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <a 
                href="tel:+261349219223"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <FaPhone className="w-3 h-3" />
                </div>
                <div className="hidden xl:block">
                  <div className="font-medium">034 92 192 23</div>
                  <div className="text-xs text-gray-500">Contact rapide</div>
                </div>
              </a>
            </div>
          </nav>

          {/* Menu mobile button */}
          <button
            className="lg:hidden p-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-gray-700" />
            ) : (
              <FaBars className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu Mobile avec animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 border-t border-gray-100 mt-4">
                <nav className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.path}
                        className={`
                          flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300
                          ${isActive(link.path) 
                            ? 'bg-gray-50 text-gray-900 border-l-4 border-gray-900' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          {isActive(link.path) && (
                            <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                          )}
                          <span className="font-medium">{link.name}</span>
                        </div>
                        {isActive(link.path) && (
                          <span className="text-xs text-gray-500 font-medium">•</span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* CTA mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="pt-4 mt-4 border-t border-gray-100"
                  >
                    <div className="space-y-3">
                      <Link
                        href="/contact"
                        className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors duration-300 flex items-center justify-center gap-2 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>Devis gratuit</span>
                        <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      
                      <a 
                        href="tel:+261349219223"
                        className="flex items-center justify-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <FaPhone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-medium">034 92 192 23</div>
                          <div className="text-xs text-gray-500">Appel direct</div>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}