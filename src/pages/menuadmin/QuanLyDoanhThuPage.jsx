import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";

const QuanLyDoanhThuPage = () => {
  const [stat] = useState([
    {
      id: 1,
      date: "2025-04-10",
      revenue: 1000000,
    },
    {
      id: 2,
      date: "2025-04-11",
      revenue: 1500000,
    },
  ]);

  // Tính tổng doanh thu:
  const total = stat.reduce((acc, item) => acc + item.revenue, 0);

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar userRole="admin" />

      {/* Nội dung trang */}
      <div className="ml-64 p-4 w-full">
        <h1 className="text-2xl font-semibold mb-4">Quản lý doanh thu</h1>
        <div className="mb-4">
          <p>
            Tổng doanh thu (thử): {total.toLocaleString()} đ
          </p>
        </div>

        <table className="w-full bg-white shadow rounded mb-4">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 text-left">Ngày</th>
              <th className="p-2 text-left">Doanh thu</th>
            </tr>
          </thead>
          <tbody>
            {stat.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{item.date}</td>
                <td className="p-2">
                  {item.revenue.toLocaleString()} đ
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Nguồn thu nhập</h3>
          <ul className="list-disc ml-5 mt-2">
            <li>Phí thi IELTS (thi thật)</li>
            <li>Phí thi thử</li>
            <li>
              Học phí các khóa học (IELTS, SAT, Tiếng Anh trẻ em, ...)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuanLyDoanhThuPage;
