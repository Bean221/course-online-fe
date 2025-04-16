import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaRegListAlt,
  FaClipboardList,
  FaChalkboardTeacher,
  FaFileAlt,
  FaUserTie,
  FaMoneyBillWave,
} from "react-icons/fa";

const AdminSidebar = ({ userRole = "manager" }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [role, setRole] = useState(userRole);
  
  useEffect(() => {
    // Đảm bảo prop userRole được cập nhật
    console.log("Sidebar received role:", userRole);
    setRole(userRole);
    
    // Backup: nếu prop không có, lấy từ localStorage
    if (!userRole) {
      const storedRole = localStorage.getItem("userRole");
      console.log("Using role from localStorage:", storedRole);
      setRole(storedRole);
    }
  }, [userRole]);
  
  const isAdmin = role === "admin";
  console.log("Is admin:", isAdmin); // Kiểm tra giá trị isAdmin
  
  return (
    <aside
      className={`fixed h-screen ${
        isCollapsed ? "w-20" : "w-64"
      } bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col group`}
    >
      {/* Header */}
      <div className="p-5 pb-4 border-b border-slate-800">
        {isCollapsed ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-blue-500/20 rounded-md flex items-center justify-center">
              <span className="text-lg font-bold text-blue-300">B</span>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-semibold text-slate-100">BEANLEARN</h1>
            <p className="text-xs mt-1 text-slate-500">Quản trị hệ thống</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2.5 py-4 space-y-1">
        {/* 3 mục dành cho cả admin và manager */}
        <NavLink
          to="/quan-ly/thi-sinh"
          className={({ isActive }) => `
            flex items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } py-3 rounded-lg transition-colors
            ${
              isActive
                ? "bg-blue-500/10 border-l-4 border-blue-400 text-blue-300"
                : "text-slate-400 hover:bg-blue-500/5 hover:text-blue-200"
            } cursor-pointer`}
        >
          <FaRegListAlt className={isCollapsed ? "" : "mr-3"} size={20} />
          {!isCollapsed && "Thí sinh đăng ký thi"}
        </NavLink>

        <NavLink
          to="/quan-ly/tu-van"
          className={({ isActive }) => `
            flex items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } py-3 rounded-lg transition-colors
            ${
              isActive
                ? "bg-blue-500/10 border-l-4 border-blue-400 text-blue-300"
                : "text-slate-400 hover:bg-blue-500/5 hover:text-blue-200"
            } cursor-pointer`}
        >
          <FaClipboardList className={isCollapsed ? "" : "mr-3"} size={20} />
          {!isCollapsed && "Đăng ký tư vấn"}
        </NavLink>

        <NavLink
          to="/quan-ly/thi-thu"
          className={({ isActive }) => `
            flex items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } py-3 rounded-lg transition-colors
            ${
              isActive
                ? "bg-blue-500/10 border-l-4 border-blue-400 text-blue-300"
                : "text-slate-400 hover:bg-blue-500/5 hover:text-blue-200"
            } cursor-pointer`}
        >
          <FaChalkboardTeacher
            className={isCollapsed ? "" : "mr-3"}
            size={20}
          />
          {!isCollapsed && "Quản lý thi thử"}
        </NavLink>
        
        {/* 4 mục chỉ dành cho admin */}
        {isAdmin && (
          <>
            <NavLink
              to="/admin/ho-so-ung-tuyen"
              className={({ isActive }) => `
                flex items-center ${
                  isCollapsed ? "justify-center" : "px-4"
                } py-3 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-blue-500/10 border-l-4 border-blue-400 text-blue-300"
                    : "text-slate-400 hover:bg-blue-500/5 hover:text-blue-200"
                } cursor-pointer`}
            >
              <FaFileAlt className={isCollapsed ? "" : "mr-3"} size={20} />
              {!isCollapsed && "Hồ sơ ứng tuyển"}
            </NavLink>

            <NavLink
              to="/admin/nhan-su"
              className={({ isActive }) => `
                flex items-center ${
                  isCollapsed ? "justify-center" : "px-4"
                } py-3 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-blue-500/10 border-l-4 border-blue-400 text-blue-300"
                    : "text-slate-400 hover:bg-blue-500/5 hover:text-blue-200"
                } cursor-pointer`}
            >
              <FaUserTie className={isCollapsed ? "" : "mr-3"} size={20} />
              {!isCollapsed && "Nhân sự BeanLearn"}
            </NavLink>

            <NavLink
              to="/admin/doanh-thu"
              className={({ isActive }) => `
                flex items-center ${
                  isCollapsed ? "justify-center" : "px-4"
                } py-3 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-blue-500/10 border-l-4 border-blue-400 text-blue-300"
                    : "text-slate-400 hover:bg-blue-500/5 hover:text-blue-200"
                } cursor-pointer`}
            >
              <FaMoneyBillWave className={isCollapsed ? "" : "mr-3"} size={20} />
              {!isCollapsed && "Quản lý doanh thu"}
            </NavLink>
            
            <NavLink
              to="/admin/nguoi-dung"
              className={({ isActive }) => `
                flex items-center ${
                  isCollapsed ? "justify-center" : "px-4"
                } py-3 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-blue-500/10 border-l-4 border-blue-400 text-blue-300"
                    : "text-slate-400 hover:bg-blue-500/5 hover:text-blue-200"
                } cursor-pointer`}
            >
              <FaUsers className={isCollapsed ? "" : "mr-3"} size={20} />
              {!isCollapsed && "Quản lý người dùng"}
            </NavLink>
          </>
        )}
      </nav>

      {/* Collapse Button */}
      <div className="mt-auto p-3 border-t border-slate-800">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 rounded-md hover:bg-slate-800/30 transition-colors cursor-pointer"
        >
          {isCollapsed ? (
            <FaChevronRight className="text-slate-400 text-sm hover:text-blue-300" />
          ) : (
            <>
              <FaChevronLeft className="text-slate-400 mr-2 text-sm hover:text-blue-300" />
              <span className="text-xs text-slate-400 hover:text-blue-300">
                Thu gọn
              </span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;