import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import UserCard from '../components/UserCard';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => {
      const teacherList = data.filter(u => u.role === 'teacher');
      setTeachers(teacherList);
    }).catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-background text-text py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Danh sách giảng viên</h1>
        {teachers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map(teacher => <UserCard key={teacher.id} {...teacher} />)}
          </div>
        ) : (
          <p className="text-center text-gray-400">Chưa có giảng viên nào.</p>
        )}
      </div>
    </div>
  );
};

export default Teachers;