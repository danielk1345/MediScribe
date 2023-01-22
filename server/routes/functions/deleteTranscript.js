import { UserInfoModel, ConvoInfoModel } from "../../db/schema.js";

export const deleteTranscript = async (req, res) => {
  try {
    await ConvoInfoModel.find({ _id: req.body.transcriptId }).deleteMany();
    await UserInfoModel.find({ uuid: req.body.userId }).update({
      $pull: { conversations: req.body.transcriptId },
    });
    res.status(200).json({ response: "Transcript removed" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
