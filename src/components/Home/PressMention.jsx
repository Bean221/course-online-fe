import React, { useState } from "react";
import Bao1 from "../../assets/Bao1.png";
import Bao2 from "../../assets/Bao2.png";
import Bao3 from "../../assets/Bao3.png";
import Bao4 from "../../assets/Bao4.png";
import Bao5 from "../../assets/Bao5.png";

const pressData = [
  {
    img: Bao1,
    title: "GenZ chinh phục IELTS 8.0+ tại BeanLearn",
    source: "BÁO ZING",
    link: "https://zingnews.vn/",
  },
  {
    img: Bao2,
    title: "Chia sẻ của 4 bạn học viên 8.0 IELTS tại BeanLearn",
    source: "BÁO THANH NIÊN",
    link: "https://thanhnien.vn/",
  },
  {
    img: Bao3,
    title: "Cải thiện tiếng Anh của trẻ tại BeanLearn",
    source: "BÁO ZING",
    link: "https://zingnews.vn/",
  },
  {
    img: Bao4,
    title: "Phương pháp học IELTS hiệu quả",
    source: "BÁO DÂN TRÍ",
    link: "https://dantri.com.vn/",
  },
  {
    img: Bao5,
    title: "Hành trình đạt 8.5 IELTS của sinh viên Việt",
    source: "BÁO TUỔI TRẺ",
    link: "https://tuoitre.vn/",
  },
];

function PressMention() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < pressData.length - 2 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : pressData.length - 3
    );
  };

  return (
    // Ở đây, thay pb-0 thành pb-6 để có khoảng cách với footer
    <section className="pt-10 pb-6 px-4 bg-white">
      <h2 class="text-center text-3xl md:text-4xl font-bold text-[#115560] mb-6">
        Báo chí nói về chúng tôi
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
          {pressData.map((item, index) => (
            <div key={index} className="w-[33.33%] flex-shrink-0 px-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img src={item.img} alt={item.title} className="w-full" />
                <div className="p-4">
                  <p className="text-sm text-blue-600 font-semibold">
                    {item.source}
                  </p>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </a>
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

export default PressMention;
