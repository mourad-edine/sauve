"use client";

import { FaCheckCircle, FaUsers, FaCalendarAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PortfolioStats() {
  const [siteInfo, setSiteInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Valeurs par défaut en attendant les données ou en cas d'erreur
  const defaultStats = [
    { icon: <FaCheckCircle />, value: "14+", label: "Projets réalisés" },
    { icon: <FaUsers />, value: "20+", label: "Entreprises clientes" },
    { icon: <FaCalendarAlt />, value: "8 ans", label: "D'expérience" },
    { icon: <FaStar />, value: "33%", label: "Clients satisfaits" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Récupérer les données depuis l'API
  useEffect(() => {
    const fetchSiteInfo = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://admin.confection-vonjy.mg/api/info_site');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setSiteInfo(data);
        setError(null);
      } catch (err) {
        console.error("Erreur lors de la récupération des données:", err);
        setError("Impossible de charger les statistiques");
      } finally {
        setLoading(false);
      }
    };

    fetchSiteInfo();
  }, []);

  // Vérifier si on est sur mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Vérifier immédiatement
    checkIfMobile();
    
    // Écouter les changements de taille
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Préparer les statistiques à partir des données de l'API
  const stats = siteInfo ? [
    { 
      icon: <FaCheckCircle />, 
      value: `${siteInfo.projet}+`, 
      label: "Projets réalisés" 
    },
    { 
      icon: <FaUsers />, 
      value: `${siteInfo.entreprise}+`, 
      label: "Entreprises clientes" 
    },
    { 
      icon: <FaCalendarAlt />, 
      value: `${siteInfo.annee} ans`, 
      label: "D'expérience" 
    },
    { 
      icon: <FaStar />, 
      value: `${siteInfo.satisfaction}%`, 
      label: "Clients satisfaits" 
    },
  ] : defaultStats;

  // Auto-scroll seulement sur mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 4000); // change toutes les 4 secondes

    return () => clearInterval(interval);
  }, [isMobile, stats.length]);

  // Composant Counter avec animation
  const Counter = ({ value }) => {
    const [displayValue, setDisplayValue] = useState("0");
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      // Extraire le nombre de la valeur (ex: "14+" -> 14)
      const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
      const hasPlus = value.includes('+');
      const isPercentage = value.includes('%');
      
      let start = 0;
      const duration = 2000; // 2 secondes
      const increment = numericValue / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          clearInterval(timer);
          setDisplayValue(
            `${Math.floor(numericValue)}${hasPlus ? '+' : ''}${isPercentage ? '%' : ''}`
          );
        } else {
          setDisplayValue(
            `${Math.floor(start)}${hasPlus ? '+' : ''}${isPercentage ? '%' : ''}`
          );
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <div ref={ref} className="text-3xl md:text-4xl font-medium text-blue-950 mb-1">
        {displayValue}
      </div>
    );
  };

  // Skeleton loading
  if (loading) {
    return (
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
              Notre impact en chiffres
            </span>
            <h2 className="mt-3 text-xl md:text-2xl font-light text-blue-900">
              Quelques résultats concrets
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="text-blue-800/80 mb-3 text-xl md:text-2xl flex justify-center">
                  <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl md:text-4xl font-medium text-blue-950 mb-1">
                  <div className="h-10 bg-gray-200 rounded-lg animate-pulse mx-auto max-w-[100px]"></div>
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-600">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mx-auto max-w-[120px]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          {error && (
            <p className="mt-2 text-sm text-red-500">{error}</p>
          )}
        </div>

        {/* Version desktop + tablette : grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-blue-800/80 mb-3 text-xl md:text-2xl flex justify-center">
                {stat.icon}
              </div>
              <Counter value={stat.value} />
              <div className="text-xs uppercase tracking-wider text-gray-600">
                {stat.label}
              </div>
            </motion.div>
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-6"
                >
                  <div className="text-blue-800/80 mb-4 text-3xl flex justify-center">
                    {stat.icon}
                  </div>
                  <Counter value={stat.value} />
                  <div className="text-sm uppercase tracking-widest text-gray-600 mt-2">
                    {stat.label}
                  </div>
                </motion.div>
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