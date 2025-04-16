import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTestResult } from "../../services/apiMocktest";
import Header from '../../components/layout/Header';
import Footer from '../../components/Layout/Footer';

const TestResultPage = () => {
  const { resultId } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      const data = await getTestResult(resultId);
      setResult(data);
    };
    fetchResult();
  }, [resultId]);

  if (!result) return <div className="text-center text-gray-600">Loading...</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">
            Kết quả bài thi
          </h1>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">Điểm số: {result.overall_score}</p>
            <div className="mt-6">
              {result.answer_detail && (
                <div>
                  <h3 className="text-xl font-semibold">Chi tiết</h3>
                  {Object.entries(JSON.parse(result.answer_detail)).map(([key, value], index) => (
                    <div key={index} className="mb-4">
                      <p className="text-lg text-gray-700">{key}</p>
                      <p className="text-sm text-gray-500">Đáp án của bạn: {value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestResultPage;