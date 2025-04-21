// src/components/ListeningTest.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionPalette from "../../components/Listenning/QuestionPalette";
import AudioPlayer from "../../components/Listenning/AudioPlayer";
import JobHuntingSection from "../../components/Listenning/JobHuntingSection";
import RefereeSection from "../../components/Listenning/RefereeSection";
import MultipleChoiceSection from "../../components/Listenning/MultipleChoiceSection";
import MapLabelingSection from "../../components/Listenning/MapLabelingSection";
import WillowsSection from "../../components/Listenning/WillowsSection";
import NewSystemSection from "../../components/Listenning/NewSystemSection";
import SurveyResearchSection from "../../components/Listenning/SurveyResearchSection";
import Audio from "../../audio/Listening_Test1.mp3";
import Footer from "../../components/Layout/Footer";

const ListeningTest = () => {
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [completedQuestions, setCompletedQuestions] = useState(Array(40).fill(false));
  const [currentSection, setCurrentSection] = useState(1);
  const [audioTime, setAudioTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [showRules, setShowRules] = useState(true);
  const [testStarted, setTestStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(40 * 60); // 40 minutes in seconds
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState("");
  const audioRef = useRef(null);
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

  // Handle audio autoplay
  useEffect(() => {
    if (testStarted && audioRef.current) {
      // Slight delay to ensure audio is ready
      const playTimer = setTimeout(() => {
        audioRef.current.play().catch(error => {
          console.error("Autoplay prevented:", error);
        });
      }, 500);
      
      return () => clearTimeout(playTimer);
    }
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
    if (questionNumber >= 27 && questionNumber <= 28) {
      // Kiểm tra cả câu 27 và 28
      const answer27 = newAnswers[26]?.trim() !== "";
      const answer28 = newAnswers[27]?.trim() !== "";
      newCompletedQuestions[26] = answer27;
      newCompletedQuestions[27] = answer28;
    } else if (questionNumber >= 29 && questionNumber <= 30) {
      // Kiểm tra cả câu 29 và 30
      const answer29 = newAnswers[28]?.trim() !== "";
      const answer30 = newAnswers[29]?.trim() !== "";
      newCompletedQuestions[28] = answer29;
      newCompletedQuestions[29] = answer30;
    } else {
      // Đối với các câu hỏi khác, đánh dấu hoàn thành nếu giá trị không rỗng
      newCompletedQuestions[questionNumber - 1] = value.trim() !== "";
    }
    setCompletedQuestions(newCompletedQuestions);
  };

  const jumpToSection = (sectionNumber) => {
    setCurrentSection(sectionNumber);

    // Set audio time based on section
  };

  const navigateToQuestion = (sectionId, questionNum) => {
    // Change section if needed
    if (currentSection !== sectionId) {
      setCurrentSection(sectionId);
      
      // Set audio time based on section
      // const sectionTimestamps = {
      //   1: 0, // Section 1 starts at 0:00
      //   2: 480, // Section 2 starts at 8:00
      //   3: 960, // Section 3 starts at 16:00
      //   4: 1440, // Section 4 starts at 24:00
      // };
  
      // if (audioRef.current) {
      //   audioRef.current.currentTime = sectionTimestamps[sectionId];
      //   setAudioTime(sectionTimestamps[sectionId]);
      // }
    }
    
    // Scroll to the question (would need to add IDs to questions in your question components)
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
      window.location.href = "/mock-test/listening/results";
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">IELTS Listening Test Instructions</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Test Duration:</span> You have exactly 40 minutes to complete all questions.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Format:</span> The test consists of 4 sections with 10 questions each.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Audio:</span> The recording will play automatically and cannot be paused or replayed.
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
                  <span className="font-semibold">Notes:</span> You can take notes during the test to help you remember details.
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
          <Link to="/mock-test/listening" className="text-2xl font-bold mr-6 hover:text-blue-100 transition">BeanLearn</Link>
          <h1 className="text-xl font-semibold">IELTS Listening Test</h1>
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
              {/* Audio player section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Listening Audio</h2>
                <AudioPlayer
                  ref={audioRef}
                  src={Audio}
                  volume={volume}
                  onVolumeChange={(newVolume) => setVolume(newVolume)}
                  onTimeUpdate={(time) => setAudioTime(time)}
                  currentTime={audioTime}
                  disableControls={true} // Prevent seeking/pausing
                  autoplay={true} // Start playing automatically
                />
                
                {/* Notes section below audio */}
                <div className="mt-6 pt-4 border-t border-gray-100">
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
                      placeholder="Take your listening notes here..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                  )}
                </div>
              </div>
              
              {/* Questions section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  {currentSection === 1 && (
                    <>
                      <h2 className="text-xl font-bold mb-4 text-blue-700">SECTION 1</h2>
                      <JobHuntingSection
                        answers={answers}
                        onAnswerChange={handleAnswerChange}
                      />
                      <RefereeSection
                        answers={answers}
                        onAnswerChange={handleAnswerChange}
                      />
                    </>
                  )}

                  {currentSection === 2 && (
                    <>
                      <h2 className="text-xl font-bold mb-4 text-blue-700">SECTION 2</h2>
                      <MultipleChoiceSection
                        startQuestion={11}
                        endQuestion={15}
                        answers={answers}
                        onAnswerChange={handleAnswerChange}
                      />
                      <MapLabelingSection
                        answers={answers}
                        onAnswerChange={handleAnswerChange}
                      />
                    </>
                  )}

                  {currentSection === 3 && (
                    <>
                      <h2 className="text-xl font-bold mb-4 text-blue-700">SECTION 3</h2>
                      <WillowsSection
                        answers={answers}
                        onAnswerChange={handleAnswerChange}
                      />
                      <NewSystemSection
                        answers={answers}
                        onAnswerChange={handleAnswerChange}
                      />
                    </>
                  )}
                  {currentSection === 4 && (
                    <>
                      <h2 className="text-xl font-bold mb-4 text-blue-700">SECTION 4</h2>
                      <SurveyResearchSection
                        answers={answers}
                        onAnswerChange={handleAnswerChange}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Question palette sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-20">
                <QuestionPalette
                  completedQuestions={completedQuestions}
                  currentSection={currentSection}
                  onSectionChange={jumpToSection}
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

export default ListeningTest;