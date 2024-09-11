import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Products } from "./../interface/Product";
import { useParams } from "react-router-dom";
import api from "./../axios/index";

const Edit = ({ onEdit }: { onEdit: (product: Products) => void }) => {
  const {
    register,
    handleSubmit,
    // formState = { errors },
    reset,
  } = useForm<Products>();
  const { _id } = useParams();
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products/${_id}`);
      reset(data);
    })();
  }, []);
  return (
    <div className="container">
      <form onSubmit={handleSubmit((data) => onEdit({ ...data, _id }))}>
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

        <button className="btn btn-primary w-100">edit product</button>
      </form>
    </div>
  );
};

export default Edit;
