import React from 'react';
import { Link } from 'react-router-dom';
import { FaTiktok, FaYoutube, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#E8F8FA] py-8">
      <div className="container mx-auto px-4">
        {/* 3 cột: 
            1) Giới thiệu + Social 
            2) Liên Kết + Chương Trình Học
            3) Thông tin & Địa chỉ
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cột 1: Giới thiệu + Mạng xã hội */}
          <div className="text-gray-700">
            <h2 className="text-2xl font-bold text-black mb-2">BeanLearn</h2>
            <p className="mb-3 text-justify leading-relaxed">
              Nơi chia sẻ kiến thức IELTS, SAT, Tiếng Anh và hơn thế nữa, giúp bạn vững bước trên hành trình chinh phục mục tiêu học tập. 
            </p>
            <p className="mb-4 text-justify leading-relaxed">
              Tại BeanLearn, chúng tôi tin rằng mỗi người học đều có tiềm năng phát triển vượt bậc, và sứ mệnh của chúng tôi là tạo ra môi trường học tập hiệu quả, hỗ trợ và truyền cảm hứng. Hãy cùng chúng tôi khám phá những cơ hội, nâng cao kỹ năng, và kết nối với cộng đồng học tập năng động để gặt hái thành công vượt trội.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mtuan221"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#274c4f] hover:text-red-600 transition-colors duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.youtube.com/@lournbean22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#274c4f] hover:text-red-600 transition-colors duration-300"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#274c4f] hover:text-red-600 transition-colors duration-300"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          {/* Cột 2: Liên Kết + Chương Trình Học */}
          <div className="text-gray-700">
            {/* Liên Kết */}
            <h3 className="text-[#274c4f] font-semibold mb-1">Liên kết</h3>
            <div className="w-10 h-[2px] bg-red-400 mb-2" />
            <ul className="space-y-1 mb-6">
              <li>
                <Link to="/about" className="hover:text-red-600 transition-colors duration-300">
                  Về BeanLearn
                </Link>
              </li>
              <li>
                <Link to="/mock-test" className="hover:text-red-600 transition-colors duration-300">
                  Thi thử IELTS
                </Link>
              </li>
              <li>
                <Link to="/mock-test/RegisterIELTS" className="hover:text-red-600 transition-colors duration-300">
                  Đăng ký thi IELTS
                </Link>
              </li>
              <li>
                <Link to="/study-abroad" className="hover:text-red-600 transition-colors duration-300">
                  Tư vấn du học
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-red-600 transition-colors duration-300">
                  BeanLearn Community
                </Link>
              </li>
            </ul>

            {/* Chương Trình Học */}
            <h3 className="text-[#274c4f] font-semibold mb-1">Chương trình học</h3>
            <div className="w-10 h-[2px] bg-red-400 mb-2" />
            <ul className="space-y-1">
              <li>
                <Link to="/courses/ielts" className="hover:text-red-600 transition-colors duration-300">
                  Khóa học Luyện Thi IELTS – Trực Tuyến
                </Link>
              </li>
              <li>
                <Link to="/courses/sat" className="hover:text-red-600 transition-colors duration-300">
                  Khóa học Luyện Thi SAT
                </Link>
              </li>
              <li>
                <Link to="/courses/kids" className="hover:text-red-600 transition-colors duration-300">
                  Tiếng anh Trẻ em &amp; Thanh thiếu niên
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Thông tin & Địa chỉ (Quy Nhơn) */}
          <div className="text-gray-700">
            <h3 className="text-[#274c4f] font-semibold mb-1">Thông tin &amp; Địa chỉ</h3>
            <div className="w-10 h-[2px] bg-red-400 mb-2" />
            <p className="mb-2">
              Email: <span className="font-medium">hoctot221@gmail.com</span>
            </p>
            <p className="mb-4">
              Hotline: <span className="font-medium">0905961293</span>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>01 Trần Phú, P. Lý Thường Kiệt, TP. Quy Nhơn</li>
              <li>02 Phan Bội Châu, P. Trần Hưng Đạo, TP. Quy Nhơn</li>
              <li>03 Võ Thị Sáu, P. Nguyễn Văn Cừ, TP. Quy Nhơn</li>
              <li>04 Ngô Mây, P. Quang Trung, TP. Quy Nhơn</li>
              <li>05 Lê Lợi, P. Lê Lợi, TP. Quy Nhơn</li>
            </ul>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2025 BeanLearn. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
