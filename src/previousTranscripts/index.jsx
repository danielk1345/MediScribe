import PastTranscriptionTitle from "./pastTranscriptionTitles.jsx";
import "./index.css";
import { useEffect, useState } from "react";
import { getTranscriptions } from "../api/getTranscriptions.js";

const PreviousTranscripts = () => {
  const data = [
    {
      timestamp: "aslkdjflasjd",
    },
    {
      timestamp: "aslkdjflasjd",
    },
    {
      timestamp: "aslkdjflasjd",
    },
    {
      timestamp: "aslkdjflasjd",
    },
    {
      timestamp: "aslkdjflasjd",
    },
  ];

  const [transcriptInfo, setTranscriptInfo] = useState();

  useEffect(() => {
    (async () => {
      const userId = "new_user";
      const info = await getTranscriptions(userId);
      setTranscriptInfo(info.conversations);
      console.log("info", info);
      console.log("info.conversations", info.conversations);
      console.log("transcriptionInfo", transcriptInfo);
    })();
  }, []);

  return (
    <div className="prev-transcript-container">
      <div className="transcript">
        <div className="transcript-header">Transcript:</div>
        <div className="transcript-body">
          <div className="transcript-text">
            Hello Mr. Park, I have gone over your test results and we have found
            a benign tumour. I believe it should not affect your daily life
            therefore there is no need for chemotherapy or any surgical
            interventions. We will continue to monitor the tumour and I will ask
            the nurse to book a couple of MRI appointments for you.
          </div>
        </div>
        <div className="action-button-container">
          <div className="action-button">
            <div style={{ order: 0, color: "#1D3557" }}>Send Transcript</div>
          </div>
          <div className="action-button">
            <div style={{ order: 1, color: "#E63946" }}>Delete Transcript</div>
          </div>
        </div>
      </div>

      <div className="transcript-list-container">
        <div className="transcript-list-header">Transcript List</div>
        <div className="transcript-titles">
          {/* {data.map((transcriptInfo, i) => (
            <PastTranscriptionTitle
              transcriptionInfo={{ ...transcriptInfo, order: i }}
            />
          ))} */}
          {transcriptInfo &&
            transcriptInfo.map((transcriptInfo, i) => {
              console.log("transcriptionInfo[i]", transcriptInfo[i]);
              return transcriptInfo?.[i]?.timestamp !== undefined ? (
                <PastTranscriptionTitle
                  transcriptionInfo={(transcriptInfo, { order: i })}
                />
              ) : null;
            })}
          {transcriptInfo &&
            console.log("transcriptInfo[0]", transcriptInfo[0])}
        </div>
      </div>
    </div>
  );
};

export default PreviousTranscripts;
