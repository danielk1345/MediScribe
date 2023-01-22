import "./TranScribeBox.css";
import ScribeBox from "./ScribeBox";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "zh-Han", label: "Chinese" },
  { value: "es", label: "Spanish" },
  { value: "ko", label: "Korean" },
];

const TranScribe = ({ recording, transcribing, matchingWords, input }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "en",
    label: "English",
  });
  return (
    <div className="transcribe-box">
      <div className="inner-box">
        <div className="top-row-cont">
          <div className="scribe-title">Transcript:</div>
          <div style={{ width: "30%" }}>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
        </div>
        <ScribeBox
          recording={recording}
          transcribing={transcribing}
          matchingWords={matchingWords}
          input={input}
          lang={selectedOption}
        />
      </div>
    </div>
  );
};

export default TranScribe;
