import express from "express";
import { Model } from "../db/schema.js";
import { setUserInfo } from "./functions/setUserInfo.js";
import { getSpeechTokenObject } from "./functions/getSpeechTokenObject.js";
import { setConversationInfo } from "./functions/setConversationInfo.js";
import { getConversations } from "./functions/getUserConversations.js";

const router = express.Router();

router.post("/post", async (req, res) => {
  const data = new Model({
    name: "rand_name", //req.body.name,
    age: 9090, // req.body.age,
  });

  try {
    console.log("data", data);
    const dataToSave = await data.save();
    console.log("dataToSave", dataToSave);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/set-user", async (req, res) => {
  setUserInfo(req, res);
});

router.post("/set-convo", async (req, res) => setConversationInfo(req, res));

router.get("/speech-token-object", async (req, res) => {
  getSpeechTokenObject(req, res);
});

router.get("/user-convo-info", async (req, res) => getConversations(req, res));

export { router };
