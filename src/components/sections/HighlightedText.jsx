// src/components/HighlightedText.jsx
const HighlightedText = ({ children }) => {
    return (
      <span className="bg-yellow-100 px-1 py-0.5 font-medium">{children}</span>
    );
  };
  
  export default HighlightedText;