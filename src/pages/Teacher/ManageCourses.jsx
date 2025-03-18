import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';
import { fetchCourses, createCourse } from '../../services/api';

const TeacherManageCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', price: '', description: '' });

  useEffect(() => {
    fetchCourses().then(data => setCourses(data.filter(c => c.teacher === user.name)));
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse({ ...newCourse, teacher: user.name }).then(course => setCourses([...courses, course]));
    setNewCourse({ title: '', price: '', description: '' });
  };

  if (!user || user.role !== 'teacher') return <div className="max-w-4xl mx-auto px-6 py-16 text-center">Bạn không có quyền truy cập.</div>;

  return (
    <div className="flex">
      <Sidebar role="teacher" />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-primary mb-8">Quản lý khóa học</h1>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-white p-6 rounded-lg shadow-md">
          <input type="text" placeholder="Tên khóa học" value={newCourse.title} onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} className="w-full p-3 rounded-lg border border-gray-300" />
          <input type="text" placeholder="Giá" value={newCourse.price} onChange={e => setNewCourse({ ...newCourse, price: e.target.value })} className="w-full p-3 rounded-lg border border-gray-300" />
          <textarea placeholder="Mô tả" value={newCourse.description} onChange={e => setNewCourse({ ...newCourse, description: e.target.value })} className="w-full p-3 rounded-lg border border-gray-300" />
          <button type="submit" className="w-full p-3 bg-primary text-white rounded-full hover:bg-blue-700 transition-all">Tạo khóa học</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p>{course.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherManageCourses;