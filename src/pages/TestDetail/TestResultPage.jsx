import AllTestDetail from './TestDetail/AllTestDetail';

const TestResultPage = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kết quả bài thi</h1>
      <p className="mb-2">Tổng điểm: {data.score}</p>

      <AllTestDetail resultData={data.details} />

      {/* Có thể thêm biểu đồ, hoặc link quay lại trang chủ, hoặc xem bài thi khác */}
    </div>
  );
};

export default TestResultPage;
