// components/ContactForm.js
'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaUserFriends, FaChevronRight } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: 'particulier',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        type: 'particulier',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  const contactDetails = [
    {
      icon: <FaPhone className="text-xl" />,
      title: "Téléphone",
      content: "034 92 192 23",
      subtitle: "Lun-Ven: 9h-18h",
      link: "tel:+33123456789",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      content: "reflet@confection-vonjy.fr",
      subtitle: "Réponse sous 24h",
      link: "mailto:contact@confection-vonjy.fr",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Adresse",
      content: "123 Rue de la Couture",
      subtitle: "75000 Toamasina, Madagascar",
      link: "https://maps.google.com/?q=123+Rue+de+la+Couture+75000+Toamasina",
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Horaires",
      content: "Lundi - Vendredi",
      subtitle: "9h00 - 18h00",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Colonne de gauche - Informations */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8">
            {/* Carte contact */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
              
              
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="group">
                    {detail.link ? (
                      <a 
                        href={detail.link} 
                        className="flex items-start p-3 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                          <span className="text-blue-600 text-lg">
                            {detail.icon}
                          </span>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
                          <p className="text-blue-600 font-medium text-lg">{detail.content}</p>
                          <p className="text-gray-500 text-sm mt-1">{detail.subtitle}</p>
                        </div>
                        <FaChevronRight className="text-gray-400 group-hover:text-blue-600 ml-2 transition-colors" />
                      </a>
                    ) : (
                      <div className="flex items-start p-3 rounded-xl">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-blue-600 text-lg">
                            {detail.icon}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
                          <p className="text-gray-800 font-medium text-lg">{detail.content}</p>
                          <p className="text-gray-500 text-sm mt-1">{detail.subtitle}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Carte rendez-vous */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Visite sur rendez-vous</h2>
              <p className="text-blue-100 mb-6">
                Notre atelier est ouvert sur rendez-vous. Venez découvrir nos réalisations, 
                choisir vos tissus et discuter de votre projet en personne.
              </p>
              <div className="bg-blue-700/30 backdrop-blur-sm rounded-xl p-4 border border-blue-600/30">
                <p className="text-white/90 font-medium">
                  ⓘ Pour garantir la qualité de votre accueil, merci de prendre rendez-vous au préalable.
                </p>
              </div>
            </div>
          </div>

          {/* Colonne de droite - Formulaire */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg p-8 lg:p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="text-green-600 text-4xl" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Message envoyé avec succès !</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-xl lg:text-xl font-bold  mb-3 uppercase text-blue-950">
                    Parlez-nous de votre projet
                  </h2>
                  <p className="text-gray-600">
                    Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h ouvrées.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grille responsive pour les champs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 placeholder-gray-400"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 placeholder-gray-400"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 placeholder-gray-400"
                        placeholder="034 92 192 23"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 placeholder-gray-400"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  {/* Type de client - Responsive */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      Vous êtes *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { value: 'particulier', label: 'Particulier' },
                        { value: 'entreprise', label: 'Entreprise' },
                        { value: 'association', label: 'Association' },
                        { value: 'autre', label: 'Autre' }
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
                          <div className="px-4 py-3 border border-blue-300 rounded-lg text-center cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition duration-300 hover:border-gray-400">
                            {option.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-white appearance-none"
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
                    <label className="block text-gray-700 font-medium">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 placeholder-gray-400 resize-none"
                      placeholder="Décrivez votre projet, vos besoins, la quantité souhaitée, les délais..."
                    ></textarea>
                    <p className="text-sm text-gray-500">
                      Plus votre message est détaillé, plus nous pourrons vous répondre précisément.
                    </p>
                  </div>

                  {/* Consentement */}
                  <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-5 h-5 text-blue-600 focus:ring-blue-500 rounded"
                    />
                    <label htmlFor="consent" className="text-gray-700 text-sm">
                      J'accepte que mes données personnelles soient utilisées pour traiter ma demande, 
                      conformément à la politique de confidentialité.
                    </label>
                  </div>

                  {/* Bouton d'envoi */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center"
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}