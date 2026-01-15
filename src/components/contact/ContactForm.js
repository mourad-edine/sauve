"use client";
import { useState } from "react";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
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
  const [hoveredContact, setHoveredContact] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Réinitialiser après 5 secondes
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
    }, 5000);
  };

  const contactDetails = [
    {
      icon: <FaPhone className="w-4 h-4" />,
      title: "Téléphone",
      content: "034 92 192 23",
      subtitle: "Lun-Ven: 9h-18h",
      link: "tel:+261349219223",
      color: "#111827",
      accent: "#6B7280",
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      title: "Email",
      content: "reflet@confection-vonjy.fr",
      subtitle: "Réponse sous 24h",
      link: "mailto:reflet@confection-vonjy.fr",
      color: "#111827",
      accent: "#6B7280",
    },
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      title: "Adresse",
      content: "123 Rue de la Couture",
      subtitle: "75000 Toamasina, Madagascar",
      link: "https://maps.google.com/?q=123+Rue+de+la+Couture+75000+Toamasina",
      color: "#111827",
      accent: "#6B7280",
    },
    {
      icon: <FaClock className="w-4 h-4" />,
      title: "Horaires",
      content: "Lundi - Vendredi",
      subtitle: "9h00 - 18h00",
      color: "#111827",
      accent: "#6B7280",
    },
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Lignes décoratives */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Colonne gauche - Contact */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-r border-gray-100 h-full p-8"
            >
              <div className="mb-12">
                <h3 className="text-2xl font-light text-gray-900 mb-3">
                  Contactez-nous
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Notre équipe est à votre écoute pour concrétiser vos projets
                  sur mesure.
                </p>
              </div>

              <div className="space-y-6">
                {contactDetails.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                    onMouseEnter={() => setHoveredContact(index)}
                    onMouseLeave={() => setHoveredContact(null)}
                  >
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="flex items-start p-0 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div
                          className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4 transition-colors duration-200"
                          style={{
                            backgroundColor:
                              hoveredContact === index ? contact.color : "#f9fafb",
                            color: hoveredContact === index ? "white" : contact.color,
                          }}
                        >
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            {contact.title}
                          </h4>
                          <p className="text-gray-900 font-medium mb-0.5">
                            {contact.content}
                          </p>
                          <p className="text-xs text-gray-400">
                            {contact.subtitle}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start p-0">
                        <div
                          className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#f9fafb", color: contact.color }}
                        >
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            {contact.title}
                          </h4>
                          <p className="text-gray-900 font-medium mb-0.5">
                            {contact.content}
                          </p>
                          <p className="text-xs text-gray-400">
                            {contact.subtitle}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Section rendez-vous */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-8 border-t border-gray-100"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-50 mr-4">
                    <FaCalendarAlt className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Visite sur rendez-vous
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Notre atelier est accessible sur rendez-vous pour un
                      accompagnement personnalisé.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="bg-white p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center mb-6">
                    <FaCheckCircle className="text-gray-900 text-2xl" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4">
                    Message envoyé
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-sm text-sm">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium py-3 px-6 hover:bg-gray-800 transition-colors duration-200"
                  >
                    Nouveau message
                  </motion.button>
                </div>
              ) : (
                <div className="bg-white p-8 h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-light text-gray-900 mb-3">
                      Votre projet
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Remplissez ce formulaire pour une étude personnalisée.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 transition duration-200 placeholder-gray-400 bg-white text-sm"
                          placeholder="Jean Dupont"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 transition duration-200 placeholder-gray-400 bg-white text-sm"
                          placeholder="contact@exemple.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 transition duration-200 placeholder-gray-400 bg-white text-sm"
                          placeholder="034 92 192 23"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 transition duration-200 placeholder-gray-400 bg-white text-sm"
                          placeholder="Société XYZ"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Type de client *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[
                          { value: "particulier", label: "Particulier" },
                          { value: "entreprise", label: "Entreprise" },
                          { value: "association", label: "Association" },
                          { value: "autre", label: "Autre" },
                        ].map((option) => (
                          <label key={option.value} className="relative">
                            <input
                              type="radio"
                              name="type"
                              value={option.value}
                              checked={formData.type === option.value}
                              onChange={handleChange}
                              className="sr-only peer"
                              required
                            />
                            <div className="px-4 py-3 border border-gray-200 text-center cursor-pointer text-xs font-medium peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-white transition duration-200 hover:border-gray-400">
                              {option.label}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Sujet *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 transition duration-200 bg-white text-sm appearance-none"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="devis">Demande de devis</option>
                        <option value="info">Information produit</option>
                        <option value="rdv">Rendez-vous showroom</option>
                        <option value="retouches">Service retouches</option>
                        <option value="urgence">Commande urgente</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 transition duration-200 placeholder-gray-400 bg-white text-sm resize-none"
                        placeholder="Décrivez votre projet en détail..."
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-3 py-4">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1 w-4 h-4 text-gray-900 focus:ring-gray-400 border-gray-300"
                      />
                      <label htmlFor="consent" className="text-xs text-gray-500">
                        J'accepte la politique de confidentialité et le
                        traitement de mes données personnelles.
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer la demande
                          <FaArrowRight className="ml-3 w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}