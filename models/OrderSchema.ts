import mongoose from "mongoose";

export const OrderSchema = new mongoose.Schema({
    orderId: {type: String, required: true},
    adress: {type: String, required: true}
})