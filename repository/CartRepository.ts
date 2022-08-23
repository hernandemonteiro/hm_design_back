import mongoose from "mongoose";
import { CartSchema } from "../models/CartSchema";

export const CartRepository = mongoose.model("Cart", CartSchema);