import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { iMfooter, paymentImg } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-5">
          <img src={iMfooter} alt="logo" className="h-10 w-20 object-cover" />
          <p className="text-white text-sm tracking-wide">
            &copy; {new Date().getFullYear()} iM-store. All rights reserved.
          </p>
          <img src={paymentImg} alt="payment" className="w-56" />
          <div className="flex text-lg gap-5 text-gray-4000">
            <FaHome className="hover:text-white cursor-pointer duration-300" />
            <FaFacebookF className="hover:text-white cursor-pointer duration-300" />
            <FaInstagram className="hover:text-white cursor-pointer duration-300" />
            <FaYoutube className="hover:text-white cursor-pointer duration-300" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>123 Lagos Street, Victoria Island, Lagos, Nigeria</p>
            <p>Mobile: +234 812 345 6789</p>
            <p>Phone: +234 1 234 5678</p>
            <p>Email: info@iM-store.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="Email"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
