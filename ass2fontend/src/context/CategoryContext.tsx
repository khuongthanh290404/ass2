import React, { Children, createContext, useEffect, useReducer } from "react";
import { Categorys } from "../interface/Category";
// import CategoryRedecer from "../reducers/CategoryReducre";
import api from "../axios";
import CategoryReducer from "../reducers/CategoryReducre";
import { useNavigate } from "react-router-dom";

type CategoreyContextType = {
  state: { categorys: Categorys[] };
  removeCategory: (_id: string) => void;
  updateCategory: (category: Categorys) => void;
  createCategory: (category: Categorys) => void;
};
export const CategoryContext = createContext({} as CategoreyContextType);

type Children = {
  children: React.ReactNode;
};
export const CategoryProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(CategoryReducer, { categorys: [] });
  const nav = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/categorys`);
      dispatch({ type: "GET_CATEGORY", payload: data.data });
    })();
  }, []);
  const removeCategory = async (_id: string) => {
    if (confirm("Are you sure you want to remove")) {
      await api.delete(`/categorys/${_id}`);
      dispatch({ type: "REMOVE_CATEGORY", payload: _id });
    }
  };
  const updateCategory = async (category: Categorys) => {
    const { data } = await api.put(`/categorys/${category._id}`, category);
    dispatch({ type: "UPDATE_CATEGORY", payload: data.data });
    nav("/admin/category");
  };
  const createCategory = async (category: Categorys) => {
    const { data } = await api.post(`/categorys`, category);
    dispatch({ type: "ADD_CATEGORY", payload: data.data });
    nav("/admin/category");
  };
  return (
    <CategoryContext.Provider
      value={{ state, removeCategory, updateCategory, createCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryProvider;
