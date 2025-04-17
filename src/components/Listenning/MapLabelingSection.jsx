// src/components/sections/MapLabelingSection.jsx
import HighlightedText from "./HighlightedText";
import Map11 from "../../assets/listenning/listest1.png"; // 🖼️ Đường dẫn tới ảnh bản đồ

const MapLabelingSection = ({ answers, onAnswerChange }) => {
  const handleInputChange = (questionNum, value) => {
    onAnswerChange(questionNum, value);
  }; // câu 16 đến 20

  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="font-bold text-lg">Questions 16-20</h3>
        <p className="mb-2">Label the map below.</p>
        <p className="mb-4">
          <HighlightedText>
            Write the correct letter, A-H, next to questions 16-20.
          </HighlightedText>
        </p>
      </div>

      <div className="mb-6 text-center">
        <h4 className="font-bold mb-4">City Museum</h4>
        <div className="w-full max-w-2xl mx-auto">
          <img
            src= {Map11} // 🖼️ Đường dẫn tới ảnh bản đồ
            alt="City Museum Map"
            className="w-full h-auto rounded-lg border border-gray-300 shadow"
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          (Note: The actual map is shown above)
        </p>
      </div>

      <div className="space-y-3">
  {[
    { num: 16, label: "Box Office" },
    { num: 17, label: "Children's Room" },
    { num: 18, label: "Cafe" },
    { num: 19, label: "Multimedia Room" },
    { num: 20, label: "Showroom" },
  ].map(({ num, label }) => (
    <div
      key={num}
      className="flex flex-col md:flex-row md:items-center justify-between gap-2"
    >
      <label htmlFor={`question-${num}`} className="font-medium w-full md:w-1/2">
        {num}. {label}
      </label>
      <input
        id={`question-${num}`}
        type="text"
        value={answers[num - 1] || ""}
        onChange={(e) => handleInputChange(num, e.target.value.toUpperCase())}
        className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={1}
        placeholder="A-G"
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default MapLabelingSection;
