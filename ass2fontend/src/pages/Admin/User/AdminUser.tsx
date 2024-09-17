import React, { useEffect, useState } from "react";
import { Users } from "../../../interface/User";
import api from "../../../axios";

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
      // Gửi yêu cầu xóa người dùng
      await api.delete(`/user/${id}`);
      // Cập nhật lại danh sách người dùng sau khi xóa
      setUsers(users.filter((user) => user._id !== id));
      alert("Xóa người dùng thành công!");
    } catch (error) {
      console.error("Xóa người dùng thất bại:", error);
      alert("Có lỗi xảy ra khi xóa người dùng!");
    }
  };

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((p) => (
            <tr key={p._id}>
              <td>{p.username}</td>
              <td>{p.email}</td>
              <td>{p.password}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(p._id)}
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
