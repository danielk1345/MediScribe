import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", async (req, res) => {
  try {
    console.log("process.env.SENDGRID_API_KEY", process.env.SENDGRID_API_KEY);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    let user_email = "ethanh812123@gmail.com";
    let recip_email = "e6hsu@uwaterloo.ca";
    let email_text = "Default";

    const msg = {
      to: recip_email,
      from: user_email,
      subject: "Transcript from MediScribe",
      text: email_text,
      html: "<strong>$email_text</strong>",
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
