import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';
import CourseCard from '../../components/CourseCard';
import { fetchCourses } from '../../services/api';

const StudentMyCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (user && user.enrolledCourses) {
      fetchCourses().then(data => {
        const enrolled = data.filter(c => user.enrolledCourses.includes(c.id));
        setCourses(enrolled);
      });
    }
  }, [user]);

  if (!user) return <div className="max-w-4xl mx-auto px-6 py-16 text-center">Vui lòng <Link to="/login" className="text-primary underline">đăng nhập</Link> để xem khóa học.</div>;

  return (
    <div className="flex">
      <Sidebar role="student" />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-primary mb-8">Khóa học của tôi</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map(course => <CourseCard key={course.id} {...course} />)}
        </div>
      </div>
    </div>
  );
};

export default StudentMyCourses;