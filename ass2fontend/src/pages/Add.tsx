import React from "react";
import { useForm } from "react-hook-form";
import { Products } from "./../interface/Product";

const Add = ({ onAdd }: { onAdd: (product: Products) => void }) => {
  const {
    register,
    handleSubmit,
    // formState = { errors },
  } = useForm<Products>();
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onAdd)}>
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

        <button className="btn btn-primary w-100">add product</button>
      </form>
    </div>
  );
};

export default Add;
