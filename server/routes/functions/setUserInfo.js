import { UserInfoModel } from "../../db/schema.js";

export const setUserInfo = async (req, res) => {
  try {
    console.log("req", req.params);
    const data = new UserInfoModel({
      name: req.params.name,
      uuid: req.params.uuid,
      conversations: [],
      timestamp: Timestamp.now(),
    });
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  return;
};
