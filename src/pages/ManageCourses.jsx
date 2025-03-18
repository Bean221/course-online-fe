import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { fetchCourses } from '../services/api';

const ManageCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', price: '', teacher: '' });

  useEffect(() => {
    fetchCourses().then(data => setCourses(data)).catch(err => console.error(err));
  }, []);

  if (!user || (user.role !== 'admin' && user.role !== 'teacher')) {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        <p>Bạn không có quyền truy cập. Vui lòng <Link to="/login" className="text-primary hover:underline">đăng nhập</Link> với tài khoản Admin hoặc Giảng viên.</p>
      </div>
    );
  }

  const handleAddCourse = () => {
    const course = { id: courses.length + 1, ...newCourse };
    setCourses([...courses, course]);
    setNewCourse({ title: '', price: '', teacher: '' });
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-text py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Quản lý khóa học</h1>
        <div className="bg-secondary p-6 rounded-2xl shadow-custom mb-8">
          <h2 className="text-2xl font-semibold mb-4">Thêm khóa học mới</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Tên khóa học"
              value={newCourse.title}
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              className="p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="text"
              placeholder="Giá (VD: 500,000 VNĐ)"
              value={newCourse.price}
              onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
              className="p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="text"
              placeholder="Giảng viên"
              value={newCourse.teacher}
              onChange={(e) => setNewCourse({ ...newCourse, teacher: e.target.value })}
              className="p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <button onClick={handleAddCourse} className="w-full p-3 bg-primary text-text rounded-full hover:bg-blue-600 shadow-md">
            Thêm khóa học
          </button>
        </div>
        <div className="bg-secondary p-6 rounded-2xl shadow-custom">
          <h2 className="text-2xl font-semibold mb-4">Danh sách khóa học</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map(course => (
              <div key={course.id} className="bg-background p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-text-secondary">Giảng viên: {course.teacher}</p>
                <p className="text-primary font-bold">{course.price}</p>
                <div className="mt-2 space-x-2">
                  <Link to={`/course/edit/${course.id}`} className="text-primary hover:underline">Sửa</Link>
                  <button onClick={() => handleDeleteCourse(course.id)} className="text-red-400 hover:underline">Xóa</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;