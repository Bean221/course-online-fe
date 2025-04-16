import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaUsers,
  FaRegCalendarAlt,
  FaChartLine,
  FaBell,
  FaSearch,
  FaFileAlt,
  FaUserTie,
  FaCalendarCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

const AdminDashboard = () => {
  // Set role in localStorage when component mounts
  useEffect(() => {
    localStorage.setItem("userRole", "admin");
  }, []);

  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem("sidebarCollapsed") === "true"
  );

  // Listen for changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setIsCollapsed(localStorage.getItem("sidebarCollapsed") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    // Thêm dòng này để lắng nghe sự kiện storage nội bộ
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Sample data
  const notifications = [
    {
      id: 1,
      content: "3 hồ sơ ứng tuyển mới cần duyệt",
      time: "10 phút trước",
      type: "recruitment",
    },
    {
      id: 2,
      content: "Doanh thu tháng này đã vượt chỉ tiêu 20%",
      time: "2 giờ trước",
      type: "revenue",
    },
    {
      id: 3,
      content: "5 thí sinh đăng ký thi IELTS tuần sau",
      time: "Hôm qua",
      type: "exam",
    },
    {
      id: 4,
      content: "Lớp Speaking 4 cần thêm giáo viên",
      time: "Hôm qua",
      type: "staff",
    },
  ];

  const upcomingEvents = [
    { id: 1, title: "Thi thử IELTS tháng 4", date: "25/04/2025", students: 45 },
    {
      id: 2,
      title: "Workshop kỹ năng Speaking",
      date: "28/04/2025",
      students: 28,
    },
    { id: 3, title: "Buổi tư vấn du học UK", date: "01/05/2025", students: 15 },
  ];

  const topPerformingCourses = [
    {
      id: 1,
      name: "IELTS Intensive 8.0+",
      students: 42,
      revenue: "210.000.000",
      completion: 92,
    },
    {
      id: 2,
      name: "Business English Pro",
      students: 38,
      revenue: "190.000.000",
      completion: 88,
    },
    {
      id: 3,
      name: "TOEIC Advanced 900+",
      students: 52,
      revenue: "208.000.000",
      completion: 95,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar userRole="admin" />

      {/* Main Content */}
      <main
        className={`flex-1 ${
          isCollapsed ? "ml-20 px-6" : "ml-64 px-6"
        } py-6 transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard Quản Trị BeanLearn
            </h1>
            <p className="text-sm text-gray-500">
              Chào mừng trở lại, Admin! Hôm nay là ngày 16/04/2025
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="bg-white rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="relative">
              <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-blue-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                4
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                A
              </div>
              <span className="font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center border-l-4 border-blue-500">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <FaUserGraduate className="text-blue-500 text-2xl" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Tổng học viên
              </h3>
              <p className="text-2xl font-bold text-gray-800">1,248</p>
              <p className="text-xs text-green-500">+12% so với tháng trước</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex items-center border-l-4 border-green-500">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <FaChalkboardTeacher className="text-green-500 text-2xl" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Giáo viên</h3>
              <p className="text-2xl font-bold text-gray-800">32</p>
              <p className="text-xs text-green-500">+3 giáo viên mới</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex items-center border-l-4 border-yellow-500">
            <div className="rounded-full bg-yellow-100 p-3 mr-4">
              <FaMoneyBillWave className="text-yellow-500 text-2xl" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Doanh thu tháng
              </h3>
              <p className="text-2xl font-bold text-gray-800">850 triệu</p>
              <p className="text-xs text-green-500">+20% so với chỉ tiêu</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex items-center border-l-4 border-purple-500">
            <div className="rounded-full bg-purple-100 p-3 mr-4">
              <FaRegCalendarAlt className="text-purple-500 text-2xl" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Khóa học đang mở
              </h3>
              <p className="text-2xl font-bold text-gray-800">18</p>
              <p className="text-xs text-orange-500">2 sắp kết thúc</p>
            </div>
          </div>
        </div>

        {/* Charts & Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Revenue Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Biểu đồ doanh thu
              </h2>
              <select className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Năm 2025</option>
                <option>Năm 2024</option>
              </select>
            </div>
            <div className="h-64 flex items-center justify-center">
              {/* Chart placeholder */}
              <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-300">
                <div className="text-center">
                  <FaChartLine className="text-gray-400 text-4xl mx-auto mb-2" />
                  <p className="text-gray-500">Biểu đồ doanh thu theo tháng</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Thông báo mới nhất
              </h2>
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                Xem tất cả
              </span>
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start p-3 rounded-lg hover:bg-gray-50 border-b border-gray-100"
                >
                  <div
                    className={`rounded-full p-2 mr-3 ${
                      notification.type === "recruitment"
                        ? "bg-blue-100 text-blue-600"
                        : notification.type === "revenue"
                        ? "bg-green-100 text-green-600"
                        : notification.type === "exam"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {notification.type === "recruitment" && <FaFileAlt />}
                    {notification.type === "revenue" && <FaMoneyBillWave />}
                    {notification.type === "exam" && <FaUserGraduate />}
                    {notification.type === "staff" && <FaUserTie />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">
                      {notification.content}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Sự kiện sắp tới
              </h2>
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                Quản lý lịch
              </span>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center p-3 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-sm"
                >
                  <div className="bg-blue-500 text-white rounded-lg w-12 h-12 flex flex-col items-center justify-center mr-4">
                    <span className="text-xs font-medium">
                      {event.date.split("/")[1]}
                    </span>
                    <span className="text-sm font-bold">
                      {event.date.split("/")[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-800">
                      {event.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <FaCalendarCheck className="mr-1" />
                      <span>{event.date}</span>
                      <span className="mx-2">•</span>
                      <FaUserGraduate className="mr-1" />
                      <span>{event.students} thí sinh</span>
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 text-sm text-blue-500 hover:bg-blue-50 rounded-lg border border-blue-200">
                + Thêm sự kiện mới
              </button>
            </div>
          </div>

          {/* Top Courses */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Khóa học hiệu quả nhất
              </h2>
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                Xem tất cả
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Khóa học
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Học viên
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Doanh thu
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hoàn thành
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topPerformingCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-800">
                          {course.name}
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {course.students}
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {new Intl.NumberFormat("vi-VN").format(
                            parseInt(course.revenue)
                          )}{" "}
                          đ
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              course.completion > 90
                                ? "bg-green-500"
                                : course.completion > 80
                                ? "bg-blue-500"
                                : "bg-yellow-500"
                            }`}
                            style={{ width: `${course.completion}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-right mt-1 text-gray-500">
                          {course.completion}%
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* System Alerts */}
        <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-center">
          <div className="p-2 bg-orange-100 rounded-lg mr-4">
            <FaExclamationTriangle className="text-orange-500 text-xl" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-orange-800">Lưu ý quản trị viên</h3>
            <p className="text-sm text-orange-700">
              3 giáo viên cần cập nhật hồ sơ và 2 phòng học cần được kiểm tra
              thiết bị trước ngày 20/04.
            </p>
          </div>
          <button className="px-3 py-1 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg text-sm">
            Xem chi tiết
          </button>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
