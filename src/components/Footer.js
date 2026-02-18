// components/Footer.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaArrowRight,
  FaGlobe
} from 'react-icons/fa';

const API_URL = "https://admin.confection-vonjy.mg/api/info_site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [siteInfo, setSiteInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      setError(err.message);
      console.error("Error fetching site info:", err);
    } finally {
      setLoading(false);
    }
  };

  const quickLinks = [
    { label: "Accueil", href: "/" },
    { label: "Nos services", href: "/service" },
    { label: "Réalisations", href: "/process" },
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

  // Formatage des numéros de téléphone
  const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    
    // Retirer tous les caractères non numériques
   
    
    // Si le numéro commence par 0, formater local
  
    // Si le numéro est déjà formaté internationalement
   
    // Retourner le numéro original s'il ne correspond à aucun format
    return phone;
  };

  // Générer les liens de contact dynamiquement
  const contactItems = [
    { 
      icon: FaMapMarkerAlt, 
      text: siteInfo?.adresse || "Adresse en cours de chargement...",
      href: siteInfo?.adresse ? `https://maps.google.com/?q=${encodeURIComponent(siteInfo.adresse)}` : '#'
    },
    { 
      icon: FaPhoneAlt, 
      text: siteInfo?.numero_one ? formatPhoneNumber(siteInfo.numero_one) : "Chargement...",
      href: siteInfo?.numero_one ? `tel:${siteInfo.numero_one.replace(/\s+/g, '')}` : '#'
    },
    ...(siteInfo?.numero_two ? [{
      icon: FaPhoneAlt, 
      text: formatPhoneNumber(siteInfo.numero_two),
      href: `tel:${siteInfo.numero_two.replace(/\s+/g, '')}`
    }] : []),
    { 
      icon: FaEnvelope, 
      text: siteInfo?.emails || "Chargement...",
      href: siteInfo?.emails ? `mailto:${siteInfo.emails}` : '#'
    },
    { 
      icon: FaClock, 
      text: "Lun–sam : 8h30–17h30"
    },
    ...(siteInfo?.postal_code ? [{
      icon: FaGlobe, 
      text: `Code postal: ${siteInfo.postal_code}`
    }] : [])
  ];

  if (error) {
    return (
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-red-600">Erreur de chargement des informations du site</p>
          <button 
            onClick={fetchSiteInfo}
            className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
          >
            Réessayer
          </button>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Colonne 1 – Marque avec données API */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                {siteInfo?.logo && (
                  <div className="w-12 h-12 relative rounded-full overflow-hidden border border-gray-200">
                    <img 
                      src={`https://admin.confection-vonjy.mg/uploads/images/${siteInfo.logo}`}
                      alt={siteInfo?.nom || "Logo"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg uppercase font-semibold text-gray-900 tracking-tight">
                    {siteInfo?.nom || ""}
                  </h3>
                  <div className="h-px w-12 bg-blue-800 mt-2" />
                </div>
              </div>
            </Link>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {siteInfo?.description || "Spécialiste des uniformes et vêtements professionnels sur mesure à Toamasina depuis 15 ans."}
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

          {/* Colonne 4 – Contact dynamique depuis l'API */}
          <div>
            <h3 className="text-sm uppercase font-medium text-gray-800 mb-5 tracking-wider">
              Contactez-nous
            </h3>
            
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-200 animate-pulse rounded"></div>
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-4 text-sm text-gray-700">
                {contactItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <item.icon 
                      className={`w-5 h-5 text-blue-800 shrink-0 mt-0.5`} 
                    />
                    {item.href && !item.href.startsWith('#') ? (
                      <a 
                        href={item.href} 
                        className="hover:text-blue-800 transition-colors font-medium block"
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="font-medium block">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Copyright avec nom dynamique */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© {currentYear} {siteInfo?.nom || "Confection Vonjy"} – Tous droits réservés</p>
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