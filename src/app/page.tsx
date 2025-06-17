'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Reflecty',
      subtitle: 'AI-бот для рефлексии',
      description: 'Telegram-бот с искусственным интеллектом для ежедневной рефлексии',
      url: 'https://reflecty.ru',
      technologies: ['Node.js', 'Telegram API', 'OpenAI GPT-4']
    },
    {
      id: 2,
      title: 'R-Logist',
      subtitle: 'Логистическая платформа',
      description: 'Система управления грузоперевозками с AI-оптимизацией',
      url: 'https://r-logist.ru',
      technologies: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Tatwole Mode',
      subtitle: 'Фитнес-трансформация',
      description: 'Платформа для фитнес-трансформации с сообществом',
      url: 'https://www.tatwolemode.ru/',
      technologies: ['Next.js', 'Vercel', 'Stripe']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xs">bv_</span>
              </div>
              <span className="text-white font-bold text-lg">byverb_</span>
            </div>
            <nav className="hidden sm:flex items-center space-x-8">
              <a href="#portfolio" className="text-gray-300 hover:text-green-500 transition-colors">Портфолио</a>
              <a href="#contact" className="text-gray-300 hover:text-green-500 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Создаем сайты, которые{' '}
              <span className="text-green-500">продают</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              От идеи до запуска за неделю. Быстро, качественно, с гарантией результата.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="px-8 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-colors">
                Начать проект
              </a>
              <a href="#portfolio" className="px-8 py-3 border border-gray-600 text-white font-bold rounded-xl hover:border-green-500 hover:text-green-500 transition-colors">
                Посмотреть работы
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Реальные{' '}
              <span className="text-green-500">проекты</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Каждый проект — это решение конкретной бизнес-задачи с измеримыми результатами.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Reflecty</h3>
              <p className="text-green-500 text-sm mb-2">AI-бот для рефлексии</p>
              <p className="text-gray-400 mb-4">Telegram-бот с искусственным интеллектом для ежедневной рефлексии</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-lg border border-green-500/20">Node.js</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-lg border border-green-500/20">Telegram API</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-lg border border-green-500/20">OpenAI GPT-4</span>
              </div>

              <a href="https://reflecty.ru" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors">
                Открыть
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">R-Logist</h3>
              <p className="text-green-500 text-sm mb-2">Логистическая платформа</p>
              <p className="text-gray-400 mb-4">Система управления грузоперевозками с AI-оптимизацией</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-lg border border-green-500/20">React</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-lg border border-green-500/20">Node.js</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-lg border border-green-500/20">PostgreSQL</span>
              </div>

              <a href="https://r-logist.ru" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors">
                Открыть
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Tatwole Mode</h3>
              <p className="text-green-500 text-sm mb-2">Фитнес-трансформация</p>
              <p className="text-gray-400 mb-4">Платформа для фитнес-трансформации с сообществом</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-lg border border-green-500/20">Next.js</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-lg border border-green-500/20">Vercel</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-mono rounded-lg border border-green-500/20">Stripe</span>
              </div>

              <a href="https://www.tatwolemode.ru/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors">
                Открыть
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Готов{' '}
              <span className="text-green-500">к работе</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Давайте обсудим ваш проект и создадим что-то потрясающее вместе
            </p>
            <a
              href="https://t.me/byverb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-colors"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-green-500 mb-2">{selectedProject.subtitle}</p>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-green-500/10 text-green-500 text-sm font-mono rounded-lg border border-green-500/20">
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => window.open(selectedProject.url, '_blank')}
              className="px-6 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
            >
              Открыть проект
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
