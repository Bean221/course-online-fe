import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { fetchUsers } from '../services/api';

const ManageStudents = () => {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', email: '', contact: '' });

  useEffect(() => {
    fetchUsers().then(data => {
      const studentList = data.filter(u => u.role === 'student');
      setStudents(studentList);
    }).catch(err => console.error(err));
  }, []);

  if (!user || (user.role !== 'admin' && user.role !== 'teacher')) {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        <p>Bạn không có quyền truy cập. Vui lòng <Link to="/login" className="text-primary hover:underline">đăng nhập</Link> với tài khoản Admin hoặc Giảng viên.</p>
      </div>
    );
  }

  const handleAddStudent = () => {
    const student = { id: students.length + 1, role: 'student', ...newStudent };
    setStudents([...students, student]);
    setNewStudent({ name: '', email: '', contact: '' });
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-text py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Quản lý học viên</h1>
        <div className="bg-secondary p-6 rounded-2xl shadow-custom mb-8">
          <h2 className="text-2xl font-semibold mb-4">Thêm học viên mới</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Tên học viên"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              className="p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="text"
              placeholder="Liên hệ"
              value={newStudent.contact}
              onChange={(e) => setNewStudent({ ...newStudent, contact: e.target.value })}
              className="p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <button onClick={handleAddStudent} className="w-full p-3 bg-primary text-text rounded-full hover:bg-blue-600 shadow-md">
            Thêm học viên
          </button>
        </div>
        <div className="bg-secondary p-6 rounded-2xl shadow-custom">
          <h2 className="text-2xl font-semibold mb-4">Danh sách học viên</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {students.map(student => (
              <div key={student.id} className="bg-background p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold">{student.name}</h3>
                <p className="text-text-secondary">Email: {student.email}</p>
                <p className="text-text-secondary">Liên hệ: {student.contact}</p>
                <div className="mt-2 space-x-2">
                  <Link to={`/student/edit/${student.id}`} className="text-primary hover:underline">Sửa</Link>
                  <button onClick={() => handleDeleteStudent(student.id)} className="text-red-400 hover:underline">Xóa</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;