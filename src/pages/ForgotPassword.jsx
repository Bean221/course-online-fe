import React from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md transform transition duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Trung tâm ngoại ngữ số 1 Quy Nhơn BeanLearn</h2>
        <ForgotPasswordForm />
        <p className="mt-6 text-center text-gray-600">
          Nhớ lại mật khẩu?{' '}
          <Link to="/login" className="text-blue-500 font-semibold hover:underline">
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
