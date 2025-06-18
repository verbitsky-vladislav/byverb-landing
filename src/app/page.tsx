'use client';

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { Zap, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [advantagesVisible, setAdvantagesVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
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
      title: 'Быстро',
      description: 'От идеи до запуска за неделю. Быстрее, чем ты успеешь сказать "вау"!',
      icon: Zap
    },
    {
      title: 'Качественно',
      description: 'Код чище, чем твоя совесть. Дизайн - просто огонь!',
      icon: Target
    },
    {
      title: 'Результат',
      description: 'Не просто сайт, а машина для печати денег. Проверено!',
      icon: TrendingUp
    },
    {
      title: 'Гарантия',
      description: '100% результат или твои деньги обратно. Никаких "но"!',
      icon: CheckCircle
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

  const handleProjectSelect = useCallback((project: typeof projects[0]) => setSelectedProject(project), []);
  const handleModalClose = useCallback(() => setSelectedProject(null), []);
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
              <a href="#services" className="text-gray-300 hover:text-green-500 transition-colors duration-300">Услуги</a>
              <a href="#portfolio" className="text-gray-300 hover:text-green-500 transition-colors duration-300">Портфолио</a>
              <a href="#contact" className="text-gray-300 hover:text-green-500 transition-colors duration-300">Контакты</a>
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
              <button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Начать проект
              </button>
              <button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border border-gray-600 text-white font-bold rounded-xl hover:border-green-500 hover:text-green-500 transition-all duration-300 transform hover:scale-105">
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
      <section ref={advantagesRef} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-500 hover:border-green-500 hover:bg-gray-900/80 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 ${
                  advantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  animation: advantagesVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl" />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500/20 rounded-full animate-ping" style={{ animationDelay: `${index * 0.2}s` }} />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500/30 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.3}s` }} />
                </div>

                {/* Icon Container with Animation */}
                <div className="relative z-10 w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className="relative">
                    {React.createElement(advantage.icon, { 
                      className: "w-6 h-6 text-green-500 transition-all duration-500 group-hover:scale-110 group-hover:text-green-400" 
                    })}
                    {/* Floating particles around icon */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-500/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-500 group-hover:translate-x-1">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 group-hover:translate-x-1">
                    {advantage.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-500" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </div>
            ))}
          </div>

          {/* Bottom CTA with Animation */}
          <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-700 ${
            advantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 group"
            >
              <span>Посмотреть проекты</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-16 sm:py-24 lg:py-32 bg-black">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
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
                            background: `linear-gradient(135deg, ${project.placeholderColors.primary}20, ${project.placeholderColors.secondary}20)`
                          }}
                        >
                          {/* Анимированный фон */}
                          <div 
                            className="absolute inset-0 opacity-30 z-0"
                            style={{
                              background: `radial-gradient(circle at 30% 20%, ${project.placeholderColors.accent}40 0%, transparent 50%),
                                          radial-gradient(circle at 70% 80%, ${project.placeholderColors.primary}30 0%, transparent 50%)`
                            }}
                          />
                          
                          {/* Основной контент заглушки */}
                          <div className="relative z-10 text-center">
                            <div 
                              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                              style={{
                                background: `linear-gradient(135deg, ${project.placeholderColors.primary}, ${project.placeholderColors.secondary})`,
                                boxShadow: `0 10px 30px ${project.placeholderColors.primary}40`
                              }}
                            >
                              <span className="text-white text-3xl font-bold">
                                {project.title.charAt(0)}
                              </span>
                            </div>
                            <h4 
                              className="text-xl font-bold mb-2"
                              style={{ color: project.placeholderColors.primary }}
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
                            style={{ backgroundColor: project.placeholderColors.accent }}
                          />
                          <div 
                            className="absolute bottom-6 left-6 w-2 h-2 rounded-full opacity-40 z-5"
                            style={{ backgroundColor: project.placeholderColors.secondary }}
                          />
                          <div 
                            className="absolute top-1/2 left-4 w-1.5 h-1.5 rounded-full opacity-50 z-5"
                            style={{ backgroundColor: project.placeholderColors.primary }}
                          />
                        </div>
                      )}
                      
                      {/* Hover Overlay - только для картинки */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 image-group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                            <span className="text-green-400 text-2xl font-bold">→</span>
                          </div>
                          <p className="text-white font-semibold text-lg drop-shadow-lg">Открыть проект</p>
                        </div>
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
                      {project.technologies.map((tech, techIndex) => (
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
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
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
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-xl"
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
                    {selectedProject.technologies.map((tech: string, index: number) => (
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
    </div>
  );
}
