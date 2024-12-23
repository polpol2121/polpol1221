function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-gray-200">

      {/* Hero Section */}
      <section
  className="relative text-center py-20 bg-cover bg-center"
  style={{ backgroundImage: "url('/OIP.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative">
    <h2 className="text-5xl font-extrabold text-teal-400">Welcome to Pams</h2>
    <p className="mt-4 text-lg text-gray-300">
      Discover the future of shopping with our curated collection.
    </p>
    <a
      href="#"
      className="mt-6 inline-block px-8 py-3 bg-teal-500 text-gray-900 font-semibold text-lg rounded-lg shadow-lg hover:bg-teal-400 transition"
    >
      Shop Now
    </a>
  </div>
</section>


      {/* Featured Products Section */}
      <section className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center text-teal-400 mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-teal-300">Product 1</h4>
            <p className="text-gray-400">Description of Product 1.</p>
            <button className="mt-4 px-4 py-2 bg-teal-500 text-gray-900 rounded hover:bg-teal-400 transition">
              Buy Now
            </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-teal-300">Product 2</h4>
            <p className="text-gray-400">Description of Product 2.</p>
            <button className="mt-4 px-4 py-2 bg-teal-500 text-gray-900 rounded hover:bg-teal-400 transition">
              Buy Now
            </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-teal-300">Product 3</h4>
            <p className="text-gray-400">Description of Product 3.</p>
            <button className="mt-4 px-4 py-2 bg-teal-500 text-gray-900 rounded hover:bg-teal-400 transition">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-16">
        <h3 className="text-3xl font-bold text-center text-teal-400 mb-8">What Our Customers Say</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6 px-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-gray-300 italic">"ModernShop has completely changed the way I shop. Highly recommend!"</p>
            <span className="block mt-4 text-teal-300">- Alex R.</span>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-gray-300 italic">"Great products and amazing customer service. I'm impressed!"</p>
            <span className="block mt-4 text-teal-300">- Jamie L.</span>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-gray-300 italic">"Top-notch quality and fast delivery. Five stars!"</p>
            <span className="block mt-4 text-teal-300">- Taylor S.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
