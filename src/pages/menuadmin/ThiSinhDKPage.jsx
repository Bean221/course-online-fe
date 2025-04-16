import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";

const ThiSinhDKPage = () => {
  // Giả lập dữ liệu
  const [data, setData] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "a@example.com",
      phone: "0901...",
      ngayDangKy: "10/04/2025",
      ngayThi: "15/04/2025",
      trangThaiThi: "Đã thi",
      diemThi: 6.5,
      loaiThi: "Thi thử",
      thanhToan: true,
    },
    {
      id: 2,
      name: "Trần B",
      email: "b@example.com",
      phone: "0982...",
      ngayDangKy: "11/04/2025",
      ngayThi: "20/04/2025",
      trangThaiThi: "Chưa thi",
      diemThi: null,
      loaiThi: "Thi thật",
      thanhToan: false,
    },
  ]);

  // State để giữ giá trị tìm kiếm/lọc (skeleton)
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    // TODO: Lọc dữ liệu theo keyword
  };

  const handleDelete = (id) => {
    // TODO: Xóa đăng ký
    setData(prev => prev.filter(item => item.id !== id));
  };

  const userRole = localStorage.getItem("userRole"); // hoặc hardcode test: "admin" / "manager"

  return (
    <div className="flex">
      {/* Sidebar chỉ hiển thị đúng role */}
      <AdminSidebar userRole={userRole} />

      {/* Nội dung trang */}
      <div className="ml-64 p-4 text-slate-800 w-full">
        <h1 className="text-2xl font-semibold mb-4">
          Quản lý thí sinh đăng ký thi
        </h1>

        {/* Khu vực lọc & tìm kiếm */}
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Tìm theo tên/email..."
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

        {/* Bảng danh sách */}
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 text-left">Họ Tên</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Ngày ĐK</th>
              <th className="p-2 text-left">Ngày thi</th>
              <th className="p-2 text-left">Trạng thái</th>
              <th className="p-2 text-left">Điểm</th>
              <th className="p-2 text-left">Loại thi</th>
              <th className="p-2 text-left">Thanh toán</th>
              <th className="p-2 text-left">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {data.map((th) => (
              <tr key={th.id} className="border-b">
                <td className="p-2">{th.name}</td>
                <td className="p-2">{th.email}</td>
                <td className="p-2">{th.ngayDangKy}</td>
                <td className="p-2">{th.ngayThi}</td>
                <td className="p-2">{th.trangThaiThi}</td>
                <td className="p-2">{th.diemThi ? th.diemThi : "-"}</td>
                <td className="p-2">{th.loaiThi}</td>
                <td className="p-2">
                  {th.thanhToan ? "Đã thanh toán" : "Chưa thanh toán"}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(th.id)}
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

export default ThiSinhDKPage;
