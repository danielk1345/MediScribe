import PastTranscriptionTitle from "./pastTranscriptionTitles.jsx";
import "./index.css";

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
          {data.map((transcriptInfo, i) => (
            <PastTranscriptionTitle
              transcriptionInfo={(transcriptInfo, { order: i })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousTranscripts;
