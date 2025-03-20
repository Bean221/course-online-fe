import React, { useState } from 'react';
import dangKyImg from '../../assets/dangky.png'; // Đảm bảo đường dẫn chính xác

function RegisterForm() {
  // Quản lý dữ liệu form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  // Thông báo gửi thành công
  const [successMessage, setSuccessMessage] = useState('');

  // Xử lý khi người dùng nhập
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Tại đây bạn có thể gọi API để lưu formData lên server
    // hoặc lưu vào localStorage, v.v. Ví dụ demo:
    console.log('Dữ liệu form:', formData);

    // Sau khi xử lý xong
    setSuccessMessage('Xin cảm ơn, form đã được gửi thành công.');

    // Reset form (tùy ý)
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
    });
  };

  return (
    // Nền ngoài trắng, có khoảng cách trên dưới
    <section id="dang-ky-tu-van" className="w-full bg-white py-8 px-4 flex justify-center">
      {/* Khung gọn bên trong */}
      <div className="max-w-4xl w-full bg-[#FFF8E7] p-6 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
        
        {/* Cột trái: Form */}
        <div className="md:w-1/2">
          {/* Tiêu đề */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#115560] mb-2">
            Đăng kí tư vấn <span className="text-[#E53935]">MIỄN PHÍ</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#E53935] mb-6">
            Xây dựng lộ trình học TOÀN DIỆN
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Họ tên */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Họ tên
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập họ tên"
                className="w-full border border-gray-300 rounded-md p-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập email"
                className="w-full border border-gray-300 rounded-md p-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                required
              />
            </div>

            {/* Số điện thoại */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
                className="w-full border border-gray-300 rounded-md p-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                required
              />
            </div>

            {/* Khóa học */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Khóa học bạn quan tâm?
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 bg-white 
                           focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                required
              >
                <option value="">Chọn khóa học</option>
                <option value="IELTS">IELTS</option>
                <option value="SAT">SAT</option>
                <option value="Kids">Tiếng Anh Trẻ Em</option>
                <option value="Khác">Tư Vấn Du Học</option>
              </select>
            </div>

            {/* Nút Submit */}
            <button
              type="submit"
              className="bg-[#E53935] text-white font-semibold px-6 py-2 
                         rounded-md hover:bg-red-600 transition-colors"
            >
              Nhận tư vấn
            </button>
          </form>

          {/* Thông báo gửi thành công */}
          {successMessage && (
            <div className="mt-4 text-green-700 font-semibold 
                            border border-green-700 p-2 rounded-md"
            >
              {successMessage}
            </div>
          )}
        </div>

        {/* Cột phải: Ảnh minh họa */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={dangKyImg}
            alt="Đăng ký"
            className="max-w-xs md:max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
