'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, X } from 'lucide-react';

export default function SunLovePagecl() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Обработка клавиши ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedPhoto) {
        setSelectedPhoto(null);
      }
    };

    if (selectedPhoto) {
      document.addEventListener('keydown', handleKeyDown);
      // Блокируем скролл при открытом модальном окне
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto]);

  // Массив фотографий (добавьте свои файлы в public/solnce/)
  const photos = [
    { id: 1, src: '/sun-love/photo1.jpg', alt: 'Наше первое фото', date: '2024' },
    { id: 2, src: '/sun-love/photo2.jpg', alt: 'Едем к обезьянкам', date: '2025' },
    { id: 3, src: '/sun-love/photo3.jpg', alt: 'Мы рыба фугу', date: '2025' },
    { id: 4, src: '/sun-love/photo4.jpg', alt: 'Моя любимая уточка', date: '2025' },
    { id: 5, src: '/sun-love/photo5.jpg', alt: 'Так мило спишь, малышка', date: '2025' },
    { id: 6, src: '/sun-love/photo6.jpg', alt: 'Кошка-кусака', date: '2025' },
    { id: 7, src: '/sun-love/photo7.jpg', alt: 'Ловим самолет на Чавенге', date: '2024' },
    { id: 8, src: '/sun-love/photo8.jpg', alt: 'Любовь и счастье (Cила Сибири)', date: '2024' },
  ];

  const handlePhotoClick = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/3 to-red-500/5 pointer-events-none" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-red-500/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-pink-500/6 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Назад</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
              <h1 className="text-2xl font-bold text-white">Солнышко</h1>
              <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
            </div>
            
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="text-center mb-12">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                Наши счастливые моменты
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Каждая фотография — это история нашей любви ❤️
              </p>
            </div>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`group relative transition-all duration-1000 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handlePhotoClick(photo)}
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-pink-500/20 shadow-2xl shadow-pink-500/10 group-hover:border-pink-500/40 transition-all duration-500 group-hover:scale-105">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2 animate-pulse" />
                      <p className="text-white font-semibold text-sm">{photo.alt}</p>
                      <p className="text-gray-300 text-xs">{photo.date}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500/30 rounded-full animate-ping" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1600ms' }}>
            <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-red-500/10 backdrop-blur-sm border border-pink-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Люблю тебя, солнышко! 🌞
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Спасибо за каждый момент счастья, за твою улыбку и любовь. 
                Ты делаешь мой мир ярче и теплее ❤️
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-xl cursor-pointer z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-pink-500" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedPhoto.alt}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base">
                  {selectedPhoto.date} • Нажмите ESC или кликните на крестик для закрытия
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 