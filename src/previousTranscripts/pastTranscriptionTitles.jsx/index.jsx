import "./index.css";

const PastTranscriptionTitle = ({ transcriptionInfo }) => {
  const date = new Date(transcriptionInfo?.timestamp);

  const month = 1; //(date.getMonth() + 1) | 1;
  const day = 22; //date.getDate() | 9;
  const year = 2023; //date.getFullYear() | 2023;
  return (
    <div className="container" style={{ order: transcriptionInfo.order - 1 }}>
      <div className="text">{`${month}/${day}/${year}`}</div>
    </div>
  );
};

export default PastTranscriptionTitle;
