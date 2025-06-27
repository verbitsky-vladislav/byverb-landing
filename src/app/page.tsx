'use client';

import React, { useState, useEffect } from 'react';
import HeroBlock from '../components/HeroBlock';
import BlackBlock from '../components/BlackBlock';
import SmartHeader from '../components/SmartHeader';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Секция считается активной когда находится в центре экрана
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
          setCurrentSection(sectionIndex);
          console.log('Активная секция:', sectionIndex);
        }
      });
    }, observerOptions);

    // Наблюдаем за всеми секциями
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      section.setAttribute('data-section', index.toString());
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const sections = [
    { id: 'hero', bg: 'bg-white', content: <HeroBlock /> },
    { id: 'black', bg: 'bg-black text-white', content: <BlackBlock /> },
    { 
      id: 'services', 
      bg: 'bg-white', 
      content: (
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 sm:mb-8">Услуги</h2>
            <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl mb-6 xs:mb-8 sm:mb-12">
              Создаём сайты, которые продают. От лендинга до интернет-магазина.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
              <div className="p-3 xs:p-4 sm:p-6 border-2 border-black rounded-lg">
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-2 sm:mb-4">Лендинги</h3>
                <p className="text-xs xs:text-sm sm:text-base">Продающие страницы с конверсией до 15%</p>
            </div>
              <div className="p-3 xs:p-4 sm:p-6 border-2 border-black rounded-lg">
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-2 sm:mb-4">Сайты</h3>
                <p className="text-xs xs:text-sm sm:text-base">Корпоративные сайты с современным дизайном</p>
                </div>
              <div className="p-3 xs:p-4 sm:p-6 border-2 border-black rounded-lg">
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-2 sm:mb-4">Магазины</h3>
                <p className="text-xs xs:text-sm sm:text-base">Интернет-магазины с удобной корзиной</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'projects', 
      bg: 'bg-black text-white', 
      content: (
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 sm:mb-8">Проекты</h2>
            <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl mb-6 xs:mb-8 sm:mb-12">
              Реализовали более 200 проектов для клиентов из разных сфер
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
              <div className="p-3 xs:p-4 sm:p-6 border-2 border-white rounded-lg">
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-2 sm:mb-4">E-commerce</h3>
                <p className="text-xs xs:text-sm sm:text-base">Онлайн-магазин с оборотом 50 млн в месяц</p>
          </div>
              <div className="p-3 xs:p-4 sm:p-6 border-2 border-white rounded-lg">
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-2 sm:mb-4">SaaS</h3>
                <p className="text-xs xs:text-sm sm:text-base">Веб-приложение для управления проектами</p>
                </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'about', 
      bg: 'bg-white', 
      content: (
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 sm:mb-8">О нас</h2>
            <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl mb-6 xs:mb-8 sm:mb-12">
              Команда из 15 специалистов. Работаем с 2019 года.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-left">
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-inter-black mb-2 sm:mb-4">15</h3>
                <p className="text-xs xs:text-sm sm:text-base">Специалистов в команде</p>
          </div>
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-inter-black mb-2 sm:mb-4">200+</h3>
                <p className="text-xs xs:text-sm sm:text-base">Реализованных проектов</p>
                </div>
                    <div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-inter-black mb-2 sm:mb-4">5</h3>
              <p className="text-xs xs:text-sm sm:text-base">Лет на рынке</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'contact', 
      bg: 'bg-black text-white', 
      content: (
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 sm:mb-8">Контакты</h2>
            <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl mb-6 xs:mb-8 sm:mb-12">
              Готовы обсудить ваш проект
            </p>
            <div className="space-y-3 xs:space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-1 sm:mb-2">Телефон</h3>
                <p className="text-xs xs:text-sm sm:text-base lg:text-lg">+7 (999) 123-45-67</p>
              </div>
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-1 sm:mb-2">Email</h3>
                <p className="text-xs xs:text-sm sm:text-base lg:text-lg">hello@byverb.ru</p>
              </div>
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-1 sm:mb-2">Адрес</h3>
                <p className="text-xs xs:text-sm sm:text-base lg:text-lg">Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <SmartHeader currentSection={currentSection} />
      <div className="snap-y snap-mandatory h-screen overflow-x-hidden max-w-full">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            data-section={index}
            className={`snap-start h-screen flex items-center justify-center ${section.bg} overflow-x-hidden max-w-full`}
          >
            {section.content}
          </section>
                ))}
              </div>
    </div>
  );
}
