"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.CartSchema = new mongoose_1.default.Schema({
    userId: { type: String, required: true },
    quantity: { type: String, required: true },
    productId: { type: String, required: true },
    product: { type: String, required: true },
    unitPrice: { type: String, required: true },
    totalPrice: { type: String, required: true },
    order: { type: String, required: true },
    isOrdered: { type: Boolean, required: true },
});
