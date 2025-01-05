import React from 'react';
import { Wifi, Coffee, Utensils, Car, Wind, Bath } from 'lucide-react';

const amenities = [
  { icon: Wifi, name: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
  { icon: Coffee, name: 'Breakfast', description: 'Fresh, homemade breakfast daily' },
  { icon: Utensils, name: 'Tea Time', description: 'Afternoon tea and refreshments' },
  { icon: Car, name: 'Parking', description: 'Free on-site parking' },
  { icon: Wind, name: 'Air Conditioning', description: 'Individual climate control' },
  { icon: Bath, name: 'En-suite Bath', description: 'Private bathroom in every room' }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.name} className="flex items-start p-6 bg-gray-50 rounded-lg">
              <amenity.icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {amenity.name}
                </h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}