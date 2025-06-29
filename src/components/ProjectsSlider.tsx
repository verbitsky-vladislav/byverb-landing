'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import OrderPopup from './OrderPopup';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  results: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "To The Sun - Communauté DAO d'investisseurs crypto",
    description: "Nous avons créé un site moderne pour une communauté DAO. Mise en place de contrats intelligents et d'un système de parrainage avec fonctionnalités blockchain.",
    image: "/images/portfolio/to-the-sun.png",
    url: "https://tothesun.io/",
    results: ["→ +80 000$ levés dès la 1ère semaine", "→ 2 000+ membres actifs"]
  },
  {
    id: 2,
    title: "Landing page pour un programme fitness par TATWOLE",
    description: "Page d'atterrissage pour l'influenceur sportif TATWOLE. Design minimaliste axé sur les conversions pour les programmes d'entraînement.",
    image: "/images/portfolio/tatwole-mode.png",
    url: "https://krabik6-tatwole-78e6.twc1.net/",
    results: ["→ Taux de conversion : 62%", "→ 3 000 visites dès le 1er jour"]
  },
  {
    id: 3,
    title: "Site web pour la cafétéria « Kakao'Mama »",
    description: "Refonte complète du site existant avec nouveau design et système de prise de rendez-vous en ligne. Campagne publicitaire ciblée géographiquement sur Yandex.",
    image: "/images/portfolio/kakaomama.png",
    url: "https://krabik6-kakaomama-b81e.twc1.net/",
    results: ["→ +62 clients hebdomadaires"]
  },
  {
    id: 4,
    title: "Landing page pour le bot Telegram Reflecty",
    description: "Campagne publicitaire ciblée sur Yandex + landing page hautement optimisée pour maximiser les conversions.",
    image: "/images/portfolio/reflecty.png",
    url: "https://reflecty.ru/",
    results: ["→ 80% des leads convertis en ventes", "→ 4 000+ visiteurs en 2 mois"]
  },
  {
    id: 5,
    title: "Site pour un réparateur d'électronique à Togliatti",
    description: "Site one-page axé sur la confiance + publicité Yandex. Résultats exceptionnels :",
    image: "/images/portfolio/tech-repair.png",
    url: "https://krabik6-tech-repair-landing-80ae.twc1.net/",
    results: ["→ 200+ demandes/mois (contre 40 auparavant)"]
  },
];

export default function ProjectsSlider() {
  const [currentProject, setCurrentProject] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Задержка для начала анимации
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const openPopup = (title: string, message: string) => {
    setPopupTitle(title);
    setPopupMessage(message);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const getProjectMessage = (project: Project) => {
    const messages = {
      1: `Bonjour ! Je souhaite commander un projet similaire à "To The Sun - Communauté DAO d'investisseurs crypto".

J'ai besoin de :
• Un site moderne pour une communauté DAO
• Des contrats intelligents
• Un système de parrainage avec fonctionnalités blockchain
• Intégration avec les portefeuilles crypto

Les résultats du projet sont impressionnants : 80 000$ levés dès la 1ère semaine et 2 000+ membres actifs.

Je suis prêt à discuter des détails et du budget.`
    ,
      2: `Bonjour ! Je souhaite commander une landing page similaire au projet TATWOLE.

J'ai besoin de :
• Une landing page pour vendre un programme d'entraînement
• Une page simple axée sur la conversion
• Optimisation mobile
• Intégration avec les systèmes de paiement

Les résultats du projet sont excellents : taux de conversion de 62% et 3 000 visites dès le 1er jour.

Je suis prêt à discuter des détails et du budget.`
    ,
      3: `Bonjour ! Je souhaite commander un site similaire à la cafétéria "Kakao'Mama".

J'ai besoin de :
• Refonte complète du site existant
• Design moderne
• Système de prise de rendez-vous en ligne
• Intégration avec Yandex Maps
• Géolocalisation ciblée

Résultats : +62 clients hebdomadaires.

Je suis prêt à discuter des détails et du budget.`
    ,
      4: `Bonjour ! Je souhaite commander une landing page similaire à Reflecty.

J'ai besoin de :
• Landing page hautement optimisée pour maximiser les conversions
• Intégration avec un bot Telegram
• Configuration de publicité ciblée
• Système de préchauffage des visiteurs

Les résultats sont impressionnants : 80% des leads convertis en ventes, 4 000+ visiteurs en 2 mois.

Je suis prêt à discuter des détails et du budget.`
    ,
      5: `Bonjour ! Je souhaite commander un site similaire au réparateur d'électronique.

J'ai besoin de :
• Site one-page axé sur la confiance
• Publicité dans le réseau Yandex
• Système de demandes
• Optimisation pour les requêtes locales

Résultats : 200+ demandes/mois (contre 40 auparavant).

Je suis prêt à discuter des détails et du budget.`
    };
    
    return messages[project.id as keyof typeof messages] || `Bonjour ! Je souhaite commander un projet similaire à celui-ci.

Je suis prêt à discuter des détails et du budget.`;
  };

  const currentProjectData = projects[currentProject];

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Заголовок */}
      <div className={`text-center mb-8 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <p className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-700 ease-out delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          CAS CLIENTS RÉELS. RÉSULTATS MESURABLES.
        </p>
      </div>

      {/* Мобильная версия */}
      <div className={`block xl:hidden space-y-8 transition-all duration-1000 ease-out delay-400 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div 
          className={`bg-black rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 ease-out delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className={`relative h-48 sm:h-56 w-full transition-all duration-700 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Image 
              src={currentProjectData.image} 
              alt={currentProjectData.title} 
              className="object-cover w-full h-full"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <a 
                href={currentProjectData.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <span>Visiter le site</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className={`p-4 sm:p-6 transition-all duration-700 ease-out delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white transition-all duration-700 ease-out delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>{currentProjectData.title}</h3>
            <p className={`text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4 transition-all duration-700 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>{currentProjectData.description}</p>
            <div className={`mb-3 sm:mb-4 p-3 sm:p-4 bg-green-900/20 border border-green-500/30 rounded-lg transition-all duration-700 ease-out delay-1100 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`} style={{
              boxShadow: 'inset 0 1px 0 rgba(34, 197, 94, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.3)'
            }}>
              <div className="text-xs sm:text-sm text-green-300 space-y-1">
                {currentProjectData.results.map((result, idx) => (
                  <div key={idx}>• <b>{result}</b></div>
                ))}
              </div>
            </div>
            <div className={`flex flex-col gap-2 sm:gap-3 transition-all duration-700 ease-out delay-1200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <a 
                href={currentProjectData.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer font-medium px-3 py-2 border border-gray-600 rounded-lg hover:border-gray-400"
              >
                <span>Visiter le site</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
              <button 
                onClick={() => openPopup(
                  `Commander un projet similaire à "${currentProjectData.title}"`,
                  getProjectMessage(currentProjectData)
                )}
                className="w-full bg-transparent border-2 border-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                Je veux le même
              </button>
            </div>
          </div>
        </div>
        
        {/* Мобильная навигация */}
        <div className={`flex items-center justify-center gap-3 mt-4 sm:mt-6 transition-all duration-700 ease-out delay-1300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button 
            onClick={prevProject}
            className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center hover:border-white/40 hover:shadow-lg transition-all duration-300 group shadow-md cursor-pointer" 
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            aria-label="Projet précédent"
          >
            <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentProject ? 'bg-white w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
          
          <button 
            onClick={nextProject}
            className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center hover:border-white/40 hover:shadow-lg transition-all duration-300 group shadow-md cursor-pointer" 
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            aria-label="Projet suivant"
          >
            <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Десктопная версия */}
      <div className={`relative hidden xl:block transition-all duration-1000 ease-out delay-400 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Кнопки навигации */}
        <button 
          onClick={prevProject}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:border-white/40 hover:shadow-lg transition-all duration-300 group shadow-md cursor-pointer ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`} 
          style={{
            boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          aria-label="Projet précédent"
        >
          <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          onClick={nextProject}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:border-white/40 hover:shadow-lg transition-all duration-300 group shadow-md cursor-pointer ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} 
          style={{
            boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          aria-label="Projet suivant"
        >
          <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Слайдер */}
        <div className={`relative mb-8 transition-all duration-1000 ease-out delay-600 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="bg-black rounded-3xl shadow-2xl border border-white/20 overflow-hidden" style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] xl:min-h-[600px]">
              {/* Левая часть с информацией */}
              <div className={`lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-center relative z-10 bg-black/80 backdrop-blur-sm transition-all duration-700 ease-out delay-700 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div>
                  <h3 className={`text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4 text-white transition-all duration-700 ease-out delay-800 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {currentProjectData.title}
                  </h3>
                  <p className={`text-base lg:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6 transition-all duration-700 ease-out delay-900 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {currentProjectData.description}
                  </p>
                  <div className={`mb-4 lg:mb-6 p-4 lg:p-5 bg-green-900/20 border border-green-500/30 rounded-xl transition-all duration-700 ease-out delay-1000 ${
                    isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                  }`} style={{
                    boxShadow: 'inset 0 1px 0 rgba(34, 197, 94, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.3)'
                  }}>
                    <div className="text-sm lg:text-base text-green-300 space-y-1 lg:space-y-2">
                      {currentProjectData.results.map((result, idx) => (
                        <div key={idx}>• <b>{result}</b></div>
                      ))}
                    </div>
                  </div>
                  <div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 transition-all duration-700 ease-out delay-1100 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <a 
                      href={currentProjectData.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer font-medium px-4 py-2 border border-gray-600 rounded-lg hover:border-gray-400"
                    >
                      <span>Visiter le site</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                    <button 
                      onClick={() => openPopup(
                        `Commander un projet similaire à "${currentProjectData.title}"`,
                        getProjectMessage(currentProjectData)
                      )}
                      className="bg-transparent border-2 border-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                    >
                      Je veux le même
                    </button>
                  </div>
                </div>
              </div>

              {/* Правая часть с изображением */}
              <div className={`lg:col-span-7 relative min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] group p-4 lg:p-6 transition-all duration-700 ease-out delay-800 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-700 ease-out delay-900 ${
                  isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`} style={{
                  boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <Image 
                    src={currentProjectData.image} 
                    alt={currentProjectData.title} 
                    className="object-cover object-left-top"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Кнопка просмотра изображения */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={currentProjectData.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Visiter le site</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Точки навигации */}
        <div className={`flex items-center justify-center gap-3 transition-all duration-700 ease-out delay-1200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentProject ? 'bg-white w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Попап заказа */}
      <OrderPopup
        isOpen={popupOpen}
        onClose={closePopup}
        title={popupTitle}
        message={popupMessage}
      />
    </div>
  );
} 