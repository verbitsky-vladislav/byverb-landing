'use client';

import React from 'react';

interface SmartHeaderProps {
  currentSection: number;
}

export default function SmartHeader({ currentSection }: SmartHeaderProps) {
  // Определяем цветовую схему в зависимости от секции
  const isEvenSection = (currentSection + 1) % 2 === 0; // 0-based index, поэтому +1
  const isBlackSection = !isEvenSection; // Нечетные секции (0,2,4) - черные

  // Отладка
  console.log('SmartHeader - секция:', currentSection, 'четная:', isEvenSection, 'черная:', isBlackSection);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b ${
        isBlackSection 
          ? 'bg-white text-black border-gray-200' 
          : 'bg-black text-white shadow-lg border-gray-700'
      }`}
      style={{
        backgroundColor: isBlackSection ? '#ffffff' : '#000000',
        color: isBlackSection ? '#000000' : '#ffffff'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <span className="font-inter-black text-xl tracking-tight">
              byverb_
            </span>
            <span className="font-roboto-extra-light text-sm tracking-wider opacity-70">
              DIGITAL AGENCY
            </span>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#hero" 
              className={`font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                currentSection === 0 ? 'font-medium' : ''
              }`}
            >
              Главная
            </a>
            <a 
              href="#services" 
              className={`font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                currentSection === 2 ? 'font-medium' : ''
              }`}
            >
              Услуги
            </a>
            <a 
              href="#projects" 
              className={`font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                currentSection === 3 ? 'font-medium' : ''
              }`}
            >
              Проекты
            </a>
            <a 
              href="#about" 
              className={`font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                currentSection === 4 ? 'font-medium' : ''
              }`}
            >
              О нас
            </a>
            <a 
              href="#contact" 
              className={`font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                currentSection === 5 ? 'font-medium' : ''
              }`}
            >
              Контакты
            </a>
          </nav>

          {/* Контакты */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+79856850115" 
              className="font-roboto-extra-light text-sm hover:opacity-70 transition-opacity"
            >
              +7 (985) 685-01-15
            </a>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                color: isBlackSection ? '#000000' : '#ffffff'
              }}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 