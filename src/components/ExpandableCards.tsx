"use client";

import { useState } from "react";
import clsx from "clsx";
import React from "react";

interface Card {
  id: string;
  title: string;
  description: string;
  offer: string;
  price?: string;
  highlights?: Array<{
    text: string;
    color?: string;
    fontWeight?: string;
  }>;
}

interface ExpandableCardsProps {
  cards: Card[];
  className?: string;
  accentColor?: string;
}

export default function ExpandableCards({ 
  cards, 
  className = "",
  accentColor = "#E53E3E"
}: ExpandableCardsProps) {
  const [featuredCard, setFeaturedCard] = useState<string | null>(null);

  const handleCardClick = (cardId: string) => {
    if (!document.startViewTransition) {
      setFeaturedCard(featuredCard === cardId ? null : cardId);
      return;
    }

    document.startViewTransition(() => {
      setFeaturedCard(featuredCard === cardId ? null : cardId);
    });
  };

  // Функция для рендера текста с выделениями
  const renderHighlightedText = (text: string, highlights?: Array<{text: string, color?: string, fontWeight?: string}>) => {
    if (!highlights || highlights.length === 0) {
      return text;
    }

    // Создаем массив частей текста с их позициями
    const parts: Array<{text: string, isHighlight: boolean, highlightIndex: number}> = [];
    const currentText = text;

    // Находим все совпадения и сортируем их по позиции
    const matches: Array<{text: string, startIndex: number, highlightIndex: number}> = [];
    
    highlights.forEach((highlight, highlightIndex) => {
      let startIndex = 0;
      while (true) {
        const index = currentText.indexOf(highlight.text, startIndex);
        if (index === -1) break;
        matches.push({
          text: highlight.text,
          startIndex: index,
          highlightIndex
        });
        startIndex = index + 1;
      }
    });

    // Сортируем совпадения по позиции
    matches.sort((a, b) => a.startIndex - b.startIndex);

    // Разбиваем текст на части
    let lastIndex = 0;
    matches.forEach((match) => {
      // Добавляем текст до совпадения
      if (match.startIndex > lastIndex) {
        parts.push({
          text: currentText.slice(lastIndex, match.startIndex),
          isHighlight: false,
          highlightIndex: -1
        });
      }
      
      // Добавляем выделенный текст
      parts.push({
        text: match.text,
        isHighlight: true,
        highlightIndex: match.highlightIndex
      });
      
      lastIndex = match.startIndex + match.text.length;
    });

    // Добавляем оставшийся текст
    if (lastIndex < currentText.length) {
      parts.push({
        text: currentText.slice(lastIndex),
        isHighlight: false,
        highlightIndex: -1
      });
    }

    // Рендерим части
    return (
      <>
        {parts.map((part, index) => {
          if (part.isHighlight) {
            const highlight = highlights[part.highlightIndex];
            return (
              <span 
                key={index}
                style={{ 
                  color: highlight.color || accentColor,
                  fontWeight: highlight.fontWeight || '900'
                }}
              >
                {part.text}
              </span>
            );
          } else {
            return <span key={index}>{part.text}</span>;
          }
        })}
      </>
    );
  };

  return (
    <div className="my-4">
      {/* Подсказка для клика */}
      <div className="text-xs md:text-lg font-roboto-light text-gray-500 mb-3 text-center">
        — покликай чтобы не упустить выгоду
      </div>

      {/* Мобильная версия - очень маленькие телефоны и базовые смартфоны */}
      <div className="xl:hidden">
        <div className="space-y-3">
          {cards.map((card, index) => {
            const isFeatured = featuredCard === card.id;
            
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={clsx(
                  "relative rounded-lg shadow-md border border-gray-200 transition-all duration-500 ease-in-out cursor-pointer",
                  isFeatured
                    ? "bg-black text-white scale-105 z-20"
                    : "bg-white text-black hover:scale-102"
                )}
              >
                <div className="p-3 xs:p-4 md:p-8 flex flex-col justify-start items-start w-full">
                  <h3 className="font-inter-black text-left text-sm xs:text-base md:text-2xl mb-2">
                    {card.title}
                  </h3>
                  
                  {/* Описание - показывается только в свернутом состоянии */}
                  {!isFeatured && (
                    <p className="font-roboto-light text-left text-xs xs:text-sm md:text-lg text-gray-600">
                      {card.description}
                    </p>
                  )}

                  {/* Оффер - показывается только в развернутом состоянии */}
                  {isFeatured && (
                    <div className="w-full">
                      <p className="text-left text-xs xs:text-sm md:text-lg leading-relaxed font-roboto-light mb-4">
                        {renderHighlightedText(card.offer, card.highlights)}
                      </p>
                      
                      {/* Цена в развернутом состоянии */}
                      {card.price && (
                        <div className="mt-auto">
                          <div className="text-xs md:text-base text-gray-400 font-roboto-light mb-1">
                            индивидуальное решение от
                          </div>
                          <div className="text-base xs:text-lg md:text-2xl font-inter-black text-[#E53E3E]">
                            {card.price}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Кнопка закрытия для featured карточки */}
                {isFeatured && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(card.id);
                    }}
                    className="absolute top-2 right-2 text-white hover:text-red-400 transition-colors duration-300 text-lg md:text-2xl"
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Десктопная версия - ноутбуки и больше */}
      <div className="hidden xl:block">
        <div
          className={clsx(
            "grid grid-cols-3 grid-rows-2 gap-4 transition-all duration-700 ease-in-out min-h-[350px]",
            className
          )}
        >
          {cards.map((card, index) => {
            const isFeatured = featuredCard === card.id;
            const isAnyFeatured = featuredCard !== null;

            // Определяем позицию карточки
            const getCardPosition = () => {
              if (isFeatured) {
                // Featured карточка занимает 4 блока - принудительно в левом верхнем углу
                return "col-span-2 row-span-2 col-start-1 row-start-1";
              }
              
              if (isAnyFeatured) {
                // Все остальные карточки занимают по 1 блоку
                return "col-span-1 row-span-1";
              }
              
              // Исходное состояние
              if (index === 0) {
                return "col-span-2 row-span-2 col-start-1 row-start-1"; // Telegram большая (4 блока)
              } else {
                return "col-span-1 row-span-1"; // Web3 и AI маленькие (по 1 блоку)
              }
            };

            return (
              <div
                key={card.id}
                style={{ viewTransitionName: `card-${index}` }}
                onClick={() => handleCardClick(card.id)}
                className={clsx(
                  "relative rounded-2xl shadow-md border border-gray-200 transition-all duration-700 ease-in-out cursor-pointer",
                  getCardPosition(),
                  isFeatured
                    ? "bg-black text-white scale-105 z-20"
                    : "bg-white text-black"
                )}
              >
                <div className="p-8 flex flex-col justify-start items-start w-full h-full">
                  <h3 
                    className={clsx(
                      "font-inter-black text-left transition-all duration-500",
                      isFeatured ? "text-2xl mb-6" : "text-lg mb-3"
                    )}
                  >
                    {card.title}
                  </h3>
                  
                  {/* Описание - показывается только в свернутом состоянии */}
                  {!isFeatured && (
                    <p className="font-roboto-light text-left text-sm">
                      {card.description}
                    </p>
                  )}

                  {/* Оффер - показывается только в развернутом состоянии */}
                  {isFeatured && (
                    <div className="flex flex-col justify-start w-full h-full">
                      <p className="text-left text-base leading-relaxed font-roboto-light mb-8">
                        {renderHighlightedText(card.offer, card.highlights)}
                      </p>
                      
                      {/* Цена в развернутом состоянии */}
                      {card.price && (
                        <div className="mt-auto">
                          <div className="text-sm text-gray-400 font-roboto-light mb-2">
                            индивидуальное решение от
                          </div>
                          <div className="text-2xl font-inter-black text-[#E53E3E]">
                            {card.price}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Кнопка закрытия для featured карточки */}
                {isFeatured && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(card.id);
                    }}
                    className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors duration-300"
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}