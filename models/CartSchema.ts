import mongoose from "mongoose";

export const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  quantity: { type: String, required: true },
  productId: { type: String, required: true },
  product: { type: String, required: true },
  unitPrice: { type: String, required: true },
  totalPrice: { type: String, required: true },
  order: { type: String, required: true },
  isOrdered: { type: Boolean, required: true },
});
