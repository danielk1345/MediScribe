import { Link } from "react-router-dom";

const TextBox = () => {
  return (
    <div className="container">
      <div style={{ width: "80%" }}>
        <h1>Take control of your own health.</h1>
      </div>
      <p>
        Doctor appointments can be daunting, but we are here to help. We
        transcribe what the doctor is saying, and highlight key medical terms
        and explain them in a way that you can understand. Breaking the barrier
        between doctor and patient is the first step towards owning your own
        health.
      </p>
      <div className="button">
        <Link
          to="/MediScribe"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "500",
          }}
        >
          Login with Google
        </Link>
      </div>
    </div>
  );
};

export default TextBox;
