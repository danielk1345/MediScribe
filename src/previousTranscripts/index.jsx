import PastTranscriptionTitle from "./pastTranscriptionTitles.jsx";
import "./index.css";
import { useEffect, useState } from "react";
import { getTranscriptions } from "../api/getTranscriptions.js";
import { deleteTranscript } from "../api/deleteTranscript.js";
import { getAuth } from "firebase/auth";
import { SendPopup } from "./sendPopup.js";


const PreviousTranscripts = () => {
  const [transcriptInfo, setTranscriptInfo] = useState();
  const [curTranscript, setCurTranscript] = useState();
  const [popOpen, setPopOpen] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    (async () => {
      const userId = user.uid;
      const info = await getTranscriptions(userId);
      setTranscriptInfo(info.conversations);
      const conversationsArr = info.conversations.filter(
        (doc) => doc.length > 0
      );
      setCurTranscript(conversationsArr?.[0]?.[0]);
    })();
  }, []);

  useEffect(() => {
    console.log("runnning");
    (async () =>
      curTranscript === null
        ? setCurTranscript(
            (await getTranscriptions(user.uid)).conversations.filter(
              (doc) => doc.length > 0
            )?.[0]?.[0]
          )
        : null)();
  }, [curTranscript]);
  return (
    <div className="prev-transcript-container">
      <div className="transcript">
        <div className="transcript-header">Transcript:</div>
        <div className="transcript-body">
          <div className="transcript-text">
            {curTranscript && (curTranscript.transcript ?? curTranscript.title)}
          </div>
        </div>
        <div className="action-button-container">
          <button className="action-button" onClick={() => {setPopOpen(true)}} style={{ order: 0, color: "#1D3557" }}>
            Send Transcript
          </button>
          {popOpen?
          <SendPopup open={popOpen} toggle={()=>setPopOpen(false)}> 
          </SendPopup>:''}
          <div
            onClick={() => {
              console.log("running");
              deleteTranscript(curTranscript._id, user.uid).then((res) =>
                console.log(res)
              );
              setCurTranscript(null);
            }}
            className="action-button"
          >
            <div style={{ order: 1, color: "#E63946" }}>Delete Transcript</div>
          </div>
        </div>
      </div>

      <div className="transcript-list-container">
        <div className="transcript-list-header">Transcript List</div>
        <div className="transcript-titles">
          {
            // transcriptInfo &&
            //   transcriptInfo.filter(
            //     (transcriptInfo) => transcriptInfo?.[0]?.timestamp !== undefined
            //   )
            // .map((transcriptInfo, i) =>
            //   transcriptInfo?.[i]?.timestamp !== undefined ? (
            //     <PastTranscriptionTitle
            //       transcriptionInfo={{
            //         timestamp: transcriptInfo?.[i]?.timestamp,
            //         order: i,
            //       }}
            //     />
            // ))
          }
        </div>
      </div>
    </div>
  );
};

export default PreviousTranscripts;
