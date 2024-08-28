// components/AutoSlider.js

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function AutoSlider() {
  const items = [1, 2, 3, 4, 5, 6]; // Example items array

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Swiper
        spaceBetween={10} // Space between slides
        loop={true} // Infinite loop
        pagination={{ clickable: true }} // Dots pagination
        autoplay={{
          delay: 3000, // Slide every 3 seconds
          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={{
          1124: {
            slidesPerView: 4,
          },
          924: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 my-5">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="/tools/default.svg"
                  alt="YouTube Logo"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-center text-gray-700 font-bold">
                    YouTube Tags Generator
                  </h3>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
