'use client';

import React, { useState, useEffect } from 'react';

export default function ContactBlock() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Основной контент футера */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Контакты */}
        <div className={`lg:col-span-2 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className={`text-lg font-inter-black mb-4 text-white transition-all duration-1000 ease-out delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>Контакты</h3>
          <div className="space-y-3">
            <div className={`flex items-center gap-3 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className={`w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-1000 ease-out delay-400 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">Телефон</div>
                <a href="tel:+79856850115" className="text-sm font-semibold text-white hover:text-red-500 transition-colors">
                  +7 (985) 685-01-15
                </a>
              </div>
            </div>
            
            <div className={`flex items-center gap-3 transition-all duration-1000 ease-out delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className={`w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-1000 ease-out delay-500 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">WhatsApp</div>
                <a href="https://wa.me/79856850115" className="text-sm font-semibold text-white hover:text-red-500 transition-colors">
                  +7 (985) 685-01-15
                </a>
              </div>
            </div>
            
            <div className={`flex items-center gap-3 transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className={`w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-1000 ease-out delay-600 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">Email</div>
                <a href="mailto:vladislav.verbitsky.bis@gmail.com" className="text-sm font-semibold text-white hover:text-red-500 transition-colors">
                  vladislav.verbitsky.bis@gmail.com
                </a>
              </div>
            </div>
            
            <div className={`flex items-center gap-3 transition-all duration-1000 ease-out delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className={`w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-1000 ease-out delay-700 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">Адрес</div>
                <div className="text-sm font-semibold text-white">
                  Москва, ул. Примерная, 123
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Стек технологий */}
        <div className={`transition-all duration-1000 ease-out delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h3 className={`text-lg font-inter-black mb-4 text-white transition-all duration-1000 ease-out delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>Технологии</h3>
          <div className="space-y-2">
            <div className={`text-xs text-gray-300 transition-all duration-1000 ease-out delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="font-semibold text-white mb-1">Frontend</div>
              React, Next.js, TypeScript
            </div>
            <div className={`text-xs text-gray-300 transition-all duration-1000 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="font-semibold text-white mb-1">Backend</div>
              Node.js, Golang
            </div>
            <div className={`text-xs text-gray-300 transition-all duration-1000 ease-out delay-1100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="font-semibold text-white mb-1">Боты</div>
              Telegram, WhatsApp, Telegram mini-apps
            </div>
          </div>
        </div>

        {/* Реферальная программа */}
        <div className={`transition-all duration-1000 ease-out delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h3 className={`text-lg font-inter-black mb-4 text-white transition-all duration-1000 ease-out delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>Реферальная программа</h3>
          <div className="space-y-3">
            <div className={`bg-red-500 rounded-lg p-3 transition-all duration-1000 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}>
              <div className="text-xl font-inter-black mb-1">10%</div>
              <div className="text-xs opacity-90">вам за приведенный заказ</div>
            </div>
            <div className={`space-y-1 text-xs text-gray-300 transition-all duration-1000 ease-out delay-1100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div>• Приведите клиента — получите 10%</div>
              <div>• Выплаты каждую неделю</div>
              <div>• Без ограничений</div>
            </div>
            <a
              href="https://t.me/by_verb"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block bg-red-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 text-xs transition-all duration-1000 ease-out delay-1200 ${
                isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
            >
              Узнать подробности
            </a>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className={`mt-8 pt-6 border-t border-gray-700 transition-all duration-1000 ease-out delay-1200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className={`text-center md:text-left transition-all duration-1000 ease-out delay-1300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-sm text-gray-400 mb-1">© 2025 byverb_</div>
            <div className="text-xs text-gray-500">Создаем сайты, которые продают</div>
          </div>
          
          <div className={`flex items-center gap-6 transition-all duration-1000 ease-out delay-1400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-sm text-gray-400">Работаем по всему миру</div>
            <div className="flex gap-4">
              <a href="https://t.me/by_verb" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:text-white transition-colors transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="https://wa.me/79856850115" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:text-white transition-colors transition-all duration-1000 ease-out delay-1600 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="mailto:vladislav.verbitsky.bis@gmail.com" className={`text-gray-400 hover:text-white transition-colors transition-all duration-1000 ease-out delay-1700 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 