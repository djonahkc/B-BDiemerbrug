const rooms = [
  {
    name: 'Garden Suite',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
    price: 195,
    description: 'Cozy and inviting, our beautifully furnished room features a comfortable queen-sized bed, private ensuite bathroom, and serene views—perfect for a relaxing stay.'
  },
  {
    name: 'Victorian Room',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80',
    price: 195,
    description: 'Charming room with period furnishings and a queen-size four-poster bed.'
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Rooms</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each room is uniquely decorated with period furnishings and modern amenities
            for your comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif">{room.name}</h3>
                  <span className="text-blue-600 text-xl font-semibold">
                    ${room.price}/night
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{room.description}</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg
                hover:bg-blue-700 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}