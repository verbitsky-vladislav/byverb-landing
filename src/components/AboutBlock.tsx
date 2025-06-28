'use client';

import React, { useState, useEffect } from 'react';
import OrderPopup from './OrderPopup';

export default function AboutBlock() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Заголовок */}
      <div className={`text-center mb-8 xs:mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 transition-all duration-1000 ease-out delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          О нас
        </h2>
        <p className={`text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Команда специалистов, которая создает сайты, приносящие прибыль
        </p>
      </div>

      {/* Основной контент - Интересная композиция блоков */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 lg:gap-6">
        {/* Большой блок - Философия */}
        <div className={`md:col-span-2 lg:col-span-2 bg-white rounded-2xl xs:rounded-3xl p-4 xs:p-6 transition-all duration-1000 ease-out delay-600 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h3 className={`text-lg xs:text-xl sm:text-2xl font-inter-black mb-3 xs:mb-4 text-black transition-all duration-1000 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Создаем сайты, которые продают
          </h3>
          <div className="space-y-2 xs:space-y-3 text-gray-700">
            <p className={`text-xs xs:text-sm sm:text-base leading-relaxed transition-all duration-1000 ease-out delay-800 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Мы не просто делаем красивые сайты. Мы создаем инструменты, которые приносят прибыль.
            </p>
            <p className={`text-xs xs:text-sm sm:text-base leading-relaxed transition-all duration-1000 ease-out delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Каждый проект — это воронка продаж, настроенная под вашу аудиторию и цели.
            </p>
            <p className={`text-xs xs:text-sm sm:text-base leading-relaxed transition-all duration-1000 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Работаем быстро, качественно и всегда на результат.
            </p>
          </div>
        </div>

        {/* Статистика - Время */}
        <div className={`bg-black rounded-2xl xs:rounded-3xl p-3 xs:p-4 border border-gray-800 flex flex-col justify-center transition-all duration-1000 ease-out delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="text-center">
            <div className={`text-2xl xs:text-3xl lg:text-4xl font-inter-black text-red-500 mb-1 xs:mb-2 transition-all duration-1000 ease-out delay-800 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>4</div>
            <div className={`text-xs lg:text-sm text-gray-300 transition-all duration-1000 ease-out delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>года опыта</div>
          </div>
        </div>

        {/* Статистика - Конверсия */}
        <div className={`bg-white rounded-2xl xs:rounded-3xl p-3 xs:p-4 border border-gray-200 flex flex-col justify-center transition-all duration-1000 ease-out delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="text-center">
            <div className={`text-2xl xs:text-3xl lg:text-4xl font-inter-black text-red-500 mb-1 xs:mb-2 transition-all duration-1000 ease-out delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>23%</div>
            <div className={`text-xs lg:text-sm text-gray-700 transition-all duration-1000 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>средняя конверсия</div>
          </div>
        </div>

        {/* Преимущества - Быстрый запуск */}
        <div className={`bg-black rounded-2xl xs:rounded-3xl p-3 xs:p-4 border border-gray-800 transition-all duration-1000 ease-out delay-900 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="flex items-start gap-2 xs:gap-3">
            <div className={`w-8 h-8 xs:w-10 xs:h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-1000 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className={`text-sm xs:text-base font-semibold mb-1 text-white transition-all duration-1000 ease-out delay-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Быстрый запуск</h4>
              <p className={`text-gray-300 text-xs transition-all duration-1000 ease-out delay-1100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Лендинг за 3-5 дней, бот за 5-7 дней</p>
            </div>
          </div>
        </div>

        {/* Преимущества - Гарантия */}
        <div className={`bg-white rounded-2xl xs:rounded-3xl p-3 xs:p-4 border border-gray-200 transition-all duration-1000 ease-out delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="flex items-start gap-2 xs:gap-3">
            <div className={`w-8 h-8 xs:w-10 xs:h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-1000 ease-out delay-1100 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className={`text-sm xs:text-base font-semibold mb-1 text-black transition-all duration-1000 ease-out delay-1100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Гарантия результата</h4>
              <p className={`text-gray-700 text-xs transition-all duration-1000 ease-out delay-1200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Если не будет заявок — улучшаем бесплатно</p>
            </div>
          </div>
        </div>

        {/* CTA блок */}
        <div className={`md:col-span-2 lg:col-span-3 bg-red-500 rounded-2xl xs:rounded-3xl p-4 xs:p-6 text-center transition-all duration-1000 ease-out delay-1100 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h3 className={`text-lg xs:text-xl sm:text-2xl font-inter-black mb-2 xs:mb-3 text-white transition-all duration-1000 ease-out delay-1200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Готовы к результату?
          </h3>
          <p className={`text-xs xs:text-sm sm:text-base mb-4 xs:mb-6 text-white opacity-90 transition-all duration-1000 ease-out delay-1300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Обсудим ваш проект и создадим решение, которое будет продавать
          </p>
          <button
            onClick={openPopup}
            className={`inline-block bg-white text-red-500 px-4 xs:px-6 py-2 xs:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer text-sm xs:text-base transition-all duration-1000 ease-out delay-1400 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            Обсудить проект
          </button>
        </div>
      </div>

      {/* Попап заказа */}
      <OrderPopup
        isOpen={popupOpen}
        onClose={closePopup}
        title="Обсудить проект"
        message={`Здравствуйте! Хочу обсудить проект.

Расскажите, пожалуйста:
• Какой проект планируете?
• Какие цели преследуете?
• Есть ли примеры похожих проектов?
• Какой бюджет?
• Какие сроки?

Готов обсудить детали и предложить решение под ваши задачи.`}
      />
    </div>
  );
} 