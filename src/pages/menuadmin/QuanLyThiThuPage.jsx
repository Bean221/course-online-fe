import React, { useState, useEffect, useMemo } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import {
  FaFileAlt,
  FaUserGraduate,
  FaEdit,
  FaTrash,
  FaEye,
  FaSearch,
  FaFilter,
  FaSyncAlt,
  FaSortAmountDown,
  FaSortAmountUp,
  FaPlus,
  FaTimes,
  FaChartBar,
  FaChartLine,
  FaFileExport,
  FaCalendarAlt,
  FaCheckCircle,
  FaStar, // For score related icons
} from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// --- Helper Functions ---
const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    // Assuming input is YYYY-MM-DD
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  } catch (error) {
    console.error("Error formatting date:", dateString, error);
    return dateString;
  }
};

const formatScore = (score) => {
  if (typeof score !== "number") return "N/A";
  // Format IELTS scores (e.g., 6.0, 6.5)
  return score.toFixed(1);
};

// --- Initial Data & Constants ---
const initialTestData = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "a@example.com",
    studentId: "SV001",
    ngayThi: "2025-04-01",
    testType: "IELTS Academic",
    overall: 6.5,
    reading: 6.0,
    listening: 6.5,
    writing: 6.0,
    speaking: 7.0,
    notes: "Cần cải thiện Writing Task 1.",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "b@example.com",
    studentId: "SV002",
    ngayThi: "2025-04-05",
    testType: "IELTS Academic",
    overall: 7.0,
    reading: 6.5,
    listening: 7.0,
    writing: 7.0,
    speaking: 7.5,
    notes: "Phát âm tốt, ngữ pháp ổn định.",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "c@example.com",
    studentId: "SV003",
    ngayThi: "2025-04-05",
    testType: "IELTS Academic",
    overall: 5.5,
    reading: 5.0,
    listening: 6.0,
    writing: 5.5,
    speaking: 5.5,
    notes: "",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "d@example.com",
    studentId: "SV004",
    ngayThi: "2025-04-10",
    testType: "IELTS General",
    overall: 7.5,
    reading: 8.0,
    listening: 7.5,
    writing: 6.5,
    speaking: 7.0,
    notes: "Reading xuất sắc.",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "e@example.com",
    studentId: "SV005",
    ngayThi: "2025-04-12",
    testType: "IELTS Academic",
    overall: 6.0,
    reading: 6.5,
    listening: 5.5,
    writing: 6.0,
    speaking: 6.0,
    notes: "Listening cần tập trung hơn.",
  },
  {
    id: 6,
    name: "Vũ Thị F",
    email: "f@example.com",
    studentId: "SV006",
    ngayThi: "2025-04-15",
    testType: "IELTS Academic",
    overall: 8.0,
    reading: 8.5,
    listening: 8.0,
    writing: 7.0,
    speaking: 8.0,
    notes: "Ứng viên tiềm năng 8.0+.",
  },
];

// Get today and start of month for default date range
const today = new Date().toISOString().split("T")[0];
const startOfMonthDate = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  1
)
  .toISOString()
  .split("T")[0];

const QuanLyThiThuPage = () => {
  const [data, setData] = useState(initialTestData);
  const [filteredData, setFilteredData] = useState(initialTestData);
  const [keyword, setKeyword] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [selectedResult, setSelectedResult] = useState(null); // For edit/view details
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [filters, setFilters] = useState({
    startDate: startOfMonthDate,
    endDate: today,
    minOverall: 0,
    maxOverall: 9,
  });

  const [sorting, setSorting] = useState({
    field: "ngayThi",
    direction: "desc",
  });

  // Form state for adding/editing results
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    studentId: "",
    ngayThi: today,
    testType: "IELTS Academic",
    overall: 0,
    reading: 0,
    listening: 0,
    writing: 0,
    speaking: 0,
    notes: "",
  });

  // Sidebar state
  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem("sidebarCollapsed") === "true"
  );
  const userRole = localStorage.getItem("userRole") || "admin"; // Adjust as needed

  useEffect(() => {
    const handleStorageChange = () =>
      setIsCollapsed(localStorage.getItem("sidebarCollapsed") === "true");
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Effect for filtering and sorting data
  useEffect(() => {
    let tempFilteredData = data.filter((item) => {
      const itemDate = new Date(item.ngayThi);
      const startDate = filters.startDate ? new Date(filters.startDate) : null;
      const endDate = filters.endDate ? new Date(filters.endDate) : null;
      if (endDate) endDate.setHours(23, 59, 59, 999);
      if (startDate) startDate.setHours(0, 0, 0, 0);

      const dateMatch =
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate);
      const scoreMatch =
        item.overall >= (filters.minOverall || 0) &&
        item.overall <= (filters.maxOverall || 9);
      const keywordMatch =
        !keyword ||
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.email.toLowerCase().includes(keyword.toLowerCase()) ||
        (item.studentId &&
          item.studentId.toLowerCase().includes(keyword.toLowerCase()));

      return dateMatch && scoreMatch && keywordMatch;
    });

    // Apply sorting
    tempFilteredData.sort((a, b) => {
      const fieldA = a[sorting.field];
      const fieldB = b[sorting.field];
      let comparison = 0;
      if (typeof fieldA === "number" && typeof fieldB === "number") {
        comparison = fieldA - fieldB;
      } else if (fieldA > fieldB) {
        comparison = 1;
      } else if (fieldA < fieldB) {
        comparison = -1;
      }
      return sorting.direction === "asc" ? comparison : comparison * -1;
    });

    setFilteredData(tempFilteredData);
  }, [keyword, filters, sorting, data]);

  // --- Handlers ---
  const handleSearch = () => {
    /* useEffect handles filtering */
  };
  const handleKeyPress = (e) => e.key === "Enter" && handleSearch();

  const handleFilterChange = (e) => {
    const { name, value, type } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      startDate: startOfMonthDate,
      endDate: today,
      minOverall: 0,
      maxOverall: 9,
    });
    setKeyword("");
    setSorting({ field: "ngayThi", direction: "desc" });
  };

  const handleSort = (field) => {
    setSorting((prev) => ({
      field,
      direction:
        prev.field === field && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) || 0 : value;
    // Basic validation for IELTS scores (0-9, step 0.5)
    if (
      ["overall", "reading", "listening", "writing", "speaking"].includes(name)
    ) {
      if (val < 0 || val > 9) return; // Ignore invalid scores
      // Optional: Force step 0.5 if desired, though number input type="number" handles this
    }
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  // Recalculate Overall when individual scores change in the form
  useEffect(() => {
    if (showAddModal || showEditModal) {
      // Only calculate when modal is open
      const { reading, listening, writing, speaking } = formData;
      if (
        reading !== undefined &&
        listening !== undefined &&
        writing !== undefined &&
        speaking !== undefined
      ) {
        const avg = (reading + listening + writing + speaking) / 4;
        // IELTS Overall calculation rule (round to nearest 0.5)
        const roundedOverall = Math.round(avg * 2) / 2;
        setFormData((prev) => ({ ...prev, overall: roundedOverall }));
      }
    }
  }, [formData.reading, formData.listening, formData.writing, formData.speaking, showAddModal, showEditModal, formData]);

  const resetFormData = () => {
    setFormData({
      id: null,
      name: "",
      email: "",
      studentId: "",
      ngayThi: today,
      testType: "IELTS Academic",
      overall: 0,
      reading: 0,
      listening: 0,
      writing: 0,
      speaking: 0,
      notes: "",
    });
  };

  const openAddModal = () => {
    resetFormData();
    setShowAddModal(true);
    setShowEditModal(false);
    setShowDetailModal(false);
  };
  const openEditModal = (result) => {
    setSelectedResult(result);
    setFormData({ ...result });
    setShowEditModal(true);
    setShowAddModal(false);
    setShowDetailModal(false);
  };
  const openDetailModal = (result) => {
    setSelectedResult(result);
    setShowDetailModal(true);
    setShowAddModal(false);
    setShowEditModal(false);
  };

  const handleSaveResult = () => {
    // Add more robust validation if needed
    if (!formData.name || !formData.email || !formData.ngayThi) {
      alert("Vui lòng nhập đầy đủ thông tin bắt buộc (Tên, Email, Ngày thi).");
      return;
    }

    if (formData.id) {
      // Update
      setData((prev) =>
        prev.map((res) => (res.id === formData.id ? { ...formData } : res))
      );
      setShowEditModal(false);
    } else {
      // Add
      const newId =
        data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;
      setData((prev) => [...prev, { ...formData, id: newId }]);
      setShowAddModal(false);
    }
    resetFormData();
    setSelectedResult(null);
  };

  const handleDeleteResult = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa kết quả thi thử này?")) {
      setData((prev) => prev.filter((res) => res.id !== id));
    }
  };

  // --- Statistics Calculation ---
  const stats = useMemo(() => {
    const count = filteredData.length;
    if (count === 0)
      return {
        avgOverall: 0,
        avgReading: 0,
        avgListening: 0,
        avgWriting: 0,
        avgSpeaking: 0,
        scoreDistribution: {},
      };

    const sumOverall = filteredData.reduce(
      (acc, item) => acc + item.overall,
      0
    );
    const sumReading = filteredData.reduce(
      (acc, item) => acc + item.reading,
      0
    );
    const sumListening = filteredData.reduce(
      (acc, item) => acc + item.listening,
      0
    );
    const sumWriting = filteredData.reduce(
      (acc, item) => acc + item.writing,
      0
    );
    const sumSpeaking = filteredData.reduce(
      (acc, item) => acc + item.speaking,
      0
    );

    // Calculate score distribution (e.g., bands 0-4.5, 5.0, 5.5, 6.0, ...)
    const scoreBands = [
      "0-4.5",
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5-9.0",
    ];
    const scoreDistribution = scoreBands.reduce(
      (acc, band) => ({ ...acc, [band]: 0 }),
      {}
    ); // Initialize

    filteredData.forEach((item) => {
      const score = item.overall;
      if (score <= 4.5) scoreDistribution["0-4.5"]++;
      else if (score === 5.0) scoreDistribution["5.0"]++;
      else if (score === 5.5) scoreDistribution["5.5"]++;
      else if (score === 6.0) scoreDistribution["6.0"]++;
      else if (score === 6.5) scoreDistribution["6.5"]++;
      else if (score === 7.0) scoreDistribution["7.0"]++;
      else if (score === 7.5) scoreDistribution["7.5"]++;
      else if (score === 8.0) scoreDistribution["8.0"]++;
      else if (score >= 8.5) scoreDistribution["8.5-9.0"]++;
    });

    return {
      avgOverall: sumOverall / count,
      avgReading: sumReading / count,
      avgListening: sumListening / count,
      avgWriting: sumWriting / count,
      avgSpeaking: sumSpeaking / count,
      scoreDistribution: scoreDistribution,
    };
  }, [filteredData]);

  // --- Chart Data Preparation ---
  const barChartData = useMemo(
    () => ({
      labels: Object.keys(stats.scoreDistribution),
      datasets: [
        {
          label: "Số lượng học viên",
          data: Object.values(stats.scoreDistribution),
          backgroundColor: "rgba(75, 192, 192, 0.6)", // Teal color
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    }),
    [stats.scoreDistribution]
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, title: { display: false } }, // Minimal options for clean look
    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }, // Ensure y-axis starts at 0, integer steps
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
            <FaFileAlt className="mr-3 text-indigo-600 text-2xl" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Quản lý kết quả thi thử
              </h1>
              <p className="text-sm text-gray-500">
                Theo dõi và phân tích điểm thi thử
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={openAddModal}
              className="flex items-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-3 py-2 text-sm transition-colors"
            >
              <FaPlus className="mr-2" /> Thêm kết quả
            </button>
            <button className="flex items-center bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg px-3 py-2 text-sm transition-colors">
              <FaFileExport className="mr-2" /> Xuất dữ liệu
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="mb-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Average Overall */}
          <StatCard
            title="TB Overall"
            value={formatScore(stats.avgOverall)}
            icon={FaStar}
            color="yellow"
          />
          <StatCard
            title="TB Reading"
            value={formatScore(stats.avgReading)}
            icon={FaBookOpen}
            color="blue"
          />
          <StatCard
            title="TB Listening"
            value={formatScore(stats.avgListening)}
            icon={FaHeadphones}
            color="purple"
          />
          <StatCard
            title="TB Writing"
            value={formatScore(stats.avgWriting)}
            icon={FaPencilAlt}
            color="green"
          />
          <StatCard
            title="TB Speaking"
            value={formatScore(stats.avgSpeaking)}
            icon={FaMicrophone}
            color="red"
          />
        </div>

        {/* Charts Section */}
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
            <FaChartBar className="mr-2 text-teal-500" />
            Phân bổ điểm Overall
          </h3>
          <div className="h-64 md:h-72">
            {" "}
            {/* Adjust height */}
            <Bar options={chartOptions} data={barChartData} />
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
              className="text-sm text-indigo-600 hover:underline"
            >
              {showFilters ? "Ẩn bộ lọc" : "Hiện bộ lọc"}
            </button>
          </div>
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Date Filters */}
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Từ ngày thi
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={filters.startDate}
                  onChange={handleFilterChange}
                  className="filter-input"
                />
              </div>
              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Đến ngày thi
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={filters.endDate}
                  onChange={handleFilterChange}
                  className="filter-input"
                />
              </div>
              {/* Score Filters */}
              <div>
                <label
                  htmlFor="minOverall"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Overall thấp nhất
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  max="9"
                  id="minOverall"
                  name="minOverall"
                  value={filters.minOverall}
                  onChange={handleFilterChange}
                  className="filter-input"
                />
              </div>
              <div>
                <label
                  htmlFor="maxOverall"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Overall cao nhất
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  max="9"
                  id="maxOverall"
                  name="maxOverall"
                  value={filters.maxOverall}
                  onChange={handleFilterChange}
                  className="filter-input"
                />
              </div>
              <div className="md:col-span-2 lg:col-span-4 flex justify-end mt-2">
                <button
                  onClick={resetFilters}
                  className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm transition-colors"
                >
                  <FaSyncAlt className="mr-2" /> Đặt lại bộ lọc
                </button>
              </div>
            </div>
          )}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email, mã học viên..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <tr>
                  {/* Define Headers with Sorting */}
                  <HeaderCell
                    field="name"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Họ Tên / Email
                  </HeaderCell>
                  <HeaderCell
                    field="ngayThi"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Ngày Thi
                  </HeaderCell>
                  <HeaderCell
                    field="overall"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Overall
                  </HeaderCell>
                  <HeaderCell
                    field="reading"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Reading
                  </HeaderCell>
                  <HeaderCell
                    field="listening"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Listening
                  </HeaderCell>
                  <HeaderCell
                    field="writing"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Writing
                  </HeaderCell>
                  <HeaderCell
                    field="speaking"
                    currentSort={sorting}
                    onSort={handleSort}
                  >
                    Speaking
                  </HeaderCell>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Tác vụ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((result) => (
                    <tr
                      key={result.id}
                      className="hover:bg-indigo-50 transition-colors"
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {result.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {result.email}
                        </div>
                        {result.studentId && (
                          <div className="text-xs text-gray-400">
                            ID: {result.studentId}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                        {formatDate(result.ngayThi)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-indigo-600 text-center">
                        {formatScore(result.overall)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                        {formatScore(result.reading)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                        {formatScore(result.listening)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                        {formatScore(result.writing)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">
                        {formatScore(result.speaking)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => openDetailModal(result)}
                            title="Xem chi tiết"
                            className="text-green-600 hover:text-green-800"
                          >
                            <FaEye />
                          </button>
                          <button
                            onClick={() => openEditModal(result)}
                            title="Sửa"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDeleteResult(result.id)}
                            title="Xóa"
                            className="text-red-600 hover:text-red-800"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4 text-gray-500">
                      Không tìm thấy kết quả nào.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modals */}
        {/* Add/Edit Modal */}
        {(showAddModal || showEditModal) && (
          <ModalBase
            title={
              showEditModal
                ? "Chỉnh sửa kết quả thi thử"
                : "Thêm kết quả thi thử"
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
                handleSaveResult();
              }}
            >
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Form Fields */}
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
                  label="Mã học viên (Nếu có)"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Ngày thi"
                  name="ngayThi"
                  type="date"
                  value={formData.ngayThi}
                  onChange={handleInputChange}
                  required
                />
                <div className="md:col-span-2">
                  <label
                    htmlFor="testType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Loại bài thi
                  </label>
                  <select
                    id="testType"
                    name="testType"
                    value={formData.testType}
                    onChange={handleInputChange}
                    className="modal-input"
                  >
                    <option value="IELTS Academic">IELTS Academic</option>
                    <option value="IELTS General">IELTS General</option>
                    <option value="SAT">SAT</option>
                    {/* Add other test types */}
                  </select>
                </div>
                <ScoreInputField
                  label="Reading"
                  name="reading"
                  value={formData.reading}
                  onChange={handleInputChange}
                />
                <ScoreInputField
                  label="Listening"
                  name="listening"
                  value={formData.listening}
                  onChange={handleInputChange}
                />
                <ScoreInputField
                  label="Writing"
                  name="writing"
                  value={formData.writing}
                  onChange={handleInputChange}
                />
                <ScoreInputField
                  label="Speaking"
                  name="speaking"
                  value={formData.speaking}
                  onChange={handleInputChange}
                />
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Overall (tự động tính)
                  </p>
                  <input
                    type="number"
                    value={formatScore(formData.overall)}
                    readOnly
                    className="modal-input bg-gray-100 font-bold text-indigo-600"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ghi chú
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="3"
                    className="modal-input"
                  ></textarea>
                </div>
              </div>
              <ModalFooter
                onCancel={() => {
                  setShowAddModal(false);
                  setShowEditModal(false);
                  resetFormData();
                }}
                submitText={showEditModal ? "Lưu thay đổi" : "Thêm kết quả"}
              />
            </form>
          </ModalBase>
        )}

        {/* Detail Modal */}
        {showDetailModal && selectedResult && (
          <ModalBase
            title={`Chi tiết kết quả - ${selectedResult.name}`}
            onClose={() => {
              setShowDetailModal(false);
              setSelectedResult(null);
            }}
          >
            <div className="p-6 space-y-3">
              <p>
                <strong>Họ tên:</strong> {selectedResult.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedResult.email}
              </p>
              {selectedResult.studentId && (
                <p>
                  <strong>Mã học viên:</strong> {selectedResult.studentId}
                </p>
              )}
              <p>
                <strong>Ngày thi:</strong> {formatDate(selectedResult.ngayThi)}
              </p>
              <p>
                <strong>Loại bài thi:</strong> {selectedResult.testType}
              </p>
              <hr className="my-2" />
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <p>
                  <strong>Overall:</strong>{" "}
                  <span className="font-bold text-lg text-indigo-600">
                    {formatScore(selectedResult.overall)}
                  </span>
                </p>
                <p>
                  <strong>Reading:</strong>{" "}
                  {formatScore(selectedResult.reading)}
                </p>
                <p>
                  <strong>Listening:</strong>{" "}
                  {formatScore(selectedResult.listening)}
                </p>
                <p>
                  <strong>Writing:</strong>{" "}
                  {formatScore(selectedResult.writing)}
                </p>
                <p>
                  <strong>Speaking:</strong>{" "}
                  {formatScore(selectedResult.speaking)}
                </p>
              </div>
              <hr className="my-2" />
              <p>
                <strong>Ghi chú:</strong> {selectedResult.notes || "Không có"}
              </p>
            </div>
            <ModalFooter
              onCancel={() => {
                setShowDetailModal(false);
                setSelectedResult(null);
              }}
              showSubmit={false}
            />
          </ModalBase>
        )}
      </main>
    </div>
  );
};

// --- Reusable Components ---
const StatCard = ({ title, value, icon: Icon, color = "gray" }) => {
  const colors = {
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
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
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            {value}
          </h3>
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
    className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
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
          <FaTimes size={22} />
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
      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-sm"
    >
      Hủy
    </button>
    {showSubmit && (
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 text-sm"
      >
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
  ...props
}) => (
  <div className={type === "textarea" ? "md:col-span-2" : ""}>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="modal-input"
        {...props}
      ></textarea>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="modal-input"
        {...props}
      />
    )}
  </div>
);

const ScoreInputField = ({ label, name, value, onChange }) => (
  <InputField
    label={label}
    name={name}
    type="number"
    step="0.5"
    min="0"
    max="9"
    value={value}
    onChange={onChange}
    required
  />
);

// Add this utility class to your global CSS or a <style> tag if needed
// Or configure Tailwind to support it
// .filter-input { /* Example styling */
//  @apply w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500;
// }
// .modal-input {
//  @apply w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500;
// }

// Import FaBookOpen, FaHeadphones, FaPencilAlt, FaMicrophone if not already imported
import {
  FaBookOpen,
  FaHeadphones,
  FaPencilAlt,
  FaMicrophone,
} from "react-icons/fa";

export default QuanLyThiThuPage;