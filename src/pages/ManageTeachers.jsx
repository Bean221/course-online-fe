import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { fetchUsers } from '../services/api';

const ManageTeachers = () => {
  const { user } = useContext(AuthContext);
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', contact: '' });

  useEffect(() => {
    fetchUsers().then(data => {
      const teacherList = data.filter(u => u.role === 'teacher');
      setTeachers(teacherList);
    }).catch(err => console.error(err));
  }, []);

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        <p>Bạn không có quyền truy cập. Vui lòng <Link to="/login" className="text-primary hover:underline">đăng nhập</Link> với tài khoản Admin.</p>
      </div>
    );
  }

  const handleAddTeacher = () => {
    const teacher = { id: teachers.length + 1, role: 'teacher', ...newTeacher };
    setTeachers([...teachers, teacher]);
    setNewTeacher({ name: '', email: '', contact: '' });
  };

  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-text py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Quản lý giảng viên</h1>
        <div className="bg-secondary p-6 rounded-2xl shadow-custom mb-8">
          <h2 className="text-2xl font-semibold mb-4">Thêm giảng viên mới</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Tên giảng viên"
              value={newTeacher.name}
              onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
              className="p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={newTeacher.email}
              onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
              className="p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="text"
              placeholder="Liên hệ"
              value={newTeacher.contact}
              onChange={(e) => setNewTeacher({ ...newTeacher, contact: e.target.value })}
              className="p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <button onClick={handleAddTeacher} className="w-full p-3 bg-primary text-text rounded-full hover:bg-blue-600 shadow-md">
            Thêm giảng viên
          </button>
        </div>
        <div className="bg-secondary p-6 rounded-2xl shadow-custom">
          <h2 className="text-2xl font-semibold mb-4">Danh sách giảng viên</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teachers.map(teacher => (
              <div key={teacher.id} className="bg-background p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold">{teacher.name}</h3>
                <p className="text-text-secondary">Email: {teacher.email}</p>
                <p className="text-text-secondary">Liên hệ: {teacher.contact}</p>
                <div className="mt-2 space-x-2">
                  <Link to={`/teacher/edit/${teacher.id}`} className="text-primary hover:underline">Sửa</Link>
                  <button onClick={() => handleDeleteTeacher(teacher.id)} className="text-red-400 hover:underline">Xóa</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTeachers;