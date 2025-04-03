import React, { useState } from "react";
import ReasonSolutionImage from "../../assets/ReasonSolution.png"; // Đảm bảo đường dẫn chính xác

export default function RecruitmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Giảng viên",
    note: "", // Thêm lại trường note
    cvFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, cvFile: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu ứng viên:", formData);
    alert("Gửi đơn thành công!");
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "Giảng viên",
      note: "",
      cvFile: null,
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f1ed] flex items-center justify-center p-6"> {/* Background màu beige */}
      <div className="relative w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">
        <div className="flex">
          {/* Form Section */}
          <div className="bg-[#f4f1ed] p-8 rounded-l-xl flex-1"> {/* Background màu beige */}
            <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-center"> {/* Tiêu đề gradient */}
              Tham gia đội ngũ BeanLearn
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Vui lòng điền đầy đủ thông tin để ứng tuyển.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Họ và Tên */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 cursor-pointer" htmlFor="fullName">
                  Họ tên
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors cursor-text"
                  placeholder="Nhập họ tên"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 cursor-pointer" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors cursor-text"
                  placeholder="Nhập email"
                />
              </div>

              {/* Số điện thoại */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 cursor-pointer" htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors cursor-text"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              {/* Vị trí ứng tuyển (Khóa học bạn quan tâm) */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 cursor-pointer" htmlFor="position">
                  Vị trí ứng tuyển
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors cursor-pointer"
                >
                  <option value="Giảng viên">Giảng viên</option>
                  <option value="Trợ giảng">Trợ giảng</option>
                  <option value="Trợ lý">Trợ lý</option>
                </select>
              </div>

              {/* Ghi chú */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 cursor-pointer" htmlFor="note">
                  Ghi chú
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows="3"
                  value={formData.note}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors cursor-text"
                  placeholder="Nhập ghi chú (nếu có)"
                />
              </div>

              {/* Tải CV (ẩn label nếu không muốn hiển thị) */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 cursor-pointer sr-only" htmlFor="cvFile">
                  CV (PDF/Word)
                </label>
                <input
                  type="file"
                  id="cvFile"
                  name="cvFile"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors cursor-pointer py-2 px-3"
                />
                <p className="text-gray-500 text-sm mt-1">Chọn CV (PDF/Word)</p> {/* Thêm dòng chữ "Chọn CV" */}
              </div>

              {/* Nút gửi (Nhận tư vấn) */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white font-semibold py-2 rounded-md transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 cursor-pointer"
              >
                Gửi Đơn & CV
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden md:block bg-[#f4f1ed] rounded-r-xl" style={{ flex: '0 0 50%' }}> {/* Background màu beige, chiếm 50% */}
            <img
              src={ReasonSolutionImage}
              alt="Hình ảnh BeanLearn"
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}