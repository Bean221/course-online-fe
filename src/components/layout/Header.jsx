import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiUserPlus, FiUser } from "react-icons/fi";
import logoImg from "../../assets/logo.png";
import Avatar from "../../assets/avt.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Thêm state đăng nhập, mặc định là false (chưa đăng nhập)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State hiển thị menu dropdown cho user
  const [menuOpen, setMenuOpen] = useState(false);
  // Lưu tên người dùng
  const [userName, setUserName] = useState("");
  // Lưu role: "student", "manager", hoặc "admin"
  const [userRole, setUserRole] = useState("student");

  const navigate = useNavigate();

  useEffect(() => {
    // Xử lý hiệu ứng scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kiểm tra token, userName, userRole trong localStorage khi component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("userName");
    const storedRole = localStorage.getItem("role"); // Lưu "student" | "manager" | "admin"
    console.log("token:", token);
    console.log("userName:", storedName);
    console.log("raw role:", storedRole);

    if (token) {
      setIsLoggedIn(true);
      if (storedName) setUserName(storedName);
      if (storedRole) {
        const lowerRole = storedRole.toLowerCase();
        setUserRole(lowerRole);
        console.log("normalized role:", lowerRole);
      }
    } else {
      setIsLoggedIn(false);
      setUserName("");
      setUserRole("student");
    }
  }, []);

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setMenuOpen(false);
    setUserName("");
    setUserRole("student");
    navigate("/");
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        flex items-center transition-colors duration-300
        h-16
        ${isScrolled ? "bg-white shadow" : "bg-transparent shadow-none"}
      `}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo (chỉ ảnh, to hơn) */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src={logoImg}
            alt="BeanLearn Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Menu chính */}
        <nav className="flex items-center space-x-6">
          {/* Về BeanLearn */}
          <Link
            to="/about"
            className="text-[#274c4f] hover:text-red-600 transition-colors duration-300"
          >
            Về BeanLearn
          </Link>

          {/* Drop-down: Các Khóa Học */}
          <div className="relative group">
            <Link
              to="/courses"
              className="inline-flex items-center text-[#274c4f] hover:text-red-600 transition-colors duration-300"
            >
              Các Khóa Học
              <FiChevronDown className="ml-1" />
            </Link>
            <div
              className="
                absolute left-0 top-full mt-1
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                bg-white min-w-[140px] whitespace-nowrap rounded shadow
              "
            >
              <ul className="py-2">
                <li>
                  <Link
                    to="/courses/ielts"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    Khóa Học Luyện Thi IELTS Online - Trực Tuyến
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/sat"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    Khóa Học Luyện Thi SAT Online - Trực Tuyến
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/kids"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    Khóa Ôn Luyện Tiếng Anh Cho Trẻ Em Và Trung Niên
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Drop-down: Thi Thử IELTS */}
          <div className="relative group">
            <Link
              to="/mock-test"
              className="inline-flex items-center text-[#274c4f] hover:text-red-600 transition-colors duration-300"
            >
              Thi Thử IELTS
              <FiChevronDown className="ml-1" />
            </Link>
            <div
              className="
                absolute left-0 top-full mt-1
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                bg-white min-w-[140px] whitespace-nowrap rounded shadow
              "
            >
              <ul className="py-2">
                <li>
                  <Link
                    to="/mock-test/speaking"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    Thi Thử IELTS Speaking Online
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mock-test/writing"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    Thi Thử IELTS Writing Online
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mock-test/listening"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    Thi Thử IELTS Listening Online
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mock-test/reading"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    Thi Thử IELTS Reading Online
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mock-test/RegisterIELTS"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    Đăng Ký Thi IELTS
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Tư Vấn Du Học */}
          <Link
            to="/study-abroad"
            className="text-[#274c4f] hover:text-red-600 transition-colors duration-300"
          >
            Tư Vấn Du Học
          </Link>

          {/* Drop-down: Kiến Thức IELTS */}
          <div className="relative group">
            <Link
              to="/ielts-knowledge"
              className="inline-flex items-center text-[#274c4f] hover:text-red-600 transition-colors duration-300"
            >
              Kiến Thức IELTS
              <FiChevronDown className="ml-1" />
            </Link>
            <div
              className="
                absolute left-0 top-full mt-1
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                bg-white min-w-[140px] whitespace-nowrap rounded shadow
              "
            >
              <ul className="py-2">
                <li>
                  <Link
                    to="/ielts-knowledge/speaking"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    IELTS Speaking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ielts-knowledge/writing"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    IELTS Writing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ielts-knowledge/listening"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    IELTS Listening
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ielts-knowledge/reading"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    IELTS Reading
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ielts-knowledge/sat"
                    className="
                      block px-4 py-2 text-[#274c4f] hover:text-red-600
                      hover:bg-gray-100 transition-colors duration-200
                    "
                  >
                    SAT - Math
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Đăng ký / Đăng nhập / Menu User */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center space-x-2 focus:outline-none cursor-pointer hover:text-red-600"
              >
                <img
                  src={Avatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden sm:inline-block text-[#274c4f]">
                  {userName || "User"}
                </span>
                <FiChevronDown className="text-[#274c4f]" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-[#274c4f] hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Thông tin cá nhân
                  </Link>
                  <Link
                    to="/history"
                    className="block px-4 py-2 text-[#274c4f] hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Lịch sử thi thử
                  </Link>
                  {/* Quản lý hệ thống - chỉ hiện nếu là admin hoặc manager */}
                  {userRole === "admin" && (
                    <Link
                      to="/admin"
                      className="block px-4 py-2 text-[#274c4f] hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
                      >
                      Quản trị admin
                    </Link>
                  )}

                  {userRole === "manager" && (
                    <Link
                      to="/manager"
                      className="block px-4 py-2 text-[#274c4f] hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
                      >
                      Quản lý hệ thống
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-[#274c4f] hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/register"
                className="
                  flex items-center bg-red-500 text-white px-4 py-2 rounded-md
                  hover:bg-red-600 hover:scale-105 transform transition-transform duration-300
                "
              >
                <FiUserPlus className="mr-2" />
                Đăng ký
              </Link>
              <Link
                to="/login"
                className="
                  text-[#274c4f] hover:text-red-600 hover:scale-105
                  transform transition-transform duration-300
                "
              >
                Đăng nhập
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
