"use strict";
exports.__esModule = true;
exports.ForgotPasswordSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ForgotPasswordSchema = new mongoose_1["default"].Schema({
    hash: { type: String, required: true }
});
