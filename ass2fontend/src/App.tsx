import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";
import { Products } from "./interface/Product";
import api from "./axios/index";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const nav = useNavigate();
  const [product, setProducts] = useState<Products[]>([]);
  const fetAPI = async () => {
    const { data } = await api.get(`/products`);
    setProducts(data);
  };
  useEffect(() => {
    fetAPI();
  }, []);
  const remove = async (_id: string | number) => {
    if (confirm("Are you sure you want to remove")) {
      await api.delete(`/products/${_id}`);
      fetAPI();
    }
  };
  const onAdd = async (product: Products) => {
    await api.post(`/products`, product);
    fetAPI();
    nav("/");
  };
  const onEdit = async (product: Products) => {
    await api.put(`/products/${product._id}`, product);
    fetAPI();
    nav("/");
  };
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Admin</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Admin data={product} remove={remove} />} />
        <Route path="/add" element={<Add onAdd={onAdd} />} />
        <Route path="/edit/:_id" element={<Edit onEdit={onEdit} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
