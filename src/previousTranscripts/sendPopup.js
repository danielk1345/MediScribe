import { React, useState } from "react";
import "./sendpopup.css";
import { host } from "../api/host";

export const SendPopup = ({ open, toggle, curTranscript }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [recName, setRecName] = useState("");
  const [recEmail, setRecEmail] = useState("");

  const handleUserName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleRecName = (event) => {
    setRecName(event.target.value);
  };
  const handleRecEmail = (event) => {
    setRecEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${host}/twilio`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email_text: curTranscript.transcript }),
    });
  };

  return (
    <div className="overlay">
      <div className="pop-container" onClick={toggle}>
        <div className="closing">
          <p>X</p>
        </div>
      </div>
      <div>
        <form className="form">
          <label className="youName">
            {" "}
            Your name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => handleUserName(event)}
            />
          </label>
          <label className="yourEmail">
            {" "}
            Your email:
            <input
              type="text"
              name="name"
              value={email}
              onChange={handleEmail}
            />
          </label>
          <label className="recName">
            {" "}
            Recipient name:
            <input
              type="text"
              name="name"
              value={recName}
              onChange={handleRecName}
            />
          </label>
          <label className="recEmail">
            {" "}
            Recipient email:
            <input
              type="text"
              name="name"
              value={recEmail}
              onChange={handleRecEmail}
            />
          </label>
          <input
            type="submit"
            value="Send Transcript"
            className="submit-button"
            onClick={(e) => {
              handleSubmit(e);
            }}
          ></input>
        </form>
      </div>
    </div>
  );
};
