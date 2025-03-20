import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function CoursesPage() {
  return (
    <div className="min-h-screen p-4 bg-white">
      <h1 className="text-2xl font-bold text-[#115560] mb-4">Trang Courses</h1>

      {/* Thanh điều hướng con (IELTS, SAT, Kids) */}
      <nav className="flex gap-4 mb-6">
        <Link
          to="ielts"
          className="text-red-600 font-semibold hover:underline"
        >
          IELTS
        </Link>
        <Link
          to="sat"
          className="text-red-600 font-semibold hover:underline"
        >
          SAT
        </Link>
        <Link
          to="kids"
          className="text-red-600 font-semibold hover:underline"
        >
          Kids
        </Link>
      </nav>

      {/* Nơi hiển thị nội dung trang con */}
      <div className="bg-gray-100 p-4 rounded-md">
        <Outlet />
      </div>
    </div>
  );
}

export default CoursesPage;
