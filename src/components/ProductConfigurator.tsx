'use client';

import React, { useState } from 'react';
import OrderPopup from './OrderPopup';

// Функция для форматирования чисел без локали
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

interface Feature {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: Feature[];
}

const products: Product[] = [
  {
    id: 'website',
    name: 'Сайт',
    description: 'Лендинги и многостраничники',
    basePrice: 5000,
    features: [
      { id: 'hero', name: 'Hero блок', price: 3000, description: 'Главный экран с заголовком и CTA', category: 'website' },
      { id: 'about', name: 'Блок "О нас"', price: 2000, description: 'Информация о компании', category: 'website' },
      { id: 'services', name: 'Блок услуг', price: 2500, description: 'Список ваших услуг', category: 'website' },
      { id: 'portfolio', name: 'Портфолио', price: 3000, description: 'Галерея работ', category: 'website' },
      { id: 'testimonials', name: 'Отзывы', price: 2000, description: 'Отзывы клиентов', category: 'website' },
      { id: 'contact', name: 'Контакты', price: 1500, description: 'Форма обратной связи', category: 'website' },
      { id: 'blog', name: 'Блог', price: 4000, description: 'Статьи и новости', category: 'website' },
      { id: 'shop', name: 'Магазин', price: 8000, description: 'Каталог товаров + корзина', category: 'website' },
      { id: 'cms', name: 'Админ-панель', price: 5000, description: 'Управление контентом', category: 'website' },
      { id: 'seo', name: 'SEO оптимизация', price: 3000, description: 'Настройка для поисковиков', category: 'website' },
      { id: 'analytics', name: 'Аналитика', price: 2000, description: 'Яндекс.Метрика + Google Analytics', category: 'website' },
      { id: 'crm', name: 'Интеграция с CRM', price: 4000, description: 'Подключение к CRM системе', category: 'website' }
    ]
  },
  {
    id: 'telegram-app',
    name: 'Telegram Mini App',
    description: 'Приложения внутри Telegram',
    basePrice: 8000,
    features: [
      { id: 'auth', name: 'Авторизация', price: 2000, description: 'Вход через Telegram', category: 'telegram-app' },
      { id: 'catalog', name: 'Каталог товаров', price: 4000, description: 'Список товаров/услуг', category: 'telegram-app' },
      { id: 'cart', name: 'Корзина', price: 3000, description: 'Добавление в корзину', category: 'telegram-app' },
      { id: 'payment', name: 'Оплата', price: 5000, description: 'Подключение платежей', category: 'telegram-app' },
      { id: 'crypto', name: 'Криптоплатежи', price: 6000, description: 'USDT, TON, ETH', category: 'telegram-app' },
      { id: 'ai-chat', name: 'ИИ-чат', price: 8000, description: 'ChatGPT интеграция', category: 'telegram-app' },
      { id: 'notifications', name: 'Уведомления', price: 2000, description: 'Push-уведомления', category: 'telegram-app' },
      { id: 'sharing', name: 'Шеринг', price: 1500, description: 'Поделиться с друзьями', category: 'telegram-app' },
      { id: 'gallery', name: 'Галерея', price: 2500, description: 'Фото и видео', category: 'telegram-app' },
      { id: 'booking', name: 'Бронирование', price: 4000, description: 'Запись на услуги', category: 'telegram-app' },
      { id: 'reviews', name: 'Отзывы', price: 2000, description: 'Система отзывов', category: 'telegram-app' },
      { id: 'admin', name: 'Админка', price: 5000, description: 'Управление приложением', category: 'telegram-app' }
    ]
  },
  {
    id: 'telegram-bot',
    name: 'Telegram Бот',
    description: 'Автоматизация в Telegram',
    basePrice: 3000,
    features: [
      { id: 'commands', name: 'Команды', price: 1000, description: 'Базовые команды /start, /help', category: 'telegram-bot' },
      { id: 'keyboard', name: 'Клавиатура', price: 1500, description: 'Inline кнопки', category: 'telegram-bot' },
      { id: 'catalog-bot', name: 'Каталог', price: 3000, description: 'Показ товаров в боте', category: 'telegram-bot' },
      { id: 'cart-bot', name: 'Корзина в боте', price: 2500, description: 'Оформление заказов', category: 'telegram-bot' },
      { id: 'payment-bot', name: 'Оплата в боте', price: 4000, description: 'Прием платежей', category: 'telegram-bot' },
      { id: 'ai-bot', name: 'ИИ-бот', price: 6000, description: 'ChatGPT в боте', category: 'telegram-bot' },
      { id: 'support', name: 'Поддержка', price: 2000, description: 'FAQ + чат с менеджером', category: 'telegram-bot' },
      { id: 'notifications-bot', name: 'Рассылки', price: 2000, description: 'Массовые уведомления', category: 'telegram-bot' },
      { id: 'analytics-bot', name: 'Аналитика бота', price: 1500, description: 'Статистика использования', category: 'telegram-bot' },
      { id: 'multilang', name: 'Мультиязычность', price: 3000, description: 'Поддержка разных языков', category: 'telegram-bot' },
      { id: 'webhook', name: 'Webhook', price: 2000, description: 'Интеграция с внешними системами', category: 'telegram-bot' },
      { id: 'admin-bot', name: 'Админка бота', price: 3000, description: 'Управление ботом', category: 'telegram-bot' }
    ]
  }
];

export default function ProductConfigurator() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        // Удаляем продукт и все его функции
        const newProducts = prev.filter(p => p !== productId);
        setSelectedFeatures(prevFeatures => 
          prevFeatures.filter(f => {
            const feature = products.flatMap(p => p.features).find(feat => feat.id === f);
            return feature?.category !== productId;
          })
        );
        // Если удаляемый продукт был активным, сбрасываем активный продукт
        if (activeProduct === productId) {
          setActiveProduct(null);
        }
        return newProducts;
      } else {
        // Добавляем продукт и делаем его активным
        setActiveProduct(productId);
        return [...prev, productId];
      }
    });
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => {
      if (prev.includes(featureId)) {
        return prev.filter(f => f !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  const getTotalPrice = () => {
    let total = 0;
    
    // Базовая цена выбранных продуктов
    selectedProducts.forEach(productId => {
      const product = products.find(p => p.id === productId);
      if (product) {
        total += product.basePrice;
      }
    });
    
    // Цена выбранных функций
    selectedFeatures.forEach(featureId => {
      const feature = products.flatMap(p => p.features).find(f => f.id === featureId);
      if (feature) {
        total += feature.price;
      }
    });
    
    return total;
  };

  const getSelectedFeaturesByProduct = (productId: string) => {
    return selectedFeatures.filter(featureId => {
      const feature = products.flatMap(p => p.features).find(f => f.id === featureId);
      return feature?.category === productId;
    });
  };

  const getBusinessBenefits = (featureId: string) => {
    const benefits: { [key: string]: string } = {
      // Сайт
      'hero': 'Привлекает внимание посетителей, увеличивает конверсию на 40%. Первое впечатление решает всё.',
      'about': 'Повышает доверие клиентов на 60%. Люди покупают у тех, кому доверяют.',
      'services': 'Четко показывает ваши услуги. Увеличивает понимание ценности на 35%.',
      'portfolio': 'Демонстрирует качество работ. Увеличивает доверие и конверсию на 45%.',
      'testimonials': 'Социальное доказательство работает. Увеличивает продажи на 25%.',
      'contact': 'Упрощает связь с клиентами. Снижает барьер для обращения на 50%.',
      'blog': 'SEO-трафик растет на 70%. Позиционирует вас как эксперта.',
      'shop': 'Продажи 24/7 без вашего участия. Автоматизация увеличивает прибыль.',
      'cms': 'Экономия времени на обновление контента. Снижает затраты на поддержку.',
      'seo': 'Бесплатный трафик из поиска. ROI до 500% от вложений.',
      'analytics': 'Понимание поведения клиентов. Оптимизация увеличивает конверсию на 30%.',
      'crm': 'Автоматизация продаж. Увеличивает средний чек на 40%.',

      // Telegram Mini App
      'auth': 'Быстрая регистрация через Telegram. Снижает отказы на 60%.',
      'catalog': 'Удобный просмотр товаров. Увеличивает время в приложении на 80%.',
      'cart': 'Простое добавление в корзину. Увеличивает конверсию на 45%.',
      'payment': 'Быстрая оплата. Снижает брошенные корзины на 70%.',
      'crypto': 'Новые платежные методы. Привлекает крипто-аудиторию.',
      'ai-chat': '24/7 поддержка клиентов. Снижает нагрузку на менеджеров на 80%.',
      'notifications': 'Напоминания о товарах. Увеличивает повторные покупки на 35%.',
      'sharing': 'Вирусное распространение. Бесплатный маркетинг через клиентов.',
      'gallery': 'Визуальное представление товаров. Увеличивает доверие на 50%.',
      'booking': 'Автоматизация записи. Снижает ошибки и экономит время.',
      'reviews': 'Доверие через отзывы. Увеличивает конверсию на 25%.',
      'admin': 'Управление без программистов. Экономия на разработчиках.',

      // Telegram Бот
      'commands': 'Быстрый доступ к информации. Улучшает пользовательский опыт.',
      'keyboard': 'Удобная навигация. Увеличивает использование бота на 60%.',
      'catalog-bot': 'Продажи прямо в Telegram. Увеличивает конверсию на 40%.',
      'cart-bot': 'Простое оформление заказов. Снижает брошенные корзины на 50%.',
      'payment-bot': 'Оплата в мессенджере. Увеличивает завершенные покупки на 65%.',
      'ai-bot': 'Автоматические ответы 24/7. Снижает нагрузку на поддержку на 90%.',
      'support': 'Быстрая помощь клиентам. Увеличивает удовлетворенность на 70%.',
      'notifications-bot': 'Массовые рассылки. Увеличивает повторные продажи на 45%.',
      'analytics-bot': 'Понимание аудитории. Оптимизация увеличивает эффективность.',
      'multilang': 'Международная аудитория. Расширяет рынок сбыта.',
      'webhook': 'Интеграция с внешними системами. Автоматизация процессов.',
      'admin-bot': 'Управление ботом без кода. Экономия на разработке.'
    };

    return benefits[featureId] || 'Увеличивает эффективность бизнеса и прибыль.';
  };

  const getOrderMessage = () => {
    const selectedProductsStr = selectedProducts.map(productId => {
      const product = products.find(p => p.id === productId);
      if (product) {
        return `${product.name} - ${formatNumber(product.basePrice)} ₽`;
      }
      return '';
    }).filter(Boolean).join('\n');

    const selectedFeaturesStr = selectedFeatures.map(featureId => {
      const feature = products.flatMap(p => p.features).find(f => f.id === featureId);
      if (feature) {
        return `${feature.name} - ${formatNumber(feature.price)} ₽`;
      }
      return '';
    }).filter(Boolean).join('\n');

    let message = 'Здравствуйте! Хочу заказать проект:\n\n';
    
    if (selectedProductsStr) {
      message += `Продукты:\n${selectedProductsStr}\n\n`;
    }
    
    if (selectedFeaturesStr) {
      message += `Функции:\n${selectedFeaturesStr}\n\n`;
    }
    
    message += `Итого: ${formatNumber(getTotalPrice())} ₽`;
    
    return message;
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
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-inter-black mb-4 text-black">
          Подобрать проект
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700">
          Выберите продукты и функции для вашего проекта
        </p>
      </div>

      {/* Мобильная и планшетная версия - готовые пакеты */}
      <div className="block xl:hidden">
        <div className="space-y-6">
          {/* Готовые пакеты услуг */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Пакет 1: Продающий лендинг */}
            <div className="bg-white border-2 border-red-500 rounded-2xl p-6 shadow-xl relative">
              <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Популярно
              </div>
              <h3 className="text-xl font-inter-black mb-3 text-black">Продающий лендинг</h3>
              <p className="text-sm text-gray-600 mb-4">Одностраничный сайт для продаж</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Hero блок с CTA</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Блок услуг</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Отзывы клиентов</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Форма заявок</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">SEO оптимизация</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Аналитика</span>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-2xl font-inter-black text-red-500 mb-1">15.000 ₽</div>
                <div className="text-sm text-gray-500">вместо 25.000 ₽</div>
              </div>
              
              <button 
                onClick={() => openPopup(
                  'Заказать лендинг',
                  `Здравствуйте! Хочу заказать лендинг за 15.000 ₽

Включает:
• Hero блок
• Блок "О нас"
• Блок услуг
• Портфолио
• Отзывы
• Контакты
• Аналитика

Нужен качественный лендинг для привлечения клиентов.`
                )}
                className="w-full bg-red-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm cursor-pointer"
              >
                Заказать лендинг
              </button>
            </div>

            {/* Пакет 2: Telegram бот */}
            <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-inter-black mb-3 text-black">Telegram бот</h3>
              <p className="text-sm text-gray-600 mb-4">Автоматизация продаж в Telegram</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Каталог товаров</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Корзина и заказы</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Оплата в боте</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">ИИ-поддержка</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Рассылки</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Аналитика</span>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-2xl font-inter-black text-black mb-1">18.000 ₽</div>
                <div className="text-sm text-gray-500">вместо 30.000 ₽</div>
              </div>
              
              <button 
                onClick={() => openPopup(
                  'Заказать Telegram бота',
                  `Здравствуйте! Хочу заказать Telegram бота за 18.000 ₽

Включает:
• Каталог товаров
• Корзина и заказы
• Оплата в боте
• ИИ-поддержка
• Рассылки
• Аналитика

Нужен бот для автоматизации продаж в Telegram.`
                )}
                className="w-full bg-black text-white px-4 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm cursor-pointer"
              >
                Заказать бота
              </button>
            </div>

            {/* Пакет 3: Mini App */}
            <div className="bg-white border-2 border-blue-500 rounded-2xl p-6 shadow-xl">
              <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Новинка
              </div>
              <h3 className="text-xl font-inter-black mb-3 text-black">Telegram Mini App</h3>
              <p className="text-sm text-gray-600 mb-4">Приложение внутри Telegram</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Авторизация через Telegram</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Каталог товаров</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Корзина и оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">ИИ-чат</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Уведомления</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Админ-панель</span>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-2xl font-inter-black text-blue-500 mb-1">25.000 ₽</div>
                <div className="text-sm text-gray-500">вместо 40.000 ₽</div>
              </div>
              
              <button 
                onClick={() => openPopup(
                  'Заказать Telegram Mini App',
                  `Здравствуйте! Хочу заказать Telegram Mini App за 25.000 ₽

Включает:
• Авторизация через Telegram
• Каталог товаров
• Корзина и оплата
• ИИ-чат
• Уведомления
• Админ-панель

Нужно приложение внутри Telegram для продаж.`
                )}
                className="w-full bg-blue-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm cursor-pointer"
              >
                Заказать Mini App
              </button>
            </div>
          </div>

          {/* Дополнительные опции */}
          <div className="hidden xl:block bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-inter-black mb-4 text-black">Дополнительные опции</h3>
            <p className="text-sm text-gray-600 mb-4">Можете добавить к любому пакету</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-semibold text-sm text-black">CRM интеграция</div>
                  <div className="text-xs text-gray-600">Автоматизация продаж</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm text-red-500">+4.000 ₽</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-semibold text-sm text-black">Криптоплатежи</div>
                  <div className="text-xs text-gray-600">USDT, TON, ETH</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm text-red-500">+6.000 ₽</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-semibold text-sm text-black">Мультиязычность</div>
                  <div className="text-xs text-gray-600">Поддержка языков</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm text-red-500">+3.000 ₽</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA блок */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-center text-white">
            <h3 className="text-xl font-inter-black mb-2">Нужен кастомный проект?</h3>
            <p className="text-sm mb-4 opacity-90">Создадим индивидуальное решение под ваши задачи</p>
            <button
              onClick={() => openPopup(
                'Обсудить кастомный проект',
                `Здравствуйте! Хочу обсудить кастомный проект.

Расскажите, пожалуйста:
• Какой проект планируете?
• Какие функции нужны?
• Есть ли примеры похожих проектов?
• Какой бюджет?

Готов обсудить детали и предложить решение.`
              )}
              className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              Обсудить проект
            </button>
          </div>
        </div>
      </div>

      {/* Десктопная версия - подбор проекта */}
      <div className="hidden xl:grid xl:grid-cols-4 gap-8">
        {/* Левая колонка - Выбор продуктов */}
        <div className="xl:col-span-1">
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-2xl">
            <h3 className="text-xl font-inter-black mb-4 text-black">
              Выберите продукты
            </h3>
            
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductToggle(product.id)}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedProducts.includes(product.id)
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-black">{product.name}</h4>
                    <span className="text-red-500 font-bold">{formatNumber(product.basePrice)} ₽</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {getSelectedFeaturesByProduct(product.id).length} функций выбрано
                    </span>
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      selectedProducts.includes(product.id) 
                        ? 'bg-red-500 border-red-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedProducts.includes(product.id) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Центральная колонка - Функции (расширенная) */}
        <div className="xl:col-span-2">
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-2xl">
            <h3 className="text-xl font-inter-black mb-4 text-black">
              Настройте функции
            </h3>
            
            {selectedProducts.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-8">
                Сначала выберите продукты слева
              </p>
            ) : (
              <div>
                {/* Кнопки переключения между продуктами */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProducts.map((productId) => {
                    const product = products.find(p => p.id === productId);
                    if (!product) return null;
                    
                    return (
                      <button
                        key={productId}
                        onClick={() => setActiveProduct(productId)}
                        className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                          activeProduct === productId
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-100 text-black hover:bg-gray-200'
                        }`}
                      >
                        {product.name}
                      </button>
                    );
                  })}
                </div>

                {/* Функции активного продукта */}
                {activeProduct ? (
                  <div>
                    {(() => {
                      const product = products.find(p => p.id === activeProduct);
                      if (!product) return null;
                      
                      return (
                        <div>
                          <h4 className="font-semibold text-black mb-3">{product.name}</h4>
                          
                          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                            {product.features.map((feature) => (
                              <div
                                key={feature.id}
                                onClick={() => handleFeatureToggle(feature.id)}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 min-h-[100px] ${
                                  selectedFeatures.includes(feature.id)
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                {/* Заголовок с ценой */}
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-medium text-sm text-black leading-tight pr-2 flex-1">{feature.name}</h5>
                                  <span className="text-red-500 font-bold text-sm flex-shrink-0">{formatNumber(feature.price)} ₽</span>
                                </div>
                                
                                {/* Описание */}
                                <p className="text-xs text-gray-600 leading-relaxed mb-2">{feature.description}</p>
                                
                                {/* Знак вопроса с подсказкой - только для десктопа */}
                                <div className="flex justify-end">
                                  <div className="relative group">
                                    <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center cursor-help">
                                      <span className="text-xs text-gray-600 font-bold">?</span>
                                    </div>
                                    <div className="absolute bottom-full right-0 mb-2 w-64 bg-black text-white text-xs rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                      <div className="font-semibold mb-1">Преимущества для бизнеса:</div>
                                      {getBusinessBenefits(feature.id)}
                                      <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 text-center py-8">
                    Выберите продукт для настройки функций
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Правая колонка - Корзина */}
        <div className="xl:col-span-1">
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-2xl sticky top-4">
            <h3 className="text-xl font-inter-black mb-4 text-black">
              Ваш проект
            </h3>
            
            {selectedProducts.length === 0 ? (
              <p className="text-sm text-gray-500 mb-4">
                Выберите продукты и функции
              </p>
            ) : (
              <div className="space-y-4 mb-6">
                {selectedProducts.map((productId) => {
                  const product = products.find(p => p.id === productId);
                  const selectedFeaturesForProduct = getSelectedFeaturesByProduct(productId);
                  if (!product) return null;
                  
                  return (
                    <div key={productId} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-sm text-black">{product.name}</p>
                          <p className="text-xs text-gray-600">Базовая цена</p>
                        </div>
                        <span className="text-sm font-bold text-red-500">{formatNumber(product.basePrice)} ₽</span>
                      </div>
                      
                      {selectedFeaturesForProduct.length > 0 && (
                        <div className="space-y-1">
                          {selectedFeaturesForProduct.map((featureId) => {
                            const feature = product.features.find(f => f.id === featureId);
                            if (!feature) return null;
                            
                            return (
                              <div key={featureId} className="flex justify-between items-start text-xs">
                                <span className="text-gray-600">{feature.name}</span>
                                <span className="font-bold text-red-500">{formatNumber(feature.price)} ₽</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg text-black">Итого:</span>
                <span className="font-bold text-xl text-red-500">{formatNumber(getTotalPrice())} ₽</span>
              </div>
              
              <button
                onClick={() => openPopup(
                  'Заказать проект',
                  getOrderMessage()
                )}
                disabled={selectedProducts.length === 0}
                className={`w-full px-4 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm ${
                  selectedProducts.length > 0 
                    ? 'bg-red-500 text-white hover:bg-red-600 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed transform-none'
                }`}
              >
                Заказать проект
              </button>
            </div>
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