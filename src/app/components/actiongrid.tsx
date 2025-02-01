import Image from "next/image";

const AuctionGrid = () => {
  const products = Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    title: `Car ${index + 1}`,
    description: `Description for car ${
      index + 1
    }. This is a placeholder description.`,
    image: `https://picsum.photos/600/300?random=${index + 1}`,
    price: `$${(Math.random() * 10000 + 1000).toFixed(0)}`,
    timeLeft: `${Math.floor(Math.random() * 5) + 1} Days`,
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Auctions Ending Soon</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg border overflow-hidden transition-transform hover:scale-105"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={300}
                className="object-cover w-full h-52"
              />

              {product.id % 2 === 0 ? (
                <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  FEATURED
                </div>
              ) : (
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  NO RESERVE
                </div>
              )}
              {/* info*/}
              <div className="absolute bottom-2 left-2 flex items-center space-x-2 text-white text-sm">
                <div className="bg-black bg-opacity-70 px-2 py-1 rounded">
                  {product.timeLeft}
                </div>
                <div className="bg-black bg-opacity-70 px-2 py-1 rounded">
                  {product.price}
                </div>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold truncate">{product.title}</h2>
              <p className="text-sm text-gray-600 truncate">
                {product.description}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Location: Random City
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionGrid;
