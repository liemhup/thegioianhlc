const mongoose = require("mongoose");

const { Schema } = mongoose;

// Project Schema

// User Schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  avatar: { type: String },
  role: { type: String, required: true }, // Role of the user
  skills: [{ type: String }], // Array of skills
  location: { type: String },
  socialLinks: {
    instagram: { type: String },
    behance: { type: String },
  },
  followedBy: [{ type: Schema.Types.ObjectId, ref: "User" }], // Array of user IDs who follow
});

const Project = mongoose.model("Project", ProjectSchema);
const User = mongoose.model("User", UserSchema);

module.exports = { User };
