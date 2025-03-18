import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';

const TeacherDashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== 'teacher') return <div className="max-w-4xl mx-auto px-6 py-16 text-center">Bạn không có quyền truy cập.</div>;

  return (
    <div className="flex">
      <Sidebar role="teacher" />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-primary mb-8">Bảng điều khiển giảng viên</h1>
        <p>Chào mừng {user.name}!</p>
      </div>
    </div>
  );
};

export default TeacherDashboard;