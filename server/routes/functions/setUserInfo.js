import { UserInfoModel } from "../../db/schema.js";

export const setUserInfo = async (req, res) => {
  try {
    const dataToSave = await newUser(req.body.name, req.body.uuid);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  return;
};

export const newUser = async (name, uuid) => {
  const data = new UserInfoModel({
    name: name,
    uuid: uuid,
    conversations: [],
  });

  return await data.save();
};
