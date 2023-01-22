import { UserInfoModel } from "../../db/schema.js";
import { newUser } from "./setUserInfo.js";

export const checkAccount = async (userId, name) => {
  const response = await UserInfoModel.find({ uuid: userId });
  if (response.length === 0) await newUser(name, userId);
};
