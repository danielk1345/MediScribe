import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import {
  ResultReason,
  NoMatchDetails,
  NoMatchReason,
} from "microsoft-cognitiveservices-speech-sdk";
import Highlighter from "react-highlight-words";
import "../App.css";

const RecordPageRetry = () => {
  const [input, setInput] = useState("");
  const [recording, setRecording] = useState(false);
  const [data, setData] = useState(null);
  const [recognizer, setRecognizer] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [doneRun, setdoneRun] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);
  const MedicalTerms = [
    "abdomen",
    "abortion",
    "acute",
    "adhesions",
    "anaemia",
    "anaesthesia",
    "prenatal",
    "antibiotics",
    "antibody",
    "autoimmune",
    "bacteria",
    "biopsy",
    "bladder",
    "bmi",
    "brca",
    "cancer",
    "benign",
    "catheter",
    "cervix",
    "cell",
    "cholesterol",
    "chromosomes",
    "chronic",
    "colposcopy",
    "conception",
    "condition",
    "contusion",
    "diabetes",
    "diagnosis",
    "disease",
    "embryo",
    "enzyme",
    "fallopian",
    "fertility",
    "fetus",
    "fracture",
    "gene",
    "genetic",
    "genitals",
    "gland",
    "gonorrhoea",
    "gynaecologist",
    "herpes",
    "horomone",
    "hiv",
    "immunity",
    "immune system",
    "inflammation",
    "intensive care unit",
    "icu",
    "invasive",
    "iv",
    "irritable bowel syndrome",
    "kidney",
    "labor",
    "laxatives",
    "libido",
    "lupus",
    "malignant",
    "meningitis",
    "menopause",
    "menstrual",
    "miscarriage",
    "obstetrician",
    "ovaries",
    "ovulation",
    "pelvic",
    "physiotherapy",
    "period",
    "placenta",
    "post mortem",
    "pregnancy",
    "premature birth",
    "pubic",
    "rectum",
    "transplant",
    "tumor",
    "uterus",
    "vagina",
    "vasectomy",
    "vein",
    "virus",
    "womb",
  ];
  const [matchingWords, setMatchingWords] = useState([]);
  const getToken = () => {
    fetch("http://localhost:5000/speech-token-object")
      .then((response) => response.json())
      .then((res) => {
        return setData(res);
      });
  };

  useEffect(() => getToken, []);

  useEffect(() => {
    if (data === null) return;

    const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(
      data.token,
      data.region
    );
    speechConfig.speechRecognitionLanguage = "en-US";
    const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

    const newRecognizer = new SpeechSDK.SpeechRecognizer(
      speechConfig,
      audioConfig
    );

    newRecognizer.recognized = function (s, e) {
      // Indicates that recognizable speech was not detected, and that recognition is done.
      if (e.result.reason === ResultReason.NoMatch) {
        var noMatchDetail = NoMatchDetails.fromResult(e.result);
        setdoneRun(true);
        console.log("we reached here");
      } else {
        console.log(e.result.text);
        setInput(e.result.text);
      }
    };

    newRecognizer.recognizing = function (s, e) {};

    setRecognizer(newRecognizer);
  }, [data]);

  useEffect(() => {
    if (recognizer === null) return;
    else setShowButton(true);
  }, [recognizer]);

  const toggleRecording = () =>
    recording ? StopRecording() : StartRecording();

  const StartRecording = () => {
    setRecording(true);
    recognizer.startContinuousRecognitionAsync((result) => {
      if (result.reason === ResultReason.RecognizedSpeech)
        setInput(`${result.text}`);
      else
        setInput(
          "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly."
        );
    });
  };

  useEffect(() => {
    if (doneRun) {
      console.log("please here");
      let transcript = input.toLowerCase();
      let words = [];
      for (let i = 0; i < MedicalTerms.length; ++i) {
        if (transcript.includes(MedicalTerms[i])) {
          words.push(MedicalTerms[i]);
        }
      }
      setdoneRun(false);
      setMatchingWords(words);
      setShowHighlight(true);
      console.log("Show highlight", showHighlight);
    }
  }, [doneRun]);

  const StopRecording = () => {
    setRecording(false);
    recognizer.stopContinuousRecognitionAsync((res) => {});
  };

  // const getDef = async () => {
  //   api_key = process.env.REACT_APP_DICTIONARY_KEY
  //   const response = await fetch('/api/users');
  //   return await response.json();

  // }

  return (
    <div>
      <div>This is the Record Page</div>
      {showButton && (
        <button onClick={() => toggleRecording()}>
          {recording ? "Stop Recording" : "Start Recording"}
        </button>
      )}
      {showHighlight && (
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={matchingWords}
          autoEscape={true}
          textToHighlight={input}
          caseSensitive={false}
          highlightTag={CustomHighlight}
          // highlightStyle = {{color: "black", backgroundColor: "rgba(245, 100, 112, 90)"}}
        />
      )}
    </div>
  );
};

const CustomHighlight = (props) => {
  return (
    <span
      onClick={() => {
        console.log("hi");
      }}
      className={"highlight"}
    >
      {props.children}
    </span>
  );
};

export default RecordPageRetry;
