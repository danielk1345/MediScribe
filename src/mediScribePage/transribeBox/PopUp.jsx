import { useState, useEffect } from "react";
const PopUp = ({ openPopup, word, togglePopup }) => {
  const [definition, setDefinition] = useState("");
  useEffect(() => {
    fetch(
      `https://dictionaryapi.com/api/v3/references/medical/json/${word}?key=${process.env.REACT_APP_DICTIONARY_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setDefinition(data[0].shortdef[0]));
  });
  return (
    <div className="popup-window">
      <div
        className="close-popup"
        onClick={() => {
          togglePopup(false);
        }}
      >
        X
      </div>
      <div className="content-container">
        <div className="pop-title">{word}</div>
        <div className="pop-info-container">
          <div className="pop-definition-cont">
            <div style={{ marginBottom: "10px" }}>Definition:</div>
            <div style={{ fontSize: "20px", textAlign: "justify" }}>
              {definition ? definition : ""}
            </div>
          </div>
          <div className="pop-links-cont">Useful links:</div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
