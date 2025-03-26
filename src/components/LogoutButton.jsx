import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Đăng xuất thành công!');
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
    >
      Đăng xuất
    </button>
  );
};

export default LogoutButton;