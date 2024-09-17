import { useContext } from "react";
import { Link } from "react-router-dom";
// import {
//   ProductContext,
//   // ProductContextType,
// } from "../../context/ProductContext";
// import { Products } from "../../interface/Product";
import { ProductContext } from "./../../../context/ProductContext";

const Admin = () => {
  const { state, removeProduct } = useContext(ProductContext);

  return (
    <div>
      <Link to="/admin/products/add" className="btn btn-primary">
        Add
      </Link>
      <table className="table table-striped table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>image</th>
            <th>categories</th>
            <th>description</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((p) => (
            <tr key={p._id}>
              <td>{p._id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>
                <img src={p.thumbnail} alt="" width={100} />
              </td>
              <td>{p.categoryId?.title}</td>
              <td>{p.description}</td>
              <td>
                <Link
                  to={`/admin/products/edit/${p._id}`}
                  className="btn btn-warning"
                >
                  edit
                </Link>
                <button
                  onClick={() => removeProduct(p._id!)}
                  className="btn btn-danger"
                >
                  xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
