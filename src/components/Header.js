// components/Header.js - Version simplifiée
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'Réalisations', path: '/process' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="Logo Confection Vonjy"
                width={60}
                height={60}
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-blue-900">
                Confection<span className="text-yellow-500"> Vonjy</span>
              </h1>
              <p className="text-xs text-gray-500">Vêtements sur mesure</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  href={link.path}
                  className={`
                    text-blue-900 font-medium transition duration-300
                    ${isActive(link.path) 
                      ? 'text-blue-700 font-semibold' 
                      : 'hover:text-blue-700'
                    }
                  `}
                >
                  {link.name}
                </Link>
                
                {/* Indicateur sous le texte pour la page active */}
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </div>
            ))}
            
            <Link
              href="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-5 rounded-lg transition duration-300 ml-4"
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Menu mobile button */}
          <button
            className="md:hidden text-blue-900 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`
                    px-4 py-3 rounded-lg transition duration-300 font-medium
                    ${isActive(link.path) 
                      ? 'bg-blue-100 text-blue-700 font-semibold' 
                      : 'text-blue-900 hover:bg-blue-50 hover:text-blue-700'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    {isActive(link.path) && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                </Link>
              ))}
              
              <div className="pt-2 mt-2">
                <Link
                  href="/contact"
                  className="block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devis gratuit
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}