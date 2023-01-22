import { UserInfoModel } from "../../db/schema.js";

export const getUserInfo = async (req, res) => {
  try {
    const userInfo = await UserInfoModel.find({ uuid: req.body.userId });
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
