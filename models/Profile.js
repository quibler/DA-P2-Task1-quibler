import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  interests: [String],
  latest: String,
  experience: [{
    title: String,
    description: String
  }]
})

module.exports = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)