import React from "react";
import { Products } from "./../interface/Product";

const Admin = ({ data }: { data: Products[] }) => {
  return (
    <div>
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
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>
                <img src={p.thumbnail} alt="" />
              </td>
              <td>{p.description}</td>
              <td>
                <button>edit</button>
                <button>xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
