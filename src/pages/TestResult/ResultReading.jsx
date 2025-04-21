// TestResults.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header'; // Corrected path assuming standard structure
import Footer from '../../components/Layout/Footer'; // Corrected path assuming standard structure

// Helper function to generate mock answers (Updated to include some correct answers)
const generateMockAnswers = (type) => {
    const baseAnswers = [];
    const questionCount = type === 'reading' ? 40 :
                          type === 'listening' ? 40 :
                          type === 'writing' ? 2 :
                          type === 'speaking' ? 3 : 40; // Default to 40

    // Sample correct answers (replace with actual logic or data)
    const correctAnswersList = ['A', 'TRUE', 'Valley', '1998', 'C', 'YES', 'Library', 'B', 'A', 'FALSE'];

    for (let i = 1; i <= questionCount; i++) {
        const isCorrectMock = Math.random() > 0.6; // Randomly mark ~40% as correct for demo
        const userAnswer = isCorrectMock ? correctAnswersList[i % correctAnswersList.length] : (i % 5 === 0 ? 'N/A' : `Answer ${String.fromCharCode(65 + (i % 4))}`); // Mock user answer
        const correctAnswerActual = correctAnswersList[i % correctAnswersList.length]; // Mock correct answer

        baseAnswers.push({
            id: i,
            question: `Câu ${i}`, // Using Vietnamese label
            userAnswer: userAnswer,
            correctAnswer: correctAnswerActual, // Added correct answer field
            isCorrect: isCorrectMock
        });
    }
    return baseAnswers;
};


// --- Icons (using Heroicons v1 syntax as in the original) ---
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const ClipboardListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /> {/* Adjusted icon for better semantics */}
    </svg>
);


// --- Main Component ---
export default function TestResults({ testType }) {
    const { year, month } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [testData, setTestData] = useState(null);
    const [studentName, setStudentName] = useState('');
    const [score, setScore] = useState(0); // Keep as number for potential calculations
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Store count
    const [totalQuestions, setTotalQuestions] = useState(0); // Store total
    const [timeSpent, setTimeSpent] = useState('00:00');

    // Sample band scores array - Keep as is
    const bandScores = [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3];

    useEffect(() => {
        const fetchTestResults = async () => {
            try {
                setLoading(true);

                // Replace with your actual API endpoint
                // const response = await fetch(`/api/test/${testType}/${year}/${month}/results`);
                // const data = await response.json();

                // For now, using mock data
                const mockAnswers = generateMockAnswers(testType);
                const correctCount = mockAnswers.filter(a => a.isCorrect).length;
                const totalCount = mockAnswers.length;
                const mockScore = testType === 'reading' || testType === 'listening'
                                    ? Math.round((correctCount / totalCount) * 9 * 2) / 2 // Example IELTS band calc
                                    : 7.5; // Mock score for writing/speaking

                const mockData = {
                    studentName: 'Bean',
                    testName: `${testType.charAt(0).toUpperCase() + testType.slice(1)} Full test ${month}/${year}`,
                    score: mockScore.toFixed(1), // Format score to one decimal place
                    correctAnswers: `${correctCount}/${totalCount}`, // Keep the string format for display if needed
                    timeSpent: '55:30', // Example time
                    answers: mockAnswers
                };

                setTestData(mockData);
                setStudentName(mockData.studentName);
                setScore(mockData.score); // Store formatted score string
                const [correct, total] = mockData.correctAnswers.split('/');
                setCorrectAnswersCount(parseInt(correct, 10));
                setTotalQuestions(parseInt(total, 10));
                setTimeSpent(mockData.timeSpent);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching test results:', error);
                // Optionally show an error message to the user
                setLoading(false);
            }
        };

        fetchTestResults();
    }, [testType, year, month]); // Dependencies for useEffect

    const handleBackToTest = () => {
        navigate(`/test/${testType}/${year}/${month}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex justify-center items-center bg-gray-100">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600"></div>
                    <p className="ml-4 text-lg text-gray-600">Đang tải kết quả...</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (!testData) {
        // Handle case where data fetching failed or returned null
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex justify-center items-center bg-gray-100 p-4">
                    <p className="text-xl text-red-600">Không thể tải dữ liệu bài thi.</p>
                     <button
                        onClick={handleBackToTest}
                        className="ml-4 bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-teal-700 hover:shadow-md transition duration-300 ease-in-out"
                    >
                        Quay lại
                    </button>
                </div>
                <Footer />
            </div>
        );
    }


    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />

            <main className="flex-grow container mx-auto px-4 pt-20 pb-8">
                <div className="bg-white shadow-xl rounded-lg p-6 md:p-10">

                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-800 mb-8 md:mb-12">
                        Kết quả: {testData.testName}
                    </h1>

                    {/* Score Overview Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">{studentName}</h2>
                        <h3 className="text-lg md:text-xl font-medium text-gray-600 mb-8">Điểm số của bạn là</h3>

                        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
                            {/* Correct Answers Circle */}
                            <div className="flex flex-col items-center">
                                <div className="relative rounded-full border-4 border-green-200 w-28 h-28 flex items-center justify-center text-center shadow">
                                   <div className="absolute -top-3 -left-3 bg-green-500 rounded-full p-1 shadow">
                                        <CheckIcon /> {/* Using CheckIcon component */}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-600">{correctAnswersCount}</div>
                                        <div className="text-sm text-gray-500">/{totalQuestions}</div>
                                        <div className="text-xs font-medium text-gray-600 mt-1">Câu đúng</div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Score Circle */}
                            <div className="order-first md:order-none">
                                <div className="rounded-full bg-teal-500 text-white w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mx-auto shadow-lg">
                                    <div className="text-5xl md:text-6xl font-bold">{score}</div>
                                </div>
                            </div>

                            {/* Time Spent Circle */}
                             <div className="flex flex-col items-center">
                                <div className="relative rounded-full border-4 border-orange-200 w-28 h-28 flex items-center justify-center text-center shadow">
                                     <div className="absolute -top-3 -right-3 bg-orange-400 rounded-full p-1 shadow">
                                        <ClockIcon /> {/* Using ClockIcon component */}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-orange-600">{timeSpent}</div>
                                        <div className="text-xs font-medium text-gray-600 mt-1">Thời gian</div>
                                        {/* <div className="text-xs text-gray-400">(dự kiến: 60:00)</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Band Score Scale Section (Optional - Display if relevant) */}
                    {(testType === 'reading' || testType === 'listening') && (
                        <div className="mb-10 md:mb-12 border-t border-b border-gray-200 py-6">
                            <div className="flex items-center justify-center mb-4">
                                <ShieldCheckIcon /> {/* Using ShieldCheckIcon component */}
                                <h3 className="text-lg md:text-xl font-semibold text-teal-700">Thang điểm Band Score (Tham khảo)</h3>
                            </div>
                            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4">
                                {bandScores.map(band => (
                                    <div key={band} className={`text-base font-medium px-2 py-1 rounded ${
                                        parseFloat(score) === band ? 'bg-teal-500 text-white scale-110' : // Highlight matching score
                                        parseFloat(score) > band - 0.25 && parseFloat(score) < band + 0.25 ? 'bg-teal-200 text-teal-800' : // Highlight closest score range
                                        'text-gray-600'
                                    }`}>
                                        {band % 1 === 0 ? band.toFixed(0) : band.toFixed(1)} {/* Format band score */}
                                    </div>
                                ))}
                            </div>
                             <p className="text-center text-xs text-gray-500 mt-3">(Cách quy đổi điểm có thể thay đổi)</p>
                        </div>
                    )}


                    {/* Answer Keys Section */}
                    <div className="mb-10 md:mb-12">
                        <div className="flex items-center mb-6">
                           <ClipboardListIcon /> {/* Using ClipboardListIcon component */}
                            <h3 className="text-lg md:text-xl font-semibold text-teal-700">Đáp án chi tiết</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                            {testData.answers.map((item, index) => (
                                <div key={item.id || index} className="flex items-center p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
                                    <div className={`flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-sm ${item.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {item.id}
                                    </div>
                                    <div className="flex-grow text-sm">
                                        <span className="font-medium text-gray-700">Bạn chọn: </span>
                                        <span className={`${item.isCorrect ? 'text-green-600' : 'text-red-600 line-through'}`}>{item.userAnswer || 'N/A'}</span>
                                        {!item.isCorrect && (
                                             <span className="ml-2 text-blue-600 font-semibold">(Đúng: {item.correctAnswer})</span>
                                        )}
                                    </div>
                                    <div className="ml-2 flex-shrink-0">
                                        {item.isCorrect ? (
                                            <span className="text-green-500"><CheckIcon /></span>
                                        ) : (
                                            <span className="text-red-500"><CrossIcon /></span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Back to test button */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={handleBackToTest}
                            className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-teal-700 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                        >
                            Quay lại trang đề thi
                        </button>
                    </div>

                </div> {/* End of card */}
            </main>

            <Footer />
        </div>
    );
}