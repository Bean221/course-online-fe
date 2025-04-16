import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";

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

  const handleSearch = () => {
    // TODO: Thêm logic tìm kiếm
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar userRole="admin" />

      {/* Nội dung trang */}
      <div className="ml-64 p-4 w-full">
        <h1 className="text-2xl font-semibold mb-4">Quản lý hồ sơ ứng tuyển</h1>
  
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Tìm theo tên..."
            className="border px-3 py-2"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Tìm kiếm
          </button>
        </div>
  
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 text-left">Họ tên</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Vị trí</th>
              <th className="p-2 text-left">File CV</th>
              <th className="p-2 text-left">Tác vụ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((hs) => (
              <tr key={hs.id} className="border-b">
                <td className="p-2">{hs.name}</td>
                <td className="p-2">{hs.email}</td>
                <td className="p-2">{hs.phone}</td>
                <td className="p-2">{hs.viTri}</td>
                <td className="p-2">
                  <a href="#!" className="text-blue-500 underline">
                    {hs.cvLink}
                  </a>
                </td>
                <td className="p-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                    Xem
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

export default HoSoUngTuyenPage;
