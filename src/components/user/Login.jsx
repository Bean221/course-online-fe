import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi API login => thành công => chuyển trang
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Đăng Nhập</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="password">
            Mật Khẩu
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Đăng Nhập
        </button>
      </form>

      {/* Link quên mật khẩu + link đăng ký */}
      <div className="mt-4 flex flex-col space-y-2">
        <Link to="/forgot-password" className="text-blue-500 hover:underline">
          Quên mật khẩu?
        </Link>
        <p>
          Bạn chưa có tài khoản?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Đăng Ký
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
