import React from "react";

export default function ServicesGroup() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Nhóm dịch vụ tại The Forum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Luyện thi IELTS/SAT */}
          <div className="p-6 bg-white shadow rounded">
            <img
              src="/images/service1.png"
              alt="Luyện thi IELTS/SAT"
              className="mx-auto mb-4 h-16"
            />
            <h3 className="text-xl font-semibold mb-2">Luyện thi IELTS/SAT</h3>
            <p className="text-gray-600">
              Khóa luyện thi của The Forum sử dụng mô hình University Lecture
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-red-500 hover:underline font-semibold"
            >
              Xem chi tiết
            </a>
          </div>

          {/* Card 2: Tiếng Anh trẻ em và thiếu niên */}
          <div className="p-6 bg-white shadow rounded">
            <img
              src="/images/service2.png"
              alt="Tiếng Anh trẻ em"
              className="mx-auto mb-4 h-16"
            />
            <h3 className="text-xl font-semibold mb-2">Tiếng Anh trẻ em và thiếu niên</h3>
            <p className="text-gray-600">
              The Forum giúp xây dựng nền tảng tiếng Anh vững chắc, học thú vị
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-red-500 hover:underline font-semibold"
            >
              Xem chi tiết
            </a>
          </div>

          {/* Card 3: Tư vấn du học */}
          <div className="p-6 bg-white shadow rounded">
            <img
              src="/images/service3.png"
              alt="Tư vấn du học"
              className="mx-auto mb-4 h-16"
            />
            <h3 className="text-xl font-semibold mb-2">Tư vấn du học</h3>
            <p className="text-gray-600">
              The Forum giúp xây dựng lộ trình du học toàn diện
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-red-500 hover:underline font-semibold"
            >
              Xem chi tiết
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
