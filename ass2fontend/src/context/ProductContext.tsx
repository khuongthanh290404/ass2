import React, { Children, createContext, useEffect, useReducer } from "react";
// import { Products } from "../interface/Product";
import ProductReducer from "../reducers/ProductReducer";
import api from "../axios";
import { useNavigate } from "react-router-dom";
import { Products } from "./../interface/Product";

type ProductContextType = {
  state: { products: Products[]; selectedProduct?: Products };
  removeProduct: (_id: string) => void;
  updateProduct: (data: Products) => void;
  create: (data: Products) => void;
  getDetail: (_id: string) => void;
};
export const ProductContext = createContext({} as ProductContextType);

type Children = {
  children: React.ReactNode;
};
export const ProductProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(ProductReducer, { products: [] });
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products`);
      dispatch({ type: "GET_PRODUCTS", payload: data });
    })();
  }, []);

  const removeProduct = async (_id: string) => {
    try {
      if (confirm("Are you sure you want to remove")) {
        await api.delete(`/products/${_id}`);
        dispatch({ type: "REMOVE_PRODUCTS", payload: _id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDetail = async (id: string) => {
    if (!id) {
      console.error("Invalid _id: ", id);
      return;
    }
    try {
      const { data } = await api.get(`/products/${id}`);
      console.log(data);
      dispatch({ type: "SET_SELECTED_PRODUCT", payload: data });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const updateProduct = async (product: Products) => {
    const { data } = await api.put(`/products/${product._id}`, product);
    dispatch({ type: "UPDATE_PRODUCTS", payload: data.dataUpdated });
    nav("/admin/products");
  };

  const create = async (data: Products) => {
    const res = await api.post(`/products`, data);
    dispatch({ type: "ADD_PRODUCTS", payload: res.data });
    nav("/admin/products");
  };
  return (
    <ProductContext.Provider
      value={{ state, removeProduct, updateProduct, create, getDetail }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
