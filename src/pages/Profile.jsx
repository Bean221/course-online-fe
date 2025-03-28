import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/layout/Header";

function ProfilePage() {
  // State cho form thông tin cá nhân
  const [fullName, setFullName] = useState("Bean");
  const [email, setEmail] = useState("hoc@gmail.com");
  const [phone, setPhone] = useState("123123123");
  const [address, setAddress] = useState("123123");
  const [birthday, setBirthday] = useState("12/03/123123");
  const [gender, setGender] = useState("Nam");

  // State cho form thay đổi mật khẩu
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Hàm lưu thông tin cá nhân
  const handleSaveProfile = () => {
    console.log({
      fullName,
      email,
      phone,
      address,
      birthday,
      gender,
    });
  };

  // Hàm đổi mật khẩu
  const handleChangePassword = () => {
    console.log({
      oldPassword,
      newPassword,
    });
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    console.log("Đăng xuất");

    // Xóa token, điều hướng về trang đăng nhập,...
    
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Thêm padding-top để tránh bị chèn bởi header (giả sử header cao 80px đến 96px) */}
      <div className="flex-1 max-w-6xl mx-auto p-8 pt-24 w-full">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <aside className="w-48 bg-white shadow-md p-4 rounded-lg">
            <nav className="space-y-4">
              <Link
                to="/profile"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-200 rounded transition"
              >
                Thông tin cá nhân
              </Link>
              <Link
                to="/history"
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
            {/* Form thông tin cá nhân */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
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
              <button
                onClick={handleSaveProfile}
                className="mt-6 bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition"
              >
                Lưu thay đổi
              </button>
            </section>

            {/* Form thay đổi mật khẩu */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Thay đổi mật khẩu
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Mật khẩu cũ
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
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
              </div>
              <button
                onClick={handleChangePassword}
                className="mt-6 bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition"
              >
                Lưu thay đổi
              </button>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProfilePage;
