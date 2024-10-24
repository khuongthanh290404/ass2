import React, { Children, createContext, useEffect, useReducer } from "react";
// import { Products } from "../interface/Product";
import ProductReducer from "../reducers/ProductReducer";
import api from "../axios";
import { useNavigate } from "react-router-dom";
import { Products } from "./../interface/Product";
import Swal from "sweetalert2";

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
        Swal.fire({
          title: " Success",
          text: "Xóa thành công",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: " Error",
        text: "Xóa lỗi",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const getDetail = async (id: string) => {
    if (!id) {
      console.error("Invalid _id: ", id);
      return;
    }
    try {
      const { data } = await api.get(`/products/${id}`);
      dispatch({ type: "SET_SELECTED_PRODUCT", payload: data });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const updateProduct = async (product: Products) => {
    try {
      const { data } = await api.put(`/products/${product._id}`, product);
      dispatch({ type: "UPDATE_PRODUCTS", payload: data.dataUpdated });
      Swal.fire({
        title: " Success",
        text: "Sửa thành công",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        nav("/admin/products");
        location.reload();
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: " Error",
        text: "Có lỗi xảy ra",
        icon: "error",
        cancelButtonText: "OK",
      });
    }
  };

  const create = async (data: Products) => {
    try {
      const res = await api.post(`/products`, data);
      console.log(res.data);
      dispatch({ type: "ADD_PRODUCTS", payload: res.data });
      Swal.fire({
        title: " Success",
        text: "Thêm sản phẩm thành công",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        nav("/admin/products");
        location.reload();
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: " Error",
        text: "Có lỗi xảy ra",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
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
