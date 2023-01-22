import { useState } from "react";
import RecordingBox from "./recordingBox/RecordingBox";
import Header from "./Header";

const Live = ({ recording, transcribing }) => {
  return (
    <div className="live-container">
      <RecordingBox recording={recording} transcribing={transcribing} />
      <div>Live page</div>
    </div>
  );
};

export default Live;
