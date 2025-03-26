import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { resetPassword } from '../services/authService';
import { toast } from 'react-toastify';

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({ token, new_password: newPassword });
      toast.success('Đặt lại mật khẩu thành công! Vui lòng đăng nhập.');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Có lỗi xảy ra');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <input
        type="password"
        placeholder="Mật khẩu mới"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
        required
      />
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Đặt lại mật khẩu
      </button>
    </form>
  );
};

export default ResetPasswordForm;