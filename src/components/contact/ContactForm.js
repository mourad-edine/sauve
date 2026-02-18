"use client";

import { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaUser,
  FaBuilding,
} from "react-icons/fa";
import { motion } from "framer-motion";

const API_URL = "https://admin.confection-vonjy.mg/api/info_site";
const MESSAGE_API_URL = "https://admin.confection-vonjy.mg/api/create_message";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    telephone2: "",
    entreprise: "",
    type: "particulier",
    objet: "",
    message: "",
  });

  const [siteInfo, setSiteInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Récupérer les informations du site depuis l'API
  useEffect(() => {
    fetchSiteInfo();
  }, []);

  const fetchSiteInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setSiteInfo(data);
    } catch (err) {
      console.error("Error fetching site info:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Formatage des numéros de téléphone
  const formatPhoneNumber = (phone) => {
    if (!phone) return '';

    return phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(MESSAGE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone || null,
          objet: formData.objet || (formData.type === 'entreprise' ? 'Demande entreprise' : 'Demande particulier'),
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'envoi du message');
      }

      setIsSubmitted(true);
      
      // Réinitialiser le formulaire après succès
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          entreprise: "",
          type: "particulier",
          objet: "",
          message: "",
        });
      }, 6000);

    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: FaPhone, 
      label: "Téléphone", 
      value: siteInfo?.numero_one ? formatPhoneNumber(siteInfo.numero_one) : "Chargement...", 
      link: siteInfo?.numero_one ? `tel:${siteInfo.numero_one.replace(/\s+/g, '')}` : null 
    },
     { 
      icon: FaPhone, 
      label: "Téléphone", 
      value: siteInfo?.numero_two ? formatPhoneNumber(siteInfo.numero_two) : "Chargement...", 
      link: siteInfo?.numero_two ? `tel:${siteInfo.numero_two.replace(/\s+/g, '')}` : null 
    },
    { 
      icon: FaEnvelope, 
      label: "Email", 
      value: siteInfo?.emails || "Chargement...", 
      link: siteInfo?.emails ? `mailto:${siteInfo.emails}` : null 
    },
    { 
      icon: FaMapMarkerAlt, 
      label: "Adresse", 
      value: siteInfo?.adresse || "Chargement..." 
    },
    { 
      icon: FaClock, 
      label: "Horaires", 
      value: "Lun–sam : 8h30–17h30" 
    },
  ];

  return (
    <section id="form" className="py-16 md:py-24 bg-white">
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
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900"
                      placeholder="Votre prénom"
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
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900"
                      placeholder="+261 34 00 000 00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-3">
                    Vous êtes *
                  </label>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {[
                      { value: "particulier", label: "Particulier", icon: FaUser },
                      { value: "entreprise", label: "Entreprise", icon: FaBuilding }
                    ].map((type) => (
                      <label key={type.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value={type.value}
                          checked={formData.type === type.value}
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                        <span
                          className={`inline-flex items-center gap-2 px-5 py-3 border text-base font-medium transition-colors ${
                            formData.type === type.value
                              ? "bg-blue-800 text-white border-blue-800"
                              : "bg-white text-gray-800 border-gray-300 hover:border-blue-800"
                          }`}
                        >
                          <type.icon className="w-4 h-4" />
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.type === "entreprise" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Nom de l'entreprise
                    </label>
                    <input
                      type="text"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Objet *
                  </label>
                  <select
                    name="objet"
                    value={formData.objet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-300 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition text-base text-gray-900 appearance-none bg-white"
                  >
                    <option value="">Choisissez un objet</option>
                    <option value="Demande de devis">Demande de devis</option>
                    <option value="Information / catalogue">Information / catalogue</option>
                    <option value="Prise de rendez-vous">Prendre rendez-vous</option>
                    <option value="Retouches / modifications">Retouches / modifications</option>
                    <option value="Autre">Autre demande</option>
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
                    placeholder="Décrivez votre demande..."
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
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Envoi en cours...
                    </>
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
                {loading ? (
                  // Skeleton loading
                  Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-200 animate-pulse rounded"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 animate-pulse rounded w-20 mb-2"></div>
                        <div className="h-5 bg-gray-200 animate-pulse rounded w-32"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  contactInfo.map((item, i) => (
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
                  ))
                )}
              </div>

              {/* Informations supplémentaires */}
              <div className="pt-8 mt-8 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-800 mb-3">
                  Pour un devis rapide
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-800 mt-1.5 rounded-full"></div>
                    <span>Précisez le nombre de personnes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-800 mt-1.5 rounded-full"></div>
                    <span>Indiquez le type d'uniformes souhaité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-800 mt-1.5 rounded-full"></div>
                    <span>Joignez des photos ou modèles si possible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}