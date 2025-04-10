const ReadingTestDetail = ({ readingData }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Reading</h2>
      <p>Score: {readingData.score} / {readingData.total}</p>
      <ul>
        {readingData.details.map((q, index) => (
          <li key={index} className="my-1">
            Câu {q.questionId}: 
            <span className={q.isCorrect ? "text-green-600" : "text-red-600"}>
              {q.isCorrect ? "Đúng" : "Sai"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingTestDetail;
