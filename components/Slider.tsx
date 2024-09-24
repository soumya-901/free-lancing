// components/AutoSlider.js

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function AutoSlider() {
  const items = [
    {
      toolname: "Youtube Tag Generator",
      link: "",
    },
    {
      toolname: "Youtube Tag Generator",
      link: "",
    },
    {
      toolname: "Youtube Tag Generator",
      link: "",
    },
    {
      toolname: "Youtube Tag Generator",
      link: "",
    },
    {
      toolname: "Youtube Tag Generator",
      link: "",
    },
    {
      toolname: "Youtube Tag Generator",
      link: "",
    },
    {
      toolname: "Youtube Tag Generator",
      link: "",
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Swiper
        spaceBetween={10} // Space between slides
        loop={true} // Infinite loop
        pagination={{ clickable: true }} // Dots pagination
        autoplay={{
          delay: 2000, // Slide every 2 seconds
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
                <div className="p-4 flex flex-col w-full items-center ">
                  <h3 className="text-center my-3 text-gray-700 font-bold">
                    {item.toolname}
                  </h3>
                  <Link
                    href={item.link}
                    className="mt-4 bg-blue-500  text-white py-2 px-4 rounded-lg w-fit"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
