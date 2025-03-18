import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchCourses, createCourse } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', price: '', description: '' });

  useEffect(() => {
    fetchCourses().then(data => setCourses(data));
  }, []);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    if (user && (user.role === 'teacher' || user.role === 'admin')) {
      const addedCourse = await createCourse(newCourse, user.id);
      setCourses([...courses, addedCourse]);
      setNewCourse({ title: '', price: '', description: '' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Danh sách khóa học</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map(course => <CourseCard key={course.id} {...course} />)}
      </div>
      {(user?.role === 'teacher' || user?.role === 'admin') && (
        <div className="mt-12 bg-white p-6 rounded-lg shadow-custom">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thêm khóa học mới</h2>
          <form onSubmit={handleAddCourse} className="space-y-6">
            <input
              type="text"
              placeholder="Tên khóa học"
              value={newCourse.title}
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              placeholder="Giá (VD: 1.500.000 VNĐ)"
              value={newCourse.price}
              onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
            <textarea
              placeholder="Mô tả khóa học"
              value={newCourse.description}
              onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300"
              rows="4"
            />
            <button
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-all"
            >
              Thêm khóa học
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Courses;