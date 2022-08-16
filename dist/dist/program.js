"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StartUp_1 = __importDefault(require("./StartUp"));
StartUp_1.default.app.listen(5000, function () {
    console.log("Starting up in port 5000...");
});
