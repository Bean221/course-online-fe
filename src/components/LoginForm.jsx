import React, { useState } from 'react';
import { login } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(credentials);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } catch (err) {
      console.error(err); // Log error for debugging
      setError('Login failed, please check your credentials.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-8 rounded-xl shadow-xl max-w-md mx-auto transform transition duration-300 hover:scale-105"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Đăng nhập</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      
      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Nhập email của bạn"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Mật khẩu
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Nhập mật khẩu"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
      >
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;
