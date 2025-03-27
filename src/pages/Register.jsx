import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <RegisterForm />
      <p className="mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
