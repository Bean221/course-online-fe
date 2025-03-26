import React from "react";

// Giả sử bạn đã lưu ảnh tại thư mục assets
import DV1 from "../../assets/DV1.png";
import DV2 from "../../assets/DV2.png";
import DV3 from "../../assets/DV3.png";

const services = [
  {
    id: 1,
    image: DV1,
    title: "Luyện thi IELTS/SAT",
    description:
      "Khóa luyện thi của BeanLearn sử dụng mô hình University Lecture giúp chinh phục IELTS lên đến 8.5",
    link: "/courses/ielts",
  },
  {
    id: 2,
    image: DV2,
    title: "Tiếng Anh trẻ em và thiếu niên",
    description:
      "BeanLearn giúp xây dựng nền tảng tiếng Anh vững chắc, học thuật, và mang tính ứng dụng cao cho trẻ",
    link: "/courses/kids",
  },
  {
    id: 3,
    image: DV3,
    title: "Tư vấn du học",
    description:
      "BeanLearn giúp du học sinh chọn lựa trường học, chương trình học phù hợp với nhu cầu và khả năng của mình",
    link: "/study-abroad",
  },
];

const ServiceGroup = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto text-center">
        {/* Tiêu đề nổi bật */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
          Nhóm dịch vụ tại BeanLearn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col 
                         hover:shadow-lg transition-shadow duration-300"
            >
              {/* Phần ảnh với tỷ lệ 4:3 + hiệu ứng hover */}
              <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg relative">
                <a
                  href={service.link}
                  className="block w-full h-full hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>

              {/* Thông tin dịch vụ */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base mb-4 flex-grow">
                {service.description}
              </p>

              {/* Nút/link xem chi tiết */}
              <a
                href={service.link}
                className="text-red-500 text-lg font-semibold hover:underline inline-flex items-center justify-center"
              >
                Xem chi tiết <span className="ml-1">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGroup;
