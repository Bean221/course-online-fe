import React from 'react';
import course1 from '../../assets/course1.jpg';
import course2 from '../../assets/course2.jpg';
import course3 from '../../assets/course3.jpg';

const courses = [
  {
    title: 'Khóa học IELTS',
    description:
      'Khóa học IELTS giúp bạn rèn luyện 4 kỹ năng Nghe, Nói, Đọc, Viết một cách chuyên sâu.',
    moreInfo:
      'Phương pháp hiện đại, lộ trình cá nhân hóa và hệ thống luyện đề “thực chiến” giúp học viên nâng band nhanh.',
    image: course1,
    detailLink: '/courses/ielts',
  },
  {
    title: 'Khóa học SAT',
    description:
      'Chương trình luyện thi SAT tại BeanLearn, tập trung phát triển tư duy logic và kỹ năng đọc hiểu.',
    moreInfo:
      'Nâng cao điểm số với chiến lược làm bài rõ ràng, bộ đề bám sát cấu trúc đề thi thật.',
    image: course2,
    detailLink: '/courses/sat',
  },
  {
    title: 'Tiếng Anh Trẻ Em',
    description:
      'Khóa học dành cho trẻ em và thanh thiếu niên, xây dựng nền tảng tiếng Anh vững chắc từ sớm.',
    moreInfo:
      'Áp dụng mô hình học “vừa chơi vừa học”, khuyến khích tư duy sáng tạo và tự tin giao tiếp.',
    image: course3,
    detailLink: '/courses/kids',
  },
];

function CoursesSection() {
  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-screen-lg mx-auto">
        {/* Tiêu đề chính */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#115560] mb-6">
          CÁC KHÓA HỌC TẠI BEANLEARN
        </h2>

        {/* Tab "ALL" với gạch đỏ bên dưới */}
        <div className="flex justify-center mb-8">
          <div className="relative text-lg font-semibold text-gray-700 cursor-pointer uppercase">
            ALL
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#E53935]" />
          </div>
        </div>

        {/* Danh sách khóa học */}
        <div className="space-y-6">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;

function CourseCard({ course }) {
  // Click ảnh
  const handleImageClick = () => {
    alert(`Bạn đã click vào ảnh: ${course.title}`);
  };

  // Click nút Chi tiết
  const handleDetailClick = () => {
    window.location.href = course.detailLink;
  };

  return (
    <div className="bg-[#F8F8F8] rounded-md p-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
      {/* Ảnh + hiệu ứng */}
      <div
        className="cursor-pointer transition-transform duration-300 hover:scale-105 
                   flex-shrink-0 w-full md:w-1/4 max-h-40 md:max-h-44 overflow-hidden rounded-md"
        onClick={handleImageClick}
      >
        <img
          src={course.image}
          alt={course.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Nội dung */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{course.title}</h3>
        <p className="text-gray-700 mb-2">{course.description}</p>
        <p className="text-gray-700">{course.moreInfo}</p>
      </div>

      {/* Nút "Chi tiết" bên phải */}
      <button
        onClick={handleDetailClick}
        className="bg-[#E53935] text-white px-4 py-2 rounded-md font-semibold
                   hover:bg-red-600 transition-colors cursor-pointer"
      >
        Chi tiết
      </button>
    </div>
  );
}
