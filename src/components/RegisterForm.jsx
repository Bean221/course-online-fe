import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ full_name: fullName, email, password, phone });
      toast.success('Đăng ký thành công! Vui lòng đăng nhập.');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Đăng ký thất bại');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Họ và tên"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="text"
        placeholder="Số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Đăng ký
      </button>
    </form>
  );
};

export default RegisterForm;