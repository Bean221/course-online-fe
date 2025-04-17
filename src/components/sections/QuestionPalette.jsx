// src/components/QuestionPalette.jsx
import { useMemo } from 'react';

const QuestionPalette = ({ completedQuestions, currentSection, onSectionChange }) => {
  const sections = useMemo(() => [
    { id: 1, title: "Section 1", questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 2, title: "Section 2", questions: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { id: 3, title: "Section 3", questions: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
    { id: 4, title: "Section 4", questions: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] }
  ], []);

  return (
    <div>
      {sections.map((section) => (
        <div key={section.id} className="mb-4">
          <div 
            className={`font-medium mb-2 cursor-pointer ${currentSection === section.id ? 'text-blue-600' : 'text-gray-700'}`}
            onClick={() => onSectionChange(section.id)}
          >
            {section.title}
          </div>
          <div className="grid grid-cols-5 gap-2">
            {section.questions.map((questionNum) => (
              <button
                key={questionNum}
                className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center
                  ${completedQuestions[questionNum - 1] 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-700'}`}
                onClick={() => onSectionChange(section.id)}
              >
                {questionNum}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionPalette;