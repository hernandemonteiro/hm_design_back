"use strict";
exports.__esModule = true;
exports.ForgotPasswordRepository = void 0;
var mongoose_1 = require("mongoose");
var ForgotPasswordSchema_1 = require("../models/ForgotPasswordSchema");
exports.ForgotPasswordRepository = mongoose_1["default"].model("ForgotPassword", ForgotPasswordSchema_1.ForgotPasswordSchema);
