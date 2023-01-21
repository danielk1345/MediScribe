import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <div>this is main page where there will be a sign in button</div>
      <Link to="/MediScribe">Sign in</Link>
    </div>
  );
};

export default MainPage;
