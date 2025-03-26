import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../services/authService';
import { toast } from 'react-toastify';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email });
      toast.success('Liên kết khôi phục đã được gửi qua email!');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Có lỗi xảy ra');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
        required
      />
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Gửi liên kết khôi phục
      </button>
    </form>
  );
};

export default ForgotPasswordForm;