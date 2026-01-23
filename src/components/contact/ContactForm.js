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

  const primaryColor = "#1e40af";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            Contactez-nous
          </span>
          <div className="w-16 h-px bg-blue-700 mx-auto mt-5"></div>
        </div>

        {/* Grille principale */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Formulaire */}
          <div className="lg:col-span-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-gray-200 p-6 md:p-10 flex flex-col items-center justify-center text-center min-h-[400px] lg:min-h-[540px]"
              >
                <div className="w-14 h-14 bg-green-600 flex items-center justify-center text-white mb-6">
                  <FaCheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  Message envoyé avec succès
                </h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  Merci pour votre demande. Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-800 font-medium hover:text-blue-900 transition-colors"
                >
                  Envoyer un nouveau message →
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 border border-gray-200 p-5 md:p-8 lg:p-10 min-h-[400px] lg:min-h-[540px]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Entreprise (facultatif)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-3">
                    Vous êtes *
                  </label>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {["Particulier", "Entreprise"].map((type) => (
                      <label key={type} className="cursor-pointer">
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
                          className={`inline-block px-5 py-3 border text-base font-medium transition-colors ${
                            formData.type === type.toLowerCase()
                              ? "bg-blue-800 text-white border-blue-800"
                              : "bg-white text-gray-800 border-gray-300 hover:border-blue-800"
                          }`}
                        >
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900 appearance-none bg-white"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="info">Information / catalogue</option>
                    <option value="rdv">Prendre rendez-vous</option>
                    <option value="retouches">Retouches / modifications</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Votre message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900 resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1.5 w-5 h-5 text-blue-800 border-gray-300 focus:ring-blue-800"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                    J'accepte que mes données soient traitées conformément à la politique de confidentialité.
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ x: 6 }}
                  className={`w-full py-4 px-8 font-medium text-white transition-colors flex items-center justify-center gap-3 text-lg ${
                    isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-blue-800 hover:bg-blue-900"
                  }`}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message
                      <FaArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* Coordonnées */}
          <div className="lg:col-span-4">
            <div className="border border-gray-200 p-6 md:p-8 min-h-[420px] lg:min-h-[580px] flex flex-col">
              <div className="space-y-6 flex-1">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-800 flex items-center justify-center text-white shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-blue-800 hover:text-blue-900 font-medium transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}