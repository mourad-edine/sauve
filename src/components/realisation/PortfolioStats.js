<<<<<<< HEAD
'use client';
import { FaCheckCircle, FaUsers, FaCalendarAlt, FaStar, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioStats() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      value: "850+",
      label: "Projets réalisés",
      description: "Depuis notre création, nous avons transformé des centaines d'idées en réalité",
      color: "#3B82F6",
      accent: "#93C5FD",
      trend: "+15%",
      delay: 0
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      value: "120+",
      label: "Entreprises clientes",
      description: "Des partenariats durables dans tous les secteurs d'activité",
      color: "#10B981",
      accent: "#6EE7B7",
      trend: "+25%",
      delay: 100
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      value: "15 ans",
      label: "D'expérience",
      description: "Un savoir-faire artisanal enrichi d'années de pratique et d'innovation",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      trend: "✓",
      delay: 200
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      value: "98%",
      label: "Clients satisfaits",
      description: "Témoignages éloquents d'un engagement constant pour la qualité",
      color: "#F59E0B",
      accent: "#FCD34D",
      trend: "+2%",
      delay: 300
    }
  ];

  const milestones = [
    { year: "2009", event: "Création de l'entreprise", color: "#3B82F6" },
    { year: "2015", event: "Premier contrat d'entreprise", color: "#10B981" },
    { year: "2018", event: "Agrandissement de l'atelier", color: "#8B5CF6" },
    { year: "2023", event: "500ème projet réalisé", color: "#F59E0B" }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gray-300"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Notre Impact</span>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Des chiffres qui <span className="font-semibold">parlent d'eux-mêmes</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Des années d'expertise et des centaines de projets réussis témoignent de notre engagement envers l'excellence.
          </p>
        </motion.div>

        {/* Section des statistiques principales */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay / 1000 }}
                className="relative group"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {/* Carte de statistique */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-500 h-full group">
                  {/* En-tête avec icône et tendance */}
                  <div className="flex items-start justify-between mb-6">
                    <div 
                      className="p-3 rounded-lg"
                      style={{ 
                        backgroundColor: `${stat.color}10`,
                        border: `1px solid ${stat.accent}30`
                      }}
                    >
                      <div style={{ color: stat.color }}>
                        {stat.icon}
                      </div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (stat.delay + 200) / 1000 }}
                      className="text-sm font-medium px-2 py-1 rounded-full"
                      style={{ 
                        backgroundColor: `${stat.color}20`,
                        color: stat.color 
                      }}
                    >
                      {stat.trend}
                    </motion.div>
                  </div>

                  {/* Valeur principale */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (stat.delay + 300) / 1000 }}
                    className="mb-2"
                  >
                    <div 
                      className="text-4xl md:text-5xl font-medium mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {stat.label}
                    </h3>
                  </motion.div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {stat.description}
                  </p>

                  {/* Barre de progression animée */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: (stat.delay + 400) / 1000 }}
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{ backgroundColor: stat.color }}
                      />
                    </div>
                  </div>
                </div>

                {/* Effet de survol subtil */}
                {hoveredStat === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -inset-2 rounded-xl border-2 pointer-events-none"
                    style={{ borderColor: stat.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline des jalons */}
        
=======
// components/PortfolioStats.js
import { FaCheckCircle, FaUsers, FaCalendarAlt, FaStar, FaAward } from "react-icons/fa";

export default function PortfolioStats() {
  const stats = [
    {
      icon: <FaCheckCircle className="text-3xl" />,
      value: "850+",
      label: "Projets réalisés",
      description: "Depuis notre création"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      value: "120+",
      label: "Entreprises clientes",
      description: "Tous secteurs confondus"
    },
    {
      icon: <FaCalendarAlt className="text-3xl" />,
      value: "15 ans",
      label: "D'expérience",
      description: "Dans la confection sur mesure"
    },
    {
      icon: <FaStar className="text-3xl" />,
      value: "98%",
      label: "Clients satisfaits",
      description: "Taux de satisfaction"
    }
  ];

  const awards = [
    { year: "2023", title: "Meilleur Artisan Couturier", organization: "Fédération Française de la Couture" },
    { year: "2022", title: "Prix d'Excellence", organization: "Chambre de Métiers de Toamasina" },
    { year: "2021", title: "Label Entreprise du Patrimoine Vivant", organization: "Ministère de l'Économie" },
    { year: "2020", title: "Médaille d'Or", organization: "Concours International de la Couture" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Notre Impact en Chiffres</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Des années d'expertise et des centaines de projets réussis témoignent de notre engagement envers l'excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-yellow-300 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-medium mb-2">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaAward className="text-yellow-300 mr-3" />
                Récompenses & Reconnaissances
              </h3>
              <p className="opacity-90 mb-6">
                Notre engagement pour l'excellence et la qualité a été reconnu à plusieurs reprises par des institutions professionnelles.
              </p>
              <div className="flex items-center">
                <div className="bg-yellow-300 text-blue-900 font-bold px-4 py-2 rounded-lg mr-4">
                  4.9/5
                </div>
                <div>
                  <div className="flex text-yellow-300">
                    {"★".repeat(5)}
                  </div>
                  <div className="text-sm opacity-80">Note moyenne clients</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center bg-white/5 p-4 rounded-xl">
                    <div className="bg-yellow-300 text-blue-900 font-bold px-3 py-1 rounded mr-4">
                      {award.year}
                    </div>
                    <div>
                      <div className="font-medium">{award.title}</div>
                      <div className="text-sm opacity-80">{award.organization}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
      </div>
    </section>
  );
}