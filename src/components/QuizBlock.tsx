'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  message: string;
}

type QuizResult = {
    title: string;
    description: string;
    recommendation: string;
    option1: {
      title: string;
      price: number;
      originalPrice: number;
      description: string;
      benefits: string[];
    };
    option2: {
      title: string;
      price: number;
      description: string;
      benefits: string[];
    };
  };

const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "Чем вы занимаетесь или планируете заниматься?",
      options: ["Продаю товары", "Оказываю услуги", "Делаю обучение/курсы", "Ещё не определился(ась)"],
      message: "Супер, давайте разберёмся, чем помочь 🔍"
    },
    {
      id: 2,
      question: "Что у вас уже есть сейчас?",
      options: ["Сайт", "Бот", "Продукт (товар/услуга)", "Пока ничего"],
      message: "Посмотрим, с чего лучше начать или что улучшить 🧱"
    },
    {
      id: 3,
      question: "Люди уже узнают о вас как-то?",
      options: ["Да, через соцсети", "Да, по сарафану", "Пока нет", "Только начинаю"],
      message: "Скоро станет понятнее, что вам подойдёт 📡"
    },
    {
      id: 4,
      question: "Хотите, чтобы клиенты могли быстро связаться с вами?",
      options: ["Да, это важно", "Пока не нужно", "Зависит от ситуации", "Не знаю, расскажите потом"],
      message: "Уже почти на финише ✨"
    },
    {
      id: 5,
      question: "Планируете принимать заявки или заказы автоматически?",
      options: ["Да, хочу упростить всё", "Нет, сам(а) справлюсь", "Зависит от объёма", "Пока не знаю"],
      message: "Остался последний штрих ⚙️"
    },
    {
      id: 6,
      question: "Как быстро хотите начать?",
      options: ["Хоть завтра", "Через неделю", "Через месяц", "Пока просто изучаю"],
      message: "Готово! Сейчас подберем лучшее решение 🚀"
    }
];
  
export const getRecommendation = (answers: number[]): QuizResult => {
    const [businessType, hasSiteOrBot, hasAudience, wantsContact, wantsAutomation, urgency] = answers;
  
    // Сценарий 1: инфопродукт, новичок
    if (businessType === 2 && hasAudience >= 2 && hasSiteOrBot === 3) {
      return {
        title: "Готовим запуск инфопродукта",
        description: "Вы только начинаете — это отличное время для старта!",
        recommendation: "Рекомендуем начать с простого лендинга — быстро, понятно и работает.",
        option1: {
          title: "Мини-лендинг для запуска курса",
          price: 11000,
          originalPrice: 18000,
          description: "Простой способ запустить обучение без технической головной боли.",
          benefits: [
            "Одностраничник под ключ",
            "Форма сбора заявок",
            "Адаптивность под мобильные",
            "Готов за 5 дней"
          ]
        },
        option2: {
          title: "Лендинг + бот + автосообщения",
          price: 25000,
          description: "Подходит для тех, кто готов вкладываться в масштаб.",
          benefits: [
            "Telegram-бот + лендинг",
            "Сбор, сегментация и рассылка",
            "Поддержка 2 недели",
            "Реализация за 10 дней"
          ]
        }
      };
    }
  
    // Сценарий 2: товары, есть клиенты, нужен бот
    if (businessType === 0 && hasSiteOrBot === 0 && hasAudience === 0 && wantsAutomation === 0) {
      return {
        title: "Автоматизируем продажи товаров",
        description: "У вас уже есть клиенты — теперь нужно ускорить обработку.",
        recommendation: "Бот в Telegram — лучший выбор для быстрого и удобного заказа.",
        option1: {
          title: "Telegram-бот для заказов",
          price: 14000,
          originalPrice: 22000,
          description: "Клиенты заказывают в пару кликов — вы получаете уведомление.",
          benefits: [
            "Каталог в боте",
            "Быстрое оформление заказа",
            "Интеграция с Telegram и email",
            "Скидка 35% при заказе сегодня"
          ]
        },
        option2: {
          title: "Telegram Mini App + CRM",
          price: 29000,
          description: "Если нужен масштаб и мощная аналитика.",
          benefits: [
            "CRM внутри Telegram",
            "Реферальная система",
            "Поддержка и обучение",
            "Интеграция с базой клиентов"
          ]
        }
      };
    }
  
    // Сценарий 3: услуги, есть аудитория, нужна воронка
    if (businessType === 1 && hasAudience <= 1 && wantsAutomation === 0 && urgency <= 1) {
      return {
        title: "Настроим поток заявок на услуги",
        description: "Автоматизация поможет вам сэкономить время и увеличить заявки.",
        recommendation: "Рекомендуем связку: квиз-сайт + Telegram-бот.",
        option1: {
          title: "Квиз-сайт + бот-менеджер",
          price: 18000,
          originalPrice: 30000,
          description: "Идеальное звено между клиентом и вашей услугой.",
          benefits: [
            "Одностраничный сайт с квизом",
            "Telegram-бот с заявками",
            "Уведомления + выгрузка в Excel",
            "Готов за 7 дней"
          ]
        },
        option2: {
          title: "Сайт + бот + реклама",
          price: 39000,
          description: "Полный цикл: от трафика до заявки.",
          benefits: [
            "Настройка рекламы",
            "Бот с воронкой",
            "Сегментация + аналитика",
            "Тесты и улучшения"
          ]
        }
      };
    }
  
    // Сценарий 4: пользователь просто тестирует идею
    if (hasSiteOrBot === 3 && hasAudience >= 2 && urgency === 3) {
      return {
        title: "Проверим вашу идею быстро",
        description: "Без сайта, без бюджета, но с результатом.",
        recommendation: "Можно обойтись лёгким квиз-ботом — проверим спрос.",
        option1: {
          title: "Квиз-бот без сайта",
          price: 7000,
          originalPrice: 12000,
          description: "Самый лёгкий способ собрать первые отклики.",
          benefits: [
            "Квиз внутри Telegram",
            "Автосбор ответов",
            "Готов за 1–2 дня",
            "Работает без сайта"
          ]
        },
        option2: {
          title: "Квиз + сайт + аналитика",
          price: 24000,
          description: "Уже ближе к продукту — если решите идти дальше.",
          benefits: [
            "Одностраничник",
            "Подключение аналитики",
            "Форма заявок + выгрузка",
            "Поддержка 1 неделя"
          ]
        }
      };
    }
  
    // Сценарий 5: услуги, аудитория есть, нужна связка + автоматизация
    if (businessType === 1 && hasAudience === 0 && wantsAutomation === 0 && urgency === 0) {
      return {
        title: "Автоматизируем заявки и консультации",
        description: "Чтобы клиенты приходили и записывались сами.",
        recommendation: "Вам подойдёт Telegram-бот с автоответами.",
        option1: {
          title: "Telegram-бот под услуги",
          price: 16000,
          originalPrice: 24000,
          description: "Принимает заявки, отправляет напоминания и материалы.",
          benefits: [
            "Бот с автосообщениями",
            "Интеграция с таблицами",
            "Уведомления и шаблоны",
            "Скидка 33% при заказе сегодня"
          ]
        },
        option2: {
          title: "Сайт + бот + автоворонка",
          price: 38000,
          description: "Если хотите настроить всё как у экспертов.",
          benefits: [
            "Лендинг под доверие",
            "Бот с рассылкой и сегментами",
            "Подключение платёжки",
            "Техподдержка 2 недели"
          ]
        }
      };
    }
  
    // По умолчанию — универсальное предложение
    return {
      title: "Стартовая точка для вашего проекта",
      description: "Даже если пока не всё понятно — начнём с простого.",
      recommendation: "Рекомендуем мини-лендинг или Telegram-бот, чтобы проверить интерес.",
      option1: {
        title: "Лендинг + форма заявок",
        price: 12000,
        originalPrice: 18000,
        description: "Простой одностраничник, который уже можно запускать.",
        benefits: [
          "Краткий сайт с описанием",
          "Форма заявок + уведомления",
          "Быстрая реализация (3-5 дней)",
          "Адаптация под Telegram"
        ]
      },
      option2: {
        title: "Сайт + бот + автоворонка",
        price: 32000,
        description: "Решение с запасом — если планируете расти.",
        benefits: [
          "Сайт, бот и воронка",
          "Сбор и сегментация лидов",
          "Платежи, рассылки, аналитика",
          "Поддержка на запуске"
        ]
      }
    };
  };

  
export default function QuizBlock() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [contact, setContact] = useState('');

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const recommendation = getRecommendation(newAnswers);
      setResult(recommendation);
      setShowContactForm(true);
    }
  };

  const handleContactSubmit = () => {
    if (contact.trim()) {
      setShowResult(true);
      setShowContactForm(false);
      // Запускаем хлопушку при показе результата
      launchConfetti();
    }
  };

  const launchConfetti = () => {
    // Основной взрыв
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Дополнительные взрывы с задержкой
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
    }, 250);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 400);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setShowContactForm(false);
    setResult(null);
    setContact('');
  };

  if (showResult && result) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 sm:mb-8 text-black">
            {result.title}
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl mb-8 text-gray-700">
            {result.recommendation}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 mb-8">
            {/* Вариант 1 - Базовый со скидкой */}
            <div className="bg-white border-2 border-red-500 rounded-3xl p-6 xs:p-8 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                -40%
              </div>
              <div className="absolute -top-3 -left-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Рекомендуем
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-inter-black mb-4 text-black">
                {result.option1.title}
              </h3>
              <p className="text-sm xs:text-base sm:text-lg mb-6 text-gray-700">
                {result.option1.description}
              </p>
              
              <div className="mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl xs:text-3xl sm:text-4xl font-inter-black text-red-500">
                    {result.option1.price.toLocaleString()} ₽
                  </span>
                  <span className="text-lg xs:text-xl sm:text-2xl text-gray-400 line-through">
                    {result.option1.originalPrice.toLocaleString()} ₽
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6 text-left">
                {result.option1.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm xs:text-base text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-red-500 text-white px-6 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base xs:text-lg cursor-pointer">
                Выбрать базовый
              </button>
            </div>

            {/* Вариант 2 - Полный (скрыт на мобильных) */}
            <div className="hidden lg:block bg-white border-2 border-black rounded-3xl p-6 xs:p-8 shadow-2xl">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-inter-black mb-4 text-black">
                {result.option2.title}
              </h3>
              <p className="text-sm xs:text-base sm:text-lg mb-6 text-gray-700">
                {result.option2.description}
              </p>
              
              <div className="mb-6">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-inter-black text-black">
                  {result.option2.price.toLocaleString()} ₽
                </div>
              </div>
              
              <div className="space-y-3 mb-6 text-left">
                {result.option2.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm xs:text-base text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-black text-white px-6 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base xs:text-lg cursor-pointer">
                Выбрать полный
              </button>
            </div>

            {/* Кнопка "Выбрать самостоятельно" для мобильных */}
            <div className="lg:hidden mt-6">
              <button className="w-full bg-transparent border-2 border-black text-black px-6 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                Выбрать самостоятельно
              </button>
            </div>
          </div>
          
          <button 
            onClick={resetQuiz}
            className="bg-transparent border-2 border-black text-black px-6 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
          >
            Пройти квиз заново
          </button>
        </div>
      </div>
    );
  }

  if (showContactForm && result) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 sm:mb-8 text-black">
            Последний шаг
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl mb-6 xs:mb-8 sm:mb-12 text-gray-700">
            Укажите WhatsApp или Telegram — мы свяжемся с вами и обсудим подробнее
          </p>

          {/* Прогресс бар */}
          <div className="mb-8">
            <div className="text-center mb-4">
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-medium">
                Последний шаг до волшебства
              </p>
            </div>
            <div className="flex justify-between text-xs xs:text-sm mb-2 text-gray-700">
              <span>Шаг {questions.length + 1} из {questions.length + 1}</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-black h-2 rounded-full transition-all duration-500"
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>

          {/* Форма контактов */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 xs:p-8 sm:p-12 mb-8 shadow-2xl">
            <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-inter-black mb-6 xs:mb-8 text-black">
              Ваш контакт
            </h3>
            
            <div className="space-y-4">
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="WhatsApp или Telegram (например: +7 999 123-45-67 или @username)"
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-full font-medium text-black placeholder-gray-500 focus:border-black focus:outline-none transition-all duration-300 text-sm xs:text-base sm:text-lg"
              />
              
              <button
                onClick={handleContactSubmit}
                disabled={!contact.trim()}
                className="w-full bg-red-500 text-white px-6 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base xs:text-lg disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                Получить расчёт
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 sm:mb-8 text-black">
          Рассчитаем стоимость
        </h2>
        <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl mb-6 xs:mb-8 sm:mb-12 text-gray-700">
          Ответьте на 5 вопросов и получите точную стоимость проекта
        </p>

        {/* Прогресс бар */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-medium">
              {currentQ.message}
            </p>
          </div>
          <div className="flex justify-between text-xs xs:text-sm mb-2 text-gray-700">
            <span>Вопрос {currentQuestion + 1} из {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Вопрос */}
        <div className="bg-white border-2 border-black rounded-3xl p-6 xs:p-8 sm:p-12 mb-8 shadow-2xl">
          <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-inter-black mb-6 xs:mb-8 text-black">
            {currentQ.question}
          </h3>
          
          <div className="space-y-3 xs:space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full bg-transparent border-2 border-black text-black px-6 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-sm xs:text-base sm:text-lg cursor-pointer"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 