import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
});

export const Model = mongoose.model("Data", dataSchema);

const conversationInfoSchema = new mongoose.Schema(
  {
    uuid: {
      required: true,
      type: String,
    },
    conversationInfo: {
      require: true,
      type: String,
    },
    timestamp: {
      require: true,
      type: Date,
    },
    title: {
      required: true,
      type: String,
    },
    doctorName: {
      required: false,
      type: String,
    },
  },
  { collection: "conversations" }
);

export const ConvoInfoModel = mongoose.model(
  "Conversations",
  conversationInfoSchema
);

const userInfoSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    uuid: {
      required: true,
      type: String,
    },
    conversations: {
      require: true,
      type: Array,
    },
    timestamp: {
      require: true,
      type: Date,
    },
  },
  { collection: "userInfo" }
);

export const UserInfoModel = mongoose.model("UserInfo", userInfoSchema);
