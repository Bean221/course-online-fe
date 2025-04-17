// src/components/sections/RefereeSection.jsx
import HighlightedText from './HighlightedText';

const RefereeSection = ({ answers, onAnswerChange }) => {
  const handleInputChange = (questionNum, value) => {
    onAnswerChange(questionNum, value);
  }; // câu 6 đến 10

  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="font-bold text-lg">Questions 6-10</h3>
        <p className="mb-2">Complete the notes below.</p>
        <p className="mb-4"><HighlightedText>Write ONE WORD ONLY for each answer.</HighlightedText></p>
      </div>
      
      <div className="bg-gray-50 p-4 border border-gray-300 rounded-lg mb-6">
        <h4 className="font-bold mb-3">Notes on Jobs</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            Bring a student card (10% discount)
          </li>
          <li>
            Referee:
            <ul className="list-none pl-5 mt-1">
              <li>- former boss (once had a job)</li>
              <li>- one of the <HighlightedText>9</HighlightedText> __________ (if not)</li>
            </ul>
          </li>
          <li>
            Intend to take the art course
          </li>
          <li>
            Fill out a <HighlightedText>10</HighlightedText> __________ form at the end of the course
          </li>
          <li>
            Local jobs can be found in the <HighlightedText>6</HighlightedText> __________
          </li>
          <li>
            Buy the <HighlightedText>7</HighlightedText> __________ to get one free magazine (Job Plus)
          </li>
          <li>
            Feel stress and spend a lot of time looking for jobs
          </li>
          <li>
            Advisable to go to an <HighlightedText>8</HighlightedText> __________ instead of the recruitment seminar
          </li>
        </ul>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[6, 7, 8, 9, 10].map(num => (
          <div key={num} className="mb-4">
            <label className="block mb-1 font-medium">Question {num}</label>
            <input
              type="text"
              value={answers[num - 1] || ''}
              onChange={(e) => handleInputChange(num, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your answer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefereeSection;