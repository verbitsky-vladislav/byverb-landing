import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const interBlack = Inter({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-inter-black",
});

const robotoExtraLight = Roboto({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-roboto-extra-light",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="overflow-x-hidden">
      <head>
        <meta name="yandex-verification" content="6e32fd2f329f842a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>byverb_ разработка сайтов и ботов</title>
      </head>
      <body className={`${interBlack.variable} ${robotoExtraLight.variable} bg-white text-black overflow-x-hidden max-w-full`}>
        <div className="overflow-x-hidden max-w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
