// src/components/sections/NewSystemSection.jsx
import HighlightedText from './HighlightedText';

const NewSystemSection = ({ answers, onAnswerChange }) => {
  const handleOptionSelect = (questionNum, value) => {
    let newValue = value;

    if (questionNum >= 27 && questionNum <= 30) {
      const currentAnswers = answers[questionNum - 1] ? answers[questionNum - 1].split(',') : [];

      if (currentAnswers.includes(value)) {
        newValue = currentAnswers.filter(v => v !== value).join(',');
      } else if (currentAnswers.length < 2) {
        newValue = [...currentAnswers, value].join(',');
      } else {
        // For simplicity, if 2 are selected, we'll replace the first one.
        // A more user-friendly approach might be to prevent selecting a third option
        // or provide visual feedback.
        newValue = [currentAnswers[1], value].join(',');
      }
    }

    onAnswerChange(questionNum, newValue);
  };

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h3 className="font-bold text-lg">Questions 27-28</h3>
        <p className="mb-4"><HighlightedText>Choose TWO letters, A-E.</HighlightedText></p>
        <p className="mb-2">In which TWO ways will the new system affect the company?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {[
            { value: "A", text: "gain more profit" },
            { value: "B", text: "employ more new staff" },
            { value: "C", text: "increase sales" },
            { value: "D", text: "reduce production time" },
            { value: "E", text: "cut labour costs" }
          ].map((option) => {
            const isSelectedInQ27 = answers[26]?.includes(option.value);
            const isSelectedInQ28 = answers[27]?.includes(option.value);

            return (
              <label
                key={option.value}
                className={`flex items-center p-2 border rounded cursor-pointer ${(isSelectedInQ27 || isSelectedInQ28) ? 'bg-blue-50 border-blue-300' : 'border-gray-300'}`}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={isSelectedInQ27 || isSelectedInQ28}
                  onChange={() => {
                    const isCurrentlySelectedInQ27 = answers[26]?.includes(option.value);
                    const isCurrentlySelectedInQ28 = answers[27]?.includes(option.value);
                  
                    if (isCurrentlySelectedInQ27) {
                      handleOptionSelect(27, option.value);
                    } else if (isCurrentlySelectedInQ28) {
                      handleOptionSelect(28, option.value);
                    } else {
                      // If not selected, try to add to Q27 first, then Q28
                      const q27Answers = answers[26]?.split(',') || [];
                      if (q27Answers.length < 2) {
                        handleOptionSelect(27, option.value);
                      } else {
                        handleOptionSelect(28, option.value);
                      }
                    }
                  }}
                  className="mr-3"
                />
                <div>
                  <span className="font-medium mr-2">{option.value}.</span>
                  {option.text}
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-lg">Questions 29-30</h3>
        <p className="mb-4"><HighlightedText>Choose TWO letters, A-E.</HighlightedText></p>
        <p className="mb-2">Which TWO effects will the new system have on new clients?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { value: "A", text: "getting more involved in the design" },
            { value: "B", text: "obtaining more contacts" },
            { value: "C", text: "linking at home to do online work" },
            { value: "D", text: "wasting less time" },
            { value: "E", text: "decreasing labour costs" }
          ].map((option) => {
            const isSelectedInQ29 = answers[28]?.includes(option.value);
            const isSelectedInQ30 = answers[29]?.includes(option.value);

            return (
              <label
                key={option.value}
                className={`flex items-center p-2 border rounded cursor-pointer ${(isSelectedInQ29 || isSelectedInQ30) ? 'bg-blue-50 border-blue-300' : 'border-gray-300'}`}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={isSelectedInQ29 || isSelectedInQ30}
                  onChange={() => {
                    const isCurrentlySelectedInQ29 = answers[28]?.includes(option.value);
                    const isCurrentlySelectedInQ30 = answers[29]?.includes(option.value);
                  
                    if (isCurrentlySelectedInQ29) {
                      handleOptionSelect(29, option.value);
                    } else if (isCurrentlySelectedInQ30) {
                      handleOptionSelect(30, option.value);
                    } else {
                      // If not selected, try to add to Q29 first, then Q30
                      const q29Answers = answers[28]?.split(',') || [];
                      if (q29Answers.length < 2) {
                        handleOptionSelect(29, option.value);
                      } else {
                        handleOptionSelect(30, option.value);
                      }
                    }
                  }}
                  className="mr-3"
                />
                <div>
                  <span className="font-medium mr-2">{option.value}.</span>
                  {option.text}
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewSystemSection;