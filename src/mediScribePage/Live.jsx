import { useState } from "react";
import RecordingBox from "./recordingBox/RecordingBox";
import Header from "./Header";
import TranScribe from "./transribeBox/TranScribeBox";
import KeyWordsBox from "./keyWords/KeyWordsBox";

const Live = ({
  recording,
  transcribing,
  changeTranscribing,
  changeRecording,
}) => {
  return (
    <div className="live-container">
      <div className="top-two">
        <RecordingBox
          recording={recording}
          transcribing={transcribing}
          changeTranscribing={changeTranscribing}
          changeRecording={changeRecording}
        />
        <TranScribe recording={recording} transcribing={transcribing} />
      </div>
      <div className="bottom-one">
        <KeyWordsBox recording={recording} transcribing={transcribing} />
      </div>
    </div>
  );
};

export default Live;
