// Core components for modularity
const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-yellow-400 mb-4">{title}</h2>
);

const Card = ({ title, description }) => (
  <div className="p-6 bg-gray-700 text-white shadow-lg rounded-lg">
    <h3 className="text-xl font-semibold text-yellow-400 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

// Main About Component
function About() {
  return (
    <div className="min-h-screen bg-gray-800 text-white px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-yellow-400">Welcome to Our Shop</h1>
        <p className="text-lg mt-4 text-gray-300">
          Discover a curated selection of products crafted to suit your lifestyle and needs.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle title="Our Journey" />
          <p className="leading-relaxed text-gray-300 text-lg">
            Our shop was established with a commitment to bringing you premium products that blend functionality and design. 
            From home essentials to unique gifts, every item in our collection reflects our passion for quality and innovation.
          </p>
        </div>
        <img
          src="/journey.jpg"
          alt="Our Journey"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Mission & Vision Section */}
      <section className="mt-12 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/mission1.jpg"
          alt="Mission"
          className="rounded-lg shadow-lg"
        />
        <div>
          <SectionTitle title="Our Mission & Vision" />
          <p className="leading-relaxed text-gray-300 text-lg mb-4">
            We strive to offer products that elevate everyday experiences through thoughtful design and exceptional quality. 
            Our vision is to become your go-to destination for innovative, sustainable, and stylish solutions.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mt-12 text-center">
        <SectionTitle title="Our Core Principles" />
        <div className="grid md:grid-cols-3 gap-8">
          <Card 
            title="Excellence" 
            description="Delivering the best in every product we offer, ensuring unmatched satisfaction."
          />
          <Card 
            title="Eco-Friendly" 
            description="Promoting sustainability through eco-conscious materials and practices."
          />
          <Card 
            title="Creativity" 
            description="Inspiring uniqueness and innovation in all aspects of our designs."
          />
        </div>
      </section>
    </div>
  );
}

export default About;
