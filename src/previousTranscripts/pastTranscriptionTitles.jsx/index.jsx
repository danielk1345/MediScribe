import "./index.css";

const PastTranscriptionTitle = (transcriptionInfo, order) => {
  console.log("transcriptoinINfo", transcriptionInfo);
  console.log("order");
  console.log("transcriptoinINfo.timestamp", transcriptionInfo.timestamp);
  return (
    <div className="container" style={{ order: order - 1 }}>
      <div className="text">{transcriptionInfo.timestamp}</div>
    </div>
  );
};

export default PastTranscriptionTitle;
