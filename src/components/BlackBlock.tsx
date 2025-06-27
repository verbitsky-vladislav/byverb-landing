export default function BlackBlock() {
  return (
    <div className="w-full h-full bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Заголовок */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-inter-black text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight">
              ПРИБЫЛЬ РАСТЕТ
            </h1>
            <p className="font-roboto-light text-xs xs:text-sm sm:text-base lg:text-xl text-gray-300 max-w-2xl mx-auto">
              Создаем сайты и боты, которые продают. За 7 дней или вернем деньги.
            </p>
          </div>

          {/* CTA кнопка */}
          <div className="space-y-4 sm:space-y-6">
            <button className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 lg:px-16 py-3 xs:py-4 sm:py-6 lg:py-8 bg-[#E53E3E] text-white font-inter-black text-xs xs:text-sm sm:text-base lg:text-xl xl:text-2xl tracking-wider transition-all duration-500 transform hover:scale-110 cursor-pointer border-4 border-[#E53E3E] shadow-2xl hover:shadow-[0_25px_50px_rgba(229,62,62,0.2)] hover:-translate-y-2 button-pulse hover:bg-white hover:text-[#E53E3E] hover:border-[#E53E3E] overflow-hidden">
              <span className="relative z-10">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ БЕСПЛАТНО</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 border-2 border-white opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110"></div>
            </button>
            <div className="text-xs sm:text-sm lg:text-base text-gray-400 font-roboto-light">
              Подберем решение под ваш бизнес • 15 минут • Без обязательств
            </div>
          </div>

          {/* Контакты */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-12 pt-8 sm:pt-12">
            <a 
              href="tel:+74951234567" 
              className="font-inter-black text-xs xs:text-sm sm:text-base lg:text-lg text-white hover:text-gray-300 transition-colors duration-300"
            >
              +7 (495) 123-45-67
            </a>
            <a 
              href="mailto:hello@byverb.dev" 
              className="font-inter-black text-xs xs:text-sm sm:text-base lg:text-lg text-white hover:text-gray-300 transition-colors duration-300"
            >
              hello@byverb.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 