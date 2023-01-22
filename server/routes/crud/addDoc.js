import { dbo } from "./connection";

export const addDoc = async (req, res) => {
  console.log("starting function");
  const db = dbo.connectToServer.getDb();
  const collection = db.collection("testCollections");
  const result = await collection.insertOne(req.body);
  console.log("result");
  return result;
};
