'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = "https://admin.confection-vonjy.mg/api/info_site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [siteInfo, setSiteInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Récupérer les informations du site depuis l'API
  useEffect(() => {
    fetchSiteInfo();
  }, []);

  const fetchSiteInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setSiteInfo(data);
    } catch (err) {
      console.error("Error fetching site info:", err);
    } finally {
      setLoading(false);
    }
  };

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
    { name: 'Services', path: '/service' },
    { name: 'Réalisations', path: '/process' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  // Formatage des numéros de téléphone
  const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    
    // Retirer tous les caractères non numériques
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Si le numéro commence par +261, formater pour Madagascar
    if (cleanPhone.startsWith('261')) {
      const rest = cleanPhone.substring(3);
      return `+261 ${rest.substring(0, 2)} ${rest.substring(2, 5)} ${rest.substring(5, 8)}`;
    }
    
    // Si le numéro commence par 0, formater local
    if (cleanPhone.startsWith('0')) {
      const rest = cleanPhone.substring(1);
      return `+261 ${rest.substring(0, 2)} ${rest.substring(2, 5)} ${rest.substring(5, 8)}`;
    }
    
    // Si le numéro est déjà formaté internationalement
    if (cleanPhone.length >= 12) {
      const countryCode = cleanPhone.substring(0, 3);
      const rest = cleanPhone.substring(3);
      return `+${countryCode} ${rest.substring(0, 2)} ${rest.substring(2, 5)} ${rest.substring(5, 8)}`;
    }
    
    // Retourner le numéro original s'il ne correspond à aucun format
    return phone;
  };

  // Fonction pour séparer le nom en deux parties
  const formatCompanyName = (name) => {
    if (!name) return { firstPart: 'Confection', secondPart: 'Vonjy' };
    
    const words = name.split(' ');
    
    // Si un seul mot, tout en bleu
    if (words.length === 1) {
      return { firstPart: '', secondPart: words[0] };
    }
    
    // Prendre le premier mot pour la partie grise
    const firstPart = words[0];
    // Le reste pour la partie bleue
    const secondPart = words.slice(1).join(' ');
    
    return { firstPart, secondPart };
  };

  // Récupérer le numéro principal formaté
  const formattedPhone = siteInfo?.numero_one ? formatPhoneNumber(siteInfo.numero_one) : "+261 38 54 414 95";
  const phoneHref = siteInfo?.numero_one ? `tel:${siteInfo.numero_one.replace(/\s+/g, '')}` : 'tel:+261385441495';

  // Formater le nom de l'entreprise
  const companyName = formatCompanyName(siteInfo?.nom);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
      isScrolled ? 'shadow-lg border-b border-gray-200 py-1.5' : 'shadow-sm border-b border-gray-100 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo avec animation - TAILLE RÉDUITE */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="relative w-10 h-10 lg:w-11 lg:h-11">
                {/* Cercle de fond animé */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed opacity-30 border-gray-300"
                />
                
                {/* Logo principal - Dynamique depuis l'API */}
                <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                  {siteInfo?.logo ? (
                    <Image 
                      src={`https://admin.confection-vonjy.mg/uploads/images/${siteInfo.logo}`}
                      alt={siteInfo?.nom || "Logo Confection Vonjy"}
                      width={45}
                      height={45}
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-800 rounded-full">
                      <span className="text-white font-bold text-xs">CV</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            
            <div className="ml-1">
              <h1 className="text-sm lg:text-sm font-light text-gray-900 leading-tight uppercase">
                {companyName.firstPart && (
                  <span className="text-gray-900">{companyName.firstPart} </span>
                )}
                <span className="font-semibold text-blue-800">
                  {companyName.secondPart}
                </span>
              </h1>
              {siteInfo?.slogan && (
                <p className="text-xs text-gray-500 mt-0.5 hidden lg:block max-w-[180px] truncate">
                  {siteInfo.slogan}
                </p>
              )}
            </div>
          </Link>

          {/* Navigation Desktop avec indicateur animé - ESPACEMENT RÉDUIT */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative px-1.5">
                <Link
                  href={link.path}
                  className={`
                    relative px-3 py-2.5 text-xs font-medium transition-all duration-300
                    ${isActive(link.path) 
                      ? 'text-blue-800' 
                      : 'text-gray-600 hover:text-blue-800'
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
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-800"
                    />
                  )}
                </Link>
                
                {/* Indicateur de survol animé */}
                {hoveredLink === index && !isActive(link.path) && (
                  <motion.div
                    layoutId="hoverIndicator"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-blue-200"
                  />
                )}
              </div>
            ))}
            
            {/* Bouton CTA avec effet - TAILLE RÉDUITE */}
            <div className="relative ml-3">
              <Link
                href="/contact"
                className="group relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 bg-blue-800 text-white font-medium px-4 py-2 text-xs hover:bg-blue-900 transition-colors duration-300"
                >
                  <span>Devis gratuit</span>
                  <FaArrowRight className="w-2.5 h-2.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </Link>
            </div>

            {/* Contact rapide - Numéro dynamique depuis l'API - TAILLE RÉDUITE */}
            <div className="ml-3 pl-3 border-l border-gray-200">
              <a 
                href={phoneHref}
                className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-800 transition-colors duration-300 group"
              >
                <div className="w-7 h-7 bg-gray-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <FaPhone className="w-2.5 h-2.5 text-blue-800" />
                </div>
                <div className="hidden xl:block">
                  <div className="font-medium text-xs">{formattedPhone}</div>
                </div>
              </a>
            </div>
          </nav>

          {/* Menu mobile button - TAILLE RÉDUITE */}
          <button
            className="lg:hidden p-1.5 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <FaTimes className="w-4 h-4 text-gray-700" />
            ) : (
              <FaBars className="w-4 h-4 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu Mobile avec animations - TAILLES RÉDUITES */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-3 pb-4 border-t border-gray-100 mt-3">
                <nav className="space-y-0.5">
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
                          flex items-center justify-between px-3 py-2.5 text-sm transition-all duration-300
                          ${isActive(link.path) 
                            ? 'bg-blue-50 text-blue-800 border-l-3 border-blue-800'
                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-800'
                          }
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center gap-2.5">
                          {isActive(link.path) && (
                            <div className="w-1.5 h-1.5 bg-blue-800"></div>
                          )}
                          <span className="font-medium">{link.name}</span>
                        </div>
                        {isActive(link.path) && (
                          <span className="text-xs text-blue-600 font-medium">•</span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* CTA mobile - TAILLES RÉDUITES */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="pt-3 mt-3 border-t border-gray-100"
                  >
                    <div className="space-y-2.5">
                      <Link
                        href="/contact"
                        className="block w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-2.5 px-5 text-center text-sm transition-colors duration-300 flex items-center justify-center gap-1.5 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>Devis gratuit</span>
                        <FaArrowRight className="w-2.5 h-2.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      
                      <a 
                        href={phoneHref}
                        className="flex items-center justify-center gap-2.5 text-gray-700 hover:text-blue-800 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-9 h-9 bg-gray-100 flex items-center justify-center">
                          <FaPhone className="w-3.5 h-3.5 text-blue-800" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-sm">{formattedPhone}</div>
                          {siteInfo?.numero_two && (
                            <div className="text-xs text-gray-500 mt-0.5">
                              {formatPhoneNumber(siteInfo.numero_two)}
                            </div>
                          )}
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