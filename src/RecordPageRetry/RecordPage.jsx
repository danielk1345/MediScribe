import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import {
  ResultReason,
  NoMatchDetails,
  NoMatchReason,
} from "microsoft-cognitiveservices-speech-sdk";

const RecordPageRetry = () => {
  const [input, setInput] = useState(null);
  const [recording, setRecording] = useState(false);
  const [data, setData] = useState(null);
  const [recognizer, setRecognizer] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const getToken = () => {
    console.log("get token being called");
    fetch("http://localhost:5000/speech-token-object")
      .then((response) => response.json())
      .then((res) => {
        return setData(res);
      });
  };

  useEffect(() => getToken, []);

  useEffect(() => {
    console.log("useEffect on data being called", data);
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
        console.log(
          "\r\n(recognized)  Reason: " +
            ResultReason[e.result.reason] +
            " NoMatchReason: " +
            NoMatchReason[noMatchDetail.reason]
        );
      } else {
        console.log(
          "\r\n(recognized)  Reason: " +
            ResultReason[e.result.reason] +
            " Text: " +
            e.result.text
        );
      }
    };

    newRecognizer.recognizing = function (s, e) {
      var str =
        "(recognizing) Reason: " +
        ResultReason[e.result.reason] +
        " Text: " +
        e.result.text;
      console.log(str);
    };

    // console.log("\r\n(recognized)  Reason: " + sdk.ResultReason[e.result.reason] + " Text: " + e.result.text);

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
    console.log("starting continous recording", recognizer);
    recognizer.startContinuousRecognitionAsync((result) => {
      if (result.reason === ResultReason.RecognizedSpeech)
        setInput(`RECOGNIZED: Text=${result.text}`);
      else
        setInput(
          "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly."
        );
    });
  };

  const StopRecording = () => {
    setRecording(false);
    console.log("recognizer stop recording", recognizer);
    recognizer.stopContinuousRecognitionAsync((res) => {
      console.log("res", res);

      console.log("Finished Recording");
    });
  };

  return (
    <div>
      <div>This is the Record Page</div>
      {/* <button onClick={() => toggleRecording()}> */}
      {showButton && (
        <button onClick={() => toggleRecording()}>
          {recording ? "Stop Recording" : "Start Recording"}
        </button>
      )}
      <p>{input}</p>
    </div>
  );
};

export default RecordPageRetry;
