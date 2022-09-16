import mongoose from "mongoose";

export const ProductsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: String, required: true },
  status: { type: String, required: true },
  options: { type: String, required: false },
});
