import React, { useState, useEffect, useMemo } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import {
  FaUserTie,
  FaEdit,
  FaTrash,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaFilter,
  FaSyncAlt,
  FaSortAmountDown,
  FaSortAmountUp,
  FaUserPlus,
  FaTimes,
  FaUsers,
  FaUserCheck,
  FaUserTimes, // Icons for Stats
  FaChartPie,
  FaChartBar,
  FaEye,
  FaFileExport, // Icons for Charts, View, Export
} from "react-icons/fa";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// --- Initial mock data with Avatar ---
const initialStaffData = [
  {
    id: 1,
    name: "Phạm Giang Viên",
    role: "Giảng viên IELTS",
    email: "giangvien@beanlearn.com",
    phone: "0911223344",
    startDate: "2025-01-01",
    status: "Đang làm",
    avatarUrl: "https://via.placeholder.com/100/007bff/ffffff?text=GV",
    endDate: null,
  },
  {
    id: 2,
    name: "Trần Trợ Lý",
    role: "Trợ lý giám đốc",
    email: "troly@beanlearn.com",
    phone: "0922334455",
    startDate: "2025-02-15",
    status: "Đang làm",
    avatarUrl: "https://via.placeholder.com/100/6c757d/ffffff?text=TL",
    endDate: null,
  },
  {
    id: 3,
    name: "Nguyễn Marketing",
    role: "Chuyên viên Marketing",
    email: "marketing@beanlearn.com",
    phone: "0933445566",
    startDate: "2024-11-10",
    status: "Đang làm",
    avatarUrl: "https://via.placeholder.com/100/17a2b8/ffffff?text=MKT",
    endDate: null,
  },
  {
    id: 4,
    name: "Lê Kế Toán",
    role: "Kế toán",
    email: "ketoan@beanlearn.com",
    phone: "0944556677",
    startDate: "2025-03-01",
    status: "Nghỉ việc",
    avatarUrl: "https://via.placeholder.com/100/ffc107/ffffff?text=KT",
    endDate: "2025-04-15",
  },
  {
    id: 5,
    name: "Hoàng Trợ Giảng",
    role: "Trợ giảng",
    email: "trogiang@beanlearn.com",
    phone: "0955667788",
    startDate: "2025-03-10",
    status: "Đang làm",
    avatarUrl: "https://via.placeholder.com/100/28a745/ffffff?text=TG",
    endDate: null,
  },
];

// Define available roles and statuses
const ROLES = [...new Set(initialStaffData.map((s) => s.role))]; // Dynamically get roles from data
const STATUSES = ["Đang làm", "Nghỉ việc"];

const NhanSuBeanLearnPage = () => {
  const [data, setData] = useState(initialStaffData);
  const [filteredData, setFilteredData] = useState(initialStaffData);
  const [keyword, setKeyword] = useState("");
  const [showFilters, setShowFilters] = useState(false); // Hide filters initially
  const [selectedStaff, setSelectedStaff] = useState(null); // For edit/view details
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [filters, setFilters] = useState({ role: "", status: "" });
  const [sorting, setSorting] = useState({
    field: "startDate",
    direction: "desc",
  });

  // Form state
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    role: ROLES[0] || "",
    email: "",
    phone: "",
    startDate: new Date().toISOString().split("T")[0],
    status: STATUSES[0],
    avatarUrl: "",
    endDate: null,
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
          item.phone.toLowerCase().includes(keyword.toLowerCase()) ||
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
    setSorting({ field: "startDate", direction: "desc" });
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
      role: ROLES[0] || "",
      email: "",
      phone: "",
      startDate: new Date().toISOString().split("T")[0],
      status: STATUSES[0],
      avatarUrl: "",
      endDate: null,
    });
  };

  const openAddModal = () => {
    resetFormData();
    setShowAddModal(true);
    setShowEditModal(false);
    setShowDetailModal(false);
  };
  const openEditModal = (staff) => {
    setSelectedStaff(staff);
    setFormData({
      // Ensure all fields are populated
      id: staff.id,
      name: staff.name,
      role: staff.role,
      email: staff.email,
      phone: staff.phone,
      startDate: staff.startDate,
      status: staff.status,
      avatarUrl: staff.avatarUrl || "",
      endDate: staff.endDate || "", // Handle null endDate
    });
    setShowEditModal(true);
    setShowAddModal(false);
    setShowDetailModal(false);
  };
  const openDetailModal = (staff) => {
    setSelectedStaff(staff);
    setShowDetailModal(true);
    setShowAddModal(false);
    setShowEditModal(false);
  };

  const handleSaveStaff = () => {
    // Basic Validation
    if (
      !formData.name ||
      !formData.role ||
      !formData.email ||
      !formData.phone ||
      !formData.startDate ||
      !formData.status
    ) {
      alert("Vui lòng điền đầy đủ các trường bắt buộc (*).");
      return;
    }
    // Ensure endDate is null if status is "Đang làm"
    const finalFormData = {
      ...formData,
      endDate: formData.status === "Đang làm" ? null : formData.endDate || null, // Set endDate based on status
    };

    if (finalFormData.id) {
      // Update
      setData((prev) =>
        prev.map((staff) =>
          staff.id === finalFormData.id ? finalFormData : staff
        )
      );
      setShowEditModal(false);
    } else {
      // Add
      const newId =
        data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;
      // Use a default placeholder if avatarUrl is empty
      const avatar =
        finalFormData.avatarUrl ||
        `https://via.placeholder.com/100/cccccc/ffffff?text=${finalFormData.name.substring(
          0,
          1
        )}`;
      setData((prev) => [
        ...prev,
        { ...finalFormData, id: newId, avatarUrl: avatar },
      ]);
      setShowAddModal(false);
    }
    resetFormData();
    setSelectedStaff(null);
  };

  const handleDeleteStaff = (id) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa nhân viên có ID: ${id}?`)) {
      setData((prev) => prev.filter((staff) => staff.id !== id));
    }
  };

  // --- Helper Components ---
  const StatusBadge = ({ status }) => {
    /* ... (same as before) ... */
    const isActive = status === "Đang làm";
    const bgColor = isActive
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
    const Icon = isActive ? FaCheckCircle : FaTimesCircle;

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}
      >
        <Icon className="mr-1" /> {status}
      </span>
    );
  };
  const formatDate = (dateString) => {
    /* ... (same as before) ... */
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
    const totalStaff = data.length; // Use full data for totals
    const activeStaff = data.filter((s) => s.status === "Đang làm").length;
    const inactiveStaff = totalStaff - activeStaff;

    // Role distribution from FILTERED data for relevance to current view
    const roleCounts = filteredData.reduce((acc, staff) => {
      acc[staff.role] = (acc[staff.role] || 0) + 1;
      return acc;
    }, {});

    return { totalStaff, activeStaff, inactiveStaff, roleCounts };
  }, [data, filteredData]); // Depend on full data for totals, filtered for role counts

  // --- Chart Data Preparation ---
  const roleChartData = useMemo(
    () => ({
      labels: Object.keys(stats.roleCounts),
      datasets: [
        {
          data: Object.values(stats.roleCounts),
          backgroundColor: [
            // Add more colors if needed
            "#4CAF50",
            "#2196F3",
            "#FFC107",
            "#9C27B0",
            "#FF5722",
            "#009688",
            "#E91E63",
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
            <FaUserTie className="mr-3 text-green-600 text-3xl" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Quản lý nhân sự BeanLearn
              </h1>
              <p className="text-sm text-gray-500">
                Danh sách và thông tin nhân viên
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={openAddModal} className="btn btn-primary">
              {" "}
              {/* Using simplified btn classes */}
              <FaUserPlus className="mr-2" /> Thêm nhân viên
            </button>
            <button className="btn btn-secondary">
              <FaFileExport className="mr-2" /> Xuất dữ liệu
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Tổng số nhân viên"
            value={stats.totalStaff}
            icon={FaUsers}
            color="blue"
          />
          <StatCard
            title="Đang làm việc"
            value={stats.activeStaff}
            icon={FaUserCheck}
            color="green"
          />
          <StatCard
            title="Đã nghỉ việc"
            value={stats.inactiveStaff}
            icon={FaUserTimes}
            color="red"
          />
        </div>

        {/* Chart Section */}
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
            <FaChartPie className="mr-2 text-purple-500" />
            Phân bổ vị trí (theo bộ lọc)
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
              className="text-sm text-green-600 hover:underline"
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
                  Vị trí
                </label>
                <select
                  id="roleFilter"
                  name="role"
                  value={filters.role}
                  onChange={handleFilterChange}
                  className="filter-input"
                >
                  <option value="">Tất cả vị trí</option>
                  {ROLES.map((option) => (
                    <option key={option} value={option}>
                      {option}
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
                      {option}
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
              placeholder="Tìm kiếm theo tên, email, SĐT, vị trí..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Staff Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-green-50 to-teal-50">
                <tr>
                  {/* Headers with Sorting */}
                  <HeaderCell
                    field="name"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Nhân viên
                  </HeaderCell>
                  <HeaderCell
                    field="role"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Vị trí
                  </HeaderCell>
                  <th className="table-header">Liên hệ</th>
                  <HeaderCell
                    field="startDate"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Ngày vào
                  </HeaderCell>
                  <HeaderCell
                    field="status"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Trạng thái
                  </HeaderCell>
                  <th className="table-header text-center">Tác vụ</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((staff) => (
                    <tr
                      key={staff.id}
                      className="hover:bg-green-50 transition-colors"
                    >
                      <td className="px-4 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-full mr-3 object-cover"
                            src={
                              staff.avatarUrl ||
                              "https://via.placeholder.com/100/cccccc/ffffff?text=N/A"
                            }
                            alt={staff.name}
                          />
                          <div className="text-sm">
                            <div className="font-medium text-gray-900">
                              {staff.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
                        {staff.role}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        <div>{staff.email}</div>
                        <div>{staff.phone}</div>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(staff.startDate)}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        <StatusBadge status={staff.status} />
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        <div className="flex space-x-2 justify-center">
                          <button
                            onClick={() => openDetailModal(staff)}
                            title="Xem"
                            className="action-icon text-green-600"
                          >
                            <FaEye />
                          </button>
                          <button
                            onClick={() => openEditModal(staff)}
                            title="Sửa"
                            className="action-icon text-blue-600"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDeleteStaff(staff.id)}
                            title="Xóa"
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
                      Không tìm thấy nhân viên.
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
              ? "Chỉnh sửa thông tin nhân viên"
              : "Thêm nhân viên mới"
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
              handleSaveStaff();
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
                required
              />
              <div>
                <label htmlFor="staff-role" className="modal-label">
                  Vị trí <span className="text-red-500">*</span>
                </label>
                <select
                  id="staff-role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="modal-input"
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <InputField
                label="Ngày vào làm"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
              <div>
                <label htmlFor="staff-status" className="modal-label">
                  Trạng thái <span className="text-red-500">*</span>
                </label>
                <select
                  id="staff-status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="modal-input"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              {/* Conditionally show End Date only if status is "Nghỉ việc" */}
              {formData.status === "Nghỉ việc" && (
                <InputField
                  label="Ngày nghỉ việc"
                  name="endDate"
                  type="date"
                  value={formData.endDate || ""}
                  onChange={handleInputChange}
                />
              )}
              <div className="md:col-span-2">
                <InputField
                  label="URL Ảnh đại diện (Avatar)"
                  name="avatarUrl"
                  value={formData.avatarUrl}
                  onChange={handleInputChange}
                  placeholder="Để trống để dùng ảnh mặc định"
                />
              </div>
            </div>
            <ModalFooter
              onCancel={() => {
                setShowAddModal(false);
                setShowEditModal(false);
                resetFormData();
              }}
              submitText={showEditModal ? "Lưu thay đổi" : "Thêm nhân viên"}
            />
          </form>
        </ModalBase>
      )}

      {/* Detail Modal */}
      {showDetailModal && selectedStaff && (
        <ModalBase
          title={`Chi tiết nhân viên - ${selectedStaff.name}`}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedStaff(null);
          }}
        >
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <img
                className="h-20 w-20 rounded-full object-cover border"
                src={
                  selectedStaff.avatarUrl ||
                  "https://via.placeholder.com/100/cccccc/ffffff?text=N/A"
                }
                alt={selectedStaff.name}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {selectedStaff.name}
                </h3>
                <p className="text-sm text-blue-600">{selectedStaff.role}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <p>
                <strong>Email:</strong> {selectedStaff.email}
              </p>
              <p>
                <strong>Điện thoại:</strong> {selectedStaff.phone}
              </p>
              <p>
                <strong>Ngày vào làm:</strong>{" "}
                {formatDate(selectedStaff.startDate)}
              </p>
              <p>
                <strong>Trạng thái:</strong>{" "}
                <StatusBadge status={selectedStaff.status} />
              </p>
              {selectedStaff.status === "Nghỉ việc" &&
                selectedStaff.endDate && (
                  <p>
                    <strong>Ngày nghỉ việc:</strong>{" "}
                    {formatDate(selectedStaff.endDate)}
                  </p>
                )}
            </div>
          </div>
          <ModalFooter
            onCancel={() => {
              setShowDetailModal(false);
              setSelectedStaff(null);
            }}
            showSubmit={false}
          />
        </ModalBase>
      )}
    </div>
  );
};

// --- Reusable Components ---
const StatCard = ({ title, value, icon: Icon, color = "gray" }) => {
  const colors = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
    gray: { bg: "bg-gray-100", text: "text-gray-600" },
  };
  const theme = colors[color] || colors.gray;
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
        {Icon && (
          <div className={`${theme.bg} p-3 rounded-lg`}>
            <Icon className={`${theme.text} text-xl`} />
          </div>
        )}
      </div>
    </div>
  );
};

const HeaderCell = ({ children, field, currentSort, onSort }) => (
  <th
    scope="col"
    className="table-header cursor-pointer hover:bg-gray-100"
    onClick={() => onSort(field)}
  >
    {children}
    {currentSort.field === field &&
      (currentSort.direction === "asc" ? (
        <FaSortAmountUp className="inline ml-1 opacity-70" />
      ) : (
        <FaSortAmountDown className="inline ml-1 opacity-70" />
      ))}
  </th>
);

const ModalBase = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-40 p-4">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          {" "}
          <FaTimes size={22} />{" "}
        </button>
      </div>
      {children}
    </div>
  </div>
);

const ModalFooter = ({ onCancel, submitText = "Lưu", showSubmit = true }) => (
  <div className="flex justify-end space-x-3 p-4 border-t sticky bottom-0 bg-gray-50 z-10">
    <button
      type="button"
      onClick={onCancel}
      className="btn btn-secondary text-sm"
    >
      Hủy
    </button>
    {showSubmit && (
      <button type="submit" className="btn btn-primary text-sm">
        {submitText}
      </button>
    )}
  </div>
);

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  ...props
}) => (
  <div>
    <label htmlFor={name} className="modal-label">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="modal-input"
      {...props}
    />
  </div>
);

// Add these base styles to your global CSS (e.g., index.css) or Tailwind config
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn { @apply font-medium rounded-lg px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2; }
  .btn-primary { @apply bg-green-500 hover:bg-green-600 text-white focus:ring-green-500; }
  .btn-secondary { @apply bg-gray-100 hover:bg-gray-200 text-gray-700 focus:ring-gray-400; }

  .filter-input { @apply w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 text-sm; }
  .modal-input { @apply w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 text-sm; }
  .modal-label { @apply block text-sm font-medium text-gray-700 mb-1; }

  .table-header { @apply px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider; }
  .action-icon { @apply p-1 rounded hover:bg-gray-200; }
}
*/

export default NhanSuBeanLearnPage;
