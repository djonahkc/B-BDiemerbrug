import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import LocationSection from './components/Location';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Reviews />
        <LocationSection />
        <Contact />
      </main>
      <footer className="bg-[#5c4d3f] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} B&B Diemerbrug. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;