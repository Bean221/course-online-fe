import React, { useState, useEffect, useMemo } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import {
  FaDollarSign,
  FaCalendarAlt,
  FaFilter,
  FaSyncAlt,
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
  FaChartLine,
  FaChartPie,
  FaFileExport, // Added for export functionality
  FaRegFileAlt // Added for general record icon
} from "react-icons/fa";
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// --- Helper Functions ---
const formatCurrency = (amount) => {
  if (typeof amount !== 'number') return "N/A";
  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
        // Assuming input is YYYY-MM-DD
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    } catch (error) {
        console.error("Error formatting date:", dateString, error);
        return dateString; // Return original if formatting fails
    }
};

// --- Initial Data & Constants ---
const REVENUE_SOURCES = ["Học phí IELTS", "Học phí SAT", "Học phí Tiếng Anh trẻ em", "Phí thi thử", "Phí thi thật", "Tư vấn du học", "Khác"];

const initialRevenueData = [
  { id: 1, date: "2025-04-01", amount: 5500000, source: "Học phí IELTS", description: "HP K101 - Nguyễn V.A", transactionId: "T001" },
  { id: 2, date: "2025-04-01", amount: 200000, source: "Phí thi thử", description: "Thi thử đợt 1/4", transactionId: "T002" },
  { id: 3, date: "2025-04-02", amount: 6000000, source: "Học phí SAT", description: "HP K55 - Trần T.B", transactionId: "T003" },
  { id: 4, date: "2025-04-03", amount: 4800000, source: "Phí thi thật", description: "Lệ phí IELTS - Lê V.C", transactionId: "T004" },
  { id: 5, date: "2025-04-03", amount: 3000000, source: "Học phí Tiếng Anh trẻ em", description: "HP Kiddy_05", transactionId: "T005" },
  { id: 6, date: "2025-04-04", amount: 5500000, source: "Học phí IELTS", description: "HP K102 - Phạm T.D", transactionId: "T006" },
  { id: 7, date: "2025-04-05", amount: 150000, source: "Phí thi thử", description: "Thi thử đợt 2/4", transactionId: "T007" },
  { id: 8, date: "2025-04-08", amount: 7000000, source: "Tư vấn du học", description: "Phí TVDH - Canada", transactionId: "T008" },
  { id: 9, date: "2025-04-10", amount: 5500000, source: "Học phí IELTS", description: "HP K101 - Hoàng V.E", transactionId: "T009" },
  { id: 10, date: "2025-04-11", amount: 4800000, source: "Phí thi thật", description: "Lệ phí IELTS - Vũ T.F", transactionId: "T010" },
  { id: 11, date: "2025-04-12", amount: 3200000, source: "Học phí Tiếng Anh trẻ em", description: "HP Kiddy_06", transactionId: "T011" },
  { id: 12, date: "2025-04-14", amount: 6000000, source: "Học phí SAT", description: "HP K56 - Đỗ Q.G", transactionId: "T012" },
  { id: 13, date: "2025-04-15", amount: 250000, source: "Phí thi thử", description: "Thi thử đợt 3/4", transactionId: "T013" },
  { id: 14, date: "2025-04-16", amount: 500000, source: "Khác", description: "Bán giáo trình", transactionId: "T014" },
];

// Get today and start of month for default date range
const today = new Date().toISOString().split('T')[0];
const startOfMonthDate = new Date(new Date().setDate(1)).toISOString().split('T')[0];


const QuanLyDoanhThuPage = () => {
  const [data, setData] = useState(initialRevenueData);
  const [filteredData, setFilteredData] = useState(initialRevenueData);
  const [keyword, setKeyword] = useState("");
  const [showFilters, setShowFilters] = useState(true); // Show filters by default
  const [setSelectedRecord] = useState(null); // For editing
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [filters, setFilters] = useState({
    startDate: startOfMonthDate, // Default start date (start of current month)
    endDate: today,         // Default end date (today)
    source: "",             // Default source (all)
  });

  const [sorting, setSorting] = useState({
    field: "date",
    direction: "desc",
  });

  // Form state for adding/editing records
  const [formData, setFormData] = useState({
    id: null,
    date: today,
    amount: 0,
    source: REVENUE_SOURCES[0],
    description: "",
    transactionId: "",
  });

  // Lấy trạng thái sidebar từ localStorage
  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem("sidebarCollapsed") === "true"
  );
  const userRole = localStorage.getItem("userRole") || "admin";

  // Lắng nghe sự thay đổi của localStorage for sidebar
  useEffect(() => {
    const handleStorageChange = () => {
      setIsCollapsed(localStorage.getItem("sidebarCollapsed") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Effect for filtering and sorting data
  useEffect(() => {
    let tempFilteredData = data.filter((item) => {
      const itemDate = new Date(item.date);
      const startDate = filters.startDate ? new Date(filters.startDate) : null;
      const endDate = filters.endDate ? new Date(filters.endDate) : null;

      // Adjust end date to include the whole day
      if (endDate) {
        endDate.setHours(23, 59, 59, 999);
      }
      // Adjust start date to the beginning of the day
       if (startDate) {
         startDate.setHours(0, 0, 0, 0);
      }


      const dateMatch =
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate);

      const sourceMatch = !filters.source || item.source === filters.source;

      const keywordMatch =
        !keyword ||
        item.source.toLowerCase().includes(keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(keyword.toLowerCase()) ||
        (item.transactionId && item.transactionId.toLowerCase().includes(keyword.toLowerCase())) ||
        item.amount.toString().includes(keyword); // Search by amount as well


      return dateMatch && sourceMatch && keywordMatch;
    });

    // Apply sorting
    tempFilteredData.sort((a, b) => {
      const fieldA = a[sorting.field];
      const fieldB = b[sorting.field];

      let comparison = 0;
      // Handle amount sorting numerically
      if (sorting.field === 'amount') {
          comparison = fieldA - fieldB;
      }
      // Handle date or string sorting
      else if (fieldA > fieldB) {
        comparison = 1;
      } else if (fieldA < fieldB) {
        comparison = -1;
      }

      return sorting.direction === "asc" ? comparison : comparison * -1;
    });

    setFilteredData(tempFilteredData);
  }, [keyword, filters, sorting, data]);

  // --- Handlers ---

  const handleSearch = () => { /* useEffect handles filtering */ };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      startDate: startOfMonthDate,
      endDate: today,
      source: "",
    });
    setKeyword("");
    setSorting({ field: "date", direction: "desc" });
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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value // Handle number input
    }));
  };

  const resetFormData = () => {
     setFormData({
        id: null, date: today, amount: 0, source: REVENUE_SOURCES[0],
        description: "", transactionId: ""
     });
  }

  const openAddModal = () => {
    resetFormData();
    setShowAddModal(true);
    setShowEditModal(false);
  };

  const openEditModal = (record) => {
    setSelectedRecord(record);
    setFormData({
        id: record.id,
        date: record.date,
        amount: record.amount,
        source: record.source,
        description: record.description || "",
        transactionId: record.transactionId || "",
    });
    setShowEditModal(true);
    setShowAddModal(false);
  };

  const handleSaveRecord = () => {
    if (!formData.date || formData.amount <= 0 || !formData.source) {
        alert("Vui lòng nhập đầy đủ thông tin hợp lệ (Ngày, Số tiền > 0, Nguồn thu).");
        return;
    }

    if (formData.id) {
      // Update Record
      setData(prevData => prevData.map(record =>
        record.id === formData.id ? { ...formData } : record
      ));
      setShowEditModal(false);
    } else {
      // Add New Record
      const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
      const newRecord = { ...formData, id: newId };
      setData(prevData => [...prevData, newRecord]);
      setShowAddModal(false);
    }
    resetFormData();
    setSelectedRecord(null);
  };

  const handleDeleteRecord = (id) => {
    // Consider if deleting revenue is allowed. Maybe disable/archive instead?
    // For now, implementing delete as requested.
    if (window.confirm("Bạn có chắc chắn muốn xóa bản ghi doanh thu này? Hành động này không thể hoàn tác.")) {
      setData(prevData => prevData.filter(record => record.id !== id));
    }
  };

  // --- Statistics Calculation ---
  const stats = useMemo(() => {
    const totalRevenue = filteredData.reduce((acc, item) => acc + item.amount, 0);
    const numberOfTransactions = filteredData.length;
    const averageTransaction = numberOfTransactions > 0 ? totalRevenue / numberOfTransactions : 0;

    const revenueBySource = filteredData.reduce((acc, item) => {
      acc[item.source] = (acc[item.source] || 0) + item.amount;
      return acc;
    }, {});

    return {
      totalRevenue,
      numberOfTransactions,
      averageTransaction,
      revenueBySource,
    };
  }, [filteredData]);

  // --- Chart Data Preparation ---
  const lineChartData = useMemo(() => {
    // Group revenue by date for the line chart
    const revenueByDate = filteredData.reduce((acc, item) => {
        const dateKey = item.date; // Assuming YYYY-MM-DD
        acc[dateKey] = (acc[dateKey] || 0) + item.amount;
        return acc;
        }, {});

    const sortedDates = Object.keys(revenueByDate).sort();
    const labels = sortedDates.map(date => formatDate(date)); // Format date for labels
    const dataPoints = sortedDates.map(date => revenueByDate[date]);

    return {
        labels: labels,
        datasets: [
            {
            label: 'Doanh thu hàng ngày',
            data: dataPoints,
            borderColor: 'rgb(54, 162, 235)', // Blue
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            fill: true,
            tension: 0.1
            },
        ],
    };
  }, [filteredData]);

  const doughnutChartData = useMemo(() => {
    const labels = Object.keys(stats.revenueBySource);
    const dataPoints = Object.values(stats.revenueBySource);
    // Generate dynamic colors for doughnut chart slices
    const backgroundColors = labels.map((_, index) => `hsl(${index * (360 / labels.length)}, 70%, 60%)`);
    const borderColors = labels.map((_, index) => `hsl(${index * (360 / labels.length)}, 70%, 40%)`);


    return {
      labels: labels,
      datasets: [
        {
          label: 'Doanh thu theo nguồn',
          data: dataPoints,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    };
  }, [stats.revenueBySource]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Biểu đồ Doanh thu', // Generic title, can be customized per chart
      },
      tooltip: {
          callbacks: {
              label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) {
                      label += ': ';
                  }
                  if (context.parsed.y !== null) {
                     // Check if it's the doughnut chart (context.label exists)
                     if(context.label) {
                         label = context.label + ': ';
                     }
                     label += formatCurrency(context.parsed.y || context.parsed); // Doughnut uses context.parsed directly
                  }
                  return label;
              }
          }
      }
    },
  };


  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar userRole={userRole} />

      {/* Nội dung trang */}
      <main
        className={`${
          isCollapsed ? "ml-20" : "ml-64"
        } flex-1 transition-all duration-300 p-4 md:p-6`}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          <div className="flex items-center mb-4 md:mb-0">
            <FaDollarSign className="mr-3 text-green-600 text-2xl" />
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Quản lý doanh thu</h1>
                 <p className="text-sm text-gray-500">Theo dõi và phân tích doanh thu</p>
            </div>
          </div>

           <div className="flex flex-wrap gap-2">
                <button
                onClick={openAddModal}
                className="flex items-center bg-green-500 hover:bg-green-600 text-white rounded-lg px-3 py-2 text-sm transition-colors"
                >
                <FaPlus className="mr-2" /> Thêm bản ghi
                </button>
                 {/* Optional: Add Export Button */}
                 <button
                    className="flex items-center bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg px-3 py-2 text-sm transition-colors"
                    // onClick={handleExport} // Add export handler later
                >
                <FaFileExport className="mr-2" /> Xuất báo cáo
                </button>
           </div>
        </div>

        {/* Statistics Cards */}
         <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-green-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Tổng Doanh Thu (Trong kỳ)</p>
                  <h3 className="text-2xl font-bold text-gray-800">{formatCurrency(stats.totalRevenue)}</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaDollarSign className="text-green-600 text-xl" />
                </div>
              </div>
            </div>
             <div className="bg-white rounded-xl shadow-sm p-4 border border-blue-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Số Giao Dịch (Trong kỳ)</p>
                  <h3 className="text-2xl font-bold text-gray-800">{stats.numberOfTransactions}</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaRegFileAlt className="text-blue-600 text-xl" />
                </div>
              </div>
            </div>
             <div className="bg-white rounded-xl shadow-sm p-4 border border-yellow-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Trung Bình/Giao Dịch</p>
                  <h3 className="text-2xl font-bold text-gray-800">{formatCurrency(stats.averageTransaction)}</h3>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <FaDollarSign className="text-yellow-600 text-xl" /> {/* Using dollar again, maybe change icon */}
                </div>
              </div>
            </div>
         </div>

        {/* Charts Section */}
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
             <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 h-80">
                 <h3 className="text-lg font-semibold mb-2 text-gray-700 flex items-center"><FaChartLine className="mr-2 text-blue-500"/>Doanh thu theo ngày</h3>
                 <div className="h-64"> {/* Constrain chart height */}
                    <Line options={{...chartOptions, plugins: {...chartOptions.plugins, title: { display: false }}}} data={lineChartData} />
                 </div>
             </div>
             <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 h-80">
                 <h3 className="text-lg font-semibold mb-2 text-gray-700 flex items-center"><FaChartPie className="mr-2 text-purple-500"/>Phân bổ theo nguồn</h3>
                 <div className="h-64"> {/* Constrain chart height */}
                    <Doughnut options={{...chartOptions, plugins: {...chartOptions.plugins, title: { display: false }}}} data={doughnutChartData} />
                 </div>
             </div>
        </div>


        {/* Search and Filter Bar */}
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
             <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-semibold text-gray-700">Bộ lọc và Tìm kiếm</h3>
                 <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="text-sm text-blue-600 hover:underline"
                 >
                    {showFilters ? 'Ẩn bộ lọc' : 'Hiện bộ lọc'}
                 </button>
             </div>

            {showFilters && (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                     <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Từ ngày</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={filters.startDate}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                     </div>
                      <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">Đến ngày</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={filters.endDate}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                     </div>
                     <div>
                        <label htmlFor="sourceFilter" className="block text-sm font-medium text-gray-700 mb-1">Nguồn thu</label>
                        <select
                            id="sourceFilter"
                            name="source"
                            value={filters.source}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        >
                            <option value="">Tất cả nguồn</option>
                            {REVENUE_SOURCES.map(src => <option key={src} value={src}>{src}</option>)}
                        </select>
                    </div>
                    <div className="self-end"> {/* Align reset button */}
                         <button
                            onClick={resetFilters}
                            className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm transition-colors"
                        >
                            <FaSyncAlt className="mr-2" /> Đặt lại bộ lọc
                        </button>
                    </div>
                 </div>
            )}

             <div className="relative mt-4">
                <input
                type="text"
                placeholder="Tìm kiếm theo nguồn, mô tả, mã GD, số tiền..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
        </div>


        {/* Revenue Records Table */}
         <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-green-50 to-teal-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => handleSort('date')}>
                    Ngày {sorting.field === 'date' && (sorting.direction === 'asc' ? <FaSortAmountUp className="inline ml-1"/> : <FaSortAmountDown className="inline ml-1"/>)}
                  </th>
                   <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => handleSort('source')}>
                    Nguồn thu {sorting.field === 'source' && (sorting.direction === 'asc' ? <FaSortAmountUp className="inline ml-1"/> : <FaSortAmountDown className="inline ml-1"/>)}
                  </th>
                   <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Mô tả / Mã GD
                  </th>
                   <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => handleSort('amount')}>
                    Số tiền {sorting.field === 'amount' && (sorting.direction === 'asc' ? <FaSortAmountUp className="inline ml-1"/> : <FaSortAmountDown className="inline ml-1"/>)}
                  </th>
                  <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Tác vụ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((record) => (
                  <tr key={record.id} className="hover:bg-green-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                       {formatDate(record.date)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                       {record.source}
                    </td>
                     <td className="px-4 py-3 text-sm text-gray-500">
                       <div>{record.description}</div>
                       {record.transactionId && <div className="text-xs text-gray-400 italic">Mã GD: {record.transactionId}</div>}
                    </td>
                     <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-medium text-right">
                       {formatCurrency(record.amount)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex space-x-2 justify-center">
                        <button onClick={() => openEditModal(record)} title="Sửa" className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                        <button onClick={() => handleDeleteRecord(record.id)} title="Xóa" className="text-red-600 hover:text-red-800"><FaTrash /></button>
                      </div>
                    </td>
                  </tr>
                  ))
                ) : (
                    <tr>
                        <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                            Không tìm thấy bản ghi doanh thu nào phù hợp.
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* Add/Edit Modal */}
       {(showAddModal || showEditModal) && (
             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 p-4">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                 <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-800">
                        {showEditModal ? 'Chỉnh sửa bản ghi doanh thu' : 'Thêm bản ghi doanh thu'}
                    </h2>
                    <button onClick={() => { setShowAddModal(false); setShowEditModal(false); setSelectedRecord(null); resetFormData(); }} className="text-gray-500 hover:text-gray-700">
                      <FaTimes size={20} />
                    </button>
                </div>

                 <form onSubmit={(e) => {e.preventDefault(); handleSaveRecord();}}>
                    <div className="p-6 space-y-4">
                         <div>
                            <label htmlFor="rev-date" className="block text-sm font-medium text-gray-700 mb-1">Ngày ghi nhận<span className="text-red-500">*</span></label>
                            <input type="date" id="rev-date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"/>
                        </div>
                         <div>
                            <label htmlFor="rev-amount" className="block text-sm font-medium text-gray-700 mb-1">Số tiền (VND)<span className="text-red-500">*</span></label>
                            <input type="number" step="1000" min="0" id="rev-amount" name="amount" value={formData.amount} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"/>
                        </div>
                        <div>
                            <label htmlFor="rev-source" className="block text-sm font-medium text-gray-700 mb-1">Nguồn thu<span className="text-red-500">*</span></label>
                            <select id="rev-source" name="source" value={formData.source} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500">
                                {REVENUE_SOURCES.map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                        </div>
                         <div>
                            <label htmlFor="rev-description" className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
                            <input type="text" id="rev-description" name="description" value={formData.description} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"/>
                        </div>
                         <div>
                            <label htmlFor="rev-transactionId" className="block text-sm font-medium text-gray-700 mb-1">Mã giao dịch (Nếu có)</label>
                            <input type="text" id="rev-transactionId" name="transactionId" value={formData.transactionId} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"/>
                        </div>
                    </div>
                     <div className="flex justify-end space-x-3 p-4 border-t sticky bottom-0 bg-white z-10">
                        <button type="button" onClick={() => { setShowAddModal(false); setShowEditModal(false); setSelectedRecord(null); resetFormData();}} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Hủy</button>
                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                             {showEditModal ? 'Lưu thay đổi' : 'Thêm bản ghi'}
                        </button>
                    </div>
                 </form>
                </div>
            </div>
        )}

    </div>
  );
};

export default QuanLyDoanhThuPage;