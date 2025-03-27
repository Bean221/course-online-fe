import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <LoginForm />
      <p className="mt-4">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-500 underline">
          Register here
        </Link>
      </p>
      <p className="mt-2">
        Forgot your password?{' '}
        <Link to="/forgot-password" className="text-blue-500 underline">
          Reset here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
