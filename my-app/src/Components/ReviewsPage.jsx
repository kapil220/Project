import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ReviewsPage = () => {
  const reviews = [
    {
      name: "Cam",
      date: "12/18/2024",
      heading: "MY NEW FAVORITE!",
      review:
        "I have been addicted to drinking soda for a while. I love a variety of teas but they don't hit the sweet and carbonated spot. After working out a few weeks ago I was in the health section of Wegmans and as a graphic designer, the cans caught my eye. These were one of the few Pre/probiotic health drinks that didn't have aspartame or other odd ingredients. I gave it a try and despite the steep price, they absolutely became my new favorite. The rose guava tastes just like the rose bubble tea I love! Worth trying and I love to support a woman-owned business! Honestly, if you sold cute cups/drinking glasses with the brand design on it to increase profit to make the drinks cheaper, I would 100% buy those as well. I hope business flourishes and the drink prices go down!",
      rating: 5,
    },
    {
      name: "Fran",
      date: "12/12/2024",
      heading: "LOVE WILD WONDER",
      review:
        "Love these drinks and they are a great alternative to soda and caffeinated drink options out there.",
      rating: 5,
    },
    {
      name: "Matt Tebo",
      date: "12/06/2024",
      heading: "",
      review: "These were pretty good.",
      rating: 4,
    },
    {
      name: "Carin Whitaker",
      date: "11/21/2024",
      heading: "",
      review: "Tasty and has 5 grams of fiber",
      rating: 5,
    },
    {
      name: "Jarred Lang",
      date: "11/16/2024",
      heading: "WE LOVE THESE WE DRINK THEM EVERY DAY",
      review: "It's awesome having them automatically delivered to my door every day.",
      rating: 5,
    },
    {
      name: "Katya",
      date: "11/16/2024",
      heading: "GREAT PRODUCT FOR GUT HEALTH",
      review: "Love the taste and how low on calories it is",
      rating: 5,
    },
  ];

  return (
    <div className="bg-orange-50">
      {/* Header */}
      <header className="text-2A3173 py-16 text-center">
  <h1 className="text-4xl font-bold text-blue-900">Customer Reviews</h1>
  
  {/* Star Rating */}
  <div className="flex items-center justify-center mt-2">
    <div className="flex text-yellow-500">
      {/* Render 4 full stars */}
      {[...Array(4)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-blue-900"
        >
          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.914 1.42 8.577L12 18.987l-7.42 4.927L6 15.337 0 9.423l8.332-1.268z" />
        </svg>
      ))}

     
    </div>
    <span className="text-blue-900 font-bold ml-2 text-lg text-blue-900">4</span>
  </div>

  <p className="mt-2 text-lg text-blue-900">Based on 76 reviews</p>
  <button className="mt-4 px-6 py-2 bg-custom-purple text-blue-900 font-bold rounded-lg hover:bg-yellow-600">
    Write a Review
  </button>
</header>


      {/* Reviews Section */}
      <section className="container mx-auto p-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-custom-blue p-6 rounded-xl shadow-md flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < review.rating ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                className={`w-5 h-5 ${
                  i < review.rating ? "text-blue-900" : "text-gray-300"
                }`}
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            ))}
          </div>
            
            <p className="text-sm text-blue-900">{review.date}</p>
          </div>
          <h3 className="text-lg font-bold text-blue-900 py-2">{review.name}</h3>
          {review.heading && (
            <h4 className="text-md font-semibold text-blue-800 mb-2">
              {review.heading}
            </h4>
          )}
          <p className="text-gray-700 mb-4">{review.review}</p>
        
        </div>
      ))}
    </section>

      {/* Newsletter Section */}
      <section className="bg-blue-800 text-white py-24 ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Let's Stay In Touch!</h2>
          <p className="mt-2">Sign up now for exclusive offers and updates.</p>
          <form className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email here"
              className="p-2 w-64 rounded-l-lg"
            />
            <button className="px-4 py-2 bg-pink-500 rounded-r-lg hover:bg-pink-600">
              Sign Up
            </button>
          </form>
        </div>
      </section>

  
    </div>
  );
};

export default ReviewsPage;
