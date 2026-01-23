"use client";

import { FaCheckCircle, FaUsers, FaCalendarAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PortfolioStats() {
  const stats = [
    { icon: <FaCheckCircle />, value: "850+", label: "Projets réalisés" },
    { icon: <FaUsers />, value: "120+", label: "Entreprises clientes" },
    { icon: <FaCalendarAlt />, value: "15 ans", label: "D'expérience" },
    { icon: <FaStar />, value: "98%", label: "Clients satisfaits" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  // Auto-scroll seulement sur mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 4000); // change toutes les 4 secondes

    return () => clearInterval(interval);
  }, [isMobile, stats.length]);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header discret */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
            Notre impact en chiffres
          </span>
          <h2 className="mt-3 text-xl md:text-2xl font-light text-blue-900">
            Quelques résultats concrets
          </h2>
        </div>

        {/* Version desktop + tablette : grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-800/80 mb-3 text-xl md:text-2xl flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-medium text-blue-950 mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Version mobile : carrousel auto */}
        <div className="sm:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="text-center py-6">
                  <div className="text-blue-800/80 mb-4 text-3xl flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-semibold text-blue-950 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Petits indicateurs (points) */}
          <div className="flex justify-center gap-2 mt-4">
            {stats.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-blue-700 w-6" : "bg-gray-300"
                }`}
                aria-label={`Aller à la statistique ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}