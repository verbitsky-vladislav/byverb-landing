'use client';

import { useEffect, useState, useRef } from 'react';

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
      description: 'От идеи до запуска за неделю',
      icon: '⚡',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Качественно',
      description: 'Современный код и дизайн',
      icon: '🎯',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Результат',
      description: 'Измеримый рост бизнеса',
      icon: '📈',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Гарантия',
      description: '100% результат или возврат',
      icon: '🛡️',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
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
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-accent font-mono font-bold text-xl">byverb_</span>
              <span className="text-white/40 text-sm">developer</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#works" className="text-white/70 hover:text-accent transition-colors duration-300">Работы</a>
              <a href="#about" className="text-white/70 hover:text-accent transition-colors duration-300">Обо мне</a>
              <a href="#contact" className="text-white/70 hover:text-accent transition-colors duration-300">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-24">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-12">
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  Сайты{' '}
                  <span className="text-accent">дешево и быстро</span>
                </h1>
              </div>
              
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                Современные веб-решения и Telegram-боты для бизнеса. 
                Быстро, качественно, с гарантией результата.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group relative px-10 py-5 bg-accent text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 animate-glow">
                  <span className="relative z-10">Посмотреть работы</span>
                  <div className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-10 py-5 border border-accent text-accent font-semibold rounded-lg transition-all duration-300 hover:bg-accent hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-accent/25">
                  Обсудить проект
                </button>
              </div>
              
              {/* Tech Stack Preview */}
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <span className="font-mono">Быстро</span>
                <span className="text-accent">•</span>
                <span className="font-mono">Качественно</span>
                <span className="text-accent">•</span>
                <span className="font-mono">Результат</span>
                <span className="text-accent">•</span>
                <span className="font-mono">Гарантия</span>
              </div>
            </div>
          </div>

          {/* Right Terminal */}
          <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-muted/50 backdrop-blur-sm border border-accent/20 rounded-xl p-8 shadow-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-secondary text-sm ml-3 font-mono">terminal</span>
              </div>
              
              <div className="space-y-3 font-mono text-sm">
                {terminalLines.map((line, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentLine 
                        ? 'text-accent animate-terminal' 
                        : 'text-secondary'
                    }`}
                  >
                    {line}
                  </div>
                ))}
                <div className="flex items-center pt-2">
                  <span className="text-accent mr-2">$</span>
                  <span className="text-white">_</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-10 h-10 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 group cursor-pointer">
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center transition-all duration-300 group-hover:border-accent group-hover:scale-110">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce group-hover:animate-pulse group-hover:h-4 transition-all duration-300"></div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-accent font-mono">
            scroll
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section ref={advantagesRef} className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${advantagesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Почему выбирают{' '}
              <span className="text-accent">byverb_</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Четыре ключевых принципа, которые делают каждый проект успешным
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-accent/20 bg-gradient-to-br ${advantage.color} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 ${
                  advantagesVisible ? 'animate-fade-in-scale' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Floating Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
