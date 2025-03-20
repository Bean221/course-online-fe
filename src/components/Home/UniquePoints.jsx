import React, { useState } from 'react';
import diff1 from '../../assets/diff1.jpg';
import diff2 from '../../assets/diff2.jpg';
import diff3 from '../../assets/diff3.jpg';
import diff4 from '../../assets/diff4.jpg';
import diff5 from '../../assets/diff5.jpg';
import diff6 from '../../assets/diff6.jpg';

const DifferencesTheForum = () => {
  return (
    <div className="bg-[#F3FBFD] py-12 px-4 md:px-8">
      {/* Tiêu đề chính */}
      <h2 class="text-3xl md:text-4xl font-bold text-[#274C4F] text-center mb-2">
        Điểm khác biệt của <span className="text-[#E53935]">BeanLearn</span>
      </h2>

      {/* Row 1 - University Lecture */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
        {/* Phần chữ */}
        <div className="md:w-1/2 space-y-4">
          <h3 class="text-3xl md:text-4xl font-bold text-[#115560] text-center mb-4">
            Mô hình học độc quyền University Lecture
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg">
            <li>Mô hình học nâng band hiệu quả, vận dụng kiến thức một cách “thực chiến”</li>
            <li>60 tiết “Lecture” tự chọn khác nhau bên cạnh các buổi học cố định</li>
            <li>Đa dạng chủ đề, hỗ trợ định hướng và phát triển khả năng ngôn ngữ của bản thân</li>
            <li>Miễn phí 100% và không giới hạn cho toàn bộ học viên</li>
          </ul>
        </div>
        {/* Phần carousel */}
        <div className="md:w-1/2">
          <SimpleCarousel images={[diff1, diff2, diff3]} />
        </div>
      </div>

      {/* Row 2 - Khóa học trực tuyến */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Phần carousel */}
        <div className="md:w-1/2">
          <SimpleCarousel images={[diff4, diff5, diff6]} />
        </div>
        {/* Phần chữ */}
        <div className="md:w-1/2 space-y-4">
          <h3 class="text-3xl md:text-4xl font-bold text-[#115560] text-center mb-4">
            Khóa học trực tuyến bổ trợ chất lượng cao
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg">
            <li>Tất cả khóa học đều đi kèm Online Courses bổ trợ miễn phí 100%</li>
            <li>Video bài giảng học thuật biên soạn bởi đội ngũ chuyên gia BeanLearn</li>
            <li>Bổ trợ kiến thức, giúp học viên rèn luyện mọi lúc mọi nơi</li>
          </ul>
        </div>
      </div>

      {/* Row 3 - Giáo trình học thuật */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Phần chữ */}
        <div className="md:w-1/2 space-y-4">
          <h3 class="text-3xl md:text-4xl font-bold text-[#115560] text-center mb-4">
            Giáo trình học thuật chuyên sâu riêng biệt
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg">
            <li>Giáo trình giảng dạy được thiết kế riêng biệt theo đúng lộ trình</li>
            <li>Kết hợp các chương trình đào tạo được nghiên cứu chuyên sâu từ các nhà xuất bản hàng đầu về ngôn ngữ</li>
            <li>Đa dạng chủ đề, dạng bài có độ khó nâng dần, phù hợp với trình độ học viên</li>
          </ul>
        </div>
        {/* Phần carousel */}
        <div className="md:w-1/2">
          <SimpleCarousel images={[diff1, diff5, diff6]} />
        </div>
      </div>
    </div>
  );
};

// Carousel đơn giản (bạn có thể thay bằng bất kỳ thư viện carousel nào)
const SimpleCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((imgSrc, idx) => (
          <div key={idx} className="min-w-full h-full flex-shrink-0">
            <img
              src={imgSrc}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Nút điều hướng */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 
                       bg-white text-gray-800 rounded-full p-2 shadow hover:bg-gray-100"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 
                       bg-white text-gray-800 rounded-full p-2 shadow hover:bg-gray-100"
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
};

export default DifferencesTheForum;
