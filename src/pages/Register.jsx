import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '', contact: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-secondary p-8 rounded-lg shadow-lg max-w-md w-full text-text">
        <h1 className="text-3xl font-bold text-center mb-6">Đăng ký</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="text"
            placeholder="Thông tin liên lạc"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 bg-primary text-text rounded-full hover:bg-indigo-700 transition-all shadow-md"
          >
            Đăng ký
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Đã có tài khoản? <Link to="/login" className="text-primary hover:underline">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;