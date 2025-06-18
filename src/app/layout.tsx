import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "byverb_ - Разработка сайтов и Telegram ботов",
  description: "Создаю современные веб-решения и Telegram-ботов, которые работают на результат",
  keywords: [
    "разработка сайтов", "создание сайтов", "сайт для бизнеса", "лендинг страница", "интернет магазин", "корпоративный сайт", 
    "telegram боты", "создание ботов", "бот для бизнеса", "автоматизация telegram", "бот рассылка", "бот заказы", "бот поддержка",
    "веб разработка", "frontend разработка", "backend разработка", "fullstack разработка", "react разработка", "next.js разработка",
    "онлайн оплаты", "интеграция платежей", "stripe интеграция", "юkassa", "сбербанк онлайн", "qiwi", "яндекс деньги",
    "самозанятый сайт", "сайт для самозанятого", "сайт для предпринимателя", "сайт для бизнеса", "сайт для специалиста",
    "портфолио сайт", "сайт визитка", "блог сайт", "сервис сайт", "платформа для услуг", "сайт для консультаций",
    "ecommerce", "интернет магазин", "онлайн продажи", "каталог товаров", "корзина покупок", "оформление заказа",
    "автоматизация бизнеса", "автоматизация процессов", "бот для рассылок", "бот для заказов", "бот для клиентов",
    "веб приложение", "мобильное приложение", "гибридное приложение", "pwa приложение", "прогрессивное веб приложение",
    "seo оптимизация", "продвижение сайта", "контекстная реклама", "google ads", "яндекс директ", "таргетированная реклама",
    "аналитика сайта", "google analytics", "яндекс метрика", "отслеживание конверсий", "a/b тестирование",
    "адаптивный дизайн", "мобильная версия", "responsive design", "ux дизайн", "ui дизайн", "веб дизайн",
    "домен и хостинг", "размещение сайта", "ssl сертификат", "https", "безопасность сайта", "защита данных",
    "техническая поддержка", "обслуживание сайта", "обновление сайта", "резервное копирование", "мониторинг сайта",
    "интеграция с crm", "1с интеграция", "amo crm", "bitrix24", "интеграция с мессенджерами", "whatsapp интеграция",
    "api интеграция", "rest api", "webhook", "автоматизация интеграций", "синхронизация данных",
    "консультации по разработке", "техническое задание", "проектирование сайта", "архитектура приложения",
    "фриланс разработка", "удаленная разработка", "аутсорс разработка", "разработка под ключ", "сопровождение проекта"
  ],
  authors: [{ name: "Владислав Вербицкий" }],
  creator: "Владислав Вербицкий",
  publisher: "byverb_",
  robots: "index, follow",
  openGraph: {
    title: "byverb_ - Разработка сайтов и Telegram ботов",
    description: "Создаю современные веб-решения и Telegram-ботов, которые работают на результат",
    url: "https://byverb.dev",
    siteName: "ByVerb",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "byverb_ - Разработка сайтов и Telegram ботов",
    description: "Создаю современные веб-решения и Telegram-ботов, которые работают на результат",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#10B981",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#10B981",
    "schema-person": `<script type="application/ld+json">{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Person\",\n  \"name\": \"Владислав Вербицкий\",\n  \"url\": \"https://byverb.dev\",\n  \"jobTitle\": \"Веб-разработчик\",\n  \"sameAs\": [\n    \"https://t.me/byverb\",\n    \"mailto:hello@byverb.dev\"\n  ]\n}</script>`
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
