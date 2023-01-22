import { userInfoBaseSchema } from "../../db/schema.js";
import mongoose from "mongoose";

export const setUserInfo = async (req, res) => {
  try {
    const curUserSchema = new mongoose.Schema(userInfoBaseSchema, {
      collection: req.body.uuid,
    });

    const UserInfoModel = mongoose.model("UserInfo", curUserSchema);
    const data = new UserInfoModel({
      name: req.body.name,
      conversations: [],
    });
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  return;
};
