import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../src/Layout";
import { productData } from "./api/Api";
import { Product } from "./components";
import { Login, Cart, Home, ProductsPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: productData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: productData,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
