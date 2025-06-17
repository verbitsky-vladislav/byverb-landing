'use client';

import { useEffect, useState, useRef } from 'react';
import { Zap, Target, TrendingUp, Shield, Clock, DollarSign, CheckCircle, Star } from 'lucide-react';
import React from 'react';

export default function Home() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [advantagesVisible, setAdvantagesVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const terminalLines = [
    '> npm install success',
    '> building project...',
    '> deploying to production',
    '> website ready! 🚀',
  ];

  const advantages = [
    {
      title: 'Быстро',
      description: 'От идеи до запуска за неделю. Быстрее, чем ты успеешь сказать "вау"!',
      icon: Zap
    },
    {
      title: 'Дешево', 
      description: 'Цены, от которых конкуренты плачут. А ты - радуешься!',
      icon: DollarSign
    },
    {
      title: 'Надежно',
      description: 'Крепче, чем рукопожатие с медведем. Гарантированно!',
      icon: Shield
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
    },
    {
      title: 'Современно',
      description: 'Технологии будущего уже сегодня. Ты будешь первым!',
      icon: Star
    },
    {
      title: 'Профессионально',
      description: 'Делаем как для себя. Потому что мы - перфекционисты!',
      icon: Clock
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Reflecty',
      subtitle: 'AI-бот для рефлексии',
      description: 'Telegram-бот с искусственным интеллектом для ежедневной рефлексии и анализа эмоций',
      image: 'https://reflecty.ru',
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
      image: 'https://r-logist.ru',
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
      image: 'https://www.tatwolemode.ru/',
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
      image: 'https://tech-repair.vercel.app/',
      task: 'Создать профессиональный сайт для мастера, который привлечет клиентов и упростит процесс заказа услуг',
      solution: 'Разработал адаптивный сайт с каталогом услуг, системой отзывов, онлайн-калькулятором стоимости, интеграцией с мессенджерами и автоматическими уведомлениями',
      result: '250+ довольных клиентов в месяц, увеличение заявок на 250%, средний чек вырос на 40%. Время обработки заявок сократилось с 2 часов до 15 минут',
      technologies: ['Next.js', 'Vercel', 'Telegram API', 'WhatsApp API', 'Tailwind CSS']
    }
  ];

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
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
      <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32">
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
      <section ref={advantagesRef} className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 transition-all duration-1000 ${
              advantagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Почему выбирают{' '}
              <span className="text-green-500">byverb_</span>
            </h2>
          </div>

          {/* Динамически движущаяся полоска */}
          <div className="relative">
            <div 
              className="flex space-x-4 sm:space-x-6 lg:space-x-8"
              style={{
                animation: 'scroll 8s linear infinite',
                animationPlayState: isHovered ? 'paused' : 'running'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {[...advantages, ...advantages, ...advantages, ...advantages, ...advantages, ...advantages, ...advantages, ...advantages, ...advantages].map((advantage, index) => (
                <div
                  key={`${index}-${advantage.title}`}
                  className="flex-shrink-0 w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 flex flex-col justify-center items-center text-center transition-all duration-300 hover:scale-110 hover:border-green-500 hover:bg-gray-900/80 group cursor-pointer shadow-lg hover:shadow-green-500/20"
                  style={{
                    opacity: advantagesVisible ? 1 : 0,
                    transform: advantagesVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-green-500/20 transition-all duration-300">
                    {React.createElement(advantage.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-500" })}
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transform translate-y-4 transition-all duration-300">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-16 sm:py-24 lg:py-32">
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
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:flex lg:items-center lg:gap-12`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden group-hover:border-green-500 transition-all duration-500">
                    <div className="aspect-video bg-gray-800 relative overflow-hidden">
                      <iframe
                        src={project.image}
                        className="w-full h-full border-0"
                        title={project.title}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                        style={{ pointerEvents: 'none' }}
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                            <span className="text-green-500 text-2xl font-bold">→</span>
                          </div>
                          <p className="text-white font-semibold">Открыть проект</p>
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
                      onClick={() => setSelectedProject(project)}
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
          <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Task */}
                <div>
                  <h4 className="text-lg font-bold text-green-500 mb-3">Задача</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.task}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-lg font-bold text-green-500 mb-3">Решение</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                </div>

                {/* Result */}
                <div>
                  <h4 className="text-lg font-bold text-green-500 mb-3">Результат</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.result}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-green-500 mb-3">Технологии</h4>
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
