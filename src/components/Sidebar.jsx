import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const links = {
    student: [
      { to: '/student/dashboard', label: 'Bảng điều khiển' },
      { to: '/student/my-courses', label: 'Khóa học của tôi' },
      { to: '/student/progress', label: 'Quá trình học tậptập' },
    ],
    teacher: [
      { to: '/teacher/dashboard', label: 'Bảng điều khiển' },
      { to: '/teacher/courses', label: 'Quản lý khóa học' },
    ],
    admin: [
      { to: '/admin/dashboard', label: 'Bảng điều khiển' },
      { to: '/admin/users', label: 'Quản lý người dùng' },
      { to: '/admin/courses', label: 'Quản lý khóa học' },
    ],
  };

  return (
    <div className="w-64 bg-white shadow-lg p-6">
      <h2 className="text-xl font-bold text-primary mb-6">{role === 'student' ? 'Học viên' : role === 'teacher' ? 'Giảng viên' : 'Admin'}</h2>
      <nav className="space-y-4">
        {links[role].map(link => (
          <Link key={link.to} to={link.to} className="block text-gray-700 hover:text-primary">{link.label}</Link>
        ))}
      </nav>
    </div>
  );
};  

export default Sidebar;