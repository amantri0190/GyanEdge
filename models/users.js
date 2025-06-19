import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date },
});

export const User =
  mongoose.models.User ||
  mongoose.model("User", userSchema, "LoginCredentials");
