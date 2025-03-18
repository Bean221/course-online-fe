import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Link đặt lại mật khẩu đã được gửi đến email của bạn (giả lập).');
  };

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center py-16">
      <div className="bg-secondary p-8 rounded-xl shadow-custom max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Quên mật khẩu</h1>
        {message && <p className="text-accent text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 bg-primary text-text rounded-full hover:bg-indigo-700 transition-all shadow-md"
          >
            Gửi link đặt lại
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Quay lại <Link to="/login" className="text-primary hover:underline">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;