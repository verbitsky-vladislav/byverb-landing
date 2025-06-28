'use client';

import React, { useState } from 'react';
import OrderPopup from './OrderPopup';

export default function AboutBlock() {
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Заголовок */}
      <div className="text-center mb-8 xs:mb-12 sm:mb-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6">
          О нас
        </h2>
        <p className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Команда специалистов, которая создает сайты, приносящие прибыль
        </p>
      </div>

      {/* Основной контент - Интересная композиция блоков */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 lg:gap-6">
        {/* Большой блок - Философия */}
        <div className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl xs:rounded-3xl p-4 xs:p-6">
          <h3 className="text-lg xs:text-xl sm:text-2xl font-inter-black mb-3 xs:mb-4 text-black">
            Создаем сайты, которые продают
          </h3>
          <div className="space-y-2 xs:space-y-3 text-gray-700">
            <p className="text-xs xs:text-sm sm:text-base leading-relaxed">
              Мы не просто делаем красивые сайты. Мы создаем инструменты, которые приносят прибыль.
            </p>
            <p className="text-xs xs:text-sm sm:text-base leading-relaxed">
              Каждый проект — это воронка продаж, настроенная под вашу аудиторию и цели.
            </p>
            <p className="text-xs xs:text-sm sm:text-base leading-relaxed">
              Работаем быстро, качественно и всегда на результат.
            </p>
          </div>
        </div>

        {/* Статистика - Время */}
        <div className="bg-black rounded-2xl xs:rounded-3xl p-3 xs:p-4 border border-gray-800 flex flex-col justify-center">
          <div className="text-center">
            <div className="text-2xl xs:text-3xl lg:text-4xl font-inter-black text-red-500 mb-1 xs:mb-2">4</div>
            <div className="text-xs lg:text-sm text-gray-300">года опыта</div>
          </div>
        </div>

        {/* Статистика - Конверсия */}
        <div className="bg-white rounded-2xl xs:rounded-3xl p-3 xs:p-4 border border-gray-200 flex flex-col justify-center">
          <div className="text-center">
            <div className="text-2xl xs:text-3xl lg:text-4xl font-inter-black text-red-500 mb-1 xs:mb-2">23%</div>
            <div className="text-xs lg:text-sm text-gray-700">средняя конверсия</div>
          </div>
        </div>

        {/* Преимущества - Быстрый запуск */}
        <div className="bg-black rounded-2xl xs:rounded-3xl p-3 xs:p-4 border border-gray-800">
          <div className="flex items-start gap-2 xs:gap-3">
            <div className="w-8 h-8 xs:w-10 xs:h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm xs:text-base font-semibold mb-1 text-white">Быстрый запуск</h4>
              <p className="text-gray-300 text-xs">Лендинг за 3-5 дней, бот за 5-7 дней</p>
            </div>
          </div>
        </div>

        {/* Преимущества - Гарантия */}
        <div className="bg-white rounded-2xl xs:rounded-3xl p-3 xs:p-4 border border-gray-200">
          <div className="flex items-start gap-2 xs:gap-3">
            <div className="w-8 h-8 xs:w-10 xs:h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm xs:text-base font-semibold mb-1 text-black">Гарантия результата</h4>
              <p className="text-gray-700 text-xs">Если не будет заявок — улучшаем бесплатно</p>
            </div>
          </div>
        </div>

        {/* CTA блок */}
        <div className="md:col-span-2 lg:col-span-3 bg-red-500 rounded-2xl xs:rounded-3xl p-4 xs:p-6 text-center">
          <h3 className="text-lg xs:text-xl sm:text-2xl font-inter-black mb-2 xs:mb-3 text-white">
            Готовы к результату?
          </h3>
          <p className="text-xs xs:text-sm sm:text-base mb-4 xs:mb-6 text-white opacity-90">
            Обсудим ваш проект и создадим решение, которое будет продавать
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white text-red-500 px-4 xs:px-6 py-2 xs:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer text-sm xs:text-base"
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