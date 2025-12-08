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