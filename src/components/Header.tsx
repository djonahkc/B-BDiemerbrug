import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-[#a6988b] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 bg-[#a6988b]">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png"
              alt="B&B Diemerbrug Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Rooms', 'Amenities', 'Location', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 relative text-lg
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:w-0 hover:after:w-full after:bg-blue-600 
                  after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-[#5c4d3f] px-4 py-2 
              rounded-full hover:bg-[#6a5a4a] transition-colors duration-300">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-white font-medium">+31 6 23 97 81 41</span>
            </div>
            <a
              href="https://www.booking.com/hotel/nl/bed-amp-breakfast-diemerbrug.nl.html?aid=304142&label=gen173nr-1FCAsoqQFCH2JlZC1hbmQtYnJlYWtmYXN0LWRpZW1lci1icmlkZ2VIM1gEaKkBiAEBmAEcuAEHyAEM2AEB6AEB-AELiAIBqAIDuAL38O-7BsACAdICJGY2YjM3NjdmLWJlYjgtNDk4YS1iZTY2LWRkYjhiYzhjYzZlZdgCBuACAQ&sid=766cc5d9c2a0f22742b4099a9b3b5f6f&dest_id=1675178&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1736177798&srpvid=4e6f6dc1dd5b0c5f&type=total&ucfs=1&"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5c4d3f] text-white px-6 py-2 rounded-full 
                hover:bg-[#6a5a4a] transition-all duration-300 transform 
                hover:scale-105 shadow-md"
            >
              Book Now
            </a>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 
              transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 
          backdrop-blur-sm shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {['Home', 'Rooms', 'Amenities', 'Location', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 
                  hover:bg-blue-50 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex items-center space-x-2 px-4 py-3 text-blue-600">
              <Phone className="h-5 w-5" />
              <span>+31 6 23 97 81 41</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}