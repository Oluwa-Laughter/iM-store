import React, { useEffect, useState } from "react";
import { AllProducts, Hero } from "../components";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <main>
      <Hero />
      <AllProducts products={products} />
    </main>
  );
};

export default Home;
