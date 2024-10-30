import React, { useEffect, useState } from "react";
import { AllProducts } from "../components";
import { useLoaderData } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <AllProducts products={products} />
    </div>
  );
};

export default ProductsPage;
