import { Route, Routes } from 'react-router-dom';
import './App.css';

import Add from './pages/Admin/Products/Add';
import Edit from './pages/Admin/Products/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import LayoutAdmin from './components/LayoutAdmin';
import LayoutClient from './components/LayoutClient';
import AdminCategory from './pages/Admin/Category/AdminCategory';
import AddCategory from './pages/Admin/Category/AddCategory';
import EditCategory from './pages/Admin/Category/EditCategory';
import Admin from './pages/Admin/Products/AdminProduct';
import ProductDetail from './pages/ProductDetail';
import AdminUser from './pages/Admin/User/AdminUser';

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="products" element={<Admin />} />
          <Route path="products/add" element={<Add />} />
          <Route path="products/edit/:id" element={<Edit />} />
          <Route path="category" element={<AdminCategory />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="category/edit/:id" element={<EditCategory />} />
          <Route path="user" element={<AdminUser />} />
        </Route>

        <Route path="/" element={<LayoutClient />}>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<ProductDetail />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
