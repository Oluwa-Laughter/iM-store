import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header, Footer } from "./components/";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
