'use client';

import React, { useState, useEffect } from 'react';
import HeroBlock from '../components/HeroBlock';
import BlackBlock from '../components/BlackBlock';
import SmartHeader from '../components/SmartHeader';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 'hero', bg: 'bg-white', content: <HeroBlock /> },
    { id: 'black', bg: 'bg-black text-white', content: <BlackBlock /> },
    { 
      id: 'services', 
      bg: 'bg-white', 
      content: (
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-black mb-8">Услуги</h2>
          <p className="text-xl mb-12">
            Создаём сайты, которые продают. От лендинга до интернет-магазина.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-2 border-black rounded-lg">
              <h3 className="text-2xl font-black mb-4">Лендинги</h3>
              <p>Продающие страницы с конверсией до 15%</p>
            </div>
            <div className="p-6 border-2 border-black rounded-lg">
              <h3 className="text-2xl font-black mb-4">Сайты</h3>
              <p>Корпоративные сайты с современным дизайном</p>
            </div>
            <div className="p-6 border-2 border-black rounded-lg">
              <h3 className="text-2xl font-black mb-4">Магазины</h3>
              <p>Интернет-магазины с удобной корзиной</p>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'projects', 
      bg: 'bg-black text-white', 
      content: (
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-black mb-8">Проекты</h2>
          <p className="text-xl mb-12">
            Реализовали более 200 проектов для клиентов из разных сфер
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border-2 border-white rounded-lg">
              <h3 className="text-2xl font-black mb-4">E-commerce</h3>
              <p>Онлайн-магазин с оборотом 50 млн в месяц</p>
          </div>
            <div className="p-6 border-2 border-white rounded-lg">
              <h3 className="text-2xl font-black mb-4">SaaS</h3>
              <p>Веб-приложение для управления проектами</p>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'about', 
      bg: 'bg-white', 
      content: (
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-black mb-8">О нас</h2>
          <p className="text-xl mb-12">
            Команда из 15 специалистов. Работаем с 2019 года.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-3xl font-black mb-4">15</h3>
              <p>Специалистов в команде</p>
          </div>
            <div>
              <h3 className="text-3xl font-black mb-4">200+</h3>
              <p>Реализованных проектов</p>
                </div>
                    <div>
              <h3 className="text-3xl font-black mb-4">5</h3>
              <p>Лет на рынке</p>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'contact', 
      bg: 'bg-black text-white', 
      content: (
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-black mb-8">Контакты</h2>
          <p className="text-xl mb-12">
            Готовы обсудить ваш проект
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-black mb-2">Телефон</h3>
              <p className="text-lg">+7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">Email</h3>
              <p className="text-lg">hello@byverb.ru</p>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">Адрес</h3>
              <p className="text-lg">Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleSectionChange = (sectionIndex: number) => {
    setCurrentSection(sectionIndex);
    window.scrollTo({
      top: sectionIndex * window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Обработка клавиш
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          if (currentSection < sections.length - 1) {
            handleSectionChange(currentSection + 1);
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentSection > 0) {
            handleSectionChange(currentSection - 1);
          }
          break;
        case 'Home':
          e.preventDefault();
          handleSectionChange(0);
          break;
        case 'End':
          e.preventDefault();
          handleSectionChange(sections.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, sections.length]);

  // Синхронизация с реальным скроллом
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.floor((scrollPosition + windowHeight / 2) / windowHeight);
      
      if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
        console.log('Смена секции:', currentSection, '→', newSection, 'scrollY:', scrollPosition);
        setCurrentSection(newSection);
      }
    };

    // Используем более частые проверки
    const throttledScroll = () => {
      handleScroll();
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [currentSection, sections.length]);

  // Дополнительная проверка при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.floor((scrollPosition + windowHeight / 2) / windowHeight);
      
      if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
        console.log('Resize - смена секции:', currentSection, '→', newSection);
        setCurrentSection(newSection);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSection, sections.length]);

  // Отладка для хедера
  useEffect(() => {
    console.log('Текущая секция для хедера:', currentSection);
  }, [currentSection]);

  // Intersection Observer для определения текущей секции
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const sectionIndex = sections.findIndex(section => section.id === sectionId);
          
          if (sectionIndex !== -1 && sectionIndex !== currentSection) {
            console.log('Observer - смена секции:', currentSection, '→', sectionIndex, 'секция:', sectionId);
            setCurrentSection(sectionIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Наблюдаем за всеми секциями
    sections.forEach((section, index) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections, currentSection]);

  return (
    <div className="relative">
      <SmartHeader currentSection={currentSection} />
      
      {/* Секции */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className={`snap-start h-screen flex items-center justify-center ${section.bg}`}
            id={section.id}
          >
            {section.content}
          </section>
                ))}
              </div>
    </div>
  );
}
