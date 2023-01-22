import { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";
import PopUp from "./PopUp";
import { REACT_APP_TRANSLATE_KEY } from "../../secrets";

const ScribeBox = ({ recording, transcribing, matchingWords, input, lang }) => {
  console.log(lang);
  const [word, setWord] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  // const params = {
  //   method: "POST",
  //   headers: {
  //     "Ocp-Apim-Subscription-Key": REACT_APP_TRANSLATE_KEY,
  //     "Ocp-Apim-Subscription-Region": "eastus",
  //     "Content-Type": "application/json",
  //     charset: "UTF-8",
  //   },
  //   body: "[{'Text':'my name is Ethan and I am doing okay'}]",
  // };
  // const clicked = () => {
  //   console.log("clicked");
  //   fetch(
  //     "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=zh-Hans",
  //     params
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

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
            lang={lang}
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
      {/* <div onClick={clicked}>click me</div> */}
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
