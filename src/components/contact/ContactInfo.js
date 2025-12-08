// components/ContactInfo.js
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaUserFriends } from "react-icons/fa";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <FaPhone className="text-xl" />,
      title: "Téléphone",
      content: "034 92 192 23",
      subtitle: "Lun-Ven: 9h-18h",
      link: "tel:+33123456789",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      content: "reflet@confection-vonjy.fr",
      subtitle: "Réponse sous 24h",
      link: "mailto:contact@confection-vonjy.fr",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Adresse",
      content: "123 Rue de la Couture",
      subtitle: "75000 Toamasina, Madagascar",
      link: "https://maps.google.com/?q=123+Rue+de+la+Couture+75000+Toamasina",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Horaires d'ouverture",
      content: "Lundi - Vendredi",
      subtitle: "9h00 - 18h00",
      color: "bg-yellow-100 text-yellow-700"
    }
  ];

  const departments = [
    {
      icon: <FaUserFriends className="text-lg" />,
      name: "Service commercial",
      email: "reflet@confection-vonjy.fr",
      phone: "01 23 45 67 90"
    },
    {
      icon: <FaCalendarAlt className="text-lg" />,
      name: "Prise de rendez-vous",
      email: "reflet@confection-vonjy.fr",
      phone: "01 23 45 67 91"
    },
    {
      icon: "👔",
      name: "Service après-vente",
      email: "reflet@confection-vonjy.fr",
      phone: "01 23 45 67 92"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold mb-6 uppercase">Informations de contact</h3>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start">
              <div className={`${detail.color} p-3 rounded-lg mr-4`}>
                {detail.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{detail.title}</h4>
                {detail.link ? (
                  <a 
                    href={detail.link} 
                    className="text-white hover:text-yellow-300 transition duration-300 block text-lg"
                  >
                    {detail.content}
                  </a>
                ) : (
                  <p className="text-white text-lg">{detail.content}</p>
                )}
                <p className="text-blue-200">{detail.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg border border-yellow-100">
        <h3 className="text-xl font-bold text-blue-900 mb-4 uppercase">Visite sur rendez-vous</h3>
        <p className="text-gray-600 mb-6">
          Notre atelier est ouvert sur rendez-vous. Venez découvrir nos réalisations, 
          choisir vos tissus et discuter de votre vonjyjet en personne.
        </p>
        <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 font-medium">
            ⓘ Pour garantir la qualité de votre accueil, merci de prendre rendez-vous au préalable.
          </p>
        </div>
      </div>
    </div>
  );
}