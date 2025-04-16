import axios from "axios";

const API_URL = "http://localhost:3000"; // Thay đổi URL này theo backend của cậu



// 1. Lấy danh sách bài thi theo năm và tháng
export const getMockTestsByYearAndMonth = async (year, month) => {
  try {
    const response = await axios.get(`${API_URL}/mock-tests/${year}/${month}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bài thi:", error);
    throw error;
  }
};
// 2. Lấy chi tiết một bài thi cụ thể
export const getMockTestDetail = async (testId) => {
  try {
    const response = await axios.get(`${API_URL}/mock-tests/${testId}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết bài thi:", error);
    throw error;
  }
};

// 3. Nộp bài thi
export const submitMockTest = async (testId, answers) => {
  try {
    const response = await axios.post(
      `${API_URL}/mock-tests/${testId}/submit`,
      { answers }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi nộp bài thi:", error);
    throw error;
  }
};
// 4. Lấy kết quả bài thi
export const getTestResult = async (resultId) => {
  try {
    const response = await axios.get(`${API_URL}/results/${resultId}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy kết quả bài thi:", error);
    throw error;
  }
};
// 5. Lấy danh sách các năm có bài thi
export const getAvailableYears = async () => {
  try {
    const response = await axios.get(`${API_URL}/mock-tests/years`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách năm:", error);
    throw error;
  }
};
//6. Lấy danh sách các tháng có bài thi trong một năm
export const getAvailableMonthsByYear = async (year) => {
  try {
    const response = await axios.get(`${API_URL}/mock-tests/${year}/months`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách tháng:", error);
    throw error;
  }
};
