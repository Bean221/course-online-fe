import React from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;