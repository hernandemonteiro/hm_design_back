"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ForgotPasswordController_1 = __importDefault(require("../controllers/ForgotPasswordController"));
const forgotPasswordRouter = (0, express_1.default)();
forgotPasswordRouter.route("/forgotPassword/:email").post((req, res) => {
    return ForgotPasswordController_1.default.forgotPassword(req, res);
});
forgotPasswordRouter.route("/confirmHash/:hash").get((req, res) => {
    return ForgotPasswordController_1.default.confirmHash(req, res);
});
forgotPasswordRouter.route("/updatePassword/:hash/:password").put((req, res) => {
    return ForgotPasswordController_1.default.updatePassword(req, res);
});
exports.default = forgotPasswordRouter;
