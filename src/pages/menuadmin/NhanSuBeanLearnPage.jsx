import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";

const NhanSuBeanLearnPage = () => {
  const [staffList] = useState([
    {
      id: 1,
      name: "Phạm Giang Viên",
      role: "Giảng viên IELTS",
      startDate: "01/01/2025",
      status: "Đang làm",
    },
    {
      id: 2,
      name: "Trần Trợ Lý",
      role: "Trợ lý giám đốc",
      startDate: "15/02/2025",
      status: "Đang làm",
    },
  ]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar userRole="admin" />

      {/* Nội dung trang */}
      <div className="ml-64 p-4 w-full">
        <h1 className="text-2xl font-semibold mb-4">
          Quản lý nhân sự BeanLearn
        </h1>
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 text-left">Họ tên</th>
              <th className="p-2 text-left">Vị trí</th>
              <th className="p-2 text-left">Ngày vào</th>
              <th className="p-2 text-left">Trạng thái</th>
              <th className="p-2 text-left">Tác vụ</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id} className="border-b">
                <td className="p-2">{staff.name}</td>
                <td className="p-2">{staff.role}</td>
                <td className="p-2">{staff.startDate}</td>
                <td className="p-2">{staff.status}</td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    Sửa
                  </button>
                  <button className="text-red-600">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NhanSuBeanLearnPage;
