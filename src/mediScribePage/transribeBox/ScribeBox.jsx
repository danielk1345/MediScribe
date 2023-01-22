import { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";
import PopUp from "./PopUp";

const ScribeBox = ({ recording, transcribing, matchingWords, input }) => {
  const [word, setWord] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  const CustomHighlight = (props) => {
    const togglePopup = (bool) => {
      setOpenPopup(bool);
    };
    return (
      <span>
        {openPopup ? (
          <PopUp
            openPopup={openPopup}
            word={word}
            togglePopup={() => setOpenPopup(false)}
          />
        ) : (
          ""
        )}
        <span
          onClick={() => {
            setWord(props.children);
            togglePopup(true);
          }}
          className={"highlight"}
        >
          {props.children}
        </span>
      </span>
    );
  };
  return (
    <div className="text-container">
      <div className="scribe-text">
        {recording ? (
          "Generating transcript . . . "
        ) : input ? (
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={matchingWords}
            autoEscape={true}
            textToHighlight={input}
            caseSensitive={false}
            highlightTag={CustomHighlight}
          />
        ) : (
          "Start the recording."
        )}
      </div>
    </div>
  );
};

export default ScribeBox;
