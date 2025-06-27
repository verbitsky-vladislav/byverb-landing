'use client';

import { useEffect, useState } from 'react';
import ExpandableCards from './ExpandableCards';

export default function HeroBlock() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFloatingButtonExpanded, setIsFloatingButtonExpanded] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
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
    <div className="w-full h-full flex flex-col justify-between">
      {/* Мобильная версия - очень маленькие телефоны и базовые смартфоны */}
      <div className="xl:hidden">
        {/* ПЕРВЫЙ ЭКРАН - Заголовок, факты, карточки и CTA */}
        <div className="h-screen flex flex-col px-4 pt-16 pb-8">
          {/* Контейнер с ограниченной шириной для планшетов и телефонов */}
          <div className="flex-1 flex flex-col justify-center space-y-8 max-w-2xl mx-auto w-full">
            {/* Заголовок */}
            <div className="space-y-4">
              <div className="text-base xs:text-lg md:text-2xl font-inter-black text-gray-700">
                нужен сайт, который продает?
              </div>
              <div className="text-2xl xs:text-3xl md:text-5xl font-inter-black leading-tight tracking-tight">
                <span className="text-black">САЙТ → ЗАЯВКА → БОТ → КЛИЕНТ!</span>
              </div>
            </div>

            {/* Компактные факты только для больших планшетов (768px+) */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-3 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-sm lg:text-xl font-inter-black text-black">
                  9.900 ₽
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-sm lg:text-xl font-inter-black text-black">
                  7 дней
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-sm lg:text-xl font-inter-black text-black">
                  23%
                </div>
              </div>
            </div>

            {/* Миниатюрные факты для планшетов (480px - 768px) */}
            <div className="hidden sm:block lg:hidden mb-4">
              <div className="flex justify-center space-x-4">
                <div className="bg-gray-50 px-2 py-1 rounded text-center">
                  <div className="text-xs font-inter-black text-black">9.900₽</div>
                </div>
                <div className="bg-gray-50 px-2 py-1 rounded text-center">
                  <div className="text-xs font-inter-black text-black">7д</div>
                </div>
                <div className="bg-gray-50 px-2 py-1 rounded text-center">
                  <div className="text-xs font-inter-black text-black">23%</div>
                </div>
              </div>
            </div>

            {/* Карточки решений */}
            <div className="w-full">
              <ExpandableCards cards={cards} />
            </div>
          </div>

          {/* Нижняя часть - CTA кнопка (скрыта для экранов ≤ 380px) */}
          <div className="mt-8 space-y-4 max-w-2xl mx-auto w-full hidden xs:block">
            <div className="text-base xs:text-lg md:text-2xl font-inter-black text-black text-center">
              Рассчитайте стоимость за 2 минуты
            </div>
            <button className="group relative w-full inline-flex items-center justify-center px-6 xs:px-8 md:px-16 py-4 xs:py-5 md:py-8 bg-[#E53E3E] text-white font-inter-black text-base xs:text-lg md:text-2xl tracking-wider transition-all duration-500 transform hover:scale-105 cursor-pointer border-2 border-[#E53E3E] shadow-xl hover:shadow-2xl hover:-translate-y-1 button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden">
              <span className="relative z-10">РАССЧИТАТЬ СТОИМОСТЬ</span>
            </button>
            <div className="text-xs xs:text-sm md:text-lg text-gray-600 font-roboto-light text-center">
              Сайт + бот + настройка • 7 дней • Гарантия
            </div>
          </div>
        </div>
      </div>

      {/* Десктопная версия - ноутбуки и больше */}
      <div className="hidden xl:flex flex-1 flex items-center justify-center pt-20 pb-10">
        <div className="w-full max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-20 items-start">
            
            {/* ЛЕВАЯ КОЛОНКА - Заголовок и CTA */}
            <div className={`order-2 xl:order-1 pt-8 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Основной заголовок */}
              <div className="mb-12">
                <div className={`text-2xl xl:text-3xl font-inter-black text-gray-700 mb-2 transition-all duration-700 ease-out delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  нужен сайт, который продает?
                </div>
                <div className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-inter-black leading-none tracking-tight mb-8 transition-all duration-700 ease-out delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="text-black">САЙТ → ЗАЯВКА → БОТ → КЛИЕНТ!</span>
                </div>
              </div>
              
              {/* CTA кнопка */}
              <div className={`space-y-6 transition-all duration-700 ease-out delay-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-lg font-inter-black text-black">
                  Рассчитайте стоимость за 2 минуты
                </div>
                <button className="group relative inline-flex items-center justify-center px-16 py-8 bg-[#E53E3E] text-white font-inter-black text-xl sm:text-2xl tracking-wider transition-all duration-500 transform hover:scale-110 cursor-pointer border-4 border-[#E53E3E] shadow-2xl hover:shadow-[0_25px_50px_rgba(229,62,62,0.2)] hover:-translate-y-2 button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden">
                  <span className="relative z-10">РАССЧИТАТЬ СТОИМОСТЬ</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 border-2 border-white opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110"></div>
                </button>
                <div className="text-base text-gray-600 font-roboto-light max-w-md whitespace-nowrap">
                  Сайт + бот + настройка • 7 дней • Гарантия
                </div>
              </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА - Факты и карточки */}
            <div className={`order-1 xl:order-2 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Блок с фактами и гарантиями */}
              <div className={`bg-gray-50 p-8 rounded-lg mb-12 transition-all duration-700 ease-out delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="space-y-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-inter-black text-black mb-2">
                      Прибыль растет в 3 раза
                    </div>
                    <div className="text-lg font-inter-black text-gray-700">
                      Средний результат наших проектов
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-inter-black text-black mb-2">
                        9.900 ₽
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-roboto-light">
                        стартовая цена
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-inter-black text-black mb-2">
                        7 дней
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-roboto-light">
                        до запуска
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-inter-black text-black mb-2">
                        23%
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-roboto-light">
                        средняя конверсия
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-roboto-light">
                      <span className="bg-white px-3 py-1 rounded-full">Гарантия результата</span>
                      <span className="bg-white px-3 py-1 rounded-full">Деньги назад</span>
                      <span className="bg-white px-3 py-1 rounded-full">По маркетинговым принципам</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Карточки решений */}
              <div className={`w-full max-w-lg transition-all duration-700 ease-out delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <ExpandableCards cards={cards} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ - СЛОГАН МАКСИМАЛЬНО ВНИЗУ (только десктоп) */}
      <div className={`hidden xl:block w-full transition-all duration-1000 ease-out delay-1200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            {/* СЛОГАН - только на десктопах */}
            <div className="hidden xl:block">
              <h2 
                className="font-inter-black text-black leading-none tracking-tight whitespace-nowrap"
                style={{
                  fontSize: 'clamp(4rem, 8vw, 9rem)',
                  lineHeight: '0.9'
                }}
              >
                ПРИБЫЛЬ РАСТЕТ
              </h2>
            </div>
            
            {/* КОНТАКТЫ */}
            <div className="flex flex-col gap-1 sm:gap-2 items-center">
              <a 
                href="tel:+74951234567" 
                className="font-inter-black text-sm sm:text-base lg:text-lg text-black hover:text-gray-600 transition-colors duration-300"
              >
                +7 (495) 123-45-67
              </a>
              <a 
                href="mailto:hello@byverb.dev" 
                className="font-inter-black text-sm sm:text-base lg:text-lg text-black hover:text-gray-600 transition-colors duration-300"
              >
                hello@byverb.dev
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Всплывающая кнопка для очень маленьких телефонов (≤ 380px) */}
      <div className="xl:hidden">
        <div className="fixed bottom-4 left-4 right-4 z-50">
          {isFloatingButtonExpanded ? (
            <div className="transition-all duration-700 ease-out transform animate-in slide-in-from-bottom-4 fade-in">
              <div className="bg-white border-2 border-[#E53E3E] rounded-lg shadow-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-inter-black text-black">
                    Рассчитайте стоимость за 2 минуты
                  </div>
                  <button 
                    onClick={() => setIsFloatingButtonExpanded(false)}
                    className="text-gray-400 hover:text-gray-600 transition-all duration-300 ease-in-out text-lg hover:scale-110"
                  >
                    ✕
                  </button>
                </div>
                <button className="group relative w-full inline-flex items-center justify-center px-6 py-4 bg-[#E53E3E] text-white font-inter-black text-base tracking-wider transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer border-2 border-[#E53E3E] shadow-xl hover:shadow-2xl hover:-translate-y-1 button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden">
                  <span className="relative z-10">РАССЧИТАТЬ СТОИМОСТЬ</span>
                </button>
                <div className="text-xs text-gray-600 font-roboto-light text-center mt-3">
                  Сайт + бот + настройка • 7 дней • Гарантия
                </div>
              </div>
            </div>
          ) : (
            <div className="transition-all duration-700 ease-out transform animate-in zoom-in-95 fade-in">
              <button 
                onClick={() => setIsFloatingButtonExpanded(true)}
                className="w-16 h-16 bg-[#E53E3E] text-white font-inter-black text-xs rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-110 flex items-center justify-center"
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