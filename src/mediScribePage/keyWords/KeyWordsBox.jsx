import { useEffect, useState } from "react";
import "./KeyWords.css";

const KeyWordsBox = ({ recording, transcribing, matchingWords }) => {
  console.log(matchingWords);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(matchingWords.join(", "));
  }, [matchingWords]);

  return (
    <div className="key-word-box">
      <div className="word-inner-box">
        <div className="scribe-title">Transcript Keywords:</div>
        <div className="word-container" style={{ borderRadius: "17px" }}>
          <div className="word-text">
            {recording
              ? "Generating transcript keywords . . . "
              : text
              ? text
              : "Start the recording."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyWordsBox;
