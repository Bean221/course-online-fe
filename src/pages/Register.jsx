import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex flex-col items-center justify-center relative">
      {/* Phần header giới thiệu tên trung tâm */}
      <div className="absolute top-0 left-0 w-full h-48 bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">BeanLearn</h1>
      </div>

      {/* Khối form đăng ký */}
      <div className="bg-white rounded-lg shadow-lg p-8 z-10 mt-20 w-full max-w-md transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Trung tâm ngoại ngữ số 1 Quy Nhơn BeanLearn
        </h2>
        <RegisterForm />
        <p className="mt-4 text-center">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-medium underline hover:text-blue-700"
          >
            Đăng nhập ngay
          </Link>
        </p>
      </div>

      {/* Phần logo hoặc icon động */}
      <div className="absolute bottom-0 right-0 p-4">
        <img
          src={logo}
          alt="BeanLearn Logo"
          className="w-20 h-20 opacity-70 animate-bounce"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
