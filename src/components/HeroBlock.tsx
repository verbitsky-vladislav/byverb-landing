'use client';

import { useScreenHeight } from '@/hooks/useScreenHeight';
import { useEffect, useState } from 'react';
import ExpandableCards from './ExpandableCards';

export default function HeroBlock() {
  const screenHeight = useScreenHeight();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Небольшая задержка для плавного появления
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

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
    <div className="w-full h-full flex flex-col justify-between">
      {/* Верхняя часть - основной контент */}
      <div className="flex-1 flex items-center justify-center pt-20 pb-10">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            
            {/* ЛЕВАЯ КОЛОНКА - Заголовок и CTA */}
            <div className={`order-2 lg:order-1 pt-8 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Основной заголовок */}
              <div className="mb-12">
                <div className={`text-xl sm:text-2xl lg:text-3xl font-inter-black text-gray-700 mb-2 transition-all duration-700 ease-out delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  нужен продукт, который продает?
                </div>
                <div className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-inter-black leading-none tracking-tight mb-8 transition-all duration-700 ease-out delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className="group relative bg-black text-white px-8 py-4 inline-block transition-all duration-500 transform hover:scale-110 cursor-pointer border-4 border-black shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden hover:bg-white hover:text-black">
                    <span className="relative z-10">ОБСУДИТЬ</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <div className="absolute -inset-1 border-2 border-white opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:scale-110"></div>
                  </button>
                </div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-inter-black text-black mb-4 transition-all duration-700 ease-out delay-600 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  За 7 дней
                </div>
                <div className={`text-lg sm:text-xl text-gray-600 font-roboto-light transition-all duration-700 ease-out delay-800 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Или вернем деньги
                </div>
              </div>
              
              {/* CTA кнопка */}
              <div className={`space-y-6 transition-all duration-700 ease-out delay-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <button className="group relative inline-flex items-center justify-center px-16 py-8 bg-[#E53E3E] text-white font-inter-black text-xl sm:text-2xl tracking-wider transition-all duration-500 transform hover:scale-110 cursor-pointer border-4 border-[#E53E3E] shadow-2xl hover:shadow-[0_25px_50px_rgba(229,62,62,0.2)] hover:-translate-y-2 button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden">
                  <span className="relative z-10">ПОДОБРАТЬ ПРОДУКТ БЕСПЛАТНО</span>
                </button>
                <div className="text-base text-gray-600 font-roboto-light max-w-md whitespace-nowrap">
                  Подберем продукт под ваш бизнес • 15 минут • Без обязательств
                </div>
              </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА - Факты и карточки */}
            <div className={`order-1 lg:order-2 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Блок с фактами и гарантиями */}
              <div className={`bg-gray-50 p-8 rounded-lg mb-12 transition-all duration-700 ease-out delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="space-y-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-inter-black text-black mb-2">
                      Создаем за 7 дней
                    </div>
                    <div className="text-lg font-inter-black text-gray-700">
                      С гарантией роста продаж
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-inter-black text-[#E53E3E] mb-2">
                        7
                      </div>
                      <div className="text-sm text-gray-600 font-roboto-light">
                        дней до запуска
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-inter-black text-[#E53E3E] mb-2">
                        100%
                      </div>
                      <div className="text-sm text-gray-600 font-roboto-light">
                        гарантия результата
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

              {/* Карточки продуктов */}
              <div className={`w-full max-w-lg transition-all duration-700 ease-out delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <ExpandableCards cards={cards} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ - СЛОГАН МАКСИМАЛЬНО ВНИЗУ */}
      <div className={`w-full transition-all duration-1000 ease-out delay-1200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* СЛОГАН */}
            <div>
              <h2 className="font-inter-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-black leading-none tracking-tight whitespace-nowrap">
                ПРИБЫЛЬ РАСТЕТ
              </h2>
            </div>
            
            {/* КОНТАКТЫ */}
            <div className="flex flex-col gap-2 items-center">
              <a 
                href="tel:+74951234567" 
                className="font-inter-black text-base sm:text-lg text-black hover:text-gray-600 transition-colors duration-300"
              >
                +7 (495) 123-45-67
              </a>
              <a 
                href="mailto:hello@byverb.dev" 
                className="font-inter-black text-base sm:text-lg text-black hover:text-gray-600 transition-colors duration-300"
              >
                hello@byverb.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 