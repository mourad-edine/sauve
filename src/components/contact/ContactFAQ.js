// components/ContactFAQ.js
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const contactFAQs = [
    {
      question: "Quel est le délai de réponse à mes demandes ?",
      answer: "Nous nous engageons à répondre à toutes les demandes sous 24 heures ouvrées. Pour les demandes complexes nécessitant une étude approfondie, nous vous informerons du délai de réponse complet."
    },
    {
      question: "Puis-je visiter votre atelier sans rendez-vous ?",
      answer: "Pour garantir un accueil de qualité et la disponibilité de nos experts, nous recevons uniquement sur rendez-vous. Cela nous permet de préparer votre visite et de vous consacrer tout le temps nécessaire."
    },
    {
      question: "Proposez-vous des services de prise de mesures à domicile ?",
      answer: "Oui, pour les commandes importantes (généralement à partir de 10 pièces pour les entreprises) ou dans le cadre de projets spécifiques, nous proposons des services de prise de mesures à domicile ou sur votre lieu de travail. Des frais de déplacement peuvent s'appliquer selon la distance."
    },
    {
      question: "Quels sont vos délais de fabrication ?",
      answer: "Les délais varient selon la complexité et la quantité : 2-4 semaines pour les particuliers, 4-8 semaines pour les entreprises selon la quantité. Des options express sont disponibles sur demande avec supplément."
    },
    {
      question: "Travaillez-vous avec des entreprises en région/étranger ?",
      answer: "Absolument ! Nous travaillons avec des clients dans toute la Madagascar et à l'international. Nous organisons des visites régionales pour les projets importants et gérons l'intégralité de la logistique."
    },
    {
      question: "Comment puis-je suivre l'avancement de ma commande ?",
      answer: "Chaque client reçoit un accès personnel à notre plateforme de suivi où vous pouvez voir l'état d'avancement de votre commande, les étapes validées et les prochaines échéances. Vous recevez également des notifications par email."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Questions sur le contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquentes concernant nos services et contacts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          {contactFAQs.map((faq, index) => (
            <div key={index} className="mb-4 border border-blue-200 rounded-xl overflow-hidden">
              <button
                className="w-full p-6 text-left bg-blue-50 hover:bg-blue-100 transition duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold text-blue-900">{faq.question}</h3>
                <div className="text-blue-700">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe clientèle est disponible pour répondre à toutes vos interrogations. 
              N'hésitez pas à nous contacter par le moyen de votre choix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+33123456789"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center"
              >
                <span className="mr-2">📞</span> Appeler maintenant
              </a>
              <a 
                href="mailto:contact@confection-pro.fr"
                className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center"
              >
                <span className="mr-2">✉️</span> Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}