import mongoose from "mongoose";
import { ForgotPasswordSchema } from "../models/ForgotPasswordSchema";

export const ForgotPasswordRepository = mongoose.model("ForgotPassword", ForgotPasswordSchema);
