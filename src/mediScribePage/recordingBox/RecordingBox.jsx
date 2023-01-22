import "./RecordingBox.css";
import RecordingCircle from "./RecordingCircle";

const RecordingBox = ({
  recording,
  transcribing,
  changeTranscribing,
  changeRecording,
}) => {
  const handleClickRecord = () => {
    changeRecording(!recording);
  };

  return (
    <div className="recording-box">
      <div className="recording-title">
        {recording ? "Stop Recording" : "Start Recording"}
      </div>
      <div onClick={handleClickRecord}>
        <RecordingCircle recording={recording} transcribing={transcribing} />
      </div>
    </div>
  );
};

export default RecordingBox;
