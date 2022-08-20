"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductsSchema_1 = require("../models/ProductsSchema");
exports.ProductsRepository = mongoose_1.default.model("products", ProductsSchema_1.ProductsSchema);
