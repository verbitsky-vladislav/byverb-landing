'use client';

import React, { useState, useEffect } from 'react';
import HeroBlock from '../components/HeroBlock';
import ProjectsSlider from '../components/ProjectsSlider';
import QuizBlock from '../components/QuizBlock';
import ProductConfigurator from '../components/ProductConfigurator';
import FAQBlock from '../components/FAQBlock';
import SmartHeader from '../components/SmartHeader';
import AboutBlock from '../components/AboutBlock';
import HowWeWorkBlock from '../components/HowWeWorkBlock';
import ContactBlock from '../components/ContactBlock';
import OrderPopup from '../components/OrderPopup';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    // Проверяем, что мы на клиенте
    if (typeof window === 'undefined') return;

    // Обработчик для открытия попапа
    const handleOpenOrderPopup = (event: CustomEvent) => {
      setPopupTitle(event.detail.title);
      setPopupMessage(event.detail.message);
      setPopupOpen(true);
    };

    // Обработчик для принудительной установки FAQ секции
    const handleSetFAQSection = () => {
      console.log('Forcing FAQ section to active');
      setCurrentSection(6);
    };

    window.addEventListener('openOrderPopup', handleOpenOrderPopup as EventListener);
    window.addEventListener('setFAQSection', handleSetFAQSection);

    // Функция определения активной секции при скролле
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const viewportHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionHeight = rect.height;
        const sectionCenter = sectionTop + sectionHeight / 2;
        const currentScrollCenter = scrollTop + viewportHeight / 2;
        
        // Секция считается активной, если её центр находится в центре viewport
        if (Math.abs(sectionCenter - currentScrollCenter) < viewportHeight * 0.4) {
          setCurrentSection(index);
        }
      });
    };

    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Уменьшаем отступы для более точного определения
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
          const rect = entry.target.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const sectionCenter = rect.top + rect.height / 2;
          const viewportCenter = viewportHeight / 2;
          
          // Секция считается активной, если её центр находится в центре viewport
          if (Math.abs(sectionCenter - viewportCenter) < viewportHeight * 0.3) {
            setCurrentSection(sectionIndex);
          }
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
      window.removeEventListener('openOrderPopup', handleOpenOrderPopup as EventListener);
      window.removeEventListener('setFAQSection', handleSetFAQSection);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sections = [
    { id: 'hero', bg: 'bg-white', content: <HeroBlock />, isHero: true },
    { id: 'projects', bg: 'bg-black text-white', content: <ProjectsSlider />, isHero: false },
    { 
      id: 'quiz', 
      bg: 'bg-white', 
      content: <QuizBlock />,
      isHero: false
    },
    { 
      id: 'products', 
      bg: 'bg-white', 
      content: <ProductConfigurator />,
      isHero: false
    },
    { 
      id: 'about', 
      bg: 'bg-black text-white', 
      content: <AboutBlock />,
      isHero: false
    },
    { 
      id: 'how-we-work', 
      bg: 'bg-white', 
      content: <HowWeWorkBlock />,
      isHero: false
    },
    { 
      id: 'faq', 
      bg: 'bg-white', 
      content: <FAQBlock />,
      isHero: false
    },
    { 
      id: 'contact', 
      bg: 'bg-black text-white', 
      content: <ContactBlock />,
      isHero: false
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <SmartHeader currentSection={currentSection} />
      <div className="overflow-x-hidden max-w-full">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            data-section={index}
            className={`flex items-center justify-center ${section.bg} overflow-hidden max-w-full ${
              section.isHero ? 'h-screen' : 'min-h-screen py-8 sm:py-12 lg:py-16'
            }`}
          >
            <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/* Попап заказа */}
      <OrderPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        title={popupTitle}
        message={popupMessage}
      />
    </div>
  );
}
