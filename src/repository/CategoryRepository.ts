import mongoose from "mongoose";
import { CategorySchema } from "../models/CategorySchema";

export const CategoryRepository = mongoose.model("Category", CategorySchema);
