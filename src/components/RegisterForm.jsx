import React, { useState } from 'react';
import { register } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const initialState = { full_name: '', phone: '', email: '', password: '', role: 'student' };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate('/login');
    } catch {
      setError('Registration failed, please check your input.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-8 rounded-xl shadow-xl max-w-md mx-auto transform transition duration-300 hover:shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Đăng Ký</h2>
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      
      <div className="mb-4">
        <label htmlFor="full_name" className="block text-gray-700 font-medium mb-1">
          Họ và tên
        </label>
        <input
          type="text"
          name="full_name"
          id="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Nhập họ và tên"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
          Số điện thoại
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Nhập số điện thoại"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Nhập email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
          Mật khẩu
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Nhập mật khẩu"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
      >
        Đăng ký
      </button>
    </form>
  );
};

export default RegisterForm;
