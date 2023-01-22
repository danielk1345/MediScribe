import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { email_text } = req.body;
    console.log("email_text", email_text);
    console.log("process.env.SENDGRID_API_KEY", process.env.SENDGRID_API_KEY);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    console.log("api key set");

    let user_email = "ethanh812123@gmail.com";
    let recip_email = "e6hsu@uwaterloo.ca";

    const msg = {
      to: recip_email,
      from: user_email,
      subject: "Transcript from MediScribe",
      text: email_text,
      html: `<strong>${email_text}</strong>`,
    };
    console.log("msg", msg);
    const sent = await sgMail.send(msg);
    console.log("AFTER SENT");

    console.log("sent", sent);
    res.status(200).json({ response: sent });
  } catch (error) {
    console.log("ERROR", error);
    console.log("error?.response?.body?.errors", error?.response?.body?.errors);
    res
      .status(400)
      .json({ error: error?.message, body: error?.response?.body?.errors });
  }
};
