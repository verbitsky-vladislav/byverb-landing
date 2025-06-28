'use client';

import React, { useState, useEffect } from 'react';

interface SmartHeaderProps {
  currentSection: number;
}

export default function SmartHeader({ currentSection }: SmartHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFAQFromHash, setIsFAQFromHash] = useState(false);

  // Проверяем URL hash для определения FAQ секции
  useEffect(() => {
    const checkHash = () => {
      setIsFAQFromHash(window.location.hash === '#faq');
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  // Дополнительная проверка FAQ секции при скролле
  useEffect(() => {
    const checkFAQSection = () => {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        const rect = faqSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isFAQVisible = rect.top < viewportHeight * 0.5 && rect.bottom > viewportHeight * 0.5;
        
        if (isFAQVisible && currentSection !== 6) {
          console.log('FAQ section detected as visible, forcing white header');
          // Принудительно устанавливаем FAQ секцию
          window.dispatchEvent(new CustomEvent('setFAQSection'));
        }
      }
    };

    window.addEventListener('scroll', checkFAQSection, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', checkFAQSection);
    };
  }, [currentSection]);

  // Определяем цветовую схему в зависимости от секции
  // Секции: 0(белая), 1(черная), 2(белая), 3(белая), 4(черная), 5(белая), 6(белая), 7(черная)
  const isWhiteSection = currentSection === 0 || currentSection === 2 || currentSection === 3 || currentSection === 5 || currentSection === 6;
  const isBlackSection = currentSection === 1 || currentSection === 4 || currentSection === 7;

  // Дополнительная проверка для FAQ секции
  const isFAQSection = currentSection === 6;
  
  // Принудительно делаем хедер белым для FAQ секции
  const finalIsWhiteSection = isWhiteSection || isFAQSection || isFAQFromHash;

  // Дополнительная проверка - если мы на FAQ секции, принудительно делаем белым
  const forceWhiteForFAQ = currentSection === 6 || (typeof window !== 'undefined' && window.location.hash === '#faq');

  // Отладочная информация
  console.log('SmartHeader Debug:', {
    currentSection,
    isWhiteSection,
    isBlackSection,
    isFAQSection,
    isFAQFromHash,
    finalIsWhiteSection,
    forceWhiteForFAQ
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b ${
          finalIsWhiteSection || forceWhiteForFAQ
            ? 'bg-white text-black border-gray-200' 
            : 'bg-black text-white shadow-lg border-gray-700'
        }`}
        style={{
          backgroundColor: finalIsWhiteSection || forceWhiteForFAQ ? '#ffffff' : '#000000',
          color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
            
            {/* Логотип */}
            <div className="flex items-center space-x-3">
              <span className="font-inter-black text-base xs:text-lg sm:text-xl lg:text-2xl tracking-tight">
                byverb_
              </span>
              <span className="hidden sm:block font-roboto-extra-light text-xs tracking-wider opacity-70">
                DIGITAL AGENCY
              </span>
            </div>

            {/* Навигация */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
              <a 
                href="#hero" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 0 ? 'font-medium' : ''
                }`}
              >
                Главная
              </a>
              <a 
                href="#projects" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 1 ? 'font-medium' : ''
                }`}
              >
                Проекты
              </a>
              <a 
                href="#quiz" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 2 ? 'font-medium' : ''
                }`}
              >
                Квиз
              </a>
              <a 
                href="#products" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 3 ? 'font-medium' : ''
                }`}
              >
                Продукты
              </a>
              <a 
                href="#about" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 4 ? 'font-medium' : ''
                }`}
              >
                О нас
              </a>
              <a 
                href="#how-we-work" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 5 ? 'font-medium' : ''
                }`}
              >
                Как работаем
              </a>
              <a 
                href="#faq" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#faq';
                  // Принудительно устанавливаем FAQ секцию
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('setFAQSection'));
                  }, 100);
                }}
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 6 ? 'font-medium' : ''
                }`}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 7 ? 'font-medium' : ''
                }`}
              >
                Контакты
              </a>
            </nav>

            {/* Контакты */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:+79856850115" 
                className="font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity"
              >
                +7 (985) 685-01-15
              </a>
            </div>

            {/* Мобильное меню */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer"
                style={{
                  color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff'
                }}
              >
                <svg 
                  className="w-5 h-5 xs:w-6 xs:h-6" 
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

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Затемнение */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Меню */}
          <div className={`absolute top-0 right-0 w-64 h-full ${finalIsWhiteSection || forceWhiteForFAQ ? 'bg-white' : 'bg-black'} shadow-xl transform transition-transform duration-300 ease-in-out`}>
            <div className="p-6">
              {/* Заголовок */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-inter-black text-xl tracking-tight" style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}>
                  byverb_
                </span>
                <button 
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer"
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Навигация */}
              <nav className="space-y-4">
                <a 
                  href="#hero" 
                  onClick={closeMobileMenu}
                  className={`block font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                    currentSection === 0 ? 'font-medium' : ''
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Главная
                </a>
                <a 
                  href="#projects" 
                  onClick={closeMobileMenu}
                  className={`block font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                    currentSection === 1 ? 'font-medium' : ''
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Проекты
                </a>
                <a 
                  href="#quiz" 
                  onClick={closeMobileMenu}
                  className={`block font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                    currentSection === 2 ? 'font-medium' : ''
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Квиз
                </a>
                <a 
                  href="#products" 
                  onClick={closeMobileMenu}
                  className={`block font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                    currentSection === 3 ? 'font-medium' : ''
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Продукты
                </a>
                <a 
                  href="#about" 
                  onClick={closeMobileMenu}
                  className={`block font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                    currentSection === 4 ? 'font-medium' : ''
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  О нас
                </a>
                <a 
                  href="#how-we-work" 
                  onClick={closeMobileMenu}
                  className={`block font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                    currentSection === 5 ? 'font-medium' : ''
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Как работаем
                </a>
                <a 
                  href="#faq" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#faq';
                    // Принудительно устанавливаем FAQ секцию
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('setFAQSection'));
                    }, 100);
                  }}
                  className={`block font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                    currentSection === 6 ? 'font-medium' : ''
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  FAQ
                </a>
                <a 
                  href="#contact" 
                  onClick={closeMobileMenu}
                  className={`block font-roboto-extra-light text-sm hover:opacity-70 transition-opacity ${
                    currentSection === 7 ? 'font-medium' : ''
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Контакты
                </a>
              </nav>

              {/* Контакты */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: finalIsWhiteSection || forceWhiteForFAQ ? '#e5e7eb' : '#374151' }}>
                <a 
                  href="tel:+79856850115" 
                  className="font-roboto-extra-light text-sm hover:opacity-70 transition-opacity"
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  +7 (985) 685-01-15
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 