import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Products } from "../../../interface/Product";
import {
  ProductContext,
  // ProductContextType,
} from "../../../context/ProductContext";
import { CategoryContext } from "../../../context/CategoryContext";

const Add = () => {
  const { create } = useContext(ProductContext);
  const {
    register,
    handleSubmit,
    // formState = { errors },
  } = useForm<Products>();
  // const onSubmit = (data: Products) => {
  //   try {
  //     addProduct(data);
  //   } catch (error) {
  //     console.error("Failed to add product", error);
  //   }
  // };
  const { state } = useContext(CategoryContext);
  return (
    <div className="container">
      <form onSubmit={handleSubmit((data) => create(data))}>
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
        <select {...register("categoryId")} className="form-control">
          {state.categorys.map((item) => (
            <option key={item._id} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>

        <button className="btn btn-primary w-100">add product</button>
      </form>
    </div>
  );
};

export default Add;
