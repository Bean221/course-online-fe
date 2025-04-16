import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar"; 

const TuVanDKPage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Trần C",
      email: "c@example.com",
      phone: "0909...",
      ngayDangKy: "09/04/2025",
      daLienHe: true,
      khoaHoc: "IELTS",
      ghiChu: "Đã gọi, hẹn tư vấn lần 2",
    },
    {
      id: 2,
      name: "Lê D",
      email: "d@example.com",
      phone: "0981...",
      ngayDangKy: "08/04/2025",
      daLienHe: false,
      khoaHoc: "Du học",
      ghiChu: "Chưa liên hệ",
    },
  ]);

  const [keyword, setKeyword] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const lowerKeyword = keyword.toLowerCase();
    const result = data.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerKeyword) ||
        item.email.toLowerCase().includes(lowerKeyword)
    );
    setFilteredData(result);
  };

  const handleToggle = (id) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, daLienHe: !item.daLienHe } : item
    );
    setData(updated);
    setFilteredData(updated);
  };

  const handleDelete = (id) => {
    const updated = data.filter((item) => item.id !== id);
    setData(updated);
    setFilteredData(updated);
  };

  const userRole = localStorage.getItem("userRole"); // hoặc hardcode test: "admin" / "manager"

  return (
    <div className="flex">
      {/* Sidebar chỉ hiển thị đúng role */}
      <AdminSidebar userRole={userRole} />


      <div className="ml-64 p-4 text-slate-800 w-full"> {/* ✅ Nội dung chính */}
        <h1 className="text-2xl font-semibold mb-4">Quản lý đăng ký tư vấn</h1>

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Tìm theo tên hoặc email..."
            className="border px-3 py-2 rounded"
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
              <th className="p-2 text-left">Họ Tên</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Ngày ĐK</th>
              <th className="p-2 text-left">Khóa học</th>
              <th className="p-2 text-left">Ghi chú</th>
              <th className="p-2 text-left">Trạng thái liên hệ</th>
              <th className="p-2 text-left">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.email}</td>
                <td className="p-2">{item.ngayDangKy}</td>
                <td className="p-2">{item.khoaHoc}</td>
                <td className="p-2">{item.ghiChu}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleToggle(item.id)}
                    className={`px-3 py-1 rounded text-white ${
                      item.daLienHe ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {item.daLienHe ? "Đã liên hệ" : "Chưa liên hệ"}
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(item.id)}
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

export default TuVanDKPage;
