import { Schema, model, models } from "mongoose";

const profileSchema = new Schema({
  name: {
    type: String,
    default: "Anon",
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  interests: {
    type: [String],
    required: true,
  },
  latest: {
    title: {
      type: String,
      default: "Comming soon!",
    },
    description: {
      type: String,
      default: "Comming soon!",
    },
    img: String,
    url: {
      type: String,
      default: "",
    },
  },
  experience: [
    {
      title: String,
      description: String,
    },
  ],
});

module.exports = models.Profile || model("Profile", profileSchema);
