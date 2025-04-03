// BannerCourse.jsx
import React from "react";
import AHUY from "../assets/ahuy.png"

const BannerCourse = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
        {/* Phần nội dung khóa học */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            Khóa học IELTS Toàn Diện
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Luyện thi IELTS chuyên sâu theo mô hình University Lecture
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
            <li>Tăng 0.5 - 2 BAND nhanh chóng, vượt trội</li>
            <li>Phương pháp thực thụ phong cách giảng dạy Đại học</li>
            <li>Học liệu chi tiết, ôn tập hiệu quả</li>
            <li>Kiểm tra đầu vào miễn phí</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md text-center hover:bg-red-600 transition"
            >
              Kiểm tra đầu vào
            </a>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-white border border-indigo-600 text-indigo-600 font-semibold rounded-md text-center hover:bg-indigo-50 transition"
            >
              Thi IELTS Online
            </a>
          </div>
        </div>
        {/* Phần hình ảnh giảng viên */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="max-w-sm">
            <img
              src= {AHUY}
              alt="Giảng viên IELTS"
              className="w-full rounded-md shadow-md"
            />
            <p className="mt-4 text-center text-gray-700">
              <span className="font-semibold">IELTS 9.0, NCS.TS</span> – Đại học Nanyang &amp; University of New Hampshire
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCourse;
