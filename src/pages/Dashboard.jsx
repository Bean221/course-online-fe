// src/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Xóa token khỏi localStorage
    navigate('/login'); // Chuyển hướng về trang đăng nhập
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded">
        Đăng xuất
      </button>
    </div>
  );
};

export default Dashboard;