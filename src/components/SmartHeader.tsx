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
                Accueil
              </a>
              <a 
                href="#projects" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 1 ? 'font-medium' : ''
                }`}
              >
                Nos Réalisations
              </a>
              <a 
                href="#quiz" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 2 ? 'font-medium' : ''
                }`}
              >
                Questionnaire
              </a>
              <a 
                href="#products" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 3 ? 'font-medium' : ''
                }`}
              >
                Nos Solutions
              </a>
              <a 
                href="#about" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 4 ? 'font-medium' : ''
                }`}
              >
                Notre Agence
              </a>
              <a 
                href="#how-we-work" 
                className={`font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity ${
                  currentSection === 5 ? 'font-medium' : ''
                }`}
              >
                Notre Méthode
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
                Contactez-nous
              </a>
            </nav>

            {/* Контакты */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:+33652037779" 
                className="font-roboto-extra-light text-xs sm:text-sm hover:opacity-70 transition-opacity"
              >
                +33 6 52 03 77 79
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
                aria-label="Ouvrir le menu mobile"
              >
                <svg 
                  className="w-5 h-5 xs:w-6 xs:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
          
          {/* Меню - теперь снизу и полноэкранное */}
          <div className={`absolute bottom-0 left-0 right-0 w-full max-h-[85vh] ${finalIsWhiteSection || forceWhiteForFAQ ? 'bg-white' : 'bg-black'} shadow-xl transform transition-transform duration-300 ease-in-out rounded-t-3xl`}>
            <div className="p-6 pb-8">
              {/* Индикатор свайпа */}
              <div className="flex justify-center mb-6">
                <div className={`w-12 h-1 rounded-full ${finalIsWhiteSection || forceWhiteForFAQ ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
              </div>

              {/* Заголовок с логотипом */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <span className="font-inter-black text-xl tracking-tight" style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}>
                    byverb_
                  </span>
                  <span className="font-roboto-extra-light text-xs tracking-wider opacity-70" style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}>
                    DIGITAL AGENCY
                  </span>
                </div>
                <button 
                  onClick={closeMobileMenu}
                  className={`p-2 rounded-full transition-all duration-300 hover:bg-opacity-20 cursor-pointer ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                  aria-label="Fermer le menu mobile"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Навигация */}
              <nav className="space-y-2 mb-8">
                <a 
                  href="#hero" 
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-xl font-roboto-extra-light text-base hover:bg-opacity-10 transition-all duration-300 ${
                    currentSection === 0 ? 'font-medium bg-opacity-20' : ''
                  } ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Accueil
                </a>
                <a 
                  href="#projects" 
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-xl font-roboto-extra-light text-base hover:bg-opacity-10 transition-all duration-300 ${
                    currentSection === 1 ? 'font-medium bg-opacity-20' : ''
                  } ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Nos Réalisations
                </a>
                <a 
                  href="#quiz" 
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-xl font-roboto-extra-light text-base hover:bg-opacity-10 transition-all duration-300 ${
                    currentSection === 2 ? 'font-medium bg-opacity-20' : ''
                  } ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Questionnaire
                </a>
                <a 
                  href="#products" 
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-xl font-roboto-extra-light text-base hover:bg-opacity-10 transition-all duration-300 ${
                    currentSection === 3 ? 'font-medium bg-opacity-20' : ''
                  } ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Nos Solutions
                </a>
                <a 
                  href="#about" 
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-xl font-roboto-extra-light text-base hover:bg-opacity-10 transition-all duration-300 ${
                    currentSection === 4 ? 'font-medium bg-opacity-20' : ''
                  } ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Notre Agence
                </a>
                <a 
                  href="#how-we-work" 
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-xl font-roboto-extra-light text-base hover:bg-opacity-10 transition-all duration-300 ${
                    currentSection === 5 ? 'font-medium bg-opacity-20' : ''
                  } ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Notre Méthode
                </a>
                <a 
                  href="#faq" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#faq';
                    closeMobileMenu();
                    // Принудительно устанавливаем FAQ секцию
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('setFAQSection'));
                    }, 100);
                  }}
                  className={`block py-3 px-4 rounded-xl font-roboto-extra-light text-base hover:bg-opacity-10 transition-all duration-300 ${
                    currentSection === 6 ? 'font-medium bg-opacity-20' : ''
                  } ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  FAQ
                </a>
                <a 
                  href="#contact" 
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-xl font-roboto-extra-light text-base hover:bg-opacity-10 transition-all duration-300 ${
                    currentSection === 7 ? 'font-medium bg-opacity-20' : ''
                  } ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  Contactez-nous
                </a>
              </nav>

              {/* Контакты */}
              <div className="pt-6 border-t" style={{ borderColor: finalIsWhiteSection || forceWhiteForFAQ ? '#e5e7eb' : '#374151' }}>
                <a 
                  href="tel:+33652037779" 
                  className={`inline-flex items-center gap-3 py-3 px-4 rounded-xl font-roboto-extra-light text-base hover:bg-opacity-10 transition-all duration-300 ${
                    finalIsWhiteSection || forceWhiteForFAQ ? 'hover:bg-gray-200' : 'hover:bg-white'
                  }`}
                  style={{ color: finalIsWhiteSection || forceWhiteForFAQ ? '#000000' : '#ffffff' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +33 6 52 03 77 79
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 