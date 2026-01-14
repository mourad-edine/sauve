<<<<<<< HEAD
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
  FaUserFriends,
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
=======
// components/ContactForm.js
'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: 'particulier',
    subject: '',
    message: ''
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
<<<<<<< HEAD
  const [hoveredContact, setHoveredContact] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
=======

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
<<<<<<< HEAD

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

=======
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
<<<<<<< HEAD
        name: "",
        email: "",
        phone: "",
        company: "",
        type: "particulier",
        subject: "",
        message: "",
=======
        name: '',
        email: '',
        phone: '',
        company: '',
        type: 'particulier',
        subject: '',
        message: ''
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
      });
    }, 5000);
  };

<<<<<<< HEAD
  const contactDetails = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Téléphone",
      content: "034 92 192 23",
      subtitle: "Lun-Ven: 9h-18h",
      link: "tel:+261349219223",
      color: "#3B82F6",
      accent: "#93C5FD",
      initials: "T",
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      content: "reflet@confection-vonjy.fr",
      subtitle: "Réponse sous 24h",
      link: "mailto:reflet@confection-vonjy.fr",
      color: "#10B981",
      accent: "#6EE7B7",
      initials: "E",
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Adresse",
      content: "123 Rue de la Couture",
      subtitle: "75000 Toamasina, Madagascar",
      link: "https://maps.google.com/?q=123+Rue+de+la+Couture+75000+Toamasina",
      color: "#8B5CF6",
      accent: "#C4B5FD",
      initials: "A",
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      title: "Horaires",
      content: "Lundi - Vendredi",
      subtitle: "9h00 - 18h00",
      color: "#F59E0B",
      accent: "#FCD34D",
      initials: "H",
    },
  ];

  return (
    <section className="relative py-10 bg-white overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête minimaliste */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gray-300"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                Contact
              </span>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Parlons de <span className="font-semibold">votre projet</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Notre équipe d'experts est à votre disposition pour discuter de vos
            besoins et vous proposer la meilleure solution.
          </p>
        </motion.div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Colonne de gauche - Informations */}
          <div className="lg:col-span-5 space-y-8">
            {/* Carte de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 p-8"
            >
              <div className="mb-8">
                <div className="inline-block mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-px bg-blue-300"></div>
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">
                      Informations
                    </span>
                    <div className="w-6 h-px bg-blue-300"></div>
                  </div>
                </div>
                
              </div>

              <div className="space-y-6">
                {contactDetails.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                    onMouseEnter={() => setHoveredContact(index)}
                    onMouseLeave={() => setHoveredContact(null)}
                  >
                    {contact.link ? (
                      <a href={contact.link} className="block">
                        <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300 bg-white">
                          <div className="relative flex-shrink-0">
                            <div className="relative w-12 h-12">
                              {/* Cercle de fond animé */}
                              <motion.div
                                animate={
                                  hoveredContact === index
                                    ? { rotate: 360 }
                                    : { rotate: 0 }
                                }
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="absolute inset-0 rounded-full border border-dashed opacity-50"
                                style={{ borderColor: contact.color }}
                              />

                              {/* Cercle principal */}
                              <div
                                className="absolute inset-1 rounded-full flex items-center justify-center text-white"
                                style={{ backgroundColor: contact.color }}
                              >
                                                                  {contact.icon}

                              </div>

                              {/* Badge d'icône */}
                              
                            </div>
                          </div>

                          <div className="ml-4 flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">
                              {contact.title}
                            </h4>
                            <p
                              className="text-lg font-medium"
                              style={{ color: contact.color }}
                            >
                              {contact.content}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {contact.subtitle}
                            </p>
                          </div>

                          <FaArrowRight className="text-gray-400 group-hover:text-gray-600 ml-2 transition-colors duration-300" />
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center p-4 rounded-lg border border-gray-200 bg-white">
                        <div className="relative flex-shrink-0">
                          <div className="relative w-12 h-12">
                            <div
                              className="absolute inset-1 rounded-full flex items-center justify-center text-white"
                              style={{ backgroundColor: contact.color }}
                            >
                              {contact.initials}
                            </div>

                            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                              <div style={{ color: contact.color }}>
                                {contact.icon}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="ml-4 flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">
                            {contact.title}
                          </h4>
                          <p
                            className="text-lg font-medium"
                            style={{ color: contact.color }}
                          >
                            {contact.content}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {contact.subtitle}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Indicateur de survol subtil */}
                    {hoveredContact === index && contact.link && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -inset-1 rounded-lg border pointer-events-none"
                        style={{ borderColor: contact.color }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Carte rendez-vous */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-8"
            >
              <div className="flex items-start mb-6">
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 mr-4">
                  <FaCalendarAlt className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Visite sur rendez-vous
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Notre atelier est ouvert sur rendez-vous pour garantir la
                    qualité de votre accueil.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-blue-600">ⓘ</span> Prenez
                  rendez-vous au préalable pour découvrir nos réalisations et
                  discuter de votre projet en personne.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Colonne de droite - Formulaire */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-8 md:p-12 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
                    <FaCheckCircle className="text-green-600 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Message{" "}
                    <span className="font-medium">envoyé avec succès</span>
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Merci pour votre message. Nous vous répondrons dans les plus
                    brefs délais.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    Envoyer un autre message
                  </motion.button>
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
                  <div className="mb-8">
                    <div className="inline-block mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-px bg-blue-300"></div>
                        <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">
                          Formulaire
                        </span>
                        <div className="w-6 h-px bg-blue-300"></div>
                      </div>
                    </div>
                   
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Grille responsive */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className=" text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-300 placeholder-gray-400 bg-white"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-300 placeholder-gray-400 bg-white"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-300 placeholder-gray-400 bg-white"
                          placeholder="034 92 192 23"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-300 placeholder-gray-400 bg-white"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>

                    {/* Type de client */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Vous êtes *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                            <div className="text-gray-700 px-4 py-3 border border-gray-300 rounded-lg text-center cursor-pointer text-sm font-medium peer-checked:border-gray-900 peer-checked:bg-gray-50 peer-checked:text-gray-900 transition duration-300 hover:border-gray-400">
                              {option.label}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Sujet */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Sujet *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-300 bg-white appearance-none"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="devis">Demande de devis</option>
                        <option value="info">Demande d'information</option>
                        <option value="rdv">Prise de rendez-vous</option>
                        <option value="retouches">Service de retouches</option>
                        <option value="urgence">Commande urgente</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition duration-300 placeholder-gray-400 bg-white resize-none"
                        placeholder="Décrivez votre projet, vos besoins, la quantité souhaitée, les délais..."
                      ></textarea>
                      <p className="text-xs text-gray-500">
                        Plus votre message est détaillé, plus nous pourrons vous
                        répondre précisément.
                      </p>
                    </div>

                    {/* Consentement */}
                    <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="text-gray-700 mt-1 w-4 h-4 text-gray-600 focus:ring-gray-400 rounded border-gray-300"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-gray-700"
                      >
                        J'accepte que mes données personnelles soient utilisées
                        pour traiter ma demande, conformément à la politique de
                        confidentialité.
                      </label>
                    </div>

                    {/* Bouton d'envoi */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                          <FaPaperPlane className="mr-3" />
                          Envoyer ma demande
                          <FaArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                      * Champs obligatoires
                    </p>
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
=======
  return (
    <div id="form" className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
      <h2 className="text-xl font-bold text-blue-900 mb-2 uppercase">Envoyez-nous votre demande</h2>
      <p className="text-gray-600 mb-8">
        Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h ouvrées.
      </p>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-2">Message envoyé avec succès !</h3>
          <p className="text-green-600 mb-4">
            Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-blue-700 hover:text-blue-900 font-medium"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="Votre nom"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="034 92 192 23"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Entreprise
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="Nom de votre entreprise"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Vous êtes *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: 'particulier', label: 'Particulier' },
                { value: 'entreprise', label: 'Entreprise' },
                { value: 'association', label: 'Association' },
                { value: 'autre', label: 'Autre' }
              ].map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value={option.value}
                    checked={formData.type === option.value}
                    onChange={handleChange}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Sujet *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="devis">Demande de devis</option>
              <option value="info">Demande d'information</option>
              <option value="rdv">Prise de rendez-vous</option>
              <option value="retouches">Service de retouches</option>
              <option value="urgence">Commande urgente</option>
              <option value="autre">Autre demande</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Décrivez votre projet, vos besoins, la quantité souhaitée, les délais..."
            ></textarea>
            <p className="text-sm text-gray-500 mt-2">
              Plus votre message est détaillé, plus nous pourrons vous répondre précisément.
            </p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              required
              className="mr-3 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="consent" className="text-gray-700">
              J'accepte que mes données personnelles soient utilisées pour traiter ma demande, 
              conformément à la politique de confidentialité.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg text-lg transition duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              <>
                <FaPaperPlane className="mr-3" />
                Envoyer ma demande
              </>
            )}
          </button>

          <p className="text-sm text-gray-500 text-center">
            * Champs obligatoires
          </p>
        </form>
      )}
    </div>
  );
}
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
