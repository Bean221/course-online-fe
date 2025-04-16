import React from 'react';
import AdminSidebar from '../../components/layout/AdminSidebar';

const ManagerDashboard = () => {
  localStorage.setItem("userRole", "manager");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar userRole="manager" />      
      {/* Main Content */}
      <main className="flex-1 p-8 ml-64 transition-all duration-300 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Quản lý</h1>
        <div className="mt-6">
          {/* Nội dung chính của manager */}
          
        </div>
      </main>
    </div>
  );
};

export default ManagerDashboard;