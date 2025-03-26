import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      toast.success('Đăng nhập thành công!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Đăng nhập thất bại');
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
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
        required
      />
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Đăng nhập
      </button>
      <a href="/forgot-password" className="block text-blue-600 text-sm text-center hover:underline">
        Quên mật khẩu?
      </a>
    </form>
  );
};

export default LoginForm;