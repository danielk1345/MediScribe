import { useState, useEffect } from "react";
import { REACT_APP_TRANSLATE_KEY } from "../../secrets";

const PopUp = ({ openPopup, word, togglePopup, lang }) => {
  const [definition, setDefinition] = useState("");
  const [translation, setTranslation] = useState("");

  const params = {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": REACT_APP_TRANSLATE_KEY,
      "Ocp-Apim-Subscription-Region": "eastus",
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: `[{'Text':'${word}'}]`,
  };
  useEffect(() => {
    fetch(
      `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=${lang.value}`,
      params
    )
      .then((response) => response.json())
      .then((data) => {
        setTranslation(data[0].translations[0].text);
      })
      .catch((err) => console.log(err));
  });

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
            <div style={{ fontSize: "20px" }}>
              {definition ? definition : ""}
            </div>
          </div>
          <div className="pop-links-cont">
            <div style={{ marginBottom: "10px" }}>
              {lang.label} translation:
            </div>
            <div style={{ fontSize: "20px" }}>{translation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
