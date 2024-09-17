import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import api from "../../../axios";
import { CategoryContext } from "../../../context/CategoryContext";
import { Categorys } from "../../../interface/Category";

const EditCategory = () => {
  const { updateCategory } = useContext(CategoryContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Categorys>();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        try {
          const { data } = await api.get(`/categorys/${id}`);
          reset(data.data); // Sử dụng đúng cấu trúc dữ liệu trả về
        } catch (error) {
          console.error("Error fetching category:", error);
        }
      }
    })();
  }, [id, reset]);

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit((data) => updateCategory({ ...data, _id: id }))}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className={`form-control ${errors.title ? "is-invalid" : ""}`}
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <div className="invalid-feedback">{errors.title.message}</div>
        )}

        <button className="btn btn-primary w-100">Edit Category</button>
      </form>
    </div>
  );
};

export default EditCategory;
