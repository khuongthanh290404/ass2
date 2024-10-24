import { useEffect, useState } from "react";
import { Users } from "../../../interface/User";
import api from "../../../axios";
import Swal from "sweetalert2";

const AdminUser = () => {
  const [users, setUsers] = useState<Users[]>([]);

  // Lấy danh sách người dùng từ API
  useEffect(() => {
    fetchUsers();
  }, []);

  // Hàm gọi API để lấy dữ liệu người dùng
  const fetchUsers = async () => {
    const { data } = await api.get(`/user`);
    setUsers(data);
  };

  // Hàm xóa người dùng
  const deleteUser = async (id: string) => {
    try {
      if (confirm("Are you sure you want to delete this user")) {
        // Gửi yêu cầu xóa người dùng
        await api.delete(`/user/${id}`);
        // Cập nhật lại danh sách người dùng sau khi xóa
        setUsers(users.filter((user) => user._id !== id));
        Swal.fire({
          title: "Success",
          text: "Xóa người dùng thành công",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Xóa thất bại",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Image</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((p) => (
            <tr key={p._id}>
              <td>{p.username}</td>
              <td>
                <img src={p.image} alt="" width={100} />
              </td>
              <td>{p.email}</td>
              <td>{p.password}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(p._id!)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUser;
