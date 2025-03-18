import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });
  const [message, setMessage] = useState('');

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        <p>Vui lòng <Link to="/login" className="text-primary hover:underline">đăng nhập</Link> để đổi mật khẩu.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      setMessage('Mật khẩu mới không khớp!');
      return;
    }
    setMessage('Đổi mật khẩu thành công (giả lập).');
  };

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center py-16">
      <div className="bg-secondary p-8 rounded-xl shadow-custom max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Đổi mật khẩu</h1>
        {message && <p className={message.includes('thành công') ? 'text-accent' : 'text-red-400'}>{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="password"
            placeholder="Mật khẩu cũ"
            value={form.oldPassword}
            onChange={(e) => setForm({ ...form, oldPassword: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="password"
            placeholder="Mật khẩu mới"
            value={form.newPassword}
            onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="password"
            placeholder="Xác nhận mật khẩu mới"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 bg-primary text-text rounded-full hover:bg-indigo-700 transition-all shadow-md"
          >
            Đổi mật khẩu
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Quay lại <Link to="/profile" className="text-primary hover:underline">Hồ sơ</Link>
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;