import axios from 'axios';

const API_URL = 'http://localhost:3010/auth';

export const register = async (data) => {
  return axios.post(`${API_URL}/register`, data);
};

export const login = async (data) => {
  return axios.post(`${API_URL}/login`, data);
};

export const forgotPassword = async (email) => {
  return axios.post(`${API_URL}/forgot-password`, { email });
};

export const resetPassword = async (token, new_password) => {
  return axios.post(`${API_URL}/reset-password`, { token, new_password });
};