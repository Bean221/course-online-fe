// src/components/ReadingTest.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionPalette from "../../components/Reading/QuestionPalette";
import ReadingPassage1 from "../../components/Reading/ReadingPassage1";
import ReadingPassage2 from "../../components/Reading/ReadingPassage2";
import ReadingPassage3 from "../../components/Reading/ReadingPassage3";
import Footer from "../../components/Layout/Footer";

const ReadingTest = () => {
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [completedQuestions, setCompletedQuestions] = useState(Array(40).fill(false));
  const [currentPassage, setCurrentPassage] = useState(1);
  const [showRules, setShowRules] = useState(true);
  const [testStarted, setTestStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes in seconds
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState("");
  const timerRef = useRef(null);

  // Start timer when test begins
  useEffect(() => {
    if (testStarted && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime <= 1) {
            submitTest();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testStarted]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionNumber, value) => {
    const newAnswers = [...answers];
    newAnswers[questionNumber - 1] = value;
    setAnswers(newAnswers);

    // Mark question as completed
    const newCompletedQuestions = [...completedQuestions];
    newCompletedQuestions[questionNumber - 1] = value.trim() !== "";
    setCompletedQuestions(newCompletedQuestions);
  };

  const jumpToPassage = (passageNumber) => {
    setCurrentPassage(passageNumber);
  };

  const navigateToQuestion = (passageId, questionNum) => {
    // Change passage if needed
    if (currentPassage !== passageId) {
      setCurrentPassage(passageId);
    }
    
    // Scroll to the question
    const questionElement = document.getElementById(`question-${questionNum}`);
    if (questionElement) {
      questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const startTest = () => {
    setShowRules(false);
    setTestStarted(true);
  };

  const submitTest = () => {
    // Clear timer
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Calculate score (for demo)
    const answeredCount = completedQuestions.filter(q => q).length;
    
    // Show confirmation
    const confirmSubmit = window.confirm(
      `Are you sure you want to submit your test? You've answered ${answeredCount} out of 40 questions.`
    );
    
    if (confirmSubmit) {
      // Here you would typically send the answers to your backend
      alert("Test submitted successfully!");
      
      // Redirect to results page or reload the page
      window.location.href = "/mock-test/reading/results";
    }
  };

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Rules confirmation modal */}
      {showRules && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="bg-blue-50 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">IELTS Reading Test Instructions</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Test Duration:</span> You have exactly 60 minutes to complete all questions.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Format:</span> The test consists of 3 passages with 13-14 questions each.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Question Types:</span> You will encounter various question types including True/False/Not Given, multiple choice, matching, and short answer questions.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Submission:</span> Your test will be automatically submitted when the time expires.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Notes:</span> You can take notes during the test to help with your answers.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={startTest}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg transition duration-200 shadow-lg"
              >
                Begin Test
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-blue-600 text-white py-3 px-6 shadow-md flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center">
          <Link to="/mock-test/reading" className="text-2xl font-bold mr-6 hover:text-blue-100 transition">BeanLearn</Link>
          <h1 className="text-xl font-semibold">IELTS Reading Test</h1>
        </div>
        
        {testStarted && (
          <div className="flex items-center space-x-4">
            <div className="bg-white text-blue-600 font-bold py-1 px-4 rounded-full flex items-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatTime(timeRemaining)}</span>
            </div>
          </div>
        )}
      </header>

      {testStarted && (
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main test content */}
            <div className="lg:w-3/4 space-y-6">
              {/* Reading passages and questions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  {currentPassage === 1 && (
                    <ReadingPassage1
                      answers={answers}
                      onAnswerChange={handleAnswerChange}
                    />
                  )}

                  {currentPassage === 2 && (
                    <ReadingPassage2
                      answers={answers}
                      onAnswerChange={handleAnswerChange}
                    />
                  )}

                  {currentPassage === 3 && (
                    <ReadingPassage3
                      answers={answers}
                      onAnswerChange={handleAnswerChange}
                    />
                  )}
                </div>
              </div>
              
              {/* Notes section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div 
                  className="flex justify-between items-center cursor-pointer mb-2" 
                  onClick={toggleNotes}
                >
                  <h3 className="font-bold text-gray-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Notes
                  </h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${showNotes ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {showNotes && (
                  <textarea
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    placeholder="Take your reading notes here..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                )}
              </div>
            </div>

            {/* Question palette sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-20">
                <QuestionPalette
                  completedQuestions={completedQuestions}
                  currentPassage={currentPassage}
                  onPassageChange={jumpToPassage}
                  onQuestionClick={navigateToQuestion}
                  onSubmit={submitTest}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ReadingTest;