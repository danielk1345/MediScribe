import "./RecordingBox.css";
const RecordingBox = () => {
  const handleStartRecord = () => {
    console.log("start record");
  };

  return (
    <div className="recording-box">
      <div onClick={handleStartRecord}>start recording</div>
    </div>
  );
};

export default RecordingBox;
