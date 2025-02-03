import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = [
  {
    src: "https://images.pexels.com/photos/6214383/pexels-photo-6214383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Discover the Latest Trends",
    subText: "Experience Fashion Like Never Before | $20 OFF All Products",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1672883551961-dd625e47990a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Exclusive Collections",
    subText: "Limited Time Offer | Save $20 on Your Fashion Journey",
  },
  {
    src: "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Premium Quality Assured",
    subText: "Luxury Meets Affordability | Flat $20 Discount Today",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1672883552013-506440b2f11c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "New Arrivals Weekly",
    subText: "Fresh Styles Every Week | Enjoy $20 OFF Store-wide",
  },
];

function Hero() {
  const [curSlide, setCurSlide] = useState(0);

  const prevSlide = () => {
    setCurSlide(curSlide === 0 ? data.length - 1 : curSlide - 1);
  };

  const nextSlide = () => {
    setCurSlide(curSlide === data.length - 1 ? 0 : curSlide + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="h-[650px] w-screen relative">
        <div
          className="w-[400vw] h-full flex transition-transform duration-1000"
          style={{ transform: `translateX(-${curSlide * 100}vw)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="relative w-screen h-full">
              <img
                src={item.src}
                alt={`img${index + 1}`}
                className="w-screen h-full object-cover"
                loading="priority"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute top-1/4 left-0 right-0 text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
                  {item.caption}
                </h1>
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium max-w-3xl mx-auto">
                  {item.subText}
                </p>
                <Link to="/products">
                  <button className="mt-8 px-8 py-3 bg-white text-gray-900 text-lg font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10 z-10">
          <div
            onClick={prevSlide}
            className="w-14 h-14 bg-white/30 backdrop-blur-md text-white flex items-center justify-center rounded-full hover:bg-white/50 cursor-pointer transition duration-300"
          >
            <FaArrowAltCircleLeft size={24} />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-14 bg-white/30 backdrop-blur-md text-white flex items-center justify-center rounded-full hover:bg-white/50 cursor-pointer transition duration-300"
          >
            <FaArrowCircleRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
