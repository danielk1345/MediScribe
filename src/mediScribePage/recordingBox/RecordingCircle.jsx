const RecordingCircle = ({ recording, transcribing }) => {
  return (
    <div className="outer-circle">
      <div className={recording ? "square" : "inner-circle"}></div>
    </div>
  );
};
export default RecordingCircle;
