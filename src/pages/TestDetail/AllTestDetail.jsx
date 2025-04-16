import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMockTestsByYearAndMonth, submitMockTest } from '../../services/apiMocktest';
import Header from '../../components/layout/Header';
import Footer from '../../components/Layout/Footer';

const AllTestDetail = () => {
  const { year, month } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentSkill, setCurrentSkill] = useState('listening');
  const [timeLeft, setTimeLeft] = useState(180 * 60); // 3 tiếng cho bài thi full
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMockTestsByYearAndMonth(year, month);
        const fullTest = data.find(t => t.type === 'full');
        if (!fullTest) {
          throw new Error('Không tìm thấy bài thi Full.');
        }
        setTest(fullTest);
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
        const result = await submitMockTest(test.id, answers);
        navigate(`/result/${result.resultId}`);
      } catch (err) {
        setError('Không thể nộp bài. Vui lòng thử lại.');
        console.error(err);
      }
    }
  }, [test, answers, navigate]);

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
          <div className="flex gap-2 mb-4">
            {['listening', 'reading', 'writing', 'speaking'].map(skill => (
              <button
                key={skill}
                onClick={() => setCurrentSkill(skill)}
                className={`p-2 ${currentSkill === skill ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
              >
                {skill.charAt(0).toUpperCase() + skill.slice(1)}
              </button>
            ))}
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            {currentSkill === 'listening' && test.listening_audio_url && (
              <div className="mb-6">
                <audio controls src={test.listening_audio_url} className="w-full">
                  Trình duyệt của bạn không hỗ trợ audio.
                </audio>
              </div>
            )}
            {currentSkill === 'writing' ? (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold">Task 1</h3>
                  <p className="text-gray-700">{test.questions.find(q => q.skill === 'writing' && q.task === 1)?.question_text}</p>
                  <textarea
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                    rows="10"
                    placeholder="Viết bài của bạn (ít nhất 150 từ)..."
                    onChange={(e) => handleAnswerChange('writing_task1', e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold">Task 2</h3>
                  <p className="text-gray-700">{test.questions.find(q => q.skill === 'writing' && q.task === 2)?.question_text}</p>
                  <textarea
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                    rows="10"
                    placeholder="Viết bài của bạn (ít nhất 250 từ)..."
                    onChange={(e) => handleAnswerChange('writing_task2', e.target.value)}
                  />
                </div>
              </>
            ) : (
              test.questions
                .filter(q => q.skill === currentSkill)
                .map(question => (
                  <div key={question.id} className="mb-6">
                    <p className="text-lg font-semibold text-gray-800">{question.question_text}</p>
                    {question.question_type === 'multiple_choice' ? (
                      <div>
                        {JSON.parse(question.options).map((option, index) => (
                          <label key={index} className="block">
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option}
                              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                              className="mr-2"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    ) : (
                      <input
                        type="text"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      />
                    )}
                  </div>
                ))
            )}
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

export default AllTestDetail;