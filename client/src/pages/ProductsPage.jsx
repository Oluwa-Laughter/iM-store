import React, { useEffect, useState } from "react";
import { AllProducts } from "../components";
import { useLoaderData } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <AllProducts products={products}>
        <div className="flex flex-col items-center gap-5 md:mx-auto sm:px-4 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Shop with Us
          </h2>
          <span className="w-24 h-[3px] bg-orange-500"></span>
          <p className="max-w-[700px] text-gray-600 text-center">
            Explore our diverse range of products and find exactly what you
            need. From the latest gadgets to stylish apparel and everyday
            essentials, we have something for everyone. Enjoy a seamless
            shopping experience with our unbeatable prices and exceptional
            customer service. Start browsing now and discover your next favorite
            item!
          </p>
        </div>
      </AllProducts>
    </div>
  );
}

export default ProductsPage;
