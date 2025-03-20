import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#115560] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl text-gray-800 mb-8">
          Trang bạn tìm không tồn tại
        </h2>
        <Link
          to="/"
          className="px-4 py-2 bg-[#E53935] text-white rounded-md font-semibold 
                     hover:bg-red-600 transition-colors"
        >
          Quay về Trang Chủ
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
