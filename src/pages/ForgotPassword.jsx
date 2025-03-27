import React from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <ForgotPasswordForm />
      <p className="mt-4">
        Remembered your password?{' '}
        <Link to="/login" className="text-blue-500 underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
