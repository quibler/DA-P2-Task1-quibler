import dbConnect from "../../../lib/dbConnect";
import Profile from "../../../models/ProfileModel";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const profile = await getData();
        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log("creating document");
        const profile = await Profile.create(req.body);
        console.log("document created!");
        res.status(201).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export async function getProfile(nick) {
  const profile = await Profile.findOne({ nickname: nick });
  return profile;
}

export async function getData() {
  const profiles = await Profile.find();
  // return profiles.reduce((obj, item) => {
  //   let key = item._id;
  //   obj[item[key]] = item;
  //   return obj;
  // }, {});
  return profiles;
}
