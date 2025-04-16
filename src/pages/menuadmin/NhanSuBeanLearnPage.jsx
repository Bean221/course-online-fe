import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import { FaUserTie, FaEdit, FaTrash, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

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

  const userRole = localStorage.getItem("userRole") || "admin";
  const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar userRole={userRole} />

      {/* Nội dung trang */}
      <main 
        className={`${
          isCollapsed ? "ml-20" : "ml-64"
        } flex-1 transition-all duration-300 p-6`}
      >
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaUserTie className="mr-3 text-green-600" />
              Quản lý nhân sự BeanLearn
            </h1>
            
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg px-4 py-2 text-sm transition-colors flex items-center">
              <span className="mr-1">+</span> Thêm nhân viên mới
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-green-50 to-teal-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Họ tên
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Vị trí
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Ngày vào
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Tác vụ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {staffList.map((staff) => (
                  <tr key={staff.id} className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {staff.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {staff.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex items-center">
                      <FaCalendarAlt className="mr-2 text-gray-400" /> {staff.startDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="flex items-center text-green-600">
                        <FaCheckCircle className="mr-1" /> {staff.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex space-x-3">
                        <button className="bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-lg px-3 py-1 transition-colors flex items-center">
                          <FaEdit className="mr-1" /> Sửa
                        </button>
                        <button className="bg-red-100 text-red-600 hover:bg-red-200 rounded-lg px-3 py-1 transition-colors flex items-center">
                          <FaTrash className="mr-1" /> Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NhanSuBeanLearnPage;