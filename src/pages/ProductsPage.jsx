import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  return (
    <div className="bg-gray-800 text-white min-h-screen p-6">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold tracking-wide">Discover Our Products</h1>
        <p className="text-lg mt-2 text-gray-400">Explore our latest collection of high-quality items curated just for you.</p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="rounded-t-lg w-full h-48 object-cover mb-4"
            />
            <div className="truncate text-xl font-semibold mb-2">{product.title}</div>
            <div className="text-lg font-medium text-green-400 mb-4">${product.price}</div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full font-medium transition-all duration-200">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
