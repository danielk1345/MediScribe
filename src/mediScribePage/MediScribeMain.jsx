import { useState, useEffect } from "react";
import Live from "./Live";
import Previous from "./Previous";
import Header from "./Header";
import "./mediScribePage.css";
import PreviousTranscripts from "../previousTranscripts";

import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import {
  ResultReason,
  NoMatchDetails,
  NoMatchReason,
} from "microsoft-cognitiveservices-speech-sdk";
import Highlighter from "react-highlight-words";
import { MedicalTerms } from "./medTerms";

const MediScribeMain = () => {
  const [masterString, setMasterString] = useState("");
  const [input, setInput] = useState("");
  const [recording, setRecording] = useState(false);
  const [data, setData] = useState(null);
  const [recognizer, setRecognizer] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [doneRun, setdoneRun] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);
  const [matchingWords, setMatchingWords] = useState([]);
  const [page, setPage] = useState(true);
  const [transcribing, setTranscribing] = useState(false);
  const getToken = () => {
    fetch("http://localhost:5000/speech-token-object")
      .then((response) => response.json())
      .then((res) => {
        return setData(res);
      });
  };

  const changePage = (page) => {
    if (recording || transcribing) return;
    setPage(page);
  };
  const changeRecording = (bool) => {
    bool ? StartRecording() : StopRecording();
    setRecording(bool);
  };
  const changeTranscribing = (bool) => {
    setTranscribing(bool);
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
      } else {
        console.log(e.result.text);
        setInput(e.result.text);
        setMasterString(masterString.concat(" ", e.result.text));
        console.log(masterString);
      }
    };

    newRecognizer.recognizing = function (s, e) {};

    setRecognizer(newRecognizer);
  }, [data]);

  useEffect(() => {
    if (recognizer === null) return;
    else setShowButton(true);
  }, [recognizer]);

  // useEffect(() => {
  //   recording ? StopRecording() : StartRecording();
  // }, [recording]);
  // const toggleRecording = () =>
  //   recording ? StopRecording() : StartRecording();

  const StartRecording = () => {
    // setRecording(true);
    console.log(recognizer);
    recognizer?.startContinuousRecognitionAsync((result) => {
      console.log(result);
      if (result.reason === ResultReason.RecognizedSpeech) {
        setInput(`${result.text}`);
        setMasterString(masterString + result.text);
      } else
        setInput(
          "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly."
        );
    });
  };

  useEffect(() => {
    if (doneRun) {
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
    // setRecording(false);
    console.log(recognizer);
    recognizer?.stopContinuousRecognitionAsync((res) => {});
  };

  return (
    <div className="medi-main-container">
      <Header
        changePage={changePage}
        page={page}
        disablePrev={recording || transcribing}
      />
      <div className="body-container">
        {page ? (
          <Live
            matchingWords={matchingWords}
            input={masterString}
            recording={recording}
            transcribing={transcribing}
            changeTranscribing={changeTranscribing}
            changeRecording={changeRecording}
          />
        ) : (
          <PreviousTranscripts />
        )}
      </div>
    </div>
  );
};
export default MediScribeMain;
// return (
//   <div>
//     {showButton && (
//       <button onClick={() => toggleRecording()}>
//         {recording ? "Stop Recording" : "Start Recording"}
//       </button>
//     )}
//     {showHighlight && (
//       <Highlighter
//         highlightClassName="YourHighlightClass"
//         searchWords={matchingWords}
//         autoEscape={true}
//         textToHighlight={input}
//         caseSensitive={false}
//         highlightTag={CustomHighlight}
//         // highlightStyle = {{color: "black", backgroundColor: "rgba(245, 100, 112, 90)"}}
//       />
//     )}
//   </div>
// );

// const CustomHighlight = (props) => {
//   return (
//     <span
//       onClick={() => {
//         console.log("hi");
//       }}
//       className={"highlight"}
//     >
//       {props.children}
//     </span>
//   );
// };

// const MediScribeMain = () => {
// const [page, setPage] = useState(true);
// const [recording, setRecording] = useState(false);
// const [transcribing, setTranscribing] = useState(false);

// // const url = process.env.REACT_APP_DICTIONARY_KEY;

// const changePage = (page) => {
//   if (recording || transcribing) return;
//   setPage(page);
// };
// const changeRecording = (bool) => {
//   setRecording(bool);
// };
// const changeTranscribing = (bool) => {
//   setTranscribing(bool);
// };
// useEffect(() => {
//   fetch(
//     "https://dictionaryapi.com/api/v3/references/medical/json/benign?key=26018eef-0a9b-41a2-a104-4f9179e33de6"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data[0]));
// });

//   return (
//     <div className="medi-main-container">
//       <Header
//         changePage={changePage}
//         page={page}
//         disablePrev={recording || transcribing}
//       />
//       <div className="body-container">
//         {page ? (
//           <Live
//             recording={recording}
//             transcribing={transcribing}
//             changeTranscribing={changeTranscribing}
//             changeRecording={changeRecording}
//           />
//         ) : (
//           <PreviousTranscripts />
//         )}
//       </div>
//     </div>
//   );
// };
