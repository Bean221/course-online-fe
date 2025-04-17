// src/components/sections/MapLabelingSection.jsx
import HighlightedText from '../../components/sections/HighlightedText';

const MapLabelingSection = ({ answers, onAnswerChange }) => {
  const handleInputChange = (questionNum, value) => {
    onAnswerChange(questionNum, value);
  };

  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="font-bold text-lg">Questions 16-20</h3>
        <p className="mb-2">Label the map below.</p>
        <p className="mb-4"><HighlightedText>Write the correct letter, A-H, next to questions 16-20.</HighlightedText></p>
      </div>
      
      <div className="mb-6 text-center">
        <h4 className="font-bold mb-4">City Museum</h4>
        <div className="bg-gray-100 p-4 rounded-lg relative w-full h-64 md:h-96 mx-auto">
          {/* This is where you would place your map image */}
          <div className="absolute top-1/4 left-1/4 w-12 h-8 border border-black bg-white flex items-center justify-center text-sm">B</div>
          <div className="absolute top-1/4 right-1/4 w-12 h-8 border border-black bg-white flex items-center justify-center text-sm">D</div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-8 border border-black bg-white flex items-center justify-center text-sm">Study Centre</div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-12 border border-black bg-white flex items-center justify-center text-sm">Sculpture</div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-12 h-8 border border-black bg-white flex items-center justify-center text-sm">C</div>
          <div className="absolute bottom-12 left-3/4 w-12 h-8 border border-black bg-white flex items-center justify-center text-sm">E</div>
          <div className="absolute top-12 right-12 w-12 h-8 border border-black bg-white flex items-center justify-center text-sm">H</div>
          <div className="absolute top-1/2 right-1/4 w-12 h-8 border border-black bg-white flex items-center justify-center text-sm">F</div>
          <div className="absolute bottom-4 right-1/3 w-12 h-8 border border-black bg-white flex items-center justify-center text-sm">A</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="text-center">Entrance</div>
            <div className="w-4 h-6 bg-black mx-auto"></div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">(Note: The actual map would be displayed here)</p>
      </div>
      
      <div className="space-y-3">
        {[
          { num: 16, text: "Box Office" },
          { num: 17, text: "Children's Room" },
          { num: 18, text: "Cafe" },
          { num: 19, text: "Multimedia Room" },
          { num: 20, text: "Showroom" }
        ].map(item => (
          <div key={item.num} className="flex items-center">
            <span className="w-1/2">{item.num} {item.text}</span>
            <input
              type="text"
              value={answers[item.num - 1] || ''}
              onChange={(e) => handleInputChange(item.num, e.target.value.toUpperCase())}
              className="w-16 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={1}
              placeholder="A-H"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapLabelingSection;