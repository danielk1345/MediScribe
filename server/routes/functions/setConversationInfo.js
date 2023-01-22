import { Model, ConvoInfoModel } from "../../db/schema.js";

export const setConversationInfo = async () => {
  const data = new ConvoInfoModel({
    name: "rand_name", //req.body.name,
    age: 9090, // req.body.age,
  });

  try {
    console.log("data", data);
    const dataToSave = await data.save();
    console.log("dataToSave", dataToSave);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
