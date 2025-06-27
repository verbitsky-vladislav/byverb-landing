import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { YANDEX_METRIKA_ID } from "@/lib/analytics";

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
    <html lang="ru">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(${YANDEX_METRIKA_ID}, "init", {
                defer: true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </head>
      <body className={`${interBlack.variable} ${robotoExtraLight.variable} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
