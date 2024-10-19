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
    <section className="w-full overflow-x-hidden">
      <div className="relative">
        <div
          style={{ transform: `translateX(-${curSlide * 100}vw)` }}
          className="flex transition-transform duration-1000"
        >
          {data.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img${index + 1}`}
              className="w-screen h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover"
              loading="priority"
            />
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20">
          <div
            onClick={prevSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <FaArrowAltCircleLeft className="text-sm sm:text-base md:text-lg lg:text-xl" />
          </div>
          <div
            onClick={nextSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <FaArrowCircleRight className="text-sm sm:text-base md:text-lg lg:text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
