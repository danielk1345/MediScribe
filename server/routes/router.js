import express from "express";
import { setUserInfo } from "./functions/setUserInfo.js";
import { getSpeechTokenObject } from "./functions/getSpeechTokenObject.js";
import { setConversationInfo } from "./functions/setConversationInfo.js";
import { listConversations } from "./functions/listUserConversations.js";
import { getUserInfo } from "./functions/getUserInfo.js";

const router = express.Router();

router.post("/set-user", async (req, res) => {
  setUserInfo(req, res);
});

router.post("/set-convo", async (req, res) => setConversationInfo(req, res));

router.get("/speech-token-object", async (req, res) => {
  getSpeechTokenObject(req, res);
});

router.get("/user-convo-info", async (req, res) => listConversations(req, res));

router.get("/user-info", async (req, res) => getUserInfo(req, res));

export { router };
