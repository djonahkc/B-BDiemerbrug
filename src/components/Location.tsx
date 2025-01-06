export default function LocationSection() {
    const attractions = [
    {
        title: "Amsterdam City Center",
        distance: "15 minutes",
        description: "Easy access to Amsterdam's historic center and attractions",
    },
    {
        title: "Local Restaurants",
        distance: "5 minutes",
        description: "Various dining options within walking distance",
    },
    {
        title: "Public Transport",
        distance: "2 minutes",
        description: "Bus and tram stops nearby for convenient travel",
    },
    {
        title: "Parks & Nature",
        distance: "10 minutes",
        description: "Beautiful parks and waterfront areas to explore",
    }
    ];

    return (
    <section id="location" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-[#5c4d3f] text-4xl font-serif mb-4">Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Perfectly situated for both relaxation and exploration
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Map Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg h-[400px] overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4875.385762477061!2d4.9598313770074975!3d52.33971744956103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60bfc2b78dac1%3A0xe91322b8e06492df!2sBed%20%26%20Breakfast%20Diemer%20Bridge!5e0!3m2!1sen!2snl!4v1736173206907!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            </div>

            {/* Attractions List */}
            <div className="grid gap-6">
            {attractions.map((item) => (
                <div 
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                >
                <h3 className="text-xl font-semibold text-[#5c4d3f] mb-2">
                    {item.title}
                </h3>
                <p className="text-[#5c4d3f] font-medium mb-2">
                    {item.distance}
                </p>
                <p className="text-gray-600">
                    {item.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
    );
}