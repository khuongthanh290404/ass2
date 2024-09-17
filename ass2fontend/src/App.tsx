import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Admin from "./pages/Admin/Products/Admin";
// import { useEffect, useState } from "react";
// import { Products } from "./interface/Product";
// import api from "./axios/index";
import Add from "./pages/Admin/Products/Add";
import Edit from "./pages/Admin/Products/Edit";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import LayoutAdmin from "./components/LayoutAdmin";
import LayoutClient from "./components/LayoutClient";
import AdminCategory from "./pages/Admin/Category/AdminCategory";
// import Dashboard from "./pages/Admin/Dashboard";
// import ProductForm from "./pages/Admin/ProductForm";
import AddCategory from "./pages/Admin/Category/AddCategory";
import EditCategory from "./pages/Admin/Category/EditCategory";
// import Category from "./pages/Admin/Category/AdminCategory";
import Admin from "./pages/Admin/Products/AdminProduct";
import ProductDetail from "./pages/ProductDetail";
import AdminUser from "./pages/Admin/User/AdminUser";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="/admin/products" element={<Admin />} />
          <Route path="/admin/products/add" element={<Add />} />
          <Route path="/admin/products/edit/:id" element={<Edit />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/category/add" element={<AddCategory />} />
          <Route path="/admin/category/edit/:id" element={<EditCategory />} />
          <Route path="/admin/user" element={<AdminUser />} />
        </Route>

        <Route path="/" element={<LayoutClient />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
