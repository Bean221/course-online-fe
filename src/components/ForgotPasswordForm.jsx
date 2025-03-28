import React, { useState } from 'react';
import { forgotPassword } from '../services/apiService';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email });
      setMessage('Vui lòng kiểm tra email để nhận hướng dẫn đặt lại mật khẩu.');
      setError('');
    } catch {
      setError('Gửi email đặt lại mật khẩu thất bại. Vui lòng thử lại.');
      setMessage('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-8 rounded-xl shadow-xl max-w-md mx-auto transform transition duration-300 hover:scale-105"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Quên mật khẩu</h2>
      {message && <div className="text-green-500 text-center mb-4">{message}</div>}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email của bạn"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
      >
        Gửi Email Đặt Lại
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
