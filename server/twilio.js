import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", async (req, res) => {
  try {
    // const sgMail = require('@sendgrid/mail')
    console.log("get request");
    console.log(process.env.TWILIO);
    sgMail.setApiKey(process.env.TWILIO);

    const msg = {
      to: "leo233257@gmail.com", // Change to your recipient
      //   from: "ll2lau@uwaterloo.ca", // Change to your verified sender
      from: "leo233257@gmail.com",
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    const sent = await sgMail.send(msg);

    console.log("sent", sent);
    res.status(200).json({ response: sent });
  } catch (error) {
    console.log("error", error);
    console.log("error.,,,,", error?.response?.body?.errors);
    res.status(400).json({ error: error.message });
  }
});

app.listen(8080, () => {
  console.log(`Example app listening on port ${8080}`);
});
