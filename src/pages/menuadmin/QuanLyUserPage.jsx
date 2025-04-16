import React, { useState, useEffect, useMemo } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import {
  FaUserShield,
  FaEdit,
  FaTrash,
  FaSearch,
  FaFilter,
  FaSyncAlt,
  FaSortAmountDown,
  FaSortAmountUp,
  FaUserPlus,
  FaTimes,
  FaUsers,
  FaUserCog,
  FaUserTimes,
  FaChartPie,
  FaEye,
  FaFileExport,
  FaKey,
  FaCheck,
  FaUserTag,
  FaEnvelope,
} from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// --- Initial mock data with Avatar ---
const initialUserData = [
  {
    id: 1,
    name: "Nguyễn Admin",
    email: "admin@beanlearn.com",
    phone: "0911223344",
    role: "admin",
    status: "active",
    registeredDate: "2024-12-01",
    lastLoginDate: "2025-04-15",
    avatarUrl: "https://via.placeholder.com/100/007bff/ffffff?text=AD",
  },
  {
    id: 2,
    name: "Trần Manager",
    email: "manager@beanlearn.com",
    phone: "0922334455",
    role: "manager",
    status: "active",
    registeredDate: "2025-01-15",
    lastLoginDate: "2025-04-14",
    avatarUrl: "https://via.placeholder.com/100/28a745/ffffff?text=MN",
  },
  {
    id: 3,
    name: "Lê Nhân Viên",
    email: "staff@beanlearn.com",
    phone: "0933445566",
    role: "staff",
    status: "active",
    registeredDate: "2025-02-10",
    lastLoginDate: "2025-04-10",
    avatarUrl: "https://via.placeholder.com/100/6c757d/ffffff?text=ST",
  },
  {
    id: 4,
    name: "Phạm User",
    email: "user@beanlearn.com",
    phone: "0944556677",
    role: "user",
    status: "inactive",
    registeredDate: "2025-01-01",
    lastLoginDate: "2025-03-15",
    avatarUrl: "https://via.placeholder.com/100/ffc107/ffffff?text=US",
  },
  {
    id: 5,
    name: "Hoàng Giáo Viên",
    email: "teacher@beanlearn.com",
    phone: "0955667788",
    role: "teacher",
    status: "active",
    registeredDate: "2025-03-10",
    lastLoginDate: "2025-04-16",
    avatarUrl: "https://via.placeholder.com/100/17a2b8/ffffff?text=TC",
  },
];

// Define available roles and statuses
const ROLES = ["admin", "manager", "staff", "teacher", "user"];
const STATUSES = ["active", "inactive", "suspended"];

const QuanLyUserPage = () => {
  const [data, setData] = useState(initialUserData);
  const [filteredData, setFilteredData] = useState(initialUserData);
  const [keyword, setKeyword] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [filters, setFilters] = useState({ role: "", status: "" });
  const [sorting, setSorting] = useState({
    field: "registeredDate",
    direction: "desc",
  });

  // Form state
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    role: ROLES[4], // default to "user"
    status: STATUSES[0], // default to "active"
    registeredDate: new Date().toISOString().split("T")[0],
    lastLoginDate: "",
    avatarUrl: "",
    password: "", // For new users only
  });

  // Sidebar state
  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem("sidebarCollapsed") === "true"
  );
  const userRole = localStorage.getItem("userRole") || "admin";

  useEffect(() => {
    const handleStorageChange = () =>
      setIsCollapsed(localStorage.getItem("sidebarCollapsed") === "true");
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Filtering and Sorting Effect
  useEffect(() => {
    let filtered = data.filter(
      (item) =>
        (item.name.toLowerCase().includes(keyword.toLowerCase()) ||
          item.email.toLowerCase().includes(keyword.toLowerCase()) ||
          item.phone?.toLowerCase().includes(keyword.toLowerCase()) ||
          item.role.toLowerCase().includes(keyword.toLowerCase())) &&
        (filters.role ? item.role === filters.role : true) &&
        (filters.status ? item.status === filters.status : true)
    );

    filtered.sort((a, b) => {
      const fieldA = a[sorting.field];
      const fieldB = b[sorting.field];
      let comparison = 0;
      if (fieldA > fieldB) comparison = 1;
      else if (fieldA < fieldB) comparison = -1;
      return sorting.direction === "asc" ? comparison : comparison * -1;
    });

    setFilteredData(filtered);
  }, [keyword, filters, sorting, data]);

  // --- Handlers ---
  const handleSearch = () => {}; // useEffect handles it
  const handleKeyPress = (e) => e.key === "Enter" && handleSearch();
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  const resetFilters = () => {
    setFilters({ role: "", status: "" });
    setKeyword("");
    setSorting({ field: "registeredDate", direction: "desc" });
  };
  const handleSort = (field) => {
    setSorting((prev) => ({
      field,
      direction:
        prev.field === field && prev.direction === "asc" ? "desc" : "asc",
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const resetFormData = () => {
    setFormData({
      id: null,
      name: "",
      email: "",
      phone: "",
      role: ROLES[4], // default to "user"
      status: STATUSES[0], // default to "active"
      registeredDate: new Date().toISOString().split("T")[0],
      lastLoginDate: "",
      avatarUrl: "",
      password: "", // For new users only
    });
  };

  const openAddModal = () => {
    resetFormData();
    setShowAddModal(true);
    setShowEditModal(false);
    setShowDetailModal(false);
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setFormData({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      role: user.role,
      status: user.status,
      registeredDate: user.registeredDate,
      lastLoginDate: user.lastLoginDate || "",
      avatarUrl: user.avatarUrl || "",
      password: "", // Empty for edits
    });
    setShowEditModal(true);
    setShowAddModal(false);
    setShowDetailModal(false);
  };

  const openDetailModal = (user) => {
    setSelectedUser(user);
    setShowDetailModal(true);
    setShowAddModal(false);
    setShowEditModal(false);
  };

  const handleSaveUser = () => {
    // Basic Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.role ||
      !formData.status
    ) {
      alert("Vui lòng điền đầy đủ các trường bắt buộc (*).");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Email không hợp lệ.");
      return;
    }

    // Require password for new users
    if (!formData.id && !formData.password) {
      alert("Vui lòng nhập mật khẩu cho người dùng mới.");
      return;
    }

    if (formData.id) {
      // Update existing user
      setData((prev) =>
        prev.map((user) =>
          user.id === formData.id ? { ...formData, password: undefined } : user
        )
      );
      setShowEditModal(false);
    } else {
      // Add new user
      const newId =
        data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;
      // Use a default placeholder if avatarUrl is empty
      const avatar =
        formData.avatarUrl ||
        `https://via.placeholder.com/100/cccccc/ffffff?text=${formData.name.substring(
          0,
          1
        )}`;

      const newUser = {
        ...formData,
        id: newId,
        avatarUrl: avatar,
        lastLoginDate: null, // New users haven't logged in yet
      };

      // Don't store password in the state for security
      delete newUser.password;

      setData((prev) => [...prev, newUser]);
      setShowAddModal(false);
    }

    resetFormData();
    setSelectedUser(null);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa người dùng có ID: ${id}?`)) {
      setData((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setData((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "inactive" : "active",
            }
          : user
      )
    );
  };

  const handleChangeRole = (id, newRole) => {
    setData((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              role: newRole,
            }
          : user
      )
    );
  };

  // --- Helper Components ---
  const StatusBadge = ({ status }) => {
    let bgColor, textColor, Icon;

    switch (status) {
      case "active":
        bgColor = "bg-green-100";
        textColor = "text-green-800";
        Icon = FaCheck;
        break;
      case "inactive":
        bgColor = "bg-gray-100";
        textColor = "text-gray-800";
        Icon = FaTimes;
        break;
      case "suspended":
        bgColor = "bg-red-100";
        textColor = "text-red-800";
        Icon = FaUserTimes;
        break;
      default:
        bgColor = "bg-gray-100";
        textColor = "text-gray-800";
        Icon = FaTimes;
    }

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
      >
        <Icon className="mr-1" />{" "}
        {status === "active"
          ? "Hoạt động"
          : status === "inactive"
          ? "Không hoạt động"
          : "Đã khóa"}
      </span>
    );
  };

  const RoleBadge = ({ role }) => {
    let bgColor, textColor;

    switch (role) {
      case "admin":
        bgColor = "bg-red-100";
        textColor = "text-red-800";
        break;
      case "manager":
        bgColor = "bg-purple-100";
        textColor = "text-purple-800";
        break;
      case "staff":
        bgColor = "bg-blue-100";
        textColor = "text-blue-800";
        break;
      case "teacher":
        bgColor = "bg-teal-100";
        textColor = "text-teal-800";
        break;
      default:
        bgColor = "bg-gray-100";
        textColor = "text-gray-800";
    }

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
      >
        <FaUserTag className="mr-1" />{" "}
        {role === "admin"
          ? "Quản trị viên"
          : role === "manager"
          ? "Quản lý"
          : role === "staff"
          ? "Nhân viên"
          : role === "teacher"
          ? "Giáo viên"
          : "Người dùng"}
      </span>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } catch (error) {
      console.error("Invalid date format:", dateString, error);
      return dateString;
    }
  };

  // --- Statistics Calculation ---
  const stats = useMemo(() => {
    const totalUsers = data.length;
    const activeUsers = data.filter((u) => u.status === "active").length;
    const inactiveUsers = data.filter((u) => u.status === "inactive").length;
    const suspendedUsers = data.filter((u) => u.status === "suspended").length;

    // Role distribution from FILTERED data for relevance to current view
    const roleCounts = filteredData.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});

    return {
      totalUsers,
      activeUsers,
      inactiveUsers,
      suspendedUsers,
      roleCounts,
    };
  }, [data, filteredData]);

  // --- Chart Data Preparation ---
  const roleChartData = useMemo(
    () => ({
      labels: Object.keys(stats.roleCounts).map((role) =>
        role === "admin"
          ? "Quản trị viên"
          : role === "manager"
          ? "Quản lý"
          : role === "staff"
          ? "Nhân viên"
          : role === "teacher"
          ? "Giáo viên"
          : "Người dùng"
      ),
      datasets: [
        {
          data: Object.values(stats.roleCounts),
          backgroundColor: [
            "#dc3545", // admin - red
            "#6f42c1", // manager - purple
            "#0d6efd", // staff - blue
            "#20c997", // teacher - teal
            "#6c757d", // user - gray
            "#fd7e14", // extras
            "#ffc107",
          ],
          hoverOffset: 4,
        },
      ],
    }),
    [stats.roleCounts]
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
  };

  // --- JSX ---
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar userRole={userRole} />
      <main
        className={`${
          isCollapsed ? "ml-20" : "ml-64"
        } flex-1 transition-all duration-300 p-4 md:p-6`}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          <div className="flex items-center mb-4 md:mb-0">
            <FaUserShield className="mr-3 text-blue-600 text-3xl" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Quản lý người dùng BeanLearn
              </h1>
              <p className="text-sm text-gray-500">
                Danh sách và thông tin người dùng hệ thống
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={openAddModal} className="btn btn-primary">
              <FaUserPlus className="mr-2" /> Thêm người dùng
            </button>
            <button className="btn btn-secondary">
              <FaFileExport className="mr-2" /> Xuất dữ liệu
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Tổng số người dùng"
            value={stats.totalUsers}
            icon={FaUsers}
            color="blue"
          />
          <StatCard
            title="Đang hoạt động"
            value={stats.activeUsers}
            icon={FaUserCog}
            color="green"
          />
          <StatCard
            title="Không hoạt động"
            value={stats.inactiveUsers}
            icon={FaUserTimes}
            color="gray"
          />
          <StatCard
            title="Tài khoản bị khóa"
            value={stats.suspendedUsers}
            icon={FaUserTimes}
            color="red"
          />
        </div>

        {/* Chart Section */}
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
            <FaChartPie className="mr-2 text-blue-500" />
            Phân bổ vai trò người dùng (theo bộ lọc)
          </h3>
          <div className="h-64 md:h-72 flex justify-center items-center">
            {Object.keys(stats.roleCounts).length > 0 ? (
              <Doughnut data={roleChartData} options={chartOptions} />
            ) : (
              <p className="text-gray-500">Không có dữ liệu hiển thị.</p>
            )}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Bộ lọc và Tìm kiếm
            </h3>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="text-sm text-blue-600 hover:underline"
            >
              {showFilters ? "Ẩn bộ lọc" : "Hiện bộ lọc"}
            </button>
          </div>
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Role Filter */}
              <div>
                <label
                  htmlFor="roleFilter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Vai trò
                </label>
                <select
                  id="roleFilter"
                  name="role"
                  value={filters.role}
                  onChange={handleFilterChange}
                  className="filter-input"
                >
                  <option value="">Tất cả vai trò</option>
                  {ROLES.map((option) => (
                    <option key={option} value={option}>
                      {option === "admin"
                        ? "Quản trị viên"
                        : option === "manager"
                        ? "Quản lý"
                        : option === "staff"
                        ? "Nhân viên"
                        : option === "teacher"
                        ? "Giáo viên"
                        : "Người dùng"}
                    </option>
                  ))}
                </select>
              </div>
              {/* Status Filter */}
              <div>
                <label
                  htmlFor="statusFilter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Trạng thái
                </label>
                <select
                  id="statusFilter"
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="filter-input"
                >
                  <option value="">Tất cả trạng thái</option>
                  {STATUSES.map((option) => (
                    <option key={option} value={option}>
                      {option === "active"
                        ? "Hoạt động"
                        : option === "inactive"
                        ? "Không hoạt động"
                        : "Đã khóa"}
                    </option>
                  ))}
                </select>
              </div>
              {/* Reset Button */}
              <div className="self-end">
                <button
                  onClick={resetFilters}
                  className="w-full btn btn-secondary flex items-center justify-center text-sm"
                >
                  <FaSyncAlt className="mr-2" /> Đặt lại
                </button>
              </div>
            </div>
          )}
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email, SĐT, vai trò..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  {/* Headers with Sorting */}
                  <HeaderCell
                    field="name"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Người dùng
                  </HeaderCell>
                  <HeaderCell
                    field="email"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Email
                  </HeaderCell>
                  <HeaderCell
                    field="role"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Vai trò
                  </HeaderCell>
                  <HeaderCell
                    field="status"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Trạng thái
                  </HeaderCell>
                  <HeaderCell
                    field="lastLoginDate"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Đăng nhập cuối
                  </HeaderCell>
                  <th className="table-header text-center">Tác vụ</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-4 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-full mr-3 object-cover"
                            src={
                              user.avatarUrl ||
                              "https://via.placeholder.com/100/cccccc/ffffff?text=N/A"
                            }
                            alt={user.name}
                          />
                          <div className="text-sm">
                            <div className="font-medium text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {user.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex items-center">
                          <FaEnvelope className="mr-2 text-gray-400" />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        <select
                          value={user.role}
                          onChange={(e) =>
                            handleChangeRole(user.id, e.target.value)
                          }
                          className="bg-transparent focus:ring-2 focus:ring-blue-500 border rounded-md px-2 py-1 text-sm"
                          >
                          {ROLES.map((role) => (
                            <option key={role} value={role}>
                              {role === "admin"
                                ? "Quản trị viên"
                                : role === "manager"
                                ? "Quản lý"
                                : role === "staff"
                                ? "Nhân viên"
                                : role === "teacher"
                                ? "Giáo viên"
                                : "Người dùng"}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        <StatusBadge status={user.status} />
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
                        {user.lastLoginDate
                          ? formatDate(user.lastLoginDate)
                          : "Chưa đăng nhập"}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        <div className="flex space-x-2 justify-center">
                          <button
                            onClick={() => openDetailModal(user)}
                            title="Xem chi tiết"
                            className="action-icon text-blue-600"
                          >
                            <FaEye />
                          </button>
                          <button
                            onClick={() => openEditModal(user)}
                            title="Sửa thông tin"
                            className="action-icon text-yellow-600"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleToggleStatus(user.id)}
                            title={
                              user.status === "active"
                                ? "Vô hiệu hóa tài khoản"
                                : "Kích hoạt tài khoản"
                            }
                            className={`action-icon ${
                              user.status === "active"
                                ? "text-gray-600"
                                : "text-green-600"
                            }`}
                          >
                            {user.status === "active" ? (
                              <FaUserTimes />
                            ) : (
                              <FaUserCog />
                            )}
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            title="Xóa tài khoản"
                            className="action-icon text-red-600"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      Không tìm thấy người dùng nào.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* --- Modals --- */}
      {/* Add/Edit Modal */}
      {(showAddModal || showEditModal) && (
        <ModalBase
          title={
            showEditModal
              ? "Chỉnh sửa thông tin người dùng"
              : "Thêm người dùng mới"
          }
          onClose={() => {
            setShowAddModal(false);
            setShowEditModal(false);
            resetFormData();
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveUser();
            }}
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Họ tên"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <InputField
                label="Số điện thoại"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <div>
                <label htmlFor="user-role" className="modal-label">
                  Vai trò <span className="text-red-500">*</span>
                </label>
                <select
                  id="user-role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="modal-input"
                  required
                >
                  {ROLES.map((role) => (
                    <option key={role} value={role}>
                      {role === "admin"
                        ? "Quản trị viên"
                        : role === "manager"
                        ? "Quản lý"
                        : role === "staff"
                        ? "Nhân viên"
                        : role === "teacher"
                        ? "Giáo viên"
                        : "Người dùng"}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="user-status" className="modal-label">
                  Trạng thái <span className="text-red-500">*</span>
                </label>
                <select
                  id="user-status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="modal-input"
                  required
                >
                  {STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status === "active"
                        ? "Hoạt động"
                        : status === "inactive"
                        ? "Không hoạt động"
                        : "Đã khóa"}
                    </option>
                  ))}
                </select>
              </div>
              {showAddModal && (
                <InputField
                  label="Mật khẩu"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              )}
              <InputField
                label="Ngày đăng ký"
                name="registeredDate"
                type="date"
                value={formData.registeredDate}
                onChange={handleInputChange}
                disabled={showEditModal} // Không cho sửa ngày đăng ký khi chỉnh sửa
              />
              <InputField
                label="Ảnh đại diện URL"
                name="avatarUrl"
                value={formData.avatarUrl}
                onChange={handleInputChange}
                placeholder="Để trống để dùng ảnh mặc định"
              />
            </div>
            <div className="bg-gray-50 px-6 py-3 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowAddModal(false);
                  setShowEditModal(false);
                }}
                className="btn btn-secondary"
              >
                Hủy bỏ
              </button>
              <button type="submit" className="btn btn-primary">
                <FaCheck className="mr-2" /> Lưu thay đổi
              </button>
            </div>
          </form>
        </ModalBase>
      )}

      {/* Detail Modal */}
      {showDetailModal && selectedUser && (
        <ModalBase
          title="Chi tiết người dùng"
          onClose={() => setShowDetailModal(false)}
        >
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-center mb-4">
              <img
                src={
                  selectedUser.avatarUrl ||
                  "https://via.placeholder.com/150/cccccc/ffffff?text=N/A"
                }
                alt={selectedUser.name}
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
            <DetailRow label="Họ tên" value={selectedUser.name} />
            <DetailRow label="Email" value={selectedUser.email} />
            <DetailRow
              label="Số điện thoại"
              value={selectedUser.phone || "N/A"}
            />
            <DetailRow
              label="Vai trò"
              value={<RoleBadge role={selectedUser.role} />}
            />
            <DetailRow
              label="Trạng thái"
              value={<StatusBadge status={selectedUser.status} />}
            />
            <DetailRow
              label="Ngày đăng ký"
              value={formatDate(selectedUser.registeredDate)}
            />
            <DetailRow
              label="Đăng nhập cuối"
              value={
                selectedUser.lastLoginDate
                  ? formatDate(selectedUser.lastLoginDate)
                  : "Chưa đăng nhập"
              }
            />
          </div>
          <div className="bg-gray-50 px-6 py-3 flex justify-end">
            <button
              onClick={() => setShowDetailModal(false)}
              className="btn btn-secondary"
            >
              Đóng
            </button>
          </div>
        </ModalBase>
      )}
    </div>
  );
};

// --- Reusable Components ---
const StatCard = ({ title, value, icon: Icon, color }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-800",
  }[color];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${colorClasses}`}>
          <Icon className="text-xl" />
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-gray-500">{title}</h4>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
};

const HeaderCell = ({ children, field, currentSort, onSort }) => (
  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
    <button
      onClick={() => onSort(field)}
      className="flex items-center hover:text-blue-600"
    >
      {children}
      {currentSort.field === field && (
        <span className="ml-1">
          {currentSort.direction === "asc" ? (
            <FaSortAmountUp className="inline" />
          ) : (
            <FaSortAmountDown className="inline" />
          )}
        </span>
      )}
    </button>
  </th>
);

const ModalBase = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-xl w-full max-w-2xl">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
      </div>
      {children}
    </div>
  </div>
);

const InputField = ({ label, ...props }) => (
  <div>
    <label className="modal-label">
      {label}
      {props.required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input className="modal-input" {...props} />
  </div>
);

const DetailRow = ({ label, value }) => (
  <div className="flex">
    <dt className="w-1/3 text-sm font-medium text-gray-500">{label}</dt>
    <dd className="w-2/3 text-sm text-gray-900">{value}</dd>
  </div>
);

export default QuanLyUserPage;
