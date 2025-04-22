import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/Layout/Footer";
import ExamCalendar from "./ExamCalendar";
import QR from "../../assets/QR.png";

const RegistrationForm = ({ examType, price }) => {
  const [showQR, setShowQR] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    idNumber: "",
    residence: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thông tin đăng ký:", {
      ...formData,
      selectedLocation,
      selectedFormat,
      examType,
      selectedDate,
    });
    setShowQR(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
            Đăng Ký Kỳ Thi IELTS - {examType}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
          >
            {/* Các trường thông tin cá nhân */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ngày sinh
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 px-3 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Giới tính
              </label>
              <div className="mt-1 flex gap-8">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    required
                    className="form-radio text-indigo-600 h-4 w-4"
                  />
                  <span className="ml-2 text-gray-700">Nam</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    required
                    className="form-radio text-indigo-600 h-4 w-4"
                  />
                  <span className="ml-2 text-gray-700">Nữ</span>
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Địa chỉ Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="idNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Số CMND/CCCD/Hộ chiếu
              </label>
              <input
                type="text"
                id="idNumber"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="residence"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nơi cư trú hiện tại
              </label>
              <input
                type="text"
                id="residence"
                name="residence"
                value={formData.residence}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 px-3 py-2"
              />
            </div>
            
            {/* Thêm phần chọn địa điểm thi */}
            <div className="md:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Chọn địa điểm thi
              </label>
              <select
                id="location"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 px-3 py-2"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                required
              >
                <option value="">Vui lòng chọn địa điểm</option>
                <option value="01 Trần Phú, P. Lý Thường Kiệt, TP. Quy Nhơn">
                  01 Trần Phú, P. Lý Thường Kiệt, TP. Quy Nhơn
                </option>
                <option value="02 Phan Bội Châu, P. Trần Hưng Đạo, TP. Quy Nhơn">
                  02 Phan Bội Châu, P. Trần Hưng Đạo, TP. Quy Nhơn
                </option>
                <option value="03 Võ Thị Sáu, P. Nguyễn Văn Cừ, TP. Quy Nhơn">
                  03 Võ Thị Sáu, P. Nguyễn Văn Cừ, TP. Quy Nhơn
                </option>
                <option value="04 Ngô Mây, P. Quang Trung, TP. Quy Nhơn">
                  04 Ngô Mây, P. Quang Trung, TP. Quy Nhơn
                </option>
                <option value="05 Lê Lợi, P. Lê Lợi, TP. Quy Nhơn">
                  05 Lê Lợi, P. Lê Lợi, TP. Quy Nhơn
                </option>
              </select>
            </div>

            {/* Thêm phần chọn hình thức thi */}
            <div className="md:col-span-2 mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chọn hình thức thi
              </label>
              <div className="mt-1 flex gap-8">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="format"
                    value="paper"
                    checked={selectedFormat === "paper"}
                    onChange={() => setSelectedFormat("paper")}
                    required
                    className="form-radio text-indigo-600 h-4 w-4"
                  />
                  <span className="ml-2 text-gray-700">IELTS trên giấy</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="format"
                    value="computer"
                    checked={selectedFormat === "computer"}
                    onChange={() => setSelectedFormat("computer")}
                    required
                    className="form-radio text-indigo-600 h-4 w-4"
                  />
                  <span className="ml-2 text-gray-700">
                    IELTS trên máy tính
                  </span>
                </label>
              </div>
            </div>

            {/* Lịch chọn ngày thi */}
            <div className="md:col-span-2 mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chọn ngày thi ưu tiên
              </label>
              <ExamCalendar
                selectedLocation={selectedLocation}
                selectedFormat={selectedFormat}
                onDateSelect={handleDateSelect}
              />
              {selectedDate && (
                <p className="mt-2 text-sm text-gray-600">
                  Ngày thi đã chọn:{" "}
                  {new Date(selectedDate).toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Thông tin kỳ thi */}
            <div className="md:col-span-2 mt-6 bg-gray-100 p-4 rounded-md">
              <p className="text-lg font-medium text-gray-800">
                Loại kỳ thi: <span className="text-indigo-700">{examType}</span>
              </p>
              <p className="text-lg font-medium text-gray-800">
                Phí đăng ký: <span className="text-indigo-700">{price}</span>
              </p>
            </div>

            <div className="md:col-span-2 mt-4">
              <p className="text-sm text-gray-600 text-center">
                Xin lưu ý: Quá trình đăng ký chỉ hoàn tất sau khi thanh toán
                thành công.
              </p>
            </div>

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 font-semibold"
              >
                Hoàn Tất Đăng Ký
              </button>
            </div>
          </form>

          {/* Mã QR và hướng dẫn thanh toán */}
          {showQR && (
            <div className="mt-8 border-t pt-6">
              <h2 className="text-2xl font-bold text-center mb-4 text-indigo-700">
                Thanh toán qua QR payOS
              </h2>
              <div className="flex justify-center">
                <img
                  src={QR}
                  alt="QR Code"
                  className="w-48 h-48 border rounded-md"
                />
              </div>
              <p className="text-center mt-4 text-gray-700">
                Vui lòng quét mã QR bằng ứng dụng ngân hàng trên điện thoại để
                tiến hành thanh toán.
              </p>
              <p className="text-center mt-2 text-gray-700">
                Sau khi thanh toán thành công, hóa đơn và lịch thi chi tiết sẽ
                được gửi đến địa chỉ email đã đăng ký.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ExamRegistration = () => {
  const [selectedExamType, setSelectedExamType] = useState("");
  const isExamTypeSelected = !!selectedExamType;
  const price =
    selectedExamType === "Thi Chính Thức IELTS Academic"
      ? "5,000,000 VND"
      : selectedExamType === "Thi Thử"
      ? "100,000 VND"
      : "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4">
            {!isExamTypeSelected ? (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8 text-indigo-700">
                  Chọn Loại Kỳ Thi
                </h2>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setSelectedExamType("Thi Thử")}
                    className={`py-3 px-6 rounded-md font-semibold ${
                      selectedExamType === "Thi Thử"
                        ? "bg-indigo-500 text-white hover:bg-indigo-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    } transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1`}
                  >
                    Thi Thử (100,000 VND)
                  </button>
                  <button
                    onClick={() =>
                      setSelectedExamType("Thi Chính Thức IELTS Academic")
                    }
                    className={`py-3 px-6 rounded-md font-semibold ${
                      selectedExamType === "Thi Chính Thức IELTS Academic"
                        ? "bg-indigo-500 text-white hover:bg-indigo-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    } transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1`}
                  >
                    Thi Chính Thức IELTS Academic (5,000,000 VND)
                  </button>
                </div>
                {selectedExamType && (
                  <div className="mt-6 p-4 bg-gray-100 rounded-md">
                    <p className="text-center text-gray-700">
                      Bạn đã chọn:{" "}
                      <span className="font-semibold">{selectedExamType}</span>{" "}
                      - Phí: <span className="font-semibold">{price}</span>
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <RegistrationForm examType={selectedExamType} price={price} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
  
export default ExamRegistration;