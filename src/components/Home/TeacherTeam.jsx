import React, { useState } from "react";
import GV1 from "../../assets/GV1.png";
import GV2 from "../../assets/GV2.png";
import GV3 from "../../assets/GV3.png";
import GV4 from "../../assets/GV4.png";
import GV5 from "../../assets/GV5.png";
import GV6 from "../../assets/GV6.png";
import GV7 from "../../assets/GV7.png";
import GV8 from "../../assets/GV8.png";
import GV9 from "../../assets/GV9.png";
import GV10 from "../../assets/GV10.png";

const teachers = [
  { name: "Trần Nguyễn Nhật Huy", score: "8.5 IELTS", image: GV1 },
  { name: "Trần Hoàng Phương Uyên", score: "8.5 IELTS", image: GV2 },
  { name: "Nguyễn Hoàng Huy", score: "8.5 IELTS", image: GV3 },
  { name: "Phạm Thị Kiều Nga", score: "8.0 IELTS", image: GV4 },
  { name: "Phạm Ngọc Minh Quang", score: "8.0 IELTS", image: GV5 },
  { name: "Trần Hữu Thúy Khanh", score: "8.0 IELTS", image: GV6 },
  { name: "Nguyễn Vũ Định", score: "8.0 IELTS", image: GV7 },
  { name: "Trần Thị Ngọc Ánh", score: "8.0 IELTS", image: GV8 },
  { name: "Vũ Thị Diệu Linh", score: "8.0 IELTS", image: GV9 },
  { name: "Phan Thị Kim Oanh", score: "8.0 IELTS", image: GV10 },
];

function TeacherTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < teachers.length - 2 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : teachers.length - 3
    );
  };

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#115560] mb-6">
        Đội ngũ giảng viên tại <span className="text-red-500">BeanLearn</span>
      </h2>

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
          {teachers.map((teacher, index) => (
            <div key={index} className="w-[33.33%] flex-shrink-0 px-2">
              <div className="bg-white rounded-lg shadow-lg">
                <img src={teacher.image} alt={teacher.name} className="w-full rounded-lg" />
                <p className="text-center font-semibold mt-2">{teacher.name} - {teacher.score}</p>
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

export default TeacherTeam;
