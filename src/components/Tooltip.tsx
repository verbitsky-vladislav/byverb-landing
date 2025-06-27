'use client';

import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  message?: string;
}

export default function Tooltip({ children, message = "не пропусти предложение" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.clientX + 10, // 10px отступ от курсора
      y: e.clientY - 40  // 40px выше курсора
    });
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="relative inline-block w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Подсказка */}
      {isVisible && (
        <div
          className="fixed z-50 px-2 xs:px-3 py-1 xs:py-2 text-xs font-roboto-light bg-black text-white rounded-lg shadow-lg pointer-events-none transition-opacity duration-200"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translateX(-50%)'
          }}
        >
          {message}
          {/* Стрелочка */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 xs:border-l-4 border-r-3 xs:border-r-4 border-t-3 xs:border-t-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
} 