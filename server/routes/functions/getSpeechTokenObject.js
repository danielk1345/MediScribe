import axios from "axios";
// const bodyParser = require("body-parser");
// const pino = require("express-pino-logger")();

import dotenv from "dotenv";
dotenv.config();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

export const getSpeechTokenObject = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const speechKey = process.env.SPEECH_KEY;
  const speechRegion = process.env.SPEECH_REGION;

  const headers = {
    headers: {
      "Ocp-Apim-Subscription-Key": speechKey,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const tokenResponse = await axios.post(
      `https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
      null,
      headers
    );
    res.send({ token: tokenResponse.data, region: speechRegion });
  } catch (err) {
    res.status(401).send("There was an error authorizing your speech key.");
  }
};
