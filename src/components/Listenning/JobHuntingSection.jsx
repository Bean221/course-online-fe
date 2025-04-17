// src/components/sections/JobHuntingSection.jsx
// import { useEffect, useState } from 'react';
import HighlightedText from './HighlightedText';

const JobHuntingSection = ({ answers, onAnswerChange }) => {
  const handleInputChange = (questionNum, value) => {
    onAnswerChange(questionNum, value);
  }; // câu 1 đến 5
  
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="font-bold text-lg">Questions 1-5</h3>
        <p className="mb-2">Complete the table below.</p>
        <p className="mb-4"><HighlightedText>Write ONE WORD AND/OR NUMBERS for each answer.</HighlightedText></p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th colSpan="4" className="text-center p-3 border border-gray-300 text-lg font-bold">
                JOB HUNTING
              </th>
            </tr>
            <tr>
              <th className="p-3 border border-gray-300">Company's name</th>
              <th className="p-3 border border-gray-300">Job details</th>
              <th className="p-3 border border-gray-300">Reference number</th>
              <th className="p-3 border border-gray-300">Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-300">
                <span className="italic">Example</span><br />
                POWER<br />
                (manufacturing company)
              </td>
              <td className="p-3 border border-gray-300">
                • work in a <HighlightedText>1</HighlightedText> __________ section
              </td>
              <td className="p-3 border border-gray-300">SW35FT</td>
              <td className="p-3 border border-gray-300">Jane <HighlightedText>2</HighlightedText> __________</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300" rowSpan="2">
                COTTON<br />
                (grocery company)
              </td>
              <td className="p-3 border border-gray-300" rowSpan="2">
                • good pay<br />
                • work<br />
                - in <HighlightedText>3</HighlightedText> __________ office<br />
                - in a <HighlightedText>4</HighlightedText> __________<br />
                • chance of promotion
              </td>
              <td className="p-3 border border-gray-300" rowSpan="2">
                <HighlightedText>5</HighlightedText> __________
              </td>
              <td className="p-3 border border-gray-300" rowSpan="2">
                go to office
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map(num => (
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

export default JobHuntingSection;