// Конфигурация Яндекс.Метрики
export const YANDEX_METRIKA_ID = '12345678'; // Замените на ваш реальный ID счетчика

export const initYandexMetrika = () => {
  if (typeof window !== 'undefined') {
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    (window as any).ym(YANDEX_METRIKA_ID, "init", {
      defer: true
    });
  }
}; 