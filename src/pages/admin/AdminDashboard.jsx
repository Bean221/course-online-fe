import React from 'react';
import AdminSidebar from '../../components/layout/AdminSidebar';

const AdminDashboard = () => {

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar userRole="admin" />      
      
      {/* Main Content */}
      <main className="flex-1 p-8 ml-64 transition-all duration-300 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Quản trị</h1>
        <div className="mt-6">
          {/* Nội dung chính của admin */}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;