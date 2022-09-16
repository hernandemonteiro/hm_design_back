"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CategorySchema_1 = require("../models/CategorySchema");
exports.CategoryRepository = mongoose_1.default.model("Category", CategorySchema_1.CategorySchema);
