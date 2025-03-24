import React, { useState } from 'react';

function RegisterIELTS() {
  // Tạo state để lưu thông tin form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    testDate: '',
  });

  // Hàm xử lý khi người dùng thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tùy theo nhu cầu: gửi dữ liệu lên API, v.v.
    console.log('Dữ liệu form:', formData);
    alert('Bạn đã đăng ký thành công!');
    // Reset form (nếu muốn)
    setFormData({
      name: '',
      email: '',
      phone: '',
      testDate: '',
    });
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Đăng Kí Thi IELTS</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Họ tên */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">
            Họ Tên
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Nhập họ tên"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Nhập email"
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="phone">
            Số Điện Thoại
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Nhập số điện thoại"
          />
        </div>

        {/* Ngày thi */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="testDate">
            Ngày Thi Dự Kiến
          </label>
          <input
            id="testDate"
            name="testDate"
            type="date"
            required
            value={formData.testDate}
            onChange={handleChange}
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>

        {/* Nút Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
        >
          Đăng Ký
        </button>
      </form>
    </div>
  );
}

export default RegisterIELTS;
