"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CartSchema_1 = require("../models/CartSchema");
exports.CartRepository = mongoose_1.default.model("Cart", CartSchema_1.CartSchema);
