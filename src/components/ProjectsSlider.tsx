'use client';

import React, { useState } from 'react';

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
    title: "To The Sun - DAO комьюнити криптоинвесторов",
    description: "Создали современный сайт для DAO комьюнити. Реализовали систему смарт-контрактов и реферальную систему с блокчейн-функционалом.",
    image: "/images/portfolio/to-the-sun.png",
    url: "https://tothesun.io/",
    results: ["Привлечено более 80k$ за первую неделю", "2000+ активных участников"]
  },
  {
    id: 2,
    title: "Лендинг для фитнес-программы от TATWOLE",
    description: "Лендинг для известного спортивного блогера TATWOLE. Создали простую страницу с одной целью — чтобы пользователи покупали программу тренировок.",
    image: "/images/portfolio/tatwole-mode.png",
    url: "https://krabik6-tatwole-78e6.twc1.net/",
    results: ["Конверсия 62%", "3000 переходов в ПЕРВЫЙ день"]
  },
  {
    id: 3,
    title: "Сайт кофейни «Какао'Мама»",
    description: "Масштабный ребрендинг старого сайта кофейни. Улучшили дизайн и добавили удобную связь прямо на сайте. Подключили рекламу в Яндекс.Картах с геотаргетингом по Тольятти.",
    image: "/images/portfolio/kakaomama.png",
    url: "https://krabik6-kakaomama-b81e.twc1.net/",
    results: ["+62 посетителя в неделю"]
  },
  {
    id: 4,
    title: "Лендинг Telegram-бота Reflecty",
    description: "Запустили контекстную и таргетированную рекламу в Яндекс. Создали лендинг-атлант для максимального прогрева посетителя. Благодаря качественному прогреву 80% заявок конвертировались в платежи.",
    image: "/images/portfolio/reflecty.png",
    url: "https://reflecty.ru/",
    results: ["80% заявок → платежи", "4 000+ посетителей за 2 месяца"]
  },
  {
    id: 5,
    title: "Сайт мастера по ремонту техники в Тольятти",
    description: "Подключили продвижение в Рекламной сети Яндекс. Заявки пошли так активно, что мастер не успевал их все выполнять. Одностраничный сайт с упором на доверие.",
    image: "/images/portfolio/tech-repair.png",
    url: "https://krabik6-tech-repair-landing-80ae.twc1.net/",
    results: ["200+ заявок в месяц (было 40)"]
  },
  {
    id: 6,
    title: "GK-Invest - Инвестиционная платформа",
    description: "Создали инвестиционную платформу в формате mini-apps с реферальной системой. Реализовали поддержку криптовалютных и фиатных платежей.",
    image: "/images/portfolio/gk-invest.png",
    url: "#",
    results: ["Поддержка крипто и фиатных платежей", "Реферальная система"]
  }
];

export default function ProjectsSlider() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const currentProjectData = projects[currentProject];

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Заголовок */}
      <div className="text-center mb-8">
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          РЕАЛЬНЫЕ КЕЙСЫ. РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ.
        </p>
      </div>

      {/* Мобильная версия */}
      <div className="block xl:hidden space-y-8">
        <div 
          className="bg-black rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
          style={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="relative h-48 sm:h-56 w-full">
            <img 
              src={currentProjectData.image} 
              alt={currentProjectData.title} 
              className="object-cover w-full h-full"
              width="256" 
              height="192"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <a 
                href={currentProjectData.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <span>Перейти на сайт</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white">{currentProjectData.title}</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">{currentProjectData.description}</p>
            <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-green-900/20 border border-green-500/30 rounded-lg" style={{
              boxShadow: 'inset 0 1px 0 rgba(34, 197, 94, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.3)'
            }}>
              <div className="text-xs sm:text-sm text-green-300 space-y-1">
                {currentProjectData.results.map((result, idx) => (
                  <div key={idx}>• <b>{result}</b></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a 
                href={currentProjectData.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer font-medium px-3 py-2 border border-gray-600 rounded-lg hover:border-gray-400"
              >
                <span>Посмотреть проект</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
              <button className="w-full bg-transparent border-2 border-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Хочу такой же
              </button>
            </div>
          </div>
        </div>
        
        {/* Мобильная навигация */}
        <div className="flex items-center justify-center gap-3 mt-4 sm:mt-6">
          <button 
            onClick={prevProject}
            className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center hover:border-white/40 hover:shadow-lg transition-all duration-300 group shadow-md cursor-pointer" 
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            aria-label="Предыдущий проект"
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
              aria-label={`Перейти к проекту ${index + 1}`}
            />
          ))}
          
          <button 
            onClick={nextProject}
            className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center hover:border-white/40 hover:shadow-lg transition-all duration-300 group shadow-md cursor-pointer" 
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            aria-label="Следующий проект"
          >
            <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Десктопная версия */}
      <div className="relative hidden xl:block">
        {/* Кнопки навигации */}
        <button 
          onClick={prevProject}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:border-white/40 hover:shadow-lg transition-all duration-300 group shadow-md cursor-pointer" 
          style={{
            boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          aria-label="Предыдущий проект"
        >
          <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          onClick={nextProject}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:border-white/40 hover:shadow-lg transition-all duration-300 group shadow-md cursor-pointer" 
          style={{
            boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          aria-label="Следующий проект"
        >
          <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Слайдер */}
        <div className="relative mb-8">
          <div className="bg-black rounded-3xl shadow-2xl border border-white/20 overflow-hidden" style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] xl:min-h-[600px]">
              {/* Левая часть с информацией */}
              <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-center relative z-10 bg-black/80 backdrop-blur-sm">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4 text-white">
                    {currentProjectData.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6">
                    {currentProjectData.description}
                  </p>
                  <div className="mb-4 lg:mb-6 p-4 lg:p-5 bg-green-900/20 border border-green-500/30 rounded-xl" style={{
                    boxShadow: 'inset 0 1px 0 rgba(34, 197, 94, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.3)'
                  }}>
                    <div className="text-sm lg:text-base text-green-300 space-y-1 lg:space-y-2">
                      {currentProjectData.results.map((result, idx) => (
                        <div key={idx}>• <b>{result}</b></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                    <a 
                      href={currentProjectData.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer font-medium px-4 py-2 border border-gray-600 rounded-lg hover:border-gray-400"
                    >
                      <span>Посмотреть проект</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                    <button className="bg-transparent border-2 border-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Хочу такой же
                    </button>
                  </div>
                </div>
              </div>

              {/* Правая часть с изображением */}
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] group p-4 lg:p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20" style={{
                  boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <img 
                    src={currentProjectData.image} 
                    alt={currentProjectData.title} 
                    className="object-cover object-left-top w-full h-full"
                    width="1024" 
                    height="683"
                  />
                  {/* Кнопка просмотра изображения */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={currentProjectData.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Перейти на сайт</span>
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
        <div className="flex items-center justify-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentProject ? 'bg-white w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Перейти к проекту ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 