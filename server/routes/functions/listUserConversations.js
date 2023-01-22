import { ConvoInfoModel, UserInfoModel } from "../../db/schema.js";

export const listConversations = async (req, res) => {
  try {
    const conversations = await getAllUserConvoInfo(req.body.userId);
    res.status(200).json({ conversations: conversations });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllUserConvoInfo = async (userId) => {
  if (userId === undefined || userId === null)
    throw new Error("no user specified");

  const userInfo = await UserInfoModel.find({ uuid: userId });

  const conversationIds = userInfo[0].conversations;

  const conversations = conversationIds.map(async (conversation) =>
    ConvoInfoModel.find({ _id: conversation })
  );

  return await Promise.all(conversations);
};
