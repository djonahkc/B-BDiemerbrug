import { Star, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Reviews() {
const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const guestPhotos = [
    { src: "/guest-experiences/review1.jpg" },
    { src: "/guest-experiences/review2.jpg" },
    { src: "/guest-experiences/review3.jpg" },
    { src: "/guest-experiences/review4.jpg" },
    { src: "/guest-experiences/reveiw5.jpg" },
    { src: "/guest-experiences/review6.jpg" },
    { src: "/guest-experiences/review7.jpg" },
    { src: "/guest-experiences/review8.jpg" },
    { src: "/guest-experiences/review9.jpg" },
    { src: "/guest-experiences/review10.jpg"}
];

const toggleReview = (index: number) => {
    setExpandedReviews(prev => 
    prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
};

const reviews = [
    {
    author: "Laura",
    location: "Frankrijk",
    rating: 10,
    date: "October 2024",
    text: "Liesbeth is a very attentive and responsive host. She took great care of us from the moment we arrived, providing all the necessary information to explore the city. The breakfast is plentiful, delicious, and made with fresh products. The room has everything we needed and is very clean. The location is ideal, just 3 minutes from tram line 19. We loved Amsterdam and will definitely return, to Liesbeth's place, of course! Thank you again for this wonderful stay.",
    stayInfo: "2 nights · Couple"
    },
    {
    author: "Marian",
    location: "United Kingdom",
    rating: 10,
    date: "October 2024",
    text: "Lovely property in a very quiet and pretty location. Superb breakfast! Lizzy was very helpful with everything and I will definitely be booking again if I'm back in Amsterdam.",
    stayInfo: "2 nights · Group"
    },
    {
    author: "Ercan",
    location: "Turkije",
    rating: 10,
    date: "November 2024",
    text: "Staying at Liz's place was an absolute delight! The breakfast was fantastic, freshly prepared each morning, and the room was super cozy with every little detail thought of. Liz was so incredibly warm and welcoming—she made us feel like family, showing the same care as a mother would. If you're looking for a place that feels like home, you've found it with Liz!",
    stayInfo: "3 nights · Couple"
    },
    {
    author: "Barthold",
    location: "Nederland",
    rating: 10,
    date: "October 2024",
    text: "Het ontbijt was fantastisch. Zeer gevarieerde keus en beide dagen ander beleg en heerlijk zelfgemaakte gerechten door gastvrouw.",
    stayInfo: "2 nights · Couple"
    },
    {
    author: "John",
    location: "Australië",
    rating: 10,
    date: "May 2024",
    text: "It was a real BnB experience, with friendly, welcoming hosts, comfortable, quiet rooms and really delicious breakfasts. Staying in Diemen, with its own history, and with easy tram and train access to Central Amsterdam, gave us (Australian travellers) a wider Amsterdam experience.",
    stayInfo: "3 nights · Group"
    },
    {
    author: "Sonja",
    location: "België",
    rating: 10,
    date: "September 2022",
    text: "Voor herhaling - ik maak heel graag reclame voor deze B&B",
    stayInfo: "2 nights · Family"
    }
];

const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === guestPhotos.length - 1 ? 0 : prev + 1
    );
};

const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? guestPhotos.length - 1 : prev - 1
    );
};

return (
    <section id="reviews" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex flex-col items-center">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-[#5c4d3f] mr-2">9.8</span>
                <span className="text-[#5c4d3f] font-semibold">/10</span>
              </div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="h-6 w-6 fill-[#5c4d3f] text-[#5c4d3f]" 
                  />
                ))}
              </div>
              <p className="text-gray-600 font-medium">
                Based on 189 verified guest reviews on Booking.com
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
        {reviews.map((review, index) => (
            <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
            <div className="flex items-start justify-between mb-4">
                <div>
                <span className="font-semibold text-[#5c4d3f] block">{review.author}</span>
                <span className="text-gray-500 text-sm">{review.location}</span>
                </div>
                <div className="flex items-center bg-[#5c4d3f] text-white px-2 py-1 rounded">
                <span className="font-bold">{review.rating}</span>
                <span className="text-sm ml-1">/10</span>
                </div>
            </div>
            <div className="relative">
                <p className={`text-gray-600 mb-4 ${
                expandedReviews.includes(index) ? '' : 'line-clamp-4'
                }`}>
                {review.text}
                </p>
                {review.text.length > 200 && (
                  <button
                    onClick={() => toggleReview(index)}
                    className="text-[#5c4d3f] hover:text-[#6a5a4a] font-medium flex items-center gap-1"
                  >
                    {expandedReviews.includes(index) ? (
                      <>
                        Read less
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read more
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span>{review.stayInfo}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="relative max-w-xl mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img
                src={guestPhotos[currentImageIndex].src}
                alt={`Guest experience ${currentImageIndex + 1}`}
                className="w-full h-[400px] object-contain bg-gray-100"
              />
            </div>
            
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full 
                hover:bg-white transition-colors duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-[#5c4d3f]" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full 
                hover:bg-white transition-colors duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-[#5c4d3f]" />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {guestPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentImageIndex === index ? 'bg-[#5c4d3f]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.booking.com/hotel/nl/bed-amp-breakfast-diemerbrug.nl.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#5c4d3f] text-white px-6 py-3 
            rounded-lg hover:bg-[#6a5a4a] transition-all duration-300"
          >
            <span>View All Reviews on Booking.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}