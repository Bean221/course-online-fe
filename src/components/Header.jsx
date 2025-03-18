import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaUser, FaCog, FaLock, FaSearch, FaBook, FaUsers } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background text-text shadow-lg py-4 px-6 flex items-center justify-between">
      <Link to="/" className="flex-shrink-0">
        <img src="/logo.png" alt="Bean Learning" className="h-10" />
      </Link>
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-full p-3 pl-10 rounded-full bg-secondary text-text placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary shadow-md hover:bg-gray-700 transition-all"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-6 flex-shrink-0">
        <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
        <Link to="/courses" className="hover:text-primary transition-colors">Khóa học</Link>
        <Link to="/teachers" className="hover:text-primary transition-colors">Giảng viên</Link>
        <Link to="/recruitment" className="hover:text-primary transition-colors">Tuyển dụng</Link>
        <div className="relative">
          <img
            src="/assets/default-avatar.jpg"
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-primary cursor-pointer"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          />
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-secondary text-text shadow-lg rounded-lg">
              {user ? (
                <>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                    <FaUser /> <span>Hồ sơ</span>
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                    <FaCog /> <span>Cài đặt hệ thống</span>
                  </Link>
                  <Link to="/change-password" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                    <FaLock /> <span>Đổi mật khẩu</span>
                  </Link>
                  {user.role === 'admin' && (
                    <>
                      <Link to="/manage-courses" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                        <FaBook /> <span>Quản lý khóa học</span>
                      </Link>
                      <Link to="/manage-teachers" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                        <FaUsers /> <span>Quản lý giảng viên</span>
                      </Link>
                      <Link to="/manage-students" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                        <FaUsers /> <span>Quản lý học viên</span>
                      </Link>
                    </>
                  )}
                  {user.role === 'teacher' && (
                    <>
                      <Link to="/manage-courses" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                        <FaBook /> <span>Quản lý khóa học</span>
                      </Link>
                      <Link to="/manage-students" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                        <FaUsers /> <span>Quản lý học viên</span>
                      </Link>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2"
                  >
                    <FaSignOutAlt /> <span>Đăng xuất</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                    <FaSignInAlt /> <span>Đăng nhập</span>
                  </Link>
                  <Link to="/register" className="block px-4 py-2 hover:bg-gray-700 flex items-center space-x-2">
                    <FaUser /> <span>Đăng ký</span>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-secondary text-text shadow-lg md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" className="hover:text-primary">Trang chủ</Link>
            <Link to="/courses" className="hover:text-primary">Khóa học</Link>
            <Link to="/teachers" className="hover:text-primary">Giảng viên</Link>
            <Link to="/recruitment" className="hover:text-primary">Tuyển dụng</Link>
            {user ? (
              <>
                <Link to="/profile" className="hover:text-primary flex items-center space-x-2"><FaUser /> <span>Hồ sơ</span></Link>
                <Link to="/settings" className="hover:text-primary flex items-center space-x-2"><FaCog /> <span>Cài đặt hệ thống</span></Link>
                <Link to="/change-password" className="hover:text-primary flex items-center space-x-2"><FaLock /> <span>Đổi mật khẩu</span></Link>
                {user.role === 'admin' && (
                  <>
                    <Link to="/manage-courses" className="hover:text-primary flex items-center space-x-2"><FaBook /> <span>Quản lý khóa học</span></Link>
                    <Link to="/manage-teachers" className="hover:text-primary flex items-center space-x-2"><FaUsers /> <span>Quản lý giảng viên</span></Link>
                    <Link to="/manage-students" className="hover:text-primary flex items-center space-x-2"><FaUsers /> <span>Quản lý học viên</span></Link>
                  </>
                )}
                {user.role === 'teacher' && (
                  <>
                    <Link to="/manage-courses" className="hover:text-primary flex items-center space-x-2"><FaBook /> <span>Quản lý khóa học</span></Link>
                    <Link to="/manage-students" className="hover:text-primary flex items-center space-x-2"><FaUsers /> <span>Quản lý học viên</span></Link>
                  </>
                )}
                <button onClick={handleLogout} className="hover:text-primary flex items-center space-x-2"><FaSignOutAlt /> <span>Đăng xuất</span></button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-primary flex items-center space-x-2"><FaSignInAlt /> <span>Đăng nhập</span></Link>
                <Link to="/register" className="hover:text-primary flex items-center space-x-2"><FaUser /> <span>Đăng ký</span></Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;