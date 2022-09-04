import mongoose from "mongoose";

export const OrderSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, required: true },
  order_id: { type: String, required: true }
});
