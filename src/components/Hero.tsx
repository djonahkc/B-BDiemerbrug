import { useState, useEffect } from 'react';

const images = [
  '/front_view.jpg',
  '/acc_9079_1_9262293.jpg',
  '/BB-avond.jpg',
  '/BB-kmr-taupe.jpg',
  '/zithoek.jpg',
  '/buiten.jpg',
  '/bedkamer_alweer.jpg',
  '/ontbijtkmr-BB.jpg'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      ))}
      
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-6xl font-serif mb-6 text-white animate-fade-in tracking-wide">
            Welcome to B&B Diemerbrug
          </h1>
          <p className="text-2xl mb-8 text-white/90 animate-fade-in delay-200">
            Experience luxury and comfort in the heart of Diemen
          </p>
          <div className="space-x-4">
            <a
              href="#rooms"
              className="inline-block bg-[#5c4d3f] text-white px-8 py-4 rounded-lg text-lg
                hover:bg-[#6a5a4a] transition duration-300 transform hover:scale-105"
            >
              View Rooms
            </a>
            <a
              href="#contact"
              
            >
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}