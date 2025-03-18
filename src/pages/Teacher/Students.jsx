import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Sidebar from '../../components/Sidebar';
import { fetchUsers } from '../../services/api';

const TeacherStudents = () => {
  const { user } = useContext(AppContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => {
      const teacherCourses = user.courses || [];
      const enrolledStudents = data.filter(u => u.role === 'student' && u.enrolledCourses?.some(c => teacherCourses.includes(c)));
      setStudents(enrolledStudents);
    });
  }, [user]);

  if (!user || user.role !== 'teacher') return <div className="max-w-4xl mx-auto px-6 py-16 text-center">Bạn không có quyền truy cập.</div>;

  return (
    <div className="flex">
      <Sidebar role="teacher" />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-primary mb-8">Danh sách học viên</h1>
        <div className="space-y-4">
          {students.map(student => (
            <div key={student.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p><strong>Tên:</strong> {student.name}</p>
              <p><strong>Email:</strong> {student.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherStudents;