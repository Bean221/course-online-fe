import React, { useState } from 'react';

// 9 ảnh HV1 -> HV9
import HV1 from '../../assets/HV1.png';
import HV2 from '../../assets/HV2.png';
import HV3 from '../../assets/HV3.png';
import HV4 from '../../assets/HV4.png';
import HV5 from '../../assets/HV5.png';
import HV6 from '../../assets/HV6.png';
import HV7 from '../../assets/HV7.png';
import HV8 from '../../assets/HV8.png';
import HV9 from '../../assets/HV9.png';

// Dữ liệu học viên (tùy chỉnh)
const studentsData = [
  { name: 'Nguyễn Vân Anh', band: 'IELTS 8.5', image: HV1 },
  { name: 'Đỗ Doãn Bình', band: 'IELTS 8.5', image: HV2 },
  { name: 'Trần Linh Chi', band: 'IELTS 8.5', image: HV3 },
  { name: 'Bảo Trâm & Đình Nam', band: 'IELTS 8.0', image: HV4 },
  { name: 'Hoàng Anh & Minh Hà', band: 'IELTS 8.0', image: HV5 },
  { name: 'Ngọc Khánh & Ngọc Khang', band: 'IELTS 8.0', image: HV6 },
  { name: 'Hồng Diễm & Quốc Hưng', band: 'IELTS 8.0', image: HV7 },
  { name: 'Vũ Ngọc Phương Anh', band: 'IELTS 8.0', image: HV8 },
  { name: 'Hoàng Thanh Ngân', band: 'IELTS 8.0', image: HV9 },
];

function MeetStudents() {
  // currentIndex: chỉ số item đầu tiên đang hiển thị trong 3 item
  // 0 => [0,1,2], 1 => [1,2,3], ... 6 => [6,7,8]
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cố định mỗi ảnh 300px
  const itemWidth = 300;
  // 9 ảnh => track = 2700px
  const trackWidth = studentsData.length * itemWidth; // 9 * 300 = 2700
  // Hiển thị 3 ảnh => container 900px
  const containerWidth = 900;
  // currentIndex tối đa = 9 - 3 = 6
  const maxIndex = studentsData.length - 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="py-10 px-4 bg-white">
      <h2 class="text-center text-3xl md:text-4xl font-bold text-[#115560] mb-6">
        Gặp gỡ học viên <span className="text-[#E53935]">BeanLearn</span>
      </h2>

      {/* Container 900px, overflow hidden */} 
      <div
        className="mx-auto relative"
        style={{ width: containerWidth + 'px', overflow: 'hidden' }}
      >
        {/* Nút Prev */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 
                     bg-white text-gray-800 p-2 rounded-full shadow 
                     hover:bg-gray-100 z-10"
        >
          ❮
        </button>

        {/* Thanh track */}
        <div
          className={`
            flex 
            duration-700 
            [transition-timing-function:cubic-bezier(0.34,_1.56,_0.64,_1)]
          `}
          style={{
            width: trackWidth + 'px', // 2700px
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
        >
          {studentsData.map((student, idx) => (
            <div
              key={idx}
              style={{ width: itemWidth + 'px' }}
              className="flex-shrink-0"
            >
              <div className="m-2 bg-[#F8F8F8] p-4 rounded-md shadow-md flex flex-col items-center">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-auto object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                  {student.name}
                </h3>
                <p className="text-red-500 text-center">{student.band}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nút Next */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 
                     bg-white text-gray-800 p-2 rounded-full shadow 
                     hover:bg-gray-100 z-10"
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default MeetStudents;
