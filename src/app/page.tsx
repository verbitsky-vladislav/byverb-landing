'use client';

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { Zap, Target, TrendingUp, CheckCircle, ArrowRight, ExternalLink, Bot, FileText, Globe, Star, Sparkles, ShoppingCart, MessageSquare, CreditCard, Headphones, Briefcase, BookOpen, Palette, Settings } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [advantagesVisible, setAdvantagesVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [showTelegramModal, setShowTelegramModal] = useState(false);
  const [telegramText, setTelegramText] = useState('');
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const terminalLines = useMemo(() => [
    '> npm install success',
    '> building project...',
    '> deploying to production',
    '> website ready! 🚀',
  ], []);

  const advantages = useMemo(() => [
    {
      icon: Zap,
      title: "Быстрая разработка",
      description: "Создаем сайты и приложения в кратчайшие сроки без потери качества"
    },
    {
      icon: Target,
      title: "Точное попадание",
      description: "Каждый проект решает конкретные бизнес-задачи и приносит результат"
    },
    {
      icon: TrendingUp,
      title: "Рост и развитие",
      description: "Помогаем бизнесу расти с помощью современных технологий"
    },
    {
      icon: CheckCircle,
      title: "Гарантия качества",
      description: "Тестируем каждый проект и обеспечиваем стабильную работу"
    }
  ], []);

  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Reflecty',
      subtitle: 'AI-бот для рефлексии',
      description: 'Telegram-бот с искусственным интеллектом для ежедневной рефлексии и анализа эмоций',
      websiteUrl: 'https://reflecty.ru',
      imagePath: 'reflecty.png',
      placeholderColors: {
        primary: '#10B981',
        secondary: '#059669',
        accent: '#34D399'
      },
      task: 'Создать умного помощника для саморазвития, который поможет людям лучше понимать себя через ежедневную рефлексию',
      solution: 'Разработал Telegram-бота с интеграцией OpenAI GPT-4. Добавил премиум-функции: голосовые заметки, AI-анализ недели, персональные шаблоны вопросов и научно обоснованные методики рефлексии',
      result: '1000+ активных пользователей, премиум-конверсия 18%, средний рейтинг 4.9/5. Пользователи отмечают улучшение эмоционального состояния на 65%',
      technologies: ['Node.js', 'Telegram API', 'OpenAI GPT-4', 'PostgreSQL', 'Redis']
    },
    {
      id: 2,
      title: 'R-Logist',
      subtitle: 'Логистическая платформа',
      description: 'Комплексная система управления грузоперевозками с AI-оптимизацией маршрутов',
      websiteUrl: 'https://r-logist.ru',
      imagePath: 'r-logist.png',
      placeholderColors: {
        primary: '#3B82F6',
        secondary: '#2563EB',
        accent: '#60A5FA'
      },
      task: 'Автоматизировать логистические процессы для транспортной компании, сократить расходы и повысить эффективность доставки',
      solution: 'Создал полнофункциональную веб-платформу с модулями: AI-планирование маршрутов, GPS-отслеживание в реальном времени, управление автопарком, аналитика и автоматические отчеты',
      result: 'Оптимизация маршрутов на 35%, сокращение времени доставки на 28%, увеличение прибыли на 45%. ROI проекта составил 320% за первый год',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Socket.io']
    },
    {
      id: 3,
      title: 'Tatwole Mode',
      subtitle: 'Фитнес-трансформация',
      description: 'Мотивирующая платформа для фитнес-трансформации с живым сообществом',
      websiteUrl: 'https://www.tatwolemode.ru/',
      imagePath: 'tatwole-mode.png',
      placeholderColors: {
        primary: '#F59E0B',
        secondary: '#D97706',
        accent: '#FBBF24'
      },
      task: 'Создать вдохновляющую платформу для людей, которые хотят изменить себя через фитнес и правильное питание',
      solution: 'Разработал интерактивный лендинг с 8-недельной программой тренировок, видеоуроками, живым чатом участников, системой достижений и призами за лучшую трансформацию',
      result: '500+ участников программы, средняя трансформация -9кг за 8 недель, конверсия в продажи 15%. 89% участников достигли своих целей',
      technologies: ['Next.js', 'Vercel', 'Stripe', 'Telegram API', 'Framer Motion']
    },
    {
      id: 4,
      title: 'Tech Repair',
      subtitle: 'Сервисный центр',
      description: 'Современный сайт мастера по ремонту бытовой техники с онлайн-заявками',
      websiteUrl: 'https://tech-repair.vercel.app/',
      imagePath: 'tech-repair.png',
      placeholderColors: {
        primary: '#8B5CF6',
        secondary: '#7C3AED',
        accent: '#A78BFA'
      },
      task: 'Создать профессиональный сайт для мастера, который привлечет клиентов и упростит процесс заказа услуг',
      solution: 'Разработал адаптивный сайт с каталогом услуг, системой отзывов, онлайн-калькулятором стоимости, интеграцией с мессенджерами и автоматическими уведомлениями',
      result: '250+ довольных клиентов в месяц, увеличение заявок на 250%, средний чек вырос на 40%. Время обработки заявок сократилось с 2 часов до 15 минут',
      technologies: ['Next.js', 'Vercel', 'Telegram API', 'WhatsApp API', 'Tailwind CSS']
    }
  ], []);

  // Mini products data
  const miniProducts = useMemo(() => [
    {
      icon: Bot,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      title: "Telegram-боты",
      description: "Автоматизация бизнес-процессов, рассылки, обработка заявок",
      price: "от 15 000 ₽",
      features: ["Автоматизация", "Интеграции", "Поддержка"],
      animationDelay: "0.2s",
      telegramText: "Привет! 👋 Интересует разработка Telegram-бота. Мне нужно автоматизировать...",
      action: "telegram"
    },
    {
      icon: FileText,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      title: "Шаблоны сайтов",
      description: "Готовые решения для быстрого запуска бизнеса в интернете",
      price: "от 8 000 ₽",
      features: ["Адаптивность", "SEO-оптимизация", "Документация"],
      animationDelay: "0.4s",
      telegramText: "Привет! 👋 Интересуют шаблоны сайтов. Хочу запустить проект для...",
      action: "templates"
    },
    {
      icon: Globe,
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
      title: "Лендинги",
      description: "Высококонверсионные страницы для увеличения продаж",
      price: "от 12 000 ₽",
      features: ["Конверсия", "Аналитика", "A/B тестирование"],
      animationDelay: "0.6s",
      telegramText: "Привет! 👋 Нужен лендинг для увеличения продаж. Хочу продвигать...",
      action: "telegram"
    }
  ], []);

  const templates = useMemo(() => [
    {
      id: 1,
      title: 'Корпоративный сайт',
      description: 'Представление компании',
      price: '12 000 ₽',
      duration: '3-4 дня',
      color: 'purple',
      iconColor: 'text-purple-500',
      icon: Briefcase,
      link: 'https://corporate-template.vercel.app',
      telegramText: 'Привет! 👋 Интересует шаблон корпоративного сайта. Хочу представить компанию в интернете с современным дизайном. Расскажи подробнее о возможностях и процессе работы.'
    },
    {
      id: 2,
      title: 'Интернет-магазин',
      description: 'Продажа товаров онлайн',
      price: '15 000 ₽',
      duration: '4-5 дней',
      color: 'green',
      iconColor: 'text-green-500',
      icon: ShoppingCart,
      link: 'https://ecommerce-template.vercel.app',
      telegramText: 'Привет! 👋 Нужен шаблон интернет-магазина. Хочу продавать товары онлайн с удобным каталогом и корзиной. Интересует функционал и настройка.'
    },
    {
      id: 3,
      title: 'Портфолио',
      description: 'Стильная презентация работ',
      price: '6 000 ₽',
      duration: '1 день',
      color: 'orange',
      iconColor: 'text-orange-500',
      icon: Palette,
      link: 'https://portfolio-template.vercel.app',
      telegramText: 'Привет! 👋 Интересует шаблон портфолио. Хочу показать работы в сфере дизайна/разработки. Нужен красивый и функциональный сайт для презентации проектов.'
    },
    {
      id: 4,
      title: 'Блог',
      description: 'Платформа для контента',
      price: '7 000 ₽',
      duration: '1-2 дня',
      color: 'indigo',
      iconColor: 'text-indigo-500',
      icon: BookOpen,
      link: 'https://blog-template.vercel.app',
      telegramText: 'Привет! 👋 Нужен шаблон блога. Хочу делиться контентом о технологиях/бизнесе/творчестве. Интересует удобная система управления контентом.'
    },
    {
      id: 5,
      title: 'Лендинг',
      description: 'Высококонверсионная страница',
      price: '5 000 ₽',
      duration: '1 день',
      color: 'pink',
      iconColor: 'text-pink-500',
      icon: Target,
      link: 'https://landing-template.vercel.app',
      telegramText: 'Привет! 👋 Интересует шаблон лендинга. Хочу конвертировать посетителей в клиентов. Нужна продающая страница с формами захвата лидов.'
    },
    {
      id: 6,
      title: 'Сервис',
      description: 'Платформа для услуг',
      price: '15 000 ₽',
      duration: '3-4 дня',
      color: 'teal',
      iconColor: 'text-teal-500',
      icon: Settings,
      link: 'https://service-template.vercel.app',
      telegramText: 'Привет! 👋 Нужен шаблон сервиса. Хочу предоставлять услуги в сфере консалтинга/обучения/поддержки. Интересует система бронирования и оплаты.'
    }
  ], []);

  const handleProjectSelect = useCallback((project: typeof projects[0]) => {
    setSelectedProject(project);
    disableScroll();
  }, []);
  const handleModalClose = () => {
    setSelectedProject(null);
    enableScroll();
  };
  const handleImageError = useCallback((projectId: number) => {
    setImageErrors(prev => new Set(prev).add(projectId));
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    const terminalInterval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % terminalLines.length);
    }, 2000);

    // Intersection Observer для анимации карточек
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAdvantagesVisible(true);
          // Отключаем observer после срабатывания
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (advantagesRef.current) {
      observer.observe(advantagesRef.current);
    }

    // Intersection Observer для анимации проектов
    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Анимация будет добавлена позже
          // Отключаем observer после срабатывания
          projectsObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
    }

    return () => {
      clearInterval(terminalInterval);
      observer.disconnect();
      projectsObserver.disconnect();
    };
  }, [terminalLines.length]); // Возвращаю зависимость, но теперь она стабильна благодаря useMemo

  // Функция для блокировки скролла страницы
  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = 'var(--scrollbar-width)';
  };

  // Функция для разблокировки скролла страницы
  const enableScroll = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  // Функция для открытия Telegram с предзаполненным текстом
  const openTelegramWithText = (text: string) => {
    openTelegramModal(text);
  };

  // Функция для открытия модального окна Telegram
  const openTelegramModal = (text: string) => {
    setTelegramText(text);
    setShowTelegramModal(true);
    disableScroll();
  };

  // Функция для копирования текста в буфер обмена
  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // Для HTTPS и современных браузеров
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        // Fallback для старых браузеров и HTTP
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const result = document.execCommand('copy');
        document.body.removeChild(textArea);
        return result;
      }
    } catch (err) {
      console.error('Ошибка копирования:', err);
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm sm:text-base">b</span>
              </div>
              <span className="text-white font-bold text-lg sm:text-xl">byverb_</span>
            </div>
            <nav className="hidden sm:flex items-center space-x-8">
              <a href="#advantages" className="text-gray-300 hover:text-green-500 transition-colors duration-300">Преимущества</a>
              <a href="#services" className="text-gray-300 hover:text-green-500 transition-colors duration-300">Услуги</a>
              <a href="#projects" className="text-gray-300 hover:text-green-500 transition-colors duration-300">Проекты</a>
              <a href="#about" className="text-gray-300 hover:text-green-500 transition-colors duration-300">Обо мне</a>
            </nav>
            <button className="sm:hidden text-gray-300 hover:text-green-500 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 lg:mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Создаем сайты, которые{' '}
              <span className="text-green-500">продают</span>
            </h1>
            
            <p className={`text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              От идеи до запуска за неделю. Быстро, качественно, с гарантией результата.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <button 
                onClick={() => openTelegramWithText('Привет! 👋 Хочу обсудить новый проект. Мне нужно создать...')}
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Начать проект
              </button>
              <button 
                onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border border-gray-600 text-white font-bold rounded-xl hover:border-green-500 hover:text-green-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Посмотреть работы
              </button>
            </div>

            {/* Terminal */}
            <div className={`mt-12 sm:mt-16 lg:mt-20 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-sm sm:text-base lg:text-lg text-green-500">
                  <div className="animate-terminal">
                    {terminalLines[currentLine]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" ref={advantagesRef} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-green-500/2 pointer-events-none" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-green-500/6 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 transition-all duration-1000 ${
              advantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Почему выбирают{' '}
              <span className="text-green-500 animate-pulse">byverb_</span>
            </h2>
            <p className={`text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              advantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Мы создаем не просто сайты, а инструменты для роста вашего бизнеса
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className={`group relative bg-gray-900/30 backdrop-blur-sm border-l-4 border-transparent hover:border-green-500 transition-all duration-500 p-8 rounded-r-2xl hover:bg-gray-900/50 ${
                    advantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex items-start gap-6">
                    {/* Number */}
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-all duration-500">
                      <span className="text-green-500 font-bold text-lg group-hover:scale-110 transition-transform duration-500">
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-all duration-500">
                          {React.createElement(advantage.icon, { 
                            className: "w-4 h-4 text-green-500" 
                          })}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-500">
                          {advantage.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA with Animation */}
          <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-700 ${
            advantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 group cursor-pointer"
            >
              <span>Посмотреть проекты</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Mini Products Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/3 pointer-events-none" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-500/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-green-500/6 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Готовые решения{' '}
              <span className="text-green-500 animate-pulse">byverb_</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Выберите готовое решение или закажите индивидуальную разработку
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {miniProducts.map((product, index) => (
              <div
                key={product.title}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/80 cursor-pointer hover:scale-105 flex flex-col h-full overflow-hidden ${
                  product.iconColor === 'text-blue-500' 
                    ? 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]' 
                    : product.iconColor === 'text-purple-500'
                    ? 'hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]'
                    : 'hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                }`}
                style={{ 
                  animationDelay: product.animationDelay
                }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-500/10 to-transparent rounded-2xl" />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-500/20 rounded-full animate-ping" style={{ animationDelay: `${index * 0.2}s` }} />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-500/30 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.3}s` }} />
                </div>

                {/* Icon */}
                <div className={`relative z-10 w-12 h-12 ${product.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="relative">
                    {React.createElement(product.icon, { 
                      className: `w-6 h-6 ${product.iconColor} transition-all duration-500 group-hover:scale-110 group-hover:text-gray-300` 
                    })}
                    {/* Floating particles around icon */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-500/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gray-500/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-500 group-hover:translate-x-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-500 group-hover:translate-x-1">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-lg group-hover:bg-gray-800/70 transition-all duration-300 group-hover:scale-105"
                        >
                          <CheckCircle className="w-3 h-3 text-gray-400" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="relative z-10 flex items-center justify-between mt-auto">
                  <div className="text-right">
                    <div className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors duration-500">{product.price}</div>
                    <div className="text-xs text-gray-400">Срок: 3-7 дней</div>
                  </div>
                  <button 
                    onClick={() => {
                      if (product.action === 'telegram') {
                        openTelegramWithText(product.telegramText);
                      } else if (product.action === 'templates') {
                        setShowTemplatesModal(true);
                        disableScroll();
                      }
                    }}
                    className={`mt-4 px-6 py-3 border-2 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      product.iconColor === 'text-blue-500' 
                        ? 'border-blue-500 text-blue-500 hover:bg-blue-500/10' 
                        : product.iconColor === 'text-purple-500'
                        ? 'border-purple-500 text-purple-500 hover:bg-purple-500/10'
                        : 'border-green-500 text-green-500 hover:bg-green-500/10'
                    }`}
                  >
                    {product.action === 'templates' ? 'Посмотреть' : 'Заказать'}
                  </button>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-600/30 transition-all duration-500" />
                
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"
                  style={{
                    background: product.iconColor === 'text-blue-500' 
                      ? 'linear-gradient(to right, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0))'
                      : product.iconColor === 'text-purple-500'
                      ? 'linear-gradient(to right, rgba(168, 85, 247, 0), rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0))'
                      : 'linear-gradient(to right, rgba(34, 197, 94, 0), rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0))'
                  }}
                />
                
                {/* Moving gradient overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: product.iconColor === 'text-blue-500' 
                      ? 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.3), transparent)'
                      : product.iconColor === 'text-purple-500'
                      ? 'linear-gradient(to right, transparent, rgba(168, 85, 247, 0.3), transparent)'
                      : 'linear-gradient(to right, transparent, rgba(34, 197, 94, 0.3), transparent)',
                    animation: 'continuousShimmer 2s ease-in-out infinite'
                  }}
                />
              </div>
            ))}
          </div> 
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-16 sm:py-24 lg:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Реальные{' '}
              <span className="text-green-500">проекты</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Каждый проект — это решение конкретной бизнес-задачи с измеримыми результатами. 
              От идеи до запуска за неделю.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16 hover:bg-gray-900/50 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:flex lg:items-center lg:gap-12`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-green-500 transition-all duration-500">
                    <div className="aspect-video bg-gray-800 relative overflow-hidden image-group">
                      {project.imagePath && !imageErrors.has(project.id) ? (
                        // Если есть изображение и нет ошибки - показываем его
                        <Image
                          src={`/projects/${project.imagePath}`}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          width={800}
                          height={450}
                          quality={100}
                          onError={() => handleImageError(project.id)}
                        />
                      ) : (
                        // Если нет изображения или есть ошибка - показываем кастомную заглушку
                        <div 
                          className="w-full h-full flex items-center justify-center relative overflow-hidden z-10"
                          style={{
                            background: project.placeholderColors ? 
                              `linear-gradient(135deg, ${project.placeholderColors.primary}20, ${project.placeholderColors.secondary}20)` :
                              'linear-gradient(135deg, #10B98120, #05966920)'
                          }}
                        >
                          {/* Анимированный фон */}
                          <div 
                            className="absolute inset-0 opacity-30 z-0"
                            style={{
                              background: project.placeholderColors ? 
                                `radial-gradient(circle at 30% 20%, ${project.placeholderColors.accent}40 0%, transparent 50%),
                                 radial-gradient(circle at 70% 80%, ${project.placeholderColors.primary}30 0%, transparent 50%)` :
                                'radial-gradient(circle at 30% 20%, #34D39940 0%, transparent 50%), radial-gradient(circle at 70% 80%, #10B98130 0%, transparent 50%)'
                            }}
                          />
                          
                          {/* Основной контент заглушки */}
                          <div className="relative z-10 text-center">
                            <div 
                              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                              style={{
                                background: project.placeholderColors ? 
                                  `linear-gradient(135deg, ${project.placeholderColors.primary}, ${project.placeholderColors.secondary})` :
                                  'linear-gradient(135deg, #10B981, #059669)',
                                boxShadow: project.placeholderColors ? 
                                  `0 10px 30px ${project.placeholderColors.primary}40` :
                                  '0 10px 30px #10B98140'
                              }}
                            >
                              <span className="text-white text-3xl font-bold">
                                {project.title.charAt(0)}
                              </span>
                            </div>
                            <h4 
                              className="text-xl font-bold mb-2"
                              style={{ color: project.placeholderColors?.primary || '#10B981' }}
                            >
                              {project.title}
                            </h4>
                            <p className="text-gray-400 text-sm font-medium">
                              {project.subtitle}
                            </p>
                          </div>
                          
                          {/* Декоративные элементы */}
                          <div 
                            className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60 z-5"
                            style={{ backgroundColor: project.placeholderColors?.accent || '#34D399' }}
                          />
                          <div 
                            className="absolute bottom-6 left-6 w-2 h-2 rounded-full opacity-40 z-5"
                            style={{ backgroundColor: project.placeholderColors?.secondary || '#059669' }}
                          />
                          <div 
                            className="absolute top-1/2 left-4 w-1.5 h-1.5 rounded-full opacity-50 z-5"
                            style={{ backgroundColor: project.placeholderColors?.primary || '#10B981' }}
                          />
                        </div>
                      )}
                      
                      {/* Hover Overlay - только для картинки */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 image-group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                        <a 
                          href={project.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                            <span className="text-green-400 text-2xl font-bold">→</span>
                          </div>
                          <p className="text-white font-semibold text-lg drop-shadow-lg">Открыть проект</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-green-500 font-mono text-sm">0{index + 1}</span>
                        <span className="text-gray-500">—</span>
                        <span className="text-gray-400 text-sm font-medium">{project.subtitle}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-green-500/10 text-green-500 text-sm font-mono rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleProjectSelect(project)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 cursor-pointer"
                    >
                      Подробнее
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 sm:p-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={handleModalClose}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-xl cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-8">
                {/* Task */}
                <div className="bg-gray-800/30 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-green-500 mb-4">Задача</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.task}</p>
                </div>

                {/* Solution */}
                <div className="bg-gray-800/30 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-green-500 mb-4">Решение</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                </div>

                {/* Result */}
                <div className="bg-gray-800/30 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-green-500 mb-4">Результат</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.result}</p>
                </div>

                {/* Technologies */}
                <div className="bg-gray-800/30 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-green-500 mb-4">Технологии</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies?.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-green-500/10 text-green-500 text-sm font-mono rounded-lg border border-green-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Me Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-10 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-green-500/2 pointer-events-none" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-500/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-green-500/6 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Обо мне
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Разработчик, который создает не просто код, а решения для бизнеса
              </p>
            </div>

            {/* Profile Header */}
            <div className="text-center mb-8">
              <div className="relative inline-block group">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-500/20 shadow-2xl shadow-green-500/10 group-hover:border-green-500/40 transition-all duration-500 group-hover:scale-105 mx-auto mb-4">
                  <img 
                    src="/avatar.svg" 
                    alt="Аватар Владислава Вербицкого, byverb_" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500/30 rounded-full animate-ping" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                byverb_
              </h3>
              <p className="text-green-500 font-medium mb-4">
                Full-Stack Developer & Entrepreneur
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Создаю не просто сайты, а инструменты для роста бизнеса. Каждый проект должен решать конкретные задачи и приносить результат.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Tech Stack Card */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Технологии</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Telegram Bot API'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Approach Card */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Подход</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <span>24/7 на связи</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <span>Быстрый старт</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <span>Работа по предоплате</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Контакты</h4>
                </div>
                <div className="space-y-3">
                  <a href="tg://msg?to=byverb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c-.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                    @byverb
                  </a>
                  <a href="mailto:hello@byverb.dev" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@byverb.dev
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <button 
                onClick={() => openTelegramModal('Привет! 👋 Заинтересовался твоими работами и хочу обсудить возможное сотрудничество. Мне нужен качественный сайт/приложение для моего бизнеса. Расскажи подробнее о процессе работы и сроках реализации.')}
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 group cursor-pointer"
              >
                <span>Связаться со мной</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Modal */}
      {showTelegramModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-3xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c-.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                Написать в Telegram
              </h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-6 border border-gray-700">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {telegramText}
                </p>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={async () => {
                    const success = await copyToClipboard(telegramText);
                    if (success) {
                      alert('Текст скопирован в буфер обмена!');
                    } else {
                      alert('Не удалось скопировать текст. Скопируйте его вручную.');
                    }
                  }}
                  className="w-full px-6 py-3 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  📋 Скопировать текст
                </button>
                
                <button
                  onClick={() => {
                    window.open('tg://msg?to=verbitsky_vladislav', '_blank');
                    setShowTelegramModal(false);
                    enableScroll();
                  }}
                  className="w-full px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  💬 Перейти в чат
                </button>
                
                <button
                  onClick={() => {
                    setShowTelegramModal(false);
                    enableScroll();
                  }}
                  className="w-full px-6 py-3 bg-transparent text-gray-400 font-medium rounded-xl hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                >
                  Отмена
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Templates Modal */}
      {showTemplatesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 sm:p-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Шаблоны сайтов
                </h3>
                <button
                  onClick={() => {
                    setShowTemplatesModal(false);
                    enableScroll();
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-xl cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="group relative bg-gray-800/30 rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="aspect-video bg-gray-800 relative overflow-hidden cursor-pointer">
                      {/* Placeholder для картинки */}
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-${template.color}-500/20 to-blue-500/20 transition-all duration-300 group-hover:from-${template.color}-500/30 group-hover:to-blue-500/30`}>
                        <div className="text-center">
                          <div className={`w-16 h-16 bg-${template.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-${template.color}-500/30 group-hover:scale-110`}>
                            {template.icon && React.createElement(template.icon, { 
                              className: `w-8 h-8 ${template.iconColor} transition-all duration-300 group-hover:scale-110` 
                            })}
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2 transition-all duration-300 group-hover:text-gray-200">{template.title}</h4>
                          <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300">{template.description}</p>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <a 
                          href={template.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-center backdrop-blur-sm rounded-2xl p-6 transform scale-90 group-hover:scale-100 transition-all duration-300 cursor-pointer"
                          style={{ 
                            backgroundColor: template.color === 'purple' ? 'rgba(168, 85, 247, 0.1)' : 
                                           template.color === 'green' ? 'rgba(34, 197, 94, 0.1)' : 
                                           template.color === 'orange' ? 'rgba(249, 115, 22, 0.1)' : 
                                           template.color === 'indigo' ? 'rgba(99, 102, 241, 0.1)' : 
                                           template.color === 'pink' ? 'rgba(236, 72, 153, 0.1)' : 
                                           'rgba(20, 184, 166, 0.1)',
                            border: template.color === 'purple' ? '1px solid rgba(168, 85, 247, 0.2)' : 
                                    template.color === 'green' ? '1px solid rgba(34, 197, 94, 0.2)' : 
                                    template.color === 'orange' ? '1px solid rgba(249, 115, 22, 0.2)' : 
                                    template.color === 'indigo' ? '1px solid rgba(99, 102, 241, 0.2)' : 
                                    template.color === 'pink' ? '1px solid rgba(236, 72, 153, 0.2)' : 
                                    '1px solid rgba(20, 184, 166, 0.2)'
                          }}
                        >
                          <div 
                            className="w-16 h-16 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                            style={{ 
                              backgroundColor: template.color === 'purple' ? 'rgba(168, 85, 247, 0.2)' : 
                                             template.color === 'green' ? 'rgba(34, 197, 94, 0.2)' : 
                                             template.color === 'orange' ? 'rgba(249, 115, 22, 0.2)' : 
                                             template.color === 'indigo' ? 'rgba(99, 102, 241, 0.2)' : 
                                             template.color === 'pink' ? 'rgba(236, 72, 153, 0.2)' : 
                                             'rgba(20, 184, 166, 0.2)',
                              border: template.color === 'purple' ? '1px solid rgba(168, 85, 247, 0.3)' : 
                                      template.color === 'green' ? '1px solid rgba(34, 197, 94, 0.3)' : 
                                      template.color === 'orange' ? '1px solid rgba(249, 115, 22, 0.3)' : 
                                      template.color === 'indigo' ? '1px solid rgba(99, 102, 241, 0.3)' : 
                                      template.color === 'pink' ? '1px solid rgba(236, 72, 153, 0.3)' : 
                                      '1px solid rgba(20, 184, 166, 0.3)'
                            }}
                          >
                            <span 
                              className="text-2xl font-bold transition-all duration-300 group-hover:scale-110"
                              style={{ 
                                color: template.color === 'purple' ? '#a855f7' : 
                                       template.color === 'green' ? '#22c55e' : 
                                       template.color === 'orange' ? '#f97316' : 
                                       template.color === 'indigo' ? '#6366f1' : 
                                       template.color === 'pink' ? '#ec4899' : 
                                       '#14b8a6'
                              }}
                            >
                              →
                            </span>
                          </div>
                          <p 
                            className="font-semibold text-lg drop-shadow-lg transition-all duration-300"
                            style={{ 
                              color: template.color === 'purple' ? '#a855f7' : 
                                     template.color === 'green' ? '#22c55e' : 
                                     template.color === 'orange' ? '#f97316' : 
                                     template.color === 'indigo' ? '#6366f1' : 
                                     template.color === 'pink' ? '#ec4899' : 
                                     '#14b8a6'
                            }}
                          >
                            Открыть сайт
                          </p>
                        </a>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`${template.iconColor} font-bold text-lg transition-all duration-300 group-hover:scale-105`}>{template.price}</span>
                        <span className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300">Срок: {template.duration}</span>
                      </div>
                      <button 
                        onClick={() => {
                          setShowTemplatesModal(false);
                          enableScroll();
                          openTelegramWithText(template.telegramText);
                        }}
                        className={`w-full px-4 py-3 border ${template.iconColor} rounded-lg hover:bg-${template.color}-500/10 transition-all duration-300 font-bold cursor-pointer transform hover:scale-105 hover:shadow-lg`}
                      >
                        Заказать
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
