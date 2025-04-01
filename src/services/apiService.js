import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL backend
  withCredentials: true,
});

// Login: POST /auth/login
export const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    // Giả sử API trả về token và thông tin user
    const { token, user } = response.data;

    // Lưu token và tên người dùng vào localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("userName", user.full_name);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response || error);
    throw error;
  }
};

// Register: POST /auth/register
export const register = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Register error:", error.response || error);
    throw error;
  }
};

// Logout: POST /auth/logout
export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.error("Logout error:", error.response || error);
    throw error;
  }
};

// Forgot Password: POST /auth/forgot-password
export const forgotPassword = async (email) => {
  const response = await api.post("/auth/forgot-password", { email });
  return response.data;
};

// Reset Password: POST /auth/reset-password
export const resetPassword = async (token, newPassword) => {
  // Gửi PUT request với body chứa token và newPassword
  const response = await api.put("/auth/reset-password", {
    token,
    newPassword,
  });
  return response.data; // Ví dụ: { message: 'Đổi mật khẩu thành công' }
};

// Change Password: PUT /auth/change-password
export const changePassword = async (currentPassword, newPassword) => {
  const token = localStorage.getItem("token");
  const response = await api.put(
    "/auth/change-password",
    { currentPassword, newPassword },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};
export const getUserProfile = async () => {
  const token = localStorage.getItem("token"); // Lấy token từ localStorage hoặc nơi bạn lưu trữ
  const response = await axios.get("/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Hàm cập nhật thông tin profile người dùng (không cập nhật email)
export const updateUserProfile = async (profileData) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(
    "/users/profile",
    profileData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
