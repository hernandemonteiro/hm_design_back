import mongoose from "mongoose";

export const ForgotPasswordSchema = new mongoose.Schema({
  hash: { type: String, required: true },
});
