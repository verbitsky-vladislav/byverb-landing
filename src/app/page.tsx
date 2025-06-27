'use client';

import React, { useState, useEffect } from 'react';
import HeroBlock from '../components/HeroBlock';
import ProjectsSlider from '../components/ProjectsSlider';
import QuizBlock from '../components/QuizBlock';
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
    { id: 'projects', bg: 'bg-black text-white', content: <ProjectsSlider /> },
    { 
      id: 'quiz', 
      bg: 'bg-white', 
      content: <QuizBlock />
    },
    { 
      id: 'about', 
      bg: 'bg-black text-white', 
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
      bg: 'bg-white', 
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
      <div className="snap-y snap-mandatory overflow-x-hidden max-w-full" style={{ height: '100vh' }}>
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            data-section={index}
            className={`snap-start flex items-center justify-center ${section.bg} overflow-hidden max-w-full`}
            style={{ height: '100vh' }}
          >
            {section.content}
          </section>
        ))}
      </div>
    </div>
  );
}
