import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/ProductContext.tsx";
import CategoryProvider from "./context/CategoryContext.tsx";
// import { CartProvider } from "./context/CartContext.tsx";
// import { CartProvider } from "./context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CategoryProvider>
          {/* <AuthProvider> */}
          {/* <CartProvider> */}
          <App />
          {/* </CartProvider> */}
          {/* </AuthProvider> */}
        </CategoryProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
