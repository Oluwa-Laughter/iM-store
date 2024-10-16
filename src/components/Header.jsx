import React from "react";
import { cart, logo } from "../assets";

const Header = () => {
  return (
    <header className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 ">
      <nav className="max-w-screen-xl h-full mx-auto flex items-center justify-between ">
        <a>
          <img src={logo} className=" w-28" alt="logo" />
        </a>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img src={cart} className="w-10 cursor-pointer" alt="cart" />
            <span className="absolute w-6 top-1.5 left-1 text-sm flex items-center justify-center font-semibold">
              0
            </span>
          </div>

          <img
            className="w-8 h-8 rounded-full"
            src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="userImg"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
