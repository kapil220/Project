import React, { useState } from "react";
import UsVsThem from "./UsVsThem";
import PeachGingerDetails from "./PeachGingerDetails";
import ReviewsPage from "./ReviewsPage";
import { useMediaQuery } from 'react-responsive';


const ProductSection = ({ products = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0] || null);
    const [selectedTab, setSelectedTab] = useState("benefits"); // Default to "Benefits"
  const [quantity, setQuantity] = useState(1);
  const [subscriptionOption, setSubscriptionOption] = useState("one-time");
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    setSelectedTab("benefits");
  };

  if (!products.length) {
    return <div>No products available</div>;
  }




  const renderBenefits = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {selectedProduct?.benefits && selectedProduct?.benefits.map((benefit, index) => (
        <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-sm">
          <div className="text-sm font-bold text-center">{benefit}</div>
        </div>
      ))}
    </div>
  );
  

  const renderIngredients = () => (
    <div className=" p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">{selectedProduct?.name}</h3>
      <ul className="list-disc pl-4">
        {selectedProduct?.ingredients.map((ingredient, index) => (
          <li key={index} className="text-sm leading-relaxed mb-2">{ingredient}</li>
        ))}
      </ul>
    </div>
  );

  const renderNutritionFacts = () => (
    <div className=" p-6 rounded-lg">
      <table className="w-full">
        <tbody>
          {selectedProduct?.nutritionFacts.map((fact, index) => {
            const [label, value] = fact.split(':');
            return (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 font-bold">{label}</td>
                <td className="py-2 text-right">{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  const getTabContent = () => {
    switch (selectedTab) {
      case "benefits":
        return renderBenefits();
      case "ingredients":
        return renderIngredients();
      case "nutritionFacts":
        return renderNutritionFacts();
      default:
        return null;
    }
  };

  const getTabBackgroundColor = () => {
    switch (selectedTab) {
      case "benefits":
        return "bg-blue-50";
      case "ingredients":
        return "bg-green-50";
      case "nutritionFacts":
        return "bg-yellow-50";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="bg-custom-orange">
      <div className="flex flex-col md:flex-row gap-16 lg:px-64 py-10">
        <div className="flex-1">
          <img
            src={selectedProduct?.mainImage || "/.jpg"}
            alt={selectedProduct?.name || "Default Product"}
            className="w-full rounded-lg"
          />
        </div>

        <div className="flex-1 px-4">
          <h1 className="text-3xl font-bold mb-2 text-blue-900">
            SHARK TANK BUNDLE
          </h1>
          <p className="text-lg mb-4 text-blue-900">
            24 PACK | PREBIOTIC + PROBIOTIC SPARKLING DRINK
          </p>

          {/* Rating Section */}
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className={`${
                  i < 4.5
                    ? "fill-blue-900 text-blue-900"
                    : "fill-gray-200 text-gray-200"
                }`}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="text-blue-900 ml-2">513 REVIEWS</span>
          </div>

          <p className="text-gray-700 mb-4">{selectedProduct?.description}</p>

          {/* Product Variants */}
          <div className="flex flex-wrap gap-2 mb-4 pr-32">
  {products.map((product) => (
    <img
      key={product.id}
      src={product.variantImage}
      alt={product.name}
      className={`w-16 h-16 rounded-lg cursor-pointer border-2 ${
        selectedProduct?.id === product.id
          ? "border-blue-500"
          : "border-gray-200"
      }`}
      onClick={() => handleProductChange(product)}
    />
  ))}
</div>






          {/* Purchase Options */}
          <div className="mb-4">
            <div className="flex items-center gap-4">
              <div>
                <input
                  type="radio"
                  id="one-time"
                  name="purchaseOption"
                  value="one-time"
                  checked={subscriptionOption === "one-time"}
                  onChange={() => setSubscriptionOption("one-time")}
                  className="mr-2"
                />
                <label htmlFor="one-time" className="text-gray-700">
                  One-time purchase
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="subscribe"
                  name="purchaseOption"
                  value="subscribe"
                  checked={subscriptionOption === "subscribe"}
                  onChange={() => setSubscriptionOption("subscribe")}
                  className="mr-2"
                />
                <label htmlFor="subscribe" className="text-gray-700">
                  Subscribe & Save
                </label>
              </div>
            </div>
            <p className="text-xl font-bold mt-2">
              ₹{selectedProduct?.price[subscriptionOption]}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-blue-900 rounded-lg">
              <button
                className="px-4 py-2 text-blue-900"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4 text-blue-900">{quantity}</span>
              <button
                className="px-4 py-2 text-blue-900"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600">
            Add to Cart
          </button>
          </div>

          {/* Add to Cart Button */}
       

          {/* Benefits, Ingredients, and Nutrition Facts */}
          <div>
          <div className={` rounded-lg ${getTabBackgroundColor()}`}>
          <div className="flex justify-center gap-6 p-4 ">
            <button
              className={`font-bold px-4 py-2  transition-colors border rounded-3xl ${
                selectedTab === "benefits" ? "text-blue-900 underline" : "text-gray-700 hover:text-blue-900"
              }`}
              onClick={() => setSelectedTab("benefits")}
            >
              BENEFITS
            </button>
            <button
              className={`font-bold px-4 py-2 rounded transition-colors ${
                selectedTab === "ingredients" ? "text-blue-900 underline" : "text-gray-700 hover:text-blue-900"
              }`}
              onClick={() => setSelectedTab("ingredients")}
            >
              INGREDIENTS
            </button>
            <button
              className={`font-bold px-4 py-2 rounded transition-colors ${
                selectedTab === "nutritionFacts" ? "text-blue-900 underline" : "text-gray-700 hover:text-blue-900"
              }`}
              onClick={() => setSelectedTab("nutritionFacts")}
            >
              NUTRITION FACTS
            </button>
          </div>

          <div className="mt-6">
            {getTabContent()}
          </div>
        </div>
      </div>
        </div>
      </div>

      <div>
      <div>
     
      {!isMobile && <UsVsThem />}
    </div>
        <PeachGingerDetails />
        <ReviewsPage />
      </div>
    </div>
  );
};

export default ProductSection;
