// src/components/ListeningTest.jsx
import { useState, useRef } from "react";
import QuestionPalette from "../../components/sections/QuestionPalette";
import AudioPlayer from "../../components/sections/AudioPlayer";
import JobHuntingSection from "../../components/sections/JobHuntingSection";
import RefereeSection from "../../components/sections/RefereeSection";
import MultipleChoiceSection from "../../components/sections/MultipleChoiceSection";
import MapLabelingSection from "../../components/sections/MapLabelingSection";
import WillowsSection from "../../components/sections/WillowsSection";
import NewSystemSection from "../../components/sections/NewSystemSection";
import SurveyResearchSection from "../../components/sections/SurveyResearchSection";
import Audio from "../../audio/Listening_Test1.mp3";

const ListeningTest = () => {
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [completedQuestions, setCompletedQuestions] = useState(
    Array(40).fill(false)
  );
  const [currentSection, setCurrentSection] = useState(1);
  const [audioTime, setAudioTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const handleAnswerChange = (questionNumber, value) => {
    const newAnswers = [...answers];
    newAnswers[questionNumber - 1] = value;
    setAnswers(newAnswers);

    // Mark question as completed
    const newCompletedQuestions = [...completedQuestions];
    newCompletedQuestions[questionNumber - 1] = value.trim() !== "";
    setCompletedQuestions(newCompletedQuestions);
  };

  const jumpToSection = (sectionNumber) => {
    setCurrentSection(sectionNumber);

    // Set audio time based on section
    const sectionTimestamps = {
      1: 0, // Section 1 starts at 0:00
      2: 480, // Section 2 starts at 8:00
      3: 960, // Section 3 starts at 16:00
      4: 1440, // Section 4 starts at 24:00
    };

    if (audioRef.current) {
      audioRef.current.currentTime = sectionTimestamps[sectionNumber];
      setAudioTime(sectionTimestamps[sectionNumber]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold">IELTS Listening Test</h1>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main test content */}
          <div className="lg:w-3/4 bg-white rounded-lg shadow-md p-6">
            <AudioPlayer
              ref={audioRef}
              src={Audio} // Truyền file MP3 đã import
              volume={volume}
              onVolumeChange={(newVolume) => setVolume(newVolume)}
              onTimeUpdate={(time) => setAudioTime(time)}
              currentTime={audioTime}
            />

            <div className="mt-6 border-t pt-4">
              {currentSection === 1 && (
                <>
                  <h2 className="text-xl font-bold mb-4">SECTION 1</h2>
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
                  <h2 className="text-xl font-bold mb-4">SECTION 2</h2>
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
                  <h2 className="text-xl font-bold mb-4">SECTION 3</h2>
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
                  <h2 className="text-xl font-bold mb-4">SECTION 4</h2>
                  <SurveyResearchSection
                    answers={answers}
                    onAnswerChange={handleAnswerChange}
                  />
                </>
              )}
            </div>
          </div>

          {/* Question palette sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h2 className="font-bold text-lg mb-3">Question Palette</h2>
              <QuestionPalette
                completedQuestions={completedQuestions}
                currentSection={currentSection}
                onSectionChange={jumpToSection}
              />

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Answered</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
                  <span className="text-sm">Unanswered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningTest;
