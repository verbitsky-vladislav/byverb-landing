'use client';

import React from 'react';
import Head from 'next/head';

interface SocialMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

export default function SocialMeta({
  title = 'byverb_ - Разработка сайтов и ботов в Москве',
  description = 'Разработка сайтов и ботов в Москве. Создание веб-сайтов под ключ, лендингов, интернет-магазинов. Запуск за 2 дня с гарантией 5 лет.',
  image = '/images/og-image.jpg',
  url = 'https://ru.byverb.com',
  type = 'website'
}: SocialMetaProps) {
  return (
    <Head>
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://ru.byverb.com${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="byverb_" />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://ru.byverb.com${image}`} />
      <meta name="twitter:creator" content="@byverb" />
      <meta name="twitter:site" content="@byverb" />
      
      {/* VK */}
      <meta property="vk:image" content={`https://ru.byverb.com${image}`} />
      
      {/* Additional Social Meta */}
      <meta name="author" content="byverb_" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />
    </Head>
  );
} 