import { Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./pages/Admin/Products/Add";
import Edit from "./pages/Admin/Products/Edit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LayoutAdmin from "./components/LayoutAdmin";
import LayoutClient from "./components/LayoutClient";
import AdminCategory from "./pages/Admin/Category/AdminCategory";
import AddCategory from "./pages/Admin/Category/AddCategory";
import EditCategory from "./pages/Admin/Category/EditCategory";
import Admin from "./pages/Admin/Products/AdminProduct";
import ProductDetail from "./pages/ProductDetail";
import AdminUser from "./pages/Admin/User/AdminUser";
import Dasboard from "./pages/Admin/Admin";
// import Cart from "./pages/Cart";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import AdminOrders from "./pages/Admin/AdminCheckout";
// import CartPage from "./pages/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="/admin/products" element={<Admin />} />
          <Route path="/admin/products/add" element={<Add />} />
          <Route path="/admin/products/edit/:id" element={<Edit />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/category/add" element={<AddCategory />} />
          <Route path="/admin/category/edit/:id" element={<EditCategory />} />
          <Route path="/admin/user" element={<AdminUser />} />
          <Route path="/admin/dasboard" element={<Dasboard />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Route>

        <Route path="/" element={<LayoutClient />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
