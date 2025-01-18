import React from "react";

const Slider = ({ items }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <div className="flex gap-4 overflow-x-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[200px] bg-gray-100 rounded-lg p-4 flex-shrink-0"
          >
            <img src={item.image} alt={item.title} className="w-full rounded" />
            <p className="mt-2 text-center font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;