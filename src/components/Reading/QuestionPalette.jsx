// src/components/Reading/QuestionPalette.jsx
import React from 'react';

const QuestionPalette = ({ 
  completedQuestions, 
  currentPassage, 
  onPassageChange, 
  onQuestionClick,
  onSubmit 
}) => {
  // Define question ranges for each passage
  const passageQuestions = {
    1: { start: 1, end: 13 },
    2: { start: 14, end: 26 },
    3: { start: 27, end: 40 }
  };

  const renderQuestionButtons = (start, end) => {
    const buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          id={`palette-question-${i}`}
          className={`w-8 h-8 rounded-full text-sm font-medium flex items-center justify-center transition-colors duration-200 ${
            completedQuestions[i - 1]
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onQuestionClick(getPassageForQuestion(i), i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const getPassageForQuestion = (questionNumber) => {
    if (questionNumber >= passageQuestions[1].start && questionNumber <= passageQuestions[1].end) return 1;
    if (questionNumber >= passageQuestions[2].start && questionNumber <= passageQuestions[2].end) return 2;
    if (questionNumber >= passageQuestions[3].start && questionNumber <= passageQuestions[3].end) return 3;
    return 1;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-blue-600 text-white">
        <h2 className="font-semibold text-lg">Question Palette</h2>
      </div>
      
      {/* Passage Navigation */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex space-x-2 mb-3">
          {[1, 2, 3].map((passage) => (
            <button
              key={`passage-${passage}`}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentPassage === passage
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => onPassageChange(passage)}
            >
              Passage {passage}
            </button>
          ))}
        </div>
        
        <div className="h-px bg-gray-200 w-full my-3"></div>
        
        <div className="mb-2">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Questions {passageQuestions[currentPassage].start}-{passageQuestions[currentPassage].end}
          </h3>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {renderQuestionButtons(
              passageQuestions[currentPassage].start,
              passageQuestions[currentPassage].end
            )}
          </div>
        </div>
      </div>
      
      {/* Test Progress */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Test Progress</h3>
        <div className="mb-2">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>0%</span>
            <span>100%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500" 
              style={{ width: `${(completedQuestions.filter(Boolean).length / completedQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600">
          {completedQuestions.filter(Boolean).length} of {completedQuestions.length} completed
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="p-4">
        <button
          onClick={onSubmit}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 shadow"
        >
          Submit Test
        </button>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          You can submit your test at any time, but make sure to answer all questions for the best score.
        </div>
      </div>
    </div>
  );
};

export default QuestionPalette;