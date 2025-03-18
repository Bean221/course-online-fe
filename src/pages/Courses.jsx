import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { fetchCourses } from '../services/api';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  useEffect(() => {
    fetchCourses().then(data => {
      const filtered = query ? data.filter(c => c.title.toLowerCase().includes(query.toLowerCase())) : data;
      setCourses(filtered);
    });
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Danh sách khóa học</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map(course => <CourseCard key={course.id} {...course} />)}
      </div>
    </div>
  );
};

export default Courses;