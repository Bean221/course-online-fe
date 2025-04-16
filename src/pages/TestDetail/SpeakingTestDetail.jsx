import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMockTestsByYearAndMonth, submitMockTest } from '../../services/apiMocktest';
import Header from '../../components/layout/Header';
import Footer from '../../components/Layout/Footer';

const SpeakingTestDetail = () => {
  const { year, month } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState(null);
  const [recordings, setRecordings] = useState([]);
  const [timeLeft, setTimeLeft] = useState(14 * 60); // 14 phút cho Speaking
  const [isRecording, setIsRecording] = useState(false);
  const [currentPart, setCurrentPart] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMockTestsByYearAndMonth(year, month);
        const speakingTest = data.find(t => t.skill === 'speaking');
        if (!speakingTest) {
          throw new Error('Không tìm thấy bài thi Speaking.');
        }
        setTest(speakingTest);
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
        const result = await submitMockTest(test.id, { recordings });
        navigate(`/result/${result.resultId}`);
      } catch (err) {
        setError('Không thể nộp bài. Vui lòng thử lại.');
        console.error(err);
      }
    }
  }, [test, recordings, navigate]);

  useEffect(() => {
    if (timeLeft > 0 && test) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && test) {
      handleSubmit();
    }
  }, [timeLeft, test, handleSubmit]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setRecordings(prev => [...prev, `Recording for Part ${currentPart}`]);
    }, 3000); // Giả lập ghi âm 3 giây
  };

  const handleNextPart = () => {
    if (currentPart < 3) {
      setCurrentPart(currentPart + 1);
    } else {
      handleSubmit();
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
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Part {currentPart}</h3>
              <p className="text-gray-700">{test.questions[currentPart - 1]?.question_text}</p>
              <button
                onClick={handleStartRecording}
                className={`mt-4 px-4 py-2 rounded-full ${isRecording ? 'bg-red-600' : 'bg-green-600'} text-white`}
                disabled={isRecording}
              >
                {isRecording ? 'Đang ghi âm...' : 'Bắt đầu ghi âm'}
              </button>
              <button
                onClick={handleNextPart}
                className="mt-4 ml-4 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all"
              >
                {currentPart < 3 ? 'Tiếp theo' : 'Nộp bài'}
              </button>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Bản ghi âm</h4>
              {recordings.map((recording, index) => (
                <p key={index} className="text-gray-700">{recording}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpeakingTestDetail;