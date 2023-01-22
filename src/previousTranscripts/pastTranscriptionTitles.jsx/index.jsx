import "./index.css";

const PastTranscriptionTitle = ({ transcriptionInfo, order }) => {
  return (
    <div className="container" style={{ order: order - 1 }}>
      <div className="text">{transcriptionInfo.timestamp}</div>
    </div>
  );
};

export default PastTranscriptionTitle;
