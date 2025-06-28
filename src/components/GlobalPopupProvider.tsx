'use client';

import React, { useState, useEffect } from 'react';
import OrderPopup from './OrderPopup';

interface GlobalPopupProviderProps {
  children: React.ReactNode;
}

export default function GlobalPopupProvider({ children }: GlobalPopupProviderProps) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    // Глобальная функция для открытия попапа
    const openQuizPopup = (title: string, message: string) => {
      setPopupTitle(title);
      setPopupMessage(message);
      setPopupOpen(true);
    };

    // Добавляем функцию в глобальный объект window
    if (typeof window !== 'undefined') {
      window.openQuizPopup = openQuizPopup;
    }

    // Очищаем при размонтировании
    return () => {
      if (typeof window !== 'undefined') {
        delete window.openQuizPopup;
      }
    };
  }, []);

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {children}
      <OrderPopup
        isOpen={popupOpen}
        onClose={closePopup}
        title={popupTitle}
        message={popupMessage}
      />
    </>
  );
} 