'use client';
import { FaCheckCircle, FaUsers, FaCalendarAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PortfolioStats() {
  const stats = [
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      value: "850+",
      label: "Projets réalisés",
      description: "Depuis notre création, nous avons transformé des centaines d'idées en réalité"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      value: "120+",
      label: "Entreprises clientes",
      description: "Des partenariats durables dans tous les secteurs d'activité"
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6" />,
      value: "15 ans",
      label: "D'expérience",
      description: "Un savoir-faire artisanal enrichi d'années de pratique et d'innovation"
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      value: "98%",
      label: "Clients satisfaits",
      description: "Témoignages éloquents d'un engagement constant pour la qualité"
    }
  ];

  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 h-px bg-gray-300"></div>
                <span className="text-sm font-medium text-gray-500 uppercase">
                  Notre Impact
                </span>
                <div className="w-6 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-900 mb-4 uppercase">
              Des chiffres qui
              <span className="block text-base md:text-lg lg:text-xl text-yellow-600 font-normal mt-2">
                parlent d'eux-mêmes
              </span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          </div>
        </div>

        {/* Desktop: Banderole horizontale */}
        <div className="hidden lg:block relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
          >
            {[...stats, ...stats].map((stat, index) => (
              <div
                key={`desktop-${index}`}
                className="flex-shrink-0 w-64 bg-white border border-gray-200 p-5 hover:border-blue-300 transition-all duration-300 h-[200px] flex flex-col rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-900 flex items-center justify-center rounded-md">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-blue-700 uppercase">
                    {stat.label}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="text-3xl font-bold text-blue-900 mb-1">
                    {stat.value}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile & Tablet: Grille statique */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={`mobile-${index}`}
                className="bg-white border border-gray-200 p-4 h-[160px] flex flex-col rounded-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-900 flex items-center justify-center rounded-md">
                    <div className="text-white text-sm">
                      {stat.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-blue-700">
                    {stat.label}
                  </span>
                </div>

                <div className="mb-2">
                  <div className="text-2xl font-bold text-blue-900">
                    {stat.value}
                  </div>
                </div>
                
                <p className="text-gray-600 text-xs leading-relaxed flex-1">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateur */}
       
      </div>
    </section>
  );
}