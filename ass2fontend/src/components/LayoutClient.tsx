import React from "react";
import Header from "./layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer";

const LayoutClient = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutClient;
