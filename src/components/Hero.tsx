export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/acc_9079_1_9262293.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Welcome to B&B Diemerbrug
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience charm and comfort in our historic bed & breakfast
          </p>
          <a
            href="#rooms"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg
            hover:bg-blue-700 transition duration-300"
          >
            View Our Rooms
          </a>
        </div>
      </div>
    </div>
  );
}