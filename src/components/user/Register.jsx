import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Đăng ký với dữ liệu:', formData);
    // Gọi API đăng ký => Nếu thành công => điều hướng sang login
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Đăng Ký</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">
            Họ Tên
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="password">
            Mật Khẩu
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="border rounded w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Đăng Ký
        </button>
      </form>

      {/* Link sang trang Quên mật khẩu */}
      <div className="mt-4 flex flex-col space-y-2">
        <Link
          to="/forgot-password"
          className="text-blue-500 hover:underline"
        >
          Quên mật khẩu?
        </Link>

        {/* Nếu muốn thêm link sang trang Đăng Nhập */}
        <p>
          Bạn đã có tài khoản?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Đăng Nhập
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
