"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StartUp_1 = __importDefault(require("./StartUp"));
let port = 5495;
StartUp_1.default.app.listen(port, function () {
    console.log("Starting up in port: " + port);
});
