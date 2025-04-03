import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/Layout/Footer';
import { FaEye, FaTrash } from 'react-icons/fa';

const ExamHistory = () => {
  const [filters, setFilters] = useState({
    date: '',
    skill: 'all',
    status: 'all',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const skills = ["Full", "Listening", "Reading", "Writing", "Speaking"];
  const examData = Array.from({ length: 34 }, (_, index) => {
    const id = index + 1;
    const month = Math.random() < 0.5 ? 3 : 4;
    const day = month === 3 ? Math.floor(Math.random() * 31) + 1 : Math.floor(Math.random() * 30) + 1;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const date = `2025-${month}-${formattedDay}`;
    const skill = skills[index % skills.length];
    const type = skill === "Full" ? "Full Test" : skill;
    const name = `${type} Test ${Math.ceil(id / 5)}`;
    const score = (Math.floor(Math.random() * 18) + 1) * 0.5;
    const time = skill === "Full" ? "02:30:00" :
                          skill === "Listening" ? "00:40:00" :
                          skill === "Reading" ? "01:00:00" :
                          skill === "Writing" ? "01:00:00" : "00:15:00";
    const status = index % 2 === 0 ? "Hoàn thành" : "Chưa hoàn thành";
    return { id, date, name, type, skill, score: score.toFixed(1), time, status };
  });

  const filteredData = examData.filter(item => {
    const matchDate = !filters.date || item.date === filters.date;
    const matchSkill = filters.skill === 'all' || item.skill === filters.skill;
    const matchStatus = filters.status === 'all' || item.status === filters.status;
    return matchDate && matchSkill && matchStatus;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToFirstPage = () => setCurrentPage(1);
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 pb-8 pt-24">
        <section className="py-8 bg-gray-50 text-indigo-800 text-center rounded-lg mb-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">Lịch Sử Bài Thi IELTS</h1>
            <p className="text-lg md:text-xl opacity-75">Xem lại và quản lý các bài thi của bạn một cách dễ dàng</p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-5 mb-5 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input
                type="date"
                className="p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-colors cursor-pointer"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                placeholder="Chọn ngày"
              />
              <select
                className="p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-colors cursor-pointer"
                value={filters.skill}
                onChange={(e) => setFilters({ ...filters, skill: e.target.value })}
              >
                <option value="all">Tất cả kỹ năng</option>
                <option value="Full">Full Test</option>
                <option value="Listening">Listening</option>
                <option value="Reading">Reading</option>
                <option value="Writing">Writing</option>
                <option value="Speaking">Speaking</option>
              </select>
              <select
                className="p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-colors cursor-pointer"
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="Hoàn thành">Hoàn thành</option>
                <option value="Chưa hoàn thành">Chưa hoàn thành</option>
              </select>
              <div className="flex gap-2">
                <button
                  className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors cursor-pointer"
                  onClick={() => setCurrentPage(1)}
                >
                  Lọc
                </button>
                <button
                  className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors cursor-pointer"
                  onClick={() => {
                    setFilters({ date: '', skill: 'all', status: 'all' });
                    setCurrentPage(1);
                  }}
                >
                  Tạo lại
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-x-auto border border-gray-100">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200 uppercase">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên bài thi</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loại bài thi</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Điểm</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thời gian</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-700">{item.date}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.type}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">{item.score}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.time}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Hoàn thành'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors cursor-pointer"
                          onClick={() => console.log('Xem', item.id)}
                        >
                          <FaEye className="text-indigo-600" />
                          <span>Xem</span>
                        </button>
                        <button
                          className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm font-medium transition-colors cursor-pointer"
                          onClick={() => console.log('Xóa', item.id)}
                        >
                          <FaTrash className="text-red-600" />
                          <span>Xóa</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex justify-center items-center space-x-3">
            <button
              className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 cursor-pointer"
              onClick={goToFirstPage}
              disabled={currentPage === 1}
            >
              Đầu
            </button>
            <button
              className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 cursor-pointer"
              onClick={goToPrevPage}
              disabled={currentPage === 1}
            >
              Trước
            </button>
            <span className="text-sm text-gray-600">
              {currentPage} / {totalPages}
            </span>
            <button
              className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 cursor-pointer"
              onClick={goToNextPage}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              Tiếp
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExamHistory;