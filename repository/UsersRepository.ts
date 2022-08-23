import mongoose from "mongoose";
import { UsersSchema } from "../models/UserSchema";

export const UsersRepository = mongoose.model("Users", UsersSchema);
