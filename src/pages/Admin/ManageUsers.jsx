import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';
import { fetchUsers } from '../../services/api';

const AdminManageUsers = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  if (!user || user.role !== 'admin') return <div className="max-w-4xl mx-auto px-6 py-16 text-center">Bạn không có quyền truy cập.</div>;

  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-primary mb-8">Quản lý người dùng</h1>
        <div className="space-y-4">
          {users.map(u => (
            <div key={u.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <p><strong>Tên:</strong> {u.name}</p>
                <p><strong>Email:</strong> {u.email}</p>
                <p><strong>Vai trò:</strong> {u.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminManageUsers;