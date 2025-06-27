export default function BlackBlock() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-inter-black text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">
            ЧЕРНЫЙ БЛОК
          </h2>
          <p className="font-roboto-extra-light text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Этот блок точно по высоте экрана.<br />
            Ни на пиксель больше, ни на пиксель меньше.
          </p>
          <div className="mt-12">
            <p className="font-roboto-extra-light text-lg text-gray-400">
              Шахматный порядок: белый → черный → белый → черный
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 