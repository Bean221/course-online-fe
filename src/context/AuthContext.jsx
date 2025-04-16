import React, { createContext, useState, useContext } from 'react';

// Tạo context
const AuthContext = createContext(null);

// Custom hook để dùng AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // user = null => chưa đăng nhập
  // user = { name, email, ... } => đã đăng nhập
  const [user, setUser] = useState(null);

  // Hàm login giả lập
  const login = (userData) => {
    // Lưu userData vào state, có thể lưu localStorage, v.v.
    setUser(userData);
  };

  // Hàm logout
  const logout = () => {
    setUser(null);
  };

  // Hàm register, forgotPassword... tuỳ ý
  // Ở ví dụ này chỉ login/logout cho đơn giản

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
