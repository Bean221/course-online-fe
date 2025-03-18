import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.message);
      setError(error.message || 'Email hoặc mật khẩu không đúng!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-secondary p-8 rounded-lg shadow-lg max-w-md w-full text-text">
        <h1 className="text-3xl font-bold text-center mb-6">Đăng nhập</h1>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <button
            type="submit"
            className="w-full p-3 bg-primary text-text rounded-full hover:bg-indigo-700 transition-all shadow-md"
          >
            Đăng nhập
          </button>
        </form>
        <div className="mt-4 text-center text-gray-400">
          <Link to="/forgot-password" className="text-primary hover:underline">Quên mật khẩu?</Link>
        </div>
        <p className="mt-2 text-center text-gray-400">
          Chưa có tài khoản? <Link to="/register" className="text-primary hover:underline">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;