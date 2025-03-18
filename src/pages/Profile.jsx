import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        <p>Vui lòng <Link to="/login" className="text-primary hover:underline">đăng nhập</Link> để xem hồ sơ.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Hồ sơ cá nhân</h1>
        <div className="bg-secondary p-8 rounded-xl shadow-custom">
          <div className="flex items-center space-x-6">
            <img src="/assets/default-avatar.jpg" alt={user.username} className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-2xl font-semibold">{user.username}</h2>
              <p className="text-gray-300">Email: {user.email}</p>
              <p className="text-gray-300">Liên hệ: {user.contact || 'Chưa cung cấp'}</p>
              <p className="text-primary">Vai trò: {user.role === 'admin' ? 'Quản trị viên' : user.role === 'teacher' ? 'Giảng viên' : 'Học viên'}</p>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/change-password" className="px-6 py-2 bg-accent text-background rounded-full hover:bg-yellow-500 shadow-md">Đổi mật khẩu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;