import "./RecordingBox.css";
import RecordingCircle from "./RecordingCircle";
import { setTranscript } from "../../api/setTranscript";
import { getAuth } from "firebase/auth";

const RecordingBox = ({
  recording,
  transcribing,
  changeTranscribing,
  changeRecording,
}) => {
  const auth = getAuth();
  const user = auth.currentUser;

  console.log("user.uid", user.uid);

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
