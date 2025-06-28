'use client';

import React, { useState, useEffect } from 'react';
import { X, Copy, Check, MessageCircle, Phone } from 'lucide-react';

interface OrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function OrderPopup({ isOpen, onClose, title, message }: OrderPopupProps) {
  const [copied, setCopied] = useState(false);

  // Блокируем скролл при открытом попапе
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Очищаем при размонтировании
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-xl">
        {/* Заголовок */}
        <div className="bg-black text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-inter-black">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Контент */}
        <div className="p-6">
          {/* Текст сообщения */}
          <div className="mb-6">
            <div className="bg-gray-50 border-2 border-black rounded-2xl p-4 mb-3">
              <p className="text-black text-sm leading-relaxed whitespace-pre-wrap">
                {message}
              </p>
            </div>
            
            {/* Кнопка копирования */}
            <button
              onClick={handleCopy}
              className="w-full bg-transparent border-2 border-black text-black py-3 px-4 rounded-2xl font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Скопировано!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Скопировать текст
                </>
              )}
            </button>
          </div>

          {/* Кнопки мессенджеров */}
          <div className="space-y-3">
            <button
              onClick={handleTelegram}
              className="w-full bg-black text-white py-3 px-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border-2 border-black"
            >
              <MessageCircle className="w-5 h-5" />
              Написать в Telegram
            </button>
            
            <button
              onClick={handleWhatsApp}
              className="w-full bg-red-500 text-white py-3 px-4 rounded-2xl font-semibold hover:bg-red-600 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border-2 border-red-500"
            >
              <Phone className="w-5 h-5" />
              Написать в WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 