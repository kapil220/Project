import React from "react";

const PeachGingerDetails = () => {
  const items = [
    {
      title: "LIVE PROBIOTICS",
      description:
        "Bacillus subtilis is a resilient strain of good bacteria, clinically proven to withstand the harsh environment of the stomach to reach your gut.",
      image: "https://drinkwildwonder.com/cdn/shop/files/7778483ad87de0fcb78f122797dadd88.jpg?crop=center&height=300&v=1708637102&width=300", // Replace with the actual image URL
    },
    {
      title: "PREBIOTIC FIBER",
      description:
        "Our proprietary blend of fiber-rich Jerusalem artichoke and chicory root inulin is like a superfood for your good gut bacteria.",
      image: "https://drinkwildwonder.com/cdn/shop/files/d4be46ea9ca518afff5b4f4af4f819d2.jpg?crop=center&height=300&v=1708637128&width=300", // Replace with the actual image URL
    },
    {
      title: "PEACH",
      description:
        "Perfectly ripe peaches picked from the trees of the sunny states are rich in vitamins A and C.",
      image: "https://drinkwildwonder.com/cdn/shop/files/Rectangle_176_2d3a154a-4c0e-4103-8260-b73c93b6f48b.png?crop=center&height=300&v=1708637200&width=300", // Replace with the actual image URL
    },
    {
      title: "GINGER ROOT",
      description:
        "Fresh ginger root gives a warm and spicy kick and helps reduce nausea and inflammation.",
      image: "https://drinkwildwonder.com/cdn/shop/files/Rectangle_155.png?crop=center&height=300&v=1708534788&width=300", // Replace with the actual image URL
    },
    {
      title: "LEMON",
      description:
        "Tart and refreshing, lemons are high in citric acid and may help clear the skin.",
      image: "https://drinkwildwonder.com/cdn/shop/files/d4f5c339c56dcee117a0d2e59adf6a6d.jpg?crop=center&height=300&v=1708534853&width=300", // Replace with the actual image URL
    },
  ];

  return (
    <section className="bg-custom-blue py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900">
          A Peek Inside Peach Ginger
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="  p-6 text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-64 h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-blue-800 mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-center text-gray-500 mt-8">
        These statements have not been evaluated by the Food and Drug
        Administration. This product is not intended to diagnose, treat, cure,
        or prevent any disease.
      </p>
    </section>
  );
};

export default PeachGingerDetails;

