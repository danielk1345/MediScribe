import TextBox from "./TextBox";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="header">
        <img
          src="logo.png"
          alt="MediScribe logo"
          width={100}
          height={100}
          className="logo"
        />
        <img src="mediScribeName.png" alt="MediScribe name" width={200} />
      </div>
      <div className="content">
        <img src="stockImage.png" alt="Stock Image" width={420} />
        <TextBox />
      </div>
    </div>
  );
};

export default MainPage;
