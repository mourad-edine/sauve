// components/ServiceFAQ.js
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quel est le délai moyen de confection ?",
      answer: "Les délais varient selon la complexité et la quantité. Pour les particuliers : 2-4 semaines. Pour les entreprises : 4-8 semaines selon la quantité. Des options express sont disponibles sur demande."
    },
    {
      question: "Proposez-vous des services de prise de mesures à domicile ?",
      answer: "Oui, nous proposons des services de prise de mesures à domicile ou sur votre lieu de travail pour les commandes importantes (généralement à partir de 10 pièces). Des frais de déplacement peuvent s'appliquer selon la distance."
    },
    {
      question: "Quelles sont vos conditions de paiement ?",
      answer: "Pour les particuliers : 50% à la commande, 50% à la livraison. Pour les entreprises : devis et conditions personnalisées selon le volume, avec possibilité de paiement échelonné pour les grosses commandes."
    },
    {
      question: "Proposez-vous des garanties sur vos créations ?",
      answer: "Oui, toutes nos créations sont garanties 1 an contre les défauts de fabrication. Nous proposons également un service de retouches et ajustements dans les 30 jours suivant la livraison."
    },
    {
      question: "Pouvez-vous reproduire un vêtement que j'ai déjà ?",
      answer: "Absolument ! Nous pouvons reproduire fidèlement n'importe quel vêtement, avec les mêmes tissus ou des alternatives similaires. Apportez-nous simplement le modèle à reproduire."
    },
    {
      question: "Travaillez-vous avec des entreprises à l'international ?",
      answer: "Oui, nous travaillons avec des entreprises dans toute l'Europe. Nous gérons l'ensemble du processus, y compris la logistique et les formalités douanières si nécessaire."
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
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          {faqs.map((faq, index) => (
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

        <div className="text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos interrogations et vous conseiller au mieux sur votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Nous contacter
            </button>
            <button className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300">
              Demander un rappel téléphonique
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}