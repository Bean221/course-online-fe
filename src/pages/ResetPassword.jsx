// src/pages/ResetPassword.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/apiService';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Lấy token từ query parameter, ví dụ: ?token=xxx
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  useEffect(() => {
    if (!token) {
      setMessage("Token không hợp lệ hoặc không tồn tại!");
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (newPassword !== confirmNewPassword) {
      setMessage("Mật khẩu mới không khớp!");
      return;
    }
    try {
      const data = await resetPassword(token, newPassword);
      setMessage(data.message);
      // Sau khi thành công, điều hướng người dùng đến trang đăng nhập sau 2 giây
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message ||
        "Có lỗi xảy ra, vui lòng thử lại sau!"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">
          Trung tâm tiếng Anh số 1 Quy Nhơn
        </h1>
        <p className="text-center text-lg text-gray-600 mb-6">Đặt lại mật khẩu</p>
        {token ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="password"
              placeholder="Nhập mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
              required
            />
            <input
              type="password"
              placeholder="Xác nhận mật khẩu mới"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-400 text-white font-semibold py-2 rounded hover:bg-indigo-500 transition"
            >
              Đặt lại mật khẩu
            </button>
            {message && <p className="text-center text-indigo-400">{message}</p>}
          </form>
        ) : (
          <p className="text-center text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
