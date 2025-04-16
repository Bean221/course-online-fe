import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = localStorage.getItem("role"); // hoặc dùng context/auth hook

  if (!role || !allowedRoles.includes(role)) {
    // Nếu không đúng quyền → chuyển hướng
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
