import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Products } from "../../../interface/Product";
import {
  ProductContext,
  // ProductContextType,
} from "../../../context/ProductContext";
import { useParams } from "react-router-dom";
import api from "../../../axios";
import { CategoryContext } from "./../../../context/CategoryContext";

const Edit = () => {
  const { updateProduct } = useContext(ProductContext);
  const {
    register,
    handleSubmit,
    reset,
    // formState = { errors },
  } = useForm<Products>();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products/${id}`);
      reset(data);
    })();
  }, [id]);
  const { state } = useContext(CategoryContext);
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit((data) =>
          updateProduct({ ...data, _id: data._id })
        )}
      >
        <label htmlFor="title">title</label>
        <input type="text" className="form-control" {...register("title")} />

        <label htmlFor="price">price</label>
        <input type="number" className="form-control" {...register("price")} />

        <label htmlFor="description">description</label>
        <input
          type="text"
          className="form-control"
          {...register("description")}
        />

        <label htmlFor="thumbnail">image</label>
        <input
          type="text"
          className="form-control"
          {...register("thumbnail")}
        />
        <label htmlFor="">Category</label>
        <select id="" {...register("categoryId")} className="form-control">
          {state.categorys.map((item) => (
            <option key={item._id} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>

        <button className="btn btn-primary w-100">edit product</button>
      </form>
    </div>
  );
};

export default Edit;
