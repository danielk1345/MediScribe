import { Link } from "react-router-dom";
import { useState } from "react";

const RecordPage = () => {
  console.log("record page function");
  const [data, setData] = useState(null);
  function handleClick() {
    fetch("http://localhost:5000/speech-token-object")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        console.log("response", res);
        console.log("data", data);
      });
    console.log(data);
  }

  return (
    <div>
      <div>This is the Record Page</div>
      <button onClick={handleClick}>Record now</button>
      {data && <p>{data.message}</p>}
    </div>
  );
};

export default RecordPage;
