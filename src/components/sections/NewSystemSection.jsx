// src/components/sections/NewSystemSection.jsx
import HighlightedText from '../../components/sections/HighlightedText';

const NewSystemSection = ({ answers, onAnswerChange }) => {
  const handleOptionSelect = (questionNum, value) => {
    // For multiple selection questions
    let newValue = value;
    
    // If this is a multiple answer question (27-30)
    if (questionNum >= 27 && questionNum <= 30) {
      const currentAnswers = answers[questionNum - 1] ? answers[questionNum - 1].split(',') : [];
      
      if (currentAnswers.includes(value)) {
        // Remove the value if already selected
        newValue = currentAnswers.filter(v => v !== value).join(',');
      } else if (currentAnswers.length < 2) {
        // Add the value if less than 2 options are selected
        newValue = [...currentAnswers, value].join(',');
      } else {
        // Replace the first value if 2 options are already selected
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
            const isSelected = answers[26]?.includes(option.value) || answers[27]?.includes(option.value);
            
            return (
              <label 
                key={option.value} 
                className={`flex items-center p-2 border rounded cursor-pointer ${isSelected ? 'bg-blue-50 border-blue-300' : 'border-gray-300'}`}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => {
                    // Try to add to question 27 first, if full then add to 28
                    const q27Answers = answers[26]?.split(',') || [];
                    if (q27Answers.length < 2) {
                      handleOptionSelect(27, option.value);
                    } else {
                      handleOptionSelect(28, option.value);
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
            const isSelected = answers[28]?.includes(option.value) || answers[29]?.includes(option.value);
            
            return (
              <label 
                key={option.value} 
                className={`flex items-center p-2 border rounded cursor-pointer ${isSelected ? 'bg-blue-50 border-blue-300' : 'border-gray-300'}`}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => {
                    // Try to add to question 29 first, if full then add to 30
                    const q29Answers = answers[28]?.split(',') || [];
                    if (q29Answers.length < 2) {
                      handleOptionSelect(29, option.value);
                    } else {
                      handleOptionSelect(30, option.value);
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