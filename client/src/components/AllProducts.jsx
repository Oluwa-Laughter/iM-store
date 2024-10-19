import React from "react";

import ProductCard from "./ProductCard";

const AllProducts = ({ products }) => {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Welcome to iM store! We offer a wide variety of products to meet all
          your needs. Whether you're looking for the latest electronics,
          fashionable clothing, or everyday essentials, we have it all. Our goal
          is to provide you with the best shopping experience possible, with
          unbeatable prices and top-notch customer service. Browse through our
          categories and discover amazing deals and exclusive offers. Happy
          shopping!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 px-4  ">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
