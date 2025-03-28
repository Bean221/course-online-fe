import React from "react";
import myVideo from "../../assets/videoel.mp4";

const BeanStory = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Khối bên trái: Tiêu đề + Chỉ số */}
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#274C4F] mb-2">
            Câu chuyện của <span className="text-red-600">BeanLearn</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center md:text-left">
            {/* 1. 5+ Năm hoạt động */}
            <div>
              <p className="text-3xl font-bold text-red-600">5+</p>
              <p className="text-gray-700">Năm hoạt động</p>
            </div>
            {/* 2. 10+ Cơ sở */}
            <div>
              <p className="text-3xl font-bold text-red-600">10+</p>
              <p className="text-gray-700">Cơ sở trên toàn quốc</p>
            </div>
            {/* 3. 8.5+ IELTS */}
            <div>
              <p className="text-3xl font-bold text-red-600">8.5+</p>
              <p className="text-gray-700">Học viên đạt điểm IELTS cao nhất</p>
            </div>
            {/* 4. 100% Học bổng */}
            <div>
              <p className="text-3xl font-bold text-red-600">100%</p>
              <p className="text-gray-700">
                Tỷ lệ học viên nhận
                <br />
                học bổng du học Top đầu
              </p>
            </div>
            {/* 5. 100+ Học viên cán đích */}
            <div>
              <p className="text-3xl font-bold text-red-600">100+</p>
              <p className="text-gray-700">Học viên cán đích</p>
            </div>
            {/* 6. 150+ Sự kiện */}
            <div>
              <p className="text-3xl font-bold text-red-600">150+</p>
              <p className="text-gray-700">
                Sự kiện do BeanLearn
                <br />
                tổ chức và đồng hành
              </p>
            </div>
          </div>
        </div>

        {/* Khối bên phải: Video hoặc ảnh */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* Ví dụ nhúng video YouTube (chỉnh link) */}
          {/* Hoặc thay bằng <img src="..." /> nếu muốn */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full rounded"
              controls
            >
              <source src={myVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeanStory;
