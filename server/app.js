import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 5000;

const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
