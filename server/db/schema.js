import mongoose from "mongoose";

const conversationInfoSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
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
    transcript: {
      required: true,
      type: String,
    },
  },
  { collection: "conversations" }
);

export const ConvoInfoModel = mongoose.model(
  "Conversations",
  conversationInfoSchema
);

const curUserSchema = new mongoose.Schema(
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
      type: Number,
    },
  },
  { collection: "user_info" }
);

export const UserInfoModel = mongoose.model("UserInfo", curUserSchema);
