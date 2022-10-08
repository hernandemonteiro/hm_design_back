import mongoose from "mongoose";
import { ProductsSchema } from "../models/ProductsSchema";

export const ProductsRepository = mongoose.model("products", ProductsSchema);
