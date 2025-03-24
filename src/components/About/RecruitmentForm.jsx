import React, { useState } from "react";

export default function RecruitmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Giảng viên", // Mặc định
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu ứng viên:", formData);
    alert("Gửi đơn thành công!");
    // Reset form (nếu muốn)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "Giảng viên",
      note: "",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Ứng tuyển tại The Forum</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Họ và Tên */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="fullName">
            Họ và Tên
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="phone">
            Số Điện Thoại
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Vị trí ứng tuyển */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="position">
            Vị trí ứng tuyển
          </label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Giảng viên">Giảng viên</option>
            <option value="Trợ giảng">Trợ giảng</option>
            <option value="Trợ lý">Trợ lý</option>
          </select>
        </div>

        {/* Ghi chú */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="note">
            Ghi chú
          </label>
          <textarea
            id="note"
            name="note"
            rows="3"
            value={formData.note}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Nút gửi */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600"
        >
          Gửi Đơn
        </button>
      </form>
    </div>
  );
}
