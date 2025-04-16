import React, { useState, useEffect } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import {
  FaSearch,
  FaFileAlt,
  FaTrash,
  FaEye,
  FaDownload,
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
  FaClipboardList,
  FaClock,
  FaBell,
  FaFileExport,
  FaPrint,
  FaFilePdf,
  FaFileExcel,
  FaTimes // Import FaTimes for close buttons
} from "react-icons/fa";

const HoSoUngTuyenPage = () => {
  // Mock data với nhiều trường hơn
  const mockData = [
    {
      id: 1,
      name: "Lê Văn E",
      email: "e@example.com",
      phone: "0902123456",
      viTri: "Giảng Viên",
      kinhNghiem: "3 năm",
      trangThai: "Đang xét duyệt",
      ngayUngTuyen: "2025-04-10",
      cvLink: "CV_E.pdf",
      khuVucLamViec: "Hà Nội",
      bangCap: "Thạc sĩ",
      diemTest: 85,
      phongVan: null,
      mucLuong: "20-25 triệu",
      ghiChu: "Ứng viên có kinh nghiệm giảng dạy tại các đơn vị đào tạo luyện thi.",
      kyNang: ["IELTS", "TOEFL", "Tiếng Anh giao tiếp"]
    },
    {
      id: 2,
      name: "Phan Thị F",
      email: "f@example.com",
      phone: "0912345678",
      viTri: "Trợ Giảng",
      kinhNghiem: "1 năm",
      trangThai: "Đã phỏng vấn",
      ngayUngTuyen: "2025-04-05",
      cvLink: "CV_F.pdf",
      khuVucLamViec: "Hồ Chí Minh",
      bangCap: "Cử nhân",
      diemTest: 78,
      phongVan: {
        ngay: "2025-04-12",
        ketQua: "Đạt",
        nguoiPhongVan: "Nguyễn Văn A"
      },
      mucLuong: "12-15 triệu",
      ghiChu: "Ứng viên có khả năng giao tiếp tốt, phù hợp với vị trí trợ giảng.",
      kyNang: ["Word", "Excel", "PowerPoint", "Tiếng Anh"]
    },
    {
      id: 3,
      name: "Nguyễn Văn G",
      email: "g@example.com",
      phone: "0987654321",
      viTri: "Giảng Viên",
      kinhNghiem: "5 năm",
      trangThai: "Đã duyệt",
      ngayUngTuyen: "2025-04-01",
      cvLink: "CV_G.pdf",
      khuVucLamViec: "Đà Nẵng",
      bangCap: "Tiến sĩ",
      diemTest: 92,
      phongVan: {
        ngay: "2025-04-08",
        ketQua: "Đạt",
        nguoiPhongVan: "Trần Thị B"
      },
      mucLuong: "30-35 triệu",
      ghiChu: "Ứng viên xuất sắc với nhiều kinh nghiệm giảng dạy và nghiên cứu.",
      kyNang: ["IELTS", "TOEFL", "Tiếng Anh học thuật", "Nghiên cứu khoa học"]
    },
    {
      id: 4,
      name: "Trần Thị H",
      email: "h@example.com",
      phone: "0932145678",
      viTri: "Điều phối viên",
      kinhNghiem: "2 năm",
      trangThai: "Từ chối",
      ngayUngTuyen: "2025-03-28",
      cvLink: "CV_H.pdf",
      khuVucLamViec: "Hà Nội",
      bangCap: "Cử nhân",
      diemTest: 65,
      phongVan: {
        ngay: "2025-04-05",
        ketQua: "Không đạt",
        nguoiPhongVan: "Lê Văn C"
      },
      mucLuong: "15-18 triệu",
      ghiChu: "Ứng viên chưa đáp ứng được yêu cầu về kỹ năng quản lý.",
      kyNang: ["Word", "Excel", "Tiếng Anh", "Quản lý thời gian"]
    },
    {
      id: 5,
      name: "Hoàng Minh I",
      email: "i@example.com",
      phone: "0976543210",
      viTri: "Giảng Viên",
      kinhNghiem: "4 năm",
      trangThai: "Đang xét duyệt",
      ngayUngTuyen: "2025-04-12",
      cvLink: "CV_I.pdf",
      khuVucLamViec: "Hồ Chí Minh",
      bangCap: "Thạc sĩ",
      diemTest: 88,
      phongVan: null,
      mucLuong: "25-30 triệu",
      ghiChu: "Ứng viên có kinh nghiệm giảng dạy tại các trung tâm lớn.",
      kyNang: ["IELTS", "TOEFL", "Tiếng Anh giao tiếp", "Phát âm"]
    },
    {
      id: 6,
      name: "Đỗ Thanh K",
      email: "k@example.com",
      phone: "0965432109",
      viTri: "Marketing",
      kinhNghiem: "3 năm",
      trangThai: "Đang xét duyệt",
      ngayUngTuyen: "2025-04-14",
      cvLink: "CV_K.pdf",
      khuVucLamViec: "Hà Nội",
      bangCap: "Cử nhân",
      diemTest: 82,
      phongVan: null,
      mucLuong: "18-22 triệu",
      ghiChu: "Ứng viên có kinh nghiệm marketing giáo dục.",
      kyNang: ["SEO", "Content Marketing", "Social Media", "Google Analytics"]
    },
    {
      id: 7,
      name: "Vũ Thị L",
      email: "l@example.com",
      phone: "0954321098",
      viTri: "Kế toán",
      kinhNghiem: "2 năm",
      trangThai: "Đã phỏng vấn",
      ngayUngTuyen: "2025-04-03",
      cvLink: "CV_L.pdf",
      khuVucLamViec: "Hồ Chí Minh",
      bangCap: "Cử nhân",
      diemTest: 75,
      phongVan: {
        ngay: "2025-04-10",
        ketQua: "Đạt",
        nguoiPhongVan: "Phạm Văn D"
      },
      mucLuong: "15-18 triệu",
      ghiChu: "Ứng viên có kinh nghiệm kế toán tại công ty giáo dục.",
      kyNang: ["Kế toán tổng hợp", "Excel", "Phần mềm kế toán", "Báo cáo tài chính"]
    }
  ];

  const [data, setData] = useState(mockData);
  const [filteredData, setFilteredData] = useState(mockData);
  const [keyword, setKeyword] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedUngVien, setSelectedUngVien] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);

  const [filters, setFilters] = useState({
    viTri: "",
    trangThai: "",
    khuVucLamViec: ""
  });
  const [sorting, setSorting] = useState({
    field: "ngayUngTuyen",
    direction: "desc"
  });

  // Form cho thêm/chỉnh sửa ứng viên
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    viTri: "Giảng Viên",
    kinhNghiem: "",
    khuVucLamViec: "Hà Nội",
    bangCap: "Cử nhân",
    mucLuong: "",
    ghiChu: "",
    kyNang: []
  });

  // Mock notifications
  const [notifications] = useState([
    { id: 1, title: "Hồ sơ mới", content: "Có 3 hồ sơ mới cần xem xét", time: "5 phút trước", read: false },
    { id: 2, title: "Nhắc phỏng vấn", content: "Phỏng vấn với Nguyễn Văn M vào 15:00 hôm nay", time: "1 giờ trước", read: false },
    { id: 3, title: "Cập nhật trạng thái", content: "5 hồ sơ đang chờ cập nhật trạng thái", time: "3 giờ trước", read: true }
  ]);

  // Lấy trạng thái sidebar từ localStorage
  const [isCollapsed, setIsCollapsed] = useState(localStorage.getItem("sidebarCollapsed") === "true");
  const userRole = localStorage.getItem("userRole") || "admin";

  // Lắng nghe sự thay đổi của localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setIsCollapsed(localStorage.getItem("sidebarCollapsed") === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Hàm xử lý tìm kiếm và lọc ban đầu
  useEffect(() => {
    let filtered = data.filter(item =>
      (item.name.toLowerCase().includes(keyword.toLowerCase()) ||
       item.email.toLowerCase().includes(keyword.toLowerCase()) ||
       item.phone.toLowerCase().includes(keyword.toLowerCase())) &&
      (filters.viTri ? item.viTri === filters.viTri : true) &&
      (filters.trangThai ? item.trangThai === filters.trangThai : true) &&
      (filters.khuVucLamViec ? item.khuVucLamViec === filters.khuVucLamViec : true)
    );

    // Áp dụng sắp xếp
    filtered.sort((a, b) => {
      const fieldA = a[sorting.field];
      const fieldB = b[sorting.field];

      // Handle different data types for sorting
      let comparison = 0;
      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        comparison = fieldA.localeCompare(fieldB);
      } else {
         // Basic comparison for numbers or dates (assuming date strings are comparable)
        if (fieldA > fieldB) {
          comparison = 1;
        } else if (fieldA < fieldB) {
          comparison = -1;
        }
      }

      return sorting.direction === "asc" ? comparison : comparison * -1;
    });

    setFilteredData(filtered);
  }, [keyword, filters, sorting, data]);


  // Hàm xử lý tìm kiếm (chỉ cập nhật keyword, useEffect lo phần còn lại)
  const handleSearch = () => {
     // No need to filter here directly, useEffect handles it
     // Just ensure the keyword state is updated which triggers useEffect
  };

  // Hàm xử lý khi nhấn Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Technically optional now as useEffect watches keyword
    }
  };

  // Xử lý khi thay đổi bộ lọc (chỉ cập nhật state, useEffect lo phần còn lại)
   const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters(prev => ({
        ...prev,
        [name]: value
      }));
   };


  // Đặt lại bộ lọc
  const resetFilters = () => {
    setFilters({
      viTri: "",
      trangThai: "",
      khuVucLamViec: ""
    });
    setKeyword("");
    setSorting({ field: "ngayUngTuyen", direction: "desc" }); // Reset sort as well
    // Data will be refiltered by useEffect
  };

  // Xem chi tiết ứng viên
  const viewUngVien = (id) => {
    const ungVien = data.find(item => item.id === id);
    setSelectedUngVien(ungVien);
    setShowModal(true);
    setEditMode(false);
  };

  // Chỉnh sửa ứng viên
  const editUngVien = (id) => {
    const ungVien = data.find(item => item.id === id);
    setSelectedUngVien(ungVien);
    setFormData({
      name: ungVien.name,
      email: ungVien.email,
      phone: ungVien.phone,
      viTri: ungVien.viTri,
      kinhNghiem: ungVien.kinhNghiem,
      khuVucLamViec: ungVien.khuVucLamViec,
      bangCap: ungVien.bangCap,
      mucLuong: ungVien.mucLuong,
      ghiChu: ungVien.ghiChu,
      kyNang: ungVien.kyNang || []
    });
    setShowModal(true);
    setEditMode(true);
  };

  // Lưu chỉnh sửa hoặc thêm mới ứng viên
  const saveUngVien = () => {
    if (editMode && selectedUngVien) {
      // Chỉnh sửa
      const newData = data.map(item => {
        if (item.id === selectedUngVien.id) {
          return {
            ...item,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            viTri: formData.viTri,
            kinhNghiem: formData.kinhNghiem,
            khuVucLamViec: formData.khuVucLamViec,
            bangCap: formData.bangCap,
            mucLuong: formData.mucLuong,
            ghiChu: formData.ghiChu,
            kyNang: formData.kyNang
          };
        }
        return item;
      });
      setData(newData);
      // filteredData will update via useEffect
      setShowModal(false);
      setSelectedUngVien(null); // Clear selection
      setEditMode(false);

    } else if (!editMode && !selectedUngVien) {
      // Thêm mới
      const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
      const newUngVien = {
        id: newId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        viTri: formData.viTri,
        kinhNghiem: formData.kinhNghiem,
        trangThai: "Đang xét duyệt", // Default status
        ngayUngTuyen: new Date().toISOString().split('T')[0], // Current date
        cvLink: `CV_${formData.name.replace(/\s/g, '_') || 'new'}.pdf`, // Placeholder CV link
        khuVucLamViec: formData.khuVucLamViec,
        bangCap: formData.bangCap,
        diemTest: null, // Default value
        phongVan: null, // Default value
        mucLuong: formData.mucLuong,
        ghiChu: formData.ghiChu,
        kyNang: formData.kyNang
      };
      const newData = [...data, newUngVien];
      setData(newData);
      // filteredData will update via useEffect
      setShowAddModal(false);
    }
     // Reset form data after saving (for both add and edit)
     setFormData({
        name: "", email: "", phone: "", viTri: "Giảng Viên", kinhNghiem: "",
        khuVucLamViec: "Hà Nội", bangCap: "Cử nhân", mucLuong: "", ghiChu: "", kyNang: []
     });
  };


  // Xóa ứng viên
  const deleteUngVien = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa hồ sơ này?")) {
      const newData = data.filter(item => item.id !== id);
      setData(newData);
      // filteredData will update via useEffect
    }
  };

  // Cập nhật trạng thái
  const updateTrangThai = (id, trangThai) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, trangThai };
      }
      return item;
    });
    setData(newData);
    // filteredData will update via useEffect
  };

  // Thêm phỏng vấn (Placeholder - could be expanded to set date/interviewer)
  const addPhongVan = (id) => {
    const now = new Date();
    const ngayPhongVan = now.toISOString().split('T')[0];

    const newData = data.map(item => {
      if (item.id === id && !item.phongVan) { // Only add if no interview exists yet
        return {
          ...item,
          phongVan: {
            ngay: ngayPhongVan,
            ketQua: "Chưa có",
            nguoiPhongVan: "Chưa chỉ định"
          },
          trangThai: "Đã phỏng vấn" // Update status as well
        };
      }
      return item;
    });
    setData(newData);
    // filteredData will update via useEffect
  };

  // Thay đổi kiểu sắp xếp
  const handleSort = (field) => {
    setSorting(prev => ({
      field,
      direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  // Lấy danh sách các giá trị duy nhất cho bộ lọc
  const getUniqueValues = (field) => {
    return [...new Set(mockData.map(item => item[field]))].filter(Boolean); // Use mockData to get all possible options
  };

  // Mở form thêm mới ứng viên
  const openAddForm = () => {
    setFormData({ // Reset form data
      name: "",
      email: "",
      phone: "",
      viTri: "Giảng Viên",
      kinhNghiem: "",
      khuVucLamViec: "Hà Nội",
      bangCap: "Cử nhân",
      mucLuong: "",
      ghiChu: "",
      kyNang: []
    });
    setSelectedUngVien(null);
    setEditMode(false);
    setShowAddModal(true);
    setShowModal(false); // Ensure detail modal is closed
  };

  // Xử lý thay đổi input trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Xử lý thay đổi kỹ năng (ví dụ với input dạng text, split bằng dấu phẩy)
  const handleSkillInputChange = (e) => {
     const skills = e.target.value.split(',').map(skill => skill.trim()).filter(Boolean);
     setFormData(prev => ({
        ...prev,
        kyNang: skills
     }));
  }
  // // Xử lý thay đổi kỹ năng (ví dụ với checkboxes - nếu dùng)
  // const handleSkillChange = (skill) => {
  //   setFormData(prev => {
  //     const currentSkills = prev.kyNang || [];
  //     if (currentSkills.includes(skill)) {
  //       return {
  //         ...prev,
  //         kyNang: currentSkills.filter(item => item !== skill)
  //       };
  //     } else {
  //       return {
  //         ...prev,
  //         kyNang: [...currentSkills, skill]
  //       };
  //     }
  //   });
  // };

  // Tính thống kê
  const calculateStats = () => {
    const totalApplications = data.length;
    const inReview = data.filter(item => item.trangThai === "Đang xét duyệt").length;
    const interviewed = data.filter(item => item.trangThai === "Đã phỏng vấn").length;
    const approved = data.filter(item => item.trangThai === "Đã duyệt").length;
    const rejected = data.filter(item => item.trangThai === "Từ chối").length;

    const positionStats = {};
    data.forEach(item => {
      if (!positionStats[item.viTri]) {
        positionStats[item.viTri] = 0;
      }
      positionStats[item.viTri]++;
    });

    const locationStats = {};
    data.forEach(item => {
      if (!locationStats[item.khuVucLamViec]) {
        locationStats[item.khuVucLamViec] = 0;
      }
      locationStats[item.khuVucLamViec]++;
    });

    return {
      totalApplications,
      inReview,
      interviewed, // Add interviewed to stats
      approved,
      rejected,
      positionStats,
      locationStats
    };
  };

  const stats = calculateStats();

  // Component hiển thị trạng thái
  const StatusBadge = ({ status }) => {
    let bgColor = "bg-gray-100 text-gray-800"; // Default for unknown status

    if (status === "Đang xét duyệt") {
        bgColor = "bg-blue-100 text-blue-800";
    } else if (status === "Đã duyệt") {
      bgColor = "bg-green-100 text-green-800";
    } else if (status === "Từ chối") {
      bgColor = "bg-red-100 text-red-800";
    } else if (status === "Đã phỏng vấn") {
      bgColor = "bg-purple-100 text-purple-800";
    }

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
        {status}
      </span>
    );
  };

  // Các lựa chọn cho dropdown
  const viTriOptions = getUniqueValues("viTri");
  const trangThaiOptions = getUniqueValues("trangThai");
  const khuVucOptions = getUniqueValues("khuVucLamViec");
  const bangCapOptions = getUniqueValues("bangCap"); // For form

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
            <FaFileAlt className="mr-3 text-blue-600 text-2xl" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Quản lý hồ sơ ứng tuyển</h1>
              <p className="text-sm text-gray-500">Quản lý và theo dõi các hồ sơ ứng tuyển</p>
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
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-80 z-20"> {/* Increased z-index */}
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
                  <div className="p-2 text-center">
                    <button className="text-sm text-blue-600 hover:underline">Xem tất cả</button>
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
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-48 z-20"> {/* Increased z-index */}
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

        {/* Hiển thị thống kê */}
        {showStats && (
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"> {/* Adjusted for 5 stats */}
            <div className="bg-white rounded-xl shadow-sm p-4 border border-blue-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Tổng số hồ sơ</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.totalApplications}</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaFileAlt className="text-blue-600 text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 border border-yellow-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Đang xét duyệt</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.inReview}</h3>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <FaClock className="text-yellow-600 text-xl" />
                </div>
              </div>
            </div>

             <div className="bg-white rounded-xl shadow-sm p-4 border border-purple-100"> {/* Interviewed Stat */}
                <div className="flex justify-between items-center">
                    <div>
                    <p className="text-sm text-gray-500">Đã phỏng vấn</p>
                    <h3 className="text-3xl font-bold text-gray-800">{stats.interviewed}</h3>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-lg">
                    <FaCalendarAlt className="text-purple-600 text-xl" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 border border-green-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Đã duyệt</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.approved}</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaUserCheck className="text-green-600 text-xl" />
                </div>
              </div>
            </div>

            {/* Finishing the cut-off div */}
            <div className="bg-white rounded-xl shadow-sm p-4 border border-red-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Đã từ chối</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.rejected}</h3>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <FaUserTimes className="text-red-600 text-xl" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email, SĐT..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm transition-colors whitespace-nowrap"
            >
              <FaUserPlus className="mr-2" /> Thêm hồ sơ
            </button>
        </div>

        {/* Filter Controls */}
        {showFilters && (
          <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
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
                {viTriOptions.map(option => <option key={option} value={option}>{option}</option>)}
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
                 {trangThaiOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="khuVucFilter" className="block text-sm font-medium text-gray-700 mb-1">Khu vực</label>
              <select
                id="khuVucFilter"
                name="khuVucLamViec"
                value={filters.khuVucLamViec}
                 onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Tất cả khu vực</option>
                {khuVucOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          </div>
        )}

        {/* Hồ sơ Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => handleSort('name')}>
                    Họ Tên {sorting.field === 'name' && (sorting.direction === 'asc' ? <FaSortAmountUp className="inline ml-1"/> : <FaSortAmountDown className="inline ml-1"/>)}
                  </th>
                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Liên Hệ
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => handleSort('viTri')}>
                    Vị Trí {sorting.field === 'viTri' && (sorting.direction === 'asc' ? <FaSortAmountUp className="inline ml-1"/> : <FaSortAmountDown className="inline ml-1"/>)}
                  </th>
                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => handleSort('ngayUngTuyen')}>
                    Ngày Nộp {sorting.field === 'ngayUngTuyen' && (sorting.direction === 'asc' ? <FaSortAmountUp className="inline ml-1"/> : <FaSortAmountDown className="inline ml-1"/>)}
                  </th>
                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100" onClick={() => handleSort('trangThai')}>
                    Trạng Thái {sorting.field === 'trangThai' && (sorting.direction === 'asc' ? <FaSortAmountUp className="inline ml-1"/> : <FaSortAmountDown className="inline ml-1"/>)}
                  </th>
                   <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hành Động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ngayUngTuyen}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <StatusBadge status={item.trangThai} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                            <div className="flex justify-center items-center space-x-2">
                                <button onClick={() => viewUngVien(item.id)} title="Xem chi tiết" className="text-blue-600 hover:text-blue-800"><FaEye /></button>
                                <button onClick={() => editUngVien(item.id)} title="Chỉnh sửa" className="text-indigo-600 hover:text-indigo-800"><FaUserEdit /></button>
                                <a href={`/path/to/cv/${item.cvLink}`} download title="Tải CV" className="text-green-600 hover:text-green-800"><FaDownload /></a>
                                {item.trangThai === "Đang xét duyệt" && (
                                    <>
                                        <button onClick={() => updateTrangThai(item.id, 'Đã duyệt')} title="Duyệt" className="text-green-600 hover:text-green-800"><FaUserCheck /></button>
                                        <button onClick={() => updateTrangThai(item.id, 'Từ chối')} title="Từ chối" className="text-red-600 hover:text-red-800"><FaUserTimes /></button>
                                         {!item.phongVan && <button onClick={() => addPhongVan(item.id)} title="Thêm lịch phỏng vấn" className="text-purple-600 hover:text-purple-800"><FaCalendarAlt /></button>}
                                    </>
                                )}
                                {item.trangThai === "Đã phỏng vấn" && (
                                    <>
                                        <button onClick={() => updateTrangThai(item.id, 'Đã duyệt')} title="Duyệt" className="text-green-600 hover:text-green-800"><FaUserCheck /></button>
                                        <button onClick={() => updateTrangThai(item.id, 'Từ chối')} title="Từ chối" className="text-red-600 hover:text-red-800"><FaUserTimes /></button>
                                    </>
                                )}
                                <button onClick={() => deleteUngVien(item.id)} title="Xóa" className="text-red-600 hover:text-red-800"><FaTrash /></button>
                            </div>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                            Không tìm thấy hồ sơ nào phù hợp.
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
           {/* Optional: Pagination can be added here */}
        </div>

         {/* Modal Xem chi tiết / Chỉnh sửa */}
        {(showModal && selectedUngVien) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                <h2 className="text-xl font-bold text-gray-800">{editMode ? 'Chỉnh sửa hồ sơ ứng viên' : 'Chi tiết hồ sơ ứng viên'}</h2>
                <button onClick={() => {setShowModal(false); setSelectedUngVien(null); setEditMode(false);}} className="text-gray-500 hover:text-gray-700">
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="p-6">
                {editMode ? (
                  // Edit Form
                  <form onSubmit={(e) => {e.preventDefault(); saveUngVien();}}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                       <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label htmlFor="viTri" className="block text-sm font-medium text-gray-700 mb-1">Vị trí ứng tuyển</label>
                        <select id="viTri" name="viTri" value={formData.viTri} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg">
                          {viTriOptions.map(option => <option key={option} value={option}>{option}</option>)}
                          {/* Add other positions if needed */}
                          <option value="Khác">Khác</option>
                        </select>
                      </div>
                       <div>
                        <label htmlFor="kinhNghiem" className="block text-sm font-medium text-gray-700 mb-1">Kinh nghiệm</label>
                        <input type="text" id="kinhNghiem" name="kinhNghiem" value={formData.kinhNghiem} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                       <div>
                        <label htmlFor="khuVucLamViec" className="block text-sm font-medium text-gray-700 mb-1">Khu vực làm việc</label>
                         <select id="khuVucLamViec" name="khuVucLamViec" value={formData.khuVucLamViec} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                          {khuVucOptions.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                      </div>
                       <div>
                        <label htmlFor="bangCap" className="block text-sm font-medium text-gray-700 mb-1">Bằng cấp</label>
                        <select id="bangCap" name="bangCap" value={formData.bangCap} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                          {bangCapOptions.map(option => <option key={option} value={option}>{option}</option>)}
                           <option value="Khác">Khác</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="mucLuong" className="block text-sm font-medium text-gray-700 mb-1">Mức lương mong muốn</label>
                        <input type="text" id="mucLuong" name="mucLuong" value={formData.mucLuong} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                       <div className="md:col-span-2">
                        <label htmlFor="kyNang" className="block text-sm font-medium text-gray-700 mb-1">Kỹ năng (cách nhau bởi dấu phẩy)</label>
                        <input
                            type="text"
                            id="kyNang"
                            name="kyNang"
                            value={(formData.kyNang || []).join(', ')}
                            onChange={handleSkillInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="VD: IELTS, Word, Giao tiếp"
                        />
                      </div>
                       <div className="md:col-span-2">
                        <label htmlFor="ghiChu" className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                        <textarea id="ghiChu" name="ghiChu" value={formData.ghiChu} onChange={handleInputChange} rows="3" className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3 p-4 border-t sticky bottom-0 bg-white z-10">
                        <button type="button" onClick={() => {setShowModal(false); setSelectedUngVien(null); setEditMode(false);}} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Hủy</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Lưu thay đổi</button>
                    </div>
                  </form>
                ) : (
                  // View Details
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        <p><strong>Họ tên:</strong> {selectedUngVien.name}</p>
                        <p><strong>Email:</strong> {selectedUngVien.email}</p>
                        <p><strong>Số điện thoại:</strong> {selectedUngVien.phone}</p>
                        <p><strong>Vị trí ứng tuyển:</strong> {selectedUngVien.viTri}</p>
                        <p><strong>Kinh nghiệm:</strong> {selectedUngVien.kinhNghiem}</p>
                        <p><strong>Khu vực:</strong> {selectedUngVien.khuVucLamViec}</p>
                        <p><strong>Bằng cấp:</strong> {selectedUngVien.bangCap}</p>
                        <p><strong>Ngày ứng tuyển:</strong> {selectedUngVien.ngayUngTuyen}</p>
                        <p><strong>Mức lương mong muốn:</strong> {selectedUngVien.mucLuong}</p>
                        <p><strong>Trạng thái:</strong> <StatusBadge status={selectedUngVien.trangThai} /></p>
                        <p><strong>Điểm Test:</strong> {selectedUngVien.diemTest ?? 'N/A'}</p>
                        <p><strong>CV:</strong> <a href={`/path/to/cv/${selectedUngVien.cvLink}`} download className="text-blue-600 hover:underline">{selectedUngVien.cvLink}</a></p>
                    </div>
                     <div className="border-t pt-4">
                        <p><strong>Kỹ năng:</strong> {(selectedUngVien.kyNang || []).join(', ') || 'N/A'}</p>
                    </div>
                     <div className="border-t pt-4">
                         <p><strong>Ghi chú:</strong> {selectedUngVien.ghiChu || 'Không có'}</p>
                    </div>
                     {selectedUngVien.phongVan && (
                         <div className="border-t pt-4 bg-purple-50 p-3 rounded-lg">
                            <h4 className="font-semibold mb-2 text-purple-800">Thông tin phỏng vấn</h4>
                            <p><strong>Ngày phỏng vấn:</strong> {selectedUngVien.phongVan.ngay}</p>
                            <p><strong>Người phỏng vấn:</strong> {selectedUngVien.phongVan.nguoiPhongVan}</p>
                            <p><strong>Kết quả:</strong> {selectedUngVien.phongVan.ketQua}</p>
                        </div>
                    )}
                    <div className="flex justify-end space-x-3 p-4 border-t sticky bottom-0 bg-white z-10">
                         <button onClick={() => {setShowModal(false); setSelectedUngVien(null);}} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Đóng</button>
                         <button onClick={() => editUngVien(selectedUngVien.id)} className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Chỉnh sửa</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal Thêm mới */}
        {showAddModal && (
             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                <h2 className="text-xl font-bold text-gray-800">Thêm hồ sơ ứng viên mới</h2>
                <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700">
                  <FaTimes size={20} />
                </button>
              </div>

              <form onSubmit={(e) => {e.preventDefault(); saveUngVien();}}>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                       <div>
                        <label htmlFor="add-name" className="block text-sm font-medium text-gray-700 mb-1">Họ tên <span className="text-red-500">*</span></label>
                        <input type="text" id="add-name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label htmlFor="add-email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                        <input type="email" id="add-email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label htmlFor="add-phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại <span className="text-red-500">*</span></label>
                        <input type="tel" id="add-phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div>
                        <label htmlFor="add-viTri" className="block text-sm font-medium text-gray-700 mb-1">Vị trí ứng tuyển <span className="text-red-500">*</span></label>
                        <select id="add-viTri" name="viTri" value={formData.viTri} onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded-lg">
                          {viTriOptions.map(option => <option key={option} value={option}>{option}</option>)}
                          <option value="Khác">Khác</option>
                        </select>
                      </div>
                       <div>
                        <label htmlFor="add-kinhNghiem" className="block text-sm font-medium text-gray-700 mb-1">Kinh nghiệm</label>
                        <input type="text" id="add-kinhNghiem" name="kinhNghiem" value={formData.kinhNghiem} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                       <div>
                        <label htmlFor="add-khuVucLamViec" className="block text-sm font-medium text-gray-700 mb-1">Khu vực làm việc</label>
                         <select id="add-khuVucLamViec" name="khuVucLamViec" value={formData.khuVucLamViec} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                          {khuVucOptions.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                      </div>
                       <div>
                        <label htmlFor="add-bangCap" className="block text-sm font-medium text-gray-700 mb-1">Bằng cấp</label>
                        <select id="add-bangCap" name="bangCap" value={formData.bangCap} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg">
                          {bangCapOptions.map(option => <option key={option} value={option}>{option}</option>)}
                           <option value="Khác">Khác</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="add-mucLuong" className="block text-sm font-medium text-gray-700 mb-1">Mức lương mong muốn</label>
                        <input type="text" id="add-mucLuong" name="mucLuong" value={formData.mucLuong} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
                      </div>
                       <div className="md:col-span-2">
                        <label htmlFor="add-kyNang" className="block text-sm font-medium text-gray-700 mb-1">Kỹ năng (cách nhau bởi dấu phẩy)</label>
                         <input
                            type="text"
                            id="add-kyNang"
                            name="kyNang"
                            value={(formData.kyNang || []).join(', ')}
                            onChange={handleSkillInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="VD: IELTS, Word, Giao tiếp"
                        />
                      </div>
                       <div className="md:col-span-2">
                        <label htmlFor="add-ghiChu" className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                        <textarea id="add-ghiChu" name="ghiChu" value={formData.ghiChu} onChange={handleInputChange} rows="3" className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
                      </div>
                      {/* Note: CV upload would require more complex handling (state for file, upload logic) */}
                       <div className="md:col-span-2 text-sm text-gray-500">
                            Lưu ý: Tải lên CV sẽ được thực hiện ở bước sau hoặc liên kết thủ công.
                       </div>
                    </div>
                  </div>
                 <div className="flex justify-end space-x-3 p-4 border-t sticky bottom-0 bg-white z-10">
                        <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Hủy</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Thêm ứng viên</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default HoSoUngTuyenPage;