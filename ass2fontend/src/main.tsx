import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './context/ProductContext.tsx';
import CategoryProvider from './context/CategoryContext.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
