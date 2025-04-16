import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMockTestsByYearAndMonth, submitMockTest } from '../../services/apiMocktest';
import Header from '../../components/layout/Header';
import Footer from '../../components/Layout/Footer';

const ReadingTestDetail = () => {
  const { year, month } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 phút cho Reading
  const [highlights, setHighlights] = useState([]);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMockTestsByYearAndMonth(year, month);
        const readingTest = data.find(t => t.skill === 'reading');
        if (!readingTest) {
          throw new Error('Không tìm thấy bài thi Reading.');
        }
        setTest(readingTest);
      } catch (err) {
        setError('Không thể tải bài thi. Vui lòng thử lại.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTest();
  }, [year, month]);

  const handleSubmit = useCallback(async () => {
    if (test) {
      try {
        const result = await submitMockTest(test.id, { answers, highlights, notes });
        navigate(`/result/${result.resultId}`);
      } catch (err) {
        setError('Không thể nộp bài. Vui lòng thử lại.');
        console.error(err);
      }
    }
  }, [test, answers, highlights, notes, navigate]);

  useEffect(() => {
    if (timeLeft > 0 && test) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && test) {
      handleSubmit();
    }
  }, [timeLeft, test, handleSubmit]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleHighlight = () => {
    const selection = window.getSelection();
    if (selection.rangeCount) {
      const range = selection.getRangeAt(0);
      setHighlights(prev => [...prev, { start: range.startOffset, end: range.endOffset }]);
      selection.removeAllRanges();
    }
  };

  if (loading) return <div className="text-center text-gray-600">Đang tải...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;
  if (!test) return <div className="text-center text-gray-600">Không tìm thấy bài thi.</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">
            {test.name} - {year} {month}
          </h1>
          <div className="mb-4">
            Thời gian còn lại: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 border p-4">
                <h3 className="text-xl font-semibold">Passage</h3>
                <div
                  className="prose"
                  onMouseUp={handleHighlight}
                  dangerouslySetInnerHTML={{
                    __html: highlights.reduce((text, h) =>
                      text.substring(0, h.start) +
                      `<span class="bg-yellow-200">${text.substring(h.start, h.end)}</span>` +
                      text.substring(h.end), test.questions[0]?.question_text || '')
                  }}
                />
                <div className="mt-2">
                  <h4>Highlights</h4>
                  {highlights.map((h, i) => (
                    <div key={i} className="flex gap-2">
                      <span>{test.questions[0]?.question_text.substring(h.start, h.end)}</span>
                      <button
                        className="text-red-500"
                        onClick={() => setHighlights(highlights.filter((_, idx) => idx !== i))}
                      >
                        Xóa
                      </button>
                    </div>
                  ))}
                </div>
                <textarea
                  className="w-full mt-2 p-2 border rounded"
                  placeholder="Ghi chú..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                />
                <button
                  className="mt-2 text-red-500"
                  onClick={() => setNotes('')}
                >
                  Xóa ghi chú
                </button>
              </div>
              <div className="w-full md:w-1/2 border p-4">
                {test.questions.map((question) => (
                  <div key={question.id} className="mb-6">
                    <p className="text-lg font-semibold text-gray-800">{question.question_text}</p>
                    {question.question_type === 'true_false' ? (
                      <div>
                        <label><input type="radio" name={`question-${question.id}`} value="TRUE" onChange={e => handleAnswerChange(question.id, e.target.value)} /> TRUE</label>
                        <label><input type="radio" name={`question-${question.id}`} value="FALSE" onChange={e => handleAnswerChange(question.id, e.target.value)} /> FALSE</label>
                        <label><input type="radio" name={`question-${question.id}`} value="NOT GIVEN" onChange={e => handleAnswerChange(question.id, e.target.value)} /> NOT GIVEN</label>
                      </div>
                    ) : (
                      <input
                        type="text"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all"
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