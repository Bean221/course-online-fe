// src/components/sections/WillowsSection.jsx (continued)
import HighlightedText from '../../components/sections/HighlightedText';

const WillowsSection = ({ answers, onAnswerChange }) => {
  const handleOptionSelect = (questionNum, value) => {
    onAnswerChange(questionNum, value);
  };
  
  const questions = [
    {
      id: 21,
      text: "What field is Willows currently focused on?",
      options: [
        { value: "A", text: "Specialising in one product" },
        { value: "B", text: "making a variety of products" },
        { value: "C", text: "adding a lot of retail outlet" }
      ]
    },
    {
      id: 22,
      text: "How did the students feel about the software?",
      options: [
        { value: "A", text: "The professor contacted the company." },
        { value: "B", text: "An article was read in a newspaper" },
        { value: "C", text: "A student work their part-time during the vacations." }
      ]
    },
    {
      id: 23,
      text: "How did the student feel about the software?",
      options: [
        { value: "A", text: "It's not easy to predict." },
        { value: "B", text: "It's slow for drawing designs" },
        { value: "C", text: "It had a good interface." }
      ]
    },
    {
      id: 24,
      text: "How did the students find out about the effects of the software on the company?",
      options: [
        { value: "A", text: "They went to the IT department." },
        { value: "B", text: "They talked with the manager." },
        { value: "C", text: "They inspected the accounts." }
      ]
    },
    {
      id: 25,
      text: "The reason why the students have a face-to-face interview alone is that",
      options: [
        { value: "A", text: "they could prepare for exams." },
        { value: "B", text: "there will be less disturbance." },
        { value: "C", text: "it's less realistic." }
      ]
    },
    {
      id: 26,
      text: "How did the two students perform in the exam?",
      options: [
        { value: "A", text: "very disappointing" },
        { value: "B", text: "significantly good" },
        { value: "C", text: "above the average" }
      ]
    }
  ];
  
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="font-bold text-lg">Questions 21-26</h3>
        <p className="mb-4"><HighlightedText>Choose the correct letter, A, B or C.</HighlightedText></p>
      </div>
      
      {questions.map((question) => (
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

export default WillowsSection;