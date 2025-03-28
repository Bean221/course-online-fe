import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/layout/Header";
import { changePassword } from "../services/apiService";

function ProfilePage() {
  // State thông tin cá nhân
  const [fullName, setFullName] = useState("Lê Minh Tuấn");
  const [email, setEmail] = useState("hoctot221@gmail.com");
  const [phone, setPhone] = useState("0905961293");
  const [address, setAddress] = useState("Quy Nhơn-Bình Định");
  const [birthday, setBirthday] = useState("22-01-2003");
  const [gender, setGender] = useState("Nam");

  // State cho phần đổi mật khẩu
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");

  // Hàm lưu thông tin cá nhân (và đổi mật khẩu nếu có)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newPassword !== confirmNewPassword) {
      setMessage("Mật khẩu mới không khớp!");
      return;
    }

    try {
      const data = await changePassword(currentPassword, newPassword);
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message ||
          "Có lỗi xảy ra, vui lòng thử lại sau!"
      );
    }
  };

  // Hàm đăng xuất (giữ nguyên)
  const handleLogout = () => {
    console.log("Đăng xuất");
    // Xóa token, điều hướng,...
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Container chính có padding-top để tránh bị che bởi Header */}
      <div className="flex-1 max-w-6xl mx-auto p-8 pt-24 w-full">
        <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
          {/* Sidebar nhỏ gọn */}
          <aside className="w-full md:w-48 bg-white shadow-md p-4 rounded-lg">
            <nav className="space-y-4">
              <Link
                to="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-200 rounded transition"
              >
                Thông tin cá nhân
              </Link>
              <Link
                to="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-200 rounded transition"
              >
                Lịch sử thi thử
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-200 rounded transition"
              >
                Đăng xuất
              </button>
            </nav>
          </aside>

          {/* Nội dung chính */}
          <main className="flex-1">
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Thông tin cá nhân
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Ngày sinh
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Giới tính
                  </label>
                  <div className="flex items-center space-x-4 mt-1">
                    <label className="flex items-center text-gray-700">
                      <input
                        type="radio"
                        name="gender"
                        value="Nam"
                        checked={gender === "Nam"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <span className="ml-2">Nam</span>
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input
                        type="radio"
                        name="gender"
                        value="Nữ"
                        checked={gender === "Nữ"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <span className="ml-2">Nữ</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Phần đổi mật khẩu (nếu muốn) */}
              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Đổi mật khẩu (nếu muốn)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Mật khẩu hiện tại
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Mật khẩu mới
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-1 font-medium text-gray-700">
                      Xác nhận mật khẩu mới
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Lưu thay đổi
              </button>
              {message && <p className="mt-4 text-blue-500">{message}</p>}
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProfilePage;
