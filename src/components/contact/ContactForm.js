"use client";
import { useState } from "react";
import {
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "particulier",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        type: "particulier",
        subject: "",
        message: "",
      });
    }, 6000);
  };

  const contactInfo = [
    { icon: FaPhone, label: "Téléphone", value: "034 92 192 23", link: "tel:+261349219223" },
    { icon: FaEnvelope, label: "Email", value: "reflet@confection-vonjy.fr", link: "mailto:reflet@confection-vonjy.fr" },
    { icon: FaMapMarkerAlt, label: "Adresse", value: "Toamasina, Madagascar" },
    { icon: FaClock, label: "Horaires", value: "Lun–Ven 9h–18h" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre stylisé */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          

          <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-gray-300" />
            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-light tracking-wide">
              Nous sommes à votre écoute
            </p>
            <div className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-gray-300" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Formulaire */}
          <div className="lg:col-span-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gray-50 border border-gray-200 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-50 text-green-600 rounded-full mb-5 sm:mb-6">
                  <FaCheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2.5xl font-medium text-gray-900 mb-3 sm:mb-4">
                  Message envoyé avec succès
                </h3>
                <p className="text-sm sm:text-base text-gray-800 mb-6 sm:mb-8 max-w-md mx-auto">
                  Merci pour votre demande. Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm sm:text-base"
                >
                  Envoyer un nouveau message →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8">
                {/* Champs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm sm:text-base text-gray-800 00"
                      
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm sm:text-base text-gray-800 00"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm sm:text-base text-gray-800 00"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
                      Entreprise (facultatif)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm sm:text-base text-gray-800 00"
                    />
                  </div>
                </div>

                {/* Type de client */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2 sm:mb-3">
                    Vous êtes *
                  </label>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {["Particulier", "Entreprise", "Association", "Autre"].map((type) => (
                      <label key={type}>
                        <input
                          type="radio"
                          name="type"
                          value={type.toLowerCase()}
                          checked={formData.type === type.toLowerCase()}
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                        <span
                          className={`inline-block px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium cursor-pointer border transition-colors ${
                            formData.type === type.toLowerCase()
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-gray-800 border-gray-300 hover:border-blue-400"
                          }`}
                        >
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sujet */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm sm:text-base text-gray-800 appearance-none bg-white"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="info">Information / catalogue</option>
                    <option value="rdv">Prendre rendez-vous</option>
                    <option value="retouches">Retouches / modifications</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
                    Votre message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm sm:text-base text-gray-800 resize-none 00"
                  />
                </div>

                {/* Consentement */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="text-sm sm:text-sm text-gray-800 leading-relaxed">
                    J'accepte que mes données soient traitées conformément à la politique de confidentialité.
                  </label>
                </div>

                {/* Bouton */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-3.5 sm:py-4 px-6 font-medium text-white rounded-md transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message
                      <FaArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* Coordonnées */}
          <div className="lg:col-span-4">
            <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6 sm:mb-8">
              Coordonnées
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-800 uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 text-sm sm:text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
  <div className="text-center text-sm text-gray-800">
    <p className="font-medium">Réponse garantie sous 24h ouvrées</p>
    <p className="mt-1.5 text-gray-700">
      Équipe basée à Toamasina, Madagascar
    </p>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}