import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  const [curSlide, setCurSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/6214383/pexels-photo-6214383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://plus.unsplash.com/premium_photo-1672883551961-dd625e47990a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://plus.unsplash.com/premium_photo-1672883552013-506440b2f11c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const prevSlide = () => {
    setCurSlide(curSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurSlide(curSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="h-[650px] w-screen relative">
        <div
          className="w-[400vw] h-full flex transition-transform duration-1000 "
          style={{ transform: `translateX(-${curSlide * 100}vw)` }}
        >
          {data.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img${index + 1}`}
              className="w-screen h-full object-cover"
              loading="priority"
            />
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-52">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <FaArrowAltCircleLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <FaArrowCircleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
