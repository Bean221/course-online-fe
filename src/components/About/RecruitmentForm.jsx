import React, { useState } from "react";

export default function RecruitmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Giảng viên",
    note: "",
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Khung form chính */}
      <div className="relative w-full max-w-md">
        {/* Lớp background gradient chỉ trong khung */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-xl pointer-events-none" />

        <div className="relative bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Ứng tuyển tại BeanLearn
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Họ và Tên */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="fullName">
                Họ và Tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="
                  w-full p-2 border border-gray-300 rounded 
                  focus:outline-none focus:ring-2 focus:ring-blue-300
                  transition-colors
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full p-2 border border-gray-300 rounded 
                  focus:outline-none focus:ring-2 focus:ring-blue-300
                  transition-colors
                "
              />
            </div>

            {/* Số điện thoại */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="phone">
                Số Điện Thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="
                  w-full p-2 border border-gray-300 rounded 
                  focus:outline-none focus:ring-2 focus:ring-blue-300
                  transition-colors
                "
              />
            </div>

            {/* Vị trí ứng tuyển */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="position">
                Vị trí ứng tuyển
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="
                  w-full p-2 border border-gray-300 rounded 
                  focus:outline-none focus:ring-2 focus:ring-blue-300
                  transition-colors
                "
              >
                <option value="Giảng viên">Giảng viên</option>
                <option value="Trợ giảng">Trợ giảng</option>
                <option value="Trợ lý">Trợ lý</option>
              </select>
            </div>

            {/* Ghi chú */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="note">
                Ghi chú
              </label>
              <textarea
                id="note"
                name="note"
                rows="3"
                value={formData.note}
                onChange={handleChange}
                className="
                  w-full p-2 border border-gray-300 rounded 
                  focus:outline-none focus:ring-2 focus:ring-blue-300
                  transition-colors
                "
              />
            </div>

            {/* Tải CV */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="cvFile">
                CV (PDF/Word)
              </label>
              <input
                type="file"
                id="cvFile"
                name="cvFile"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="
                  w-full 
                  border border-gray-300 rounded 
                  focus:outline-none focus:ring-2 focus:ring-blue-300
                  file:mr-2 file:py-2 file:px-4 file:rounded file:border-0 
                  file:text-sm file:bg-blue-50 file:text-blue-700 
                  hover:file:bg-blue-100
                  transition-colors
                "
              />
            </div>

            {/* Nút gửi */}
            <button
              type="submit"
              className="
                w-full 
                bg-blue-600 text-white font-semibold py-2 rounded 
                transition-all duration-300
                hover:bg-blue-700 
                hover:shadow-lg hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-blue-300
                cursor-pointer
              "
            >
              Gửi Đơn & CV
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
