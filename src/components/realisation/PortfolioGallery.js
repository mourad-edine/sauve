// components/PortfolioGallery.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaExpand, FaUsers, FaUser, FaBuilding, FaCalendarAlt, FaRulerCombined } from "react-icons/fa";

export default function PortfolioGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Uniformes Hôtel de Luxe",
      category: "entreprise",
      subcategory: "uniforme",
      description: "Collection complète d'uniformes pour un hôtel 5 étoiles à Toamasina",
      client: "Hôtel Le Majestique",
      date: "2023",
      items: ["Vestes de réception", "Tenues de conciergerie", "Uniforme de service", "Blouses de ménage"],
      imageColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      icon: <FaBuilding className="text-2xl" />,
      stats: { quantity: 120, duration: "8 semaines" }
    },
    {
      id: 2,
      title: "Robe de mariée sur mesure",
      category: "particulier",
      subcategory: "ceremonie",
      description: "Robe de mariée en soie naturelle avec broderies personnalisées",
      client: "Marie & Thomas",
      date: "2024",
      items: ["Soie naturelle", "Broderies main", "Volants en dentelle", "Traîne ajustable"],
      imageColor: "bg-gradient-to-br from-pink-400 to-purple-600",
      icon: <FaUser className="text-2xl" />,
      stats: { fittings: 5, duration: "6 semaines" }
    },
    {
      id: 3,
      title: "Tenues médicales personnalisées",
      category: "entreprise",
      subcategory: "uniforme",
      description: "Blouses et tenues pour une clinique privée",
      client: "Clinique Saint-Louis",
      date: "2023",
      items: ["Blouses médicales", "Tenues de chirurgie", "Vestes de consultation", "Pulls personnalisés"],
      imageColor: "bg-gradient-to-br from-green-500 to-teal-600",
      icon: <FaUsers className="text-2xl" />,
      stats: { quantity: 85, duration: "6 semaines" }
    },
    {
      id: 4,
      title: "Costume 3 pièces sur mesure",
      category: "particulier",
      subcategory: "surmesure",
      description: "Costume d'affaires sur mesure en laine premium",
      client: "M. Dubois",
      date: "2024",
      items: ["Veste ajustée", "Pantalon droit", "Gilet coordonné", "Chemise sur mesure"],
      imageColor: "bg-gradient-to-br from-gray-700 to-gray-900",
      icon: <FaUser className="text-2xl" />,
      stats: { fittings: 3, duration: "4 semaines" }
    },
    {
      id: 5,
      title: "Polos d'entreprise brodés",
      category: "entreprise",
      subcategory: "personnalisation",
      description: "Polos techniques avec logo brodé pour une équipe commerciale",
      client: "Tech Solutions SARL",
      date: "2023",
      items: ["Polos techniques", "Logo brodé", "Nom personnalisé", "Couleurs société"],
      imageColor: "bg-gradient-to-br from-red-500 to-orange-600",
      icon: <FaBuilding className="text-2xl" />,
      stats: { quantity: 50, duration: "3 semaines" }
    },
    {
      id: 6,
      title: "Tenue de soirée élégante",
      category: "particulier",
      subcategory: "ceremonie",
      description: "Robe du soir pour gala de charité",
      client: "Mme Lambert",
      date: "2024",
      items: ["Soie satinée", "Découpes dos", "Finition perles", "Ourlet spécial"],
      imageColor: "bg-gradient-to-br from-purple-500 to-indigo-700",
      icon: <FaUser className="text-2xl" />,
      stats: { fittings: 4, duration: "5 semaines" }
    },
    {
      id: 7,
      title: "Uniforme restauration rapide",
      category: "entreprise",
      subcategory: "uniforme",
      description: "Tenues techniques pour chaîne de restauration",
      client: "Burg'Express",
      date: "2023",
      items: ["T-shirts techniques", "Tabliers résistants", "Chaussures de sécurité", "Casquettes personnalisées"],
      imageColor: "bg-gradient-to-br from-yellow-500 to-red-600",
      icon: <FaBuilding className="text-2xl" />,
      stats: { quantity: 200, duration: "10 semaines" }
    },
    {
      id: 8,
      title: "Tailleur d'affaires sur mesure",
      category: "particulier",
      subcategory: "surmesure",
      description: "Tailleur professionnel pour cadre dirigeante",
      client: "Mme Chevalier",
      date: "2024",
      items: ["Veste structurée", "Jupe crayon", "Chemisier soie", "Finitions sur mesure"],
      imageColor: "bg-gradient-to-br from-teal-500 to-blue-600",
      icon: <FaUser className="text-2xl" />,
      stats: { fittings: 4, duration: "5 semaines" }
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className={`${project.imageColor} h-48 relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition duration-300"
                  >
                    <FaExpand className="text-white text-lg" />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                      {project.category === 'entreprise' ? 'Entreprise' : 'Particulier'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-900">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-gray-700 mb-2">
                      <FaUsers className="text-blue-600 mr-2" />
                      <span className="text-sm font-medium">{project.client}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.items.slice(0, 2).map((item, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                      {project.items.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{project.items.length - 2} autres
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <FaRulerCombined className="mr-2" />
                        <span>{project.stats.duration}</span>
                      </div>
                      {project.stats.quantity && (
                        <div className="flex items-center">
                          <FaUsers className="mr-2" />
                          <span>{project.stats.quantity} pièces</span>
                        </div>
                      )}
                      {project.stats.fittings && (
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          <span>{project.stats.fittings} essayages</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => openModal(project)}
                    className="mt-6 w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-3 rounded-lg transition duration-300"
                  >
                    Voir les détails
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Ceci est une sélection de nos réalisations. Chaque projet est unique et adapté aux besoins spécifiques du client.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Charger plus de projets
            </button>
          </div>
        </div>
      </section>

      {/* Modal pour afficher les détails d'un projet */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`${selectedProject.imageColor} h-64 relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-5xl mb-4">{selectedProject.icon}</div>
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                  <p className="text-lg opacity-90 mt-2">{selectedProject.client}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition duration-300"
              >
                <span className="text-white text-xl">×</span>
              </button>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">À propos du projet</h3>
                  <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">Détails de la réalisation</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-3">Notre approche</h4>
                    <p className="text-gray-700">
                      Ce projet a été réalisé avec une attention particulière aux détails et en étroite collaboration avec le client. 
                      Plusieurs essayages ont permis d'ajuster parfaitement chaque pièce aux spécifications exactes.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-4">Informations projet</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Client</div>
                        <div className="font-medium text-gray-800">{selectedProject.client}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Catégorie</div>
                        <div className="font-medium text-gray-800">
                          {selectedProject.category === 'entreprise' ? 'Entreprise' : 'Particulier'} • {selectedProject.subcategory}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Année de réalisation</div>
                        <div className="font-medium text-gray-800">{selectedProject.date}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Durée du projet</div>
                        <div className="font-medium text-gray-800">{selectedProject.stats.duration}</div>
                      </div>
                      
                      {selectedProject.stats.quantity && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Quantité</div>
                          <div className="font-medium text-gray-800">{selectedProject.stats.quantity} pièces</div>
                        </div>
                      )}
                      
                      {selectedProject.stats.fittings && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Nombre d'essayages</div>
                          <div className="font-medium text-gray-800">{selectedProject.stats.fittings} sessions</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-blue-200">
                      <h5 className="font-bold text-blue-900 mb-3">Satisfaction client</h5>
                      <div className="flex items-center text-yellow-500 mb-2">
                        {"★".repeat(5)}
                      </div>
                      <p className="text-sm text-gray-600">
                        "Un travail exceptionnel avec une attention remarquable aux détails."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
             <div className="mt-8 pt-8 border-t border-gray-200">
  <div className="flex flex-col sm:flex-row justify-between gap-3">
    <button
      onClick={closeModal}
      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300 order-2 sm:order-1"
    >
      Fermer
    </button>
    <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition duration-300 order-1 sm:order-2">
      Demander un projet similaire
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}