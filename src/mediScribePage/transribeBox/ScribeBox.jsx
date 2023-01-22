import Highlighter from "react-highlight-words";
const CustomHighlight = (props) => {
  return (
    <span
      onClick={() => {
        console.log("hi");
      }}
      className={"highlight"}
    >
      {props.children}
    </span>
  );
};
const ScribeBox = ({ recording, transcribing, matchingWords, input }) => {
  return (
    <div className="text-container">
      <div className="scribe-text">
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={matchingWords}
          autoEscape={true}
          textToHighlight={input}
          caseSensitive={false}
          highlightTag={CustomHighlight}
          // highlightStyle = {{color: "black", backgroundColor: "rgba(245, 100, 112, 90)"}}
        />
        {recording ? "Generating transcript . . . " : "Start the recording."}
      </div>
    </div>
  );
};

export default ScribeBox;
