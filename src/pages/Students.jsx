import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { fetchUsers } from '../services/api';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => {
      const topStudents = data.filter(u => u.role === 'student').sort((a, b) => (b.rating || 0) - (a.rating || 0));
      setStudents(topStudents);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Học viên ưu tú</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {students.map(student => <UserCard key={student.id} {...student} />)}
      </div>
    </div>
  );
};

export default Students;