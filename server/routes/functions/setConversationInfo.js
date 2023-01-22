import { ConvoInfoModel, UserInfoModel } from "../../db/schema.js";

export const setConversationInfo = async (req, res) => {
  const body = req.body;
  const data = new ConvoInfoModel({
    userId: body.userId,
    conversationInfo: body.conversationInfo,
    title: body.title,
    doctorName: body.doctorName,
  });

  try {
    const dataToSave = await data.save();
    const filter = { name: "Jean-Luc Picard" };
    const update = { age: 59 };

    // `doc` is the document _after_ `update` was applied because of
    // `new: true`
    let doc = await Character.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
