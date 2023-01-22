import "./index.css";

const PastTranscriptionTitle = ({ transcriptionInfo }) => {
  const date = new Date(transcriptionInfo?.timestamp);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div className="container" style={{ order: transcriptionInfo.order - 1 }}>
      <div className="text">{`${month}/${day}/${year}`}</div>
    </div>
  );
};

export default PastTranscriptionTitle;
