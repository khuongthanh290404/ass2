import React, { Children, createContext, useEffect, useReducer } from 'react';
import { Categorys } from '../interface/Category';
import api from '../axios';
import CategoryReducer from '../reducers/CategoryReducre';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type CategoreyContextType = {
  state: { categorys: Categorys[] };
  removeCategory: (_id: string) => void;
  updateCategory: (category: Categorys, id: string | undefined) => void;
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
      const { data } = await api.get(`/categories`);
      dispatch({ type: 'GET_CATEGORY', payload: data.data });
    })();
  }, []);
  const removeCategory = async (_id: string) => {
    if (confirm('Are you sure you want to remove')) {
      await api.delete(`/categories/${_id}`);
      dispatch({ type: 'REMOVE_CATEGORY', payload: _id });
      toast.success('Xoá danh mục thành công', { autoClose: 200 });
    }
  };
  const updateCategory = async (
    category: Categorys,
    id: string | undefined
  ) => {
    const { data } = await api.put(`/categories/${id}`, category);
    if (!data) {
      toast.error('Không cập nhật đc danh mục', { autoClose: 200 });
      return;
    }
    toast.success('Cập nhật danh mục thành công', { autoClose: 200 });
    dispatch({ type: 'UPDATE_CATEGORY', payload: data.data });
    nav('/admin/categories');
  };
  const createCategory = async (category: Categorys) => {
    const { data } = await api.post(`/categories`, category);
    if (!data) {
      toast.error('Không thêm đc danh mục', { autoClose: 200 });
      return;
    }
    dispatch({ type: 'ADD_CATEGORY', payload: data.data });
    toast.success('Thêm danh mục thành công', { autoClose: 200 });

    nav('/admin/categories');
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
