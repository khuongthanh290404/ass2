import { useContext } from "react";
import { CategoryContext } from "./../../../context/CategoryContext";
import { Link } from "react-router-dom";

const AdminCategory = () => {
  const { state, removeCategory } = useContext(CategoryContext);
  console.log(state.categorys);
  return (
    <div>
      <Link to="/admin/category/add" className="btn btn-primary">
        add category
      </Link>
      <table className="table table-striped table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {state.categorys.map((p) => (
            <tr>
              <td>#{p._id?.substring(0, 8)}</td>
              <td>{p.title}</td>
              <td>
                <button
                  onClick={() => removeCategory(p._id)}
                  className="btn btn-danger"
                >
                  xóa
                </button>
                <Link
                  to={`/admin/category/edit/${p._id}`}
                  className="btn btn-warning"
                >
                  edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCategory;
