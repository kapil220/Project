import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ReviewsPage = () => {
  const reviews = [
    {
      name: "SHAVONIA J",
      date: "11/12/2024",
      review: "Very tasty! The Peach Ginger is delicious! Perfectly balanced flavor...",
      rating: 5,
    },
    {
      name: "Jo Jo",
      date: "11/12/2024",
      review: "Needs more peach flavor. It's good, but not peachy enough...",
      rating: 4,
    },
    {
      name: "SHAVONIA J",
      date: "11/12/2024",
      review: "Very tasty! The Peach Ginger is delicious! Perfectly balanced flavor...",
      rating: 5,
    },
    {
      name: "Jo Jo",
      date: "11/12/2024",
      review: "Needs more peach flavor. It's good, but not peachy enough...",
      rating: 4,
    },
    {
      name: "SHAVONIA J",
      date: "11/12/2024",
      review: "Very tasty! The Peach Ginger is delicious! Perfectly balanced flavor...",
      rating: 5,
    },
    {
      name: "Jo Jo",
      date: "11/12/2024",
      review: "Needs more peach flavor. It's good, but not peachy enough...",
      rating: 4,
    },
   
  
  ];

  return (
    <div className="bg-orange-50">
      {/* Header */}
      <header className=" text-2A3173 py-8 text-center">
        <h1 className="text-4xl font-bold">Customer Reviews</h1>
        <p className="mt-2 text-lg">Based on 76 reviews</p>
        <button className="mt-4 px-6 py-2 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-600">
          Write a Review
        </button>
      </header>

      {/* Reviews Section */}
      <section className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">{review.name}</h3>
              <p className="text-sm text-gray-600">{review.date}</p>
            </div>
            <p className="mb-4">{review.review}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < review.rating ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
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
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Let's Stay In Touch!</h2>
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

      {/* Social Media Gallery */}
      <section className="bg-custom-blue py-8">
  <div className="container mx-auto text-center">
    <h2 className="text-2xl font-bold">Create #EverydayWonders</h2>

    {/* Swiper Container */}
    <div className="relative">
      <Swiper
        spaceBetween={20} // space between slides
        slidesPerView={1} // Show 1 slide at a time
        loop={true} // looping the slider
        navigation={{
          prevEl: '.swiper-button-prev', // previous button class
          nextEl: '.swiper-button-next', // next button class
        }}
        className="mt-6"
      >
        {/* Slide 1 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image1.jpg"
              alt="Instagram Reel 1"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>

        {/* Slide 2 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID2"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image2.jpg"
              alt="Instagram Reel 2"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>

        {/* Slide 3 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID3"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image3.jpg"
              alt="Instagram Reel 3"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>

        {/* Slide 4 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID4"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image4.jpg"
              alt="Instagram Reel 4"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>

        {/* Slide 5 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID5"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image5.jpg"
              alt="Instagram Reel 5"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>

        {/* Slide 6 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image6.jpg"
              alt="Instagram Reel 6"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>

        {/* Slide 7 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image7.jpg"
              alt="Instagram Reel 7"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>

        {/* Slide 8 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image8.jpg"
              alt="Instagram Reel 8"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>

        {/* Slide 9 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image9.jpg"
              alt="Instagram Reel 9"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>

        {/* Slide 10 - Instagram Reel Link */}
        <SwiperSlide>
          <a
            href="https://www.instagram.com/reel/VIDEO_ID10"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-md block"
          >
            <img
              src="/path/to/image10.jpg"
              alt="Instagram Reel 10"
              className="rounded-lg shadow-md w-full"
            />
          </a>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute top-0 left-0 right-0 flex justify-between mt-6 px-4">
        <button className="swiper-button-prev bg-gray-500 text-white p-2 rounded-full">
          &#9664; {/* Left Arrow */}
        </button>
        <button className="swiper-button-next bg-gray-500 text-white p-2 rounded-full">
          &#9654; {/* Right Arrow */}
        </button>
      </div>
    </div>

    <button className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
      Follow @drinkwildwonder
    </button>
  </div>
</section>
    </div>
  );
};

export default ReviewsPage;
