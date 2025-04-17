// src/components/sections/MultipleChoiceSection.jsx
import HighlightedText from './HighlightedText';

const MultipleChoiceSection = ({ startQuestion, endQuestion, answers, onAnswerChange }) => {
  const handleOptionSelect = (questionNum, value) => {
    onAnswerChange(questionNum, value);
  }; // câu 11 đến 15
  
  // Section 2 Questions 11-15
  const questions = [
    {
      id: 11,
      text: "The reason why David is replacing Jane is that",
      options: [
        { value: "A", text: "she is unwell." },
        { value: "B", text: "she is very busy." },
        { value: "C", text: "she is inexperienced." }
      ]
    },
    {
      id: 12,
      text: "According to the speaker, what is the problem for the museum currently?",
      options: [
        { value: "A", text: "lack of staff" },
        { value: "B", text: "lack of publicity" },
        { value: "C", text: "lack of money" }
      ]
    },
    {
      id: 13,
      text: "Why were the thieves able to successfully steal the statue?",
      options: [
        { value: "A", text: "The security device is outdated." },
        { value: "B", text: "The security guard is not well-trained." },
        { value: "C", text: "They knew what they were searching for." }
      ]
    },
    {
      id: 14,
      text: "In order to improve security, they are going to",
      options: [
        { value: "A", text: "get more closed-circuit television cameras." },
        { value: "B", text: "hire more security guards." },
        { value: "C", text: "buy more computers." }
      ]
    },
    {
      id: 15,
      text: "What kind of librarian are they looking for?",
      options: [
        { value: "A", text: "responsible" },
        { value: "B", text: "experienced" },
        { value: "C", text: "highly-trained" }
      ]
    }
  ];
  
  // Filter questions based on startQuestion and endQuestion params
  const filteredQuestions = questions.filter(q => q.id >= startQuestion && q.id <= endQuestion);
  
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="font-bold text-lg">Questions {startQuestion}-{endQuestion}</h3>
        <p className="mb-4"><HighlightedText>Choose the correct letter, A, B or C.</HighlightedText></p>
      </div>
      
      {filteredQuestions.map((question) => (
        <div key={question.id} className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="mb-3 font-medium">{question.id}. {question.text}</div>
          <div className="space-y-2">
            {question.options.map((option) => (
              <label key={option.value} className="flex items-start p-2 hover:bg-gray-100 rounded cursor-pointer">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.value}
                  checked={answers[question.id - 1] === option.value}
                  onChange={() => handleOptionSelect(question.id, option.value)}
                  className="mt-1 mr-3"
                />
                <div>
                  <span className="font-medium mr-2">{option.value}.</span>
                  {option.text}
                </div>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceSection;