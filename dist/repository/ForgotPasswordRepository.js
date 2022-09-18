"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ForgotPasswordSchema_1 = require("../models/ForgotPasswordSchema");
exports.ForgotPasswordRepository = mongoose_1.default.model("ForgotPassword", ForgotPasswordSchema_1.ForgotPasswordSchema);
