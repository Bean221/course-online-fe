import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';

const StudentProgress = () => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== 'student') return <div className="max-w-4xl mx-auto px-6 py-16 text-center">Bạn không có quyền truy cập.</div>;

  return (
    <div className="flex">
      <Sidebar role="student" />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-primary mb-8">Tiến độ học tập</h1>
        <p>Tiến độ của bạn sẽ hiển thị ở đây.</p>
      </div>
    </div>
  );
};

export default StudentProgress;