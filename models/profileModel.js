import { Schema, model, models } from "mongoose";

const profileSchema = new Schema({
  name: String,
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  interests: [String],
  latest: {
    title: String,
    description: String,
    img: String,
    url: String,
  },
  experience: [
    {
      title: String,
      description: String,
    },
  ],
});

module.exports = models.Profile || model("Profile", profileSchema);
