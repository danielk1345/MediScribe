const ScribeBox = ({ recording, transcribing }) => {
  return (
    <div className="text-container">
      <div className="scribe-text">
        {recording ? "Generating transcript . . . " : "Start the recording."}
      </div>
    </div>
  );
};

export default ScribeBox;
