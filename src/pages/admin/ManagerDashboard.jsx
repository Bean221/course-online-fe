import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import {
  FaUserGraduate,
  FaRegCalendarAlt,
  FaClipboardList,
  FaBell,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarDay,
  FaPhoneAlt,
  FaClock,
  FaExclamationCircle,
  FaFileAlt,
  FaUser,
  FaEye,
  FaPencilAlt,
  FaPhoneVolume,
  FaCalendarPlus,
} from "react-icons/fa";

const ManagerDashboard = () => {
  // Set role in localStorage when component mounts
  useEffect(() => {
    localStorage.setItem("userRole", "manager");
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
  const registrations = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      course: "IELTS 7.0",
      phone: "0987654321",
      status: "pending",
      registered: "15/04/2025",
    },
    {
      id: 2,
      name: "Trần Thị B",
      course: "TOEIC Advanced",
      phone: "0912345678",
      status: "contacted",
      registered: "14/04/2025",
    },
    {
      id: 3,
      name: "Lê Minh C",
      course: "Business English",
      phone: "0977888999",
      status: "scheduled",
      registered: "13/04/2025",
    },
    {
      id: 4,
      name: "Phạm Hoàng D",
      course: "IELTS Writing",
      phone: "0966777888",
      status: "pending",
      registered: "16/04/2025",
    },
  ];

  const consultations = [
    {
      id: 1,
      name: "Vũ Thị E",
      phone: "0977123456",
      time: "14:00 - 17/04/2025",
      subject: "Tư vấn khóa học IELTS",
    },
    {
      id: 2,
      name: "Ngô Văn F",
      phone: "0988765432",
      time: "10:30 - 18/04/2025",
      subject: "Thông tin học phí các khóa",
    },
    {
      id: 3,
      name: "Hoàng Thị G",
      phone: "0933222111",
      time: "16:00 - 19/04/2025",
      subject: "Lộ trình học cho học sinh cấp 3",
    },
  ];

  const mockExams = [
    {
      id: 1,
      name: "IELTS Mock Test - Tháng 4",
      date: "25/04/2025",
      registered: 45,
      capacity: 50,
      status: "open",
    },
    {
      id: 2,
      name: "TOEIC Monthly Test",
      date: "02/05/2025",
      registered: 28,
      capacity: 40,
      status: "open",
    },
    {
      id: 3,
      name: "IELTS Speaking Practice",
      date: "20/04/2025",
      registered: 15,
      capacity: 15,
      status: "full",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "Xác nhận đăng ký thi thử",
      user: "Lê Thị H",
      time: "20 phút trước",
    },
    {
      id: 2,
      action: "Cập nhật thông tin khóa học TOEIC",
      user: "Admin",
      time: "1 giờ trước",
    },
    {
      id: 3,
      action: "Liên hệ với học viên tiềm năng",
      user: "Bạn",
      time: "2 giờ trước",
    },
    { id: 4, action: "Thêm lịch thi thử mới", user: "Admin", time: "Hôm qua" },
  ];

  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor = "bg-gray-100 text-gray-800";
    let icon = null;

    if (status === "pending") {
      bgColor = "bg-yellow-100 text-yellow-700";
      icon = <FaClock className="mr-1" />;
    } else if (status === "contacted") {
      bgColor = "bg-blue-100 text-blue-700";
      icon = <FaPhoneAlt className="mr-1" />;
    } else if (status === "scheduled") {
      bgColor = "bg-green-100 text-green-700";
      icon = <FaCalendarDay className="mr-1" />;
    } else if (status === "full") {
      bgColor = "bg-red-100 text-red-700";
      icon = <FaTimesCircle className="mr-1" />;
    } else if (status === "open") {
      bgColor = "bg-green-100 text-green-700";
      icon = <FaCheckCircle className="mr-1" />;
    }

    return (
      <div
        className={`flex items-center text-xs px-2 py-1 rounded-full ${bgColor}`}
      >
        {icon}
        <span>
          {status === "pending"
            ? "Chờ liên hệ"
            : status === "contacted"
            ? "Đã liên hệ"
            : status === "scheduled"
            ? "Đã xếp lịch"
            : status === "full"
            ? "Đã đầy"
            : "Còn chỗ"}
        </span>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar userRole="manager" />

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
              Dashboard Quản Lý BeanLearn
            </h1>
            <p className="text-sm text-gray-500">
              Chào mừng trở lại! Hôm nay là ngày 16/04/2025
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm học viên..."
                className="bg-white rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="relative">
              <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-blue-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
                M
              </div>
              <span className="font-medium text-gray-700">Manager</span>
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
                Đăng ký thi mới
              </h3>
              <p className="text-2xl font-bold text-gray-800">24</p>
              <p className="text-xs text-blue-500">5 chưa liên hệ</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex items-center border-l-4 border-green-500">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <FaClipboardList className="text-green-500 text-2xl" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Yêu cầu tư vấn
              </h3>
              <p className="text-2xl font-bold text-gray-800">12</p>
              <p className="text-xs text-green-500">3 lịch hẹn hôm nay</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex items-center border-l-4 border-purple-500">
            <div className="rounded-full bg-purple-100 p-3 mr-4">
              <FaRegCalendarAlt className="text-purple-500 text-2xl" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Thi thử sắp tới
              </h3>
              <p className="text-2xl font-bold text-gray-800">3</p>
              <p className="text-xs text-purple-500">88 thí sinh đăng ký</p>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Exam Registrations */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Đăng ký thi mới nhất
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
                      Học viên
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Khóa học
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trạng thái
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ngày đăng ký
                    </th>
                    <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {registrations.map((registration) => (
                    <tr key={registration.id} className="hover:bg-gray-50">
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium mr-3">
                            {registration.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">
                              {registration.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {registration.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-800">
                          {registration.course}
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <StatusBadge status={registration.status} />
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {registration.registered}
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap text-right">
                        <div className="flex justify-end space-x-2">
                          <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
                            <FaEye size={16} />
                          </button>
                          <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                            <FaPhoneVolume size={16} />
                          </button>
                          <button className="p-1 text-green-500 hover:bg-green-50 rounded">
                            <FaCalendarPlus size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Mock Exams */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Lịch thi thử sắp tới
              </h2>
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                Quản lý thi thử
              </span>
            </div>
            <div className="space-y-4">
              {mockExams.map((exam) => (
                <div
                  key={exam.id}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">{exam.name}</h3>
                    <StatusBadge status={exam.status} />
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <div className="flex items-center mb-1">
                      <FaRegCalendarAlt className="mr-2 text-gray-500" />
                      <span>{exam.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUserGraduate className="mr-2 text-gray-500" />
                      <span>
                        {exam.registered}/{exam.capacity} thí sinh
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        exam.registered === exam.capacity
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                      style={{
                        width: `${(exam.registered / exam.capacity) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="mt-3 flex justify-end space-x-2">
                    <button className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors">
                      Xem danh sách
                    </button>
                    <button className="px-3 py-1 text-xs bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors">
                      Cập nhật
                    </button>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 text-sm text-blue-500 hover:bg-blue-50 rounded-lg border border-blue-200 flex items-center justify-center">
                <FaCalendarPlus className="mr-2" />
                Thêm lịch thi thử mới
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Consultation Requests */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Yêu cầu tư vấn mới
              </h2>
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                Xem tất cả
              </span>
            </div>
            <div className="space-y-3">
              {consultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    <FaUser />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {consultation.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {consultation.phone}
                        </p>
                      </div>
                      <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                        Tư vấn
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        {consultation.subject}
                      </p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <FaRegCalendarAlt className="mr-1" />
                        <span>{consultation.time}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end space-x-2">
                      <button className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors">
                        Liên hệ
                      </button>
                      <button className="px-3 py-1 text-xs bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors">
                        Xác nhận
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-gray-500">
                <FaClipboardList className="mr-2" />
                <span className="text-sm">
                  Đang hiển thị 3/12 yêu cầu mới nhất
                </span>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Hoạt động gần đây
              </h2>
              <button className="text-sm text-gray-500 hover:text-blue-500">
                <FaFileAlt className="inline mr-1" />
                Xuất báo cáo
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{activity.action}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-500">
                        {activity.user}
                      </span>
                      <span className="text-xs text-gray-500">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Công việc cần làm hôm nay
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-yellow-50 p-2 rounded-lg border border-yellow-200">
                  <div className="flex items-center">
                    <FaExclamationCircle className="text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-700">
                      Liên hệ với 5 thí sinh mới
                    </span>
                  </div>
                  <span className="text-xs bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full">
                    Ưu tiên cao
                  </span>
                </div>
                <div className="flex items-center justify-between bg-blue-50 p-2 rounded-lg border border-blue-200">
                  <div className="flex items-center">
                    <FaRegCalendarAlt className="text-blue-500 mr-2" />
                    <span className="text-sm text-gray-700">
                      Chuẩn bị tài liệu cho thi thử IELTS
                    </span>
                  </div>
                  <span className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded-full">
                    Hôm nay
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <FaUserGraduate className="text-blue-500 text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Quản lý thí sinh
            </span>
          </button>

          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <FaPhoneAlt className="text-green-500 text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Tư vấn mới
            </span>
          </button>

          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <FaCalendarDay className="text-purple-500 text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Lịch thi thử
            </span>
          </button>

          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
              <FaPencilAlt className="text-yellow-500 text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Kết quả thi
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ManagerDashboard;
