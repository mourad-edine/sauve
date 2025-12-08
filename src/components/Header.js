// components/Header.js - Version avec logo plus visible
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'Réalisations', path: '/process' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo avec taille adaptée */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="Logo ConfectionPro"
                width={70}
                height={70}
                className="h-14 w-14 md:h-16 md:w-16 object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-blue-900">
                Confection<span className="text-yellow-500">Pro</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-600">Vêtements sur mesure</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-blue-900 font-medium hover:text-yellow-600 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
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
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-blue-900 font-medium hover:text-yellow-600 py-2 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Devis gratuit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}