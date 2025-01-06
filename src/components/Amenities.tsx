import React from 'react';
import { Wifi, Coffee, Utensils, Car, Wind, Bath, Tv, Key } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    name: 'Free Wi-Fi',
    description: 'High-speed internet throughout the property',
    color: 'bg-[#f3f0ed] text-[#5c4d3f]',
  },
  {
    icon: Coffee,
    name: 'Breakfast',
    description: 'Fresh, homemade breakfast daily',
    color: 'bg-[#f3f0ed] text-[#5c4d3f]',
  },
  {
    icon: Utensils,
    name: 'Tea Time',
    description: 'Afternoon tea and refreshments',
    color: 'bg-[#f3f0ed] text-[#5c4d3f]',
  },
  {
    icon: Car,
    name: 'Parking',
    description: 'Free on-site parking',
    color: 'bg-[#f3f0ed] text-[#5c4d3f]',
  },
  {
    icon: Wind,
    name: 'Air Conditioning',
    description: 'Individual climate control',
    color: 'bg-[#f3f0ed] text-[#5c4d3f]',
  },
  {
    icon: Bath,
    name: 'En-suite Bath',
    description: 'Private bathroom in every room',
    color: 'bg-[#f3f0ed] text-[#5c4d3f]',
  },
  {
    icon: Tv,
    name: 'Smart TV',
    description: 'Netflix and streaming services',
    color: 'bg-[#f3f0ed] text-[#5c4d3f]',
  },
  {
    icon: Key,
    name: '24/7 Access',
    description: 'Independent access with digital keys',
    color: 'bg-[#f3f0ed] text-[#5c4d3f]',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#1a365d] mb-4">
            Room Amenities & Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`mb-4 rounded-full ${amenity.color} p-3 
                  ring-8 ring-opacity-30 ${amenity.color.split(' ')[0].replace('bg', 'ring')}
                  transition-transform duration-300 group-hover:scale-110`}>
                  <amenity.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {amenity.name}
                </h3>
                <p className="text-gray-600">
                  {amenity.description}
                </p>
              </div>
              <div className={`absolute inset-0 ${amenity.color.split(' ')[0]} 
                opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 
              transition-colors duration-300"
          >
            <span>Contact us for special requests</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}