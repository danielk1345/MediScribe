import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", async (req, res) => {
  try {
    console.log("process.env.SENDGRID_API_KEY", process.env.SENDGRID_API_KEY);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      // to: "matthewelliottkeller@gmail.com", // Change to your recipient
      to: "e6hsu@uwaterloo.ca",
      from: "ethanh812123@gmail.com", // Change to your verified sender
      // from: "leo233257@gmail.com",
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    const sent = await sgMail.send(msg);

    console.log("sent", sent);
    res.status(200).json({ response: sent });
  } catch (error) {
    res
      .status(400)
      .json({ error: error?.message, body: error?.response?.body?.errors });
  }
});

app.listen(8080, () => {
  console.log(`Example app listening on port ${8080}`);
});
