import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";
import { Products } from "./interface/Product";
import api from "./axios/index";

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products`);
      setProducts(data);
    })();
  }, []);
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
        <Route path="/" element={<Admin data={products} />} />
      </Routes>
    </>
  );
}

export default App;
