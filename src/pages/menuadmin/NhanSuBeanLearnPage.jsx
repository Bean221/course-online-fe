import React, { useState, useEffect } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import {
  FaSearch,
  FaUserTie,
  FaTrash,
  FaEye,
  FaFilter,
  FaUserCheck,
  FaUserTimes,
  FaSortAmountDown,
  FaSortAmountUp,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaSyncAlt,
  FaUserPlus,
  FaUserEdit,
  FaChartBar,
  FaClock,
  FaBell,
  FaFileExport,
  FaPrint,
  FaFilePdf,
  FaFileExcel,
  FaTimes,
  FaIdCard,
  FaMoneyBillWave,
  FaGraduationCap,
  FaBriefcase,
  FaUsers
} from "react-icons/fa";

const NhanSuBeanLearnPage = () => {
  // Mock data nhân sự
  const mockData = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "a@beanlearn.edu.vn",
      phone: "0901234567",
      viTri: "Giảng Viên Tiếng Anh",
      phongBan: "Đào tạo",
      ngayVaoLam: "2023-01-15",
      loaiHopDong: "Toàn thời gian",
      mucLuong: "25,000,000",
      trangThai: "Đang làm việc",
      bangCap: "Thạc sĩ Ngôn ngữ Anh",
      kinhNghiem: "5 năm",
      soGioDay: 120,
      danhGia: "Xuất sắc",
      kyNang: ["IELTS", "TOEFL", "Phát âm"],
      ghiChu: "Chuyên gia luyện thi IELTS"
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "b@beanlearn.edu.vn",
      phone: "0912345678",
      viTri: "Trợ Giảng",
      phongBan: "Đào tạo",
      ngayVaoLam: "2023-03-20",
      loaiHopDong: "Bán thời gian",
      mucLuong: "12,000,000",
      trangThai: "Đang làm việc",
      bangCap: "Cử nhân Sư phạm Anh",
      kinhNghiem: "2 năm",
      soGioDay: 80,
      danhGia: "Tốt",
      kyNang: ["Giao tiếp", "Ngữ pháp"],
      ghiChu: "Hỗ trợ lớp trẻ em"
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "c@beanlearn.edu.vn",
      phone: "0987654321",
      viTri: "Quản lý Đào tạo",
      phongBan: "Đào tạo",
      ngayVaoLam: "2022-11-10",
      loaiHopDong: "Toàn thời gian",
      mucLuong: "30,000,000",
      trangThai: "Đang làm việc",
      bangCap: "Thạc sĩ Quản lý Giáo dục",
      kinhNghiem: "7 năm",
      soGioDay: 0,
      danhGia: "Xuất sắc",
      kyNang: ["Quản lý", "Đào tạo"],
      ghiChu: "Phụ trách chất lượng giảng dạy"
    },
    {
      id: 4,
      name: "Phạm Thị D",
      email: "d@beanlearn.edu.vn",
      phone: "0932145678",
      viTri: "Nhân viên Marketing",
      phongBan: "Marketing",
      ngayVaoLam: "2023-05-05",
      loaiHopDong: "Toàn thời gian",
      mucLuong: "18,000,000",
      trangThai: "Đang làm việc",
      bangCap: "Cử nhân Marketing",
      kinhNghiem: "3 năm",
      soGioDay: 0,
      danhGia: "Khá",
      kyNang: ["SEO", "Content"],
      ghiChu: "Phụ trách mạng xã hội"
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      email: "e@beanlearn.edu.vn",
      phone: "0976543210",
      viTri: "Giảng Viên Tiếng Nhật",
      phongBan: "Đào tạo",
      ngayVaoLam: "2023-02-18",
      loaiHopDong: "Hợp đồng",
      mucLuong: "22,000,000",
      trangThai: "Nghỉ việc",
      bangCap: "Thạc sĩ Tiếng Nhật",
      kinhNghiem: "4 năm",
      soGioDay: 90,
      danhGia: "Tốt",
      kyNang: ["JLPT N1", "Giao tiếp"],
      ghiChu: "Đã nghỉ từ tháng 1/2024"
    }
  ];

  const [data, setData] = useState(mockData);
  const [filteredData, setFilteredData] = useState(mockData);
  const [keyword, setKeyword] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedNhanSu, setSelectedNhanSu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);

  const [filters, setFilters] = useState({
    viTri: "",
    phongBan: "",
    trangThai: "",
    loaiHopDong: ""
  });

  const [sorting, setSorting] = useState({
    field: "ngayVaoLam",
    direction: "desc"
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    viTri: "Giảng Viên Tiếng Anh",
    phongBan: "Đào tạo",
    ngayVaoLam: new Date().toISOString().split('T')[0],
    loaiHopDong: "Toàn thời gian",
    mucLuong: "",
    trangThai: "Đang làm việc",
    bangCap: "Cử nhân",
    kinhNghiem: "",
    soGioDay: 0,
    danhGia: "Khá",
    kyNang: [],
    ghiChu: ""
  });

  const [notifications] = useState([
    { id: 1, title: "Hợp đồng sắp hết hạn", content: "3 hợp đồng nhân sự sắp hết hạn trong tháng này", time: "2 ngày trước", read: false },
    { id: 2, title: "Sinh nhật nhân viên", content: "Sinh nhật Nguyễn Văn A vào ngày mai", time: "1 ngày trước", read: false }
  ]);

  const [isCollapsed, setIsCollapsed] = useState(localStorage.getItem("sidebarCollapsed") === "true");
  const userRole = localStorage.getItem("userRole") || "admin";

  useEffect(() => {
    const handleStorageChange = () => {
      setIsCollapsed(localStorage.getItem("sidebarCollapsed") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    let filtered = data.filter(item =>
      (item.name.toLowerCase().includes(keyword.toLowerCase()) ||
       item.email.toLowerCase().includes(keyword.toLowerCase()) ||
       item.phone.toLowerCase().includes(keyword.toLowerCase())) &&
      (filters.viTri ? item.viTri === filters.viTri : true) &&
      (filters.phongBan ? item.phongBan === filters.phongBan : true) &&
      (filters.trangThai ? item.trangThai === filters.trangThai : true) &&
      (filters.loaiHopDong ? item.loaiHopDong === filters.loaiHopDong : true)
    );

    filtered.sort((a, b) => {
      const fieldA = a[sorting.field];
      const fieldB = b[sorting.field];
      let comparison = 0;
      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        comparison = fieldA.localeCompare(fieldB);
      } else {
        comparison = fieldA > fieldB ? 1 : fieldA < fieldB ? -1 : 0;
      }
      return sorting.direction === "asc" ? comparison : -comparison;
    });

    setFilteredData(filtered);
  }, [keyword, filters, sorting, data]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({ viTri: "", phongBan: "", trangThai: "", loaiHopDong: "" });
    setKeyword("");
    setSorting({ field: "ngayVaoLam", direction: "desc" });
  };

  const viewNhanSu = (id) => {
    const nhanSu = data.find(item => item.id === id);
    setSelectedNhanSu(nhanSu);
    setShowModal(true);
    setEditMode(false);
  };

  const editNhanSu = (id) => {
    const nhanSu = data.find(item => item.id === id);
    setSelectedNhanSu(nhanSu);
    setFormData({ ...nhanSu });
    setShowModal(true);
    setEditMode(true);
  };

  const saveNhanSu = () => {
    if (editMode && selectedNhanSu) {
      const newData = data.map(item =>
        item.id === selectedNhanSu.id ? { ...item, ...formData } : item
      );
      setData(newData);
    } else {
      const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
      const newNhanSu = { id: newId, ...formData };
      setData([...data, newNhanSu]);
    }
    setShowModal(false);
    setShowAddModal(false);
    setSelectedNhanSu(null);
    setEditMode(false);
    setFormData({
      name: "", email: "", phone: "", viTri: "Giảng Viên Tiếng Anh",
      phongBan: "Đào tạo", ngayVaoLam: new Date().toISOString().split('T')[0],
      loaiHopDong: "Toàn thời gian", mucLuong: "", trangThai: "Đang làm việc",
      bangCap: "Cử nhân", kinhNghiem: "", soGioDay: 0, danhGia: "Khá",
      kyNang: [], ghiChu: ""
    });
  };

  const deleteNhanSu = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa nhân sự này?")) {
      setData(data.filter(item => item.id !== id));
    }
  };

  const updateTrangThai = (id, trangThai) => {
    const newData = data.map(item =>
      item.id === id ? { ...item, trangThai } : item
    );
    setData(newData);
  };

  const handleSort = (field) => {
    setSorting(prev => ({
      field,
      direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  const getUniqueValues = (field) => {
    return [...new Set(mockData.map(item => item[field]))].filter(Boolean);
  };

  const openAddForm = () => {
    setFormData({
      name: "", email: "", phone: "", viTri: "Giảng Viên Tiếng Anh",
      phongBan: "Đào tạo", ngayVaoLam: new Date().toISOString().split('T')[0],
      loaiHopDong: "Toàn thời gian", mucLuong: "", trangThai: "Đang làm việc",
      bangCap: "Cử nhân", kinhNghiem: "", soGioDay: 0, danhGia: "Khá",
      kyNang: [], ghiChu: ""
    });
    setSelectedNhanSu(null);
    setEditMode(false);
    setShowAddModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillInputChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim()).filter(Boolean);
    setFormData(prev => ({ ...prev, kyNang: skills }));
  };

  const calculateStats = () => {
    const totalNhanSu = data.length;
    const dangLamViec = data.filter(item => item.trangThai === "Đang làm việc").length;
    const nghiViec = data.filter(item => item.trangThai === "Nghỉ việc").length;
    const toanThoiGian = data.filter(item => item.loaiHopDong === "Toàn thời gian").length;
    const banThoiGian = data.filter(item => item.loaiHopDong === "Bán thời gian").length;
    return { totalNhanSu, dangLamViec, nghiViec, toanThoiGian, banThoiGian };
  };

  const stats = calculateStats();

  const StatusBadge = ({ status }) => {
    const bgColor = status === "Đang làm việc" ? "bg-green-100 text-green-800" :
                    status === "Nghỉ việc" ? "bg-red-100 text-red-800" :
                    "bg-gray-100 text-gray-800";
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar userRole={userRole} />
      <main className={`${isCollapsed ? "ml-20" : "ml-64"} flex-1 p-4 md:p-6 transition-all duration-300`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          <div className="flex items-center mb-4 md:mb-0">
            <FaUserTie className="mr-3 text-blue-600 text-2xl" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Quản lý Nhân sự BeanLearn</h1>
              <p className="text-sm text-gray-500">Quản lý thông tin nhân viên và giảng viên</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowStats(!showStats)}
              className="flex items-center bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg px-3 py-2 text-sm transition-colors"
            >
              <FaChartBar className="mr-2" /> {showStats ? "Ẩn" : "Hiện"} thống kê
            </button>
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="flex items-center bg-amber-50 hover:bg-amber-100 text-amber-600 rounded-lg px-3 py-2 text-sm transition-colors relative"
              >
                <FaBell className="mr-2" /> Thông báo
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.filter(n => !n.read).length}
                </span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-80 z-20">
                  <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-medium">Thông báo</h3>
                    <button className="text-sm text-blue-600 hover:underline">Đánh dấu đã đọc</button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                      >
                        <div className="flex justify-between">
                          <h4 className="font-medium text-sm">{notification.title}</h4>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className="flex items-center bg-green-50 hover:bg-green-100 text-green-600 rounded-lg px-3 py-2 text-sm transition-colors"
              >
                <FaFileExport className="mr-2" /> Xuất dữ liệu
              </button>
              {showExportOptions && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-48 z-20">
                  <button className="flex items-center w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                    <FaFilePdf className="mr-2 text-red-500" /> Xuất PDF
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                    <FaFileExcel className="mr-2 text-green-600" /> Xuất Excel
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                    <FaPrint className="mr-2 text-blue-600" /> In dữ liệu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {showStats && (
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-blue-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Tổng số nhân sự</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.totalNhanSu}</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaUsers className="text-blue-600 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 border border-green-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Đang làm việc</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.dangLamViec}</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaUserCheck className="text-green-600 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 border border-red-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Đã nghỉ việc</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.nghiViec}</h3>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <FaUserTimes className="text-red-600 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 border border-purple-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Toàn thời gian</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.toanThoiGian}</h3>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <FaBriefcase className="text-purple-600 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 border border-yellow-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Bán thời gian</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.banThoiGian}</h3>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <FaClock className="text-yellow-600 text-xl" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email, SĐT..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm transition-colors"
          >
            <FaFilter className="mr-2" /> Lọc {showFilters ? <FaSortAmountUp className="ml-1"/> : <FaSortAmountDown className="ml-1"/>}
          </button>
          <button
            onClick={resetFilters}
            className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm transition-colors"
          >
            <FaSyncAlt className="mr-2" /> Đặt lại
          </button>
          <button
            onClick={openAddForm}
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm transition-colors"
          >
            <FaUserPlus className="mr-2" /> Thêm nhân sự
          </button>
        </div>

        {showFilters && (
          <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="viTriFilter" className="block text-sm font-medium text-gray-700 mb-1">Vị trí</label>
              <select
                id="viTriFilter"
                name="viTri"
                value={filters.viTri}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Tất cả vị trí</option>
                {getUniqueValues("viTri").map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="phongBanFilter" className="block text-sm font-medium text-gray-700 mb-1">Phòng ban</label>
              <select
                id="phongBanFilter"
                name="phongBan"
                value={filters.phongBan}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Tất cả phòng ban</option>
                {getUniqueValues("phongBan").map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="trangThaiFilter" className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
              <select
                id="trangThaiFilter"
                name="trangThai"
                value={filters.trangThai}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Tất cả trạng thái</option>
                {getUniqueValues("trangThai").map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="loaiHopDongFilter" className="block text-sm font-medium text-gray-700 mb-1">Loại hợp đồng</label>
              <select
                id="loaiHopDongFilter"
                name="loaiHopDong"
                value={filters.loaiHopDong}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Tất cả loại hợp đồng</option>
                {getUniqueValues("loaiHopDong").map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('name')}>
                    Họ Tên {sorting.field === 'name' && (sorting.direction === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Liên Hệ</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('viTri')}>
                    Vị Trí {sorting.field === 'viTri' && (sorting.direction === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('ngayVaoLam')}>
                    Ngày Vào Làm {sorting.field === 'ngayVaoLam' && (sorting.direction === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng Thái</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Hành Động</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.bangCap}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center"><FaEnvelope className="mr-2 text-gray-400"/>{item.email}</div>
                      <div className="text-sm text-gray-500 flex items-center"><FaPhone className="mr-2 text-gray-400"/>{item.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.viTri}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ngayVaoLam}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={item.trangThai} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <div className="flex justify-center items-center space-x-2">
                        <button onClick={() => viewNhanSu(item.id)} className="text-blue-600 hover:text-blue-800"><FaEye /></button>
                        <button onClick={() => editNhanSu(item.id)} className="text-indigo-600 hover:text-indigo-800"><FaUserEdit /></button>
                        {item.trangThai === "Đang làm việc" && (
                          <button onClick={() => updateTrangThai(item.id, 'Nghỉ việc')} className="text-red-600 hover:text-red-800"><FaUserTimes /></button>
                        )}
                        <button onClick={() => deleteNhanSu(item.id)} className="text-red-600 hover:text-red-800"><FaTrash /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showModal && selectedNhanSu && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                <h2 className="text-xl font-bold text-gray-800">{editMode ? 'Chỉnh sửa nhân sự' : 'Chi tiết nhân sự'}</h2>
                <button onClick={() => {setShowModal(false); setSelectedNhanSu(null); setEditMode(false);}} className="text-gray-500 hover:text-gray-700">
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="p-6">
                {editMode ? (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Vị trí</label>
                        <select name="viTri" value={formData.viTri} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                          {getUniqueValues("viTri").map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phòng ban</label>
                        <select name="phongBan" value={formData.phongBan} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                          {getUniqueValues("phongBan").map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ngày vào làm</label>
                        <input type="date" name="ngayVaoLam" value={formData.ngayVaoLam} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Loại hợp đồng</label>
                        <select name="loaiHopDong" value={formData.loaiHopDong} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                          {getUniqueValues("loaiHopDong").map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mức lương</label>
                        <input type="text" name="mucLuong" value={formData.mucLuong} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
                        <select name="trangThai" value={formData.trangThai} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                          {getUniqueValues("trangThai").map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bằng cấp</label>
                        <input type="text" name="bangCap" value={formData.bangCap} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kinh nghiệm</label>
                        <input type="text" name="kinhNghiem" value={formData.kinhNghiem} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Số giờ dạy</label>
                        <input type="number" name="soGioDay" value={formData.soGioDay} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Đánh giá</label>
                        <select name="danhGia" value={formData.danhGia} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                          {["Xuất sắc", "Tốt", "Khá", "Trung bình", "Yếu"].map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kỹ năng</label>
                        <input type="text" name="kyNang" value={formData.kyNang.join(", ")} onChange={handleSkillInputChange} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Nhập kỹ năng, cách nhau bởi dấu phẩy"/>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                        <textarea name="ghiChu" value={formData.ghiChu} onChange={handleInputChange} rows="3" className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3 p-4 border-t sticky bottom-0 bg-white z-10">
                      <button onClick={() => {setShowModal(false); setSelectedNhanSu(null); setEditMode(false);}} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Hủy</button>
                      <button onClick={saveNhanSu} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Lưu thay đổi</button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                      <p><strong>Họ tên:</strong> {selectedNhanSu.name}</p>
                      <p><strong>Email:</strong> {selectedNhanSu.email}</p>
                      <p><strong>Số điện thoại:</strong> {selectedNhanSu.phone}</p>
                      <p><strong>Vị trí:</strong> {selectedNhanSu.viTri}</p>
                      <p><strong>Phòng ban:</strong> {selectedNhanSu.phongBan}</p>
                      <p><strong>Ngày vào làm:</strong> {selectedNhanSu.ngayVaoLam}</p>
                      <p><strong>Loại hợp đồng:</strong> {selectedNhanSu.loaiHopDong}</p>
                      <p><strong>Mức lương:</strong> {selectedNhanSu.mucLuong}</p>
                      <p><strong>Trạng thái:</strong> <StatusBadge status={selectedNhanSu.trangThai} /></p>
                      <p><strong>Bằng cấp:</strong> {selectedNhanSu.bangCap}</p>
                      <p><strong>Kinh nghiệm:</strong> {selectedNhanSu.kinhNghiem}</p>
                      <p><strong>Số giờ dạy:</strong> {selectedNhanSu.soGioDay}</p>
                      <p><strong>Đánh giá:</strong> {selectedNhanSu.danhGia}</p>
                    </div>
                    <div className="border-t pt-4">
                      <p><strong>Kỹ năng:</strong> {selectedNhanSu.kyNang.join(', ') || 'N/A'}</p>
                    </div>
                    <div className="border-t pt-4">
                      <p><strong>Ghi chú:</strong> {selectedNhanSu.ghiChu || 'Không có'}</p>
                    </div>
                    <div className="flex justify-end space-x-3 p-4 border-t sticky bottom-0 bg-white z-10">
                      <button onClick={() => {setShowModal(false); setSelectedNhanSu(null);}} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Đóng</button>
                      <button onClick={() => editNhanSu(selectedNhanSu.id)} className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Chỉnh sửa</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                <h2 className="text-xl font-bold text-gray-800">Thêm nhân sự mới</h2>
                <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700">
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vị trí</label>
                    <select name="viTri" value={formData.viTri} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                      {getUniqueValues("viTri").map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phòng ban</label>
                    <select name="phongBan" value={formData.phongBan} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                      {getUniqueValues("phongBan").map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ngày vào làm</label>
                    <input type="date" name="ngayVaoLam" value={formData.ngayVaoLam} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loại hợp đồng</label>
                    <select name="loaiHopDong" value={formData.loaiHopDong} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                      {getUniqueValues("loaiHopDong").map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mức lương</label>
                    <input type="text" name="mucLuong" value={formData.mucLuong} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
                    <select name="trangThai" value={formData.trangThai} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                      {getUniqueValues("trangThai").map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bằng cấp</label>
                    <input type="text" name="bangCap" value={formData.bangCap} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kinh nghiệm</label>
                    <input type="text" name="kinhNghiem" value={formData.kinhNghiem} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số giờ dạy</label>
                    <input type="number" name="soGioDay" value={formData.soGioDay} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Đánh giá</label>
                    <select name="danhGia" value={formData.danhGia} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                      {["Xuất sắc", "Tốt", "Khá", "Trung bình", "Yếu"].map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kỹ năng</label>
                    <input type="text" name="kyNang" value={formData.kyNang.join(", ")} onChange={handleSkillInputChange} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Nhập kỹ năng, cách nhau bởi dấu phẩy"/>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                    <textarea name="ghiChu" value={formData.ghiChu} onChange={handleInputChange} rows="3" className="w-full p-2 border border-gray-300 rounded-lg"/>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 p-4 border-t sticky bottom-0 bg-white z-10">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Hủy</button>
                  <button onClick={saveNhanSu} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Thêm nhân sự</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default NhanSuBeanLearnPage;