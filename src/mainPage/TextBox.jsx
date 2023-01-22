import { Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3v-9GvOgrGgyDQSZyCoTUatnwu-HLPm0",
  authDomain: "mediscribe-2bee1.firebaseapp.com",
  projectId: "mediscribe-2bee1",
  storageBucket: "mediscribe-2bee1.appspot.com",
  messagingSenderId: "769199842855",
  appId: "1:769199842855:web:ef12413e691358dfe4d002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

const GoogleSignIn = () => {
  signInWithPopup(auth, provider).then((result) => {

  }).catch((error) => {
    console.log(error)
  })
};


const TextBox = () => {
  return (
    <div className="container">
      <div style={{ width: "80%" }}>
        <h1>Take control of your own health.</h1>
      </div>
      <p>
        Doctor appointments can be daunting, but we are here to help. We
        transcribe what the doctor is saying in real time, and highlight key
        medical terms and explain them in a way that you can understand.
        Breaking the barrier between doctor and patient is the first step
        towards owning your own health.
      </p>
      <div className="button" onClick={GoogleSignIn}>
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
