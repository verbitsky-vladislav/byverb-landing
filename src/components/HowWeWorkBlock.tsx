'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, FileText, Zap, Search, Rocket, Wrench } from 'lucide-react';

export default function HowWeWorkBlock() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Обсуждение',
      description: 'Изучаем ваши задачи, цели и требования к проекту',
      icon: MessageSquare
    },
    {
      number: '02', 
      title: 'Планирование',
      description: 'Создаем техническое задание и план разработки',
      icon: FileText
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Пишем код, создаем дизайн и интегрируем системы',
      icon: Zap
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проверяем качество и исправляем недочеты',
      icon: Search
    },
    {
      number: '05',
      title: 'Запуск',
      description: 'Размещаем проект в интернете и настраиваем',
      icon: Rocket
    },
    {
      number: '06',
      title: 'Поддержка',
      description: 'Помогаем с обновлениями и развитием проекта',
      icon: Wrench
    }
  ];

  return (
    <section className="min-h-screen bg-white py-12 xs:py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Заголовок с анимацией */}
        <div className={`text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-3 xs:mb-4 sm:mb-6 text-black transition-all duration-1000 ease-out delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Как мы работаем
          </h2>
          <p className={`text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Четкий процесс от идеи до запуска проекта
          </p>
        </div>

        {/* Этапы работы с анимациями */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 lg:gap-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const delay = 600 + (index * 150);
            return (
              <div 
                key={index}
                className={`bg-white border-2 border-black rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group transition-all duration-1000 ease-out ${
                  isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transitionDelay: `${delay}ms`
                }}
              >
                {/* Номер и иконка с анимациями */}
                <div className={`flex items-center justify-between mb-3 xs:mb-4 sm:mb-6 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: `${delay + 200}ms` }}>
                  <div className={`text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter-black text-black opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:scale-110 transition-all duration-1000 ease-out delay-200 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`} style={{ transitionDelay: `${delay + 200}ms` }}>
                    {step.number}
                  </div>
                  <div className="relative">
                    <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-black rounded-xl xs:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 transition-all duration-1000 ease-out delay-300 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`} style={{ transitionDelay: `${delay + 300}ms` }}>
                      <IconComponent className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    {/* Анимированная подсветка */}
                    <div className="absolute inset-0 bg-red-500 rounded-xl xs:rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-sm group-hover:blur-md"></div>
                  </div>
                </div>

                {/* Заголовок с анимацией */}
                <h3 className={`text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black text-black mb-2 xs:mb-3 sm:mb-4 group-hover:text-red-500 transition-all duration-300 transition-all duration-1000 ease-out delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: `${delay + 400}ms` }}>
                  {step.title}
                </h3>

                {/* Описание с анимацией */}
                <p className={`text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-black transition-all duration-300 transition-all duration-1000 ease-out delay-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: `${delay + 500}ms` }}>
                  {step.description}
                </p>

                {/* Анимированная линия */}
                <div className={`mt-3 xs:mt-4 h-0.5 bg-gray-200 rounded-full overflow-hidden transition-all duration-1000 ease-out delay-600 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: `${delay + 600}ms` }}>
                  <div className="h-full bg-red-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 