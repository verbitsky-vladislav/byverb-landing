import { useEffect } from 'react';

interface WebkitOverflowStyle extends CSSStyleDeclaration {
  webkitOverflowScrolling?: string;
}

// Хук для получения высоты экрана
export const useScreenHeight = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);
};

// Хук для блокировки скролла
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      // Сохраняем текущую позицию скролла
      const scrollY = window.scrollY;
      
      // Блокируем скролл на body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Дополнительная блокировка для iOS Safari
      document.body.style.touchAction = 'none';
      (document.body.style as WebkitOverflowStyle).webkitOverflowScrolling = 'auto';
      
      // Блокируем скролл на html
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.top = `-${scrollY}px`;
      document.documentElement.style.width = '100%';
      
      // Добавляем CSS класс для дополнительной защиты
      document.documentElement.classList.add('popup-open');
      document.body.classList.add('popup-open');
      
      // Сохраняем позицию скролла в data-атрибуте
      document.body.setAttribute('data-scroll-y', scrollY.toString());
    } else {
      // Восстанавливаем скролл
      const scrollY = document.body.getAttribute('data-scroll-y');
      
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
      (document.body.style as WebkitOverflowStyle).webkitOverflowScrolling = '';
      
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
      document.documentElement.style.top = '';
      document.documentElement.style.width = '';
      
      // Удаляем CSS классы
      document.documentElement.classList.remove('popup-open');
      document.body.classList.remove('popup-open');
      
      // Восстанавливаем позицию скролла без анимации
      if (scrollY) {
        // Используем requestAnimationFrame для плавного восстановления
        requestAnimationFrame(() => {
          window.scrollTo({
            top: parseInt(scrollY),
            behavior: 'instant' // Мгновенный скролл без анимации
          });
        });
        document.body.removeAttribute('data-scroll-y');
      }
    }

    // Очищаем при размонтировании
    return () => {
      const scrollY = document.body.getAttribute('data-scroll-y');
      
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
      (document.body.style as WebkitOverflowStyle).webkitOverflowScrolling = '';
      
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
      document.documentElement.style.top = '';
      document.documentElement.style.width = '';
      
      // Удаляем CSS классы
      document.documentElement.classList.remove('popup-open');
      document.body.classList.remove('popup-open');
      
      if (scrollY) {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: parseInt(scrollY),
            behavior: 'instant'
          });
        });
        document.body.removeAttribute('data-scroll-y');
      }
    };
  }, [isLocked]);
}; 