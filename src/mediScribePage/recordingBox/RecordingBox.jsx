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

  // console.log("user.uid", user.uid);

  const handleClickRecord = () => {
    // const exampleTranscript =
    //   "Hello Mr. Park, I have gone over your test results and we have found a benign tumour. I believe it should not affect your daily life therefore there is no need for chemotherapy or any surgical interventions. We will continue to monitor the tumour and I will askthe nurse to book a couple of MRI appointments for you.";
    // if (recording) {
    //   setTranscript(
    //     user.uid,
    //     exampleTranscript,
    //     "add title here if u want",
    //     user.displayName
    //   );
    // }
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
