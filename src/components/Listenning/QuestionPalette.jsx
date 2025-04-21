import { useMemo } from 'react';

const QuestionPalette = ({ completedQuestions, currentSection, onSectionChange, onQuestionClick, onSubmit }) => {
  const sections = useMemo(() => [
    { id: 1, title: "Part 1", questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 2, title: "Part 2", questions: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { id: 3, title: "Part 3", questions: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
    { id: 4, title: "Part 4", questions: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] }
  ], []);

  // Tính tổng số câu hỏi
  const totalQuestions = sections.reduce((total, section) => total + section.questions.length, 0);

  // Tính số câu hỏi đã hoàn thành
  const completedCount = completedQuestions.filter(Boolean).length;

  // Tính phần trăm hoàn thành
  const completionPercentage = Math.round((completedCount / totalQuestions) * 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="font-semibold text-xl mb-2 text-center text-gray-800">Question Palette</h3>
      
      {/* Hiển thị phần trăm tiến độ */}
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600">Progress: {completionPercentage}%</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.id} className="mb-6">
          <div
            className={`font-semibold mb-3 cursor-pointer p-3 rounded-md transition ${currentSection === section.id ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-gray-700 hover:bg-gray-50 border border-transparent'}`}
            onClick={() => onSectionChange(section.id)}
          >
            {section.title}
          </div>
          <div className="grid grid-cols-5 gap-3">
            {section.questions.map((questionNum) => (
              <button
                key={questionNum}
                className={`w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center transition duration-150 ease-in-out
                  ${completedQuestions[questionNum - 1]
                    ? 'bg-green-500 hover:bg-green-600 text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                  }`}
                onClick={() => onQuestionClick(section.id, questionNum)}
                aria-label={`Go to question ${questionNum}`}
              >
                {questionNum}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8">
        <button
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200 ease-in-out shadow-md cursor-pointer"
          aria-label="Submit test"
          onClick={onSubmit}
        >
          Submit Test
        </button>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <h4 className="font-semibold mb-2">Color Legend</h4>
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
          <span>Completed Question</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-gray-100 border border-gray-200 mr-2"></div>
          <span>Unattempted Question</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionPalette;