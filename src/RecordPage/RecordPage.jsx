import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";
import { SpeechDetailedPhraseEvent } from "microsoft-speech-browser-sdk";

const RecordPage = () => {
  // const [input, setInput] = useState(null);
  // const [recording, setRecording] = useState(false);
  // const [data, setData] = useState(null);
  // // const [speechConfig, setspeechConfig] = useState(null);
  // // const [audioConfig, setspeechConfig] = useState(null);
  // const [recognizer, setRecognizer] = useState(null);
  // useEffect(() => {
  //   // const res = getToken()
  //   getToken();
  //   console.log("callwe");

  //   // const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(res.token, res.region);
  //   // speechConfig.speechRecognitionLanguage = 'en-US';
  //   // const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

  //   // const newRecognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
  //   // console.log("newRecognizer", newRecognizer)
  //   // setRecognizer(newRecognizer)
  // }, []);

  // function getToken() {
  //   fetch("http://localhost:5000/speech-token-object")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log("res", res);
  //       setData(res);
  //       // return res
  //     });
  // }

  // function toggleRecording() {
  //   setRecording(!recording);
  //   if (recording) {
  //     StopRecording();
  //   } else {
  //     StartRecording();
  //   }
  // }

  // function StartRecording() {
  //   let displayText;
  //   const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(
  //     data.token,
  //     data.region
  //   );
  //   speechConfig.speechRecognitionLanguage = "en-US";
  //   const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
  //   const newRecognizer = new SpeechSDK.SpeechRecognizer(
  //     speechConfig,
  //     audioConfig
  //   );
  //   setRecognizer(newRecognizer);

  //   // console.log("recognizer", recognizer);
  //   newRecognizer.startContinuousRecognitionAsync((result) => {
  //     console.log("res", result);
  //     if (result.reason === ResultReason.RecognizedSpeech) {
  //       displayText = `RECOGNIZED: Text=${result.text}`;
  //       setInput(displayText);
  //     } else {
  //       displayText =
  //         "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.";
  //     }
  //   });
  // }

  // async function StopRecording() {
  //   console.log(recognizer);
  //   recognizer.stopContinuousRecoginitionAsync(() => {
  //     console.log("Finished Recording");
  //   });
  // }

  // return (
  //   <div>
  //     <div>This is the Record Page</div>
  //     <button onClick={() => toggleRecording()}>
  //       {" "}
  //       {recording ? "Stop Recording" : "Start Recording"}{" "}
  //     </button>
  //     <p>{input}</p>
  //   </div>
  // );
  return <div></div>;
};

export default RecordPage;
