"use strict";
exports.__esModule = true;
exports.CategoryRepository = void 0;
var mongoose_1 = require("mongoose");
var CategorySchema_1 = require("../models/CategorySchema");
exports.CategoryRepository = mongoose_1["default"].model("Category", CategorySchema_1.CategorySchema);
