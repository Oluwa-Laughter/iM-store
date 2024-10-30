import React from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaCreditCard,
  FaSmile,
} from "react-icons/fa";

const OrderSteps = () => {
  const steps = [
    {
      icon: <FaSearch size={40} />,
      title: "Discover Products",
      description: "Find unique and high-quality items.",
    },
    {
      icon: <FaShoppingCart size={40} />,
      title: "Add to Cart",
      description: "Choose your favorites and add them to your cart.",
    },
    {
      icon: <FaCreditCard size={40} />,
      title: "Secure Checkout",
      description: "Complete your purchase with our secure checkout.",
    },
    {
      icon: <FaSmile size={40} />,
      title: "Enjoy Your Purchase",
      description: "Receive your items and enjoy your shopping experience!",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-primary">
        Shopping Made Easy
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center md:mx-auto max-w-6xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-1/2 md:w-1/4 p-4"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#ff9e01] text-white text-2xl font-bold border-400 rounded-full">
              {step.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondary">
              {step.title}
            </h3>
            <p className="mt-2 text-center text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSteps;
