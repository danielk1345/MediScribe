import "./TranScribeBox.css";
import ScribeBox from "./ScribeBox";

const TranScribe = ({ recording, transcribing, matchingWords, input }) => {
  return (
    <div className="transcribe-box">
      <div className="inner-box">
        <div className="scribe-title">Transcript:</div>
        <ScribeBox
          recording={recording}
          transcribing={transcribing}
          matchingWords={matchingWords}
          input={input}
        />
      </div>
    </div>
  );
};

export default TranScribe;
