import ReadingTestDetail from "./ReadingTestDetail";
import ListeningTestDetail from "./ListeningTestDetail";
import WritingTestDetail from "./WritingTestDetail";
import SpeakingTestDetail from "./SpeakingTestDetail";

const AllTestDetail = ({ resultData }) => {
  return (
    <div className="space-y-4">
      <ReadingTestDetail readingData={resultData.reading} />
      <ListeningTestDetail listeningData={resultData.listening} />
      <WritingTestDetail writingData={resultData.writing} />
      <SpeakingTestDetail speakingData={resultData.speaking} />
    </div>
  );
};

export default AllTestDetail;
