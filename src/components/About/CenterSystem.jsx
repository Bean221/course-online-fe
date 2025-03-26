import React from "react";
import buildingIcon from "../../assets/buildingIcon.png";

// Dữ liệu
const centerData = [
  {
    id: 1,
    title: "Hội sở",
    address: "01 Trần Phú, P. Lý Thường Kiệt, TP. Quy Nhơn",
    highlight: true,
  },
  {
    id: 2,
    title: "Cơ sở 1",
    address: "02 Phan Bội Châu, P. Trần Hưng Đạo, TP. Quy Nhơn",
  },
  {
    id: 3,
    title: "Cơ sở 2",
    address: "03 Võ Thị Sáu, P. Nguyễn Văn Cừ, TP. Quy Nhơn",
  },
  {
    id: 4,
    title: "Cơ sở 3",
    address: "04 Ngô Mây, P. Quang Trung, TP. Quy Nhơn",
  },
  {
    id: 5,
    title: "Cơ sở 4",
    address: "05 Lê Lợi, P. Lê Lợi, TP. Quy Nhơn",
  },
];

const CenterSystem = () => {
  // Tách riêng hội sở
  const hoiSo = centerData.find((center) => center.highlight);
  // Danh sách cơ sở còn lại
  const coSo = centerData.filter((center) => !center.highlight);

  return (
    <section className="bg-[#E8F8FA] py-8">
      <div className="container mx-auto text-center">
        {/* Tiêu đề */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Hệ thống trung tâm
        </h2>
        {/* Mô tả ngắn */}
        <p className="text-gray-600 mb-8">
          BeanLearn đang có năm chi nhánh hoạt động tại Quy Nhơn - Bình Định
        </p>

        {/* Phần hiển thị Hội sở ở trên */}
        {hoiSo && (
          <div className="flex flex-col items-center mb-8">
            <img
              src={buildingIcon}
              alt={hoiSo.title}
              className="w-12 h-12 mb-3"
            />
            <h3 className="text-lg font-semibold text-red-500 mb-1">
              {hoiSo.title}
            </h3>
            <p className="text-sm text-gray-600">{hoiSo.address}</p>
          </div>
        )}

        {/* Danh sách Cơ sở bên dưới */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {coSo.map((center) => (
            <div key={center.id} className="flex flex-col items-center">
              <img
                src={buildingIcon}
                alt={center.title}
                className="w-12 h-12 mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {center.title}
              </h3>
              <p className="text-sm text-gray-600">{center.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterSystem;
