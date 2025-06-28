import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const interBlack = Inter({
  subsets: ["latin", "cyrillic"],
  weight: "900",
  variable: "--font-inter-black",
});

const robotoExtraLight = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: "200",
  variable: "--font-roboto-extra-light",
});

export const metadata: Metadata = {
  title: {
    default: "byverb_ - Разработка сайтов и ботов в Москве | Создание веб-сайтов под ключ",
    template: "%s | byverb_"
  },
  description: "Разработка сайтов и ботов в Москве. Создание веб-сайтов под ключ, лендингов, интернет-магазинов. Запуск за 2 дня с гарантией 5 лет. Экономия до 45 000 ₽.",
  keywords: [
    "разработка сайтов москва",
    "создание сайтов под ключ",
    "веб разработка",
    "лендинг страница",
    "интернет магазин",
    "бот разработка",
    "telegram бот",
    "сайт визитка",
    "корпоративный сайт",
    "веб дизайн",
    "frontend разработка",
    "backend разработка",
    "seo оптимизация",
    "продвижение сайтов"
  ],
  authors: [{ name: "byverb_", url: "https://ru.byverb.com" }],
  creator: "byverb_",
  publisher: "byverb_",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ru.byverb.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://ru.byverb.com',
    siteName: 'byverb_',
    title: 'byverb_ - Разработка сайтов и ботов в Москве | Создание веб-сайтов под ключ',
    description: 'Разработка сайтов и ботов в Москве. Создание веб-сайтов под ключ, лендингов, интернет-магазинов. Запуск за 2 дня с гарантией 5 лет.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'byverb_ - Разработка сайтов и ботов',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'byverb_ - Разработка сайтов и ботов в Москве',
    description: 'Разработка сайтов и ботов в Москве. Создание веб-сайтов под ключ, лендингов, интернет-магазинов. Запуск за 2 дня с гарантией 5 лет.',
    images: ['/images/twitter-image.jpg'],
    creator: '@byverb',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: '6e32fd2f329f842a',
    yandex_verification: '6e32fd2f329f842a',
  },
  category: 'technology',
  classification: 'Web Development',
  other: {
    'yandex-verification': '6e32fd2f329f842a',
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'wot-verification': 'your-wot-verification-code',
    'yandex-verification': '6e32fd2f329f842a',
    'mailru-verification': 'your-mailru-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="byverb_" />
        
        {/* Yandex Metrika */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(YOUR_YANDEX_METRIKA_ID, "init", {
                defer: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/YOUR_YANDEX_METRIKA_ID" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID', {
                page_title: 'byverb_ - Разработка сайтов и ботов',
                page_location: 'https://ru.byverb.com',
                send_page_view: true
              });
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "byverb_",
              "url": "https://ru.byverb.com",
              "logo": "https://ru.byverb.com/images/logo.png",
              "description": "Разработка сайтов и ботов в Москве. Создание веб-сайтов под ключ, лендингов, интернет-магазинов.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Москва",
                "addressCountry": "RU"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": "Russian"
              },
              "sameAs": [
                "https://t.me/byverb",
                "https://vk.com/byverb"
              ],
              "serviceType": [
                "Веб-разработка",
                "Создание сайтов",
                "Разработка ботов",
                "Веб-дизайн"
              ],
              "areaServed": {
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
                      "description": "Создание сайтов под ключ с гарантией 5 лет"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Разработка ботов",
                      "description": "Создание Telegram и других ботов"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="RU-MOW" />
        <meta name="geo.placename" content="Москва" />
        <meta name="geo.position" content="55.7558;37.6176" />
        <meta name="ICBM" content="55.7558, 37.6176" />
        <meta name="DC.title" content="byverb_ - Разработка сайтов и ботов" />
        <meta name="DC.creator" content="byverb_" />
        <meta name="DC.subject" content="Разработка сайтов, создание ботов, веб-разработка" />
        <meta name="DC.description" content="Разработка сайтов и ботов в Москве. Создание веб-сайтов под ключ, лендингов, интернет-магазинов." />
        <meta name="DC.publisher" content="byverb_" />
        <meta name="DC.contributor" content="byverb_" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://ru.byverb.com" />
        <meta name="DC.language" content="ru" />
        <meta name="DC.coverage" content="Москва, Россия" />
        <meta name="DC.rights" content="Copyright byverb_" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//mc.yandex.ru" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body className={`${interBlack.variable} ${robotoExtraLight.variable} bg-white text-black overflow-x-hidden max-w-full`}>
        <div className="overflow-x-hidden max-w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
