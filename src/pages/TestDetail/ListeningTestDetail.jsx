import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// Giả sử bạn đã có Header, Footer, hoặc các component layout khác
import Header from "../../components/layout/Header";
import Footer from "../../components/Layout/Footer";

const ReadingTestDetail = () => {
  const { year, month } = useParams();
  const navigate = useNavigate();

  // State lưu bài đọc, câu hỏi, highlight, answers
  const [passage, setPassage] = useState("");
  const [questions, setQuestions] = useState([]);
  const [highlights, setHighlights] = useState([]); // mảng các highlight { id, text, note }
  const [selectedRange, setSelectedRange] = useState(null);
  const contentRef = useRef();

  // Fake API call: bạn nên thay thế bằng call API thực (dựa theo year, month)
  useEffect(() => {
    // Ví dụ gọi API theo: `/api/reading/test?year=${year}&month=${month}`
    axios.get(`/api/reading/test`, {
      params: { year, month }
    })
    .then(response => {
      // Response có thể bao gồm { passage, questions }.
      setPassage(response.data.passage);
      setQuestions(response.data.questions);
    })
    .catch(err => console.error("Error fetching test data:", err));
  }, [year, month]);

  // Xử lý khi người dùng chọn đoạn text
  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection.toString().trim() !== "") {
      setSelectedRange({
        text: selection.toString()
      });
    }
  };

  // Thêm highlight và note
  const handleAddHighlight = () => {
    if (!selectedRange) return;
    // Yêu cầu nhập note (bạn có thể dùng modal thay cho prompt để giao diện đẹp hơn)
    const note = prompt("Nhập note cho đoạn được highlight (nếu có):");
    const newHighlight = {
      id: Date.now(),
      text: selectedRange.text,
      note: note || ""
    };
    setHighlights([...highlights, newHighlight]);
    setSelectedRange(null);
    window.getSelection().removeAllRanges();
  };

  // Xóa highlight
  const handleDeleteHighlight = (id) => {
    setHighlights(highlights.filter(h => h.id !== id));
  };

  // Xử lý nộp bài (gom dữ liệu từ câu hỏi và highlight nếu cần)
  const handleSubmit = () => {
    // Giả sử bạn gom dữ liệu các câu trả lời từ form (ở đây tạm để rỗng)
    const answers = {}; // Thu thập từ input người dùng theo question id

    const payload = {
      year,
      month,
      answers,
      highlights,
    };

    axios.post(`/api/reading/submit`, payload)
      .then(response => {
        alert(`Điểm của bạn: ${response.data.score}`);
        // Chuyển hướng hoặc thông báo thành công...
      })
      .catch(err => console.error("Error submitting test:", err));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => navigate(-1)} 
            className="text-blue-500 mb-4 hover:underline"
          >
            ← Quay lại danh sách test
          </button>

          <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
            IELTS Reading Test {month} {year}
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Cột bên trái: Bài đọc với highlight */}
            <div 
              className="md:w-2/3 border p-4 rounded bg-white relative"
              onMouseUp={handleMouseUp}
              ref={contentRef}
              style={{ minHeight: "300px" }}
            >
              <div dangerouslySetInnerHTML={{ __html: passage }} />
              
              {/* Hiển thị các highlight (vị trí tạm tính theo demo; có thể cần logic tính toán chính xác) */}
              {highlights.map((h) => (
                <div key={h.id} 
                     className="absolute bg-yellow-200 p-1 rounded border border-yellow-400"
                     style={{ top: Math.random()*200, left: Math.random()*50 }}
                >
                  <span>{h.text}</span>
                  {h.note && <div className="text-xs italic">{h.note}</div>}
                  <button 
                    className="text-red-500 text-xs mt-1" 
                    onClick={() => handleDeleteHighlight(h.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            {/* Cột bên phải: Các Task/Câu hỏi */}
            <div className="md:w-1/3 border p-4 rounded bg-white space-y-6">
              {questions.map(q => (
                <div key={q.id} className="p-2 border rounded">
                  <h2 className="font-semibold">Task {q.task_number}</h2>
                  <p>{q.question}</p>
                  {/* Nếu có options thì render radio button, nếu không render input */}
                  {q.options ? (
                    JSON.parse(q.options).map((opt, idx) => (
                      <label key={idx} className="block">
                        <input type="radio" name={`q_${q.id}`} value={opt} className="mr-2" />
                        {opt}
                      </label>
                    ))
                  ) : (
                    <input 
                      type="text" 
                      name={`q_${q.id}`} 
                      className="border p-1 mt-2 w-full" 
                      placeholder="Nhập câu trả lời" 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hiển thị nút thêm highlight nếu có đoạn được chọn */}
          {selectedRange && (
            <div className="mt-4 flex items-center">
              <span className="mr-4">
                Đoạn đã chọn: <strong>{selectedRange.text}</strong>
              </span>
              <button 
                className="px-4 py-1 bg-blue-500 text-white rounded" 
                onClick={handleAddHighlight}
              >
                Thêm Highlight & Note 
              </button>
            </div>
          )}

          {/* Nút nộp bài */}
          <div className="mt-10 flex justify-center">
            <button 
              onClick={handleSubmit}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
            >
              Nộp bài
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReadingTestDetail;
