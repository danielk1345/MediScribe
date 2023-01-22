import { ConvoInfoModel, UserInfoModel } from "../../db/schema.js";

// not at all implemented
export const listConversations = async (req, res) => {
  const body = req.body;

  try {
    const userDoc = await UserInfoModel.findOne({ uuid: body.userId });

    res.status(200).json(userDoc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
