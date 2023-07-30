// userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: String, required: true },
  role: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },

  // Add other fields as needed
});

const User =
  mongoose.models.User || mongoose.model("User", userSchema, "users");

export default User;
