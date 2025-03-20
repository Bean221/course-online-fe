import React from 'react';
import ReasonSolutionImg from '../../assets/ReasonSolution.png'; 
// Đảm bảo đúng đường dẫn đến file ảnh

function ReasonSolution() {
  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 py-12 px-4 md:px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Cột hình ảnh */}
        <div className="md:w-1/2">
          <img
            src={ReasonSolutionImg}
            alt="ReasonSolution"
            className="w-full object-cover rounded-lg shadow-xl 
                       transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Cột nội dung */}
        <div className="md:w-1/2 text-gray-700">
          {/* Tiêu đề sử dụng gradient chữ */}
          <h2
            className="text-4xl font-extrabold 
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#115560] to-[#E53935] 
                       mb-6"
          >
            Lý do BeanLearn là giải pháp tối ưu ?
          </h2>

          <p className="mb-4 leading-relaxed">
            Mỗi học viên đều có một hành trình học tập riêng, và BeanLearn 
            sẽ giúp bạn tối ưu hóa quá trình đó một cách linh hoạt và hiệu quả. 
            Dưới đây là những điểm nổi bật:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <span className="font-semibold">Cá nhân hóa lộ trình:</span> 
              {' '}Tìm hiểu mục tiêu, năng lực của bạn để thiết kế kế hoạch học tập riêng biệt.
            </li>
            <li>
              <span className="font-semibold">Giảng viên tâm huyết:</span> 
              {' '}Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ, giải đáp mọi thắc mắc.
            </li>
            <li>
              <span className="font-semibold">Công nghệ tiên tiến:</span> 
              {' '}Ứng dụng nền tảng e-learning và AI để theo dõi tiến độ, đề xuất bài tập phù hợp.
            </li>
            <li>
              <span className="font-semibold">Tương tác liên tục:</span> 
              {' '}Thảo luận, trao đổi trong cộng đồng học tập năng động, nâng cao kỹ năng giao tiếp.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReasonSolution;
