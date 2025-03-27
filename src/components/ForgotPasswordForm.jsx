import React, { useState } from 'react';
import { forgotPassword } from '../services/apiService';
const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email });
      // Trong thực tế bạn không nên trả về token, chỉ thông báo đã gửi email
      setMessage('Please check your email for reset instructions.');
      setError('');
    } catch {
      setError('Failed to send reset email. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
      {message && <div className="text-green-500 mb-2">{message}</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send Reset Email
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
