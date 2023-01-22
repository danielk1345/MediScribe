import { UserInfoModel } from "../../db/schema.js";
import mongoose from "mongoose";

export const setUserInfo = async (req, res) => {
  try {
    const data = new UserInfoModel({
      name: req.body.name,
      uuid: req.body.uuid,
      conversations: [],
    });

    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  return;
};
