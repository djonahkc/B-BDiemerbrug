import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-serif text-gray-800">B&B Diemerbrug</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#rooms" className="text-gray-600 hover:text-blue-600">Rooms</a>
            <a href="#amenities" className="text-gray-600 hover:text-blue-600">Amenities</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-gray-600">+31 6 23 97 81 41</span>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600">Home</a>
            <a href="#rooms" className="block px-3 py-2 text-gray-600">Rooms</a>
            <a href="#amenities" className="block px-3 py-2 text-gray-600">Amenities</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}