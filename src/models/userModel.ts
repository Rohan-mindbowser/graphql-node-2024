import { Schema, model, connect } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
