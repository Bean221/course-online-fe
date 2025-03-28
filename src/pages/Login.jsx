import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md transform transition duration-300 hover:scale-105">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">Trung tâm ngoại ngữ số 1 Quy Nhơn BeanLearn</h2>
        <LoginForm />
        <div className="mt-6">
          <p className="text-center text-gray-600">
            Bạn chưa có tài khoản?{' '}
            <Link to="/register" className="text-blue-500 font-semibold hover:underline">
              Đăng ký ngay
            </Link>
          </p>
          <p className="text-center text-gray-600 mt-2">
            Quên mật khẩu?{' '}
            <Link to="/forgot-password" className="text-blue-500 font-semibold hover:underline">
              Đặt lại tại đây
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
