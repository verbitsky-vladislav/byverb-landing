'use client';

import React, { useState } from 'react';
import OrderPopup from './OrderPopup';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Зачем нужен Telegram-бот, если есть сайт?",
      answer: "Бот — это быстрый и привычный канал общения. Он может собирать заявки, принимать оплату, вести за руку. А главное — работает 24/7 без вашего участия."
    },
    {
      id: 2,
      question: "Почему у вас цены ниже, чем у студий?",
      answer: "Я не раздуваю штат и не беру за аренду офиса. Работаю напрямую, без посредников. Это позволяет дать адекватную цену — с тем же результатом, что у дорогих агентств."
    },
    {
      id: 3,
      question: "Что если сайт не будет приносить заявки?",
      answer: "Сайт — это инструмент. Мы заранее обсуждаем цели, делаем воронку и подбираем решение под ваш продукт. Если не будет результата — улучшаем. Я заинтересован в результате не меньше вас."
    },
    {
      id: 4,
      question: "Реально ли запустить за 5–7 дней?",
      answer: "Да, если у вас есть чёткое понимание, что нужно. Я делаю MVP быстро: лендинг за 3–5 дней, бота — за 5–7. Без воды, только с нужным."
    },
    {
      id: 5,
      question: "Почему выбрать вас, а не фрилансера с биржи?",
      answer: "Я не просто 'кодер', а партнёр в задачах. Думаю не только о технической части, но и о том, как это будет продавать. Работаю на результат и долго не пропадаю — в Telegram всегда на связи."
    }
];
  
export default function FAQBlock() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const openPopup = (title: string, message: string) => {
    setPopupTitle(title);
    setPopupMessage(message);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Заголовок */}
      <div className="text-center mb-8 xs:mb-10 sm:mb-12">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 text-black">
          FAQ
        </h2>
        <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Ответы на главные вопросы о работе
        </p>
      </div>

      {/* FAQ вопросы */}
      <div className="space-y-2 xs:space-y-3">
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`bg-white border border-gray-200 rounded-xl xs:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${
              openItems.includes(item.id) 
                ? 'border-red-500 shadow-md' 
                : 'hover:border-gray-300'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-4 xs:px-6 py-3 xs:py-4 flex justify-between items-start group hover:bg-gray-50 transition-colors duration-300"
            >
              <h3 className="text-base xs:text-lg sm:text-xl font-medium text-black pr-4 xs:pr-6 leading-relaxed group-hover:text-red-500 transition-colors duration-300">
                {item.question}
              </h3>
              
              {/* Стрелка */}
              <div className="flex-shrink-0">
                <div className={`w-6 h-6 xs:w-8 xs:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openItems.includes(item.id) 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-red-500 group-hover:text-white'
                }`}>
                  <svg
                    className={`w-3 h-3 xs:w-4 xs:h-4 transition-transform duration-300 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 xs:px-6 pb-3 xs:pb-4">
                <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA блок */}
      <div className="mt-8 xs:mt-10 sm:mt-12 text-center">
        <div className="bg-black text-white rounded-xl xs:rounded-2xl p-6 xs:p-8">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-inter-black mb-3 xs:mb-4">
            Остались вопросы?
          </h3>
          <p className="text-sm xs:text-base sm:text-lg mb-6 xs:mb-8 text-gray-300">
            Напишите в Telegram — отвечу быстро
          </p>
          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center">
            <button
              onClick={() => openPopup(
                'Задать вопрос в WhatsApp',
                `Здравствуйте! У меня есть вопрос по вашим услугам.

Хотел бы узнать:
• Подробности о процессе разработки
• Сроки выполнения
• Гарантии и поддержку
• Возможность доработок

Готов обсудить мой проект.`
              )}
              className="inline-flex items-center justify-center gap-2 xs:gap-3 bg-red-500 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 cursor-pointer text-sm xs:text-base"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </button>
            <button
              onClick={() => openPopup(
                'Задать вопрос в Telegram',
                `Здравствуйте! У меня есть вопрос по вашим услугам.

Хотел бы узнать:
• Подробности о процессе разработки
• Сроки выполнения
• Гарантии и поддержку
• Возможность доработок

Готов обсудить мой проект.`
              )}
              className="inline-flex items-center justify-center gap-2 xs:gap-3 bg-white text-black px-6 xs:px-8 py-3 xs:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 border-2 border-white cursor-pointer text-sm xs:text-base"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </button>
          </div>
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