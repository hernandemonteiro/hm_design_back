"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.OrderSchema = new mongoose_1.default.Schema({
    user_id: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, required: true },
    order_id: { type: String, required: true }
});
