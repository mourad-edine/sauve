"use client";

import Link from "next/link";
import {
  FaRulerCombined,
  FaCalendarAlt,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioCTA() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FaLightbulb className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Inspiration",
      description:
        "Partagez vos idées et laissez-vous inspirer par nos réalisations et notre savoir-faire.",
      action: "Explorer nos projets",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/022/609/737/small/engineer-man-worker-in-hard-hat-png.png",
    },
    {
      icon: <FaRulerCombined className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Consultation",
      description:
        "Échangez avec nos experts pour cadrer précisément vos besoins et vos objectifs.",
      action: "Prendre rendez-vous",
      image:
        "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png",
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Réalisation",
      description:
        "Nous concevons et réalisons votre projet avec méthode, précision et exigence.",
      action: "Visiter l’atelier",
      // Image ajoutée – équipe sur chantier / planification réalisation
      image:
        "https://www.pngarts.com/files/3/Engineer-PNG-Download-Image.png",
      // Alternative si tu veux une autre ambiance :
      // "https://www.rawpixel.com/image/18064783/team-discussing-construction-plans"
    },
  ];

  const current = steps[activeStep];

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm tracking-widest uppercase text-blue-600 font-medium mb-3">
             Prêt à concrétiser votre projet ?
          </p>
         
        </div>

        {/* Navigation étapes – plus pro */}
        <div className="flex justify-center gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-14">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative pb-3 text-sm md:text-base font-medium transition-colors duration-200 ${
                activeStep === index
                  ? "text-blue-950"
                  : "text-gray-500 hover:text-blue-800"
              }`}
            >
              <span className="block mb-1.5 text-[11px] md:text-xs uppercase tracking-widest font-normal text-gray-500">
                Étape {index + 1}
              </span>
              {step.title}
              {activeStep === index && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-900"></span>
              )}
            </button>
          ))}
        </div>

        {/* Contenu principal */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* VISUEL – caché en < lg (mobile) */}
          {current.image && (
            <div className="hidden lg:flex relative justify-center lg:justify-start items-center min-h-[380px] xl:min-h-[440px]">
              <motion.img
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                  w-auto max-h-[420px] xl:max-h-[500px]
                  object-contain
                  scale-110 xl:scale-125
                  -translate-y-8 xl:-translate-y-12
                  pointer-events-none
                  drop-shadow-xl
                "
              />
            </div>
          )}

          {/* TEXTE – prend toute la largeur en mobile */}
         <div
  className="
    max-w-2xl mx-auto lg:mx-0
    text-center lg:text-left

    /* Card uniquement en responsive */
    bg-white lg:bg-transparent
     lg:rounded-none
    shadow-md lg:shadow-none
    p-6 sm:p-8 lg:p-0
    border border-gray-100 lg:border-none
  "
>
  {/* Étape */}
  <span className="block text-xs md:text-sm uppercase tracking-widest text-blue-700 font-medium mb-4">
    Étape {activeStep + 1}
  </span>

  {/* Titre */}
  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-950 mb-5 md:mb-6">
    {current.title}
  </h3>

  {/* Description */}
  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
    {current.description}
  </p>

  {/* CTA */}
  <Link href="/contact">
    <motion.span
      whileHover={{ x: 8 }}
      className="
        inline-flex items-center gap-3
        text-blue-900 font-semibold text-lg
        hover:text-blue-700 transition-colors
      "
    >
      {current.action}
      <FaArrowRight className="text-xl" />
    </motion.span>
  </Link>
</div>

        </motion.div>
      </div>
    </section>
  );
}