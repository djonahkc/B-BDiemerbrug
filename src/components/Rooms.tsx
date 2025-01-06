const rooms = [
  {
    name: 'Room 1',
    image: '/public/bedkamer_alweer.jpg',
    price: 195,
    description: 'Cozy and inviting, our beautifully furnished room features a comfortable queen-sized bed, private ensuite bathroom, and serene views—perfect for a relaxing stay.'
  },
  {
    name: 'Room 2',
    image: '/public/kamer2.jpg',
    price: 195,
    description: 'Bright and comfortable, this room features a king-sized bed, a private bathroom, and a cozy spot to relax during your stay'  
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 text-4xl font-serif mb-4">Our Rooms</h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto">
            Each room is uniquely decorated with period furnishings and modern amenities
            for your comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white rounded-lg overflow-hidden shadow-lg 
              transform transition duration-300 hover:scale-105 hover:shadow-xl">
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
                    €{room.price}/night
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{room.description}</p>
                <button
                  onClick={() => window.open('https://www.booking.com/hotel/nl/bed-amp-breakfast-diemerbrug.nl.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaKkBiAEBmAEcuAEHyAEN2AEB6AEB-AEMiAIBqAIDuAKz5e-7BsACAdICJDA5YzNjZWI3LWQ4MjQtNGEzOC1hMmU2LWI5ZDFiODY2ZjE0MNgCBuACAQ&sid=d31eb6adc5474ebace2328642d8eac66', '_blank')}
                  className="w-full bg-[#5c4d3f] text-white py-3 rounded-lg text-lg
                    hover:bg-[#6a5a4a] transition duration-300 hover:scale-105"
                >
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