import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Gửi email khôi phục mật khẩu cho:', email);
    // Gọi API quên mật khẩu => server gửi mail
    alert('Email khôi phục đã được gửi, vui lòng kiểm tra hộp thư!');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quên Mật Khẩu</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">
            Nhập Email
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
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Gửi Yêu Cầu
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
