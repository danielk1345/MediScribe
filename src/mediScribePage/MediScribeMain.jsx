import { useState, useEffect } from "react";
import Live from "./Live";
import Previous from "./Previous";
import Header from "./Header";
import "./mediScribePage.css";
import PreviousTranscripts from "../previousTranscripts";

const MediScribeMain = () => {
  const [page, setPage] = useState(true);
  const [recording, setRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);

  // const url = process.env.REACT_APP_DICTIONARY_KEY;

  const changePage = (page) => {
    if (recording || transcribing) return;
    setPage(page);
  };
  const changeRecording = (bool) => {
    setRecording(bool);
  };
  const changeTranscribing = (bool) => {
    setTranscribing(bool);
  };
  // useEffect(() => {
  //   fetch(
  //     "https://dictionaryapi.com/api/v3/references/medical/json/benign?key=26018eef-0a9b-41a2-a104-4f9179e33de6"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data[0]));
  // });

  return (
    <div className="medi-main-container">
      <Header
        changePage={changePage}
        page={page}
        disablePrev={recording || transcribing}
      />
      <div className="body-container">
        {page ? (
          <Live recording={recording} transcribing={transcribing} />
        ) : (
          <PreviousTranscripts />
        )}
      </div>
    </div>
  );
};

export default MediScribeMain;
