import { Link } from "react-router-dom";
import { Products } from "./../interface/Product";

const Admin = ({
  data,
  remove,
}: {
  data: Products[];
  remove: (_id: string | number) => void;
}) => {
  return (
    <div>
      <Link to="/add" className="btn btn-primary">
        Add
      </Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>image</th>
            <th>description</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr>
              <td>{p._id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>
                <img src={p.thumbnail} alt="" width={150} />
              </td>
              <td>{p.description}</td>
              <td>
                <Link to={`/edit/${p._id}`} className="btn btn-warning">
                  edit
                </Link>
                <button
                  onClick={() => remove(p._id)}
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
