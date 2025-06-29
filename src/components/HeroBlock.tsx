'use client';

import { useEffect, useState } from 'react';
import { Gift } from 'lucide-react';
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
      description: 'Бот, который продаёт, когда ты спишь',
      offer: 'Автоматизирую заявки, оплату и отправку PDF/доступов. Бот под ключ — без шаблонов. Запуск за 48 часов. Скидка 20% до конца месяца.',
      price: '9.990 ₽',
      highlights: [
        { text: 'Запуск за 48 часов.' },
        { text: 'Скидка 20% до конца месяца.' }
      ]
    },
    {
      id: 'web3',
      title: 'Web3',
      description: 'Принимай крипту без геморроя',
      offer: 'Интеграция USDT, TON, ETH — за 1 день. Прямо на сайте или в Telegram. Без KYC, без посредников. Бесплатно до пятницы.',
      price: '14.490 ₽',
      highlights: [
        { text: 'за 1 день.' },
        { text: 'Бесплатно до пятницы.' }
      ]
    },
    {
      id: 'ai',
      title: 'AI',
      description: 'Чат-бот с ИИ, который отвечает за тебя',
      offer: 'Сделаю чат-бота на базе ChatGPT, который отвечает клиентам 24/7, записывает на услугу и помогает продавать. Запуск за 7 дней. 1 месяц поддержки бесплатно.',
      price: '8.990 ₽',
      highlights: [
        { text: 'Запуск за 7 дней.' },
        { text: '1 месяц поддержки бесплатно.' }
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
                нужен сайт, который продает?
              </div>
              <div className={`text-xl xs:text-2xl md:text-4xl font-inter-black leading-tight tracking-tight transition-all duration-700 ease-out delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <span className="text-black">
                  <span className="xl:block">САЙТ →</span>
                  <span className="xl:block">ЗАЯВКА →</span>
                  <span className="xl:block">БОТ →</span>
                  <span className="xl:block">КЛИЕНТ!</span>
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
                  9.900 ₽
                </div>
              </div>
              <div className={`bg-gray-50 p-2 rounded-lg text-center transition-all duration-500 ease-out delay-800 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="text-xs lg:text-lg font-inter-black text-black">
                  7 дней
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
                  <div className="text-xs font-inter-black text-black">9.900₽</div>
                </div>
                <div className={`bg-gray-50 px-2 py-1 rounded text-center transition-all duration-500 ease-out delay-800 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <div className="text-xs font-inter-black text-black">7д</div>
                </div>
                <div className={`bg-gray-50 px-2 py-1 rounded text-center transition-all duration-500 ease-out delay-900 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <div className="text-xs font-inter-black text-black">23%</div>
                </div>
              </div>
            </div>

            {/* Блок скидки 30% для новых клиентов - только на мобильных */}
            <div className={`xl:hidden mb-4 transition-all duration-700 ease-out delay-650 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}>
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4 shadow-lg border-2 border-red-400">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-white font-inter-black text-sm xs:text-base md:text-lg mb-1">
                      СКИДКА 30%
                    </div>
                    <div className="text-red-100 font-roboto-light text-xs xs:text-sm">
                      для новых клиентов на создание сайта
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 bg-white rounded-full">
                    <Gift className="text-red-500 w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8 animate-bounce" />
                  </div>
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
              Рассчитайте стоимость за 2 минуты
            </div>
            <div className={`px-8 py-4 h-16 xs:h-20 md:h-24 flex items-center transition-all duration-700 ease-out delay-1200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <a href="#quiz" className="group relative w-full inline-flex items-center justify-center px-4 xs:px-6 md:px-12 py-3 xs:py-4 md:py-6 bg-[#E53E3E] text-white font-inter-black text-sm xs:text-base md:text-xl tracking-wider transition-all duration-500 transform hover:scale-[1.02] cursor-pointer border-2 border-[#E53E3E] button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden rounded-full">
                <span className="relative z-10">РАССЧИТАТЬ СТОИМОСТЬ</span>
              </a>
            </div>
            <div className={`text-xs xs:text-sm md:text-base text-gray-600 font-roboto-light text-center transition-all duration-700 ease-out delay-1300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Сайт + бот + настройка • 7 дней • Гарантия
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
                  нужен сайт, который продает?
                </div>
                <div className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-inter-black leading-none tracking-tight mb-4 transition-all duration-700 ease-out delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                  <span className="text-black">
                    <span className="xl:block">САЙТ →</span>
                    <span className="xl:block">ЗАЯВКА →</span>
                    <span className="xl:block">БОТ →</span>
                    <span className="xl:block">КЛИЕНТ!</span>
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
                  Рассчитайте стоимость за 2 минуты
                </div>
                <div className={`h-20 flex items-center transition-all duration-700 ease-out delay-1200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <a href="#quiz" className="group relative inline-flex items-center justify-center px-12 py-6 bg-[#E53E3E] text-white font-inter-black text-lg sm:text-xl tracking-wider transition-all duration-500 transform hover:scale-[1.03] cursor-pointer border-4 border-[#E53E3E] button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden rounded-full">
                    <span className="relative z-10">РАССЧИТАТЬ СТОИМОСТЬ</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="absolute -inset-1 border-2 border-white opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                  </a>
                </div>
                <div className={`text-sm text-gray-600 font-roboto-light max-w-md whitespace-nowrap transition-all duration-700 ease-out delay-1300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Сайт + бот + настройка • 7 дней • Гарантия
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
                      Прибыль растет в 3 раза
                    </div>
                    <div className="text-base font-inter-black text-gray-700">
                      Средний результат наших проектов
                    </div>
                  </div>
                  
                  <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 transition-all duration-700 ease-out delay-700 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}>
                    <div className={`text-center transition-all duration-500 ease-out delay-800 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <div className="text-base sm:text-lg lg:text-xl font-inter-black text-black mb-1">
                        9.900 ₽
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-roboto-light">
                        стартовая цена
                      </div>
                    </div>
                    <div className={`text-center transition-all duration-500 ease-out delay-900 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <div className="text-base sm:text-lg lg:text-xl font-inter-black text-black mb-1">
                        7 дней
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-roboto-light">
                        до запуска
                      </div>
                    </div>
                    <div className={`text-center transition-all duration-500 ease-out delay-1000 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <div className="text-base sm:text-lg lg:text-xl font-inter-black text-black mb-1">
                        23%
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-roboto-light">
                        средняя конверсия
                      </div>
                    </div>
                  </div>
                  
                  <div className={`pt-3 border-t border-gray-200 transition-all duration-700 ease-out delay-1100 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-600 font-roboto-light">
                      <span className={`bg-gray-50 px-2 py-1 rounded-full transition-all duration-500 ease-out delay-1200 ${
                        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>Гарантия результата</span>
                      <span className={`bg-gray-50 px-2 py-1 rounded-full transition-all duration-500 ease-out delay-1300 ${
                        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>Деньги назад</span>
                      <span className={`bg-gray-50 px-2 py-1 rounded-full transition-all duration-500 ease-out delay-1400 ${
                        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>По маркетинговым принципам</span>
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
                  fontSize: 'clamp(3rem, 6vw, 7rem)',
                  lineHeight: '0.9'
                }}
              >
                ПРИБЫЛЬ РАСТЕТ
              </h2>
            </div>
            
            {/* КОНТАКТЫ */}
            <div className={`flex flex-col gap-1 sm:gap-2 items-center overflow-x-hidden transition-all duration-1000 ease-out delay-1400 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <a 
                href="tel:+79856850115" 
                className={`font-inter-black text-sm sm:text-base lg:text-lg text-black hover:text-gray-600 transition-all duration-300 hover:scale-110 transform cursor-pointer ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                +7 (985) 685-01-15
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
                    Рассчитайте стоимость за 2 минуты
                  </div>
                  <button 
                    onClick={() => setIsFloatingButtonExpanded(false)}
                    className="text-gray-400 hover:text-gray-600 transition-all duration-300 ease-in-out text-lg hover:scale-[1.1]"
                  >
                    ✕
                  </button>
                </div>
                <button className="group relative w-full inline-flex items-center justify-center px-6 py-4 bg-[#E53E3E] text-white font-inter-black text-base tracking-wider transition-all duration-500 ease-in-out transform hover:scale-[1.02] cursor-pointer border-2 border-[#E53E3E] button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden">
                  <span className="relative z-10">РАССЧИТАТЬ СТОИМОСТЬ</span>
                </button>
                <div className="text-xs text-gray-600 font-roboto-light text-center mt-3">
                  Сайт + бот + настройка • 7 дней • Гарантия
                </div>
              </div>
            </div>
          ) : (
            <div className={`transition-all duration-700 ease-out transform animate-in zoom-in-95 fade-in overflow-x-hidden ${
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