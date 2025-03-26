import React from 'react';
import ResetPasswordForm from '../components/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;