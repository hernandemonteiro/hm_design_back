import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
});
