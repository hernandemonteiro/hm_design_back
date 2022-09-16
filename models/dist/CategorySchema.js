"use strict";
exports.__esModule = true;
exports.CategorySchema = void 0;
var mongoose_1 = require("mongoose");
exports.CategorySchema = new mongoose_1["default"].Schema({
    category: { type: String, required: true }
});
