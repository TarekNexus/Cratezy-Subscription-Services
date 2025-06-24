import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../assets/slider4.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider3.avif";
import slider4 from "../assets/slider4.jpg";

const Slider = () => {
  const slides = [
    {
      image: slider1,
      title: "Curated Winter Boxes",
      desc: "Discover personalized surprises, handpicked just for you — delivered monthly.",
    },
    {
      image: slider2,
      title: "Support Local Creators",
      desc: "Each box helps local artisans and makers during the winter season.",
    },
    {
      image: slider3,
      title: "Gifts That Warm the Soul",
      desc: "Send love in a box — perfect for friends, family, or a treat to yourself.",
    },
    {
      image: slider4,
      title: "Flexible Subscriptions",
      desc: "Choose how often you receive your box — monthly, weekly, or yearly.",
    },
  ];

  return (
    <div className="w-full h-[500px] sm:h-[400px] md:h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="rounded-lg overflow-hidden h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4 sm:px-6 space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide text-indigo-100 drop-shadow-xl">
                  {slide.title}
                </h2>
                <p className="max-w-xl text-base sm:text-lg md:text-xl text-gray-100 drop-shadow-md leading-relaxed">
                  {slide.desc}
                </p>
                <button className="mt-2 px-6 py-3 text-white font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-3xl shadow-md transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
