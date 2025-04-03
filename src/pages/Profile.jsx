import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/layout/Header";
import { changePassword } from "../services/apiService";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  // Profile state
  const [profile, setProfile] = useState({
    fullName: "Lê Minh Tuấn",
    email: "hoctot221@gmail.com",
    phone: "0905961293",
    address: "Quy Nhơn-Bình Định",
    birthday: "2003-01-22", // Adjusted to YYYY-MM-DD for date input
    gender: "Nam",
  });

  // Password state
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [message, setMessage] = useState("");

  // Handle profile input changes
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Handle password input changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  // Save profile updates
  const handleProfileSave = (e) => {
    e.preventDefault();
    setMessage("Cập nhật thông tin cá nhân thành công");
  };

  // Handle password change submission
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (password.new !== password.confirm) {
      setMessage("Mật khẩu mới không khớp!");
      return;
    }
    try {
      const data = await changePassword(password.current, password.new);
      setMessage(data.message);
      setPassword({ current: "", new: "", confirm: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "Đổi mật khẩu thất bại!");
    }
  };

  // Logout handler
  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất không?"))
    {localStorage.removeItem("token"); // Xóa token (hoặc sessionStorage nếu dùng)
    navigate("/"); // Chuyển hướng về đầu tiên
  }};

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-50 to-purple-100">
      <Header />
      <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-8 pt-24">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Sidebar */}
          <aside className="w-full rounded-lg bg-white p-4 shadow-lg md:w-48">
            <nav className="space-y-2">
              <Link
                to="/profile"
                className="block rounded px-3 py-2 text-indigo-700 font-medium transition hover:bg-indigo-100 hover:text-indigo-900"
              >
                Thông tin cá nhân
              </Link>
              <Link
                to="/history"
                className="block rounded px-3 py-2 text-indigo-700 font-medium transition hover:bg-indigo-100 hover:text-indigo-900"
              >
                Lịch sử thi thử
              </Link>
              <button
                onClick={handleLogout}
                className="w-full rounded px-3 py-2 text-left text-indigo-700 font-medium transition hover:bg-indigo-100 hover:text-indigo-900"
              >
                Đăng xuất
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <section className="rounded-lg bg-white p-6 shadow-lg border-t-4 border-indigo-500">
              <h2 className="mb-6 text-2xl font-bold text-indigo-800">
                Thông tin cá nhân
              </h2>
              <form
                onSubmit={handleProfileSave}
                className="grid gap-6 md:grid-cols-2"
              >
                <InputField
                  label="Họ và tên"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleProfileChange}
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
                <InputField
                  label="Số điện thoại"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                />
                <InputField
                  label="Địa chỉ"
                  name="address"
                  value={profile.address}
                  onChange={handleProfileChange}
                />
                <InputField
                  label="Ngày sinh"
                  name="birthday"
                  type="date" // Changed to date input
                  value={profile.birthday}
                  onChange={handleProfileChange}
                />
                <div>
                  <label className="mb-1 block font-medium text-indigo-700">
                    Giới tính
                  </label>
                  <div className="flex gap-6">
                    <RadioButton
                      label="Nam"
                      name="gender"
                      value="Nam"
                      checked={profile.gender === "Nam"}
                      onChange={handleProfileChange}
                    />
                    <RadioButton
                      label="Nữ"
                      name="gender"
                      value="Nữ"
                      checked={profile.gender === "Nữ"}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full rounded bg-gradient-to-r from-green-500 to-teal-500 px-6 py-2 font-semibold text-white transition hover:from-green-600 hover:to-teal-600 md:col-span-2"
                >
                  Lưu thông tin cá nhân
                </button>
              </form>

              {/* Password Change Section */}
              <div className="mt-8 border-t border-indigo-200 pt-6">
                <h3 className="mb-4 text-xl font-semibold text-indigo-800">
                  Đổi mật khẩu
                </h3>
                <form
                  onSubmit={handlePasswordSubmit}
                  className="grid gap-6 md:grid-cols-2"
                >
                  <InputField
                    label="Mật khẩu hiện tại"
                    name="current"
                    type="password"
                    value={password.current}
                    onChange={handlePasswordChange}
                  />
                  <InputField
                    label="Mật khẩu mới"
                    name="new"
                    type="password"
                    value={password.new}
                    onChange={handlePasswordChange}
                  />
                  <InputField
                    label="Xác nhận mật khẩu mới"
                    name="confirm"
                    type="password"
                    value={password.confirm}
                    onChange={handlePasswordChange}
                    className="md:col-span-2"
                  />
                  <button
                    type="submit"
                    className="mt-4 w-full rounded bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 font-semibold text-white transition hover:from-blue-600 hover:to-purple-600 md:col-span-2"
                  >
                    Đổi mật khẩu
                  </button>
                </form>
              </div>

              {message && (
                <p
                  className={`mt-4 text-center font-medium ${
                    message.includes("thành công")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Reusable Input Field Component
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  className,
}) => (
  <div className={className}>
    <label className="mb-1 block font-medium text-indigo-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded border border-indigo-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
    />
  </div>
);

// Reusable Radio Button Component
const RadioButton = ({ label, name, value, checked, onChange }) => (
  <label className="flex items-center gap-2 text-indigo-700">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-indigo-300"
    />
    <span>{label}</span>
  </label>
);

export default ProfilePage;
