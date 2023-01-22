const Header = ({ changePage, page, disablePrev }) => {
  return (
    <div className="header-background">
      <div className="medi-buttons">
        <div
          className={
            page ? "medi-button medi-button-current left-button" : "medi-button"
          }
          onClick={() => changePage(true)}
        >
          Live Transcriptions
        </div>
        <div
          style={
            disablePrev
              ? { borderBottomRightRadius: "20px", color: "grey" }
              : { borderBottomRightRadius: "20px" }
          }
          className={
            page
              ? "medi-button"
              : "medi-button medi-button-current right-button"
          }
          onClick={() => changePage(false)}
        >
          Previous Transcriptions
        </div>
      </div>
    </div>
  );
};

export default Header;
