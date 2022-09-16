"use strict";
exports.__esModule = true;
exports.ProductsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ProductsSchema = new mongoose_1["default"].Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    images: { type: Array, required: true },
    options: { type: Array, required: false }
});
