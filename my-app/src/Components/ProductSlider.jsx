import React, { useState } from 'react';
import { useEffect } from 'react';

const productData = [
  {
    id: 1,
    title: "Banana Queen",
    price: "₹3,690.93",
    image: "https://drinkwildwonder.com/cdn/shop/files/Banana_1_1080x.png?v=1721349284",
    tag: "",
  },
  {
    id: 2,
    title: "Raspberry Lychee",
    price: "₹3,690.93",
    image: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_1_1080x.png?v=1714540347",
    tag: "",
  },
  {
    id: 3,
    title: "Strawberry Passion",
    price: "₹3,690.93",
    image: "https://drinkwildwonder.com/cdn/shop/files/Strawberry_1_1080x.png?v=1714540479",
    tag: "LIMITED EDITION",
  },
  {
    id: 4,
    title: "Pineapple Paradise",
    price: "₹3,690.93",
    image: "https://drinkwildwonder.com/cdn/shop/files/Pineapple_1_green_720x.png?v=1722475205",
    tag: "",
  },
  {
    id: 5,
    title: "GUAVA ROSE",
    price: "₹3,690.93",
    image: "https://drinkwildwonder.com/cdn/shop/files/Guava_1_720x.png?v=1714539969",
    tag: "",
  },
  {
    id: 6,
    title: "Peach Lemonade",
    price: "₹3,690.93",
    image: "https://drinkwildwonder.com/cdn/shop/files/Peach_1_1080x.png?v=1714540243",
    tag: "",
  },
  {
    id: 7,
    title: "MangoGold",
    price: "₹3,690.93",
    image: "https://drinkwildwonder.com/cdn/shop/files/Mango_1_720x.png?v=1714540147",
    tag: "LIMITED EDITION",
  },
  {
    id: 8,
    title: "hark Tank Bundle",
    price: "₹3,690.93",
    image: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_Shark_Tank_2_720x.png?v=1724416169",
    tag: "",
  }
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    // Add a resize listener to detect screen size changes
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const itemsPerPage = isLargeScreen ? 4 : 1; // 4 for large screens, 1 for small screens

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= productData.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(productData.length - itemsPerPage, 0)
        : prevIndex - itemsPerPage
    );
  };

  const getVisibleProducts = () => {
    return productData.slice(currentIndex, currentIndex + itemsPerPage);
  };

  return (
    <div className="bg-custom-pink">
      <div className="relative max-w-7xl mx-auto px-4 py-16 z-0">
        <h2 className="text-4xl font-bold mb-6 text-center py-4">You May Also Like</h2>

        <div className="relative">
          <div className="flex gap-4">
            {getVisibleProducts().map((product) => (
              <div
                key={product.id}
                className={`w-full ${isLargeScreen ? 'md:w-1/4' : 'md:w-full'} p-4 rounded-xl`}
              >
                <div className="relative group">
                  {product.tag && (
                    <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      {product.tag}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{product.title}</h3>
                  <p className="text-pink-500 font-semibold">{product.price}</p>
                  <button className="w-full mt-4 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 w-10 h-10 z-10"
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 w-10 h-10 z-10"
            aria-label="Next slide"
          >
            →
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from(
            { length: Math.ceil(productData.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex / itemsPerPage === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;