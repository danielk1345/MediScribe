import { ConvoInfoModel, UserInfoModel } from "../../db/schema.js";

export const setConversationInfo = async (req, res) => {
  const body = req.body;
  const data = new ConvoInfoModel({
    userId: body.userId,
    conversationInfo: body.conversationInfo,
    title: body.title,
    doctorName: body.doctorName,
    timestamp: Date.now(),
  });

  try {
    const dataToSave = await data.save();

    const userDoc = await UserInfoModel.findOne({ uuid: body.userId });
    userDoc.conversations.push(dataToSave._id);
    userDoc.save();

    res.status(200).json(dataToSave);
  } catch (error) {
    if (
      error.message.includes(
        "Cannot read properties of null (reading 'conversations')"
      )
    )
      res.status(400).json({ error: "user not found" });
    else res.status(400).json({ error: error.message });
  }
};
