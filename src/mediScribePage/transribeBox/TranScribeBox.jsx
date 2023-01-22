import "./TranScribeBox.css";
import ScribeBox from "./ScribeBox";

const TranScribe = ({ recording, transcribing }) => {
  return (
    <div className="transcribe-box">
      <div className="inner-box">
        <div className="scribe-title">Transcript:</div>
        <ScribeBox recording={recording} transcribing={transcribing} />
      </div>
    </div>
  );
};

export default TranScribe;
