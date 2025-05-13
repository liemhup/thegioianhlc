const mongoose = require("mongoose");

const { Schema } = mongoose;

// Project Schema
const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }], // Array of image URLs
  tags: [{ type: String }], // Array of tags
  team: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
      role: { type: String, required: true }, // Role in the project
    },
  ],
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }], // Array of user IDs who liked
  comments: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
      text: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = { Project };
