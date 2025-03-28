import React, { useState } from 'react';
import { forgotPassword } from '../services/apiService';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await forgotPassword(email);
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Quên mật khẩu</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition"
        >
          Gửi yêu cầu
        </button>
        {message && <p className="mt-2 text-indigo-500">{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
