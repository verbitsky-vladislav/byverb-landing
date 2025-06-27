import { useState, useEffect } from 'react';

export const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    // Устанавливаем начальную высоту
    updateHeight();

    // Обновляем при изменении размера окна
    window.addEventListener('resize', updateHeight);
    
    // Обновляем при изменении ориентации устройства
    window.addEventListener('orientationchange', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
    };
  }, []);

  return screenHeight;
}; 