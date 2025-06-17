'use client';

import { useEffect, useState, useRef } from 'react';
import { Zap, Target, TrendingUp, Shield, Clock, DollarSign, CheckCircle, Star } from 'lucide-react';
import React from 'react';

export default function Home() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [advantagesVisible, setAdvantagesVisible] = useState(false);
  const advantagesRef = useRef<HTMLDivElement>(null);

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

    return () => {
      clearInterval(terminalInterval);
      observer.disconnect();
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
          <div className="relative overflow-hidden">
            <div 
              className="flex space-x-4 sm:space-x-6 lg:space-x-8"
              style={{
                animation: 'scroll 30s linear infinite'
              }}
            >
              {[...advantages, ...advantages, ...advantages].map((advantage, index) => (
                <div
                  key={`${index}-${advantage.title}`}
                  className="flex-shrink-0 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-105 hover:border-green-500/50 hover:bg-gray-900/70 group cursor-pointer"
                  style={{
                    opacity: advantagesVisible ? 1 : 0,
                    transform: advantagesVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-500/20 transition-all duration-300">
                    {React.createElement(advantage.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-500" })}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
