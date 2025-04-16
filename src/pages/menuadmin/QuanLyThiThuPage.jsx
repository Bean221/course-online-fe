import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";

const QuanLyThiThuPage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Nguyễn A",
      email: "a@example.com",
      ngayThi: "01/04/2025",
      overall: 6.5,
      reading: 6.0,
      listening: 6.5,
      writing: 6.0,
      speaking: 7.0,
    },
    {
      id: 2,
      name: "Trần B",
      email: "b@example.com",
      ngayThi: "05/04/2025",
      overall: 7.0,
      reading: 6.5,
      listening: 7.0,
      writing: 7.0,
      speaking: 7.5,
    },
  ]);

  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    // TODO: Lọc dữ liệu theo keyword
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDetail = (id) => {
    // TODO: Hiển thị chi tiết bài thi
    alert("Xem chi tiết bài thi: " + id);
  };

  const userRole = localStorage.getItem("userRole"); // hoặc hardcode test: "admin" / "manager"

  return (
    <div className="flex">
      {/* Sidebar chỉ hiển thị đúng role */}
      <AdminSidebar userRole={userRole} />

      {/* Nội dung trang */}
      <div className="ml-64 p-4 w-full">
        <h1 className="text-2xl font-semibold mb-4">Quản lý bài thi thử</h1>
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
              <th className="p-2 text-left">Ngày thi</th>
              <th className="p-2 text-left">Overall</th>
              <th className="p-2 text-left">Reading</th>
              <th className="p-2 text-left">Listening</th>
              <th className="p-2 text-left">Writing</th>
              <th className="p-2 text-left">Speaking</th>
              <th className="p-2 text-left">Chi tiết</th>
              <th className="p-2 text-left">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {data.map((thi) => (
              <tr key={thi.id} className="border-b">
                <td className="p-2">{thi.name}</td>
                <td className="p-2">{thi.email}</td>
                <td className="p-2">{thi.ngayThi}</td>
                <td className="p-2">{thi.overall}</td>
                <td className="p-2">{thi.reading}</td>
                <td className="p-2">{thi.listening}</td>
                <td className="p-2">{thi.writing}</td>
                <td className="p-2">{thi.speaking}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDetail(thi.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Xem
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(thi.id)}
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

export default QuanLyThiThuPage;
