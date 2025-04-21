// TestResults.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function TestResults({ testType }) {
  const { year, month } = useParams();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [testData, setTestData] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState('0/0');
  const [timeSpent, setTimeSpent] = useState('00:00');
  
  // Sample band scores array
  const bandScores = [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3];
  
  useEffect(() => {
    // Function to fetch test results from your API
    const fetchTestResults = async () => {
      try {
        setLoading(true);
        
        // Replace with your actual API endpoint
        // const response = await fetch(`/api/test/${testType}/${year}/${month}/results`);
        // const data = await response.json();
        
        // For now, using mock data
        const mockData = {
          studentName: 'Bean',
          testName: `${testType.charAt(0).toUpperCase() + testType.slice(1)} Full test ${month}/${year}`,
          score: 0,
          correctAnswers: '0/40',
          timeSpent: '00:00',
          answers: generateMockAnswers(testType)
        };
        
        setTestData(mockData);
        setStudentName(mockData.studentName);
        setScore(mockData.score);
        setCorrectAnswers(mockData.correctAnswers);
        setTimeSpent(mockData.timeSpent);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching test results:', error);
        setLoading(false);
      }
    };
    
    fetchTestResults();
  }, [testType, year, month]);
  
  // Helper function to generate mock answers based on test type
  const generateMockAnswers = (type) => {
    const baseAnswers = [];
    
    // Generate different number of questions based on test type
    const questionCount = type === 'reading' ? 40 : 
                          type === 'listening' ? 40 : 
                          type === 'writing' ? 2 : 
                          type === 'speaking' ? 3 : 40;
    
    for (let i = 1; i <= questionCount; i++) {
      baseAnswers.push({
        id: i,
        question: i <= 10 ? `Question ${i}:` : `${String.fromCharCode(64 + (i % 5) + 1)}:`,
        answer: i % 5 === 0 ? 'N/A' : '',
        isCorrect: false
      });
    }
    
    return baseAnswers;
  };
  
  // Handle returning to test page
  const handleBackToTest = () => {
    navigate(`/test/${testType}/${year}/${month}`);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">
        {studentName} - Đề {testType.charAt(0).toUpperCase() + testType.slice(1)} Full test {month}/{year}
      </h1>
      
      <div className="mt-16 mb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">{studentName}</h2>
          <h3 className="text-2xl font-bold text-teal-800 mb-8">Your score is</h3>
          
          <div className="flex justify-between items-center mb-12">
            <div className="w-1/3 text-center">
              <div className="rounded-full border-4 border-red-200 w-24 h-24 flex items-center justify-center mx-auto">
                <div className="text-center">
                  <div className="text-red-500 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium">Correct Answers</div>
                  <div className="text-sm text-blue-400">{correctAnswers}</div>
                </div>
              </div>
            </div>
            
            <div className="w-1/3">
              <div className="rounded-full border-4 border-blue-200 w-40 h-40 flex items-center justify-center mx-auto">
                <div className="text-5xl font-bold text-blue-300">{score}</div>
              </div>
            </div>
            
            <div className="w-1/3 text-center">
              <div className="rounded-full border-4 border-red-200 w-24 h-24 flex items-center justify-center mx-auto">
                <div className="text-center">
                  <div className="text-red-500 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium">Time Spent</div>
                  <div className="text-sm text-blue-400">{timeSpent}</div>
                  <div className="text-xs text-gray-400">(00:00)</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Band Score section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-medium text-teal-700">Band Score</h3>
            </div>
            
            <div className="flex justify-between">
              {bandScores.map(band => (
                <div key={band} className="text-lg font-medium">{band}</div>
              ))}
            </div>
          </div>
          
          {/* Answer Keys section */}
          <div>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-xl font-medium text-teal-700">Answer Keys</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {testData.answers.map(item => (
                <div key={item.id} className="flex items-center mb-2">
                  <div className="bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center text-white mr-2">
                    {item.id}
                  </div>
                  <div className="mr-1 font-medium">{item.question}</div>
                  <div className="mr-1">{item.answer}</div>
                  <div className="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Back to test button */}
          <div className="mt-8">
            <button 
              onClick={handleBackToTest}
              className="bg-teal-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Back to Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}