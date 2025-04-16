import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";

const QuanLyUserPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Admin",
      email: "admin@beanlearn.com",
      role: "admin",
    },
    {
      id: 2,
      name: "Manager 1",
      email: "manager1@beanlearn.com",
      role: "manager",
    },
    {
      id: 3,
      name: "User 1",
      email: "user1@beanlearn.com",
      role: "user",
    },
  ]);

  const handleUpdate = (id) => {
    alert("Sửa info user " + id);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleToggleRole = (id, newRole) => {
    setUsers(prev =>
      prev.map((u) => (u.id === id ? { ...u, role: newRole } : u))
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar userRole="admin" />

      {/* Nội dung trang */}
      <div className="ml-64 p-4 w-full">
        <h1 className="text-2xl font-semibold mb-4">Quản lý người dùng hệ thống</h1>
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 text-left">Tên</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Sửa</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {users.map((usr) => (
              <tr key={usr.id} className="border-b">
                <td className="p-2">{usr.name}</td>
                <td className="p-2">{usr.email}</td>
                <td className="p-2">{usr.role}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleUpdate(usr.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Sửa
                  </button>
                </td>
                <td className="p-2">
                  {usr.role === "manager" ? (
                    <button
                      onClick={() => handleToggleRole(usr.id, "user")}
                      className="bg-yellow-400 text-white px-3 py-1 rounded"
                    >
                      Thu hồi Manager
                    </button>
                  ) : (
                    <button
                      onClick={() => handleToggleRole(usr.id, "manager")}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Cấp Manager
                    </button>
                  )}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(usr.id)}
                    className="text-red-600"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuanLyUserPage;
