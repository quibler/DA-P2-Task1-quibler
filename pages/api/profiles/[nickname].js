import dbConnect from "../../../lib/dbConnect";
import Profile from "../../../models/ProfileModel";

dbConnect();

export default async function handler(req, res) {
    const {
        query: { nickname },
        method
    } = req;

  switch (method) {
    case "GET":
      try {
        const profile = await getData();
        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedProfile = await Profile.deleteOne({ nickname: nickname });

        if (!deletedProfile) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
export async function getData() {
  const profiles = await Profile.find();
  return profiles;
}
