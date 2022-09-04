"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema_1 = require("../models/UserSchema");
exports.UsersRepository = mongoose_1.default.model("Users", UserSchema_1.UsersSchema);
