import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import { FaSearch, FaFileAlt, FaTrash, FaEye } from "react-icons/fa";

const HoSoUngTuyenPage = () => {
  const [data] = useState([
    {
      id: 1,
      name: "Lê E",
      email: "e@example.com",
      phone: "0902...",
      viTri: "Giảng Viên",
      cvLink: "CV_E.pdf",
    },
    {
      id: 2,
      name: "Phan F",
      email: "f@example.com",
      phone: "0912...",
      viTri: "Trợ Giảng",
      cvLink: "CV_F.pdf",
    },
  ]);

  const [keyword, setKeyword] = useState("");
  const userRole = localStorage.getItem("userRole") || "admin";
  const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";

  const handleSearch = () => {
    // Logic tìm kiếm
  };

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
              <FaFileAlt className="mr-3 text-blue-600" />
              Quản lý hồ sơ ứng tuyển
            </h1>
            
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Tìm kiếm ứng viên..."
                className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-2 py-1 text-sm transition-colors"
              >
                Tìm
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Họ tên
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Vị trí
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    File CV
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Tác vụ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((hs) => (
                  <tr key={hs.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {hs.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {hs.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {hs.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {hs.viTri}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <a
                        href={`#${hs.cvLink}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                      >
                        <FaFileAlt className="mr-1" /> {hs.cvLink}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 flex items-center">
                          <FaEye className="mr-1" /> Xem
                        </button>
                        <button className="text-red-600 hover:text-red-800 flex items-center">
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

export default HoSoUngTuyenPage;