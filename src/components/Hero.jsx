import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  const [curSlide, setCurSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurSlide(curSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurSlide(curSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <section className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          className="w-[400vw] h-full flex transition-transform duration-1000"
          style={{ transform: `translateX(-${curSlide * 100}vw)` }}
        >
          <img
            src={data[0]}
            alt="img1"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[1]}
            alt="img1"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[2]}
            alt="img1"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[3]}
            alt="img1"
            className="w-screen h-full object-cover"
            loading="priority"
          />
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
    </section>
  );
};

export default Hero;
