import React, { useState } from "react";
import { cart, logo } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const productData = useSelector((state) => state.iMstore.productData);
  const userInfo = useSelector((state) => state.iMstore.userInfo);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full h-20 bg-[#fff] border-b-[1px] sticky top-0 z-50">
      <nav className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-4 md:px-8">
        <Link to="/">
          <img src={logo} className="w-28" alt="logo" />
        </Link>

        <div className="flex items-center gap-8">
          <ul
            className={`flex items-center gap-8 ${
              menuOpen
                ? "flex-col absolute top-20 left-0 w-full bg-white p-4"
                : "hidden md:flex"
            }`}
            onClick={handleNavClick}
          >
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Products
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Contact
            </li>

            <Link to="/cart">
              <div className="relative">
                <span className="absolute w-5 h-5 -top-2 -right-2 text-sm flex items-center justify-center font-semibold bg-[#ff9e01] rounded-full">
                  {productData.length}
                </span>
                <img src={cart} className="w-10 cursor-pointer" alt="cart" />
              </div>
            </Link>

            <Link to="/login">
              {userInfo ? (
                <img
                  className="w-8 h-8 rounded-full"
                  src={userInfo.image}
                  alt="userImg"
                />
              ) : (
                <button className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Sign In
                </button>
              )}
            </Link>

            {userInfo && (
              <p className="text-base font-titleFont font-semibold underline underline-offset-2">
                {userInfo.name}
              </p>
            )}
          </ul>

          <button className="md:hidden text-2xl" onClick={handleMenuClick}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
