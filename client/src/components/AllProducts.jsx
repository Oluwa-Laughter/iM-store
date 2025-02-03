import React from "react";
import ProductCard from "./ProductCard";

function AllProducts({ products, children }) {
  return (
    <section className="py-10">
      {children}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 px-4">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default AllProducts;
