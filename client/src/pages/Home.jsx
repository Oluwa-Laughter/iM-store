// import React, { useEffect, useState } from "react";
// import { AllProducts, Hero, OrderSteps } from "../components";
// import { useLoaderData } from "react-router-dom";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const data = useLoaderData();

//   useEffect(() => {
//     setProducts(data.data);
//   }, [data]);
//   return (
//     <main>
//       <Hero />
//       <div className="flex flex-col items-center gap-5">
//         <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
//           Shopping Everyday
//         </h1>
//         <span className="w-20 h-[3px] bg-black"></span>
//         <p className="max-w-[700px] text-gray-600 text-center">
//           Welcome to iM store! We offer a wide variety of products to meet all
//           your needs. Whether you're looking for the latest electronics,
//           fashionable clothing, or everyday essentials, we have it all. Our goal
//           is to provide you with the best shopping experience possible, with
//           unbeatable prices and top-notch customer service. Browse through our
//           categories and discover amazing deals and exclusive offers. Happy
//           shopping!
//         </p>
//       </div>
//       <OrderSteps />
//       {/* <AllProducts products={products} /> */}
//     </main>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { AllProducts, Hero, OrderSteps } from "../components";
import { useLoaderData } from "react-router-dom";
import { FaFire, FaStar, FaGift } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <main className="overflow-hidden">
      <Hero />

      {/* Welcome  */}
      <div className="flex flex-col items-center gap-5 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Welcome to where Shopping is a pleasure!
          </h1>
        </div>
        <span className="w-24 h-[3px] bg-orange-500"></span>
        <p className="max-w-[800px] text-gray-600 text-center text-lg px-4 leading-relaxed">
          Welcome to iM Store, your ultimate destination for all things trendy
          and essential. Explore our diverse collection from cutting-edge
          gadgets to stylish apparel - we've curated everything you need under
          one roof. Experience premium quality, unbeatable prices, and
          exceptional service that thousands of satisfied customers trust.
          Whether you're upgrading your tech or refreshing your wardrobe,
          discover your next favorite piece with us today.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl px-4">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <FaStar className="text-yellow-400 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Handpicked materials and expert craftsmanship in every piece
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <FaGift className="text-purple-500 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Special Offers</h3>
            <p className="text-gray-600">
              Exclusive deals and discounts for our valued customers
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <FaFire className="text-red-500 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Latest Trends</h3>
            <p className="text-gray-600">
              Stay ahead with our constantly updated collections
            </p>
          </div>
        </div>
      </div>

      <OrderSteps />

      {/* Featured Products */}
      <div className=" bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Featured Collections
          </h2>
          <p className="text-gray-600">Discover our most popular items</p>
        </div>
        <AllProducts products={products.slice(0, 4)} />
      </div>
    </main>
  );
};

export default Home;
