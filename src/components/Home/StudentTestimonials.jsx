import React, { useState } from "react";
import fb1 from "../../assets/fb1.png";
import fb2 from "../../assets/fb2.png";
import fb3 from "../../assets/fb3.png";
import fb4 from "../../assets/fb4.png";

const testimonials = [
  {
    name: "Nguyễn Hoàng Hải",
    feedback:
      "Mình đã theo học IELTS tại BeanLearn được 2 khóa, có thể dễ cảm thấy trình độ của bản thân phát triển rất rõ.",
    image: fb1,
  },
  {
    name: "Trần Thạch Thảo",
    feedback:
      "Em biết đến BeanLearn vì là một trong những trung tâm dạy IELTS tốt nhất tại Vũng Tàu. Thầy cô cực kỳ tận tình!",
    image: fb2,
  },
  {
    name: "Đặng Hoàng Nhật",
    feedback:
      "Ấn tượng ban đầu của em là các anh chị BeanLearn tư vấn nhiệt tình. Em thật sự cảm ơn trung tâm rất nhiều!",
    image: fb3,
  },
  {
    name: "Phạm Văn Cường",
    feedback:
      "Học ở đây rất tuyệt! Môi trường hiện đại, giáo viên chuyên nghiệp, hỗ trợ hết mình để học viên đạt điểm cao.",
    image: fb4,
  },
];

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < testimonials.length - 2 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : testimonials.length - 3
    );
  };

  return (
    <section className="py-10 px-4 bg-[#ECF5FF]">
      <h2 class="text-center text-3xl md:text-4xl font-bold text-[#115560] mb-6">
        Học viên nói gì về <span className="text-red-500">BeanLearn?</span>
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Sự hài lòng và tin tưởng của phụ huynh và học viên là mục tiêu của chúng tôi!
      </p>

      {/* Container chính */}
      <div className="relative mx-auto w-[900px] overflow-hidden">
        {/* Nút Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
        >
          ❮
        </button>

        {/* Thanh Track (chứa tất cả items) */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="w-[33.33%] flex-shrink-0 px-2"
            >
              <div className="bg-white rounded-lg shadow-lg p-4">
                {/* Avatar */}
                <div className="flex items-center space-x-3 mb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <h3 className="font-bold">{item.name}</h3>
                </div>
                {/* Nội dung đánh giá */}
                <p className="text-gray-700 text-sm">{item.feedback}</p>
                <a href="#" className="text-red-500 font-medium text-sm">
                  Xem thêm
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nút Next */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
