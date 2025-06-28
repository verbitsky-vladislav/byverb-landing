'use client';

import React from 'react';

export default function LocalBusinessSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "byverb_",
    "description": "Разработка сайтов и ботов. Создание веб-сайтов под ключ, лендингов, интернет-магазинов.",
    "url": "https://ru.byverb.com",
    "telephone": "+7-XXX-XXX-XXXX",
    "email": "info@ru.byverb.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "currenciesAccepted": "RUB",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Россия"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Россия"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги разработки",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Разработка сайтов",
            "description": "Создание сайтов под ключ с гарантией 5 лет",
            "provider": {
              "@type": "Organization",
              "name": "byverb_"
            }
          },
          "price": "50000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Разработка ботов",
            "description": "Создание Telegram и других ботов",
            "provider": {
              "@type": "Organization",
              "name": "byverb_"
            }
          },
          "price": "30000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "sameAs": [
      "https://t.me/byverb",
      "https://vk.com/byverb"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Александр Петров"
        },
        "reviewBody": "Отличная работа! Сайт запустили за 2 дня, как и обещали. Качество на высоте."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Мария Сидорова"
        },
        "reviewBody": "Профессиональный подход, понятная коммуникация. Результат превзошел ожидания."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
} 