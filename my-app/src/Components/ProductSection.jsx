import React, { useState } from "react";
import UsVsThem from "./UsVsThem";
import PeachGingerDetails from "./PeachGingerDetails";
import ReviewsPage from "./ReviewsPage";
import { useMediaQuery } from 'react-responsive';
import ProductSlider from "./ProductSlider";
import InstagramReelSlider from "./InstagramReelSlider";


const ProductSection = ({ products = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0] || null);
    const [selectedTab, setSelectedTab] = useState("benefits"); // Default to "Benefits"
  const [quantity, setQuantity] = useState(1);
  const [subscriptionOption, setSubscriptionOption] = useState("one-time");
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [deliveryInterval, setDeliveryInterval] = useState("every 4 weeks");
  const [mainImage, setMainImage] = useState(selectedProduct?.mainImage || "/.jpg");

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    setSelectedTab("benefits");
    setMainImage(product.mainImage);
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
      return "bg-custom-blue";
    case "ingredients":
      return "bg-custom-green";
    case "nutritionFacts":
      return "bg-custom-yellow";
    default:
      return "bg-custom-blue";
  }
};

  return (
    <div className="bg-custom-orange mt-16">
      <div className="flex flex-col md:flex-row gap-16 lg:px-64 py-10">
      <div className="flex-1">
        <img
          src={mainImage}
          alt={selectedProduct?.name || "Default Product"}
          className="w-full rounded-lg"
        />

        {/* Small images */}
        <div className="flex mt-4 space-x-4">
          <div
            className="w-1/3"
            onClick={() => handleImageClick(selectedProduct?.image1 || "/default.jpg")}
          >
            <img
              src={selectedProduct?.image1 || "/default.jpg"}
              alt="Product Image 1"
              className="w-full rounded-lg cursor-pointer"
            />
          
          </div>

          <div
            className="w-1/3"
            onClick={() => handleImageClick(selectedProduct?.image2 || "/default.jpg")}
          >
            <img
              src={selectedProduct?.image2 || "/default.jpg"}
              alt="Product Image 2"
              className="w-full rounded-lg cursor-pointer"
            />
           
          </div>

          <div
            className="w-1/3"
            onClick={() => handleImageClick(selectedProduct?.image3 || "/default.jpg")}
          >
            <img
              src={selectedProduct?.image3 || "/default.jpg"}
              alt="Product Image 3"
              className="w-full rounded-lg cursor-pointer"
            />
           
          </div>
        </div>
      </div>



        <div className="flex-1 px-4">
          <h1 className="text-3xl font-bold mb-2 text-blue-900">
          {selectedProduct?.name}
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
      {/* Radio Buttons for Purchase Options */}
      <div className="border rounded-lg p-4 mb-4">
        {/* One-time Purchase */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="radio"
              id="one-time"
              name="purchaseOption"
              value="one-time"
              checked={subscriptionOption === "one-time"}
              onChange={() => setSubscriptionOption("one-time")}
              className="mr-2"
            />
            <label htmlFor="one-time" className="text-gray-700 text-lg font-medium">
              One-time purchase
            </label>
          </div>
          <p className="font-bold text-lg">₹{selectedProduct.price["one-time"].toFixed(2)}</p>
        </div>
      </div>

      {/* Subscribe & Save Option */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <input
              type="radio"
              id="subscribe"
              name="purchaseOption"
              value="subscribe"
              checked={subscriptionOption === "subscribe"}
              onChange={() => setSubscriptionOption("subscribe")}
              className="mr-2"
            />
            <label htmlFor="subscribe" className="text-gray-700 text-lg font-medium">
              Subscribe & Save
            </label>
          </div>
          <p className="font-bold text-lg text-blue-600">
            ₹{selectedProduct.price["subscribe"].toFixed(2)}
          </p>
        </div>

        {/* Dropdown for Delivery Interval */}
        {subscriptionOption === "subscribe" && (
          <div className="ml-6">
            <label
              htmlFor="deliveryInterval"
              className="block font-medium text-gray-700 mb-1 "
            >
              Delivery every:
            </label>
            <select
              id="deliveryInterval"
              value={deliveryInterval}
              onChange={(e) => setDeliveryInterval(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 bg-custom-orange"
            >
              <option value="every 4 weeks">Every 4 weeks - 15% off</option>
              <option value="every 8 weeks">Every 8 weeks - 10% off</option>
              <option value="every 12 weeks">Every 12 weeks - 5% off</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">✓ Change or cancel anytime</p>
            <p className="text-sm text-gray-500">✓ Exclusive gifts + discounts</p>
          </div>
        )}
      </div>
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

        

          {/* Benefits, Ingredients, and Nutrition Facts */}

        <div>
           <div className="rounded-3xl overflow-hidden">
   
    <div className="flex justify-center ">
      <button
        className={`font-bold lg:px-10 lg:py-4  lg:text-lg transition-colors bg-custom-blue ${
          selectedTab === "benefits"
            ? "text-blue-900 underline"
            : "text-gray-700 hover:text-blue-900"
        }`}
        onClick={() => setSelectedTab("benefits")}
      >
        BENEFITS
      </button>
      <button
        className={`font-bold lg:px-10 lg:py-4 lg:text-lg transition-colors bg-custom-green ${
          selectedTab === "ingredients"
            ? "text-blue-900 underline"
            : "text-gray-700 hover:text-blue-900"
        }`}
        onClick={() => setSelectedTab("ingredients")}
      >
        INGREDIENTS
      </button>
      <button
        className={`font-bold lg:px-10 lg:py-4 lg:text-lg  transition-colors bg-custom-yellow ${
          selectedTab === "nutritionFacts"
            ? "text-blue-900 underline"
            : "text-gray-700 hover:text-blue-900"
        }`}
        onClick={() => setSelectedTab("nutritionFacts")}
      >
        NUTRITION FACTS
      </button>
    </div>

    {/* Content section with background color based on selected tab */}
    <div className={`${getTabBackgroundColor()} p-6`}>
    {selectedTab === "benefits" && (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8">
      {selectedProduct?.benefits?.map((benefit, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-blue-900 flex items-center justify-center mb-3">
            <img
              src={benefit.icon || "/placeholder-icon.svg"}
              alt={benefit.text}
              className="w-12 h-12"
            />
          </div>
          <span className="text-blue-900 font-bold">{benefit.text}</span>
        </div>
      ))}
    </div>
  )}

{selectedTab === "ingredients" && (
        <div className="p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-blue-900">{selectedProduct?.name}</h3>
          <ul className="list-disc pl-4 space-y-2">
            {selectedProduct?.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-sm leading-relaxed text-blue-900">{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

{selectedTab === "nutritionFacts" && (
        <div className="p-6 rounded-lg">
          <table className="w-full">
            <tbody>
              {selectedProduct?.nutritionFacts?.map((fact, index) => {
                const [label, value] = fact.split(':');
                return (
                  <tr key={index} className="border-b border-blue-900">
                    <td className="py-2 font-bold text-blue-900">{label}</td>
                    <td className="py-2 text-right text-blue-900">{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
           </div>
        </div>
        </div>
      </div>

      <div>
        <ProductSlider />
      <div>
     
      {!isMobile && <UsVsThem />}
    </div>
        <PeachGingerDetails />
        <ReviewsPage />
        <InstagramReelSlider />
      </div>
    </div>
  );
};

export default ProductSection;
