import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL backend
  withCredentials: true,
});

// Login: POST /auth/login
export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response || error);
    throw error;
  }
};

// Register: POST /auth/register
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Register error:', error.response || error);
    throw error;
  }
};

// Logout: POST /auth/logout
export const logout = async () => {
  try {
    const response = await api.post('/auth/logout');
    return response.data;
  } catch (error) {
    console.error('Logout error:', error.response || error);
    throw error;
  }
};

// Forgot Password: POST /auth/forgot-password
export const forgotPassword = async (emailData) => {
  try {
    const response = await api.post('/auth/forgot-password', emailData);
    return response.data;
  } catch (error) {
    console.error('Forgot password error:', error.response || error);
    throw error;
  }
};

// Reset Password: POST /auth/reset-password
export const resetPassword = async (resetData) => {
  try {
    const response = await api.post('/auth/reset-password', resetData);
    return response.data;
  } catch (error) {
    console.error('Reset password error:', error.response || error);
    throw error;
  }
};
