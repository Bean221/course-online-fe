import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;