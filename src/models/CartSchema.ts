import mongoose from "mongoose";

export const CartSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  quantity: { type: String, required: true },
  product_id: { type: String, required: true },
  product: { type: String, required: true },
  unit_price: { type: String, required: true },
  total_price: { type: String, required: true },
  order_id: { type: String, required: true },
  status: { type: String, required: true },
});
