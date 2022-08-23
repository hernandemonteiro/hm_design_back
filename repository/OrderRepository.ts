import mongoose from "mongoose";
import { OrderSchema } from "../models/OrderSchema";

export const OrderRepository = mongoose.model("Order", OrderSchema);