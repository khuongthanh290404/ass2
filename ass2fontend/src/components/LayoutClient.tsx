import React from 'react';
import Header from './layouts/Header';
import { Outlet } from 'react-router-dom';
import Footer from './layouts/Footer';

const LayoutClient = () => {
  return (
    <>
      <Header />
      <main className="main p-3 bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutClient;
