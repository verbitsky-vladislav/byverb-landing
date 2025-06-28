'use client';

import React, { useState, useEffect } from 'react';
import { X, Copy, Check, MessageCircle, Phone } from 'lucide-react';
import { useScrollLock } from '../hooks/useScreenHeight';

interface OrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function OrderPopup({ isOpen, onClose, title, message }: OrderPopupProps) {
  const [copied, setCopied] = useState(false);

  // Используем хук для блокировки скролла
  useScrollLock(isOpen);

  // Обработчик клавиши Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleTelegram = () => {
    window.open(`https://t.me/by_verb`, '_blank');
    onClose();
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/79856850115?text=${encodedMessage}`, '_blank');
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Предотвращаем скролл внутри попапа
  const handlePopupScroll = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  // Предотвращаем скролл на мобильных устройствах
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
  };

  // Разрешаем скролл внутри текстового блока
  const handleTextScroll = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

  // Разрешаем touch скролл внутри текстового блока
  const handleTextTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[9999] p-4 overflow-hidden"
      onClick={handleBackdropClick}
      onWheel={handlePopupScroll}
      onTouchMove={handleTouchMove}
    >
      <div 
        className="bg-white rounded-3xl max-w-md w-full shadow-xl max-h-[85vh] flex flex-col"
        onWheel={handlePopupScroll}
        onTouchMove={handleTouchMove}
      >
        {/* Заголовок */}
        <div className="bg-black text-white p-4 xs:p-5 rounded-t-3xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="text-lg xs:text-xl font-inter-black pr-2">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex-shrink-0"
              aria-label="Закрыть"
            >
              <X className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>
          </div>
        </div>

        {/* Контент */}
        <div className="p-4 xs:p-5 flex-1 flex flex-col min-h-0">
          {/* Текст сообщения */}
          <div className="mb-4 flex-1 min-h-0">
            <div className="bg-gray-50 border-2 border-black rounded-2xl p-3 xs:p-4 mb-3 h-full flex flex-col">
              <div 
                className="flex-1 overflow-y-auto max-h-48 xs:max-h-56 popup-text-scroll"
                onWheel={handleTextScroll}
                onTouchMove={handleTextTouchMove}
              >
                <p className="text-black text-sm leading-relaxed whitespace-pre-wrap">
                  {message}
                </p>
              </div>
            </div>
            
            {/* Кнопка копирования */}
            <button
              onClick={handleCopy}
              className="w-full bg-transparent border-2 border-black text-black py-2.5 xs:py-3 px-4 rounded-2xl font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Скопировано!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Скопировать текст
                </>
              )}
            </button>
          </div>

          {/* Кнопки мессенджеров */}
          <div className="space-y-2.5 xs:space-y-3">
            <button
              onClick={handleTelegram}
              className="w-full bg-black text-white py-2.5 xs:py-3 px-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border-2 border-black text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Написать в Telegram
            </button>
            
            <button
              onClick={handleWhatsApp}
              className="w-full bg-red-500 text-white py-2.5 xs:py-3 px-4 rounded-2xl font-semibold hover:bg-red-600 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border-2 border-red-500 text-sm"
            >
              <Phone className="w-4 h-4" />
              Написать в WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 