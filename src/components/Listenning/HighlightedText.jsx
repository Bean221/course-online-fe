// src/components/HighlightedText.jsx
const HighlightedText = ({ children }) => {
  return (
    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 font-medium rounded border border-yellow-200">
      {children}
    </span>
  );
};

export default HighlightedText;