'use client';

import { useEffect, useState } from 'react';
import ExpandableCards from './ExpandableCards';

export default function HeroBlock() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFloatingButtonExpanded, setIsFloatingButtonExpanded] = useState(false);

  useEffect(() => {
    // Задержка для начала анимации
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    setIsFloatingButtonExpanded(false);
    
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      id: 'telegram',
      title: 'Telegram',
      description: 'Un bot qui vend pendant que vous dormez',
      offer: 'Automatisation des demandes, paiements et envoi de PDF/accès. Bot clé en main – sans templates. Lancement en 48h. -20% jusqu\'à la fin du mois.',
      price: '219 €',
      highlights: [
        { text: 'Lancement en 48h.' },
        { text: '-20% jusqu\'à la fin du mois.' }
      ]
    },
    {
      id: 'web3',
      title: 'Web3',
      description: 'Acceptez les crypto sans galère',
      offer: 'Intégration USDT, TON, ETH – en 1 jour. Directement sur votre site ou dans Telegram. Sans KYC, sans intermédiaires. Gratuit jusqu\'à vendredi.',
      price: '319 €',
      highlights: [
        { text: 'En 1 jour.' },
        { text: 'Gratuit jusqu\'à vendredi.' }
      ]
    },
    {
      id: 'ai',
      title: 'IA',
      description: 'Un chatbot IA qui répond à votre place',
      offer: 'Je crée un chatbot basé sur ChatGPT qui répond aux clients 24/7, prend des rendez-vous et aide à vendre. Lancement en 7 jours. 1 mois de support offert.',
      price: '199 €',
      highlights: [
        { text: 'Lancement en 7 jours.' },
        { text: '1 mois de support offert.' }
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col max-w-full overflow-hidden" style={{ height: '100vh' }}>
      {/* Мобильная версия - очень маленькие телефоны и базовые смартфоны */}
      <div className="xl:hidden max-w-full overflow-hidden" style={{ height: '100vh' }}>
        {/* ПЕРВЫЙ ЭКРАН - Заголовок, факты, карточки и CTA */}
        <div className="flex flex-col px-4 pt-12 pb-6 max-w-full overflow-hidden" style={{ height: '100vh' }}>
          {/* Контейнер с ограниченной шириной для планшетов и телефонов */}
          <div className="flex-1 flex flex-col justify-center space-y-4 max-w-2xl mx-auto w-full -mb-4 sm:-mb-6 lg:-mb-8">
            {/* Заголовок */}
            <div className={`space-y-3 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className={`text-sm xs:text-base md:text-xl font-inter-black text-gray-700 transition-all duration-700 ease-out delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Vous avez besoin d'un site qui vend?
              </div>
              <div className={`text-xl xs:text-2xl md:text-4xl font-inter-black leading-tight tracking-tight transition-all duration-700 ease-out delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <span className="text-black">
                  <span className="xl:block">SITE →</span>
                  <span className="xl:block">DEMANDE →</span>
                  <span className="xl:block">BOT →</span>
                  <span className="xl:block">CLIENT!</span>
                </span>
              </div>
            </div>

            {/* Компактные факты только для больших планшетов (768px+) */}
            <div className={`hidden lg:grid lg:grid-cols-3 gap-3 mb-3 transition-all duration-700 ease-out delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className={`bg-gray-50 p-2 rounded-lg text-center transition-all duration-500 ease-out delay-700 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="text-xs lg:text-lg font-inter-black text-black">
                  219 €
                </div>
              </div>
              <div className={`bg-gray-50 p-2 rounded-lg text-center transition-all duration-500 ease-out delay-800 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="text-xs lg:text-lg font-inter-black text-black">
                  7 jours
                </div>
              </div>
              <div className={`bg-gray-50 p-2 rounded-lg text-center transition-all duration-500 ease-out delay-900 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="text-xs lg:text-lg font-inter-black text-black">
                  23%
                </div>
              </div>
            </div>

            {/* Миниатюрные факты для планшетов (480px - 768px) */}
            <div className={`hidden sm:block lg:hidden mb-3 transition-all duration-700 ease-out delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className="flex justify-center space-x-3">
                <div className={`bg-gray-50 px-2 py-1 rounded text-center transition-all duration-500 ease-out delay-700 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <div className="text-xs font-inter-black text-black">219€</div>
                </div>
                <div className={`bg-gray-50 px-2 py-1 rounded text-center transition-all duration-500 ease-out delay-800 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <div className="text-xs font-inter-black text-black">7j</div>
                </div>
                <div className={`bg-gray-50 px-2 py-1 rounded text-center transition-all duration-500 ease-out delay-900 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <div className="text-xs font-inter-black text-black">23%</div>
                </div>
              </div>
            </div>

            {/* Карточки решений */}
            <div className={`w-full transition-all duration-1000 ease-out delay-800 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <ExpandableCards cards={cards} />
            </div>
          </div>

          {/* Нижняя часть - CTA кнопка (скрыта для экранов ≤ 380px) */}
          <div className={`mt-2 md:mt-4 space-y-3 w-full block cta-button-container transition-all duration-1000 ease-out delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className={`text-sm xs:text-base md:text-xl font-inter-black text-black text-center transition-all duration-700 ease-out delay-1100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Devis instantané en 2 min
            </div>
            <div className={`px-8 py-4 h-16 xs:h-20 md:h-24 flex items-center transition-all duration-700 ease-out delay-1200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <a href="#quiz" className="group relative w-full inline-flex items-center justify-center px-4 xs:px-6 md:px-12 py-3 xs:py-4 md:py-6 bg-[#E53E3E] text-white font-inter-black text-sm xs:text-base md:text-xl tracking-wider transition-all duration-500 transform hover:scale-[1.02] cursor-pointer border-2 border-[#E53E3E] button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden rounded-full">
                <span className="relative z-10">OBTENIR UN DEVIS GRATUIT</span>
              </a>
            </div>
            <div className={`text-xs xs:text-sm md:text-base text-gray-600 font-roboto-light text-center transition-all duration-700 ease-out delay-1300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Site web + bot clé en main • Livré en 1 semaine • Garantie satisfait ou remboursé
            </div>
            <div className={`text-xs xs:text-sm text-gray-500 font-roboto-light text-center transition-all duration-700 ease-out delay-1400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Ne laissez pas cette chance vous échapper
            </div>
          </div>
        </div>
      </div>

      {/* Десктопная версия - ноутбуки и больше */}
      <div className="hidden xl:flex flex-1 items-center justify-center pt-12 pb-6 max-w-full overflow-hidden" style={{ height: '100vh' }}>
        <div className="w-full max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-start">
            
            {/* ЛЕВАЯ КОЛОНКА - Заголовок и CTA */}
            <div className={`order-2 xl:order-1 pt-6 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              {/* Основной заголовок */}
              <div className="mb-8">
                <div className={`text-xl xl:text-2xl font-inter-black text-gray-700 mb-2 transition-all duration-700 ease-out delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Vous avez besoin d'un site qui vend?
                </div>
                <div className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-inter-black leading-none tracking-tight mb-4 transition-all duration-700 ease-out delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                  <span className="text-black">
                    <span className="xl:block">SITE →</span>
                    <span className="xl:block">DEMANDE →</span>
                    <span className="xl:block">BOT →</span>
                    <span className="xl:block">CLIENT!</span>
                  </span>
                </div>
              </div>
              
              {/* CTA кнопка */}
              <div className={`space-y-4 transition-all duration-700 ease-out delay-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className={`text-base font-inter-black text-black transition-all duration-700 ease-out delay-1100 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Devis instantané en 2 min
                </div>
                <div className={`h-20 flex items-center transition-all duration-700 ease-out delay-1200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <a href="#quiz" className="group relative inline-flex items-center justify-center px-12 py-6 bg-[#E53E3E] text-white font-inter-black text-lg sm:text-xl tracking-wider transition-all duration-500 transform hover:scale-[1.03] cursor-pointer border-4 border-[#E53E3E] button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden rounded-full">
                    <span className="relative z-10">OBTENIR UN DEVIS GRATUIT</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="absolute -inset-1 border-2 border-white opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                  </a>
                </div>
                <div className={`text-sm text-gray-600 font-roboto-light max-w-md whitespace-nowrap transition-all duration-700 ease-out delay-1300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Site web + bot clé en main • Livré en 1 semaine • Garantie satisfait ou remboursé
                </div>
                <div className={`text-xs text-gray-500 font-roboto-light max-w-md whitespace-nowrap transition-all duration-700 ease-out delay-1400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Ne laissez pas cette chance vous échapper
                </div>
              </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА - Факты и карточки */}
            <div className={`order-1 xl:order-2 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Блок с фактами и гарантиями */}
              <div className={`bg-white border border-black p-6 rounded-lg mb-4 transition-all duration-700 ease-out delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}>
                <div className="space-y-4">
                  <div className={`transition-all duration-700 ease-out delay-600 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="text-xl sm:text-2xl font-inter-black text-black mb-2">
                      Multipliez vos profits par 3
                    </div>
                    <div className="text-base font-inter-black text-gray-700">
                      Résultat moyen de nos clients
                    </div>
                  </div>
                  
                  <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 transition-all duration-700 ease-out delay-700 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}>
                    <div className={`text-center transition-all duration-500 ease-out delay-800 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <div className="text-base sm:text-lg lg:text-xl font-inter-black text-black mb-1">
                        219 €
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-roboto-light">
                        Tarif de base
                      </div>
                    </div>
                    <div className={`text-center transition-all duration-500 ease-out delay-900 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <div className="text-base sm:text-lg lg:text-xl font-inter-black text-black mb-1">
                        7 jours
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-roboto-light">
                        Avant le lancement
                      </div>
                    </div>
                    <div className={`text-center transition-all duration-500 ease-out delay-1000 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <div className="text-base sm:text-lg lg:text-xl font-inter-black text-black mb-1">
                        23%
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-roboto-light">
                        Taux de conversion moyen
                      </div>
                    </div>
                  </div>
                  
                  <div className={`pt-3 border-t border-gray-200 transition-all duration-700 ease-out delay-1100 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-600 font-roboto-light">
                      <span className={`bg-gray-50 px-2 py-1 rounded-full transition-all duration-500 ease-out delay-1200 ${
                        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>Résultats garantis ou remboursé</span>
                      <span className={`bg-gray-50 px-2 py-1 rounded-full transition-all duration-500 ease-out delay-1300 ${
                        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>100% remboursé si insatisfait</span>
                      <span className={`bg-gray-50 px-2 py-1 rounded-full transition-all duration-500 ease-out delay-1400 ${
                        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>Basé sur les principes du marketing scientifiquement prouvés</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Карточки решений */}
              <div className={`w-full transition-all duration-700 ease-out delay-700 overflow-y-hidden ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <ExpandableCards cards={cards} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ - СЛОГАН МАКСИМАЛЬНО ВНИЗУ (только десктоп) */}
      <div className={`hidden xl:block w-full transition-all duration-1000 ease-out delay-1200 overflow-x-hidden overflow-y-hidden mt-auto ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 overflow-x-hidden">
            {/* СЛОГАН - только на десктопах */}
            <div className={`hidden xl:block overflow-x-hidden overflow-y-hidden transition-all duration-1000 ease-out delay-1300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 
                className="font-inter-black text-black leading-none tracking-tight whitespace-nowrap"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 6rem)',
                  lineHeight: '0.9'
                }}
              >
                VOS PROFITS EXPLOSENT
              </h2>
            </div>
            
            {/* КОНТАКТЫ */}
            <div className={`flex flex-col gap-1 sm:gap-2 items-center overflow-x-hidden transition-all duration-1000 ease-out delay-1400 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <a 
                href="tel:+33652037779" 
                className={`font-inter-black text-sm sm:text-base lg:text-lg text-black hover:text-gray-600 transition-all duration-300 hover:scale-110 transform cursor-pointer ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                +33 6 52 03 77 79
              </a>
              <a 
                href="mailto:vladislav.verbitsky.bis@gmail.com"
                className={`font-inter-black text-sm sm:text-base lg:text-lg text-black hover:text-gray-600 transition-all duration-300 hover:scale-110 transform cursor-pointer ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                vladislav.verbitsky.bis@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Всплывающая кнопка для очень маленьких телефонов (≤ 380px) */}
      <div className="xl:hidden overflow-x-hidden">
        <div className="fixed bottom-4 left-4 right-4 z-50 overflow-x-hidden">
          {isFloatingButtonExpanded ? (
            <div className={`transition-all duration-700 ease-out transform animate-in slide-in-from-bottom-4 fade-in overflow-x-hidden ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white border-2 border-[#E53E3E] rounded-lg shadow-xl p-4 overflow-x-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-inter-black text-black">
                    Devis instantané en 2 min
                  </div>
                  <button 
                    onClick={() => setIsFloatingButtonExpanded(false)}
                    className="text-gray-400 hover:text-gray-600 transition-all duration-300 ease-in-out text-lg hover:scale-[1.1]"
                  >
                    ✕
                  </button>
                </div>
                <button className="group relative w-full inline-flex items-center justify-center px-6 py-4 bg-[#E53E3E] text-white font-inter-black text-base tracking-wider transition-all duration-500 ease-in-out transform hover:scale-[1.02] cursor-pointer border-2 border-[#E53E3E] button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden">
                  <span className="relative z-10">OBTENIR UN DEVIS GRATUIT</span>
                </button>
                <div className="text-xs text-gray-600 font-roboto-light text-center mt-3">
                  Site web + bot clé en main • Livré en 1 semaine • Garantie satisfait ou remboursé
                </div>
                <div className="text-xs text-gray-500 font-roboto-light text-center mt-2">
                  Ne laissez pas cette chance vous échapper
                </div>
              </div>
            </div>
          ) : (
            <div className={`transition-all duration-700 ease-out transform animate-in zoom-in-95 fade-in overflow-x-hidden delay-1500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <button 
                onClick={() => setIsFloatingButtonExpanded(true)}
                className="w-16 h-16 bg-[#E53E3E] text-white font-inter-black text-xs rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-[1.05] flex items-center justify-center"
              >
                💰
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}