import React, { useState } from 'react';
import diff1 from '../../assets/diff1.jpg';
import diff2 from '../../assets/diff2.jpg';
import diff3 from '../../assets/diff3.jpg';
import diff4 from '../../assets/diff4.jpg';
import diff5 from '../../assets/diff5.jpg';
import diff6 from '../../assets/diff6.jpg';

const data = [
  { imageSrc: diff1, title: 'Điểm độc đáo 1', bulletPoints: ['Tính năng A', 'Tính năng B', 'Tính năng C'] },
  { imageSrc: diff2, title: 'Điểm độc đáo 2', bulletPoints: ['Tính năng D', 'Tính năng E', 'Tính năng F'] },
  { imageSrc: diff3, title: 'Điểm độc đáo 3', bulletPoints: ['Tính năng G', 'Tính năng H', 'Tính năng I'] },
  { imageSrc: diff4, title: 'Điểm độc đáo 4', bulletPoints: ['Tính năng J', 'Tính năng K', 'Tính năng L'] },
  { imageSrc: diff5, title: 'Điểm độc đáo 5', bulletPoints: ['Tính năng M', 'Tính năng N', 'Tính năng O'] },
  { imageSrc: diff6, title: 'Điểm độc đáo 6', bulletPoints: ['Tính năng P', 'Tính năng Q', 'Tính năng R'] },
];

const UniquePoints = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleClick = (index) => {
    setFlippedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#E8F8FA] py-10 px-8">
      {/* Nội dung văn bản */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-6">Mô hình học độc quyền University Lecture</h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-lg">Mô hình học nâng band hiệu quả, vận dụng kiến thức một cách “thực chiến”</p>
          <p className="text-lg">60 tiết “Lecture” tự chọn khác nhau bên cạnh các buổi học cố định</p>
          <p className="text-lg">Đa dạng chủ đề, hỗ trợ định hướng và phát triển khả năng ngôn ngữ</p>
          <p className="text-lg">Miễn phí 100% và không giới hạn cho toàn bộ học viên</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Khóa học trực tuyến bổ trợ chất lượng cao</h3>
        <div className="space-y-4 mb-8">
          <p className="text-lg">Tất cả khóa học đều đi kèm Online Courses bổ trợ miễn phí 100%</p>
          <p className="text-lg">Video bài giảng học thuật biên soạn bởi đội ngũ chuyên gia</p>
          <p className="text-lg">Bổ trợ kiến thức, giúp học viên rèn luyện mọi lúc mọi nơi</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Giáo trình học thuật chuyên sâu</h3>
        <div className="space-y-4">
          <p className="text-lg">Giáo trình giảng dạy được thiết kế riêng biệt theo lộ trình</p>
          <p className="text-lg">Kết hợp chương trình đào tạo từ các nhà xuất bản hàng đầu</p>
          <p className="text-lg">Đa dạng chủ đề, dạng bài có độ khó nâng dần</p>
        </div>
      </div>

      {/* Hình ảnh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <Card
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            bulletPoints={item.bulletPoints}
            flipped={index === flippedIndex}
            anyFlipped={flippedIndex !== null}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ imageSrc, title, bulletPoints, flipped, anyFlipped, onClick }) => {
  const cardClasses = `relative w-52 h-72 perspective-1000 cursor-pointer transition-opacity duration-300 shadow-md hover:scale-105 ${!flipped && anyFlipped ? 'opacity-50' : ''}`;
  const innerClasses = `absolute w-full h-full transform-style-preserve-3d transition-transform duration-600 ${flipped ? 'rotate-y-180' : ''}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className={innerClasses}>
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center overflow-hidden">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 p-5 text-center flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <ul className="list-none p-0">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="mb-2">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UniquePoints;