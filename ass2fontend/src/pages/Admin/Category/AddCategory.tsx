import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CategoryContext } from "../../../context/CategoryContext";
import { Categorys } from "../../../interface/Category";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    // formState = { errors },
  } = useForm<Categorys>();
  const { createCategory } = useContext(CategoryContext);
  return (
    <div className="container">
      <form onSubmit={handleSubmit((data) => createCategory(data))}>
        <label htmlFor="title">title</label>
        <input type="text" className="form-control" {...register("title")} />
        <button className="btn btn-primary w-100">add category</button>
      </form>
    </div>
  );
};

export default AddCategory;
