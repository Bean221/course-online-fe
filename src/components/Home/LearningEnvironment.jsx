import React, { useState } from "react";
import MT1 from "../../assets/MT1.png";
import MT2 from "../../assets/MT2.png";
import MT3 from "../../assets/MT3.png";
import MT4 from "../../assets/MT4.png";
import MT5 from "../../assets/MT5.png";

const images = [MT1, MT2, MT3, MT4, MT5];

function LearningEnvironment() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hiển thị 4 ảnh/lần => trượt 25% mỗi lần
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 < images.length - 3 ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : images.length - 4
    );
  };

  return (
    <section className="py-10 px-4 bg-[#ECF5FF]">
      {/* Tiêu đề */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#115560] mb-6">
        Môi trường học tập năng động - chuẩn quốc tế
      </h2>

      {/* Đoạn mô tả */}
      <p className="max-w-2xl mx-auto text-center text-gray-700 mb-8">
        Tại BeanLearn, chúng tôi luôn chú trọng xây dựng không gian học tập 
        hiện đại, sáng tạo, giúp học viên trải nghiệm phương pháp học tập 
        hiệu quả và truyền cảm hứng.
      </p>

      {/* Container chính */}
      <div className="relative mx-auto w-[900px] overflow-hidden">
        {/* Nút Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 
                     bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
        >
          ❮
        </button>

        {/* Thanh Track (chứa tất cả items) */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-[25%] flex-shrink-0 px-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt={`MT${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Nút Next */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 
                     bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default LearningEnvironment;
